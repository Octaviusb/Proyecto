function openPopup(contentId) {
    const content = {
        diagnostico: `
            <h2>Diagnóstico y Evaluación Inicial</h2>
            <p>Investigación Participativa: Realizar estudios y encuestas participativas para entender las necesidades, problemas y aspiraciones de las comunidades locales.</p>
            <p>Mapeo de Actores: Identificar los actores clave, incluidos líderes comunitarios, organizaciones no gubernamentales (ONG), agencias gubernamentales y el sector privado.</p>
        `,
        educacion: `
            <h2>Educación y Sensibilización</h2>
            <p>Programas de Capacitación: Implementar programas educativos que promuevan la equidad de género, los derechos humanos y la resolución pacífica de conflictos.</p>
            <p>Campañas de Sensibilización: Realizar campañas para concienciar sobre la importancia de la justicia social y los derechos de todas las personas.</p>
        `,
        fortalecimiento: `
            <h2>Fortalecimiento Institucional y de Liderazgo</h2>
            <p>Formación de Líderes Locales: Capacitar a líderes comunitarios en temas de justicia social, gobernanza y desarrollo sostenible.</p>
            <p>Fortalecimiento de Instituciones Locales: Apoyar la creación y el fortalecimiento de instituciones locales que promuevan la justicia social.</p>
        `,
        desarrollo: `
            <h2>Desarrollo Económico Inclusivo</h2>
            <p>Proyectos de Emprendimiento: Fomentar proyectos de emprendimiento local que generen empleo y reduzcan la pobreza.</p>
            <p>Acceso a Recursos Financieros: Facilitar el acceso a microcréditos y otros recursos financieros para las comunidades vulnerables.</p>
        `,
        servicios: `
            <h2>Acceso a Servicios Básicos</h2>
            <p>Salud y Educación: Mejorar el acceso a servicios de salud y educación de calidad para todas las comunidades.</p>
            <p>Infraestructura Básica: Invertir en infraestructura básica como agua potable, saneamiento, y energía.</p>
        `,
        seguridad: `
            <h2>Seguridad y Protección</h2>
            <p>Prevención de Violencia: Implementar programas de prevención de la violencia y protección para las comunidades afectadas por conflictos.</p>
            <p>Justicia y Reconciliación: Promover iniciativas de justicia transicional y reconciliación para sanar las heridas del pasado.</p>
        `,
        sostenibilidad: `
            <h2>Sostenibilidad Ambiental</h2>
            <p>Gestión de Recursos Naturales: Fomentar prácticas de gestión sostenible de los recursos naturales para asegurar el bienestar a largo plazo de las comunidades.</p>
            <p>Adaptación al Cambio Climático: Implementar medidas de adaptación al cambio climático que protejan a las comunidades vulnerables.</p>
        `,
        fase1: `
            <h2>Fase 1: Planificación y Diseño</h2>
            <p>Definición de Objetivos y Metas: Establecer objetivos claros y metas medibles para el proyecto.</p>
            <p>Consultas Comunitarias: Realizar consultas con las comunidades locales para asegurar que sus voces sean escuchadas y sus necesidades sean incluidas en el diseño del proyecto.</p>
            <p>Búsqueda de Financiación: Identificar y asegurar financiamiento a través de donantes, ONG, y entidades gubernamentales.</p>
        `,
        fase2: `
            <h2>Fase 2: Implementación</h2>
            <p>Puesta en Marcha de Programas: Implementar los programas y proyectos definidos en la fase de planificación.</p>
            <p>Monitoreo y Evaluación: Establecer sistemas de monitoreo y evaluación para medir el impacto del proyecto y realizar ajustes necesarios.</p>
        `,
        fase3: `
            <h2>Fase 3: Sostenibilidad y Expansión</h2>
            <p>Capacitación Continua: Asegurar la capacitación continua de líderes y miembros de la comunidad.</p>
            <p>Escalabilidad: Evaluar la posibilidad de expandir las iniciativas exitosas a otras áreas del Cauca.</p>
        `
    };

    document.getElementById('popup-content').innerHTML = content[contentId];
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
