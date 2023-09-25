export const risk_level = ["R1", "R2", "R3", "R4"];

export const data = [
  {
    general_cause: "Trauma",
    specific_causes: [
      "Mordedura de animal",
      "Agresión",
      "Accidentes",
      "Quemaduras",
      "Caída de altura",
      "Accidente de tránsito",
      "Dolor abdominal",
      "Reacción alérgica"
    ]
  },
  {
    general_cause: "Causa Médica",
    specific_causes: [
      "Dolor abdominal",
      "Reacción alérgica",
      "Problema respiratorio",
      "Intoxicación",
      "Alteración emocional/Ideación suicida",
      "Convulsiones"
    ]
  },
  {
    general_cause: "Tiempo Dependiente",
    specific_causes: [
      "PCR",
      "Ahogamiento",
      "Dolor anginoso",
      "ACV",
      "Alteración de la consciencia"
    ]
  },
  {
    general_cause: "Incidentes Especiales",
    specific_causes: ["MATPEL", "Infectocontagioso"]
  }
];

export const data2 = [
  {
    label: "Trauma",
    value: "0",
    children: [
      {
        label: "Mordedura animal",
        value: "00",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "000",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0000"
              },
              {
                label: "Sangramiento incontrolable",
                value: "0001"
              },
              {
                label: "Dificultad respiratoria severa",
                value: "0002"
              },
              {
                label: "Mordedura en cuello y cara con compromiso vía aérea",
                value: "0003"
              },
              {
                label: "Signos de shock",
                value: "0004"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "001",
            children: [
              {
                label: "Mordedura cuello o cara con sangramiento contenido",
                value: "0010"
              },
              {
                label: "Dificultad respiratoria",
                value: "0011"
              },
              {
                label: "Información no verificable",
                value: "0012"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "002",
            children: [
              {
                label:
                  "Morderura en tórax, abdomen, zona genital con sangramiento contenido",
                value: "0020"
              },
              {
                label:
                  "Mordedura con compromiso de partes blandas con sangramiento controlado",
                value: "0021"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "003",
            children: [
              {
                label: "Mordedura con sangramiento mínimo",
                value: "0030"
              }
            ]
          }
        ]
      },
      {
        label: "Agresión",
        value: "01",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "010",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0100"
              },
              {
                label: "Empalamiento",
                value: "0101"
              },
              {
                label:
                  "Lesión en cráneo (alteración de consciencia/convulsiones)",
                value: "0102"
              },
              {
                label: "Lesión por arma de fuego o blanca penetrante",
                value: "0103"
              },
              {
                label: "Sangramiento incontrolable",
                value: "0104"
              },
              {
                label: "Dificultad severa para respirar",
                value: "0105"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "011",
            children: [
              {
                label: "Múltiples fracturas de extremidades",
                value: "0110"
              },
              {
                label: "Compromiso de consciencia recuperado",
                value: "0111"
              },
              {
                label: "Cortes o laceraciones con sangramiento controlado",
                value: "0112"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "012",
            children: [
              {
                label: "Fracturas de extremidad, mano o dedos",
                value: "0120"
              },
              {
                label: "Heridas contusas en cabeza, cuello y tórax",
                value: "0121"
              },
              {
                label: "Dolor torácico con tope inspiratorio",
                value: "0122"
              },
              {
                label: "Información poco clara o no verificable",
                value: "0123"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "013",
            children: [
              {
                label: "Malestar no especificado",
                value: "0130"
              },
              {
                label: "Heridas superficiales con o sin sangramiento",
                value: "0131"
              }
            ]
          }
        ]
      },
      {
        label: "Accidentes",
        value: "02",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "020",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0200"
              },
              {
                label: "Dificultad respiratoria severa",
                value: "0201"
              },
              {
                label: "Signos de shock",
                value: "0202"
              },
              {
                label: "Fractura de huesos largos bilateral",
                value: "0203"
              },
              {
                label: "Atrapamiento tórax / pelvis",
                value: "0204"
              },
              {
                label: "Sangramiento incontrolable",
                value: "0205"
              },
              {
                label: "Trauma con alteración neurológica",
                value: "0206"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "021",
            children: [
              {
                label: "Alteración de consciencia parcialmente recuperada",
                value: "0210"
              },
              {
                label:
                  "Caída a nivel asociada a dolor torácico, cefalea intensa o convulsión",
                value: "0211"
              },
              {
                label: "Dificultad respiratoria moderada",
                value: "0212"
              },
              {
                label:
                  "Laceraciones o cortes mayores con sangramiento controlado",
                value: "0213"
              },
              {
                label: "Fractura de fémur",
                value: "0214"
              },
              {
                label: "Atrapamiento extremidades",
                value: "0215"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "022",
            children: [
              {
                label: "Fractura extremidad única",
                value: "0220"
              },
              {
                label:
                  "Lesiones contusas de cabeza, cuello y tórax con dolor moderado",
                value: "0221"
              },
              {
                label: "Dolor espalda que no permite deambular",
                value: "0222"
              },
              {
                label: "Fractura o luxación de articulación",
                value: "0223"
              },
              {
                label: "Accidente cortopunzante",
                value: "0224"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "023",
            children: [
              {
                label: "Laceraciones o contusiones menores",
                value: "0230"
              },
              {
                label: "Contusiones, paciente deambulando",
                value: "0231"
              }
            ]
          }
        ]
      },
      {
        label: "Quemaduras",
        value: "03",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "030",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0300"
              },
              {
                label: "Dificultad respiratoria",
                value: "0301"
              },
              {
                label:
                  "Quemadura en cara, nariz, boca o cuello con estridor, ronquera, dolor al tragar",
                value: "0302"
              },
              {
                label: "Quemadura >30% SCQ",
                value: "0303"
              },
              {
                label: "Quemadura eléctrica por corriente de alta energía",
                value: "0304"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "031",
            children: [
              {
                label: "Quemaduras por explosión menor",
                value: "0310"
              },
              {
                label: "Quemadura sobre 15% SCQ y menor al 30% SCQ",
                value: "0311"
              },
              {
                label: "Quemadura en manos, pies y genitales",
                value: "0312"
              },
              {
                label: "Quemadura química en ojos",
                value: "0313"
              },
              {
                label: "Disnea leve",
                value: "0314"
              },
              {
                label: "Información no verificable",
                value: "0315"
              },
              {
                label: "Electrocución corriente domiciliaria",
                value: "0316"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "032",
            children: [
              {
                label: "Quemadura domiciliaria con entrada y salida",
                value: "0320"
              },
              {
                label: "Quemadura por agua caliente en cuello y tórax",
                value: "0321"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "033",
            children: [
              {
                label: "Quemadura domiciliaria menor",
                value: "0330"
              },
              {
                label: "Quemadura solar",
                value: "0331"
              },
              {
                label: "Quemadura por frío",
                value: "0332"
              },
              {
                label:
                  "Quemadura en primer grado sin compromiso de cara, cuello y tórax",
                value: "0333"
              }
            ]
          }
        ]
      },
      {
        label: "Caída de altura",
        value: "04",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "040",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0400"
              },
              {
                label: "Dificultad respiratoria",
                value: "0401"
              },
              {
                label: "Caída superior a 3 pisos (6 metros)",
                value: "0402"
              },
              {
                label: "Fracturas de huesos largos bilateral",
                value: "0403"
              },
              {
                label: "Sangramiento incontrolable",
                value: "0404"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "041",
            children: [
              {
                label: "Alteración de consciencia parcialmente recuperada",
                value: "0410"
              },
              {
                label: "Caída asociada a dolor torácico, cefalea o convulsión",
                value: "0411"
              },
              {
                label: "Dificultad respiratoria moderada",
                value: "0412"
              },
              {
                label:
                  "Laceraciones o cortes mayores con sangramiento controlado",
                value: "0413"
              },
              {
                label: "Fractura de fémur única",
                value: "0414"
              },
              {
                label: "Caída superior a 3 metros",
                value: "0415"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "042",
            children: [
              {
                label: "Caída superior a 2 metros",
                value: "0420"
              },
              {
                label: "Fractura de extremidades (única)",
                value: "0421"
              },
              {
                label:
                  "Lesiones contusas de cabeza, cuello y tórax con dolor moderado",
                value: "0422"
              },
              {
                label: "Fractura o luxación de mano, tobillo y dedos",
                value: "0423"
              },
              {
                label: "Heridas con sangramiento autolimitado",
                value: "0424"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "043",
            children: [
              {
                label: "Caídas menor a 1 metro",
                value: "0430"
              },
              {
                label: "Laceraciones o contusiones menores",
                value: "0431"
              },
              {
                label: "Contusiones paciente caminando",
                value: "0432"
              }
            ]
          }
        ]
      },
      {
        label: "Accidente de tránsito",
        value: "05",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "050",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "0500"
              },
              {
                label: "No responde al hablar o tocar",
                value: "0501"
              },
              {
                label: "Dificultad respiratoria severa",
                value: "0502"
              },
              {
                label:
                  "Colisión sobre 60 km/hr frontal o contra objeto inamovible",
                value: "0503"
              },
              {
                label: "Persona eyectada",
                value: "0504"
              },
              {
                label: "Paciente atrapado",
                value: "0505"
              },
              {
                label: "Peatón o ciclista atropellado inconsciente",
                value: "0506"
              },
              {
                label: "Paciente atrapado bajo vehículo",
                value: "0507"
              },
              {
                label: "Fallecidos en lugar",
                value: "0508"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "051",
            children: [
              {
                label: "Paciente atropellado",
                value: "0510"
              },
              {
                label:
                  "Colisión sobre 60 km/hr sin criterios evidentes de severidad",
                value: "0511"
              },
              {
                label: "Volcamiento",
                value: "0512"
              },
              {
                label: "Paciente con fractura de extremidades",
                value: "0513"
              },
              {
                label: "Información poco clara",
                value: "0514"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "052",
            children: [
              {
                label: "Colisión menor a 60 km/hr",
                value: "0520"
              },
              {
                label:
                  "Información poco clara, pero de ocurrencia en carretera",
                value: "0521"
              },
              {
                label: "Paciente con lesiones menores",
                value: "0522"
              },
              {
                label: "Dolores no especificado",
                value: "0523"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "053",
            children: [
              {
                label: "Colisión de baja energía",
                value: "0530"
              },
              {
                label: "Paciente deambulando",
                value: "0531"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Causa medica",
    value: "1",
    children: [
      {
        label: "Dolor abdominal",
        value: "10",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "100",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "1000"
              },
              {
                label: "Síncope",
                value: "1001"
              },
              {
                label: "Vómito con sangre roja",
                value: "1002"
              },
              {
                label: "Palidez, sudoración intensa",
                value: "1003"
              },
              {
                label: "Deposiciones con sangre roja o deposiciones negras",
                value: "1004"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "101",
            children: [
              {
                label: "Dolor intenso con vómitos",
                value: "1010"
              },
              {
                label: "Dolor intenso sin signos de shock",
                value: "1011"
              },
              {
                label: "Dolor tipo cólico en fosa renal o lumbar",
                value: "1012"
              },
              {
                label: "Información no verificable o poco clara",
                value: "1013"
              },
              {
                label:
                  "Dolor epigástrico en mayores de 50 años, mujeres mayor a 45 y diabético conocido",
                value: "1014"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "102",
            children: [
              {
                label: "Lesión en ingle",
                value: "1020"
              },
              {
                label:
                  "Dolor en ingle, de espalda o lumbar sin incapacidad de deambulación",
                value: "1021"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "103",
            children: [
              {
                label: "Malestar no especificado",
                value: "1030"
              },
              {
                label: "Dolor espalda crónico ambulatorio",
                value: "1031"
              },
              {
                label: "Dolor lateral ambulatorio",
                value: "1032"
              },
              {
                label: "Dolor de ingle ambulatorio",
                value: "1033"
              },
              {
                label: "Dolor de espalda por lesión que puede caminar",
                value: "1034"
              },
              {
                label: "Problema de catéter urinario permanente",
                value: "1035"
              }
            ]
          }
        ]
      },
      {
        label: "Reacción alérgica",
        value: "11",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "110",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "1100"
              },
              {
                label: "Habla con dificultad",
                value: "1101"
              },
              {
                label: "Sibilancias o estridor laringeo audibles a distancia",
                value: "1102"
              },
              {
                label: "Hinchazón de lengua o dificultad para tragar",
                value: "1103"
              },
              {
                label: "Alteración de consciencia",
                value: "1104"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "111",
            children: [
              {
                label: "Historia de reacción anafiláctica",
                value: "1110"
              },
              {
                label: "Información poco clara o no verificable",
                value: "1111"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "112",
            children: [
              {
                label:
                  "Reacción ocurrida por más de 30 min pero sin dificultad respiratoria",
                value: "1120"
              },
              {
                label: "Rush en cara, tórax y extremidades",
                value: "1121"
              },
              {
                label: "Vómitos profusos",
                value: "1122"
              },
              {
                label: "Náuseas",
                value: "1123"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "113",
            children: [
              {
                label: "Presencia de rash menor",
                value: "1130"
              },
              {
                label: "Náuseas o vómitos leves",
                value: "1131"
              }
            ]
          }
        ]
      },
      {
        label: "Problema respiratorio",
        value: "12",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "120",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "1200"
              },
              {
                label:
                  "Dificultad respiratoria severa (no habla con normalidad / cianosis)",
                value: "1201"
              },
              {
                label: "Estridor y/o sibilancias audibles a distancia",
                value: "1202"
              },
              {
                label: "Diaforesis intensa",
                value: "1203"
              },
              {
                label: "Palidez",
                value: "1204"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "121",
            children: [
              {
                label: "Dificultad respiratoria",
                value: "1210"
              },
              {
                label: "Dolor al respirar",
                value: "1211"
              },
              {
                label: "FR >30 por min.",
                value: "1212"
              },
              {
                label: "Oxígeno domiciliario agotado",
                value: "1213"
              },
              {
                label: "Inicio de cuadro súbito",
                value: "1214"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "122",
            children: [
              {
                label: "Respiración rápida <30 por min.",
                value: "1220"
              },
              {
                label:
                  "Cuadro de 24 horas de evolución, sin cianosis ni diaforesis asociada",
                value: "1221"
              },
              {
                label: "Información poco clara",
                value: "1222"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "123",
            children: [
              {
                label: "Cuadro de 48 horas de evolución",
                value: "1230"
              }
            ]
          }
        ]
      },
      {
        label: "Intoxicación",
        value: "13",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "130",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "1300"
              },
              {
                label: "Dificultad respiratoria (habla con dificultad)",
                value: "1301"
              },
              {
                label: "Alteración de consciencia (responde solo al dolor)",
                value: "1302"
              },
              {
                label: "Quemadura en cara, cuello y tórax",
                value: "1303"
              },
              {
                label: "Tóxicos con criterio médico severo",
                value: "1304"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "131",
            children: [
              {
                label:
                  "Productos químicos (ingeridos, inhalados o salpicados), sin criterio médico severo",
                value: "1310"
              },
              {
                label: "Paciente con temblores incontrolables",
                value: "1311"
              },
              {
                label: "Paciente excesivamente caliente",
                value: "1312"
              },
              {
                label: "Otras lesiones",
                value: "1313"
              },
              {
                label:
                  "No hay información verificable o disponible con claridad",
                value: "1314"
              },
              {
                label: "Dificultad para respirar (disnea moderada)",
                value: "1315"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "132",
            children: [
              {
                label: "Exposición directa al tóxico",
                value: "1320"
              },
              {
                label: "Cefalea intensa, náuseas y vómitos",
                value: "1321"
              },
              {
                label: "Más de una persona involucrada",
                value: "1322"
              },
              {
                label: "Intoxicación de origen alimentario",
                value: "1323"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "133",
            children: [
              {
                label: "Exposición no directa, sin síntomas o signos",
                value: "1330"
              }
            ]
          }
        ]
      },
      {
        label: "Alteración emocional/Ideación suicida",
        value: "14",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "140",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "1400"
              },
              {
                label:
                  "Intento suicida con lesión auto infligida, penetrante, cortante o intento de ahorcamiento",
                value: "1401"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "141",
            children: [
              {
                label: "Ideación suicida con comportamiento inusual",
                value: "1410"
              },
              {
                label:
                  "Antecedentes de patología psiquiátrica con ideación suicida",
                value: "1411"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "142",
            children: [
              {
                label: "Crisis de pánico con o sin historia previa",
                value: "1420"
              },
              {
                label: "Información poco clara o no verificable",
                value: "1421"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "143",
            children: [
              {
                label:
                  "Pacientes con antecedentes psiquiátricos que descontinúan tratamiento",
                value: "1430"
              }
            ]
          }
        ]
      },
      {
        label: "Convulsiones",
        value: "15",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "150",
            children: [
              {
                label: "Convulsión mayor a 5 min.",
                value: "1500"
              },
              {
                label: "Sin respiración post convulsión",
                value: "1501"
              },
              {
                label: "Múltiples convulsiones (status)",
                value: "1502"
              },
              {
                label: "Cefalea intensa post convulsión",
                value: "1503"
              },
              {
                label: "Antecedentes de diabetes",
                value: "1504"
              },
              {
                label: "Embarazada >20 sem.",
                value: "1505"
              },
              {
                label: "Secundario a alcohol y/o drogas",
                value: "1506"
              },
              {
                label: "Secundario a lesión de cabeza en las últimas 24 horas",
                value: "1507"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "151",
            children: [
              {
                label: "Convulsión única que cede a los 3 min",
                value: "1510"
              },
              {
                label: "Convulsiones con antecedentes de trastorno convulsivo",
                value: "1511"
              },
              {
                label: "Sin información o no verificable",
                value: "1512"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "152",
            children: [
              {
                label: "Aura de convulsión",
                value: "1520"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Tiempo dependiente",
    value: "2",
    children: [
      {
        label: "PCR",
        value: "20",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "200",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "2000"
              },
              {
                label: "Gasping",
                value: "2001"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "201",
            children: [
              {
                label: "Signos de fallecimiento",
                value: "2010"
              }
            ]
          }
        ]
      },
      {
        label: "Ahogamiento",
        value: "21",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "210",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "2100"
              },
              {
                label:
                  "Dificultad respiratoria (incapaz de hablar normalmente)",
                value: "2101"
              },
              {
                label: "Accidente de buceo",
                value: "2102"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "211",
            children: [
              {
                label: "Inmersión, paciente consciente",
                value: "2110"
              },
              {
                label: "Tods",
                value: "2111"
              },
              {
                label: "Lesiones en cuello o espalda",
                value: "2112"
              },
              {
                label: "Sin información verificable",
                value: "2113"
              },
              {
                label: "Dificultad para respirar",
                value: "2114"
              },
              {
                label: "Lesión relacionada con el agua",
                value: "2115"
              },
              {
                label: "Fractura de extremidad",
                value: "2116"
              },
              {
                label: "Laceraciones mayores con sangrado controlable",
                value: "2117"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "212",
            children: [
              {
                label: "Lesión menor relacionada con el agua",
                value: "2120"
              },
              {
                label: "Paciente no sumergido",
                value: "2121"
              },
              {
                label: "Fractura, luxación aislada del dedo del pie o mano",
                value: "2122"
              },
              {
                label: "Laceraciones menores con sangrado controlado",
                value: "2123"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "213",
            children: [
              {
                label:
                  "Paciente sumergido autolimitado, sin molestia respiratoria posterior",
                value: "2130"
              }
            ]
          }
        ]
      },
      {
        label: "Dolor anginoso",
        value: "22",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "220",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "2200"
              },
              {
                label: "Síncope",
                value: "2201"
              },
              {
                label: "Dolor torácico típico en personas mayores a 40 años",
                value: "2202"
              },
              {
                label: "Dificultad para hablar",
                value: "2203"
              },
              {
                label: "Signos de mala perfusión",
                value: "2204"
              },
              {
                label: "Diabetes",
                value: "2205"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "221",
            children: [
              {
                label: "Dolor torácico típico en personas menores a 40 años",
                value: "2210"
              },
              {
                label: "Palpitaciones",
                value: "2211"
              },
              {
                label: "Dolor epigástrico súbito no asociado a alimentación",
                value: "2212"
              },
              {
                label: "Dolor torácico de 48 horas de evolución",
                value: "2213"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "222",
            children: [
              {
                label: "Náuseas o vómitos no asociados a ingesta alimentaria",
                value: "2220"
              },
              {
                label: "Antecedentes de angina previa",
                value: "2221"
              },
              {
                label: "Malestar no especificado o poco claro a la evaluación",
                value: "2222"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "223",
            children: [
              {
                label: "Dolor torácico muscular de la pared torácica",
                value: "2230"
              },
              {
                label: "Dolor de espalda que aumenta al tocarse o inspirar",
                value: "2231"
              }
            ]
          }
        ]
      },
      {
        label: "ACV",
        value: "23",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "230",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "2300"
              },
              {
                label: "Síncope",
                value: "2301"
              },
              {
                label: "Inicio repentino de cefalea intensa",
                value: "2302"
              },
              {
                label: "Problemas al hablar",
                value: "2303"
              },
              {
                label: "Visión borrosa o doble",
                value: "2304"
              },
              {
                label: "Debilidad o parálisis",
                value: "2305"
              },
              {
                label: "Vómitos",
                value: "2306"
              },
              {
                label:
                  "Alteración de consciencia (no responde al tacto o estímulo verbal)",
                value: "2307"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "231",
            children: [
              {
                label: "Debilidad unilateral, parálisis",
                value: "2310"
              },
              {
                label:
                  "Debilidad, entumecimiento o incapacidad para pararse o caminar",
                value: "2311"
              },
              {
                label: "Diabetes",
                value: "2312"
              },
              {
                label: "Respira con ruido o ronquido",
                value: "2313"
              },
              {
                label: "Sin información verificable",
                value: "2314"
              },
              {
                label:
                  "Desorientación, incoherente o con problemas para hablar",
                value: "2315"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "232",
            children: [
              {
                label:
                  "Hemiparesia facial o de extremidades, recuperada en forma espontánea",
                value: "2320"
              }
            ]
          }
        ]
      },
      {
        label: "Alteración de consciencia",
        value: "24",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "240",
            children: [
              {
                label: "Inconsciente",
                value: "2400"
              },
              {
                label:
                  "Estado de consciencia disminuido (no responde al tacto o verbal)",
                value: "2401"
              },
              {
                label: "Intoxicación aguda por alcohol y/o drogas",
                value: "2402"
              },
              {
                label: "Dificultad respiratoria",
                value: "2403"
              },
              {
                label: "Signos de shock",
                value: "2404"
              },
              {
                label:
                  "Síncope asociado a estar sentado, de pie, dolor, malestar o palpitaciones",
                value: "2405"
              },
              {
                label: "Mayor de 40 años",
                value: "2406"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "241",
            children: [
              {
                label: "Inconsciente confirmado",
                value: "2410"
              },
              {
                label: "Múltiples episodios sincopales (mismo día)",
                value: "2411"
              },
              {
                label: "Sin información verificable",
                value: "2412"
              },
              {
                label: "Síncope único",
                value: "2413"
              },
              {
                label: "Intoxicación aguda por alcohol y/o drogas",
                value: "2414"
              },
              {
                label: "Síncope asociado a cefalea",
                value: "2415"
              },
              {
                label: "Vértigo, mareos",
                value: "2416"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "242",
            children: [
              {
                label: "Alteración de consciencia recuperada",
                value: "2420"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Incidene especiales",
    value: "3",
    children: [
      {
        label: "MATPEL",
        value: "30",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "300",
            children: [
              {
                label: "Incidente con elementos químicos peligrosos",
                value: "3000"
              },
              {
                label: "Múltiples víctimas",
                value: "3001"
              },
              {
                label: "Explosión",
                value: "3002"
              },
              {
                label: "Fallecidos en el lugar",
                value: "3003"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "301",
            children: [
              {
                label: "Información no verificable o poco clara",
                value: "3010"
              },
              {
                label: "Lesionados leves",
                value: "3011"
              }
            ]
          }
        ]
      },
      {
        label: "Infectocontagioso",
        value: "31",
        children: [
          {
            label: "R1",
            styled_label:
              '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
            value: "310",
            children: [
              {
                label: "Inconsciente / no respira",
                value: "3100"
              },
              {
                label: "Síncope",
                value: "3101"
              },
              {
                label: "Cianosis",
                value: "3102"
              },
              {
                label: "Dificultad respiratoria",
                value: "3103"
              },
              {
                label: "Dolor torácico",
                value: "3104"
              },
              {
                label: "Alteración de consciencia",
                value: "3105"
              },
              {
                label: "Signos y síntomas de shock",
                value: "3106"
              }
            ]
          },
          {
            label: "R2",
            styled_label:
              '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
            value: "311",
            children: [
              {
                label: "Edad sobre 55 años",
                value: "3110"
              },
              {
                label: "Disnea moderada",
                value: "3111"
              },
              {
                label: "FR < 30 por min.",
                value: "3112"
              },
              {
                label: "Fiebre sin signos de shock",
                value: "3113"
              },
              {
                label: "Diabético",
                value: "3114"
              },
              {
                label: "Cardiópata",
                value: "3115"
              },
              {
                label: "Cuadro de más de 72 horas de evolución",
                value: "3116"
              }
            ]
          },
          {
            label: "R3",
            styled_label:
              '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
            value: "312",
            children: [
              {
                label: "Disnea leve",
                value: "3120"
              },
              {
                label: "Antecedentes de neoplasia, HTA, DM, Asma",
                value: "3121"
              },
              {
                label: "Cuadro de menos de 72 horas de evolución",
                value: "3122"
              }
            ]
          },
          {
            label: "R4",
            styled_label:
              '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
            value: "313",
            children: [
              {
                label: "Sospechoso con síntomas leves",
                value: "3130"
              },
              {
                label: "Contacto estrecho asintomático",
                value: "3131"
              },
              {
                label: "Sospechoso asintomático",
                value: "3132"
              }
            ]
          }
        ]
      }
    ]
  }
];

export const data3 = [
  {
    label: "Trauma",
    value: "0",
    children: [
      {
        label: "Mordedura animal",
        value: "00",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "001",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0010"
              }
            ]
          },
          {
            label: "Sangramiento incontrolable",
            value: "002",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0020"
              }
            ]
          },
          {
            label: "Dificultad respiratoria severa",
            value: "003",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0030"
              }
            ]
          },
          {
            label: "Mordedura en cuello y cara con compromiso vía aérea",
            value: "004",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0040"
              }
            ]
          },
          {
            label: "Signos de shock",
            value: "005",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0050"
              }
            ]
          },
          {
            label: "Mordedura cuello o cara con sangramiento contenido",
            value: "006",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0060"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "007",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0070"
              }
            ]
          },
          {
            label: "Información no verificable",
            value: "008",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0080"
              }
            ]
          },
          {
            label:
              "Morderura en tórax, abdomen, zona genital con sangramiento contenido",
            value: "009",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "0090"
              }
            ]
          },
          {
            label:
              "Mordedura con compromiso de partes blandas con sangramiento controlado",
            value: "0010",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "00100"
              }
            ]
          },
          {
            label: "Mordedura con sangramiento mínimo",
            value: "0011",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "00110"
              }
            ]
          }
        ]
      },
      {
        label: "Agresión",
        value: "01",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "011",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0110"
              }
            ]
          },
          {
            label: "Empalamiento",
            value: "012",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0120"
              }
            ]
          },
          {
            label: "Lesión en cráneo (alteración de consciencia/convulsiones)",
            value: "013",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0130"
              }
            ]
          },
          {
            label: "Lesión por arma de fuego o blanca penetrante",
            value: "014",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0140"
              }
            ]
          },
          {
            label: "Sangramiento incontrolable",
            value: "015",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0150"
              }
            ]
          },
          {
            label: "Dificultad severa para respirar",
            value: "016",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0160"
              }
            ]
          },
          {
            label: "Múltiples fracturas de extremidades",
            value: "017",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0170"
              }
            ]
          },
          {
            label: "Compromiso de consciencia recuperado",
            value: "018",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0180"
              }
            ]
          },
          {
            label: "Cortes o laceraciones con sangramiento controlado",
            value: "019",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0190"
              }
            ]
          },
          {
            label: "Fracturas de extremidad, mano o dedos",
            value: "0110",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "01100"
              }
            ]
          },
          {
            label: "Heridas contusas en cabeza, cuello y tórax",
            value: "0111",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "01110"
              }
            ]
          },
          {
            label: "Dolor torácico con tope inspiratorio",
            value: "0112",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "01120"
              }
            ]
          },
          {
            label: "Información poco clara o no verificable",
            value: "0113",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "01130"
              }
            ]
          },
          {
            label: "Malestar no especificado",
            value: "0114",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "01140"
              }
            ]
          },
          {
            label: "Heridas superficiales con o sin sangramiento",
            value: "0115",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "01150"
              }
            ]
          }
        ]
      },
      {
        label: "Accidentes",
        value: "02",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "021",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0210"
              }
            ]
          },
          {
            label: "Dificultad respiratoria severa",
            value: "022",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0220"
              }
            ]
          },
          {
            label: "Signos de shock",
            value: "023",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0230"
              }
            ]
          },
          {
            label: "Fractura de huesos largos bilateral",
            value: "024",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0240"
              }
            ]
          },
          {
            label: "Atrapamiento tórax / pelvis",
            value: "025",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0250"
              }
            ]
          },
          {
            label: "Sangramiento incontrolable",
            value: "026",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0260"
              }
            ]
          },
          {
            label: "Trauma con alteración neurológica",
            value: "027",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0270"
              }
            ]
          },
          {
            label: "Alteración de consciencia parcialmente recuperada",
            value: "028",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0280"
              }
            ]
          },
          {
            label:
              "Caída a nivel asociada a dolor torácico, cefalea intensa o convulsión",
            value: "029",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0290"
              }
            ]
          },
          {
            label: "Dificultad respiratoria moderada",
            value: "0210",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "02100"
              }
            ]
          },
          {
            label: "Laceraciones o cortes mayores con sangramiento controlado",
            value: "0211",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "02110"
              }
            ]
          },
          {
            label: "Fractura de fémur",
            value: "0212",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "02120"
              }
            ]
          },
          {
            label: "Atrapamiento extremidades",
            value: "0213",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "02130"
              }
            ]
          },
          {
            label: "Fractura extremidad única",
            value: "0214",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "02140"
              }
            ]
          },
          {
            label:
              "Lesiones contusas de cabeza, cuello y tórax con dolor moderado",
            value: "0215",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "02150"
              }
            ]
          },
          {
            label: "Dolor espalda que no permite deambular",
            value: "0216",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "02160"
              }
            ]
          },
          {
            label: "Fractura o luxación de articulación",
            value: "0217",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "02170"
              }
            ]
          },
          {
            label: "Accidente cortopunzante",
            value: "0218",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "02180"
              }
            ]
          },
          {
            label: "Laceraciones o contusiones menores",
            value: "0219",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "02190"
              }
            ]
          },
          {
            label: "Contusiones, paciente deambulando",
            value: "0220",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "02200"
              }
            ]
          }
        ]
      },
      {
        label: "Quemaduras",
        value: "03",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "031",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0310"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "032",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0320"
              }
            ]
          },
          {
            label:
              "Quemadura en cara, nariz, boca o cuello con estridor, ronquera, dolor al tragar",
            value: "033",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0330"
              }
            ]
          },
          {
            label: "Quemadura >30% SCQ",
            value: "034",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0340"
              }
            ]
          },
          {
            label: "Quemadura eléctrica por corriente de alta energía",
            value: "035",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0350"
              }
            ]
          },
          {
            label: "Quemaduras por explosión menor",
            value: "036",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0360"
              }
            ]
          },
          {
            label: "Quemadura sobre 15% SCQ y menor al 30% SCQ",
            value: "037",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0370"
              }
            ]
          },
          {
            label: "Quemadura en manos, pies y genitales",
            value: "038",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0380"
              }
            ]
          },
          {
            label: "Quemadura química en ojos",
            value: "039",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0390"
              }
            ]
          },
          {
            label: "Disnea leve",
            value: "0310",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "03100"
              }
            ]
          },
          {
            label: "Información no verificable",
            value: "0311",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "03110"
              }
            ]
          },
          {
            label: "Electrocución corriente domiciliaria",
            value: "0312",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "03120"
              }
            ]
          },
          {
            label: "Quemadura domiciliaria con entrada y salida",
            value: "0313",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "03130"
              }
            ]
          },
          {
            label: "Quemadura por agua caliente en cuello y tórax",
            value: "0314",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "03140"
              }
            ]
          },
          {
            label: "Quemadura domiciliaria menor",
            value: "0315",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "03150"
              }
            ]
          },
          {
            label: "Quemadura solar",
            value: "0316",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "03160"
              }
            ]
          },
          {
            label: "Quemadura por frío",
            value: "0317",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "03170"
              }
            ]
          },
          {
            label:
              "Quemadura en primer grado sin compromiso de cara, cuello y tórax",
            value: "0318",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "03180"
              }
            ]
          }
        ]
      },
      {
        label: "Caída de altura",
        value: "04",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "041",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0410"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "042",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0420"
              }
            ]
          },
          {
            label: "Caída superior a 3 pisos (6 metros)",
            value: "043",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0430"
              }
            ]
          },
          {
            label: "Fracturas de huesos largos bilateral",
            value: "044",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0440"
              }
            ]
          },
          {
            label: "Sangramiento incontrolable",
            value: "045",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0450"
              }
            ]
          },
          {
            label: "Alteración de consciencia parcialmente recuperada",
            value: "046",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0460"
              }
            ]
          },
          {
            label: "Caída asociada a dolor torácico, cefalea o convulsión",
            value: "047",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0470"
              }
            ]
          },
          {
            label: "Dificultad respiratoria moderada",
            value: "048",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0480"
              }
            ]
          },
          {
            label: "Laceraciones o cortes mayores con sangramiento controlado",
            value: "049",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "0490"
              }
            ]
          },
          {
            label: "Fractura de fémur única",
            value: "0410",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "04100"
              }
            ]
          },
          {
            label: "Caída superior a 3 metros",
            value: "0411",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "04110"
              }
            ]
          },
          {
            label: "Caída superior a 2 metros",
            value: "0412",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "04120"
              }
            ]
          },
          {
            label: "Fractura de extremidades (única)",
            value: "0413",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "04130"
              }
            ]
          },
          {
            label:
              "Lesiones contusas de cabeza, cuello y tórax con dolor moderado",
            value: "0414",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "04140"
              }
            ]
          },
          {
            label: "Fractura o luxación de mano, tobillo y dedos",
            value: "0415",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "04150"
              }
            ]
          },
          {
            label: "Heridas con sangramiento autolimitado",
            value: "0416",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "04160"
              }
            ]
          },
          {
            label: "Caídas menor a 1 metro",
            value: "0417",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "04170"
              }
            ]
          },
          {
            label: "Laceraciones o contusiones menores",
            value: "0418",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "04180"
              }
            ]
          },
          {
            label: "Contusiones paciente caminando",
            value: "0419",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "04190"
              }
            ]
          }
        ]
      },
      {
        label: "Accidente de tránsito",
        value: "05",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "051",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0510"
              }
            ]
          },
          {
            label: "No responde al hablar o tocar",
            value: "052",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0520"
              }
            ]
          },
          {
            label: "Dificultad respiratoria severa",
            value: "053",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0530"
              }
            ]
          },
          {
            label: "Colisión sobre 60 km/hr frontal o contra objeto inamovible",
            value: "054",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0540"
              }
            ]
          },
          {
            label: "Persona eyectada",
            value: "055",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0550"
              }
            ]
          },
          {
            label: "Paciente atrapado",
            value: "056",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0560"
              }
            ]
          },
          {
            label: "Peatón o ciclista atropellado inconsciente",
            value: "057",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0570"
              }
            ]
          },
          {
            label: "Paciente atrapado bajo vehículo",
            value: "058",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0580"
              }
            ]
          },
          {
            label: "Fallecidos en lugar",
            value: "059",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "0590"
              }
            ]
          },
          {
            label: "Paciente atropellado",
            value: "0510",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "05100"
              }
            ]
          },
          {
            label:
              "Colisión sobre 60 km/hr sin criterios evidentes de severidad",
            value: "0511",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "05110"
              }
            ]
          },
          {
            label: "Volcamiento",
            value: "0512",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "05120"
              }
            ]
          },
          {
            label: "Paciente con fractura de extremidades",
            value: "0513",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "05130"
              }
            ]
          },
          {
            label: "Información poco clara",
            value: "0514",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "05140"
              }
            ]
          },
          {
            label: "Colisión menor a 60 km/hr",
            value: "0515",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "05150"
              }
            ]
          },
          {
            label: "Información poco clara, pero de ocurrencia en carretera",
            value: "0516",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "05160"
              }
            ]
          },
          {
            label: "Paciente con lesiones menores",
            value: "0517",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "05170"
              }
            ]
          },
          {
            label: "Dolores no especificado",
            value: "0518",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "05180"
              }
            ]
          },
          {
            label: "Colisión de baja energía",
            value: "0519",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "05190"
              }
            ]
          },
          {
            label: "Paciente deambulando",
            value: "0520",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "05200"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Causa medica",
    value: "1",
    children: [
      {
        label: "Dolor abdominal",
        value: "10",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "101",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1010"
              }
            ]
          },
          {
            label: "Síncope",
            value: "102",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1020"
              }
            ]
          },
          {
            label: "Vómito con sangre roja",
            value: "103",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1030"
              }
            ]
          },
          {
            label: "Palidez, sudoración intensa",
            value: "104",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1040"
              }
            ]
          },
          {
            label: "Deposiciones con sangre roja o deposiciones negras",
            value: "105",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1050"
              }
            ]
          },
          {
            label: "Dolor intenso con vómitos",
            value: "106",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1060"
              }
            ]
          },
          {
            label: "Dolor intenso sin signos de shock",
            value: "107",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1070"
              }
            ]
          },
          {
            label: "Dolor tipo cólico en fosa renal o lumbar",
            value: "108",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1080"
              }
            ]
          },
          {
            label: "Información no verificable o poco clara",
            value: "109",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1090"
              }
            ]
          },
          {
            label:
              "Dolor epigástrico en mayores de 50 años, mujeres mayor a 45 y diabético conocido",
            value: "1010",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "10100"
              }
            ]
          },
          {
            label: "Lesión en ingle",
            value: "1011",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "10110"
              }
            ]
          },
          {
            label:
              "Dolor en ingle, de espalda o lumbar sin incapacidad de deambulación",
            value: "1012",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "10120"
              }
            ]
          },
          {
            label: "Malestar no especificado",
            value: "1013",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10130"
              }
            ]
          },
          {
            label: "Dolor espalda crónico ambulatorio",
            value: "1014",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10140"
              }
            ]
          },
          {
            label: "Dolor lateral ambulatorio",
            value: "1015",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10150"
              }
            ]
          },
          {
            label: "Dolor de ingle ambulatorio",
            value: "1016",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10160"
              }
            ]
          },
          {
            label: "Dolor de espalda por lesión que puede caminar",
            value: "1017",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10170"
              }
            ]
          },
          {
            label: "Problema de catéter urinario permanente",
            value: "1018",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "10180"
              }
            ]
          }
        ]
      },
      {
        label: "Reacción alérgica",
        value: "11",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "111",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1110"
              }
            ]
          },
          {
            label: "Habla con dificultad",
            value: "112",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1120"
              }
            ]
          },
          {
            label: "Sibilancias o estridor laringeo audibles a distancia",
            value: "113",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1130"
              }
            ]
          },
          {
            label: "Hinchazón de lengua o dificultad para tragar",
            value: "114",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1140"
              }
            ]
          },
          {
            label: "Alteración de consciencia",
            value: "115",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1150"
              }
            ]
          },
          {
            label: "Historia de reacción anafiláctica",
            value: "116",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1160"
              }
            ]
          },
          {
            label: "Información poco clara o no verificable",
            value: "117",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1170"
              }
            ]
          },
          {
            label:
              "Reacción ocurrida por más de 30 min pero sin dificultad respiratoria",
            value: "118",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "1180"
              }
            ]
          },
          {
            label: "Rush en cara, tórax y extremidades",
            value: "119",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "1190"
              }
            ]
          },
          {
            label: "Vómitos profusos",
            value: "1110",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "11100"
              }
            ]
          },
          {
            label: "Náuseas",
            value: "1111",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "11110"
              }
            ]
          },
          {
            label: "Presencia de rash menor",
            value: "1112",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "11120"
              }
            ]
          },
          {
            label: "Náuseas o vómitos leves",
            value: "1113",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "11130"
              }
            ]
          }
        ]
      },
      {
        label: "Problema respiratorio",
        value: "12",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "121",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1210"
              }
            ]
          },
          {
            label:
              "Dificultad respiratoria severa (no habla con normalidad / cianosis)",
            value: "122",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1220"
              }
            ]
          },
          {
            label: "Estridor y/o sibilancias audibles a distancia",
            value: "123",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1230"
              }
            ]
          },
          {
            label: "Diaforesis intensa",
            value: "124",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1240"
              }
            ]
          },
          {
            label: "Palidez",
            value: "125",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1250"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "126",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1260"
              }
            ]
          },
          {
            label: "Dolor al respirar",
            value: "127",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1270"
              }
            ]
          },
          {
            label: "FR >30 por min.",
            value: "128",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1280"
              }
            ]
          },
          {
            label: "Oxígeno domiciliario agotado",
            value: "129",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1290"
              }
            ]
          },
          {
            label: "Inicio de cuadro súbito",
            value: "1210",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "12100"
              }
            ]
          },
          {
            label: "Respiración rápida <30 por min.",
            value: "1211",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "12110"
              }
            ]
          },
          {
            label:
              "Cuadro de 24 horas de evolución, sin cianosis ni diaforesis asociada",
            value: "1212",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "12120"
              }
            ]
          },
          {
            label: "Información poco clara",
            value: "1213",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "12130"
              }
            ]
          },
          {
            label: "Cuadro de 48 horas de evolución",
            value: "1214",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "12140"
              }
            ]
          }
        ]
      },
      {
        label: "Intoxicación",
        value: "13",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "131",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1310"
              }
            ]
          },
          {
            label: "Dificultad respiratoria (habla con dificultad)",
            value: "132",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1320"
              }
            ]
          },
          {
            label: "Alteración de consciencia (responde solo al dolor)",
            value: "133",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1330"
              }
            ]
          },
          {
            label: "Quemadura en cara, cuello y tórax",
            value: "134",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1340"
              }
            ]
          },
          {
            label: "Tóxicos con criterio médico severo",
            value: "135",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1350"
              }
            ]
          },
          {
            label:
              "Productos químicos (ingeridos, inhalados o salpicados), sin criterio médico severo",
            value: "136",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1360"
              }
            ]
          },
          {
            label: "Paciente con temblores incontrolables",
            value: "137",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1370"
              }
            ]
          },
          {
            label: "Paciente excesivamente caliente",
            value: "138",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1380"
              }
            ]
          },
          {
            label: "Otras lesiones",
            value: "139",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1390"
              }
            ]
          },
          {
            label: "No hay información verificable o disponible con claridad",
            value: "1310",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "13100"
              }
            ]
          },
          {
            label: "Dificultad para respirar (disnea moderada)",
            value: "1311",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "13110"
              }
            ]
          },
          {
            label: "Exposición directa al tóxico",
            value: "1312",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "13120"
              }
            ]
          },
          {
            label: "Cefalea intensa, náuseas y vómitos",
            value: "1313",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "13130"
              }
            ]
          },
          {
            label: "Más de una persona involucrada",
            value: "1314",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "13140"
              }
            ]
          },
          {
            label: "Intoxicación de origen alimentario",
            value: "1315",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "13150"
              }
            ]
          },
          {
            label: "Exposición no directa, sin síntomas o signos",
            value: "1316",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "13160"
              }
            ]
          }
        ]
      },
      {
        label: "Alteración emocional/Ideación suicida",
        value: "14",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "141",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1410"
              }
            ]
          },
          {
            label:
              "Intento suicida con lesión auto infligida, penetrante, cortante o intento de ahorcamiento",
            value: "142",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1420"
              }
            ]
          },
          {
            label: "Ideación suicida con comportamiento inusual",
            value: "143",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1430"
              }
            ]
          },
          {
            label:
              "Antecedentes de patología psiquiátrica con ideación suicida",
            value: "144",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1440"
              }
            ]
          },
          {
            label: "Crisis de pánico con o sin historia previa",
            value: "145",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "1450"
              }
            ]
          },
          {
            label: "Información poco clara o no verificable",
            value: "146",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "1460"
              }
            ]
          },
          {
            label:
              "Pacientes con antecedentes psiquiátricos que descontinúan tratamiento",
            value: "147",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "1470"
              }
            ]
          }
        ]
      },
      {
        label: "Convulsiones",
        value: "15",
        children: [
          {
            label: "Convulsión mayor a 5 min.",
            value: "151",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1510"
              }
            ]
          },
          {
            label: "Sin respiración post convulsión",
            value: "152",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1520"
              }
            ]
          },
          {
            label: "Múltiples convulsiones (status)",
            value: "153",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1530"
              }
            ]
          },
          {
            label: "Cefalea intensa post convulsión",
            value: "154",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1540"
              }
            ]
          },
          {
            label: "Antecedentes de diabetes",
            value: "155",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1550"
              }
            ]
          },
          {
            label: "Embarazada >20 sem.",
            value: "156",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1560"
              }
            ]
          },
          {
            label: "Secundario a alcohol y/o drogas",
            value: "157",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1570"
              }
            ]
          },
          {
            label: "Secundario a lesión de cabeza en las últimas 24 horas",
            value: "158",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "1580"
              }
            ]
          },
          {
            label: "Convulsión única que cede a los 3 min",
            value: "159",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "1590"
              }
            ]
          },
          {
            label: "Convulsiones con antecedentes de trastorno convulsivo",
            value: "1510",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "15100"
              }
            ]
          },
          {
            label: "Sin información o no verificable",
            value: "1511",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "15110"
              }
            ]
          },
          {
            label: "Aura de convulsión",
            value: "1512",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "15120"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Tiempo dependiente",
    value: "2",
    children: [
      {
        label: "PCR",
        value: "20",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "201",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2010"
              }
            ]
          },
          {
            label: "Gasping",
            value: "202",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2020"
              }
            ]
          },
          {
            label: "Signos de fallecimiento",
            value: "203",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2030"
              }
            ]
          }
        ]
      },
      {
        label: "Ahogamiento",
        value: "21",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "211",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2110"
              }
            ]
          },
          {
            label: "Dificultad respiratoria (incapaz de hablar normalmente)",
            value: "212",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2120"
              }
            ]
          },
          {
            label: "Accidente de buceo",
            value: "213",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2130"
              }
            ]
          },
          {
            label: "Inmersión, paciente consciente",
            value: "214",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2140"
              }
            ]
          },
          {
            label: "Tods",
            value: "215",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2150"
              }
            ]
          },
          {
            label: "Lesiones en cuello o espalda",
            value: "216",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2160"
              }
            ]
          },
          {
            label: "Sin información verificable",
            value: "217",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2170"
              }
            ]
          },
          {
            label: "Dificultad para respirar",
            value: "218",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2180"
              }
            ]
          },
          {
            label: "Lesión relacionada con el agua",
            value: "219",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2190"
              }
            ]
          },
          {
            label: "Fractura de extremidad",
            value: "2110",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "21100"
              }
            ]
          },
          {
            label: "Laceraciones mayores con sangrado controlable",
            value: "2111",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "21110"
              }
            ]
          },
          {
            label: "Lesión menor relacionada con el agua",
            value: "2112",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "21120"
              }
            ]
          },
          {
            label: "Paciente no sumergido",
            value: "2113",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "21130"
              }
            ]
          },
          {
            label: "Fractura, luxación aislada del dedo del pie o mano",
            value: "2114",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "21140"
              }
            ]
          },
          {
            label: "Laceraciones menores con sangrado controlado",
            value: "2115",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "21150"
              }
            ]
          },
          {
            label:
              "Paciente sumergido autolimitado, sin molestia respiratoria posterior",
            value: "2116",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "21160"
              }
            ]
          }
        ]
      },
      {
        label: "Dolor anginoso",
        value: "22",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "221",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2210"
              }
            ]
          },
          {
            label: "Síncope",
            value: "222",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2220"
              }
            ]
          },
          {
            label: "Dolor torácico típico en personas mayores a 40 años",
            value: "223",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2230"
              }
            ]
          },
          {
            label: "Dificultad para hablar",
            value: "224",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2240"
              }
            ]
          },
          {
            label: "Signos de mala perfusión",
            value: "225",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2250"
              }
            ]
          },
          {
            label: "Diabetes",
            value: "226",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2260"
              }
            ]
          },
          {
            label: "Dolor torácico típico en personas menores a 40 años",
            value: "227",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2270"
              }
            ]
          },
          {
            label: "Palpitaciones",
            value: "228",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2280"
              }
            ]
          },
          {
            label: "Dolor epigástrico súbito no asociado a alimentación",
            value: "229",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2290"
              }
            ]
          },
          {
            label: "Dolor torácico de 48 horas de evolución",
            value: "2210",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "22100"
              }
            ]
          },
          {
            label: "Náuseas o vómitos no asociados a ingesta alimentaria",
            value: "2211",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "22110"
              }
            ]
          },
          {
            label: "Antecedentes de angina previa",
            value: "2212",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "22120"
              }
            ]
          },
          {
            label: "Malestar no especificado o poco claro a la evaluación",
            value: "2213",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "22130"
              }
            ]
          },
          {
            label: "Dolor torácico muscular de la pared torácica",
            value: "2214",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "22140"
              }
            ]
          },
          {
            label: "Dolor de espalda que aumenta al tocarse o inspirar",
            value: "2215",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "22150"
              }
            ]
          }
        ]
      },
      {
        label: "ACV",
        value: "23",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "231",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2310"
              }
            ]
          },
          {
            label: "Síncope",
            value: "232",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2320"
              }
            ]
          },
          {
            label: "Inicio repentino de cefalea intensa",
            value: "233",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2330"
              }
            ]
          },
          {
            label: "Problemas al hablar",
            value: "234",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2340"
              }
            ]
          },
          {
            label: "Visión borrosa o doble",
            value: "235",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2350"
              }
            ]
          },
          {
            label: "Debilidad o parálisis",
            value: "236",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2360"
              }
            ]
          },
          {
            label: "Vómitos",
            value: "237",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2370"
              }
            ]
          },
          {
            label:
              "Alteración de consciencia (no responde al tacto o estímulo verbal)",
            value: "238",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2380"
              }
            ]
          },
          {
            label: "Debilidad unilateral, parálisis",
            value: "239",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2390"
              }
            ]
          },
          {
            label:
              "Debilidad, entumecimiento o incapacidad para pararse o caminar",
            value: "2310",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "23100"
              }
            ]
          },
          {
            label: "Diabetes",
            value: "2311",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "23110"
              }
            ]
          },
          {
            label: "Respira con ruido o ronquido",
            value: "2312",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "23120"
              }
            ]
          },
          {
            label: "Sin información verificable",
            value: "2313",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "23130"
              }
            ]
          },
          {
            label: "Desorientación, incoherente o con problemas para hablar",
            value: "2314",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "23140"
              }
            ]
          },
          {
            label:
              "Hemiparesia facial o de extremidades, recuperada en forma espontánea",
            value: "2315",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "23150"
              }
            ]
          }
        ]
      },
      {
        label: "Alteración de consciencia",
        value: "24",
        children: [
          {
            label: "Inconsciente",
            value: "241",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2410"
              }
            ]
          },
          {
            label:
              "Estado de consciencia disminuido (no responde al tacto o verbal)",
            value: "242",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2420"
              }
            ]
          },
          {
            label: "Intoxicación aguda por alcohol y/o drogas",
            value: "243",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2430"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "244",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2440"
              }
            ]
          },
          {
            label: "Signos de shock",
            value: "245",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2450"
              }
            ]
          },
          {
            label:
              "Síncope asociado a estar sentado, de pie, dolor, malestar o palpitaciones",
            value: "246",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2460"
              }
            ]
          },
          {
            label: "Mayor de 40 años",
            value: "247",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "2470"
              }
            ]
          },
          {
            label: "Inconsciente confirmado",
            value: "248",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2480"
              }
            ]
          },
          {
            label: "Múltiples episodios sincopales (mismo día)",
            value: "249",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "2490"
              }
            ]
          },
          {
            label: "Sin información verificable",
            value: "2410",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "24100"
              }
            ]
          },
          {
            label: "Síncope único",
            value: "2411",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "24110"
              }
            ]
          },
          {
            label: "Intoxicación aguda por alcohol y/o drogas",
            value: "2412",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "24120"
              }
            ]
          },
          {
            label: "Síncope asociado a cefalea",
            value: "2413",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "24130"
              }
            ]
          },
          {
            label: "Vértigo, mareos",
            value: "2414",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "24140"
              }
            ]
          },
          {
            label: "Alteración de consciencia recuperada",
            value: "2415",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "24150"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Incidene especiales",
    value: "3",
    children: [
      {
        label: "MATPEL",
        value: "30",
        children: [
          {
            label: "Incidente con elementos químicos peligrosos",
            value: "301",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3010"
              }
            ]
          },
          {
            label: "Múltiples víctimas",
            value: "302",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3020"
              }
            ]
          },
          {
            label: "Explosión",
            value: "303",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3030"
              }
            ]
          },
          {
            label: "Fallecidos en el lugar",
            value: "304",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3040"
              }
            ]
          },
          {
            label: "Información no verificable o poco clara",
            value: "305",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "3050"
              }
            ]
          },
          {
            label: "Lesionados leves",
            value: "306",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "3060"
              }
            ]
          }
        ]
      },
      {
        label: "Infectocontagioso",
        value: "31",
        children: [
          {
            label: "Inconsciente / no respira",
            value: "311",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3110"
              }
            ]
          },
          {
            label: "Síncope",
            value: "312",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3120"
              }
            ]
          },
          {
            label: "Cianosis",
            value: "313",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3130"
              }
            ]
          },
          {
            label: "Dificultad respiratoria",
            value: "314",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3140"
              }
            ]
          },
          {
            label: "Dolor torácico",
            value: "315",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3150"
              }
            ]
          },
          {
            label: "Alteración de consciencia",
            value: "316",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3160"
              }
            ]
          },
          {
            label: "Signos y síntomas de shock",
            value: "317",
            children: [
              {
                label: "R1",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E30001;"></i> R1',
                value: "3170"
              }
            ]
          },
          {
            label: "Edad sobre 55 años",
            value: "318",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "3180"
              }
            ]
          },
          {
            label: "Disnea moderada",
            value: "319",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "3190"
              }
            ]
          },
          {
            label: "FR < 30 por min.",
            value: "3110",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "31100"
              }
            ]
          },
          {
            label: "Fiebre sin signos de shock",
            value: "3111",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "31110"
              }
            ]
          },
          {
            label: "Diabético",
            value: "3112",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "31120"
              }
            ]
          },
          {
            label: "Cardiópata",
            value: "3113",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "31130"
              }
            ]
          },
          {
            label: "Cuadro de más de 72 horas de evolución",
            value: "3114",
            children: [
              {
                label: "R2",
                styled_label:
                  '<i class="fas fa-circle" style="color: #FAAD14;"></i> R2',
                value: "31140"
              }
            ]
          },
          {
            label: "Disnea leve",
            value: "3115",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "31150"
              }
            ]
          },
          {
            label: "Antecedentes de neoplasia, HTA, DM, Asma",
            value: "3116",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "31160"
              }
            ]
          },
          {
            label: "Cuadro de menos de 72 horas de evolución",
            value: "3117",
            children: [
              {
                label: "R3",
                styled_label:
                  '<i class="fas fa-circle" style="color: #E6EB03;"></i> R3',
                value: "31170"
              }
            ]
          },
          {
            label: "Sospechoso con síntomas leves",
            value: "3118",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "31180"
              }
            ]
          },
          {
            label: "Contacto estrecho asintomático",
            value: "3119",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "31190"
              }
            ]
          },
          {
            label: "Sospechoso asintomático",
            value: "3120",
            children: [
              {
                label: "R4",
                styled_label:
                  '<i class="fas fa-circle" style="color: #30BA00;"></i> R4',
                value: "31200"
              }
            ]
          }
        ]
      }
    ]
  }
];
