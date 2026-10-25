// Spanish is the source of truth; `en` must match its shape, so a missing translation fails `astro check`.
const es = {
  'meta.title': 'Francisco Ramírez Cañadas · Ingeniero del Software',
  'meta.desc': 'Portfolio de Francisco Ramírez Cañadas, Ingeniero del Software en Málaga: Java (Spring Boot, Spring AI), Python, apps móviles e IA generativa.',
  'meta.ogDesc': 'Ingeniero del Software en Málaga. Backends con Java y Python, apps móviles e IA generativa. Proyectos, experiencia y CV.',
  'meta.twDesc': 'Ingeniero del Software en Málaga. Backends con Java y Python, apps móviles e IA generativa.',
  'meta.ogAlt': 'Francisco Ramírez, Ingeniero del Software',
  'meta.locale': 'es_ES',
  'meta.genAI': 'IA generativa',
  cv: 'cv/CV_Francisco_Ramirez_Canadas_ES.pdf',
  mailSubject: 'Contacto desde tu portfolio',

  'nav.label': 'Principal',
  'nav.exp': 'Experiencia', 'nav.proj': 'Proyectos', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto', 'nav.menu': 'Menú',
  'nav.switch': 'EN', 'nav.switchLabel': 'Switch to English',

  'hero.label': 'Inicio',
  'hero.build': 'Construyo', 'hero.status': 'Disponible',
  'hero.cta': 'Ver CV', 'hero.alt': 'Escríbeme',
  rot: ['backends con Java y Python', 'apps móviles con React Native', 'agentes de IA y servidores MCP'],

  'exp.h': 'Experiencia',
  'exp.ntt': 'Ingeniero del Software en prácticas', 'exp.ntt.0': 'NTT DATA Europe &amp; Latam · Málaga', 'exp.ntt.d': 'abr – jun 2026',
  'exp.ntt.1': 'Script híbrido en Python con IA generativa para procesar configuraciones YAML (Proyecto EPO)',
  'exp.ntt.2': 'Dos prototipos en Spring Boot con H2 que evolucionaron a un servidor MCP con Spring AI',
  'exp.ntt.3': 'Esquemas JSON y documentos PDF generados con Spec-Driven Development',
  'exp.ntt.4': 'Demo en vivo del trabajo ante el equipo de IA y formación en GenAI, Kubernetes y Git', 'exp.ntt.4v': 'Demo',
  'exp.uma': 'Grado en Ingeniería del Software', 'exp.uma.0': 'Universidad de Málaga',
  'exp.uma.1': 'Requisitos, arquitectura, mantenimiento, pruebas y gestión de proyectos', 'exp.uma.1v': 'Ciclo de vida',
  'exp.uma.2': 'Tecnologías web, UI/UX, desarrollo móvil y sistemas distribuidos', 'exp.uma.2v': 'Web y móvil',
  'exp.uma.3': 'TFG: Armario Virtual Inteligente, app full-stack con IA', 'exp.uma.3v': 'Ver proyecto ↓',

  'proj.h': 'Proyectos',
  'p1.d': 'Convierte vídeos de YouTube en Shorts verticales 9:16 con encuadre que sigue la cara y subtítulos animados generados con IA, procesados por un worker asíncrono.',
  'p2.d': 'Servidor MCP para gestionar tu búsqueda de empleo desde tu cliente de IA: registra candidaturas, analiza qué te falta para cada oferta y prepara las entrevistas técnicas.',
  'p3.t': 'Armario Virtual',
  'p3.d': 'Mi Trabajo Fin de Grado: una app móvil para digitalizar tu armario. Añades prendas desde una foto analizada por IA y Gemini te propone conjuntos según el tiempo y la ocasión.',
  'p4.d': 'Web full-stack para reseñar lugares: inicias sesión con Google, puntúas de 0 a 5, subes fotos y ves todas las reseñas en un mapa interactivo.',
  'lnk.code': 'Ver código →',

  'about.h': 'Sobre mí',
  'about.stairs': '<span>Me gusta entender</span><span>cómo funcionan las cosas,</span><span>aprender rápido</span><span>y que lo que hago</span><span>se use <em class="mark">de verdad</em>.</span>',
  'about.f4t': 'Base', 'about.f4': 'Málaga, España',
  'about.f2t': 'Idiomas', 'about.f2': 'Español nativo · Inglés C1 (Cambridge)',
  'about.f3t': 'Fuera del código', 'about.f3': 'Gimnasio y viajes',

  'contact.h': 'Contacto', 'contact.sub': '¿Un proyecto o una vacante? Me encantará escucharte.',
  'contact.role': 'Ingeniero del Software', 'foot.up': 'Volver arriba ↑',
};

