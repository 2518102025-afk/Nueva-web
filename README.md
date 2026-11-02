# Cancha Abierta · Fútbol real 2026/27

Cancha Abierta es una **web estática original** de resultados de fútbol de América y Europa. El diseño de consulta rápida por competición se inspira en la organización de [ELNINE](https://elnine.com.ar/), sin copiar su código ni identidad.

## Qué incluye

- **19 competiciones reales** de Europa, América e Internacional.
- **Clubes reales según ediciones**: plantillas completas de participantes comprobadas para Premier League 2026/27 y LaLiga 2026/27; doce clubes de Primera División salvadoreña Apertura 2026; representantes de Champions, Europa League, Conference, Libertadores, Sudamericana, Concacaf, Mundial de Clubes y otras competiciones. Para algunos torneos la lista es parcial.
- Calendario navegable con fechas, filtro por región, torneo y estado.
- Próximos partidos **oficiales UEFA del 3 al 5 de noviembre de 2026** con horarios UTC convertidos a la zona horaria del dispositivo.
- Archivo de **resultados reales del 1 de noviembre de 2026** tomado del seguimiento publicado por ELNINE. Es una selección, no todos los partidos disputados ese día.
- **Intento de resultados en línea** mediante consultas experimentales a endpoints públicos, no oficiales, de ESPN. Si la petición funciona, muestra los partidos que devuelve el proveedor. Cuando falla, la web no inventa resultados.
- Tablas y detalles cuando la fuente tiene información disponible; nunca inventa alineaciones, fichajes ni estadísticas.
- Buscador de clubes y torneos; favoritos en `localStorage`; modo oscuro/claro; adaptación a móviles.
- Noticias y fichajes con enlaces a **fuentes oficiales**, sin copiar artículos ni afirmar rumores como fichajes confirmados.

## Requisitos

No hace falta instalar nada: HTML, CSS y JavaScript puros. Compatible con hosting gratuito de **GitHub Pages**. Solo necesita un navegador reciente.

## Abrir en Windows

1. Extrae el archivo ZIP.
2. Abre la carpeta `Cancha-Abierta`.
3. Haz doble clic en **`index.html`**.
4. En Inicio puedes cambiar la fecha: prueba **01/11/2026**, **03/11/2026**, **04/11/2026** o **05/11/2026** para ver resultados o partidos reales verificados.
5. Pulsa la estrella para guardar tus torneos o equipos favoritos.

## Publicarlo en GitHub Pages

1. Crea un repositorio **público** en GitHub, por ejemplo `cancha-abierta`.
2. Sube el **contenido** de la carpeta `Cancha-Abierta` (no el ZIP cerrado). El archivo `index.html` debe quedar en la raíz del repositorio.
3. Ve a **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selecciona rama **`main`**, carpeta **`/(root)`** y guarda.
5. Cuando GitHub Pages publique la web, abre la dirección que aparezca en ese apartado.

Los resultados en línea requieren conexión y el proveedor externo puede bloquear o modificar las consultas. **No se garantiza un servicio en vivo estable ni derechos de redistribución para un sitio comercial.** Para una plataforma pública de producción se necesitará una API contratada/autorizada y posiblemente un backend.

## Temporadas cubiertas en los catálogos

- Europa (ligas y UEFA): **2026/27**.
- Argentina, Brasil, MLS, Libertadores, Sudamericana, Concacaf: **2026**.
- Liga MX y Primera División de El Salvador: **Apertura 2026**.
- Mundial masculino: **2026**.
- Copa América: **2024**, última edición celebrada.
- Mundial de Clubes: **2025**, última edición celebrada.

No se atribuyen automáticamente ascensos ni fichajes futuros. Los cambios para próximas temporadas requerirán actualizar los catálogos estáticos o conectar una API autorizada.

## Fuentes usadas

- [ELNINE — resultados del 01/11/2026](https://elnine.com.ar/)
- [Premier League — equipos 2026/27](https://www.premierleague.com/en/news/4365156)
- [LaLiga — clubes 2026/27](https://www.laliga.com/laliga-easports/clubes)
- [Fútbol salvadoreño — Apertura 2026](https://www.elsalvador.com/deportes/futbol/primera-division-fesfut-yamil-bukele-club-deportivo-fas-aguila/1284561/2026/)
- [UEFA — Champions League 2026/27](https://www.uefa.com/uefachampionsleague/fixtures-results/)
- [UEFA — Europa League 2026/27](https://www.uefa.com/uefaeuropaleague/fixtures-results/)
- [UEFA — Conference League 2026/27](https://www.uefa.com/uefaconferenceleague/fixtures-results/)
- [CONMEBOL — Libertadores 2026](https://gol.conmebol.com/libertadores/es/news/sorteo-de-la-fase-de-grupos-de-la-conmebol-libertadores-2026-fecha-horario-clasificados)
- [AFA — Sudamericana 2026](https://www.afa.com.ar/11174/posts/fueron-sorteados-los-grupos-de-la-copa-sudamericana-2026)
- [Concacaf — Champions Cup 2026](https://www.concacaf.com/news/concacaf-announces-2026-champions-cup-official-draw-pots-and-procedures)
- [FIFA — clubes del Mundial de Clubes 2025](https://gpcustomersupportfcwc2025.tickets.fifa.com/hc/en-us/articles/23802248983453-3-Which-clubs-are-participating-in-the-FIFA-Club-World-Cup-2025)
- [Documentación comunitaria de endpoints ESPN (no oficial)](https://github.com/pseudo-r/Public-ESPN-API)

### Uso responsable

Los nombres de clubes, calendarios y marcadores son hechos deportivos. Los derechos sobre escudos, fotos, datos de terceros, uso de APIs y marcas pueden requerir permiso para su publicación, especialmente comercial. Esta demo no incorpora claves secretas ni utiliza el código del sitio de referencia.

## Actualización 0.3: cancha táctica, fotografías y enlaces a Transfermarkt

- **Alineaciones**: cuando la consulta del partido entrega once inicial confirmado, formación (`4-3-3`, `4-2-3-1`, etc.) y `formationPlace` de los 11 titulares, aparecen dos canchas con futbolistas colocados por líneas y puestos. Si faltan esos datos, mostramos un aviso, no posiciones inventadas. Las coordenadas son una representación táctica de la **formación inicial**, no un mapa real de movimientos ni un seguimiento en directo.
- **Fotografías**: perfiles de Lionel Messi, Kylian Mbappé, Lamine Yamal y Erling Haaland con retratos de Wikimedia Commons y atribución visible en las fichas. En **Buscar** aparece una galería para entrar en sus fichas. Las fotos son históricas, no necesariamente de esta temporada. Las fotos se cargan desde Commons si el visitante tiene conexión; para otros futbolistas habrá un ícono hasta obtener imágenes con licencia.
- **Transfermarkt**: enlaces de búsqueda a fichas y estadísticas del jugador en Transfermarkt, sin copiar datos o fotos automáticamente. **No hay integración de API ni scraping de Transfermarkt**: su política de uso prohíbe el acceso y la reproducción automatizados sin permiso.
- **Estadísticas de temporada**: preparada una tabla de partidos, goles, asistencias y minutos; los números solo aparecen si existe una fuente autorizada en `assets/js/player-media.js` con temporada, licencia/permiso y fuente. Actualmente se muestran guiones por falta de licencia y datos verificables. Esto es intencional y no debe presentarse como integración con Transfermarkt.
- **Fuente experimental de alineaciones**: consulta pública no oficial de ESPN, sin garantía de disponibilidad, cobertura ni derechos de redistribución. Para un lanzamiento comercial deberá elegirse una API autorizada.

### Atribuciones de retratos (Wikimedia Commons)

- Lionel Messi: Hossein Zohrevand / Tasnim News Agency, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [archivo](https://commons.wikimedia.org/wiki/File:Lionel_Messi_WC2022.jpg).
- Kylian Mbappé: Bryan Berlin / WikiPortraits, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [archivo](https://commons.wikimedia.org/wiki/File:Kylian_Mbappe_-_France_v_Norway_-_26_June_2026.jpg).
- Lamine Yamal: Biser Todorov, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [archivo](https://commons.wikimedia.org/wiki/File:Lamine_Yamal_in_2025.jpg).
- Erling Haaland: Bryan Berlin / WikiPortraits, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [archivo](https://commons.wikimedia.org/wiki/File:Erling_Braut_Haaland_France_v_Norway_26_June_26-001.jpg).

### Agregar estadísticas verificadas en el futuro

El arreglo `window.CANCHA_SEASON_STATS` solo acepta registros con `name`, `season`, `appearances`, `goals`, `assists`, `minutes`, `permission:true`, `sourceName`, `sourceUrl` y `checkedAt` **cuando exista permiso para utilizarlos**. Transfermarkt no debe usarse como fuente de extracción automática.
