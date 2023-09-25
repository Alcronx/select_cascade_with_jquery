/* global bootstrap */
/* global $ */
import { data, risk_level, data2, data3 } from "./data.js";

function initializeDropdowns() {
  const CLASS_NAME = "has-child-dropdown-show";

  bootstrap.Dropdown.prototype.toggle = (function (_orginal) {
    return function () {
      document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
        e.classList.remove(CLASS_NAME);
      });
      let dd = this._element
        .closest(".dropdown")
        .parentNode.closest(".dropdown");
      for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
        dd.classList.add(CLASS_NAME);
      }
      return _orginal.call(this);
    };
  })(bootstrap.Dropdown.prototype.toggle);

  document.querySelectorAll(".dropdown").forEach(function (dd) {
    dd.addEventListener("hide.bs.dropdown", function (e) {
      if (this.classList.contains(CLASS_NAME)) {
        this.classList.remove(CLASS_NAME);
        e.preventDefault();
      }
      e.stopPropagation(); // do not need pop in multi level mode
    });
  });

  // for hover
  document
    .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
    .forEach(function (dd) {
      dd.addEventListener("mouseenter", function (e) {
        let toggle = e.target.querySelector(
          ':scope>[data-bs-toggle="dropdown"]'
        );
        if (!toggle.classList.contains("show")) {
          bootstrap.Dropdown.getOrCreateInstance(toggle).toggle();
          dd.classList.add(CLASS_NAME);
          bootstrap.Dropdown.clearMenus();
        }
      });
      dd.addEventListener("mouseleave", function (e) {
        let toggle = e.target.querySelector(
          ':scope>[data-bs-toggle="dropdown"]'
        );
        if (toggle.classList.contains("show")) {
          bootstrap.Dropdown.getOrCreateInstance(toggle).toggle();
        }
      });
    });
}

function generateDropdownHTML() {
  let html = "";

  data.forEach((item) => {
    html += `<div class="dropdown dropend">`;
    html += `<a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">${item.general_cause}</a>`;
    html += `<div class="dropdown-menu">`;

    item.specific_causes.forEach((cause) => {
      html += `<div class="dropdown dropend">`;
      html += `<a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">${cause}</a>`;
      html += `<div class="dropdown-menu">`;

      risk_level.forEach((subcategory) => {
        html += `<a class="dropdown-item" href="#">${subcategory}</a>`;
      });

      html += `</div></div>`;
    });

    html += `</div></div>`;
  });

  return html;
}

const dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.innerHTML = generateDropdownHTML();
initializeDropdowns();

// initialize
$("#test").Cascader({
  data: data2,
  search: true,
  container: "#test",
  onChange: function (value, label, datas) {
    //console.log(value, label, datas);
  }
});

$("#test2").Cascader({
  data: data3,
  container: "#test2",
  search: true,
  onChange: function (value, label, datas) {
    //console.log(value, label, datas);
  }
});
