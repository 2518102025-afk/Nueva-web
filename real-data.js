/* CANCHA ABIERTA · Catálogos de clubes y competiciones reales.
   Fuentes de temporada 2026/27: premierleague.com, laliga.com y prensa deportiva salvadoreña.
   Los partidos del archivo del 01/11/2026 son marcadores históricos; NUNCA son directos. */
window.CANCHA_DATA = (() => {
  const competitions = [
    ['ucl','Champions League','Europa','uefa.champions','2026/27','UEFA','https://www.uefa.com/uefachampionsleague/'],
    ['uel','Europa League','Europa','uefa.europa','2026/27','UEFA','https://www.uefa.com/uefaeuropaleague/'],
    ['uecl','Conference League','Europa','uefa.europa.conf','2026/27','UEFA','https://www.uefa.com/uefaconferenceleague/'],
    ['premier','Premier League','Europa','eng.1','2026/27','Inglaterra','https://www.premierleague.com/'],
    ['laliga','LaLiga','Europa','esp.1','2026/27','España','https://www.laliga.com/'],
    ['seriea','Serie A','Europa','ita.1','2026/27','Italia','https://www.legaseriea.it/'],
    ['bundes','Bundesliga','Europa','ger.1','2026/27','Alemania','https://www.bundesliga.com/'],
    ['ligue1','Ligue 1','Europa','fra.1','2026/27','Francia','https://ligue1.com/'],
    ['libertadores','Copa Libertadores','América','conmebol.libertadores','2026','CONMEBOL','https://www.conmebol.com/libertadores/'],
    ['sudamericana','Copa Sudamericana','América','conmebol.sudamericana','2026','CONMEBOL','https://www.conmebol.com/sudamericana/'],
    ['concacaf','Concacaf Champions Cup','América','concacaf.champions','2026','CONCACAF','https://www.concacaf.com/champions-cup/'],
    ['ligamx','Liga MX','América','mex.1','Apertura 2026','México','https://ligamx.net/'],
    ['mls','MLS','América','usa.1','2026','EE. UU. / Canadá','https://www.mlssoccer.com/'],
    ['argentina','Liga Profesional Argentina','América','arg.1','2026','Argentina','https://www.ligaprofesional.ar/'],
    ['brasil','Brasileirão','América','bra.1','2026','Brasil','https://www.cbf.com.br/'],
    ['salvador','Primera División de El Salvador','América','slv.1','Apertura 2026','El Salvador','https://www.fesfut.org.sv/'],
    ['copaamerica','Copa América','Internacional','conmebol.america','2024 (última edición)','CONMEBOL','https://copaamerica.com/'],
    ['mundial','Copa del Mundo','Internacional','fifa.world','2026','FIFA','https://www.fifa.com/'],
    ['mundialclubes','Mundial de Clubes','Internacional','fifa.cwc','2025 (última edición)','FIFA','https://www.fifa.com/']
  ].map(([id,name,region,slug,season,org,official])=>({id,name,region,slug,season,org,official}));
  // Listas oficiales completas EPL y LaLiga 2026/27; clubes del Apertura salvadoreño 2026.
  // Otros catálogos son selecciones verificadas, NO una plantilla completa de temporada.
  const clubsByCompetition = {
    premier:['AFC Bournemouth','Arsenal','Aston Villa','Brentford','Brighton & Hove Albion','Chelsea','Coventry City','Crystal Palace','Everton','Fulham','Hull City','Ipswich Town','Leeds United','Liverpool','Manchester City','Manchester United','Newcastle United','Nottingham Forest','Sunderland','Tottenham Hotspur'],
    laliga:['Athletic Club','Atlético de Madrid','CA Osasuna','Celta de Vigo','Deportivo Alavés','Elche CF','FC Barcelona','Getafe CF','Levante UD','Málaga CF','Racing Santander','Rayo Vallecano','RC Deportivo','RCD Espanyol','Real Betis','Real Madrid','Real Sociedad','Sevilla FC','Valencia CF','Villarreal CF'],
    salvador:['Alianza FC','Atlético Balboa','Cacahuatique','CD Águila','Fuerte San Francisco','CD Platense','FAS','INCA Aruba','Inter Santa Tecla','Isidro Metapán','Luis Ángel Firpo','Municipal Limeño'],
    ucl:['Shakhtar Donetsk','Sporting CP','Galatasaray','VfB Stuttgart','Atlético de Madrid','Bayern Múnich','FC Barcelona','Aston Villa','Feyenoord','Inter','Bodø/Glimt','Lille','LASK','Slovan Bratislava','Manchester United','Roma','Villarreal CF','Paris Saint-Germain','AEK Athens','Real Madrid','Fenerbahçe','Liverpool','Borussia Dortmund','Real Betis','Porto','Napoli','PSV Eindhoven','Club Brugge','RB Leipzig','Manchester City','Lens','Como','Slavia Praha','Arsenal','Viking','Sabah'],
    uel:['Rennes','Olympiacos','Milan','Ferencváros','Sparta Praha','Bournemouth','Crystal Palace','Hoffenheim','Lillestrøm','Viktoria Plzeň','N.E.C. Nijmegen','Omonia','Levski Sofia','Jagiellonia','Real Sociedad','Olympique Lyon','Anderlecht','Salzburg','AZ Alkmaar','Juventus','Bayer Leverkusen','Olympique de Marseille','Celtic','Beşiktaş','Hapoel Beer-Sheva','OFI Crete','Celta de Vigo','Union SG','Torreense','Ararat-Armenia','Sturm Graz','Celje','Benfica','Lech Poznań','Sunderland','GNK Dinamo'],
    uecl:['Aarhus','Braga','Atalanta','Kairat Almaty','Midtjylland','Ajax','Thun','Hearts','Crvena Zvezda','Inter Escaldes','KuPS Kuopio','Gent','Lincoln Red Imps','Hajduk Split','Mjällby','Borac','Trabzonspor','Freiburg','AS Monaco','Nordsjælland','Copenhagen','Iberia Tbilisi','Lugano','Kauno Žalgiris','Twente','Pafos','Getafe CF','Brighton & Hove Albion','Sint-Truidense','Brann','Panathinaikos','CSKA Sofia','Riga','Jablonec','Universitatea Craiova','Egnatia'],
    libertadores:['Boca Juniors','Estudiantes de La Plata','Independiente Rivadavia','Lanús','Rosario Central','Platense','Always Ready','Bolívar','Corinthians','Cruzeiro','Flamengo','Fluminense','Mirassol','Palmeiras','Coquimbo Unido','Universidad Católica','Deportes Tolima','Independiente Medellín','Junior','Santa Fe','Barcelona SC','Independiente del Valle','Liga de Quito','Cerro Porteño','Libertad','Cusco FC','Sporting Cristal','Universitario','Nacional','Peñarol','Deportivo La Guaira','Universidad Central'],
    concacaf:['Vancouver FC','Defence Force FC','O&M FC','Mount Pleasant FA','CD Olimpia','Xelajú MC','CS Cartaginés','LD Alajuelense','Real España','Sporting San Miguelito','Atlético Ottawa','Forge FC','LA Galaxy','Seattle Sounders','CF Monterrey','Club América','Cruz Azul','Toluca','Pumas UNAM','Tigres UANL','FC Cincinnati','Inter Miami','Los Angeles FC','Philadelphia Union','San Diego FC','Vancouver Whitecaps'],
    mundialclubes:['Al Ahly','Al Ain','Al Hilal','Atlético de Madrid','Auckland City','Bayern Múnich','Benfica','Boca Juniors','Borussia Dortmund','Botafogo','Chelsea','Espérance de Tunis','Flamengo','Salzburg','Fluminense','Inter','Inter Miami','Juventus','Los Angeles FC','Manchester City','Mamelodi Sundowns','Monterrey','Paris Saint-Germain','Pachuca','Palmeiras','Porto','Real Madrid','River Plate','Seattle Sounders','Ulsan HD','Urawa Red Diamonds','Wydad AC'],
    copaamerica:['Argentina','Bolivia','Brasil','Canadá','Chile','Colombia','Costa Rica','Ecuador','Estados Unidos','Jamaica','México','Panamá','Paraguay','Perú','Uruguay','Venezuela'],
    mundial:['Argentina','Brasil','Canadá','Estados Unidos','México','España','Francia','Alemania','Inglaterra','Portugal','Japón','Marruecos'],
    sudamericana:['América de Cali','Tigre','Macará','Alianza Atlético','Atlético Mineiro','Cienciano','Academia Puerto Cabello','Juventud','São Paulo','Millonarios','Boston River','O’Higgins','Santos','San Lorenzo','Deportivo Cuenca','Recoleta','Racing Club','Caracas','Independiente Petrolero','Botafogo','Grêmio','Palestino','Montevideo City Torque','Deportivo Riestra'],
    seriea:['Como','Lazio','Cagliari','Frosinone','Torino','Lecce','Genoa','Juventus','Napoli','Venezia'],
    bundes:['Bayern Múnich','Borussia Dortmund','Union Berlin','FC Köln','Eintracht Frankfurt','Hamburger SV','Bayer Leverkusen','VfB Stuttgart'],
    ligue1:['Strasbourg','Auxerre','Paris FC','AS Monaco','Olympique Lyon','Angers','Olympique de Marseille','Toulouse'],
    ligamx:['Club América','Toluca','Cruz Azul','León','Santos Laguna','Necaxa'],
    mls:['Vancouver Whitecaps','Seattle Sounders','Atlanta United','Toronto FC','Nashville SC','New York Red Bulls','New England Revolution','Inter Miami','Los Angeles FC','Minnesota United'],
    argentina:['Boca Juniors','River Plate','Belgrano','Barracas Central',"Newell's Old Boys",'Unión de Santa Fe','Lanús','Gimnasia de Mendoza'],
    brasil:['Palmeiras','Vasco da Gama','Grêmio','Atlético Mineiro']
  };
  const clubs = new Map();
  const slugify = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  Object.entries(clubsByCompetition).forEach(([league, names])=>names.forEach(name=>{
    const key=slugify(name); const club=clubs.get(key)||{id:key,name,leagues:[],logo:null};
    if(!club.leagues.includes(league))club.leagues.push(league);clubs.set(key,club);
  }));
  // Solo datos verificables de la jornada del 1 noviembre 2026: marcadores publicados en ELNINE.
  // La fecha es la del archivo, no deben interpretarse como resultados en tiempo real.
  const rawArchive = [
    ['premier','Liverpool','Arsenal',0,1],
    ['laliga','Getafe CF','Sevilla FC',3,1],['laliga','Racing Santander','Real Madrid',0,3],['laliga','Elche CF','Valencia CF',0,1],['laliga','Athletic Club','Real Sociedad',2,1],
    ['bundes','Union Berlin','FC Köln',1,1],['bundes','Eintracht Frankfurt','Hamburger SV',3,1],
    ['seriea','Como','Venezia',1,0],['seriea','Lazio','Cagliari',2,1],['seriea','Frosinone','Torino',2,0],['seriea','Lecce','Genoa',1,2],['seriea','Juventus','Napoli',2,0],
    ['ligue1','Strasbourg','Auxerre',5,1],['ligue1','Paris FC','AS Monaco',3,1],['ligue1','Olympique Lyon','Angers',2,0],['ligue1','Olympique de Marseille','Toulouse',2,0],
    ['mls','Vancouver Whitecaps','Seattle Sounders',5,1],['mls','Atlanta United','Toronto FC',3,1],['mls','Nashville SC','New York Red Bulls',3,2],['mls','New England Revolution','Inter Miami',1,2],
    ['ligamx','Club América','Toluca',2,2],['ligamx','Santos Laguna','Necaxa',1,0],
    ['argentina','Boca Juniors','River Plate',1,0],['argentina','Belgrano','Barracas Central',2,2],['argentina',"Newell's Old Boys",'Unión de Santa Fe',1,1],['argentina','Lanús','Gimnasia de Mendoza',1,1],
    ['salvador','Atlético Balboa','Alianza FC',1,0],['salvador','Fuerte San Francisco','CD Águila',3,4],['salvador','Luis Ángel Firpo','FAS',1,1]
  ];
  rawArchive.forEach(x=>[x[1],x[2]].forEach(name=>{const id=slugify(name);if(!clubs.has(id))clubs.set(id,{id,name,leagues:[x[0]],logo:null});}));
  const archive = rawArchive.map(([league,home,away,homeScore,awayScore],i)=>({
    id:'archivo-'+i,league,home:slugify(home),away:slugify(away),homeScore,awayScore,
    date:'2026-11-01',kickoff:null,status:'finished',minute:null,source:'archivo',season:competitions.find(c=>c.id===league)?.season||'',
    sourceUrl:'https://elnine.com.ar/',title:'Marcador histórico publicado el 01/11/2026',events:[]
  }));

  // Encuentros reales publicados por UEFA para las jornadas 3-5 de noviembre 2026.
  // Todas las horas se guardan en UTC, no en el huso horario local.
  // Kickoff 18:45 CET = 17:45 UTC; kickoff 21:00 CET = 20:00 UTC.
  const officialSchedule = [
    ['2026-11-03','ucl','Shakhtar Donetsk','Sporting CP','17:45'],['2026-11-03','ucl','Galatasaray','VfB Stuttgart','17:45'],
    ['2026-11-03','ucl','Atlético de Madrid','Bayern Múnich','20:00'],['2026-11-03','ucl','FC Barcelona','Aston Villa','20:00'],
    ['2026-11-03','ucl','Feyenoord','Inter','20:00'],['2026-11-03','ucl','Bodø/Glimt','Lille','20:00'],
    ['2026-11-03','ucl','LASK','Slovan Bratislava','20:00'],['2026-11-03','ucl','Manchester United','Roma','20:00'],
    ['2026-11-03','ucl','Villarreal CF','Paris Saint-Germain','20:00'],
    ['2026-11-04','ucl','AEK Athens','Real Madrid','17:45'],['2026-11-04','ucl','Fenerbahçe','Liverpool','17:45'],
    ['2026-11-04','ucl','Borussia Dortmund','Real Betis','20:00'],['2026-11-04','ucl','Porto','Napoli','20:00'],
    ['2026-11-04','ucl','PSV Eindhoven','Club Brugge','20:00'],['2026-11-04','ucl','RB Leipzig','Manchester City','20:00'],
    ['2026-11-04','ucl','Lens','Como','20:00'],['2026-11-04','ucl','Slavia Praha','Arsenal','20:00'],
    ['2026-11-04','ucl','Viking','Sabah','20:00'],
    ['2026-11-04','uel','Rennes','Olympiacos','15:30'],
    ['2026-11-05','uel','Milan','Ferencváros','17:45'],['2026-11-05','uel','Sparta Praha','Bournemouth','17:45'],
    ['2026-11-05','uel','Crystal Palace','Hoffenheim','17:45'],['2026-11-05','uel','Lillestrøm','Viktoria Plzeň','17:45'],
    ['2026-11-05','uel','N.E.C. Nijmegen','Omonia','17:45'],['2026-11-05','uel','Levski Sofia','Jagiellonia','17:45'],
    ['2026-11-05','uel','Real Sociedad','Olympique Lyon','17:45'],['2026-11-05','uel','Anderlecht','Salzburg','17:45'],
    ['2026-11-05','uel','AZ Alkmaar','Juventus','20:00'],['2026-11-05','uel','Bayer Leverkusen','Olympique de Marseille','20:00'],
    ['2026-11-05','uel','Celtic','Beşiktaş','20:00'],['2026-11-05','uel','Hapoel Beer-Sheva','OFI Crete','20:00'],
    ['2026-11-05','uel','Celta de Vigo','Union SG','20:00'],['2026-11-05','uel','Torreense','Ararat-Armenia','20:00'],
    ['2026-11-05','uel','Sturm Graz','Celje','20:00'],['2026-11-05','uel','Benfica','Lech Poznań','20:00'],
    ['2026-11-05','uel','Sunderland','GNK Dinamo','20:00'],
    ['2026-11-05','uecl','Aarhus','Braga','17:45'],['2026-11-05','uecl','Atalanta','Kairat Almaty','17:45'],
    ['2026-11-05','uecl','Midtjylland','Ajax','17:45'],['2026-11-05','uecl','Thun','Hearts','17:45'],
    ['2026-11-05','uecl','Crvena Zvezda','Inter Escaldes','17:45'],['2026-11-05','uecl','KuPS Kuopio','Gent','17:45'],
    ['2026-11-05','uecl','Lincoln Red Imps','Hajduk Split','17:45'],['2026-11-05','uecl','Mjällby','Borac','17:45'],
    ['2026-11-05','uecl','Trabzonspor','Freiburg','17:45'],
    ['2026-11-05','uecl','AS Monaco','Nordsjælland','20:00'],['2026-11-05','uecl','Copenhagen','Iberia Tbilisi','20:00'],
    ['2026-11-05','uecl','Lugano','Kauno Žalgiris','20:00'],['2026-11-05','uecl','Twente','Pafos','20:00'],
    ['2026-11-05','uecl','Getafe CF','Brighton & Hove Albion','20:00'],['2026-11-05','uecl','Sint-Truidense','Brann','20:00'],
    ['2026-11-05','uecl','Panathinaikos','CSKA Sofia','20:00'],['2026-11-05','uecl','Riga','Jablonec','20:00'],
    ['2026-11-05','uecl','Universitatea Craiova','Egnatia','20:00']
  ];
  officialSchedule.forEach(x=>[x[2],x[3]].forEach(name=>{const id=slugify(name);if(!clubs.has(id))clubs.set(id,{id,name,leagues:[x[1]],logo:null});}));
  const officialFixtures=officialSchedule.map(([date,league,home,away,hour],i)=>({
    id:'oficial-'+i,league,home:slugify(home),away:slugify(away),homeScore:null,awayScore:null,date,
    kickoff:`${date}T${hour}:00Z`,status:'scheduled',minute:null,source:'official',season:'2026/27',
    sourceUrl:league==='ucl'?'https://www.uefa.com/uefachampionsleague/fixtures-results/':league==='uel'?'https://www.uefa.com/uefaeuropaleague/fixtures-results/':'https://www.uefa.com/uefaconferenceleague/fixtures-results/',events:[]
  }));
  return {competitions,clubsByCompetition,clubs:Array.from(clubs.values()),archive,officialFixtures,archiveDate:'2026-11-01',archiveSource:'https://elnine.com.ar/',slugify};
})();
