const libros = [
  {
    id: 1,
    titulo: "Clean Code: A Handbook of Agile Software Craftsmanship",
    autor: "Robert C. Martin",
    imagen: "https://m.media-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
    descripcion: "es un libro escrito por Robert C. Martin, también conocido como Uncle Bob, que explora los principios, patrones y prácticas para escribir código limpio y legible. El libro enfatiza la importancia de la mantenibilidad, la claridad y la eficiencia en el desarrollo de software, especialmente dentro de marcos ágiles. "
  },
  {
    id: 2,
    titulo: "Introduction to Algorithms",
    autor: "Thomas H. Cormen",
    imagen: "https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg",
    descripcion: "Es uno de los libros más utilizados en universidades para aprender algoritmos y estructuras de datos de forma rigurosa y clara. Explica desde algoritmos básicos (ordenamiento, búsqueda, estructuras de datos) hasta temas avanzados"
  },
  {
    id: 3,
    titulo: "Artificial Intelligence: A Modern Approach",
    autor: "Stuart Russell y Peter Norvig",
    imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTaieIdxAqcWGClF1fDP2HRRgap1p8QRPJkY1yzC8yqAOSegl22",
    descripcion: "Es el libro de referencia más utilizado a nivel mundial para aprender inteligencia artificial de forma completa y estructurada. Cubre desde los conceptos básicos de IA (búsqueda, razonamiento, planificación) hasta temas avanzados como aprendizaje automático, redes neuronales, robótica, percepción y procesamiento de lenguaje natural."
  },
  {
    id: 4,
    titulo: "Database System Concepts",
    autor: "Abraham Silberschatz",
    imagen: "https://m.media-amazon.com/images/I/910yOzXfVXL._AC_UF1000,1000_QL80_.jpg",
    descripcion: "Este libro es un texto fundamental para aprender conceptos de sistemas de bases de datos de forma clara y gradual. Cubre modelos de datos (relacional, entidad-relación), diseño de bases de datos, SQL, integridad y seguridad de datos, procesamiento de consultas, transacciones y recuperación."
  },
  {
    id: 5,
    titulo: "Computer Networking: A Top-Down Approach",
    autor: "James Kurose y Keith Ross",
    imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzpPbmAcwhkvuonSRWG6pPOgKVnjlkYRCSs_SRKGJEqnvCSLPa",
    descripcion: "Es un libro ampliamente utilizado para aprender redes de computadoras de forma práctica y conceptual, iniciando desde aplicaciones y servicios de red (HTTP, FTP, correo electrónico) y descendiendo hacia capas inferiores como transporte, red, enlace de datos y física. Su enfoque top-down facilita entender cómo funcionan las redes en la práctica antes de adentrarse en detalles de implementación, protocolos, control de congestión, enrutamiento y seguridad de redes."
  },
  {
    id: 6,
    titulo: "Fundamentos de Enfermería",
    autor: "Barbara Kozier, Glenora Erb",
    imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/67/c0/67c0643df4dc1d269b604224ee98e4d3.jpg",
    descripcion: "Este libro ofrece una visión completa de los principios, teorías y prácticas esenciales en enfermería, abarcando el cuidado del paciente, necesidades básicas, procedimientos clínicos, ética, comunicación y trabajo en equipo en el entorno de salud. Incluye guías paso a paso, ilustraciones y casos prácticos que facilitan la comprensión y aplicación de técnicas de cuidado, valoración del paciente y planificación de intervenciones de enfermería."
  },
  {
    id: 7,
    titulo: "Fundamentals of Financial Management",
    autor: "Eugene F. Brigham",
    imagen: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1534992206i/41437885.jpg",
    descripcion: "Este libro es un texto clave para aprender los principios esenciales de la gestión financiera, incluyendo la administración del capital, decisiones de inversión, financiamiento, análisis financiero y planeación financiera en las empresas. Explica de manera clara y con ejemplos prácticos cómo las decisiones financieras impactan en el valor de las organizaciones, integrando teoría con aplicaciones reales y herramientas para la toma de decisiones efectivas."
  },
  {
    id: 8,
    titulo: "Psicología: La Ciencia de la Mente y la Conducta",
    autor: "Richard Gross",
    imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/55/1f/551fb5757b463ba17548239c9cd2a65f.jpg",
    descripcion: "Este libro ofrece una visión integral de la psicología como ciencia, abarcando teorías, investigaciones y aplicaciones relacionadas con los procesos mentales y la conducta humana. Explica temas como percepción, aprendizaje, memoria, motivación, personalidad y psicopatología de forma clara y con ejemplos actualizados. Incluye estudios de caso, investigaciones recientes y explicaciones accesibles que ayudan a comprender cómo se estudia el comportamiento humano desde una perspectiva científica."
  },
  {
    id: 9,
    titulo: "Principios de Contabilidad",
    autor: "Belverd E. Needles",
    imagen: "https://legisco.vteximg.com.br/arquivos/ids/165135-1000-1000/241696.jpg?v=638442196068600000",
    descripcion: "Este libro introduce los fundamentos de la contabilidad, explicando conceptos clave como el activo, pasivo, patrimonio, ingresos y gastos, así como el proceso contable desde el registro de transacciones hasta la elaboración de estados financieros. Incluye ejemplos prácticos, ejercicios y casos de estudio que facilitan la comprensión del ciclo contable, normas contables y la interpretación de la información financiera para la toma de decisiones."
  },
  {
    id: 10,
    titulo: "Derecho Constitucional Mexicano",
    autor: "Felipe Tena Ramírez",
    imagen: "https://libreriatemis.com/wp-content/uploads/2020/09/09-701-0748.jpg",
    descripcion: "Este libro es una obra clásica para entender la estructura, principios y funcionamiento del derecho constitucional en México, explicando de forma clara la Constitución, los derechos humanos, la división de poderes, la organización del Estado y los mecanismos de control constitucional. Incluye análisis de artículos constitucionales, casos relevantes y reflexiones sobre el papel del derecho en la sociedad mexicana, facilitando la comprensión del marco legal y su aplicación práctica."
  },
  {
    id: 11,
    titulo: "Organizational Behavior",
    autor: "Stephen P. Robbins",
    imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/8b/b8/8bb885d5dd6dba87dc6b210a09bc836a.jpg",
    descripcion: "El comportamiento de las personas dentro de las organizaciones, analizando cómo actitudes, percepciones, motivación, liderazgo, comunicación y cultura organizacional impactan en el rendimiento y la dinámica de trabajo. Presenta teorías clave, investigaciones actualizadas y casos prácticos que permiten conectar la teoría con situaciones reales en la gestión de equipos y la toma de decisiones en entornos organizacionales."
  },
  {
    id: 12,
    titulo: "Introduction to Algorithms",
    autor: "Thomas H. Cormen",
    imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/ce/4d/ce4daab00e405bca345cfbbf20b5c8df.jpg",
    descripcion: "Un referente global para aprender algoritmos y estructuras de datos de manera rigurosa y accesible. Explica algoritmos de ordenamiento, búsqueda, grafos, programación dinámica, estructuras avanzadas y análisis de complejidad con pseudocódigo claro y explicaciones detalladas. Combina teoría con aplicaciones prácticas, permitiendo entender cómo diseñar algoritmos eficientes y analizar su comportamiento en diferentes situaciones computacionales."
  },
  {
    id: 13,
    titulo: "Inteligencia Emocional",
    autor: "Daniel Goleman",
    imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/fd/b9/fdb97de5c55ee46e4bc59973a6ff9a48.jpg",
    descripcion: "Explora cómo la inteligencia emocional influye en el éxito personal, académico y profesional, destacando la importancia de habilidades como el autocontrol, la empatía, la automotivación y las relaciones interpersonales para manejar adecuadamente las emociones. Combina investigaciones en psicología y neurociencia para explicar cómo las emociones afectan la toma de decisiones y el bienestar, proporcionando estrategias prácticas para desarrollar la inteligencia emocional en la vida diaria."
  },
  {
    id: 14,
    titulo: "Macroeconomía",
    autor: "Olivier Blanchard",
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/33/7d/337de0fe1969baac54699bc5a0a9b05b.jpg",
    descripcion: "Este libro es un texto fundamental para aprender cómo funcionan las economías a nivel general, explicando conceptos clave como el producto interno bruto (PIB), inflación, desempleo, crecimiento económico, políticas fiscales y monetarias. Incluye ejemplos actuales, gráficos claros y casos prácticos que facilitan la comprensión de cómo las políticas económicas y los factores externos impactan en el funcionamiento de un país y en la vida de las personas."
  },
  {
    id: 15,
    titulo: "Ingeniería de Software",
    autor: "Ian Sommerville",
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/f8/78/f878362b2a6c71f5e7125eafff09a82c.jpg",
    descripcion: "Este libro es una referencia esencial para aprender cómo desarrollar software de calidad de forma estructurada y eficiente, abarcando todo el ciclo de vida del software: análisis de requisitos, diseño, implementación, pruebas, mantenimiento y gestión de proyectos. Explica métodos de desarrollo, buenas prácticas, gestión de riesgos y principios de calidad, combinando teoría con ejemplos prácticos y casos de estudio aplicados a proyectos reales."
  }
];

export default libros;