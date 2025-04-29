export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Diagnóstico interno de la organización',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagnóstico interno de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evaluación de la estructura organizacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cómo diagnosticar la estructura organizacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de los recursos humanos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de la cultura organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis de los procesos internos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Proceso de dirección',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Procesos financieros',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Procesos comerciales',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Procesos productivos',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Procesos de mercadotecnia',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Procesos de soporte',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4',
    },
    {
      referencia:
        'Polanco, Y. J., Santos, P. & Cruz, G. A. D. L. (2020). <i>Teoría y estructura organizacional</i>. Universidad Abierta para Adultos (UAPA). ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175883?page=107',
    },
    {
      referencia:
        'Chiaveniato, I. (2009). <i>Administración de recursos humanos</i>. ',
      link:
        'http://bibliotecas.uasb.edu.bo:8080/bitstream/20.500.14624/1145/1/Chiavenato-Recursos%20humanos%209na%20ed.pdf',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
    {
      referencia:
        'Caldera Mejía, R. (2012). <i>Planeación estratégica de Recursos Humanos: conceptos y teoría</i>. B - EUMED. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/51569?page=23 ',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015), <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4',
    },
    {
      referencia:
        'Reinoso Lastra, J. F., Vera Calderón, J. A. & Ramírez Ramírez, E. A. (2023). <i>Gestión de la cultura y el cambio organizacional</i>. Sello Editorial Universidad del Tolima. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/232951?page=6',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4 ',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de procesos internos',
      significado:
        'Evaluación detallada de las actividades y procedimientos que se llevan a cabo dentro de la organización, para identificar su eficiencia, detectar posibles fallas y proponer mejoras.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, creencias, normas y comportamientos compartidos por los miembros de una empresa, que influye en la forma de trabajar y en la interacción entre los empleados.',
    },
    {
      termino: 'Desempeño organizacional',
      significado:
        'Resultado global de la eficiencia y efectividad con la que una organización alcanza sus objetivos estratégicos, considerando tanto sus recursos como sus procesos internos.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'Distribución formal de las tareas, responsabilidades y autoridad dentro de una empresa que define cómo se coordinan y controlan las actividades para alcanzar los objetivos establecidos.',
    },
    {
      termino: 'Gestión del talento humano',
      significado:
        'Proceso estratégico que busca atraer, desarrollar, motivar y retener a los empleados más capacitados y alineados con los objetivos de la organización.',
    },
    {
      termino: 'Indicadores de desempeño',
      significado:
        'Medidas cuantitativas o cualitativas, que permiten evaluar el rendimiento de los empleados, los procesos y la organización en general, ayudando a identificar áreas de mejora.',
    },
    {
      termino: 'Optimización de procesos',
      significado:
        'Mejora continua de las actividades internas para incrementar la eficiencia, reducir costos, mejorar la calidad o acelerar los tiempos de entrega.',
    },
    {
      termino: 'Recursos humanos',
      significado:
        'Conjunto de empleados que conforman la fuerza laboral de una empresa, junto con los procesos que gestionan su contratación, formación, evaluación y bienestar.',
    },
    {
      termino: 'Resiliencia organizacional',
      significado:
        'Capacidad de una empresa para adaptarse a los cambios, superar crisis o desafíos inesperados y seguir funcionando, de manera efectiva.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'Dinámica en la que los empleados trabajan juntos, compartiendo conocimientos y habilidades, para alcanzar metas comunes, mejorando la eficiencia y la innovación.',
    },
  ],
}
