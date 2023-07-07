const dict = new Map([
  ['se esperaria', 'would be expected'],
  ['encontrar', 'to find'],
  ['porque', 'because'],
  ['para', 'for'],
  ['tales', 'such'],
  ['tonterias', 'nonsense'],
  ['empresa', 'company'],
  ['corpulento', 'stout'],
  ['rollizo', 'chubby'],
  ['casi', 'almost'],
  ['cuello', 'neck'],
  ['aunque', 'although'],
  ['inmenso', 'enormous'],
  ['delgada', 'slim'],
  ['ya', 'already'],
  ['pasaba', 'spent'],
  ['estirándolo', 'stretching it'],
  ['por', 'over'],
  ['encima', 'above'],
  ['las vallas', 'the fences'],
  ['para', 'to'],
  ['espiar a', 'spy on'],
  ['no habia', 'there was no'],
  ['mejor', 'better'],
  ['sobrevivio', 'survived'],
  ['querian', 'they wanted'],
  ['tambien', 'also'],
  ['guardaban', 'kept'],
  ['meyor', 'greater'],
  ['temor', 'fear'],
  ['descubriesen', 'discovered'],
  ['soportado', 'endured'],
  ['se supiera', 'it was known'],
  ['veian', 'they saw'],
  ['hacia', 'towards'],
  ['fingia', 'pretended'],
  ['opuesto a', 'opposite to'],
  ['puderia', 'could'],
  ['estremacian', 'they were horrified'],
  ['pensar', 'think'],
  ['dirian', 'they would say'],
  ['apareciesen', 'they appeared'],
  ['acera', 'sidewalk'],
  ['sabían', 'they knew'],
  ['nunca', 'never'],
  ['lo habían visto', 'they had seen him'],
  ['mantener', 'to keep'],
  ['alejados', 'away'],
  ['se juntara', 'they got together'],
  ['se despertaron', 'they woke up'],
  ['sombrío', 'gloomy'],
  ['martes', 'Tuesday'],
  ['nublado', 'cloudy'],
  ['sugiriera', 'suggested'],
  ['acontecimientos', 'events'],
  ['después', 'after'],
  ['tendrían lugar', 'would take place'],
  ['canturreaba', 'he hummed'],
  ['se ponía', 'he put on'],
  ['corbata', 'tie'],
  ['más', 'more'],
  ['sosa', 'bland'],
  ['parloteaba', 'chattered'],
  ['alegremente', 'happily'],
  ['instalaba', 'he set up'],
  ['ruidoso', 'noisy'],
  ['ninguno', 'none'],
  ['vio', 'saw'],
  ['pardo', 'brown'],
  ['pasaba volando', 'flew by'],
  ['cogió', 'picked up'],
  ['maletín', 'briefcase'],
  ['beso a', 'kissed'],
  ['mejilla', 'cheek'],
  ['trató de', 'tried to'],
  ['despedirse', 'say goodbye'],
  ['pudo', 'could'],
  ['aunque', 'although'],
  ['ya', 'already'],
  ['un berrinche', 'a tantrum'],
  ['estaba arrojando', 'was throwing'],
  ['contra', 'against'],
  ['las paredes', 'the walls'],
  ['salía de', 'was coming out of'],
  ['se metió', 'he entered'],
  ['se alejó', 'he walked away'],
  ['al llegar', 'upon reaching'],
  ['esquina', 'corner'],
  ['percibió', 'he noticed'],
  ['sucedía', 'was happening'],
  ['raro', 'strange'],
  ['volvió', 'he turned'],
  ['debía haber sido', 'must have been'],
  ['parpadeo', 'blinked'],
  ['contempló', 'looked at'],
  ['le devolvió la mirada', 'stared back at him'],
  ['daba la vuelta', 'turned around'],
  ['subía', 'was going up'],
  ['negó', 'denied'],
  ['pedido', 'request'],
  ['conseguir', 'to get'],
  ['aparto', 'I parked'],
  ['esperaba', 'was waiting'],
  ['embotellamiento', 'traffic jam'],
  ['dejar', 'to leave'],
  ['advertir', 'to warn'],
  ['vestida', 'dressed'],
  ['llevaba', 'was wearing'],
  ['los conjuntos', 'the outfits'],
  ['tamborileó', 'tapped'],
  ['dedos', 'fingers'],
  ['sobre', 'on'],
  ['volante', 'steering wheel'],
  ['poso', 'settled'],
  ['desconocidos', 'strangers'],
  ['cerca', 'near'],
  ['cuchicheaban', 'whispered'],
  ['entre sí', 'to each other'],
  ['excitados', 'excited'],
  ['se enfureció', 'became furious'],
  ['darse', 'to give oneself'],
  ['incluso', 'even'],
  ['valor', 'courage'],
  ['publicitaria', 'advertising'],
  ['se sentaba', 'sat'],
  ['espaldas', 'back'],
  ['hubiera hecho', 'would have done'],
  ['había costado', 'had cost'],
  ['señalaban', 'pointed'],
  ['boca', 'mouth'],
  ['abierta', 'open'],
  ['aves', 'birds'],
  ['desfilaban', 'paraded'],
  ['tras', 'behind'],
  ['embargo', 'however'],
  ['gritó', 'shouted'],
  ['hizo', 'made'],
  ['volvió', 'turned'],
  ['estirar', 'stretch'],
  ['piernas', 'legs'],
  ['dirigirse', 'to head'],
  ['enfrente', 'across'],
  ['había olvidado', 'had forgotten'],
  ['lado', 'side'],
  ['miró', 'looked'],
  ['enfadado', 'angry'],
  ['susurraba', 'whispered'],
  ['agitación', 'agitation'],
  ['llevaba', 'carried'],
  ['moneda', 'coin'],
  ['rosquilla', 'doughnut'],
  ['bolsa', 'bag'],
  ['papel', 'paper'],
  ['alcanzó', 'reached'],
  ['oír', 'to hear']
  ['he oído', 'I have heard'],
  ['se quedó', 'he/she stayed'],
  ['invadió', 'invaded'],
  ['volvió', 'he/she turned'],
  ['se contuvo', 'he/she restrained'],
  ['se apresuró', 'he/she hurried'],
  ['cruzar', 'to cross'],
  ['echó', 'he/she threw'],
  ['correr', 'to run'],
  ['molestar', 'to bother'],
  ['cambió', 'he/she changed'],
  ['dejó', 'he/she left'],
  ['peinó', 'he/she combed'],
  ['comportándose', 'behaving'],
  ['sobrino', 'nephew'],
  ['valía', 'was worth'],
  ['pena', 'regret'],
  ['se trastornaba', 'he/she was upset'],
  ['ante', 'before'],
  ['cualquier', 'any'],
  ['reprochárselo', 'to blame him/her for it'],
  ['modos', 'manners'],
  ['edificio', 'building'],
  ['estaba todavía', 'he/she was still'],
  ['chocó', 'he/she collided'],
  ['gruñó', 'he/she growled'],
  ['diminuto', 'tiny'],
  ['se tambaleaba', 'he/she staggered'],
  ['caía', 'he/she fell'],
  ['suelo', 'floor'],
  ['parecía', 'he/she seemed'],
  ['disgustado', 'displeased'],
  ['empujón', 'push'],
  ['rostro', 'face'],
  ['amplia', 'wide'],
  ['sonrisa', 'smile'],
  ['querido', 'dear'],
  ['alegrarse', 'to be glad'],
  ['se ha ido', 'he/she has left'],
  ['anciano', 'elderly'],
  ['abrazo', 'hug'],
  ['se quedó', 'he/she remained'],
  ['helado', 'frozen'],
  ['fuera', 'outside'],
  ['fuese', 'were'],
  ['desconcertado', 'perplexed'],
  ['se apresuró', 'he/she hurried'],
  ['subir', 'to go up'],
  ['deseando', 'wishing'],
  ['fueran', 'they were'],
  ['suyas', 'theirs'],
  ['antes', 'before'],
  ['aprobaba', 'approved'],
  ['camino', 'way'],
  ['fue', 'he/she went'],
  ['estaba sentado', 'he/she was sitting'],
  ['muro', 'wall'],
  ['mismo', 'same'],
  ['línea', 'line'],
  ['alrededor', 'around'],
  ['voz alta', 'loudly'],
  ['todavía seguía', 'he/she still continued'],
  ['cenaban', 'they were having dinner'],
  ['contó', 'he/she told'],
  ['haré', 'I will do'],
  ['comportar', 'to behave'],
  ['acostaron', 'they went to bed'],
  ['sala', 'room'],
  ['noticiero', 'news'],
  ['han', 'have'],
  ['pese', 'despite'],
  ['cazan', 'they hunt'],
  ['difícil', 'difficult'],
  ['verlos', 'to see them'],
  ['cientos', 'hundreds'],
  ['avisos', 'notices'],
  ['sobre', 'about'],
  ['vuelo', 'flight'],
  ['direcciones', 'directions'],
  ['salida', 'exit'],
  ['incapaces', 'unable'],
  ['explicar', 'to explain'],
  ['cambiado', 'changed'],
  ['horarios', 'schedules'],
  ['sueños', 'dreams'],
  ['locutor', 'announcer'],
  ['mueca', 'grimace'],
  ['lluvias', 'rains'],
  ['han mostrado', 'have shown'],
  ['televidentes', 'viewers'],
  ['apartados', 'sections']
]);