<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Análisis de los procesos internos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")          
      .col-lg-8   
        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/44.svg")
            .col-lg
              p.mb-0 Según Torres Hernández (2015), un proceso, dentro de una organización, consiste en una serie de actividades que toman insumos y los convierten en productos o servicios. El objetivo principal es que el resultado final tenga un valor superior al de los materiales o recursos iniciales. 

        p(data-aos="fade-down") Para lograr esta transformación, se emplean diferentes tipos de tecnologías, entre las que se destacan las tecnologías de servicio prototípico y las de manufactura prototípica, las cuales permiten generar bienes y servicios de manera más eficiente.

        p(data-aos="fade-down") Existen diversos tipos de procesos; entre los más comunes, se encuentran:

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Los procesos productivos")
            p Son aquellos encargados de transformar materias primas en productos terminados, como sucede en la industria automotriz, donde las piezas y componentes se ensamblan para dar lugar a vehículos completos.
          .div(titulo="Los procesos administrativos")
            p Se encargan de coordinar y controlar las actividades internas, asegurando que la organización funcione de manera eficiente. Un ejemplo de ello es la gestión de recursos humanos, que se encarga de seleccionar, capacitar y motivar al personal.
          .div(titulo="Los procesos comerciales")
            p Son esenciales para acercar los productos o servicios al cliente final, involucrando actividades como la venta, la distribución y el servicio posventa.
          .div(titulo="Los procesos de soporte")
            p Brindan el apoyo necesario para que el resto de las operaciones funcionen adecuadamente, como la gestión de tecnología, el mantenimiento de equipos o la atención al cliente.                         
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", alt="") 

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/12.svg")
          .col-lg 
            p.mb-0 La importancia de estos procesos radica en que cada uno de ellos aporta valor a la organización. Los procesos bien diseñados y ejecutados, mejoran la eficiencia y reducen costos, también aumentan la calidad del producto o servicio, mejoran la satisfacción del cliente y fortalecen la posición competitiva de la empresa en el mercado. Por esta razón, es fundamental analizar, optimizar y, cuando sea necesario, innovar en los procesos para asegurar el crecimiento y sostenibilidad de la organización.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Proceso de dirección

    p(data-aos="fade-down") El proceso de dirección representa la cúspide en la toma de decisiones estratégicas dentro de una organización, ya que define el rumbo, estructura y liderazgo necesarios para alcanzar los objetivos corporativos.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Proceso de dirección
            p.mb-4(data-aos="fade-right") En el PDF Proceso de dirección, se analizan tanto las fortalezas que consolidan el desempeño gerencial como las debilidades que pueden afectar la competitividad empresarial, abordando aspectos como la estructura organizacional, la planeación estratégica, el liderazgo, la cultura organizacional y la gestión del talento. Este análisis resulta clave para identificar áreas de mejora y fortalecer la capacidad directiva hacia un crecimiento sostenible.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Proceso de dirección 

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Procesos financieros

    .row
      .col.order-md-2.order-lg-1  
        p(data-aos="fade-down") La gestión financiera es una función esencial dentro de cualquier empresa, encargada de administrar, de manera eficiente, los recursos económicos con el propósito de maximizar el valor y asegurar la sostenibilidad de la organización. La estructura financiera de una empresa varía, según su tamaño y sector, pero generalmente se divide en dos áreas claves: 

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", data-aos="zoom-in")  

    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/48.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tesorería
                p.mb-0 Abarca funciones vitales como la gestión de crédito y cobranzas, el control de inventarios, la elaboración de presupuestos, la administración de la caja y la supervisión de prestaciones. Esta área garantiza que la empresa cuente con la liquidez necesaria para operar, manteniendo un equilibrio entre los ingresos y los egresos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/49.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contraloría
                p.mb-0 Se encarga de supervisar aspectos financieros más técnicos, incluyendo el control de costos, la contabilidad, el cumplimiento de las obligaciones fiscales y la realización de auditorías. Su función es asegurar que los recursos se utilicen de manera óptima, proporcionando información precisa y oportuna para la toma de decisiones. 

    .row.mb-5       
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El análisis financiero se convierte en una herramienta indispensable, debido a que permite evaluar cómo se están gestionando los activos y pasivos de la empresa. Esta evaluación no solo ayuda a mantener el equilibrio financiero, sino que también permite proyectar y planificar el uso de los recursos de manera estratégica.
        p(data-aos="fade-down") Al identificar las #[b fortalezas] dentro de la estructura financiera, se destacan los siguientes aspectos:
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in") 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/50.png", alt="")     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Rentabilidad y utilidad")
            p Los márgenes de utilidad muestran una mejora constante en comparación con los periodos anteriores. La rentabilidad de las inversiones es favorable, asegurando un retorno positivo.
          .div(titulo="Gestión de flujo de efectivo")
            p Los flujos de efectivo se optimizan de manera continua, garantizando liquidez para las operaciones. La cobranza se recupera de forma oportuna, mejorando la rotación de cuentas por cobrar.
          .div(titulo="Políticas de crédito y ventas")
            p Las políticas de crédito funcionan adecuadamente, facilitando la recuperación de pagos y contribuyendo al incremento de las ventas.
          .div(titulo="Planeación financiera estratégica")
            p La planificación estratégica financiera es efectiva, alineando los recursos económicos con los objetivos empresariales. El financiamiento está correctamente planeado, asegurando que la empresa cuente con los recursos necesarios en el momento oportuno.                        


    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Organización interna y roles financieros")
            p La descripción de puestos en el área de finanzas es práctica y confiable, permitiendo claridad en las responsabilidades. Las funciones de los departamentos financieros están claramente establecidas, evitando duplicidad de tareas y asegurando la eficiencia operativa.
          .div(titulo="Capital y estructura financiera")
            p El capital social es aportado en su totalidad por los socios, fortaleciendo la estructura financiera de la empresa y reduciendo la dependencia de financiamiento externo.
          .div(titulo="Información financiera y control")
            p Los estados financieros básicos, ofrecen información clara y efectiva, sirviendo de base para la toma de decisiones acertadas.
          .div(titulo="Adaptabilidad, según la empresa")
            p Se consideran otras fortalezas específicas según el tamaño y giro de la empresa, adaptando la estructura financiera a las necesidades particulares de la organización.                         
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/51.png", alt="")

    p.mb-5(data-aos="fade-down") El análisis de las debilidades dentro de la estructura financiera de una empresa es fundamental para identificar aquellas deficiencias que obstaculizan el logro de sus metas económicas y frenan su crecimiento sostenible. Las fortalezas previamente mencionadas, si no se desarrollan o implementan correctamente, pueden transformarse en puntos vulnerables. A continuación, se detallan algunas de las debilidades más comunes: 

    .bg-full-width-2.bg-fondo-2(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/53.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Estructura financiera desorganizada 
                p La falta de coherencia en la organización del área financiera, provoca la duplicidad de funciones, lo que genera ineficiencia y desperdicio de recursos.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/54.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Ausencia de descripciones de puestos 
                p La inexistencia de roles definidos dentro del departamento de finanzas, lleva a la confusión sobre responsabilidades y tareas, afectando la productividad. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/55.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Deficiencias en la gestión de liderazgo
                p Los jefes de departamento presentan carencias tanto en aptitudes técnicas como en actitudes proactivas, lo que debilita la coordinación y toma de decisiones financieras.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/56.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Cobranza ineficaz 
                p Los retrasos en la recuperación de cuentas por cobrar, incrementan el riesgo de cuentas incobrables, afectando el flujo de efectivo de la empresa. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/57.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Disminución de las utilidades 
                p Los resultados financieros reflejan una tendencia a la baja en las utilidades durante los últimos periodos, lo que pone en evidencia la falta de control y estrategia.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/58.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Políticas de crédito ineficaces
                p Las estrategias de crédito no cumplen su función de estimular las ventas sin comprometer la liquidez, lo que repercute negativamente en los ingresos. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/59.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Inversiones no rentables
                p Los proyectos de inversión ejecutados han generado resultados desfavorables, afectando la estabilidad financiera de la empresa.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/60.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Alto nivel de endeudamiento
                p La mayor parte del capital de la empresa proviene de financiamiento externo, lo que incrementa el riesgo financiero y limita la autonomía de la organización.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/61.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Información financiera tardía o incompleta
                p Los reportes financieros no se generan a tiempo o presentan inconsistencias, dificultando la toma de decisiones basadas en datos reales y actualizados. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/62.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Financiamiento inestable
                p La empresa enfrenta dificultades para acceder a recursos financieros adecuados, al punto de estar en riesgo de embargos o acciones legales por impagos.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/63.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Otras debilidades específicas
                p Dependiendo del giro y tamaño de la empresa, pueden surgir vulnerabilidades particulares que requieren atención personalizada.
                
        .bg-full-width.bg-color-2.mb-5(data-aos="fade-up") 
          .px-4.px-md-5.py-2
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/12.svg")
              .col-lg 
                p.mb-0 El análisis exhaustivo de las fortalezas y debilidades de la estructura financiera resulta esencial para diseñar estrategias que fortalezcan la posición económica de la empresa. Además, proporciona una base sólida para la mejora continua, garantizando no solo la supervivencia de la organización, sino también su desarrollo sostenido y rentable en el tiempo. 

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Procesos comerciales                             
      
    p(data-aos="fade-down") El análisis del proceso comercial es fundamental para comprender cómo una empresa gestiona sus relaciones con el mercado, desde la identificación de oportunidades hasta la fidelización de sus clientes. 

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Procesos comerciales 
            p.mb-4(data-aos="fade-right") En el PDF Procesos comerciales, se presenta una evaluación detallada de los factores que influyen en el desempeño comercial, destacando fortalezas como la estrategia definida, el uso de tecnología y la atención al cliente, así como debilidades que afectan la eficiencia de ventas. Este diagnóstico permite identificar oportunidades de mejora que fortalecen la competitividad y sostenibilidad empresarial.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Procesos comerciales

          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')      

    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Procesos productivos    
      
    p(data-aos="fade-down") Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-color-video.mb-5(data-aos="fade-left")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ur-Ee0Cpurg?si=HA26tZl5jCf5X6GZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Procesos de mercadotecnia 
      
    p(data-aos="fade-down") El diagnóstico de los procesos de mercadotecnia permite evaluar el desempeño del área encargada de generar valor para los clientes y posicionar eficazmente los productos o servicios de la empresa.
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Procesos de mercadotecnia 
            p.mb-4(data-aos="fade-right") En el PDF Procesos de mercadotecnia, se identifican fortalezas como el conocimiento del mercado, el desarrollo de estrategias efectivas y la fidelización de clientes, así como debilidades que limitan la competitividad y visibilidad de la marca. Este análisis proporciona una base para tomar decisiones estratégicas que fortalezcan la estructura comercial y aumenten el impacto de las acciones de marketing en el entorno empresarial.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Procesos de mercadotecnia 

    #t_4_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.6] Procesos de soporte
    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") Los procesos de soporte en una empresa, son actividades que respaldan las operaciones centrales, facilitando el funcionamiento eficiente de la organización; estos procesos, con frecuencia internos, incluyen áreas como recursos humanos, finanzas, tecnología de la información (TI), mantenimiento y atención al cliente. Su objetivo principal es proporcionar los recursos, el conocimiento y la infraestructura necesarios, para que los procesos principales, directamente relacionados con la producción de bienes o la prestación de servicios, puedan llevarse a cabo sin problemas. 

        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Un diagnóstico periódico permite identificar puntos débiles, cuellos de botella y áreas de mejora en la gestión de incidencias, el manejo de solicitudes y la resolución de problemas. Permiten optimizar recursos, reducir costos y mejorar la calidad del servicio al cliente, lo que se traduce en mayor lealtad y competitividad para la empresa. Además, facilitan la adaptación a las necesidades cambiantes del mercado y la detección de oportunidades de innovación.
              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/66.png", data-aos="zoom-in")  


    .bg-full-width.bg-color-6.mb-5
      .px-5
        .row.justify-content-center.align-items-center 
          .col-lg-4
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='')                  
          .col-lg-8                         
            p(data-aos="fade-down") Después de un diagnóstico de los procesos de soporte en una empresa, se pueden identificar diversas fortalezas y debilidades. Fortalezas comunes podrían ser:
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 La alta eficiencia en la resolución de problemas técnicos específicos. 

              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Un equipo de soporte experimentado.

              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 El uso de software de gestión de soporte avanzado.   

    p(data-aos="fade-down") Las debilidades podrían incluir:  

    .row.mb-3       
      .col-lg-3
        .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/68.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Tiempos de respuesta lentos. 

      .col-lg-3
        .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/69.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Falta de documentación clara. 

      .col-lg-3
        .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/70.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Poca comunicación entre departamentos.     

      .col-lg-3
        .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/72.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ausencia de métricas para medir el rendimiento del soporte. 

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/73.svg")
          .col-lg 
            p.mb-0 La correcta identificación de estas áreas, permite diseñar estrategias para optimizar los procesos, mejorar la satisfacción del cliente y aumentar la eficiencia operativa.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=360458488005" target="_blank" rel="noopener noreferrer") Pérez-Alfonso, D., Yzquierdo-Herrera, R., Pupo-Hernández, E. & Orellana-García, A. (2018). Minería de proceso para la comprensión del proceso en la etapa de diagnóstico. Ingeniería Industrial, 39(2), 146-159.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/1122941.pdf" target="_blank" rel="noopener noreferrer") García Suárez, J. L., Arias Álvarez, A. M. & Machado Cabezas, Á. (2002). Análisis de los procesos gerenciales en las pymes del sector metal-mecánico asturiano. Revista asturiana de economía, 23, 113-145.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=CTbC9H_JRco" target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2020). ¿Cómo se realiza un diagnóstico financiero? ¿Cómo se interpretan los ratios o indicadores? 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'DIAGNÓSTICO EMPRESARIAL',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo del diagnóstico interno en una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Determinar las oportunidades del mercado para la empresa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Analizar la estructura y recursos de la organización.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evaluar las condiciones políticas y legales externas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Identificar tendencias sociales y tecnológicas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes opciones representa un factor necesario del diagnóstico interno?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis de las oportunidades económicas globales.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Evaluación de la competencia externa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Análisis de los recursos humanos y financieros.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Estudio de las tendencias sociales emergentes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué aspecto analiza principalmente la evaluación de los recursos tangibles en la empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La cultura organizacional y los valores compartidos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La capacidad de innovación y desarrollo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Los activos físicos y tecnológicos disponibles.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La estructura del mercado y sus variaciones.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué herramienta es más efectiva para analizar los procesos internos de una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis PESTEL.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Matriz EFI.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Análisis de las 5 fuerzas de Porter.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Benchmarking sectorial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué ventaja proporciona el diagnóstico interno a la planificación estratégica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Define el entorno macroeconómico global.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejora la imagen corporativa externa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Facilita la optimización de recursos y procesos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Identifica tendencias del mercado internacional.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
