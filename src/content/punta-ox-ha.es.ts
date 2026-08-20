// ─────────────────────────────────────────────────────────────
// Punta Ox Ha — Contenido (locale es / espejo de punta-ox-ha.ts)
// Voz: anfitrión cálido en primera persona, frases ancla preservadas
// (oasis con patio central · a pasos del surf · Starlink Wi-Fi ·
//  surfistas, nómadas digitales · relajarte y recargar energías).
// `Suite` type y `booking` se reexportan sin cambios (URLs/IDs).
// ─────────────────────────────────────────────────────────────

import type { Suite } from './punta-ox-ha';
export { booking } from './punta-ox-ha';

export const suites: Suite[] = [
  {
    slug: 'casa-keiki',
    name: 'Casa Keiki',
    essence: 'Sales por tu puerta directo al patio, y del patio directo a la alberca.',
    story:
      'Casa Keiki está en la planta del jardín, donde el patio central es tu antejardín y la alberca queda a unos pasos descalzos. Aquí las mañanas empiezan despacio: café afuera, un chapuzón antes de que apriete el calor, y el surf a dos minutos calle abajo cuando estés listo.',
    type: 'Estudio',
    floor: 'Planta baja',
    sleeps: '2 huéspedes',
    bestFor: 'Ideal para parejas que quieren la alberca a un paso de la cama.',
    amenities: ['Acceso directo a alberca y patio', 'Aire acondicionado', 'Wi-Fi fibra + Starlink', 'Cocineta'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-keiki/hero.jpg', alt: 'Casa Keiki — casa a nivel del jardín que abre al patio central' },
    gallery: [
      { src: '/suites/casa-keiki/01.jpg', alt: 'Rincón de estar de Casa Keiki — sillón de mimbre y plantas junto a la puerta a nivel jardín', caption: 'Rincón de estar' },
      { src: '/suites/casa-keiki/02.jpg', alt: 'Estudio de Casa Keiki — cama y cocineta en un solo espacio abierto y luminoso', caption: 'El estudio' },
      { src: '/suites/casa-keiki/03.jpg', alt: 'Recámara de Casa Keiki — colcha estampada sobre una pared de acento cálida con arte enmarcado', caption: 'Recámara' },
      { src: '/suites/casa-keiki/04.jpg', alt: 'Cocineta de Casa Keiki — estufa de gas y cafetera junto a una ventana soleada', caption: 'Cocineta' },
      { src: '/suites/casa-keiki/05.jpg', alt: 'Casa Keiki — mesa de comedor junto a la puerta abierta al patio', caption: 'Comedor — puerta al patio' },
      { src: '/suites/casa-keiki/06.jpg', alt: 'Baño de Casa Keiki — lavabo de pedestal, inodoro y regadera con cancel de vidrio', caption: 'Baño' },
    ],
  },
  {
    slug: 'casa-mia',
    name: 'Casa Mia',
    essence: 'Dos recámaras, una cocina completa y una terraza junto a la alberca: nuestro hogar para familias y amigos.',
    story:
      'Casa Mia es el hogar más grande de la casa: dos recámaras, una sala, una cocina completa para desayunos largos y una terraza que abre directo al patio central y la alberca. Pensada para familias, grupos de amigos que viajan juntos y para quien quiera espacio de sobra sin salir del oasis.',
    type: 'Dos habitaciones',
    floor: 'Planta baja',
    sleeps: '4 huéspedes',
    bestFor: 'Ideal para familias y amigos — cocina completa, sala y terraza junto a la alberca.',
    amenities: ['Cocina completa', 'Sala', 'Terraza junto a la alberca', 'Aire acondicionado', 'Ventiladores de techo', 'Wi-Fi fibra + Starlink'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-mia/hero.jpg', alt: 'Casa Mia — hogar de dos recámaras con terraza junto a la alberca' },
    gallery: [
      { src: '/suites/casa-mia/01.jpg', alt: 'Sala principal de Casa Mia — sala abierta y barra de cocina con asientos sobre pisos de madera', caption: 'Sala principal' },
      { src: '/suites/casa-mia/02.jpg', alt: 'Sala de Casa Mia — sofá y sillón que abren a través de puertas de vidrio al patio', caption: 'Sala' },
      { src: '/suites/casa-mia/03.jpg', alt: 'Casa Mia — diván junto a la ventana con vista a la alberca', caption: 'Diván — vista a la alberca' },
      { src: '/suites/casa-mia/04.jpg', alt: 'Recámara de Casa Mia — cama junto a una ventana luminosa', caption: 'Recámara' },
      { src: '/suites/casa-mia/05.jpg', alt: 'Comedor de Casa Mia — mesa redonda con trinchador de madera y espejo sol', caption: 'Comedor' },
      { src: '/suites/casa-mia/06.jpg', alt: 'Estancia de Casa Mia — sofá estampado con cojines bajo un tapiz de macramé', caption: 'Estancia' },
      { src: '/suites/casa-mia/07.jpg', alt: 'Baño de Casa Mia — lavabo con aplique y ganchos para toallas', caption: 'Baño' },
    ],
  },
  {
    slug: 'casa-peach',
    name: 'Casa Peach',
    essence: 'Una casa de una recámara en planta alta con su propia terraza techada.',
    story:
      'Casa Peach es un hogar completo de una recámara en la planta alta: sala y comedor abiertos, cocina propia y una recámara king con escritorio para quien mezcla trabajo y surf. La terraza techada es el corazón: una hamaca, un diván lleno de cojines de calaveritas y el verde de La Punta al fondo. Mañanas lentas, tardes largas.',
    type: 'Una recámara',
    floor: 'Planta alta',
    sleeps: '2 huéspedes',
    bestFor: 'Ideal para trabajar y surfear — escritorio, cocina y terraza techada.',
    amenities: ['Terraza techada privada', 'Cocina completa', 'Sala y comedor', 'Escritorio', 'Aire acondicionado', 'Wi-Fi fibra + Starlink'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-peach/hero.jpg', alt: 'Casa Peach — terraza techada con hamaca y diván con cojines de calaveritas' },
    gallery: [
      { src: '/suites/casa-peach/01.jpg', alt: 'Sala de Casa Peach — diván junto a las puertas de vidrio con cortinas hacia la terraza', caption: 'Sala' },
      { src: '/suites/casa-peach/02.jpg', alt: 'Recámara de Casa Peach — cama king contra una pared naranja quemado con cuadros', caption: 'Recámara — king' },
      { src: '/suites/casa-peach/03.jpg', alt: 'Recámara de Casa Peach — armario de madera oscura y escritorio bajo un retrato', caption: 'Recámara — escritorio' },
      { src: '/suites/casa-peach/04.jpg', alt: 'Cocina de Casa Peach — estufa de gas, cafetera y refrigerador grande', caption: 'Cocina' },
      { src: '/suites/casa-peach/05.jpg', alt: 'Rincón de estar de Casa Peach — diván estampado con cojines junto a las sillas del comedor y una lámpara de lectura', caption: 'Rincón de estar' },
      { src: '/suites/casa-peach/06.jpg', alt: 'Baño de Casa Peach — regadera con cancel de vidrio, azulejo ámbar y toallero surtido', caption: 'Baño' },
    ],
  },
  {
    slug: 'casa-yada',
    name: 'Casa Yada',
    essence: 'Una cama king, una terraza privada y el patio central a un tramo de escaleras.',
    story:
      'Casa Yada es el punto medio relajado de la casa: segundo piso, cama king, una terraza privada para dos. Lo bastante cerca del patio central para sentir la vida del lugar, lo bastante lejos para desaparecer cuando quieras. La casa que nuestros huéspedes que regresan piden por su nombre.',
    type: 'Una recámara',
    floor: 'Segundo piso',
    sleeps: '2 huéspedes · Cama king',
    bestFor: 'Ideal para parejas — cama king y terraza privada.',
    amenities: ['Cama king', 'Terraza privada', 'Aire acondicionado', 'Wi-Fi fibra + Starlink'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-yada/hero.jpg', alt: 'Casa Yada — cama king y terraza privada' },
    gallery: [
      { src: '/suites/casa-yada/01.jpg', alt: 'Barra de café de Casa Yada', caption: 'Barra de café' },
      { src: '/suites/casa-yada/02.jpg', alt: 'Sala de Casa Yada', caption: 'Sala' },
      { src: '/suites/casa-yada/05.jpg', alt: 'Recámara de Casa Yada', caption: 'Recámara — king' },
      { src: '/suites/casa-yada/06.jpg', alt: 'Balcón de Casa Yada', caption: 'Balcón' },
      { src: '/suites/casa-yada/03.jpg', alt: 'Baño de Casa Yada', caption: 'Baño' },
      { src: '/suites/casa-yada/04.jpg', alt: 'Regadera de Casa Yada', caption: 'Regadera' },
    ],
  },
  {
    slug: 'casa-linda',
    name: 'Casa Linda',
    essence: 'Nuestro hogar amplio del segundo piso para familias y grupos pequeños.',
    story:
      'Casa Linda ocupa el segundo piso con espacio de sobra: dos recámaras y lugar para un grupo pequeño. Grupos de amigos, familias con niños que se quedan dormidos a media frase después de un día en el agua: este es su hogar. El patio central y la alberca están un tramo de escaleras abajo.',
    type: 'Dos habitaciones',
    floor: 'Segundo piso',
    sleeps: '4 huéspedes',
    bestFor: 'Ideal para familias y grupos pequeños — dos recámaras, a un piso del patio.',
    amenities: ['Dos recámaras', 'Aire acondicionado', 'Ventiladores de techo', 'Wi-Fi fibra + Starlink'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-linda/hero.jpg', alt: 'Casa Linda — sala del segundo piso con diván en L, macramé y luz cálida' },
    gallery: [
      { src: '/suites/casa-linda/01.jpg', alt: 'Rincón de balcón de Casa Linda — una planta frondosa y asiento junto a la ventana soleada', caption: 'Rincón del balcón' },
      { src: '/suites/casa-linda/02.jpg', alt: 'Recámara de Casa Linda — cama con retrato enmarcado y repisas abiertas', caption: 'Recámara uno' },
      { src: '/suites/casa-linda/03.jpg', alt: 'Recámara de Casa Linda — cama junto a un clóset de persianas y repisas empotradas', caption: 'Recámara uno' },
      { src: '/suites/casa-linda/04.jpg', alt: 'Segunda recámara de Casa Linda — cama bajo un cuadro floral llamativo', caption: 'Recámara dos' },
      { src: '/suites/casa-linda/05.jpg', alt: 'Segunda recámara de Casa Linda — cama con el cuadro floral y repisas abiertas', caption: 'Recámara dos' },
      { src: '/suites/casa-linda/06.jpg', alt: 'Cocina de Casa Linda — cocina completa y mesa de comedor con sillas tejidas', caption: 'Cocina y comedor' },
      { src: '/suites/casa-linda/07.jpg', alt: 'Cocina de Casa Linda — estufa de gas, cafetera y barra de preparación', caption: 'Cocina' },
      { src: '/suites/casa-linda/08.jpg', alt: 'Baño de Casa Linda — regadera', caption: 'Baño — regadera' },
    ],
  },
  {
    slug: 'casa-bel',
    name: 'Casa Bel',
    essence: 'El hogar de la planta alta — cocina completa, sala y una gran terraza privada.',
    story:
      'Casa Bel es el hogar de la planta alta: una casa completa con cocina propia, sala y una amplia terraza privada con hamaca. Prepara un desayuno largo, trabaja a la sombra de la tarde, mira cómo se suaviza la luz sobre La Punta. Espacio para instalarte de verdad, con el surf a dos minutos calle abajo.',
    type: 'Una recámara',
    floor: 'Planta alta',
    sleeps: '2 huéspedes',
    bestFor: 'Ideal para estancias largas — cocina completa y terraza privada amplia.',
    amenities: ['Terraza privada', 'Cocina completa', 'Sala', 'Aire acondicionado', 'Ventiladores de techo', 'Wi-Fi fibra + Starlink'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-bel/hero.jpg', alt: 'Casa Bel — terraza en planta alta con hamaca, mesa de madera de tronco y luz abierta de la tarde' },
    gallery: [
      { src: '/suites/casa-bel/01.jpg', alt: 'Sala de Casa Bel — sillón y refrigerador junto a las puertas corredizas que abren a la terraza privada', caption: 'Sala' },
      { src: '/suites/casa-bel/02.jpg', alt: 'Cocina de Casa Bel — cocina completa con estufa de gas, refrigerador y mesa de madera', caption: 'Cocina' },
      { src: '/suites/casa-bel/03.jpg', alt: 'Comedor de Casa Bel — mesa de madera maciza con sillas tejidas bajo un cuadro de arte popular', caption: 'Comedor' },
      { src: '/suites/casa-bel/04.jpg', alt: 'Recámara de Casa Bel — cama vestida bajo un cuadro de arte popular, con aplique tejido y lámpara de buró', caption: 'Recámara' },
      { src: '/suites/casa-bel/05.jpg', alt: 'Recámara de Casa Bel — televisión en una cómoda de madera tallada, con la puerta abierta al baño y una ventana llena de luz', caption: 'Recámara — baño en suite' },
    ],
  },
];

// ── Extras — add-ons reservables (rentas / experiencias) ──
export const extras = [
  {
    slug: 'moto',
    name: 'Renta de moto',
    essence: 'Dos ruedas para explorar la costa a tu ritmo.',
    detail: 'Olvídate de los taxis — muévete al surf, al mercado y a los atardeceres costa arriba. Reserva una con tu estancia.',
    priceLine: null,
    qty: 2,
    images: [
      { src: '/extras/moto.jpg', alt: 'Una moto de renta estacionada en el patio' },
      { src: '/extras/moto-2.jpg', alt: 'La segunda moto de renta en el patio' },
    ],
  },
  {
    slug: 'surfboard',
    name: 'Renta de tabla',
    essence: 'Toma una tabla y camina directo al point break.',
    detail: 'La izquierda suave de La Punta está a dos minutos. Quédate con una tabla durante toda tu estancia.',
    priceLine: null,
    qty: 2,
    images: [{ src: '/extras/surfboard.jpg', alt: 'Dos tablas de surf recargadas en la pared, listas para usar' }],
  },
];

// Tours — menú tipográfico (sin marca del socio, solo por consulta).
export const tours = [
  { name: 'Laguna bioluminiscente', line: 'Nado nocturno en agua que brilla, a veinte minutos por la costa.' },
  { name: 'Liberación de tortugas', line: 'Suelta crías de tortuga en una playa a la hora dorada.' },
  { name: 'Avistamiento de delfines', line: 'Amanecer en mar abierto — de noviembre a marzo se suman las ballenas.' },
  { name: 'Laguna de Chacahua', line: 'Un día entero de manglares, islas flotantes y una playa vacía.' },
  { name: 'Cabalgata al atardecer', line: 'Cabalga los campos del río Manialtepec hasta un atardecer en la playa.' },
  { name: 'Mazunte y Punta Cometa', line: 'Día de pueblo mágico que termina en la punta sagrada al atardecer.' },
];

export const toursMore =
  'También en el menú: catas de mezcal, tirolesas, cascadas, esnórquel, pesca deportiva y las bahías de Huatulco. Cuéntanos qué te late — lo armamos con los guías locales con quienes trabajamos.';

// ── Contenido de la página de inicio ─────────────────────────

export const manifesto = {
  eyebrow: 'Bienvenido a nuestra casa',
  body:
    "Punta Ox Ha' son seis casas alrededor de un oasis con patio central en La Punta, a pasos del surf, de los cafés y de la vida tranquila de Puerto Escondido. La construimos para surfistas que persiguen la ola perfecta, nómadas digitales en busca de inspiración y para cualquiera que simplemente quiera relajarse y recargar energías. Quédate unas noches y el lugar empieza a sentirse tuyo; quédate una semana y el barrio también.",
};

export const splits = [
  {
    eyebrow: 'El patio central',
    title: 'Una alberca en medio de todo.',
    body:
      'El patio central es el corazón de la casa: una alberca para refrescarte, sombra para leer y ese tipo de espacio común donde los desconocidos terminan compartiendo planes para la cena. Tranquilo cuando quieres silencio, sociable cuando quieres compañía.',
    cta: { label: 'Descubre las casas', href: '/suites' },
    image: { src: '/hero/courtyard.jpg', alt: 'Vista cenital de la alberca del patio — agua turquesa, un flotador, sombrillas y vegetación alrededor' },
  },
  {
    eyebrow: 'La Punta',
    title: 'El lado tranquilo de Puerto Escondido.',
    body:
      'Estamos a dos minutos del point break de La Punta, la izquierda más suave de esta costa, y a cinco de los cafés y las cocinas que hacen que este rincón del pueblo se sienta como una aldea. Las olas grandes y las noches largas de Zicatela quedan a diez minutos playa arriba cuando las busques.',
    cta: { label: 'Explora la zona', href: '/the-area' },
    image: { src: '/hero/lapunta.jpg', alt: 'La playa de La Punta a la hora dorada' },
  },
  {
    eyebrow: 'Trabaja desde aquí',
    title: 'Dos conexiones a internet. Cero drama.',
    body:
      'Internet de fibra más respaldo Starlink cubren cada casa y el patio central — dos conexiones independientes, para que la llamada de la mañana nunca se caiga. Surfea al mediodía, termina el día con la arena todavía en los pies. El trabajo remoto fue la excusa de la mitad de nuestros huéspedes favoritos.',
    cta: { label: 'Consulta disponibilidad', href: '/#book' },
    image: { src: '/hero/workspace.jpg', alt: 'La llamada de la mañana a la sombra de la terraza — pies arriba en la banca, tablet en mano' },
  },
];

// ── Casa completa / grupos ───────────────────────────────────
export const wholeHouse = {
  eyebrow: 'La casa completa',
  title: 'Seis casas, una sola llave.',
  body:
    "Reserva las seis casas y el patio es tuyo — la alberca, las terrazas, el ritmo lento de todo el lugar. Punta Ox Ha' recibe de 14 a 16 huéspedes en sus seis casas: espacio de sobra para un retiro, un surf trip, un equipo remoto o tres generaciones de una familia. Cuéntanos tus fechas y qué estás planeando — armamos la casa a tu medida.",
  cta: 'Consulta por la casa completa',
};

// ── La Zona — distancias (sin publicar la dirección exacta) ──
export const bearings = {
  eyebrow: 'Para ubicarte',
  title: 'Cerca de todo lo que importa.',
  note: 'Compartimos la dirección exacta con tu confirmación de reserva.',
  items: [
    { place: 'El point de La Punta', distance: '2 min a pie' },
    { place: 'Cafés y cocinas de La Punta', distance: 'A unos pasos' },
    { place: 'Playa Zicatela', distance: '10 min por la arena' },
    { place: 'Caleta Carrizalillo', distance: '15 min en taxi' },
    { place: 'Aeropuerto de Puerto Escondido (PXM)', distance: '~15 min en auto' },
  ],
};

export const guestQuote = {
  text: 'Se siente menos como un hotel y más como la casa de playa de un amigo que resulta tener muy buen gusto.',
  attribution: 'Una huésped, el invierno pasado',
};

export const closing = {
  eyebrow: 'Reserva directo',
  title: '¿Listo para tu aventura mexicana?',
  body: 'Reserva directo con nosotros para tus mejores tarifas. Respondemos cada consulta de forma personal, normalmente en cuestión de horas.',
};

// ── Página de la zona ────────────────────────────────────────

export const areaSections = [
  {
    eyebrow: 'Surf',
    title: 'La Punta, Zicatela, Carrizalillo',
    body:
      'La Punta es la izquierda relajada al final de nuestra calle: el lugar para aprender o quitarte el óxido. Zicatela es la famosa ola pesada, para verla desde la arena o entrar al agua si sabes lo que haces. Carrizalillo es la bahía de bolsillo para nadar y hacer snorkel.',
  },
  {
    eyebrow: 'Comer y beber',
    title: 'Las cocinas de barrio de La Punta',
    body:
      'A cinco minutos caminando tienes cafés de desayuno, taquerías, mezcalerías y cenas pausadas bajo series de luces. Pídenos la lista del momento: la mantenemos actualizada y con opinión.',
  },
  {
    eyebrow: 'Explorar',
    title: 'Lagunas bioluminiscentes, aguas termales, tortugas',
    body:
      'La laguna de Manialtepec brilla en las noches oscuras. Atotonilco tiene aguas termales en los cerros. Mazunte y el santuario de las tortugas quedan a una hora costa abajo. Podemos organizarte choferes y guías de confianza para todo ello.',
  },
  {
    eyebrow: 'Moverte',
    title: 'Motonetas, tablas y distancias descalzas',
    body:
      'Casi toda la vida aquí pasa en una caminata de diez minutos. Para todo lo demás, te recomendamos la renta de motonetas en la que confiamos y la tienda de tablas con el buen quiver.',
  },
];

// ── Acerca de / Preguntas frecuentes ─────────────────────────

export const faq = [
  {
    q: '¿Qué tan lejos está el surf?',
    a: 'Dos minutos caminando al point break de La Punta, la izquierda más suave de este tramo de costa y una favorita para aprender. Zicatela está a diez minutos.',
  },
  {
    q: '¿De verdad es bueno el Wi-Fi?',
    a: 'Sí — por partida doble. La propiedad tiene dos conexiones independientes: internet de fibra de alta velocidad más respaldo Starlink, cubriendo cada casa y el patio central. Llamadas, subidas de archivos, streaming: simplemente funciona.',
  },
  {
    q: '¿Cómo llego desde el aeropuerto?',
    a: 'El aeropuerto de Puerto Escondido (PXM) está a unos 15 minutos. Cuéntanos tu vuelo y te organizamos un chofer de confianza que te reciba.',
  },
  {
    q: '¿Cómo llego a Puerto Escondido?',
    a: 'Hay vuelos directos desde Ciudad de México, Guadalajara y Monterrey, además de United desde Houston, American desde Dallas (temporada), Air Canada desde Toronto y WestJet desde Calgary. En auto, la nueva autopista deja Oaxaca a 2.5–3 horas y Huatulco a unas 2.',
  },
  {
    q: '¿Hay estacionamiento?',
    a: 'Hay estacionamiento en la calle cerca de la propiedad. La mayoría de los huéspedes ni usa auto — La Punta se camina, y las motos cubren el resto.',
  },
  {
    q: '¿Hay escaleras?',
    a: 'La casa tiene tres pisos alrededor del patio y se sube por escaleras — no hay elevador. Si las escaleras son un tema, Casa Mia y Casa Keiki están en la planta baja, a pasos de la alberca.',
  },
  {
    q: '¿Me ayudan con motos y tablas?',
    a: 'Las rentamos aquí mismo en la casa — dos motos y dos tablas de surf, reservadas con tu estancia. Para lo demás, las tiendas de renta de confianza están a dos cuadras.',
  },
  {
    q: '¿Podemos reservar la propiedad completa?',
    a: 'Sí — las seis casas juntas reciben de 14 a 16 huéspedes, y las tomas completas son nuestras reservas favoritas: retiros, surf trips, equipos remotos, reuniones familiares. Envíanos una consulta y armamos la casa a tu medida.',
  },
  {
    q: '¿Tienen tarifas mensuales o por estancia larga?',
    a: 'Nos encantan las estancias largas — muchos huéspedes se instalan semanas a trabajar y surfear. Pregúntanos por tarifas semanales y mensuales para tus fechas.',
  },
  {
    q: '¿Son bienvenidos los niños?',
    a: 'Casa Mia y Casa Linda están pensadas para familias. Los niños pequeños son bienvenidos en toda la propiedad; pídenos una cuna con anticipación.',
  },
  {
    q: '¿Es segura la propiedad?',
    a: 'Sí — la propiedad está bardeada con portón, la calle es tranquila y el patio es privado para huéspedes. Duerme tranquilo, despierta descansado.',
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'Tus términos exactos se muestran al pagar y se repiten en tu correo de confirmación. Si tus planes cambian, escríbenos primero — somos humanos y siempre buscamos la salida justa.',
  },
  {
    q: '¿Cuáles son los horarios de entrada y salida?',
    a: 'Entrada a las 3:00 PM, salida a las 11:00 AM, flexibles cuando el calendario lo permite. Solo pregúntanos.',
  },
];

export const aboutStory = [
  "Punta Ox Ha' — 'tres aguas' en maya, por los tres socios cuyas visiones se encontraron aquí — empezó como una idea sencilla: un puñado de casas alrededor de un patio central, en una calle tranquila de La Punta, llevadas por gente que de verdad vive aquí y contesta sus mensajes.",
  'Recibimos a surfistas que persiguen la ola perfecta, a nómadas digitales en busca de inspiración y a viajeros que quieren las mañanas lentas y el barrio caminable. La alberca está en medio. El surf está al final de la calle. Lo demás se resuelve solo.',
  'Somos una operación pequeña, lo que significa más alma y menos reglas. Si algo hiciera tu estancia mejor (una casa en específico, una tarifa por estancia larga, una sorpresa de cumpleaños), solo pídelo. La respuesta casi siempre es sí.',
];
