/* global jQuery */
(function ($) {
  class Cascader {
    constructor(element, options) {
      this.options = options;
      if (options.search) this.getLabelList();
      this.CLASS = Cascader.CLASS;
      this.$element = $(element);
      this.$element_ = this.$element.clone();
      this.init();
      this.removed = "removed";
    }

    init() {
      this._construct();
      this._event();
    }

    _construct() {
      this.$container = this.$element
        .wrap(`<div class="${this.CLASS.wrap}"></div>`)
        .wrap(`<div class="${this.CLASS.inputwrap} inputContainer"></div>`)
        .addClass(this.CLASS.input)
        .prop("readonly", !this.options.search)
        .closest("." + this.CLASS.wrap);

      this.$inputContainer = this.$element.parent(".inputContainer");

      this.$arrow = $(`
        <span class="${this.CLASS.iconWrap}">
          <span class="${this.CLASS.iconInnerWrap}">
            <i class="fas fa-angle-down input__downs-arrow"></i>
          </span>
        </span>
      `).insertAfter(this.$element);
      this.$span = $(`
        <span class="${this.CLASS.iconWrap + " " + this.CLASS.displayNone} ">
          <span class="${this.CLASS.iconInnerWrap}">
            <i class="fas fa-times-circle"></i>
          </span>
        </span>
      `).insertAfter(this.$element);
      this.$dropdownWrap = $(`<div class="${this.CLASS.dropdownPanel}"></div>`)
        .appendTo(this.$container)
        .wrap(`<div class="${this.CLASS.dropdownWrap}"></div>`);

      this.reload(null, true);
    }

    _event() {
      this.$container.on("click.wrap", $.proxy(this._wrapClick, this));
      this.$container.on(
        "mousedown",
        $.proxy((event) => {
          this.$element.focus();
          event.stopPropagation();
        }, this)
      );

      $(document).on("mouseup.cascader", () => {
        this.$container.removeClass(this.CLASS.checkClass.wrapFocus);
        if (this.$container.hasClass(this.CLASS.checkClass.notData)) {
          this.reload(null, false);
        }
      });

      this.$container.on(
        "click.item",
        "." + this.CLASS.menuNode,
        $.proxy(this._nodeClick, this)
      );

      this.$element.on("keyup.wrap", $.proxy(this._keyup, this));

      this.$element.on("input", () => {
        this.search(this.$element.val());
      });
      this.$inputContainer.hover(
        () => {
          if (this.$element.val() || this.$element.val() !== "") {
            this.changeDeleteIcon();
          }
        },
        () => {
          if (this.$element.val() || this.$element.val() !== "") {
            this.changeArrowIcon();
          }
        }
      );
    }

    _wrapClick() {
      this.$element.focus();
      if (!this.$container.hasClass(this.CLASS.checkClass.wrapFocus)) {
        this.$container.addClass(this.CLASS.checkClass.wrapFocus);
      }
      this.$dropdownWrap
        .find("li." + this.CLASS.checkClass.nodeAnchor)
        .removeClass(this.CLASS.checkClass.nodeAnchor);
      this.$dropdownWrap
        .find(this.CLASS.menuList)
        .eq(0)
        .find("li." + this.CLASS.checkClass.menuNodeSelected)
        .addClass(this.CLASS.checkClass.nodeAnchor);
    }

    _nodeClick(event) {
      const $that = event.currentTarget ? $(event.currentTarget) : $(event);
      const $wrap = $that.closest("." + this.CLASS.menuWrap);
      $that
        .addClass(this.CLASS.checkClass.menuNodeSelected)
        .siblings()
        .removeClass(this.CLASS.checkClass.menuNodeSelected);
      let data = $that.data("bindData");
      if (!data.children) {
        $wrap.nextAll().remove();
        const prevWrap = $wrap.prevAll();
        let value = data.label;
        const allPathData = [data];
        $.each(prevWrap, (i, m) => {
          const selectedData = $(m)
            .find("li." + this.CLASS.checkClass.menuNodeSelected)
            .data("bindData");
          value = selectedData.label + this.options.range + value;
          allPathData.push(selectedData);
        });
        this.$element.val(value).focus();
        this.$container.removeClass(this.CLASS.checkClass.wrapFocus);
        this.$element.data("bindData", data);
        this.$element.data("bindPathData", allPathData);
        if (
          this.options.onChange &&
          typeof this.options.onChange === "function"
        )
          this.options.onChange(this, data, allPathData);
        event.stopPropagation();
        this.$element.blur();
      } else this._loadChildren($that);
    }

    _loadChildren($parentNode) {
      this.$element.focus();
      $parentNode
        .addClass(this.CLASS.checkClass.menuNodeSelected)
        .siblings()
        .removeClass(this.CLASS.checkClass.menuNodeSelected);
      const $wrap = $parentNode.closest("." + this.CLASS.menuWrap);
      const data = $parentNode.data("bindData");
      this.$dropdownWrap
        .find("li." + this.CLASS.checkClass.nodeAnchor)
        .removeClass(this.CLASS.checkClass.nodeAnchor);
      $parentNode.addClass(this.CLASS.checkClass.nodeAnchor);
      if (!data.children) {
        $wrap.nextAll().remove();
        return;
      }
      let selectedId = [];
      const pathData = this.$element.data("bindPathData");
      if (pathData && pathData.length > 0) {
        selectedId = $.map(pathData, (m) => {
          return m.value;
        });
      }
      let $nextWrap = $wrap.next();
      if (!$nextWrap || $nextWrap.length === 0) {
        $nextWrap = $(`<div class="scrollbar ${this.CLASS.menuWrap}">
                                            <div class="cascader-menu__wrap scrollbar__wrap">
                                                <ul class="${this.CLASS.menuList}">
                                                </ul>
                                            </div>
                                        </div>`);
        $nextWrap = $nextWrap.appendTo(this.$dropdownWrap);
      }
      $nextWrap.nextAll().remove();
      const $ul = $nextWrap.find("." + this.CLASS.menuList).empty();
      $.each(data.children, (i, m) => {
        const $li = $(`<li class="${this.CLASS.menuNode}"></li>`);
        const $label = $(
          `<span class="${this.CLASS.menuNodeLabel}">${
            m.styled_label || m.label
          }</span>`
        );
        const $icon = $('<i class="fas fa-angle-right"></i>');
        $li.append($label).data("bindData", m);
        if (m.children && m.children.length > 0) $li.append($icon);
        else if (selectedId.indexOf(m.value) >= 0) {
          $li.addClass(this.CLASS.checkClass.menuNodeSelected);
        }
        $li.appendTo($ul);
      });
    }

    changeDeleteIcon() {
      this.$arrow.addClass(this.CLASS.displayNone);
      this.$span.removeClass(this.CLASS.displayNone);

      this.$span.on("click", () => {
        this.deleteInputValue();
      });
    }
    changeArrowIcon() {
      this.$arrow.removeClass(this.CLASS.displayNone);
      this.$span.addClass(this.CLASS.displayNone);
    }

    deleteInputValue() {
      this.reload(null, false);
      this.$container.removeClass(this.CLASS.checkClass.wrapFocus);
      this.changeArrowIcon();
    }

    getLabelList() {
      const datas = [];
      const traverse = (node, pathLabels = [], pathValues = []) => {
        if (node.children && node.children.length > 0) {
          node.children.forEach((child) => {
            traverse(
              child,
              [...pathLabels, node.label],
              [...pathValues, node.value]
            );
          });
        } else {
          datas.push({
            label: pathLabels.concat(node.label).join(" / "),
            labels: pathLabels.concat(node.label),
            value: pathValues.concat(node.value)
          });
        }
      };

      this.options.data.forEach((entry) => {
        traverse(entry);
      });
      this.labelList = datas;
    }

    search(keyword) {
      if (keyword) keyword = keyword.trim();
      if (!keyword) {
        this.options.keyword = keyword;
        this.reload(null, true);
        return;
      }
      const keywords = keyword.split(/\s*\/\s*|\s+/);
      const data = this.labelList.filter((item) => {
        return keywords.every((keyword) => {
          let normalizedKeyword = keyword
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

          return item.labels.some((label) => {
            let normalizedLabel = label
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase();
            return normalizedLabel.includes(normalizedKeyword);
          });
        });
      });
      this.reload(data, true);
    }

    reload(data, search) {
      data = data || this.options.data;
      if (data.length === 0) {
        this.$container.addClass(this.CLASS.checkClass.notData);
      } else {
        this.$container.removeClass(this.CLASS.checkClass.notData);
      }
      this.$element.removeData("bindData").removeData("bindPathData");
      if (!search) this.$element.val("");
      this.$dropdownWrap.empty();
      const $firstWrap = $(`<div class="scrollbar ${this.CLASS.menuWrap}">
                                            <div class="cascader-menu__wrap scrollbar__wrap">
                                                <ul class="${this.CLASS.menuList}">
                                                </ul>
                                            </div>
                                        </div>`);
      const $ul = $firstWrap.find("." + this.CLASS.menuList);
      $.each(data, (i, m) => {
        const $li = $(`<li class="${this.CLASS.menuNode}"></li>`);
        const $label = $(
          `<span class="${this.CLASS.menuNodeLabel}">${
            m.styled_label || m.label
          }</span>`
        );
        const $icon = $('<i class="fas fa-angle-right"></i>');
        $li.append($label).data("bindData", m);
        if (m.children && m.children.length > 0) $li.append($icon);
        $ul.append($li);
      });
      this.$dropdownWrap
        .find("li." + this.CLASS.checkClass.nodeAnchor)
        .removeClass(this.CLASS.checkClass.nodeAnchor);
      this.$dropdownWrap
        .append($firstWrap)
        .find(this.CLASS.menuNode)
        .eq(0)
        .focus()
        .addClass(this.CLASS.checkClass.nodeAnchor);
    }
  }

  Cascader.CLASS = {
    wrap: "cascader-wrap",
    inputwrap: "input input--suffix",
    input: "input__inner",
    iconWrap: "input__suffix",
    iconInnerWrap: "input__suffix-inner",
    dropdownWrap: "cascader__dropdown",
    dropdownPanel: "cascader-panel",
    menuWrap: "cascader-menu",
    menuList: "cascader-menu__list",
    menuNode: "cascader-node",
    menuNodeLabel: "cascader-node__label",
    menuNodePostfix: "cascader-node__postfix",
    displayNone: "display-none",
    checkClass: {
      wrapFocus: "is-focus",
      menuNodeSelected: "in-active-path",
      nodeAnchor: "is-prepare",
      notData: "not-data"
    }
  };

  Cascader.DEFAULTS = {
    data: null,
    range: " / ",
    onChange: function (data) {}
  };

  Cascader.METHODS = ["reload"];

  $.fn.Cascader = function (option) {
    let $this = $(this);
    let options = $.extend(
      {},
      Cascader.DEFAULTS,
      $this.data(),
      typeof option === "object" && option
    );

    if (!$this.data("Cascader")) {
      $this.data("Cascader", new Cascader(this, options));
    }

    return this;
  };
})(jQuery);
