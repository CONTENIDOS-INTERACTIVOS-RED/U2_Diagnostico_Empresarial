<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diagnóstico interno de la organización'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3 
        .row.mb-5       
          .col-lg-8
            .bg-color-3.p-4.mb-4(data-aos="fade-left")
              p.mb-0 Según Luna González (2015), el análisis del entorno interno de una empresa requiere identificar tanto sus fortalezas, que revelan lo que es capaz de lograr, como sus debilidades, que muestran las limitaciones que enfrenta. Para ello, es necesario adoptar una perspectiva estratégica que permita examinar a fondo, estos elementos.
            p(data-aos="fade-down") Este análisis debe incluir varios aspectos esenciales como: 
                  
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in") 

        .row.mb-3       
          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Primero
                  p.mb-0 La #[b estrategia] actual de la empresa, evaluando cómo opera en el presente.   

          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Segundo
                  p.mb-0 La #[b cadena de valor], que detalla las actividades que generan valor para el cliente.  

          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Tercero
                  p.mb-0 Los #[b desafíos estratégicos] que enfrenta la organización. 

        .row.mb-5       
          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-up")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Cuarto 
                  p.mb-0 Su #[b posición competitiva] frente a los rivales. 

          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-up")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Quinto
                  p.mb-0 Los #[b recursos disponibles], tanto tangibles como intangibles. 

          .col-lg-4
            .bg-color-4.p-3.h-100.j1(data-aos="fade-up")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Sexto
                  p.mb-0 La #[b estructura organizacional] que define cómo se coordinan sus operaciones. 

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/12.svg")
          .col-lg 
            p.mb-0 Cada uno de estos puntos proporciona la información necesaria para comprender la situación interna de la empresa, permitiendo identificar oportunidades que pueden potenciar su crecimiento y detectar áreas que requieren mejoras. El enfoque se centra en reconocer las fortalezas que se pueden aprovechar y las debilidades que es necesario corregir, facilitando así la formulación de estrategias más efectivas y alineadas con la realidad organizacional. 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Evaluación de la estructura organizacional

    p(data-aos="fade-down") La evaluación de la estructura organizacional es clave para garantizar la eficiencia y coherencia en el funcionamiento interno de una empresa.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/13.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evaluación de la estructura organizacional
            p.mb-4(data-aos="fade-right") En el PDF Evaluación de la estructura organizacional, se analiza cómo la forma en que se agrupan funciones, se asignan responsabilidades y se establecen líneas de autoridad, impacta directamente en la operatividad, la comunicación y el logro de objetivos estratégicos. A través de este contenido, se exploran diferentes tipos de estructuras y criterios para su selección, permitiendo optimizar los procesos y mejorar el desempeño organizacional.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación de la estructura organizacional

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Cómo diagnosticar la estructura organizacional
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") El diagnóstico de la estructura organizacional es un proceso que permite evaluar cómo está configurada una empresa internamente, con el fin de determinar si su diseño favorece o dificulta el logro de sus objetivos. Este análisis proporciona un panorama detallado de la distribución de funciones, los niveles de autoridad, los canales de comunicación y la forma en que interactúan las distintas áreas, para alcanzar resultados.      
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/14.svg")
            .col-lg
              p.mb-0 Este proceso debe llevarse a cabo con la finalidad de identificar tanto las debilidades como las fortalezas de la estructura organizacional, dado que, al reconocer estos aspectos, se puede realizar una curaduría de la información recopilada, facilitando así la toma de decisiones estratégicas y orientadas a la mejora continua de la empresa. 

        p(data-aos="fade-down") Para llevar a cabo este diagnóstico, se inicia con la recopilación de información sobre la estructura actual, se incluye organigramas, descripciones de puestos, procesos de toma de decisiones y flujos de trabajo. El objetivo es entender cómo se organiza la empresa, quién toma las decisiones y cómo se coordina el trabajo entre departamentos.

        h5(data-aos="fade-down") Los aspectos principales que se analizan incluyen:
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/15.png", data-aos="zoom-in")


    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/16.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="9%" y="14%" numero="+")
                  h5 División del trabajo
                  p Se evalúa cómo están distribuidas las tareas entre las diferentes unidades y si esta división promueve la eficiencia o genera redundancias y sobrecarga en ciertos roles.  

                .bg-color-white.box-shadow.p-3(x="29%" y="14%" numero="+")
                  h5 Jerarquía y niveles de autoridad 
                  p Se analiza cuántos niveles jerárquicos existen, cómo fluye la información desde la dirección hasta los empleados y si los líderes tienen el alcance necesario para tomar decisiones oportunas. 

                .bg-color-white.box-shadow.p-3(x="71%" y="14%" numero="+")
                  h5 Coordinación y comunicación 
                  p Se examina cómo se conectan los distintos departamentos, la velocidad y precisión con la que fluye la información, y si existen barreras que entorpezcan la colaboración. 

                .bg-color-white.box-shadow.p-3(x="91%" y="14%" numero="+")
                  h5 Flexibilidad y capacidad de adaptación
                  p Se revisa si la estructura permite a la organización responder de forma ágil a los cambios del entorno, identificar oportunidades o enfrentar desafíos sin que los procesos internos se vuelvan rígidos o lentos. 

    .row.mb-5       
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Al realizar este diagnóstico, es posible detectar diversos problemas, como la duplicidad de funciones, cuellos de botella en la toma de decisiones, falta de coordinación entre áreas, sobrecarga en ciertos niveles jerárquicos o incluso unidades que no aportan valor al cumplimiento de los objetivos organizacionales.
        p(data-aos="fade-down") A continuación, se presenta un cuadro con ejemplos de posibles fortalezas y debilidades identificables en la estructura organizacional:
              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in")  

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Posibles debilidades y fortalezas en la estructura organizacional

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Fortalezas
            th Debilidades
        tbody
          tr
            td Estructura flexible que permite adaptación rápida. 
            td Desconexión entre departamentos.  
          tr
            td Comunicación interna eficiente y fluida. 
            td Sobrecarga en ciertos puestos críticos. 
          tr
            td Cadena de mando clara que agiliza decisiones.
            td Procesos internos poco definidos o redundantes.  
          tr
            td Equipos multidisciplinarios que fomentan la innovación. 
            td Duplicidad de funciones.  
          tr
            td Cultura organizacional sólida, que motiva al personal.
            td Abundantes niveles jerárquicos.

    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") A partir de estos hallazgos, se pueden plantear estrategias de mejoramiento orientadas a ajustar la estructura organizacional; algunas acciones incluyen la simplificación de jerarquías para mejorar la comunicación y agilizar la toma de decisiones, la redistribución de tareas para eliminar redundancias, la creación de equipos multidisciplinarios que fortalezcan la colaboración y la integración de tecnología para facilitar los procesos y mejorar la eficiencia.

        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Este análisis se convierte en una fuente de información importante y necesaria para el proceso de planeación estratégica, puesto que, conocer a fondo cómo está organizada la empresa, permite tomar decisiones más acertadas sobre la asignación de recursos, la reorganización de equipos, la mejora de los flujos de trabajo y el fortalecimiento de las capacidades internas.
        p(data-aos="fade-down") De esta manera, se asegura que la estructura sea funcional, e impulse a la empresa hacia el logro de sus metas a largo plazo.
              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/17.png", data-aos="zoom-in")

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/273991?page=8" target="_blank" rel="noopener noreferrer") Valdez, H. (2024). Diseño de la estructura orgánica del sistema organizacional. Bubok Publishing S.L.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/212/21224852003.pdf" target="_blank" rel="noopener noreferrer") Marín Idárraga, D. A. (2012). Estructura organizacional y sus parámetros de diseño: Análisis descriptivo en pymes industriales de Bogotá. Estudios Gerenciales, 28(123), 43-63. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=EinotCVXKHo" target="_blank" rel="noopener noreferrer") IES Valle de Uco. (2016). ANÁLISIS y DESARROLLO ORGANIZACIONAL - El cambio organizacional.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
