/* Fotografías reutilizables seleccionadas individualmente en Wikimedia Commons.
   No se reutilizan imágenes de Transfermarkt; los enlaces conservan autor y licencia. */
window.CANCHA_PLAYER_MEDIA = [
 {name:'Lionel Messi',file:'Lionel Messi WC2022.jpg',author:'Hossein Zohrevand / Tasnim News Agency',license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',team:'inter-miami',position:'Delantero',nation:'Argentina'},
 {name:'Kylian Mbappé',file:'Kylian Mbappe - France v Norway - 26 June 2026.jpg',author:'Bryan Berlin / WikiPortraits',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',team:'real-madrid',position:'Delantero',nation:'Francia'},
 {name:'Lamine Yamal',file:'Lamine Yamal in 2025.jpg',author:'Biser Todorov',license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',team:'fc-barcelona',position:'Extremo',nation:'España'},
 {name:'Erling Haaland',file:'Erling Braut Haaland France v Norway 26 June 26-001.jpg',author:'Bryan Berlin / WikiPortraits',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',team:'manchester-city',position:'Delantero',nation:'Noruega'}
].map(p=>({...p, url:'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(p.file)+'?width=180',source:'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(p.file)}));
/* Se muestran solo estadísticas con procedencia autorizada e identificador de temporada.
   Fichas iniciales vacías: no se inventan totales ni se copian estadísticas de Transfermarkt. */
window.CANCHA_SEASON_STATS = [];
