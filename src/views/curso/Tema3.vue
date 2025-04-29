<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación de la cultura organizacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5     
      .col.order-md-2.order-lg-1  
        p(data-aos="fade-down") La cultura organizacional constituye un pilar esencial en la identidad y funcionamiento de toda empresa, ya que refleja los valores, creencias y comportamientos compartidos que guían la forma en que sus miembros interactúan y toman decisiones.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.svg", data-aos="zoom-in")

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evaluación de la cultura organizacional 
            p.mb-4(data-aos="fade-right") En el PDF Evaluación de la cultura organizacional, se presentan fundamentos teóricos y herramientas de análisis que permiten identificar cómo esta cultura influye en el ambiente interno, la estrategia y el rendimiento organizacional, facilitando así procesos de transformación coherentes y sostenibles. Esta evaluación resulta clave para orientar la gestión del cambio y fortalecer la cohesión interna en las organizaciones.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación de la cultura organizacional 


    p(data-aos="fade-down") Los elementos analizados en el diagnóstico de la cultura organizacional, son:

    .bg-full-width-2.bg-fondo-2(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Valores y creencias compartidas 
                p Se identifican los principios que guían las decisiones y acciones de los empleados.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Normas y comportamientos 
                p Se evalúan las reglas no escritas que regulan la conducta diaria en la organización. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Símbolos y rituales 
                p Se observan los elementos visibles como logotipos, diseño de oficinas, ceremonias y eventos claves que refuerzan la identidad organizacional.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Estructura de poder y liderazgo 
                p Se analiza quiénes ejercen influencia, cómo se toman las decisiones y qué estilos de liderazgo predominan.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Comunicación interna 
                p Se estudia cómo fluye la información y qué canales son los más efectivos o limitantes. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Clima organizacional 
                p Se mide la percepción de los empleados sobre su ambiente de trabajo, incluyendo motivación, satisfacción y nivel de compromiso
        p(data-aos="fade-down") Ahora, conozcamos los métodos de análisis:
        div.row.justify-content-center.align-items-stretch.text-center
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/37.svg" alt="" style="width: 90px")
              h5 Encuestas y cuestionarios 
              p.mb-0 Se aplican para obtener la percepción de los empleados sobre la cultura organizacional. 
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/38.svg" alt="" style="width: 90px")
              h5 Entrevistas 
              p.mb-0 Profundizan en las respuestas obtenidas en las encuestas, permitiendo una comprensión más detallada. 
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/39.svg" alt="" style="width: 90px")
              h5 Observación directa 
              p.mb-0 Permite analizar el comportamiento real de los empleados, en su entorno de trabajo. 
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/40.svg" alt="" style="width: 90px")
              h5 Análisis documental 
              p.mb-0 Se revisan manuales, informes, valores declarados y otros documentos institucionales para comparar la cultura formal e informal.   

    p(data-aos="fade-down") La siguiente tabla presenta las fortalezas y debilidades comunes identificadas:

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Posibles debilidades y fortalezas de la cultura organizacional

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Elemento
            th Posibles Fortalezas
            th Posibles Debilidades
        tbody
          tr
            td.text-bold Valores compartidos 
            td Cohesión entre empleados, visión clara.
            td Desconexión entre valores y prácticas reales. 
          tr
            td.text-bold Liderazgo
            td Líderes motivadores e inspiradores.
            td Liderazgo autoritario o poco participativo.  
          tr
            td.text-bold Comunicación interna
            td Flujo claro y abierto de información.
            td Barreras de comunicación, rumores frecuentes.   
          tr
            td.text-bold Clima organizacional
            td Alta motivación, sentido de pertenencia.
            td Desmotivación, falta de reconocimiento. 

    p(data-aos="fade-down") Y las estrategias para potenciar fortalezas y mejorar debilidades, son:                                                     


    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Fortalecimiento de valores")
            p Reforzar los valores compartidos a través de programas de reconocimiento y formación continua.
          .div(titulo="Transformación de normas")
            p Fomentar la flexibilidad y la innovación, eliminando prácticas obsoletas.
          .div(titulo="Desarrollo del liderazgo")
            p Capacitar a los líderes en habilidades de comunicación, empatía y gestión participativa.
          .div(titulo="Mejora de la comunicación")
            p Implementar canales más abiertos y dinámicos, como reuniones periódicas, plataformas digitales internas y buzones de sugerencias.
          .div(titulo="Mejora del clima organizacional")
            p Crear programas de bienestar, reconocimiento y desarrollo profesional, para aumentar la motivación y el sentido de pertenencia.                                                                                           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", alt="")

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in")          
      .col-lg-8 
        p(data-aos="fade-down") Realizar un diagnóstico profundo de la cultura organizacional, es fundamental para lograr una alineación efectiva entre las estrategias empresariales y los comportamientos internos; por tanto, comprender la cultura permite diseñar planes estratégicos más realistas y alcanzables, debido a que se construyen sobre la base de las dinámicas reales de la organización.         
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Al reconocer las fortalezas y debilidades, se pueden implementar acciones más dirigidas y efectivas para mejorar la productividad, el compromiso del personal y la capacidad de adaptación ante los cambios del mercado; de este modo, la cultura organizacional deja de ser un aspecto intangible para convertirse en una ventaja competitiva que impulsa el éxito a largo plazo de la empresa. 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/71071?page=10" target="_blank" rel="noopener noreferrer") López Posada, L. M. (2016). Cultura organizacional: entre el individualismo y el colectivismo. Sello Editorial Universidad del Tolima. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/172365?page=10" target="_blank" rel="noopener noreferrer") Méndez Álvarez, C. E. (2020). Innovación organizacional: cultura, condición para la estrategia. Editorial Universidad del Rosario. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://buleria.unileon.es/bitstream/handle/10612/11247/Evaluacion%20de%20la%20Cultura%20Institucional%20en%20Educacion%20Enrique%20Diez.pdf?sequence=1" target="_blank" rel="noopener noreferrer") Díez Gutiérrez, E. (2006). Evaluación de la cultura institucional en educación. Un enfoque cualitativo teórico-práctico. Arrayan Editores.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hUAaVVvEFmo" target="_blank" rel="noopener noreferrer") Negocios En Tu Mundo. (2022). ¿Cuál es el papel de la cultura organizacional en la retención del talento? 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