export type Dict = typeof es;

const en: Dict = {
  'meta.title': 'Francisco Ramírez Cañadas · Software Engineer',
  'meta.desc': 'Portfolio of Francisco Ramírez Cañadas, Software Engineer in Málaga: Java (Spring Boot, Spring AI), Python, mobile apps and generative AI.',
  'meta.ogDesc': 'Software Engineer in Málaga. Java and Python backends, mobile apps and generative AI. Projects, experience and CV.',
  'meta.twDesc': 'Software Engineer in Málaga. Java and Python backends, mobile apps and generative AI.',
  'meta.ogAlt': 'Francisco Ramírez, Software Engineer',
  'meta.locale': 'en_US',
  'meta.genAI': 'Generative AI',
  cv: 'cv/CV_Francisco_Ramirez_Canadas_EN.pdf',
  mailSubject: 'Contact from your portfolio',

  'nav.label': 'Main',
  'nav.exp': 'Experience', 'nav.proj': 'Projects', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.menu': 'Menu',
  'nav.switch': 'ES', 'nav.switchLabel': 'Cambiar a español',

  'hero.label': 'Home',
  'hero.build': 'I build', 'hero.status': 'Available',
  'hero.cta': 'View CV', 'hero.alt': 'Get in touch',
  rot: ['Java and Python backends', 'mobile apps with React Native', 'AI agents and MCP servers'],

  'exp.h': 'Experience',
  'exp.ntt': 'Software Engineer intern', 'exp.ntt.0': 'NTT DATA Europe &amp; Latam · Málaga', 'exp.ntt.d': 'Apr – Jun 2026',
  'exp.ntt.1': 'Hybrid Python script with generative AI to process YAML configurations (EPO Project)',
  'exp.ntt.2': 'Two Spring Boot prototypes with H2 that evolved into an MCP server with Spring AI',
  'exp.ntt.3': 'JSON schemas and PDF documents generated with Spec-Driven Development',
  'exp.ntt.4': 'Live demo of the work to the AI team and training in GenAI, Kubernetes and Git', 'exp.ntt.4v': 'Demo',
  'exp.uma': 'BSc in Software Engineering', 'exp.uma.0': 'University of Málaga',
  'exp.uma.1': 'Requirements, architecture, maintenance, testing and project management', 'exp.uma.1v': 'Lifecycle',
  'exp.uma.2': 'Web technologies, UI/UX, mobile development and distributed systems', 'exp.uma.2v': 'Web & mobile',
  'exp.uma.3': 'Final project: Smart Virtual Wardrobe, a full-stack app with AI', 'exp.uma.3v': 'See project ↓',

  'proj.h': 'Projects',
  'p1.d': 'Turns YouTube videos into vertical 9:16 Shorts with face-tracked framing and animated AI subtitles, processed by an asynchronous worker.',
  'p2.d': 'MCP server to run your job search from your AI client: track applications, see what you are missing for each posting and prepare for technical interviews.',
  'p3.t': 'Virtual Wardrobe',
  'p3.d': 'My final degree project: a mobile app to digitise your wardrobe. Add clothes from an AI-analysed photo and let Gemini suggest outfits based on the weather and the occasion.',
  'p4.d': 'Full-stack web app to review places: sign in with Google, rate from 0 to 5, upload photos and see every review on an interactive map.',
  'lnk.code': 'View code →',

  'about.h': 'About me',
  'about.stairs': '<span>I like understanding</span><span>how things work,</span><span>learning fast</span><span>and seeing what I build</span><span>used <em class="mark">for real</em>.</span>',
  'about.f4t': 'Based in', 'about.f4': 'Málaga, Spain',
  'about.f2t': 'Languages', 'about.f2': 'Native Spanish · English C1 (Cambridge)',
  'about.f3t': 'Away from the code', 'about.f3': 'Gym and travel',

  'contact.h': 'Contact', 'contact.sub': 'A project or a job opening? I’d love to hear from you.',
  'contact.role': 'Software Engineer', 'foot.up': 'Back to top ↑',
};

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui: Record<Lang, Dict> = { es, en };

/** Public-folder path with the site's base prefixed, so a later custom domain only touches astro.config. */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path}`;
