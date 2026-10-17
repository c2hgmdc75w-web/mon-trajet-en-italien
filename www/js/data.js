/* ============================================================
   MON TRAJET EN ITALIEN — données de contenu
   Structure multi-niveaux : LEVELS[] contient un tableau de niveaux,
   chacun avec ses propres MODULES (même forme que le système
   à un seul niveau).

   NIVEAU 1 (terminé) : 600 phrases, 3 modules x 200 phrases x 20
   leçons de 10, 15 points de grammaire.

   NIVEAU 2 (terminé) : même structure, vocabulaire un peu plus
   riche et phrases un peu plus complexes que le niveau 1.

   NIVEAU 3 (terminé) : niveau de langue plus avancé (B1-B2) :
   conditionnels, subjonctif, discours plus abstrait, tournures
   idiomatiques.
   ============================================================ */

const ICONS = {
  headphones:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0118 0v2"/><path d="M21 14a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a2 2 0 012-2h3v3z"/><path d="M3 14a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 00-2-2H3v3z"/></svg>',
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>',
  repeat:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>'
};

/* ============================================================
   NIVEAU 1
   ============================================================ */

const level1Module1Lessons = [
  { title:"Arrivée à Rome", phrases:[
    {fr:"Bienvenue en Italie !", it:"Benvenuto in Italia!"},
    {fr:"J'ai loué une petite voiture.", it:"Ho noleggiato una piccola macchina."},
    {fr:"Voici mon passeport.", it:"Ecco il mio passaporto."},
    {fr:"Vous restez combien de jours ?", it:"Quanti giorni rimane?"},
    {fr:"Je reste dix jours.", it:"Rimango dieci giorni."},
    {fr:"Où est-ce que je récupère ma valise ?", it:"Dove ritiro la mia valigia?"},
    {fr:"Avez-vous quelque chose à déclarer ?", it:"Ha qualcosa da dichiarare?"},
    {fr:"Non, rien du tout.", it:"No, niente del tutto."},
    {fr:"Bon séjour en Italie !", it:"Buon soggiorno in Italia!"},
    {fr:"Merci beaucoup, à bientôt.", it:"Grazie mille, a presto."}
  ]},
  { title:"Une trattoria à Rome", phrases:[
    {fr:"Une table pour deux, s'il vous plaît.", it:"Un tavolo per due, per favore."},
    {fr:"Qu'est-ce que vous nous conseillez ?", it:"Cosa ci consiglia?"},
    {fr:"Je prendrai des pâtes à la carbonara.", it:"Prendo degli spaghetti alla carbonara."},
    {fr:"Et pour moi, une pizza margherita.", it:"E per me, una pizza margherita."},
    {fr:"Vous avez de la mozzarella fraîche ?", it:"Avete della mozzarella fresca?"},
    {fr:"L'addition, s'il vous plaît.", it:"Il conto, per favore."},
    {fr:"C'est absolument délicieux.", it:"È assolutamente delizioso."},
    {fr:"J'ai une faim de loup.", it:"Ho una fame da lupi."},
    {fr:"On partage un tiramisu ?", it:"Dividiamo un tiramisù?"},
    {fr:"Le service était impeccable.", it:"Il servizio è stato impeccabile."}
  ], tip:{
    title:"« Il/la » : les articles définis en italien",
    example:"Le service était impeccable. — <b>Il</b> servizio è stato impeccabile.",
    body:"L'italien utilise « il » devant un nom masculin singulier commençant par une consonne (il servizio, il conto), et « la » devant un nom féminin singulier (la mozzarella). Contrairement au français, l'article varie aussi selon la première lettre du mot qui suit (lo, l', i, gli, le) : on approfondira ça plus tard."
  }},
  { title:"Le Colisée", phrases:[
    {fr:"Le Colisée est juste devant nous.", it:"Il Colosseo è proprio davanti a noi."},
    {fr:"C'est encore plus grand que je l'imaginais.", it:"È ancora più grande di quanto immaginassi."},
    {fr:"Fais attention, il y a beaucoup de monde.", it:"Attento, c'è molta gente."},
    {fr:"Il fait vraiment chaud aujourd'hui.", it:"Fa davvero caldo oggi."},
    {fr:"N'oublie pas de boire de l'eau.", it:"Non dimenticare di bere acqua."},
    {fr:"On peut visiter l'intérieur ?", it:"Possiamo visitare l'interno?"},
    {fr:"La file d'attente est assez longue.", it:"La fila è piuttosto lunga."},
    {fr:"Regarde cette architecture incroyable !", it:"Guarda questa architettura incredibile!"},
    {fr:"Les gladiateurs combattaient ici.", it:"I gladiatori combattevano qui."},
    {fr:"C'est un vrai voyage dans le temps.", it:"È un vero viaggio nel tempo."}
  ]},
  { title:"Au Vatican", phrases:[
    {fr:"La place Saint-Pierre est magnifique.", it:"Piazza San Pietro è magnifica."},
    {fr:"Il faut couvrir ses épaules pour entrer.", it:"Bisogna coprire le spalle per entrare."},
    {fr:"La chapelle Sixtine vaut vraiment le détour.", it:"La Cappella Sistina vale davvero la pena."},
    {fr:"Le plafond est absolument spectaculaire.", it:"Il soffitto è assolutamente spettacolare."},
    {fr:"Il y a énormément de touristes aujourd'hui.", it:"Ci sono moltissimi turisti oggi."},
    {fr:"On devrait réserver nos billets à l'avance.", it:"Dovremmo prenotare i biglietti in anticipo."},
    {fr:"Le musée ferme à quelle heure ?", it:"A che ora chiude il museo?"},
    {fr:"Je voudrais acheter une carte postale.", it:"Vorrei comprare una cartolina."},
    {fr:"Cette visite m'a vraiment marqué.", it:"Questa visita mi ha davvero colpito."},
    {fr:"On reviendra une prochaine fois.", it:"Torneremo un'altra volta."}
  ], tip:{
    title:"« Vorrei » : demander poliment",
    example:"Je voudrais acheter une carte postale. — <b>Vorrei</b> comprare una cartolina.",
    body:"« Vorrei » (du verbe « volere », vouloir) est la forme polie pour demander quelque chose, équivalente à « je voudrais » en français. C'est plus courtois que « voglio » (je veux), exactement comme en français « je voudrais » est plus poli que « je veux »."
  }},
  { title:"Direction la Toscane", phrases:[
    {fr:"On prend l'autoroute vers Florence ?", it:"Prendiamo l'autostrada per Firenze?"},
    {fr:"Il faut faire le plein d'essence.", it:"Bisogna fare il pieno di benzina."},
    {fr:"Les collines toscanes sont splendides.", it:"Le colline toscane sono splendide."},
    {fr:"Regarde tous ces champs de tournesols.", it:"Guarda tutti questi campi di girasoli."},
    {fr:"On s'arrête dans ce petit village ?", it:"Ci fermiamo in questo piccolo paese?"},
    {fr:"Le trajet dure environ deux heures.", it:"Il tragitto dura circa due ore."},
    {fr:"Y a-t-il une aire de repos près d'ici ?", it:"C'è un'area di sosta qui vicino?"},
    {fr:"J'adore ce paysage à perte de vue.", it:"Adoro questo paesaggio a perdita d'occhio."},
    {fr:"On arrivera avant la tombée de la nuit.", it:"Arriveremo prima che faccia buio."},
    {fr:"Ce road trip est vraiment mémorable.", it:"Questo viaggio in macchina è davvero memorabile."}
  ]},
  { title:"Un café le matin", phrases:[
    {fr:"Un cappuccino et un croissant, s'il vous plaît.", it:"Un cappuccino e un cornetto, per favore."},
    {fr:"Je le préfère debout, au comptoir.", it:"Lo preferisco in piedi, al banco."},
    {fr:"Vous avez du sucre de canne ?", it:"Avete dello zucchero di canna?"},
    {fr:"Ce café est vraiment délicieux.", it:"Questo caffè è davvero delizioso."},
    {fr:"Combien je vous dois ?", it:"Quanto le devo?"},
    {fr:"C'est un euro vingt, merci.", it:"Sono un euro e venti, grazie."},
    {fr:"Les Italiens ne boivent jamais de cappuccino après midi.", it:"Gli italiani non bevono mai cappuccino dopo mezzogiorno."},
    {fr:"Pourquoi donc ?", it:"Perché mai?"},
    {fr:"C'est juste une tradition locale.", it:"È solo una tradizione locale."},
    {fr:"Intéressant, je l'ignorais complètement.", it:"Interessante, non lo sapevo affatto."}
  ]},
  { title:"Les courses au marché", phrases:[
    {fr:"Je voudrais un kilo de tomates.", it:"Vorrei un chilo di pomodori."},
    {fr:"Ces tomates sont-elles bien mûres ?", it:"Questi pomodori sono ben maturi?"},
    {fr:"Cette mozzarella de bufflonne est excellente.", it:"Questa mozzarella di bufala è eccellente."},
    {fr:"Combien coûte ce fromage ?", it:"Quanto costa questo formaggio?"},
    {fr:"C'est un peu cher, mais la qualité est là.", it:"È un po' caro, ma la qualità c'è."},
    {fr:"Vous avez du basilic frais ?", it:"Avete del basilico fresco?"},
    {fr:"Bien sûr, juste ici à côté.", it:"Certo, proprio qui accanto."},
    {fr:"Je prends aussi une bouteille d'huile d'olive.", it:"Prendo anche una bottiglia di olio d'oliva."},
    {fr:"Ça fera combien en tout ?", it:"Quanto verrà in tutto?"},
    {fr:"Voici votre monnaie, bonne journée.", it:"Ecco il suo resto, buona giornata."}
  ], tip:{
    title:"Le pluriel irrégulier en -o et en -a",
    example:"Je voudrais un kilo de tomates. — Vorrei un chilo di <b>pomodori</b>.",
    body:"En italien, les noms masculins en -o font leur pluriel en -i (pomodoro → pomodori, panino → panini), et les noms féminins en -a font leur pluriel en -e (pizza → pizze, mela → mele). C'est une règle très régulière, bien différente du simple -s du français."
  }},
  { title:"Au supermarché", phrases:[
    {fr:"Où se trouve le rayon des pâtes ?", it:"Dove si trova il reparto della pasta?"},
    {fr:"C'est au fond, à gauche.", it:"È in fondo, a sinistra."},
    {fr:"Je cherche du parmesan râpé.", it:"Cerco del parmigiano grattugiato."},
    {fr:"Vous avez une carte de fidélité ?", it:"Ha una carta fedeltà?"},
    {fr:"Non, pas encore, merci.", it:"No, non ancora, grazie."},
    {fr:"Vous payez par carte ou en espèces ?", it:"Paga con carta o in contanti?"},
    {fr:"Par carte, s'il vous plaît.", it:"Con carta, per favore."},
    {fr:"Vous avez besoin d'un sac ?", it:"Ha bisogno di un sacchetto?"},
    {fr:"Oui, un petit sac, merci.", it:"Sì, un sacchetto piccolo, grazie."},
    {fr:"Bonne continuation de journée.", it:"Buona giornata a lei."}
  ]},
  { title:"La météo du jour", phrases:[
    {fr:"Quel temps fait-il aujourd'hui ?", it:"Che tempo fa oggi?"},
    {fr:"Il fait un soleil magnifique.", it:"C'è un sole magnifico."},
    {fr:"Le ciel est complètement dégagé.", it:"Il cielo è completamente sereno."},
    {fr:"Il paraît qu'il va pleuvoir demain.", it:"Pare che domani pioverà."},
    {fr:"J'espère que ça va s'améliorer.", it:"Spero che migliori."},
    {fr:"Prends un parapluie, au cas où.", it:"Prendi un ombrello, nel caso."},
    {fr:"En été, il fait très chaud à Rome.", it:"D'estate fa molto caldo a Roma."},
    {fr:"Heureusement, les soirées sont plus fraîches.", it:"Per fortuna, le sere sono più fresche."},
    {fr:"Quelle est la température en ce moment ?", it:"Qual è la temperatura adesso?"},
    {fr:"Environ trente degrés, je pense.", it:"Circa trenta gradi, credo."}
  ]},
  { title:"Les transports à Rome", phrases:[
    {fr:"Comment on va au centre-ville ?", it:"Come si va in centro?"},
    {fr:"Il y a un bus qui part d'ici.", it:"C'è un autobus che parte da qui."},
    {fr:"Le ticket coûte combien ?", it:"Quanto costa il biglietto?"},
    {fr:"Un euro cinquante, valable cent minutes.", it:"Un euro e cinquanta, valido cento minuti."},
    {fr:"On peut aussi prendre le métro.", it:"Si può anche prendere la metro."},
    {fr:"La station la plus proche est à côté.", it:"La stazione più vicina è qui accanto."},
    {fr:"Attention, les bus sont souvent bondés.", it:"Attenzione, gli autobus sono spesso affollati."},
    {fr:"Je préfère marcher quand il fait beau.", it:"Preferisco camminare quando è bello."},
    {fr:"Rome se visite très bien à pied.", it:"Roma si visita molto bene a piedi."},
    {fr:"C'est vrai, tout est assez proche.", it:"È vero, tutto è abbastanza vicino."}
  ]},
  { title:"Demander son chemin", phrases:[
    {fr:"Excusez-moi, je suis un peu perdu.", it:"Mi scusi, sono un po' perso."},
    {fr:"Vous cherchez quelque chose en particulier ?", it:"Sta cercando qualcosa in particolare?"},
    {fr:"Je cherche la fontaine de Trevi.", it:"Cerco la Fontana di Trevi."},
    {fr:"C'est tout droit, puis à droite.", it:"È sempre dritto, poi a destra."},
    {fr:"C'est loin d'ici ?", it:"È lontano da qui?"},
    {fr:"Non, à peine dix minutes à pied.", it:"No, appena dieci minuti a piedi."},
    {fr:"Merci infiniment pour votre aide.", it:"Grazie infinite per il suo aiuto."},
    {fr:"Je vous en prie, bonne visite.", it:"Prego, buona visita."},
    {fr:"N'oubliez pas de jeter une pièce dans la fontaine.", it:"Non dimentichi di lanciare una moneta nella fontana."},
    {fr:"C'est promis, je n'oublierai pas.", it:"Promesso, non dimenticherò."}
  ], tip:{
    title:"« Dritto », « destra », « sinistra » : s'orienter",
    example:"C'est tout droit, puis à droite. — È sempre <b>dritto</b>, poi a <b>destra</b>.",
    body:"Pour demander ou donner son chemin en italien, trois mots suffisent dans la plupart des cas : « dritto » (tout droit), « a destra » (à droite) et « a sinistra » (à gauche). « Sempre dritto » insiste sur le fait de continuer tout droit sans dévier."
  }},
  { title:"La routine du matin", phrases:[
    {fr:"Je me réveille vers sept heures.", it:"Mi sveglio verso le sette."},
    {fr:"Je prends d'abord une douche rapide.", it:"Prima faccio una doccia veloce."},
    {fr:"Ensuite, je prépare le petit-déjeuner.", it:"Poi preparo la colazione."},
    {fr:"Je bois toujours un café noir.", it:"Bevo sempre un caffè nero."},
    {fr:"Je m'habille en dix minutes environ.", it:"Mi vesto in circa dieci minuti."},
    {fr:"Je vérifie mes messages avant de sortir.", it:"Controllo i messaggi prima di uscire."},
    {fr:"Je quitte la maison à huit heures.", it:"Esco di casa alle otto."},
    {fr:"Le trajet jusqu'au bureau prend vingt minutes.", it:"Il tragitto fino all'ufficio dura venti minuti."},
    {fr:"J'arrive généralement un peu en avance.", it:"Di solito arrivo un po' in anticipo."},
    {fr:"Une routine simple, mais efficace.", it:"Una routine semplice, ma efficace."}
  ]},
  { title:"Les repas de la journée", phrases:[
    {fr:"En Italie, le déjeuner est souvent léger.", it:"In Italia, il pranzo è spesso leggero."},
    {fr:"Le vrai repas, c'est plutôt le soir.", it:"Il vero pasto è piuttosto la sera."},
    {fr:"Qu'est-ce qu'on mange ce soir ?", it:"Cosa mangiamo stasera?"},
    {fr:"Je pensais préparer un risotto.", it:"Pensavo di preparare un risotto."},
    {fr:"Excellente idée, j'adore le risotto.", it:"Ottima idea, adoro il risotto."},
    {fr:"Il nous faut du riz arborio.", it:"Ci serve del riso arborio."},
    {fr:"On a déjà tout à la maison.", it:"Abbiamo già tutto a casa."},
    {fr:"Je mets la table pendant que tu cuisines.", it:"Apparecchio la tavola mentre cucini."},
    {fr:"Merci, ça m'aide beaucoup.", it:"Grazie, mi aiuta molto."},
    {fr:"Bon appétit à tous les deux.", it:"Buon appetito a entrambi."}
  ]},
  { title:"Faire les tâches ménagères", phrases:[
    {fr:"Il faut passer l'aspirateur aujourd'hui.", it:"Bisogna passare l'aspirapolvere oggi."},
    {fr:"Je m'occupe de la vaisselle.", it:"Mi occupo dei piatti."},
    {fr:"Tu peux étendre le linge, s'il te plaît ?", it:"Puoi stendere i panni, per favore?"},
    {fr:"Avec plaisir, je m'en charge.", it:"Con piacere, me ne occupo io."},
    {fr:"La cuisine est un peu en désordre.", it:"La cucina è un po' in disordine."},
    {fr:"On range tout avant le dîner.", it:"Mettiamo tutto in ordine prima di cena."},
    {fr:"Les poubelles doivent sortir ce soir.", it:"La spazzatura deve uscire stasera."},
    {fr:"Je m'en occupe en rentrant.", it:"Me ne occupo quando torno."},
    {fr:"Merci pour ton aide, vraiment.", it:"Grazie per il tuo aiuto, davvero."},
    {fr:"C'est bien plus rapide à deux.", it:"È molto più veloce in due."}
  ]},
  { title:"Les vêtements et les couleurs", phrases:[
    {fr:"Je cherche une robe pour ce soir.", it:"Cerco un vestito per stasera."},
    {fr:"Vous préférez quelle couleur ?", it:"Che colore preferisce?"},
    {fr:"Plutôt dans les tons de bleu.", it:"Piuttosto nei toni del blu."},
    {fr:"Essayez celle-ci, elle vous ira bien.", it:"Provi questo, le starà bene."},
    {fr:"Où sont les cabines d'essayage ?", it:"Dove sono i camerini?"},
    {fr:"Juste là, au fond du magasin.", it:"Proprio lì, in fondo al negozio."},
    {fr:"Elle me va parfaitement, je la prends.", it:"Mi sta perfettamente, la prendo."},
    {fr:"Vous avez aussi des chaussures assorties ?", it:"Avete anche delle scarpe abbinate?"},
    {fr:"Oui, juste à côté, à droite.", it:"Sì, proprio accanto, a destra."},
    {fr:"Parfait, merci pour votre aide.", it:"Perfetto, grazie per il suo aiuto."}
  ]},
  { title:"Dire l'heure et les nombres", phrases:[
    {fr:"Quelle heure est-il, s'il te plaît ?", it:"Che ore sono, per favore?"},
    {fr:"Il est dix heures et quart.", it:"Sono le dieci e un quarto."},
    {fr:"Notre réservation est à midi et demi.", it:"La nostra prenotazione è a mezzogiorno e mezzo."},
    {fr:"On devrait partir dans cinq minutes.", it:"Dovremmo partire tra cinque minuti."},
    {fr:"Le musée ouvre à neuf heures.", it:"Il museo apre alle nove."},
    {fr:"Il ferme à dix-huit heures trente.", it:"Chiude alle diciotto e trenta."},
    {fr:"Combien coûte l'entrée pour deux adultes ?", it:"Quanto costa l'ingresso per due adulti?"},
    {fr:"Ça fait vingt-quatre euros en tout.", it:"Sono ventiquattro euro in tutto."},
    {fr:"Voici cinquante euros.", it:"Ecco cinquanta euro."},
    {fr:"Et voici votre monnaie, madame.", it:"Ed ecco il suo resto, signora."}
  ], tip:{
    title:"L'heure officielle en italien",
    example:"Il ferme à dix-huit heures trente. — Chiude alle <b>diciotto</b> e trenta.",
    body:"Comme en français, l'italien utilise couramment le système sur 24 heures pour les horaires officiels (musées, trains, restaurants) : « le diciotto » pour 18h. Dans la conversation courante, on utilise aussi le système sur 12 heures avec « di mattina »/« di sera » (du matin/du soir)."
  }},
  { title:"Un appel téléphonique", phrases:[
    {fr:"Allô, c'est bien l'hôtel Bellavista ?", it:"Pronto, è l'hotel Bellavista?"},
    {fr:"Oui, bonjour, je vous écoute.", it:"Sì, buongiorno, la ascolto."},
    {fr:"J'aimerais confirmer ma réservation.", it:"Vorrei confermare la mia prenotazione."},
    {fr:"Quel est votre nom de famille ?", it:"Qual è il suo cognome?"},
    {fr:"Mon nom est Dupont, pour trois nuits.", it:"Il mio cognome è Dupont, per tre notti."},
    {fr:"Parfait, tout est confirmé.", it:"Perfetto, è tutto confermato."},
    {fr:"À quelle heure est l'arrivée possible ?", it:"A che ora è possibile il check-in?"},
    {fr:"À partir de quatorze heures.", it:"A partire dalle quattordici."},
    {fr:"Très bien, merci pour votre aide.", it:"Va benissimo, grazie per il suo aiuto."},
    {fr:"Au revoir et à bientôt.", it:"Arrivederci e a presto."}
  ]},
  { title:"Acheter des souvenirs", phrases:[
    {fr:"Je cherche un souvenir typiquement italien.", it:"Cerco un souvenir tipicamente italiano."},
    {fr:"Ce petit Colisée en miniature est très joli.", it:"Questo piccolo Colosseo in miniatura è molto carino."},
    {fr:"Combien coûte celui-ci exactement ?", it:"Quanto costa esattamente questo?"},
    {fr:"Quinze euros, c'est fait main.", it:"Quindici euro, è fatto a mano."},
    {fr:"Je prends aussi un magnet pour mon frigo.", it:"Prendo anche un magnete per il mio frigo."},
    {fr:"Vous avez du papier cadeau, par hasard ?", it:"Ha della carta da regalo, per caso?"},
    {fr:"Oui, c'est offert avec l'achat.", it:"Sì, è offerta con l'acquisto."},
    {fr:"C'est très généreux de votre part.", it:"È molto generoso da parte sua."},
    {fr:"Ma famille va vraiment adorer ces cadeaux.", it:"La mia famiglia adorerà davvero questi regali."},
    {fr:"Merci et bon retour chez vous.", it:"Grazie e buon ritorno a casa."}
  ]},
  { title:"Une pause glace", phrases:[
    {fr:"On s'arrête pour une glace italienne ?", it:"Ci fermiamo per un gelato italiano?"},
    {fr:"Excellente idée, il fait très chaud.", it:"Ottima idea, fa molto caldo."},
    {fr:"Je prendrai un parfum pistache et citron.", it:"Prenderò un gusto pistacchio e limone."},
    {fr:"Un cornet ou un pot, madame ?", it:"Un cono o una coppetta, signora?"},
    {fr:"Un cornet, s'il vous plaît.", it:"Un cono, per favore."},
    {fr:"Vous voulez de la chantilly en plus ?", it:"Vuole anche della panna montata?"},
    {fr:"Oui, pourquoi pas, juste un peu.", it:"Sì, perché no, solo un po'."},
    {fr:"Cette glace est absolument crémeuse.", it:"Questo gelato è assolutamente cremoso."},
    {fr:"C'est la meilleure que j'aie jamais mangée.", it:"È il migliore che abbia mai mangiato."},
    {fr:"On en reprendra sûrement demain.", it:"Lo riprenderemo sicuramente domani."}
  ]},
  { title:"Fin du module : un bilan", phrases:[
    {fr:"On a déjà vu énormément de choses.", it:"Abbiamo già visto moltissime cose."},
    {fr:"Rome restera un souvenir inoubliable.", it:"Roma resterà un ricordo indimenticabile."},
    {fr:"J'ai adoré la cuisine italienne.", it:"Ho adorato la cucina italiana."},
    {fr:"Les gens sont vraiment chaleureux ici.", it:"Le persone sono davvero calorose qui."},
    {fr:"J'ai appris pas mal de mots utiles.", it:"Ho imparato parecchie parole utili."},
    {fr:"La prochaine étape, c'est Venise.", it:"La prossima tappa è Venezia."},
    {fr:"J'ai hâte de voir les canaux.", it:"Non vedo l'ora di vedere i canali."},
    {fr:"Ce voyage dépasse toutes mes attentes.", it:"Questo viaggio supera tutte le mie aspettative."},
    {fr:"Tu as terminé le module « Le quotidien » !", it:"Hai terminato il modulo « La vita quotidiana »!"},
    {fr:"Continue comme ça, tu progresses bien.", it:"Continua così, stai facendo buoni progressi."}
  ]}
];

const level1Module2Lessons = [
  { title:"À l'aéroport", phrases:[
    {fr:"Où se trouve le comptoir d'enregistrement ?", it:"Dove si trova il check-in?"},
    {fr:"Votre vol est annoncé porte douze.", it:"Il suo volo è annunciato al gate dodici."},
    {fr:"J'ai seulement un bagage à main.", it:"Ho solo un bagaglio a mano."},
    {fr:"Vous devez retirer votre ceinture.", it:"Deve togliersi la cintura."},
    {fr:"Le contrôle de sécurité est par là.", it:"Il controllo di sicurezza è da quella parte."},
    {fr:"L'embarquement commence dans combien de temps ?", it:"L'imbarco inizia tra quanto tempo?"},
    {fr:"Dans environ trente minutes.", it:"Tra circa trenta minuti."},
    {fr:"Je vais acheter un magazine en attendant.", it:"Vado a comprare una rivista mentre aspetto."},
    {fr:"Le vol a-t-il du retard ?", it:"Il volo è in ritardo?"},
    {fr:"Non, il est annoncé à l'heure.", it:"No, è annunciato in orario."}
  ]},
  { title:"Arrivée à l'hôtel", phrases:[
    {fr:"Bonjour, j'ai une réservation à mon nom.", it:"Buongiorno, ho una prenotazione a mio nome."},
    {fr:"Pouvez-vous me montrer une pièce d'identité ?", it:"Può mostrarmi un documento d'identità?"},
    {fr:"Bien sûr, voici mon passeport.", it:"Certo, ecco il mio passaporto."},
    {fr:"Votre chambre est au troisième étage.", it:"La sua stanza è al terzo piano."},
    {fr:"Le petit-déjeuner est servi à partir de sept heures.", it:"La colazione è servita a partire dalle sette."},
    {fr:"Y a-t-il le wifi dans toutes les chambres ?", it:"C'è il wifi in tutte le stanze?"},
    {fr:"Oui, le mot de passe est sur la table.", it:"Sì, la password è sul tavolo."},
    {fr:"À quelle heure dois-je libérer la chambre ?", it:"A che ora devo lasciare la stanza?"},
    {fr:"Le départ est à onze heures.", it:"Il check-out è alle undici."},
    {fr:"Merci, passez un excellent séjour.", it:"Grazie, le auguriamo un ottimo soggiorno."}
  ], tip:{
    title:"« Lei » : le vouvoiement en italien",
    example:"Votre chambre est au troisième étage. — La <b>sua</b> stanza è al terzo piano.",
    body:"Comme le « vous » de politesse en français, l'italien utilise « Lei » (avec majuscule) pour vouvoyer poliment une personne, avec le verbe conjugué à la troisième personne du singulier. C'est la forme employée par défaut avec le personnel d'un hôtel, d'un magasin ou d'une administration."
  }},
  { title:"Un problème dans la chambre", phrases:[
    {fr:"Bonjour, j'ai un petit souci dans ma chambre.", it:"Buongiorno, ho un piccolo problema nella mia stanza."},
    {fr:"Que se passe-t-il exactement ?", it:"Cosa succede esattamente?"},
    {fr:"La climatisation ne fonctionne pas.", it:"L'aria condizionata non funziona."},
    {fr:"Je suis vraiment désolé pour la gêne.", it:"Mi scuso davvero per il disagio."},
    {fr:"Quelqu'un va venir vérifier tout de suite.", it:"Qualcuno verrà a controllare subito."},
    {fr:"Pourriez-vous aussi changer les serviettes ?", it:"Potrebbe anche cambiare gli asciugamani?"},
    {fr:"Bien sûr, je m'en occupe immédiatement.", it:"Certo, me ne occupo immediatamente."},
    {fr:"Merci beaucoup pour votre réactivité.", it:"Grazie mille per la sua prontezza."},
    {fr:"Je vous en prie, c'est tout à fait normal.", it:"Prego, è assolutamente normale."},
    {fr:"Tout est réparé maintenant, j'espère.", it:"Ora è tutto riparato, spero."}
  ], tip:{
    title:"« Potrebbe » : une demande encore plus polie",
    example:"Pourriez-vous aussi changer les serviettes ? — <b>Potrebbe</b> anche cambiare gli asciugamani?",
    body:"« Potrebbe » (conditionnel de « potere », pouvoir) permet de demander un service avec beaucoup de politesse, tout comme « pourriez-vous » en français. On l'utilise souvent avec « Lei » dans des situations formelles, comme à la réception d'un hôtel."
  }},
  { title:"Prendre le train pour Venise", phrases:[
    {fr:"Un billet pour Venise, s'il vous plaît.", it:"Un biglietto per Venezia, per favore."},
    {fr:"Vous voulez un aller simple ou un aller-retour ?", it:"Vuole un andata semplice o un andata e ritorno?"},
    {fr:"Un aller simple suffira.", it:"Un andata semplice basterà."},
    {fr:"Le prochain train part dans vingt minutes.", it:"Il prossimo treno parte tra venti minuti."},
    {fr:"De quel quai part-il ?", it:"Da quale binario parte?"},
    {fr:"Du quai numéro cinq.", it:"Dal binario numero cinque."},
    {fr:"Est-ce qu'il faut réserver une place ?", it:"Bisogna prenotare un posto?"},
    {fr:"C'est conseillé, mais pas obligatoire.", it:"È consigliato, ma non obbligatorio."},
    {fr:"Le trajet dure combien de temps ?", it:"Il viaggio dura quanto tempo?"},
    {fr:"Environ trois heures et demie.", it:"Circa tre ore e mezza."}
  ]},
  { title:"Dans le train", phrases:[
    {fr:"Excusez-moi, cette place est-elle libre ?", it:"Scusi, questo posto è libero?"},
    {fr:"Oui, bien sûr, asseyez-vous.", it:"Sì, certo, si sieda."},
    {fr:"Vous pouvez mettre votre valise là-haut.", it:"Può metter la sua valigia lì sopra."},
    {fr:"Merci, c'est très aimable.", it:"Grazie, è molto gentile."},
    {fr:"Le paysage est vraiment splendide.", it:"Il paesaggio è davvero splendido."},
    {fr:"On longe la côte depuis un moment.", it:"Costeggiamo la costa da un po'."},
    {fr:"Le wagon-restaurant est où exactement ?", it:"La carrozza ristorante dov'è esattamente?"},
    {fr:"Deux wagons plus loin, je crois.", it:"Due carrozze più avanti, credo."},
    {fr:"On arrive dans combien de temps ?", it:"Arriviamo tra quanto tempo?"},
    {fr:"Dans environ quarante-cinq minutes.", it:"Tra circa quarantacinque minuti."}
  ], tip:{
    title:"« Credo » pour exprimer une supposition",
    example:"Deux wagons plus loin, je crois. — Due carrozze più avanti, <b>credo</b>.",
    body:"« Credo » (du verbe « credere », croire) s'emploie comme en français « je crois » pour exprimer une supposition plutôt qu'une certitude. Placé en fin de phrase comme ici, il garde exactement le même sens nuancé qu'en français."
  }},
  { title:"Arrivée à Venise", phrases:[
    {fr:"Nous voilà enfin arrivés à Venise.", it:"Siamo finalmente arrivati a Venezia."},
    {fr:"Il n'y a pas de voitures du tout ici.", it:"Non ci sono macchine del tutto qui."},
    {fr:"On se déplace uniquement à pied ou en bateau.", it:"Ci si muove solo a piedi o in barca."},
    {fr:"Comment on rejoint notre hôtel ?", it:"Come arriviamo al nostro hotel?"},
    {fr:"Il faut prendre un vaporetto.", it:"Bisogna prendere un vaporetto."},
    {fr:"L'arrêt est juste devant la gare.", it:"La fermata è proprio davanti alla stazione."},
    {fr:"Regarde ce pont magnifique sur le canal.", it:"Guarda questo ponte magnifico sul canale."},
    {fr:"C'est encore plus beau qu'en photo.", it:"È ancora più bello che in foto."},
    {fr:"Je suis complètement sous le charme.", it:"Sono completamente incantato."},
    {fr:"On va adorer explorer cette ville.", it:"Ci piacerà moltissimo esplorare questa città."}
  ]},
  { title:"Une balade en gondole", phrases:[
    {fr:"On pourrait faire un tour en gondole.", it:"Potremmo fare un giro in gondola."},
    {fr:"Combien coûte une petite balade ?", it:"Quanto costa un piccolo giro?"},
    {fr:"Environ quatre-vingts euros la demi-heure.", it:"Circa ottanta euro per mezz'ora."},
    {fr:"C'est cher, mais ça vaut vraiment le coup.", it:"È caro, ma vale davvero la pena."},
    {fr:"Le gondolier chante magnifiquement bien.", it:"Il gondoliere canta magnificamente bene."},
    {fr:"Ces petites ruelles sont absolument charmantes.", it:"Questi piccoli vicoli sono assolutamente incantevoli."},
    {fr:"On passe sous combien de ponts environ ?", it:"Passiamo sotto quanti ponti circa?"},
    {fr:"Je n'ai même pas compté, c'est magique.", it:"Non ho nemmeno contato, è magico."},
    {fr:"Ce souvenir restera gravé à jamais.", it:"Questo ricordo resterà per sempre."},
    {fr:"Merci pour cette expérience incroyable.", it:"Grazie per questa esperienza incredibile."}
  ]},
  { title:"Se perdre dans Venise", phrases:[
    {fr:"Je crois qu'on s'est perdus.", it:"Credo che ci siamo persi."},
    {fr:"Ce n'est pas grave, continuons d'explorer.", it:"Non importa, continuiamo a esplorare."},
    {fr:"Regarde cette petite place cachée.", it:"Guarda questa piccola piazza nascosta."},
    {fr:"Personne ne vient jamais par ici.", it:"Nessuno viene mai da queste parti."},
    {fr:"C'est justement ça qui est merveilleux.", it:"È proprio questo che è meraviglioso."},
    {fr:"On finira bien par retrouver notre chemin.", it:"Finiremo per ritrovare la strada."},
    {fr:"Regardons simplement la carte.", it:"Guardiamo semplicemente la mappa."},
    {fr:"Notre hôtel est juste après ce pont.", it:"Il nostro hotel è proprio dopo questo ponte."},
    {fr:"Ah, enfin, je reconnais cette rue.", it:"Ah, finalmente, riconosco questa strada."},
    {fr:"Se perdre à Venise est presque un plaisir.", it:"Perdersi a Venezia è quasi un piacere."}
  ]},
  { title:"Louer une voiture", phrases:[
    {fr:"Je voudrais louer une voiture pour trois jours.", it:"Vorrei noleggiare una macchina per tre giorni."},
    {fr:"Vous avez votre permis de conduire ?", it:"Ha la sua patente di guida?"},
    {fr:"Oui, le voici, avec ma carte bancaire.", it:"Sì, eccola, con la mia carta di credito."},
    {fr:"L'assurance est-elle incluse dans le prix ?", it:"L'assicurazione è includa nel prezzo?"},
    {fr:"Non, c'est une option supplémentaire.", it:"No, è un'opzione aggiuntiva."},
    {fr:"Je préfère la prendre, par sécurité.", it:"Preferisco prenderla, per sicurezza."},
    {fr:"Le réservoir est-il plein au départ ?", it:"Il serbatoio è pieno alla partenza?"},
    {fr:"Oui, et vous devez le rendre plein.", it:"Sì, e lo deve restituire pieno."},
    {fr:"Très bien, c'est noté.", it:"Va bene, è annotato."},
    {fr:"Voici les clés, bonne route.", it:"Ecco le chiavi, buon viaggio."}
  ]},
  { title:"En panne sur l'autoroute", phrases:[
    {fr:"La voiture fait un bruit vraiment bizarre.", it:"La macchina fa un rumore davvero strano."},
    {fr:"On devrait s'arrêter dès que possible.", it:"Dovremmo fermarci il prima possibile."},
    {fr:"Il y a une aire de service juste après.", it:"C'è un'area di servizio proprio dopo."},
    {fr:"Je pense que c'est un pneu crevé.", it:"Penso che sia una gomma a terra."},
    {fr:"Appelons l'assistance routière tout de suite.", it:"Chiamiamo subito l'assistenza stradale."},
    {fr:"Ils arrivent dans combien de temps ?", it:"Arrivano tra quanto tempo?"},
    {fr:"Dans environ quarante minutes, paraît-il.", it:"Tra circa quaranta minuti, pare."},
    {fr:"Heureusement, il fait encore jour.", it:"Per fortuna, è ancora giorno."},
    {fr:"On en profite pour faire une pause.", it:"Ne approfittiamo per fare una pausa."},
    {fr:"Au moins, ça nous fait une anecdote.", it:"Almeno, ci fa un bell'aneddoto."}
  ]},
  { title:"Trouver une pharmacie", phrases:[
    {fr:"Excusez-moi, où est la pharmacie la plus proche ?", it:"Scusi, dov'è la farmacia più vicina?"},
    {fr:"Juste au coin de la rue, à droite.", it:"Proprio all'angolo della strada, a destra."},
    {fr:"Auriez-vous quelque chose contre le mal de tête ?", it:"Avrebbe qualcosa contro il mal di testa?"},
    {fr:"Oui, bien sûr, voici un médicament efficace.", it:"Sì, certo, ecco un medicinale efficace."},
    {fr:"Faut-il une ordonnance pour celui-ci ?", it:"Serve la ricetta per questo?"},
    {fr:"Non, celui-ci est vendu sans ordonnance.", it:"No, questo si vende senza ricetta."},
    {fr:"Combien de comprimés par jour ?", it:"Quante compresse al giorno?"},
    {fr:"Un comprimé toutes les six heures maximum.", it:"Una compressa ogni sei ore al massimo."},
    {fr:"Merci infiniment pour votre conseil.", it:"Grazie infinite per il suo consiglio."},
    {fr:"Je vous souhaite un bon rétablissement.", it:"Le auguro una buona guarigione."}
  ], tip:{
    title:"« Qualcosa contro » : demander un remède",
    example:"Auriez-vous quelque chose contre le mal de tête ? — Avrebbe <b>qualcosa contro</b> il mal di testa?",
    body:"L'expression « qualcosa contro » (quelque chose contre) est très utile en pharmacie pour demander un remède sans connaître le nom précis du médicament : « qualcosa contro il mal di testa » (contre le mal de tête), « qualcosa contro la tosse » (contre la toux)."
  }},
  { title:"Au bureau de poste", phrases:[
    {fr:"Je voudrais envoyer ce colis en France.", it:"Vorrei spedire questo pacco in Francia."},
    {fr:"Vous voulez l'envoyer rapide ou standard ?", it:"Vuole spedirlo rapido o standard?"},
    {fr:"Standard, ce n'est pas urgent.", it:"Standard, non è urgente."},
    {fr:"Ça prendra environ une semaine.", it:"Ci vorrà circa una settimana."},
    {fr:"Combien ça coûte exactement ?", it:"Quanto costa esattamente?"},
    {fr:"Douze euros cinquante, avec le suivi.", it:"Dodici euro e cinquanta, con il tracciamento."},
    {fr:"Très bien, je prends aussi des timbres.", it:"Va bene, prendo anche dei francobolli."},
    {fr:"Combien en voulez-vous ?", it:"Quanti ne vuole?"},
    {fr:"Cinq timbres pour l'international, s'il vous plaît.", it:"Cinque francobolli per l'estero, per favore."},
    {fr:"Voici votre reçu, bonne journée.", it:"Ecco la sua ricevuta, buona giornata."}
  ]},
  { title:"À la banque", phrases:[
    {fr:"Bonjour, je voudrais changer des euros.", it:"Buongiorno, vorrei cambiare degli euro."},
    {fr:"Quelle devise souhaitez-vous obtenir ?", it:"Quale valuta desidera ottenere?"},
    {fr:"Des dollars, s'il vous plaît.", it:"Dei dollari, per favore."},
    {fr:"Quel est le taux de change aujourd'hui ?", it:"Qual è il tasso di cambio oggi?"},
    {fr:"Il est affiché sur l'écran, là-bas.", it:"È mostrato sullo schermo, lì."},
    {fr:"Y a-t-il une commission à payer ?", it:"C'è una commissione da pagare?"},
    {fr:"Oui, deux pour cent du montant total.", it:"Sì, il due per cento dell'importo totale."},
    {fr:"D'accord, c'est acceptable.", it:"D'accordo, è accettabile."},
    {fr:"Voici vos dollars et votre reçu.", it:"Ecco i suoi dollari e la sua ricevuta."},
    {fr:"Merci beaucoup pour votre aide.", it:"Grazie mille per il suo aiuto."}
  ]},
  { title:"Perdre ses bagages", phrases:[
    {fr:"Ma valise n'est pas arrivée sur le tapis.", it:"La mia valigia non è arrivata sul nastro."},
    {fr:"Avez-vous votre ticket de bagage ?", it:"Ha il suo scontrino del bagaglio?"},
    {fr:"Oui, le voici, attaché à mon billet.", it:"Sì, eccolo, attaccato al mio biglietto."},
    {fr:"Nous allons lancer une recherche immédiatement.", it:"Lanceremo immediatamente una ricerca."},
    {fr:"Combien de temps cela prend-il généralement ?", it:"Quanto tempo ci vuole di solito?"},
    {fr:"Entre vingt-quatre et quarante-huit heures.", it:"Tra ventiquattro e quarantotto ore."},
    {fr:"Je n'ai presque plus rien à me mettre.", it:"Non ho quasi più niente da indossare."},
    {fr:"Nous vous donnerons une trousse de dépannage.", it:"Le daremo un kit di emergenza."},
    {fr:"Nous vous appellerons dès qu'elle sera retrouvée.", it:"La chiameremo non appena sarà ritrovata."},
    {fr:"Merci, j'espère vraiment la récupérer vite.", it:"Grazie, spero davvero di recuperarla presto."}
  ]},
  { title:"Réserver une excursion", phrases:[
    {fr:"Je voudrais réserver une excursion en bateau.", it:"Vorrei prenotare un'escursione in barca."},
    {fr:"Vers quelle destination exactement ?", it:"Verso quale destinazione esattamente?"},
    {fr:"Vers les îles de Murano et Burano.", it:"Verso le isole di Murano e Burano."},
    {fr:"Excellent choix, le départ est à neuf heures.", it:"Ottima scelta, la partenza è alle nove."},
    {fr:"Le déjeuner est-il inclus dans le prix ?", it:"Il pranzo è incluso nel prezzo?"},
    {fr:"Non, mais il y a un bar à bord.", it:"No, ma c'è un bar a bordo."},
    {fr:"Combien de personnes pour votre réservation ?", it:"Quante persone per la sua prenotazione?"},
    {fr:"Deux adultes, s'il vous plaît.", it:"Due adulti, per favore."},
    {fr:"Voici votre confirmation par mail.", it:"Ecco la sua conferma per email."},
    {fr:"Parfait, on a hâte d'y être.", it:"Perfetto, non vediamo l'ora."}
  ]},
  { title:"Prendre un taxi", phrases:[
    {fr:"Pouvez-vous m'appeler un taxi, s'il vous plaît ?", it:"Può chiamarmi un taxi, per favore?"},
    {fr:"Bien sûr, il arrive dans dix minutes.", it:"Certo, arriva in dieci minuti."},
    {fr:"Je vais à l'aéroport, s'il vous plaît.", it:"Vado all'aeroporto, per favore."},
    {fr:"Le trajet prend environ vingt minutes.", it:"Il tragitto dura circa venti minuti."},
    {fr:"Vous pouvez mettre le compteur, merci.", it:"Può metter il tassametro, grazie."},
    {fr:"Y a-t-il beaucoup de circulation ce matin ?", it:"C'è molto traffico questa mattina?"},
    {fr:"Un petit peu, mais rien d'inquiétant.", it:"Un po', ma niente di preoccupante."},
    {fr:"Ça fera combien à peu près ?", it:"Quanto verrà più o meno?"},
    {fr:"Autour de vingt-cinq euros.", it:"Intorno ai venticinque euro."},
    {fr:"Gardez la monnaie, merci beaucoup.", it:"Tenga il resto, grazie mille."}
  ]},
  { title:"Au check-in de retour", phrases:[
    {fr:"Bonjour, voici mon billet et mon passeport.", it:"Buongiorno, ecco il mio biglietto e il mio passaporto."},
    {fr:"Vous avez combien de bagages à enregistrer ?", it:"Quanti bagagli ha da registrare?"},
    {fr:"Juste une valise, s'il vous plaît.", it:"Solo una valigia, per favore."},
    {fr:"Elle dépasse légèrement le poids autorisé.", it:"Supera leggermente il peso consentito."},
    {fr:"Je peux retirer quelques affaires.", it:"Posso togliere qualche oggetto."},
    {fr:"Préférez-vous un siège côté couloir ou hublot ?", it:"Preferisce un posto corridoio o finestrino?"},
    {fr:"Côté hublot, si possible.", it:"Finestrino, se possibile."},
    {fr:"Voici votre carte d'embarquement.", it:"Ecco la sua carta d'imbarco."},
    {fr:"L'embarquement se fait porte quinze.", it:"L'imbarco si fa al gate quindici."},
    {fr:"Merci beaucoup, bon retour.", it:"Grazie mille, buon ritorno."}
  ]},
  { title:"Discuter avec le personnel de bord", phrases:[
    {fr:"Excusez-moi, pourrais-je avoir un verre d'eau ?", it:"Scusi, potrei avere un bicchiere d'acqua?"},
    {fr:"Bien sûr, tout de suite, madame.", it:"Certo, subito, signora."},
    {fr:"Le repas sera servi dans combien de temps ?", it:"Il pasto verrà servito tra quanto tempo?"},
    {fr:"Dans environ une demi-heure.", it:"Tra circa mezz'ora."},
    {fr:"Avez-vous une option végétarienne ?", it:"Ha un'opzione vegetariana?"},
    {fr:"Oui, bien sûr, je vous l'apporte.", it:"Sì, certamente, gliela porto."},
    {fr:"Pouvez-vous régler ma lumière, s'il vous plaît ?", it:"Può regolare la mia luce, per favore?"},
    {fr:"Bien sûr, voilà qui est fait.", it:"Certo, ecco fatto."},
    {fr:"Merci beaucoup pour votre gentillesse.", it:"Grazie mille per la sua gentilezza."},
    {fr:"C'est un plaisir, bon vol à vous.", it:"È un piacere, buon volo a lei."}
  ]},
  { title:"Une correspondance manquée", phrases:[
    {fr:"Notre train de correspondance vient de partir.", it:"Il nostro treno di coincidenza è appena partito."},
    {fr:"Il doit bien y avoir un autre train.", it:"Ci deve essere un altro treno."},
    {fr:"Le prochain part dans deux heures seulement.", it:"Il prossimo parte solo tra due ore."},
    {fr:"C'est très ennuyeux, on va rater le dîner.", it:"È molto fastidioso, perderemo la cena."},
    {fr:"On peut toujours manger quelque chose à la gare.", it:"Possiamo sempre mangiare qualcosa alla stazione."},
    {fr:"Bonne idée, il y a un petit bar là-bas.", it:"Buona idea, c'è un piccolo bar laggiù."},
    {fr:"Au moins, on a le temps de se détendre.", it:"Almeno abbiamo tempo per rilassarci."},
    {fr:"C'est vrai, voyons le bon côté des choses.", it:"È vero, vediamo il lato positivo delle cose."},
    {fr:"Le personnel a été très compréhensif.", it:"Il personale è stato molto comprensivo."},
    {fr:"Au final, ce contretemps n'était pas si grave.", it:"Alla fine, questo contrattempo non era così grave."}
  ], tip:{
    title:"« Deve esserci » : il doit y avoir",
    example:"Il doit bien y avoir un autre train. — Ci <b>deve essere</b> un altro treno.",
    body:"« Ci deve essere » combine « c'è » (il y a) et « dovere » (devoir) pour exprimer une supposition logique, exactement comme « il doit y avoir » en français. On trouve aussi « ci dev'essere », forme contractée plus courante à l'oral."
  }},
  { title:"Fin du module : un bilan de voyage", phrases:[
    {fr:"Ce voyage s'est vraiment bien déroulé.", it:"Questo viaggio è andato davvero bene."},
    {fr:"Malgré quelques petits imprévus en chemin.", it:"Nonostante qualche piccolo imprevisto lungo il cammino."},
    {fr:"On a réussi à se débrouiller à chaque fois.", it:"Siamo riusciti a cavarcela ogni volta."},
    {fr:"Les gens ont toujours été prêts à aider.", it:"Le persone sono sempre state pronte ad aiutare."},
    {fr:"J'ai appris énormément de vocabulaire utile.", it:"Ho imparato moltissimo vocabolario utile."},
    {fr:"Venise restera un souvenir vraiment spécial.", it:"Venezia resterà un ricordo davvero speciale."},
    {fr:"Tu as terminé le module « En voyage » !", it:"Hai terminato il modulo « In viaggio »!"},
    {fr:"Le prochain module parle de conversation sociale.", it:"Il prossimo modulo parla di conversazione sociale."},
    {fr:"J'ai vraiment hâte de continuer.", it:"Non vedo davvero l'ora di continuare."},
    {fr:"Bravo pour tous ces progrès réalisés.", it:"Bravo per tutti questi progressi fatti."}
  ]}
];

const level1Module3Lessons = [
  { title:"Se présenter", phrases:[
    {fr:"Bonjour, comment vous appelez-vous ?", it:"Buongiorno, come si chiama?"},
    {fr:"Je m'appelle Marie, et vous ?", it:"Mi chiamo Marie, e lei?"},
    {fr:"Moi, c'est Marco, enchanté.", it:"Io sono Marco, piacere."},
    {fr:"Vous venez d'où exactement ?", it:"Da dove viene esattamente?"},
    {fr:"Je viens de Lyon, en France.", it:"Vengo da Lione, in Francia."},
    {fr:"Et vous, vous êtes italien ?", it:"E lei, è italiano?"},
    {fr:"Oui, je suis né à Rome.", it:"Sì, sono nato a Roma."},
    {fr:"Quel âge avez-vous, si je peux demander ?", it:"Quanti anni ha, se posso chiedere?"},
    {fr:"J'ai trente-deux ans.", it:"Ho trentadue anni."},
    {fr:"Ravi de faire votre connaissance.", it:"Felice di fare la sua conoscenza."}
  ], tip:{
    title:"« Mi chiamo » : se présenter",
    example:"Je m'appelle Marie, et vous ? — <b>Mi chiamo</b> Marie, e lei?",
    body:"« Mi chiamo » vient du verbe « chiamarsi » (s'appeler) et signifie littéralement « je me nomme », exactement comme « je m'appelle » en français. C'est la façon la plus naturelle de se présenter en italien."
  }},
  { title:"Parler de sa famille", phrases:[
    {fr:"Vous avez des frères et sœurs ?", it:"Ha fratelli e sorelle?"},
    {fr:"Oui, j'ai un frère et une sœur.", it:"Sì, ho un fratello e una sorella."},
    {fr:"Et vous, vous êtes marié ?", it:"E lei, è sposato?"},
    {fr:"Oui, depuis cinq ans déjà.", it:"Sì, già da cinque anni."},
    {fr:"Vous avez des enfants ?", it:"Ha dei figli?"},
    {fr:"Oui, deux filles et un garçon.", it:"Sì, due figlie e un figlio."},
    {fr:"Quel âge ont-ils ?", it:"Quanti anni hanno?"},
    {fr:"Dix, huit et six ans.", it:"Dieci, otto e sei anni."},
    {fr:"Ma famille me manque un peu en voyage.", it:"Mi manca un po' la mia famiglia quando viaggio."},
    {fr:"C'est tout à fait normal, je comprends.", it:"È del tutto normale, capisco."}
  ], tip:{
    title:"« Avere » pour l'âge et la famille",
    example:"J'ai trente-deux ans. — Ho trentadue anni.",
    body:"Contrairement au français qui utilise « avoir » seulement pour l'âge, l'italien emploie aussi « avere » pour parler de sa famille : « ho un fratello » (j'ai un frère), « ho due figlie » (j'ai deux filles). C'est le même verbe « avere » qui couvre les deux usages."
  }},
  { title:"Parler de son travail", phrases:[
    {fr:"Qu'est-ce que vous faites comme travail ?", it:"Che lavoro fa?"},
    {fr:"Je suis professeur dans un lycée.", it:"Sono insegnante in un liceo."},
    {fr:"Quelle matière enseignez-vous ?", it:"Quale materia insegna?"},
    {fr:"J'enseigne les mathématiques depuis dix ans.", it:"Insegno matematica da dieci anni."},
    {fr:"Vous aimez votre métier ?", it:"Le piace il suo lavoro?"},
    {fr:"Beaucoup, même si c'est parfois fatigant.", it:"Molto, anche se a volte è faticoso."},
    {fr:"Et vous, qu'est-ce que vous faites ?", it:"E lei, cosa fa?"},
    {fr:"Je travaille dans le tourisme.", it:"Lavoro nel turismo."},
    {fr:"Ça doit être passionnant comme métier.", it:"Deve essere affascinante come lavoro."},
    {fr:"Oui, je rencontre des gens formidables.", it:"Sì, incontro persone fantastiche."}
  ], tip:{
    title:"« Da » pour la durée",
    example:"J'enseigne les mathématiques depuis dix ans. — Insegno matematica <b>da</b> dieci anni.",
    body:"La préposition « da » exprime une durée qui continue dans le présent, équivalente au « depuis » français : « lavoro qui da cinque anni » (je travaille ici depuis cinq ans). Le verbe reste au présent en italien, là où le français fait de même."
  }},
  { title:"Parler de ses loisirs", phrases:[
    {fr:"Qu'est-ce que vous aimez faire le week-end ?", it:"Cosa le piace fare nel fine settimana?"},
    {fr:"J'aime beaucoup lire et faire du sport.", it:"Mi piace molto leggere e fare sport."},
    {fr:"Quel genre de livres préférez-vous ?", it:"Che genere di libri preferisce?"},
    {fr:"Surtout des romans historiques.", it:"Soprattutto romanzi storici."},
    {fr:"Et vous pratiquez quel sport ?", it:"E lei quale sport praticat?"},
    {fr:"Je fais de la course à pied régulièrement.", it:"Faccio jogging regolarmente."},
    {fr:"Vous courez combien de fois par semaine ?", it:"Corre quante volte a settimana?"},
    {fr:"Trois fois, en général le matin.", it:"Tre volte, di solito la mattina."},
    {fr:"C'est très admirable comme discipline.", it:"È davvero ammirabile come disciplina."},
    {fr:"Merci, ça m'aide à me détendre.", it:"Grazie, mi aiuta a rilassarmi."}
  ], tip:{
    title:"« Piace » : exprimer ce qu'on aime",
    example:"Qu'est-ce que vous aimez faire le week-end ? — Cosa <b>le piace</b> fare nel fine settimana?",
    body:"Contrairement au français, l'italien construit « aimer quelque chose » à l'envers avec « piacere » : littéralement « quelque chose me plaît ». « Mi piace leggere » signifie « j'aime lire » (littéralement : lire me plaît). C'est une structure essentielle à retenir."
  }},
  { title:"Faire connaissance au café", phrases:[
    {fr:"Cette table est-elle libre ?", it:"Questo tavolo è libero?"},
    {fr:"Oui, bien sûr, asseyez-vous donc.", it:"Sì, certo, si sieda pure."},
    {fr:"Vous êtes en vacances ici ?", it:"È in vacanza qui?"},
    {fr:"Oui, pour une semaine seulement.", it:"Sì, solo per una settimana."},
    {fr:"Vous aimez cette ville jusqu'à présent ?", it:"Le piace questa città finora?"},
    {fr:"Énormément, les gens sont adorables.", it:"Moltissimo, le persone sono adorabili."},
    {fr:"C'est très gentil de votre part de dire ça.", it:"È molto gentile da parte sua dirlo."},
    {fr:"Vous avez des recommandations à me faire ?", it:"Ha delle raccomandazioni da farmi?"},
    {fr:"Oui, vous devriez absolument visiter le marché local.", it:"Sì, dovrebbe assolutamente visitare il mercato locale."},
    {fr:"Merci pour le conseil, j'irai demain.", it:"Grazie per il consiglio, ci andrò domani."}
  ]},
  { title:"Donner son opinion", phrases:[
    {fr:"Qu'est-ce que vous pensez de ce restaurant ?", it:"Cosa pensa di questo ristorante?"},
    {fr:"Je trouve la nourriture excellente.", it:"Trovo il cibo eccellente."},
    {fr:"Je suis tout à fait d'accord avec vous.", it:"Sono del tutto d'accordo con lei."},
    {fr:"Le service est un peu lent, en revanche.", it:"Il servizio è un po' lento, invece."},
    {fr:"C'est vrai, mais ça vaut l'attente.", it:"È vero, ma vale l'attesa."},
    {fr:"Je préfère nettement l'ambiance du soir.", it:"Preferisco decisamente l'atmosfera serale."},
    {fr:"Moi aussi, c'est plus romantique.", it:"Anche io, è più romantico."},
    {fr:"Reviendriez-vous ici une autre fois ?", it:"Tornerebbe qui un'altra volta?"},
    {fr:"Sans aucun doute, c'est certain.", it:"Senza alcun dubbio, è certo."},
    {fr:"Je partage complètement votre avis.", it:"Condivido completamente la sua opinione."}
  ]},
  { title:"Exprimer ses goûts", phrases:[
    {fr:"Vous aimez la musique classique ?", it:"Le piace la musica classica?"},
    {fr:"Oui, énormément, surtout l'opéra italien.", it:"Sì, moltissimo, soprattutto l'opera italiana."},
    {fr:"Vous avez un compositeur préféré ?", it:"Ha un compositore preferito?"},
    {fr:"J'adore particulièrement Verdi et Puccini.", it:"Adoro in particolare Verdi e Puccini."},
    {fr:"Vous êtes déjà allé à l'opéra ?", it:"È già stato all'opera?"},
    {fr:"Oui, plusieurs fois, c'est magnifique.", it:"Sì, diverse volte, è magnifico."},
    {fr:"Je n'y suis jamais allé, malheureusement.", it:"Non ci sono mai stato, purtroppo."},
    {fr:"Vous devriez vraiment essayer une fois.", it:"Dovrebbe davvero provare una volta."},
    {fr:"Vous avez raison, je vais y réfléchir.", it:"Ha ragione, ci penserò."},
    {fr:"Je suis certain que vous adoreriez ça.", it:"Sono certo che le piacerebbe moltissimo."}
  ]},
  { title:"Inviter quelqu'un", phrases:[
    {fr:"Vous êtes libre ce soir, par hasard ?", it:"È libero stasera, per caso?"},
    {fr:"Oui, pourquoi, qu'avez-vous en tête ?", it:"Sì, perché, cosa ha in mente?"},
    {fr:"Je voulais vous inviter à dîner.", it:"Volevo invitarla a cena."},
    {fr:"Avec grand plaisir, où exactement ?", it:"Con grande piacere, dove esattamente?"},
    {fr:"Je connais un endroit absolument charmant.", it:"Conosco un posto assolutamente incantevole."},
    {fr:"On se retrouve à quelle heure ?", it:"Ci vediamo a che ora?"},
    {fr:"Disons vers vingt heures, ça vous convient ?", it:"Diciamo verso le venti, le va bene?"},
    {fr:"Parfait, à ce soir donc.", it:"Perfetto, a stasera allora."},
    {fr:"J'ai vraiment hâte d'y être.", it:"Non vedo davvero l'ora."},
    {fr:"Moi aussi, à très bientôt.", it:"Anche io, a presto."}
  ]},
  { title:"Parler de ses projets", phrases:[
    {fr:"Qu'est-ce que vous allez faire après ce voyage ?", it:"Cosa farà dopo questo viaggio?"},
    {fr:"Je retourne travailler la semaine prochaine.", it:"Torno a lavorare la settimana prossima."},
    {fr:"Vous avez d'autres projets de vacances ?", it:"Ha altri progetti di vacanza?"},
    {fr:"Oui, j'aimerais visiter le Japon un jour.", it:"Sì, mi piacerebbe visitare il Giappone un giorno."},
    {fr:"C'est un pays fascinant, j'ai entendu dire.", it:"È un paese affascinante, ho sentito dire."},
    {fr:"Et vous, vous avez des projets particuliers ?", it:"E lei, ha dei progetti particolari?"},
    {fr:"Je pense déménager l'année prochaine.", it:"Penso di trasferirmi l'anno prossimo."},
    {fr:"Ah bon, vers quelle ville ?", it:"Ah sì, verso quale città?"},
    {fr:"Probablement vers Milan, pour le travail.", it:"Probabilmente verso Milano, per lavoro."},
    {fr:"Je vous souhaite beaucoup de réussite.", it:"Le auguro molto successo."}
  ]},
  { title:"Parler du temps qu'il fait", phrases:[
    {fr:"Quelle belle journée aujourd'hui, non ?", it:"Che bella giornata oggi, vero?"},
    {fr:"Absolument, le ciel est magnifique.", it:"Assolutamente, il cielo è magnifico."},
    {fr:"Il paraît que la pluie arrive ce week-end.", it:"Pare che la pioggia arrivi questo fine settimana."},
    {fr:"Tant mieux, on avait besoin d'un peu d'eau.", it:"Meglio così, avevamo bisogno di un po' d'acqua."},
    {fr:"Vous préférez l'été ou l'hiver ?", it:"Preferisce l'estate o l'inverno?"},
    {fr:"L'automne, en réalité, c'est ma saison préférée.", it:"L'autunno, in realtà, è la mia stagione preferita."},
    {fr:"Pourquoi donc, si je peux demander ?", it:"Perché, se posso chiedere?"},
    {fr:"J'adore les couleurs des feuilles.", it:"Adoro i colori delle foglie."},
    {fr:"C'est vrai que c'est très joli.", it:"È vero che è molto bello."},
    {fr:"Chaque saison a son charme, finalement.", it:"Ogni stagione ha il suo fascino, in fondo."}
  ]},
  { title:"Faire des compliments", phrases:[
    {fr:"Votre italien est vraiment excellent.", it:"Il suo italiano è davvero eccellente."},
    {fr:"Merci beaucoup, c'est gentil à dire.", it:"Grazie mille, è gentile dirlo."},
    {fr:"Vous l'avez appris où exactement ?", it:"Dove l'ha imparato esattamente?"},
    {fr:"Grâce à une application sur mon téléphone.", it:"Grazie a un'applicazione sul mio telefono."},
    {fr:"C'est impressionnant, ça se voit vraiment.", it:"È impressionante, si vede davvero."},
    {fr:"J'aime beaucoup votre robe, en passant.", it:"Mi piace molto il suo vestito, a proposito."},
    {fr:"Merci infiniment, c'est un cadeau.", it:"Grazie infinite, è un regalo."},
    {fr:"Elle vous va parfaitement bien.", it:"Le sta perfettamente bene."},
    {fr:"Vous êtes trop aimable, vraiment.", it:"È troppo gentile, davvero."},
    {fr:"Pas du tout, c'est la vérité.", it:"Niente affatto, è la verità."}
  ]},
  { title:"S'excuser", phrases:[
    {fr:"Je suis vraiment désolé pour le retard.", it:"Mi scuso davvero per il ritardo."},
    {fr:"Ne vous inquiétez pas, ce n'est pas grave.", it:"Non si preoccupi, non è grave."},
    {fr:"J'ai complètement oublié notre rendez-vous.", it:"Ho completamente dimenticato il nostro appuntamento."},
    {fr:"Ça peut arriver à n'importe qui.", it:"Può succedere a chiunque."},
    {fr:"Je vous dois vraiment des excuses.", it:"Le devo davvero delle scuse."},
    {fr:"C'est déjà oublié, n'y pensez plus.", it:"È già dimenticato, non ci pensi più."},
    {fr:"Vous êtes très compréhensif, merci.", it:"È molto comprensivo, grazie."},
    {fr:"On se reprogramme pour demain ?", it:"Ci riprogrammiamo per domani?"},
    {fr:"Avec plaisir, même heure si possible.", it:"Con piacere, stessa ora se possibile."},
    {fr:"Parfait, merci pour votre patience.", it:"Perfetto, grazie per la sua pazienza."}
  ]},
  { title:"Exprimer son accord et son désaccord", phrases:[
    {fr:"Je pense que ce film était excellent.", it:"Penso che questo film fosse eccellente."},
    {fr:"Je suis entièrement d'accord avec toi.", it:"Sono completamente d'accordo con te."},
    {fr:"Moi, en revanche, je ne suis pas convaincu.", it:"Io, invece, non sono convinto."},
    {fr:"Vraiment ? Qu'est-ce qui t'a déplu ?", it:"Davvero? Cosa non ti è piaciuto?"},
    {fr:"L'histoire était un peu trop lente.", it:"La storia era un po' troppo lenta."},
    {fr:"C'est un point de vue valable, je comprends.", it:"È un punto di vista valido, capisco."},
    {fr:"Chacun a ses propres goûts, après tout.", it:"Ognuno ha i propri gusti, dopo tutto."},
    {fr:"Exactement, c'est ce qui rend les discussions intéressantes.", it:"Esattamente, è questo che rende le discussioni interessanti."},
    {fr:"On pourrait en discuter davantage.", it:"Potremmo discuterne ulteriormente."},
    {fr:"Avec plaisir, j'aime bien ces débats.", it:"Con piacere, mi piacciono questi dibattiti."}
  ]},
  { title:"Parler de sa santé", phrases:[
    {fr:"Vous allez bien ? Vous semblez fatigué.", it:"Sta bene? Sembra stanco."},
    {fr:"Un peu, je n'ai pas beaucoup dormi.", it:"Un po', non ho dormito molto."},
    {fr:"Vous devriez vous reposer davantage.", it:"Dovrebbe riposarsi di più."},
    {fr:"Vous avez raison, je vais me coucher tôt.", it:"Ha ragione, andrò a letto presto."},
    {fr:"Prenez soin de vous, c'est important.", it:"Prenda cura di sé, è importante."},
    {fr:"Merci de vous inquiéter pour moi.", it:"Grazie di preoccuparsi per me."},
    {fr:"C'est tout naturel entre amis.", it:"È del tutto naturale tra amici."},
    {fr:"Je me sens déjà un peu mieux, merci.", it:"Mi sento già un po' meglio, grazie."},
    {fr:"Tant mieux, j'en suis ravi.", it:"Meglio così, ne sono felice."},
    {fr:"Vous êtes vraiment quelqu'un de gentil.", it:"È davvero una persona gentile."}
  ]},
  { title:"Échanger ses coordonnées", phrases:[
    {fr:"On pourrait rester en contact.", it:"Potremmo restare in contatto."},
    {fr:"Avec plaisir, vous avez un téléphone ?", it:"Con piacere, ha un telefono?"},
    {fr:"Oui, tenez, voici mon numéro.", it:"Sì, ecco, questo è il mio numero."},
    {fr:"Je vous envoie un message dès que j'arrive.", it:"Le mando un messaggio appena arrivo."},
    {fr:"Parfait, je serai ravi de vos nouvelles.", it:"Perfetto, sarò felice di avere sue notizie."},
    {fr:"Vous avez aussi les réseaux sociaux ?", it:"Ha anche i social media?"},
    {fr:"Oui, cherchez simplement mon nom complet.", it:"Sì, cerchi semplicemente il mio nome completo."},
    {fr:"Je vous ajoute tout de suite.", it:"La aggiungo subito."},
    {fr:"Super, à bientôt alors.", it:"Fantastico, a presto allora."},
    {fr:"Ce fut un réel plaisir de vous rencontrer.", it:"È stato un vero piacere conoscerla."}
  ]},
  { title:"Parler de ses études", phrases:[
    {fr:"Qu'est-ce que vous avez étudié ?", it:"Cosa ha studiato?"},
    {fr:"J'ai étudié l'histoire de l'art à l'université.", it:"Ho studiato storia dell'arte all'università."},
    {fr:"C'est un sujet vraiment passionnant.", it:"È un argomento davvero affascinante."},
    {fr:"Oui, surtout en vivant en Italie.", it:"Sì, soprattutto vivendo in Italia."},
    {fr:"Vous avez étudié combien d'années ?", it:"Ha studiato per quanti anni?"},
    {fr:"Cinq ans en tout, avec un master.", it:"Cinque anni in tutto, con un master."},
    {fr:"Ça a dû être un parcours exigeant.", it:"Deve essere stato un percorso impegnativo."},
    {fr:"Oui, mais ça en valait vraiment la peine.", it:"Sì, ma ne è valsa davvero la pena."},
    {fr:"Vous travaillez dans ce domaine maintenant ?", it:"Lavora in questo campo adesso?"},
    {fr:"Oui, dans un musée à Florence.", it:"Sì, in un museo a Firenze."}
  ]},
  { title:"Discuter de voyages passés", phrases:[
    {fr:"Vous avez déjà visité d'autres pays ?", it:"Ha già visitato altri paesi?"},
    {fr:"Oui, j'ai voyagé en Grèce l'année dernière.", it:"Sì, ho viaggiato in Grecia l'anno scorso."},
    {fr:"Comment avez-vous trouvé le pays ?", it:"Come ha trovato il paese?"},
    {fr:"Magnifique, surtout les îles.", it:"Magnifico, soprattutto le isole."},
    {fr:"Vous y retourneriez volontiers ?", it:"Ci tornerebbe volentieri?"},
    {fr:"Sans aucune hésitation, oui.", it:"Senza alcuna esitazione, sì."},
    {fr:"Et quel est votre meilleur souvenir de voyage ?", it:"E qual è il suo miglior ricordo di viaggio?"},
    {fr:"Probablement un coucher de soleil sur la mer.", it:"Probabilmente un tramonto sul mare."},
    {fr:"Ça devait être vraiment romantique.", it:"Doveva essere davvero romantico."},
    {fr:"Oui, un moment que je n'oublierai jamais.", it:"Sì, un momento che non dimenticherò mai."}
  ]},
  { title:"Dire au revoir", phrases:[
    {fr:"Il est déjà temps que je parte.", it:"È già ora che io vada."},
    {fr:"C'était un plaisir de discuter avec vous.", it:"È stato un piacere parlare con lei."},
    {fr:"Pour moi aussi, vraiment.", it:"Anche per me, davvero."},
    {fr:"J'espère qu'on se recroisera un jour.", it:"Spero che ci rincontreremo un giorno."},
    {fr:"Je l'espère aussi, sincèrement.", it:"Lo spero anch'io, sinceramente."},
    {fr:"Passez un excellent reste de séjour.", it:"Le auguro un ottimo proseguimento del soggiorno."},
    {fr:"Merci, vous aussi, bon retour chez vous.", it:"Grazie, anche a lei, buon ritorno a casa."},
    {fr:"Prenez soin de vous, à bientôt peut-être.", it:"Si prenda cura di sé, a presto forse."},
    {fr:"Au revoir et merci pour tout.", it:"Arrivederci e grazie per tutto."},
    {fr:"Au revoir, ce fut un vrai plaisir.", it:"Arrivederci, è stato un vero piacere."}
  ]},
  { title:"Parler de la nourriture préférée", phrases:[
    {fr:"Quel est votre plat italien préféré ?", it:"Qual è il suo piatto italiano preferito?"},
    {fr:"Difficile de choisir, j'adore les lasagnes.", it:"Difficile da scegliere, adoro le lasagne."},
    {fr:"Vous cuisinez souvent des plats italiens ?", it:"Cucina spesso piatti italiani?"},
    {fr:"Oui, surtout le week-end, en famille.", it:"Sì, soprattutto nel fine settimana, in famiglia."},
    {fr:"Quelle est votre recette la plus réussie ?", it:"Qual è la sua ricetta più riuscita?"},
    {fr:"Sans doute mon risotto aux champignons.", it:"Probabilmente il mio risotto ai funghi."},
    {fr:"Vous me donnerez la recette un jour ?", it:"Mi darà la ricetta un giorno?"},
    {fr:"Avec plaisir, c'est assez simple en réalité.", it:"Con piacere, è piuttosto semplice in realtà."},
    {fr:"J'ai vraiment hâte d'essayer de la préparer.", it:"Non vedo davvero l'ora di provare a prepararlo."},
    {fr:"Vous verrez, c'est un vrai succès à chaque fois.", it:"Vedrà, è un vero successo ogni volta."}
  ], tip:{
    title:"« Darà » : le futur de « dare »",
    example:"Vous me donnerez la recette un jour ? — Mi <b>darà</b> la ricetta un giorno?",
    body:"Le futur simple italien se forme en général sur le radical de l'infinitif suivi de terminaisons comme -rà à la troisième personne. « Dare » (donner) devient irrégulièrement « darà » (il/elle donnera), tout comme « andare » devient « andrà » (il ira)."
  }},
  { title:"Fin du module : un dernier bilan", phrases:[
    {fr:"Vous avez rencontré des gens formidables.", it:"Ha incontrato persone fantastiche."},
    {fr:"Les conversations deviennent de plus en plus naturelles.", it:"Le conversazioni diventano sempre più naturali."},
    {fr:"Je me sens vraiment plus à l'aise maintenant.", it:"Mi sento davvero più a mio agio adesso."},
    {fr:"C'est le fruit d'une pratique régulière.", it:"È il frutto di una pratica regolare."},
    {fr:"Vous avez terminé le Niveau 1 en entier !", it:"Hai terminato interamente il Livello 1!"},
    {fr:"Six cents phrases et quinze points de grammaire.", it:"Seicento frasi e quindici punti di grammatica."},
    {fr:"Le Niveau 2 vous attend avec de nouveaux défis.", it:"Il Livello 2 ti aspetta con nuove sfide."},
    {fr:"J'ai vraiment hâte de continuer l'aventure.", it:"Non vedo davvero l'ora di continuare l'avventura."},
    {fr:"Félicitations pour cette belle réussite.", it:"Congratulazioni per questo bel successo."},
    {fr:"Continuez ainsi, vous progressez à merveille.", it:"Continua così, stai facendo progressi meravigliosi."}
  ]}
];

/* ============================================================
   NIVEAU 2
   ============================================================ */

const level2Module1Lessons = [
  { title:"Retour en Italie", phrases:[
    {fr:"Je suis déjà retourné trois fois en Italie.", it:"Sono già tornato tre volte in Italia."},
    {fr:"Cette fois-ci, je vais explorer le sud.", it:"Questa volta, esplorerò il sud."},
    {fr:"J'ai hâte de découvrir Naples et ses alentours.", it:"Non vedo l'ora di scoprire Napoli e i suoi dintorni."},
    {fr:"On m'a dit que la pizza y est incomparable.", it:"Mi hanno detto che la pizza lì è incomparabile."},
    {fr:"J'ai déjà réservé notre logement pour deux semaines.", it:"Ho già prenotato il nostro alloggio per due settimane."},
    {fr:"As-tu préparé l'itinéraire du voyage ?", it:"Hai preparato l'itinerario del viaggio?"},
    {fr:"Pas encore complètement, mais presque.", it:"Non ancora del tutto, ma quasi."},
    {fr:"On verra bien une fois sur place, finalement.", it:"Vedremo comunque una volta sul posto, in fondo."},
    {fr:"L'improvisation a aussi son charme, après tout.", it:"Anche l'improvvisazione ha il suo fascino, dopotutto."},
    {fr:"J'aime cette façon de voyager, sincèrement.", it:"Mi piace questo modo di viaggiare, sinceramente."}
  ]},
  { title:"Une pizzeria napolitaine", phrases:[
    {fr:"On m'avait pourtant prévenu que la file serait longue.", it:"Mi avevano però avvertito che la fila sarebbe stata lunga."},
    {fr:"Heureusement, nous avions réservé à l'avance.", it:"Per fortuna, avevamo prenotato in anticipo."},
    {fr:"Cette pizzeria existe depuis plus de cent ans.", it:"Questa pizzeria esiste da più di cento anni."},
    {fr:"La pâte est cuite dans un four à bois traditionnel.", it:"L'impasto viene cotto in un forno a legna tradizionale."},
    {fr:"Je n'avais jamais goûté une pâte aussi légère.", it:"Non avevo mai assaggiato un impasto così leggero."},
    {fr:"Le patron nous a expliqué toute la recette.", it:"Il titolare ci ha spiegato tutta la ricetta."},
    {fr:"Il paraît que la farine fait toute la différence.", it:"Pare che la farina faccia tutta la differenza."},
    {fr:"Nous reviendrons sans aucun doute avant notre départ.", it:"Torneremo senza alcun dubbio prima della nostra partenza."},
    {fr:"Cette expérience valait vraiment le déplacement.", it:"Questa esperienza valeva davvero il viaggio."},
    {fr:"Je recommanderai cet endroit à tout le monde.", it:"Raccomanderò questo posto a tutti."}
  ], tip:{
    title:"Le plus-que-parfait avec « avere »",
    example:"On m'avait pourtant prévenu que la file serait longue. — Mi <b>avevano</b> però avvertito che la fila sarebbe stata lunga.",
    body:"Le trapassato prossimo (plus-que-parfait) se forme avec l'imparfait de « avere » suivi du participe passé, exactement comme en français avec l'imparfait d'« avoir ». Il décrit une action antérieure à une autre action passée : « avevano avvertito » = « ils avaient prévenu »."
  }},
  { title:"Visiter Pompéi", phrases:[
    {fr:"Pompéi fut détruite par une éruption volcanique.", it:"Pompei fu distrutta da un'eruzione vulcanica."},
    {fr:"Les ruines sont étonnamment bien préservées.", it:"Le rovine sono sorprendentemente ben conservate."},
    {fr:"On dirait que le temps s'est arrêté ici.", it:"Si direbbe che il tempo si sia fermato qui."},
    {fr:"Les habitants n'ont pas eu le temps de s'échapper.", it:"Gli abitanti non hanno avuto il tempo di scappare."},
    {fr:"C'est à la fois fascinant et bouleversant.", it:"È al tempo stesso affascinante e sconvolgente."},
    {fr:"Le guide nous a raconté des histoires terrifiantes.", it:"La guida ci ha raccontato storie terrificanti."},
    {fr:"Le Vésuve est toujours visible à l'horizon.", it:"Il Vesuvio è sempre visibile all'orizzonte."},
    {fr:"Est-il toujours considéré comme actif ?", it:"È ancora considerato attivo?"},
    {fr:"Oui, bien qu'aucune éruption ne soit prévue.", it:"Sì, anche se non è prevista nessuna eruzione."},
    {fr:"Cette visite restera gravée dans ma mémoire.", it:"Questa visita resterà impressa nella mia memoria."}
  ]},
  { title:"La côte amalfitaine", phrases:[
    {fr:"La route qui longe la côte est absolument spectaculaire.", it:"La strada che costeggia la costa è assolutamente spettacolare."},
    {fr:"Je conduirais plus lentement si j'étais toi.", it:"Guiderei più lentamente se fossi in te."},
    {fr:"Les virages sont vraiment très serrés par endroits.", it:"Le curve sono davvero molto strette in alcuni punti."},
    {fr:"Chaque village semble suspendu au-dessus de la mer.", it:"Ogni paese sembra sospeso sopra il mare."},
    {fr:"Positano est sans doute le plus photographié.", it:"Positano è senza dubbio il più fotografato."},
    {fr:"On devrait s'arrêter pour prendre quelques photos.", it:"Dovremmo fermarci per scattare qualche foto."},
    {fr:"Les citronniers parfument l'air tout autour.", it:"I limoneti profumano l'aria tutt'intorno."},
    {fr:"On raconte que le limoncello est né ici.", it:"Si racconta che il limoncello sia nato qui."},
    {fr:"J'en achèterais bien une bouteille en souvenir.", it:"Ne comprerei volentieri una bottiglia come ricordo."},
    {fr:"Ce paysage dépasse vraiment toutes les attentes.", it:"Questo paesaggio supera davvero tutte le aspettative."}
  ], tip:{
    title:"Le conditionnel pour le conseil",
    example:"Je conduirais plus lentement si j'étais toi. — <b>Guiderei</b> più lentamente se fossi in te.",
    body:"Le conditionnel présent italien (« -rei », « -eresti », etc.) s'emploie pour donner un conseil poli ou exprimer une hypothèse, tout comme en français. « Guiderei » (je conduirais), « dovresti » (tu devrais) sont des formes très utiles au quotidien."
  }},
  { title:"Un dîner en famille italienne", phrases:[
    {fr:"Nos amis italiens nous ont invités à dîner chez eux.", it:"I nostri amici italiani ci hanno invitato a cena da loro."},
    {fr:"La table était déjà dressée pour dix personnes.", it:"Il tavolo era già apparecchiato per dieci persone."},
    {fr:"Le repas a duré plus de trois heures.", it:"Il pasto è durato più di tre ore."},
    {fr:"Chaque plat était meilleur que le précédent.", it:"Ogni piatto era migliore del precedente."},
    {fr:"La grand-mère avait cuisiné tout l'après-midi.", it:"La nonna aveva cucinato tutto il pomeriggio."},
    {fr:"Tout le monde parlait en même temps et riait fort.", it:"Tutti parlavano allo stesso tempo e ridevano forte."},
    {fr:"J'ai rarement vu une famille aussi chaleureuse.", it:"Ho raramente visto una famiglia così calorosa."},
    {fr:"Ils nous ont même offert de rester dormir chez eux.", it:"Ci hanno persino offerto di restare a dormire da loro."},
    {fr:"Ce genre d'hospitalité est vraiment touchant.", it:"Questo tipo di ospitalità è davvero commovente."},
    {fr:"Nous garderons ce souvenir toute notre vie.", it:"Conserveremo questo ricordo per tutta la vita."}
  ]},
  { title:"Un marché napolitain animé", phrases:[
    {fr:"Le marché grouille déjà de monde dès l'aube.", it:"Il mercato pullula già di gente dall'alba."},
    {fr:"Les vendeurs crient leurs prix d'une voix forte.", it:"I venditori gridano i loro prezzi a voce alta."},
    {fr:"Cette agitation permanente me plaît énormément.", it:"Questa agitazione permanente mi piace moltissimo."},
    {fr:"Chaque étal semble se disputer notre attention.", it:"Ogni bancarella sembra contendersi la nostra attenzione."},
    {fr:"Je n'avais jamais vu autant de variétés d'olives.", it:"Non avevo mai visto così tante varietà di olive."},
    {fr:"Le marchand nous a laissé goûter avant d'acheter.", it:"Il venditore ci ha lasciato assaggiare prima di comprare."},
    {fr:"Négocier le prix fait partie du jeu, ici.", it:"Contrattare il prezzo fa parte del gioco, qui."},
    {fr:"Je trouve ça plutôt amusant, en réalité.", it:"Trovo questo piuttosto divertente, in realtà."},
    {fr:"On a fini par acheter bien plus que prévu.", it:"Abbiamo finito per comprare molto più del previsto."},
    {fr:"Ce marché résume parfaitement l'énergie de Naples.", it:"Questo mercato riassume perfettamente l'energia di Napoli."}
  ]},
  { title:"Discuter de l'histoire italienne", phrases:[
    {fr:"L'Italie n'est devenue un pays unifié qu'en 1861.", it:"L'Italia è diventata un paese unificato solo nel 1861."},
    {fr:"Avant cela, elle était divisée en plusieurs royaumes.", it:"Prima di allora, era divisa in diversi regni."},
    {fr:"C'est fascinant de voir comment les régions diffèrent encore.", it:"È affascinante vedere come le regioni differiscano ancora."},
    {fr:"Chaque région garde sa propre identité culinaire.", it:"Ogni regione mantiene la propria identità culinaria."},
    {fr:"Même la langue change beaucoup d'une région à l'autre.", it:"Anche la lingua cambia molto da una regione all'altra."},
    {fr:"J'ignorais totalement qu'il existait tant de dialectes.", it:"Non sapevo affatto che esistessero tanti dialetti."},
    {fr:"Certains sont presque incompréhensibles entre eux.", it:"Alcuni sono quasi incomprensibili tra loro."},
    {fr:"Cette diversité rend le pays encore plus riche.", it:"Questa diversità rende il paese ancora più ricco."},
    {fr:"J'aimerais approfondir mes connaissances sur ce sujet.", it:"Mi piacerebbe approfondire le mie conoscenze su questo tema."},
    {fr:"Il y a tellement de choses encore à apprendre.", it:"Ci sono ancora tantissime cose da imparare."}
  ], tip:{
    title:"Le subjonctif après « che » : une introduction",
    example:"C'est fascinant de voir comment les régions diffèrent encore. — È affascinante vedere come le regioni <b>differiscano</b> ancora.",
    body:"L'italien emploie fréquemment le subjonctif (congiuntivo) après des verbes d'opinion, de doute ou d'émotion, là où le français ne le fait pas toujours. On y reviendra en détail, mais il est utile de commencer à le repérer dans des phrases comme celle-ci."
  }},
  { title:"Les vendanges en Toscane", phrases:[
    {fr:"Nous avons eu la chance de participer aux vendanges.", it:"Abbiamo avuto la fortuna di partecipare alla vendemmia."},
    {fr:"Le travail commence très tôt, avant la chaleur.", it:"Il lavoro inizia molto presto, prima del caldo."},
    {fr:"Je n'avais jamais cueilli de raisin auparavant.", it:"Non avevo mai raccolto l'uva prima d'ora."},
    {fr:"Les vignerons nous ont tout expliqué patiemment.", it:"I vignaioli ci hanno spiegato tutto con pazienza."},
    {fr:"Cette région produit un vin particulièrement réputé.", it:"Questa regione produce un vino particolarmente rinomato."},
    {fr:"On nous a offert une dégustation en fin de journée.", it:"Ci hanno offerto una degustazione a fine giornata."},
    {fr:"Chaque verre racontait une histoire différente.", it:"Ogni bicchiere raccontava una storia diversa."},
    {fr:"J'ai rarement vu un paysage aussi apaisant.", it:"Ho raramente visto un paesaggio così rilassante."},
    {fr:"Cette expérience nous a vraiment changés, je crois.", it:"Questa esperienza ci ha davvero cambiati, credo."},
    {fr:"On reviendra sûrement l'année prochaine, à la même période.", it:"Torneremo sicuramente l'anno prossimo, nello stesso periodo."}
  ]},
  { title:"La mode italienne", phrases:[
    {fr:"Milan est considérée comme une capitale de la mode.", it:"Milano è considerata una capitale della moda."},
    {fr:"Les vitrines rivalisent toutes d'élégance.", it:"Le vetrine rivaleggiano tutte in eleganza."},
    {fr:"Je n'avais jamais vu autant de créateurs rassemblés.", it:"Non avevo mai visto così tanti designer riuniti."},
    {fr:"Chaque quartier possède son propre style.", it:"Ogni quartiere possiede il proprio stile."},
    {fr:"Les Italiens semblent naturellement élégants, même simplement habillés.", it:"Gli italiani sembrano naturalmente eleganti, anche vestiti semplicemente."},
    {fr:"On dit que c'est une question d'habitude culturelle.", it:"Si dice che sia una questione di abitudine culturale."},
    {fr:"Les matières utilisées paraissent toujours d'excellente qualité.", it:"I materiali utilizzati sembrano sempre di ottima qualità."},
    {fr:"Le cuir italien jouit d'une réputation mondiale.", it:"La pelle italiana gode di una fama mondiale."},
    {fr:"J'aimerais rapporter un sac fabriqué ici.", it:"Mi piacerebbe portare a casa una borsa fatta qui."},
    {fr:"Ce serait un très beau souvenir de ce voyage.", it:"Sarebbe un bellissimo ricordo di questo viaggio."}
  ]},
  { title:"Les festivals populaires", phrases:[
    {fr:"Nous sommes tombés par hasard sur un festival local.", it:"Siamo capitati per caso in un festival locale."},
    {fr:"La rue entière était décorée de lumières colorées.", it:"L'intera strada era decorata con luci colorate."},
    {fr:"Des musiciens jouaient à chaque coin de rue.", it:"Dei musicisti suonavano a ogni angolo di strada."},
    {fr:"Les habitants dansaient comme s'ils célébraient depuis des heures.", it:"Gli abitanti danzavano come se festeggiassero da ore."},
    {fr:"On nous a immédiatement invités à nous joindre à eux.", it:"Ci hanno immediatamente invitato a unirci a loro."},
    {fr:"Cette spontanéité m'a sincèrement surpris.", it:"Questa spontaneità mi ha sinceramente sorpreso."},
    {fr:"Les enfants couraient partout en riant aux éclats.", it:"I bambini correvano dappertutto ridendo a crepapelle."},
    {fr:"L'ambiance était à la fois joyeuse et bruyante.", it:"L'atmosfera era allo stesso tempo gioiosa e rumorosa."},
    {fr:"Je n'oublierai jamais cette soirée improvisée.", it:"Non dimenticherò mai questa serata improvvisata."},
    {fr:"Les meilleurs souvenirs arrivent souvent sans prévenir.", it:"I migliori ricordi arrivano spesso senza avvisare."}
  ]},
  { title:"Apprendre quelques expressions locales", phrases:[
    {fr:"Les Napolitains ont des expressions bien à eux.", it:"I napoletani hanno espressioni tutte loro."},
    {fr:"« Magari » peut vouloir dire plusieurs choses différentes.", it:"« Magari » può voler dire diverse cose."},
    {fr:"Ça dépend entièrement du contexte et du ton employé.", it:"Dipende interamente dal contesto e dal tono usato."},
    {fr:"J'essaie d'en retenir une nouvelle chaque jour.", it:"Cerco di memorizzarne una nuova ogni giorno."},
    {fr:"Les gens apprécient toujours cet effort, me semble-t-il.", it:"Alle persone piace sempre questo sforzo, mi sembra."},
    {fr:"Ça crée immédiatement une relation plus chaleureuse.", it:"Crea immediatamente un rapporto più caloroso."},
    {fr:"Je me sens de moins en moins étranger ici.", it:"Mi sento sempre meno straniero qui."},
    {fr:"C'est agréable de progresser aussi rapidement.", it:"È piacevole progredire così rapidamente."},
    {fr:"La pratique quotidienne finit toujours par payer.", it:"La pratica quotidiana finisce sempre per ripagare."},
    {fr:"J'ai vraiment hâte d'en apprendre davantage encore.", it:"Non vedo davvero l'ora di imparare ancora di più."}
  ]},
  { title:"Un petit incident de voiture", phrases:[
    {fr:"Quelqu'un a légèrement rayé notre voiture de location.", it:"Qualcuno ha leggermente graffiato la nostra macchina a noleggio."},
    {fr:"Je n'ai absolument rien vu ni entendu.", it:"Non ho visto né sentito assolutamente niente."},
    {fr:"Il faut sans doute prévenir l'agence de location.", it:"Bisogna probabilmente avvisare l'agenzia di noleggio."},
    {fr:"Heureusement, l'assurance devrait couvrir ce genre de dégât.", it:"Per fortuna, l'assicurazione dovrebbe coprire questo tipo di danno."},
    {fr:"J'espère que ça ne va pas trop compliquer les choses.", it:"Spero che non complichi troppo le cose."},
    {fr:"Garde simplement quelques photos comme preuve.", it:"Tieni semplicemente qualche foto come prova."},
    {fr:"Bonne idée, j'y avais déjà pensé d'ailleurs.", it:"Buona idea, ci avevo già pensato peraltro."},
    {fr:"Ce genre de contretemps arrive malheureusement souvent en voyage.", it:"Questo tipo di contrattempo succede purtroppo spesso in viaggio."},
    {fr:"L'important, c'est de rester calme et de bien gérer.", it:"L'importante è restare calmi e gestire bene."},
    {fr:"On s'en sortira, comme toujours, j'en suis sûr.", it:"Ce la caveremo, come sempre, ne sono sicuro."}
  ]},
  { title:"Discuter avec un chauffeur de taxi", phrases:[
    {fr:"Le chauffeur conduisait à une vitesse assez impressionnante.", it:"Il taxista guidava a una velocità piuttosto impressionante."},
    {fr:"Il connaissait manifestement chaque rue par cœur.", it:"Conosceva evidentemente ogni strada a memoria."},
    {fr:"Il nous a raconté toute l'histoire de son quartier.", it:"Ci ha raccontato tutta la storia del suo quartiere."},
    {fr:"Sa famille vit ici depuis quatre générations.", it:"La sua famiglia vive qui da quattro generazioni."},
    {fr:"Il semblait extrêmement fier de sa ville natale.", it:"Sembrava estremamente orgoglioso della sua città natale."},
    {fr:"Cette fierté locale m'a vraiment beaucoup touché.", it:"Questo orgoglio locale mi ha davvero molto colpito."},
    {fr:"Il nous a même recommandé un restaurant méconnu des touristes.", it:"Ci ha persino raccomandato un ristorante poco conosciuto dai turisti."},
    {fr:"Nous l'avons évidemment suivi sans la moindre hésitation.", it:"Lo abbiamo ovviamente seguito senza la minima esitazione."},
    {fr:"Ce genre de rencontre rend un voyage inoubliable.", it:"Questo tipo di incontro rende un viaggio indimenticabile."},
    {fr:"On garde toujours un souvenir précieux de ces moments.", it:"Si conserva sempre un ricordo preziosa di questi momenti."}
  ]},
  { title:"Une journée pluvieuse", phrases:[
    {fr:"Il pleut depuis ce matin sans la moindre interruption.", it:"Piove da questa mattina senza la minima interruzione."},
    {fr:"Nos plans pour aujourd'hui tombent complètement à l'eau.", it:"I nostri piani per oggi vanno completamente a monte."},
    {fr:"On pourrait plutôt visiter un musée couvert.", it:"Potremmo piuttosto visitare un museo al chiuso."},
    {fr:"Excellente idée, j'avais justement repéré celui-ci.", it:"Ottima idea, avevo proprio individuato questo."},
    {fr:"Il paraît que l'exposition actuelle est remarquable.", it:"Pare che la mostra attuale sia notevole."},
    {fr:"On pourra toujours ressortir si le temps s'améliore.", it:"Potremo sempre uscire di nuovo se il tempo migliora."},
    {fr:"La pluie a finalement cessé en fin d'après-midi.", it:"La pioggia è finalmente cessata nel tardo pomeriggio."},
    {fr:"On a profité des dernières heures de lumière.", it:"Abbiamo sfruttato le ultime ore di luce."},
    {fr:"Au final, cette journée pluvieuse n'était pas gâchée.", it:"Alla fine, questa giornata piovosa non era rovinata."},
    {fr:"Il faut toujours savoir s'adapter, en voyage.", it:"Bisogna sempre saper adattarsi, in viaggio."}
  ]},
  { title:"Partager un repas avec des inconnus", phrases:[
    {fr:"L'hôtesse nous a installés à une table commune.", it:"La padrona di casa ci ha sistemati a un tavolo comune."},
    {fr:"Je trouvais cela un peu intimidant au début.", it:"Trovavo questo un po' intimidante all'inizio."},
    {fr:"Nos voisins de table se sont montrés immédiatement chaleureux.", it:"I nostri vicini di tavolo si sono mostrati immediatamente calorosi."},
    {fr:"On a fini la soirée en discutant de tout et de rien.", it:"Abbiamo finito la serata parlando del più e del meno."},
    {fr:"Ils venaient d'un pays totalement différent du nôtre.", it:"Venivano da un paese totalmente diverso dal nostro."},
    {fr:"Pourtant, on partageait énormément de points communs.", it:"Eppure, condividevamo moltissimi punti in comune."},
    {fr:"Voyager rapproche vraiment les gens, je trouve.", it:"Viaggiare avvicina davvero le persone, trovo."},
    {fr:"On a même échangé nos adresses avant de se quitter.", it:"Abbiamo persino scambiato i nostri indirizzi prima di separarci."},
    {fr:"Qui sait, on se recroisera peut-être un jour.", it:"Chissà, forse ci rincontreremo un giorno."},
    {fr:"Ce genre de rencontre rend chaque voyage unique.", it:"Questo tipo di incontro rende ogni viaggio unico."}
  ]},
  { title:"Visiter un atelier d'artisan", phrases:[
    {fr:"Cet artisan fabrique des céramiques depuis quarante ans.", it:"Questo artigiano fabbrica ceramiche da quarant'anni."},
    {fr:"Chaque pièce est entièrement peinte à la main.", it:"Ogni pezzo è interamente dipinto a mano."},
    {fr:"Le savoir-faire se transmet de génération en génération.", it:"Il mestiere si trasmette di generazione in generazione."},
    {fr:"J'étais fascinée par la précision de ses gestes.", it:"Ero affascinata dalla precisione dei suoi gesti."},
    {fr:"Il nous a laissé essayer, bien que maladroitement.", it:"Ci ha lasciato provare, anche se maldestramente."},
    {fr:"Ce n'est vraiment pas aussi simple qu'il le fait paraître.", it:"Non è davvero così semplice come lo fa sembrare."},
    {fr:"On a fini par acheter deux assiettes magnifiques.", it:"Abbiamo finito per comprare due piatti magnifici."},
    {fr:"Elles rappelleront ce voyage pendant de longues années.", it:"Ci ricorderanno questo viaggio per molti anni."},
    {fr:"Soutenir ces artisans locaux me tient particulièrement à cœur.", it:"Sostenere questi artigiani locali mi sta particolarmente a cuore."},
    {fr:"Ces métiers risquent malheureusement de disparaître un jour.", it:"Questi mestieri rischiano purtroppo di scomparire un giorno."}
  ]},
  { title:"Réfléchir à un déménagement en Italie", phrases:[
    {fr:"On en vient presque à envisager de vivre ici.", it:"Arriviamo quasi a considerare di vivere qui."},
    {fr:"Le rythme de vie semble bien plus détendu.", it:"Il ritmo di vita sembra molto più rilassato."},
    {fr:"Je me demande si on s'habituerait vraiment facilement.", it:"Mi chiedo se ci abitueremmo davvero facilmente."},
    {fr:"Il faudrait apprendre la langue beaucoup plus sérieusement.", it:"Bisognerebbe imparare la lingua molto più seriamente."},
    {fr:"Le coût de la vie varie énormément selon les régions.", it:"Il costo della vita varia enormemente secondo le regioni."},
    {fr:"Certaines petites villes restent très abordables.", it:"Alcune piccole città restano molto economiche."},
    {fr:"Ce serait sans doute un grand changement de vie.", it:"Sarebbe senza dubbio un grande cambiamento di vita."},
    {fr:"Mais parfois, il faut simplement oser sauter le pas.", it:"Ma a volte, bisogna semplicemente osare fare il salto."},
    {fr:"On continuera d'y réfléchir sérieusement, je pense.", it:"Continueremo a pensarci seriamente, credo."},
    {fr:"Qui sait ce que l'avenir nous réserve vraiment.", it:"Chissà cosa ci riserva davvero il futuro."}
  ]},
  { title:"Comparer deux villes italiennes", phrases:[
    {fr:"Naples est bien plus bruyante que Florence.", it:"Napoli è molto più rumorosa di Firenze."},
    {fr:"Florence paraît presque paisible en comparaison.", it:"Firenze sembra quasi tranquilla in confronto."},
    {fr:"Chaque ville possède pourtant son propre charme.", it:"Ogni città possiede comunque il proprio fascino."},
    {fr:"Je ne pourrais vraiment pas choisir entre les deux.", it:"Non potrei davvero scegliere tra le due."},
    {fr:"Florence est sans doute plus adaptée à l'art et à la culture.", it:"Firenze è senza dubbio più adatta all'arte e alla cultura."},
    {fr:"Naples respire une énergie plus brute et authentique.", it:"Napoli respira un'energia più grezza e autentica."},
    {fr:"Les deux valent largement une longue visite.", it:"Entrambe valgono ampiamente una lunga visita."},
    {fr:"Il faudrait vraiment plusieurs semaines pour tout voir.", it:"Ci vorrebbero davvero diverse settimane per vedere tutto."},
    {fr:"On reviendra certainement explorer davantage la Toscane.", it:"Torneremo certamente a esplorare di più la Toscana."},
    {fr:"L'Italie semble décidément inépuisable.", it:"L'Italia sembra decisamente inesauribile."}
  ], tip:{
    title:"Le comparatif avec « più... di »",
    example:"Naples est bien plus bruyante que Florence. — Napoli è molto <b>più</b> rumorosa <b>di</b> Firenze.",
    body:"Pour comparer deux éléments, l'italien utilise « più... di » (plus... que), structure très proche du français. On trouve aussi « meno... di » pour « moins... que » : « Firenze è meno rumorosa di Napoli » (Florence est moins bruyante que Naples)."
  }},
  { title:"Organiser la suite du voyage", phrases:[
    {fr:"Il faudrait décider où aller la semaine prochaine.", it:"Bisognerebbe decidere dove andare la settimana prossima."},
    {fr:"J'aimerais bien remonter vers le nord, cette fois.", it:"Mi piacerebbe risalire verso nord, questa volta."},
    {fr:"Les lacs du nord ont l'air absolument magnifiques.", it:"I laghi del nord sembrano assolutamente magnifici."},
    {fr:"On pourrait louer une maison près du lac de Côme.", it:"Potremmo affittare una casa vicino al lago di Como."},
    {fr:"Ça semble être un endroit très paisible pour se reposer.", it:"Sembra essere un posto molto tranquillo per riposarsi."},
    {fr:"On aurait vraiment besoin de quelques jours de calme.", it:"Avremmo davvero bisogno di qualche giorno di calma."},
    {fr:"Ce voyage commence à devenir assez fatigant, c'est vrai.", it:"Questo viaggio comincia a diventare piuttosto faticoso, è vero."},
    {fr:"Un peu de repos nous ferait le plus grand bien.", it:"Un po' di riposo ci farebbe davvero bene."},
    {fr:"Je vais réserver quelque chose dès ce soir.", it:"Prenoterò qualcosa già stasera."},
    {fr:"Parfait, j'ai vraiment hâte de voir ces lacs.", it:"Perfetto, non vedo davvero l'ora di vedere questi laghi."}
  ], tip:{
    title:"« Bisognerebbe » : il faudrait",
    example:"Il faudrait décider où aller la semaine prochaine. — <b>Bisognerebbe</b> decidere dove andare la settimana prossima.",
    body:"« Bisognerebbe » est le conditionnel de « bisognare » (falloir) et sert à exprimer une nécessité de façon plus douce et polie que « bisogna » (il faut). C'est l'équivalent exact du « il faudrait » français."
  }},
  { title:"Fin du module : bilan de ce séjour", phrases:[
    {fr:"Ce deuxième voyage en Italie fut encore plus riche que le premier.", it:"Questo secondo viaggio in Italia è stato ancora più ricco del primo."},
    {fr:"J'ai découvert des aspects que j'ignorais totalement.", it:"Ho scoperto aspetti che ignoravo totalmente."},
    {fr:"Mon italien s'est nettement amélioré pendant ce séjour.", it:"Il mio italiano è decisamente migliorato durante questo soggiorno."},
    {fr:"Je comprends désormais beaucoup mieux les conversations rapides.", it:"Ora capisco molto meglio le conversazioni veloci."},
    {fr:"Chaque rencontre m'a appris quelque chose de nouveau.", it:"Ogni incontro mi ha insegnato qualcosa di nuovo."},
    {fr:"Tu as terminé le module « Le quotidien » du Niveau 2 !", it:"Hai terminato il modulo « La vita quotidiana » del Livello 2!"},
    {fr:"Le prochain module nous emmènera encore plus loin.", it:"Il prossimo modulo ci porterà ancora più lontano."},
    {fr:"J'ai vraiment hâte de continuer cette aventure linguistique.", it:"Non vedo davvero l'ora di continuare questa avventura linguistica."},
    {fr:"Chaque leçon me rapproche un peu plus de la fluidité.", it:"Ogni lezione mi avvicina un po' di più alla fluidità."},
    {fr:"Continue ainsi, les progrès sont vraiment impressionnants.", it:"Continua così, i progressi sono davvero impressionanti."}
  ]}
];

const level2Module2Lessons = [
  { title:"Une grève des trains", phrases:[
    {fr:"On vient d'annoncer une grève des trains pour demain.", it:"Hanno appena annunciato uno sciopero dei treni per domani."},
    {fr:"Il va falloir trouver une solution alternative rapidement.", it:"Bisognerà trovare rapidamente una soluzione alternativa."},
    {fr:"On pourrait peut-être louer une voiture à la place.", it:"Potremmo forse noleggiare una macchina invece."},
    {fr:"Je vais vérifier s'il reste encore des disponibilités.", it:"Controllerò se ci sono ancora disponibilità."},
    {fr:"Apparemment, tout est déjà complet dans le coin.", it:"A quanto pare, è già tutto al completo qui intorno."},
    {fr:"Essayons plutôt de prendre un bus longue distance.", it:"Proviamo piuttosto a prendere un autobus a lunga distanza."},
    {fr:"Ce genre d'imprévu fait aussi partie du voyage.", it:"Questo tipo di imprevisto fa anche parte del viaggio."},
    {fr:"Avec un peu de patience, on trouvera forcément une solution.", it:"Con un po' di pazienza, troveremo di certo una soluzione."},
    {fr:"Finalement, un bus part dans deux heures seulement.", it:"Alla fine, parte un autobus in appena due ore."},
    {fr:"Parfait, réservons tout de suite nos billets.", it:"Perfetto, prenotiamo subito i nostri biglietti."}
  ]},
  { title:"Un passeport égaré", phrases:[
    {fr:"Je ne retrouve plus mon passeport nulle part.", it:"Non trovo più il mio passaporto da nessuna parte."},
    {fr:"Essaie de te souvenir de la dernière fois où tu l'as utilisé.", it:"Cerca di ricordare l'ultima volta in cui l'hai usato."},
    {fr:"C'était à l'hôtel, en faisant le check-in.", it:"Era in hotel, durante il check-in."},
    {fr:"Appelons immédiatement la réception pour vérifier.", it:"Chiamiamo immediatamente la reception per controllare."},
    {fr:"Ils viennent de confirmer qu'ils l'ont retrouvé.", it:"Hanno appena confermato di averlo ritrovato."},
    {fr:"Quel soulagement, j'étais vraiment terrifié.", it:"Che sollievo, ero davvero terrorizzato."},
    {fr:"Il faudrait vraiment faire plus attention la prochaine fois.", it:"Bisognerebbe davvero fare più attenzione la prossima volta."},
    {fr:"Je vais désormais le garder uniquement dans le coffre.", it:"Da ora in poi lo terrò solo nella cassaforte."},
    {fr:"C'est effectivement beaucoup plus prudent.", it:"È effettivamente molto più prudente."},
    {fr:"Cette petite frayeur nous servira de leçon.", it:"Questo piccolo spavento ci servirà da lezione."}
  ], tip:{
    title:"Le gérondif passé avec « avendo »",
    example:"C'était à l'hôtel, en faisant le check-in. — Era in hotel, durante il check-in.",
    body:"L'italien utilise aussi un gérondif (« facendo », « avendo fatto ») pour exprimer une action simultanée ou sa manière, un peu comme le participe présent français. « Avendo dimenticato » signifie « ayant oublié », une construction utile pour les récits plus élaborés."
  }},
  { title:"Visiter Florence", phrases:[
    {fr:"Florence est souvent qualifiée de berceau de la Renaissance.", it:"Firenze è spesso definita la culla del Rinascimento."},
    {fr:"Le Duomo domine entièrement la ville de sa coupole.", it:"Il Duomo domina interamente la città con la sua cupola."},
    {fr:"On pourrait grimper tout en haut pour la vue.", it:"Potremmo salire fino in cima per la vista."},
    {fr:"Ça fait énormément de marches, apparemment.", it:"Fa un numero enorme di gradini, a quanto pare."},
    {fr:"Ça vaudra sans doute largement l'effort fourni.", it:"Varrà senza dubbio ampiamente lo sforzo fatto."},
    {fr:"La galerie des Offices mérite également une journée entière.", it:"La Galleria degli Uffizi merita anche un'intera giornata."},
    {fr:"Je rêve de voir le David de Michel-Ange en vrai.", it:"Sogno di vedere il David di Michelangelo dal vivo."},
    {fr:"Il se trouve dans un autre musée, un peu plus loin.", it:"Si trova in un altro museo, un po' più lontano."},
    {fr:"Nous aurons largement le temps de tout organiser.", it:"Avremo ampiamente il tempo di organizzare tutto."},
    {fr:"Florence promet décidément d'être inoubliable.", it:"Firenze promette decisamente di essere indimenticabile."}
  ], tip:{
    title:"« Mi trovo » : exprimer sa position",
    example:"Il se trouve dans un autre musée, un peu plus loin. — Si trova in un altro museo, un po' più lontano.",
    body:"« Trovarsi » (se trouver) est un verbe pronominal très utilisé en italien pour indiquer où est situé un lieu ou une personne : « si trova » (il/elle se trouve), « mi trovo » (je me trouve). C'est souvent plus naturel que « essere » (être) pour parler d'un emplacement."
  }},
  { title:"Négocier un changement de chambre", phrases:[
    {fr:"Notre chambre donne malheureusement sur une rue très bruyante.", it:"La nostra stanza dà purtroppo su una strada molto rumorosa."},
    {fr:"Je vais demander à la réception s'il existe une alternative.", it:"Chiederò alla reception se esiste un'alternativa."},
    {fr:"Je comprends tout à fait votre gêne, monsieur.", it:"Capisco perfettamente il suo disagio, signore."},
    {fr:"Nous avons justement une chambre disponible côté cour.", it:"Abbiamo proprio una stanza disponibile sul retro."},
    {fr:"Y aurait-il un supplément à payer pour le changement ?", it:"Ci sarebbe un sovrapprezzo da pagare per il cambio?"},
    {fr:"Non, ce sera entièrement gratuit, ne vous inquiétez pas.", it:"No, sarà completamente gratuito, non si preoccupi."},
    {fr:"C'est vraiment très aimable de votre part, merci.", it:"È davvero molto gentile da parte sua, grazie."},
    {fr:"Nous allons transférer vos bagages immédiatement.", it:"Trasferiremo immediatamente i suoi bagagli."},
    {fr:"Cette nouvelle chambre est bien plus silencieuse, effectivement.", it:"Questa nuova stanza è molto più silenziosa, in effetti."},
    {fr:"Je vous remercie sincèrement pour votre réactivité.", it:"La ringrazio sinceramente per la sua prontezza."}
  ], tip:{
    title:"« Ci sarebbe » : conditionnel de « c'è »",
    example:"Y aurait-il un supplément à payer pour le changement ? — Ci sarebbe un sovrapprezzo da pagare per il cambio?",
    body:"« Ci sarebbe » est le conditionnel de « c'è » (il y a), utilisé pour poser une question polie sur une éventuelle existence de quelque chose, tout comme « y aurait-il » en français. Le pluriel correspondant est « ci sarebbero » (y aurait-il, plusieurs choses)."
  }},
  { title:"Une excursion en vélo", phrases:[
    {fr:"On pourrait découvrir la campagne toscane à vélo.", it:"Potremmo scoprire la campagna toscana in bicicletta."},
    {fr:"Je n'ai pas fait de vélo depuis des années, pourtant.", it:"Però non vado in bicicletta da anni."},
    {fr:"Ne t'inquiète pas, les parcours sont plutôt faciles.", it:"Non ti preoccupare, i percorsi sono piuttosto facili."},
    {fr:"On nous fournira même un casque et une carte.", it:"Ci forniranno persino un casco e una mappa."},
    {fr:"Les collines paraissent quand même assez raides par endroits.", it:"Le colline sembrano comunque piuttosto ripide in alcuni punti."},
    {fr:"On pourra toujours s'arrêter si c'est trop fatigant.", it:"Potremo sempre fermarci se è troppo faticoso."},
    {fr:"L'idée de pique-niquer au milieu des vignes me plaît beaucoup.", it:"L'idea di fare un picnic in mezzo alle vigne mi piace molto."},
    {fr:"On s'arrêtera certainement dans une ferme locale.", it:"Ci fermeremo certamente in una fattoria locale."},
    {fr:"J'espère qu'on ne sera pas trop épuisés en arrivant.", it:"Spero che non saremo troppo esausti all'arrivo."},
    {fr:"Quelle que soit la fatigue, ça vaudra le coup.", it:"Qualunque sia la fatica, ne vale la pena."}
  ]},
  { title:"Louer un appartement pour une semaine", phrases:[
    {fr:"Nous avons décidé de louer un appartement plutôt qu'un hôtel.", it:"Abbiamo deciso di affittare un appartamento piuttosto che un hotel."},
    {fr:"Ça nous permettra de cuisiner nos propres repas parfois.", it:"Questo ci permetterà di cucinare i nostri pasti a volte."},
    {fr:"Le propriétaire doit nous remettre les clés à quinze heures.", it:"Il proprietario ci deve consegnare le chiavi alle quindici."},
    {fr:"L'appartement se trouve au deuxième étage, sans ascenseur.", it:"L'appartamento si trova al secondo piano, senza ascensore."},
    {fr:"Ce n'est pas très pratique avec toutes nos valises.", it:"Non è molto comodo con tutte le nostre valigie."},
    {fr:"On devra probablement faire plusieurs allers-retours.", it:"Dovremo probabilmente fare diversi andirivieni."},
    {fr:"Au moins, la terrasse offre une vue magnifique sur les toits.", it:"Almeno, la terrazza offre una vista magnifica sui tetti."},
    {fr:"Ça compense largement l'absence d'ascenseur, je trouve.", it:"Compensa ampiamente l'assenza dell'ascensore, trovo."},
    {fr:"On s'y sentira vite comme chez nous, j'en suis certain.", it:"Ci sentiremo presto come a casa, ne sono certo."},
    {fr:"Rien ne vaut un vrai chez-soi, même pour quelques jours.", it:"Niente vale un vero focolare, anche per pochi giorni."}
  ]},
  { title:"Discuter avec un guide local", phrases:[
    {fr:"Notre guide connaissait vraiment chaque recoin de la ville.", it:"La nostra guida conosceva davvero ogni angolo della città."},
    {fr:"Il nous a raconté des anecdotes que personne ne mentionne jamais.", it:"Ci ha raccontato aneddoti che nessuno menziona mai."},
    {fr:"Je n'aurais jamais découvert cet endroit par moi-même.", it:"Non avrei mai scoperto questo posto da solo."},
    {fr:"Il travaille comme guide depuis plus de vingt ans.", it:"Lavora come guida da più di venti anni."},
    {fr:"Sa passion pour l'histoire se ressentait à chaque phrase.", it:"La sua passione per la storia si sentiva in ogni frase."},
    {fr:"Il nous a même montré des photos de la ville dans les années soixante.", it:"Ci ha persino mostrato foto della città negli anni sessanta."},
    {fr:"Beaucoup de choses ont visiblement changé depuis.", it:"Molte cose sono visibilmente cambiate da allora."},
    {fr:"Pourtant, l'atmosphère reste étonnamment similaire, selon lui.", it:"Eppure, l'atmosfera resta sorprendentemente simile, secondo lui."},
    {fr:"Ce genre de visite guidée valait vraiment son prix.", it:"Questo tipo di visita guidata valeva davvero il suo prezzo."},
    {fr:"On repart avec une toute nouvelle vision de la ville.", it:"Partiamo con una visione completamente nuova della città."}
  ]},
  { title:"Une tempête soudaine à la mer", phrases:[
    {fr:"Le ciel s'est assombri de manière totalement inattendue.", it:"Il cielo si è scurito in modo totalmente inaspettato."},
    {fr:"On devrait rentrer avant que l'orage n'éclate vraiment.", it:"Dovremmo tornare prima che il temporale scoppi davvero."},
    {fr:"Les vagues deviennent soudainement bien plus grosses.", it:"Le onde diventano improvvisamente molto più grandi."},
    {fr:"Le maître-nageur vient justement de siffler l'alerte.", it:"Il bagnino ha appena fischiato proprio l'allarme."},
    {fr:"Tout le monde sort rapidement de l'eau, par précaution.", it:"Tutti escono rapidamente dall'acqua, per precauzione."},
    {fr:"Ce genre de tempête d'été passe généralement très vite.", it:"Questo tipo di temporale estivo passa generalmente molto in fretta."},
    {fr:"En effet, le soleil est déjà revenu une heure plus tard.", it:"In effetti, il sole è già tornato un'ora dopo."},
    {fr:"L'air semble étrangement plus frais après la pluie.", it:"L'aria sembra strangamente più fresca dopo la pioggia."},
    {fr:"On peut enfin retourner se baigner tranquillement.", it:"Possiamo finalmente tornare a fare il bagno tranquillamente."},
    {fr:"Ce petit épisode aura au moins fait une belle histoire à raconter.", it:"Questo piccolo episodio avrà almeno fatto una bella storia da raccontare."}
  ]},
  { title:"Un vol retardé", phrases:[
    {fr:"Notre vol a été retardé de plus de quatre heures.", it:"Il nostro volo è stato ritardato di più di quattro ore."},
    {fr:"Apparemment, c'est à cause d'un problème technique.", it:"A quanto pare, è a causa di un problema tecnico."},
    {fr:"Nous avons droit à une compensation dans ce genre de cas.", it:"Abbiamo diritto a un indennizzo in questo tipo di caso."},
    {fr:"Il faudrait vérifier les conditions exactes auprès de la compagnie.", it:"Bisognerebbe verificare le condizioni esatte con la compagnia."},
    {fr:"Ils nous ont au moins offert un bon repas gratuit.", it:"Ci hanno almeno offerto un buon pasto gratuito."},
    {fr:"Ça ne rattrape pas vraiment les heures perdues, cependant.", it:"Però questo non recupera davvero le ore perse."},
    {fr:"On devra prévenir notre hôtel de notre retard.", it:"Dovremo avvisare il nostro hotel del nostro ritardo."},
    {fr:"Heureusement, ils acceptent les arrivées tardives sans problème.", it:"Per fortuna, accettano arrivi tardivi senza problemi."},
    {fr:"Au moins, on a eu le temps de discuter avec d'autres passagers.", it:"Almeno abbiamo avuto il tempo di parlare con altri passeggeri."},
    {fr:"Ce genre d'épreuve finit toujours par passer, après tout.", it:"Questo tipo di prova finisce sempre per passare, dopotutto."}
  ], tip:{
    title:"« Avremo diritto » : le futur de « avere »",
    example:"Nous avons droit à une compensation dans ce genre de cas. — Abbiamo diritto a un indennizzo in questo tipo di caso.",
    body:"« Avere diritto a » signifie littéralement « avoir droit à », exactement comme en français. C'est une expression très utile à connaître pour toute réclamation, qu'il s'agisse d'un vol retardé, d'un remboursement ou d'une garantie."
  }},
  { title:"Explorer les Cinque Terre", phrases:[
    {fr:"Les Cinque Terre regroupent cinq villages accrochés à la falaise.", it:"Le Cinque Terre riuniscono cinque paesi aggrappati alla scogliera."},
    {fr:"On peut les relier entre eux par un sentier de randonnée.", it:"Si possono collegare tra loro con un sentiero escursionistico."},
    {fr:"La marche demande une bonne condition physique, paraît-il.", it:"La camminata richiede una buona forma fisica, a quanto pare."},
    {fr:"On pourra toujours prendre le train entre deux villages.", it:"Potremo sempre prendere il treno tra due paesi."},
    {fr:"Les maisons colorées se reflètent magnifiquement dans la mer.", it:"Le case colorate si riflettono magnificamente nel mare."},
    {fr:"Je n'avais jamais vu des couleurs aussi vives sur une façade.", it:"Non avevo mai visto colori così vivaci su una facciata."},
    {fr:"Chaque village possède sa propre spécialité culinaire.", it:"Ogni paese possiede la propria specialità culinaria."},
    {fr:"Le pesto serait originaire de cette région, d'ailleurs.", it:"Il pesto sarebbe originario di questa regione, peraltro."},
    {fr:"Il faudra absolument en goûter dans chaque village.", it:"Bisognerà assolutamente assaggiarlo in ogni paese."},
    {fr:"Cet endroit mérite amplement sa réputation mondiale.", it:"Questo posto merita ampiamente la sua fama mondiale."}
  ]},
  { title:"Faire du stop improvisé", phrases:[
    {fr:"Notre bus n'est jamais arrivé à l'arrêt prévu.", it:"Il nostro autobus non è mai arrivato alla fermata prevista."},
    {fr:"On pourrait essayer de faire du stop, en dernier recours.", it:"Potremmo provare a fare l'autostop, come ultima risorsa."},
    {fr:"Je n'ai jamais fait ça auparavant, je suis plutôt nerveux.", it:"Non l'ho mai fatto prima, sono piuttosto nervoso."},
    {fr:"Une voiture vient justement de s'arrêter à côté de nous.", it:"Una macchina si è appena fermata proprio vicino a noi."},
    {fr:"Le conducteur se rendait justement dans notre direction.", it:"Il conducente andava proprio nella nostra direzione."},
    {fr:"Quelle chance incroyable, je n'en reviens toujours pas.", it:"Che fortuna incredibile, non ci credo ancora."},
    {fr:"Il nous a même raconté toute l'histoire de sa région.", it:"Ci ha persino raccontato tutta la storia della sua regione."},
    {fr:"Ce genre de générosité spontanée me touche profondément.", it:"Questo tipo di generosità spontanea mi tocca profondamente."},
    {fr:"On l'a remercié chaleureusement avant de le quitter.", it:"Lo abbiamo ringraziato calorosamente prima di lasciarlo."},
    {fr:"Cette aventure imprévue restera parmi nos meilleurs souvenirs.", it:"Questa avventura imprevista resterà tra i nostri migliori ricordi."}
  ]},
  { title:"Visiter un vignoble du Piémont", phrases:[
    {fr:"Le Piémont produit certains des meilleurs vins d'Italie.", it:"Il Piemonte produce alcuni dei migliori vini d'Italia."},
    {fr:"Le Barolo est particulièrement réputé dans toute la région.", it:"Il Barolo è particolarmente rinomato in tutta la regione."},
    {fr:"Le propriétaire nous a fait visiter ses caves centenaires.", it:"Il proprietario ci ha fatto visitare le sue cantine centenarie."},
    {fr:"L'odeur du chêne se mélangeait à celle du raisin fermenté.", it:"L'odore della quercia si mescolava a quello dell'uva fermentata."},
    {fr:"Chaque bouteille vieillit ici pendant plusieurs années minimum.", it:"Ogni bottiglia invecchia qui per almeno diversi anni."},
    {fr:"La patience semble être la clé de ce métier.", it:"La pazienza sembra essere la chiave di questo mestiere."},
    {fr:"On a dégusté cinq vins différents en une seule après-midi.", it:"Abbiamo degustato cinque vini diversi in un solo pomeriggio."},
    {fr:"Je n'aurais jamais imaginé percevoir autant de nuances.", it:"Non avrei mai immaginato di percepire tante sfumature."},
    {fr:"On a fini par en acheter deux caisses entières.", it:"Abbiamo finito per comprarne due intere casse."},
    {fr:"Il faudra absolument les garder pour une occasion spéciale.", it:"Bisognerà assolutamente conservarle per un'occasione speciale."}
  ]},
  { title:"Une nuit dans un agritourisme", phrases:[
    {fr:"Nous avons réservé une nuit dans une ancienne ferme rénovée.", it:"Abbiamo prenotato una notte in un'antica fattoria ristrutturata."},
    {fr:"Le silence ici contraste énormément avec celui des grandes villes.", it:"Il silenzio qui contrasta enormemente con quello delle grandi città."},
    {fr:"On entend uniquement le chant des oiseaux au réveil.", it:"Si sente solo il canto degli uccelli al risveglio."},
    {fr:"Les propriétaires cultivent eux-mêmes leurs propres légumes.", it:"I proprietari coltivano da soli le proprie verdure."},
    {fr:"Le dîner était entièrement composé de produits de la ferme.", it:"La cena era interamente composta da prodotti della fattoria."},
    {fr:"Je n'avais jamais mangé des légumes aussi savoureux.", it:"Non avevo mai mangiato verdure così gustose."},
    {fr:"Ce mode de vie simple attire de plus en plus de voyageurs.", it:"Questo stile di vita semplice attira sempre più viaggiatori."},
    {fr:"On comprend parfaitement pourquoi, une fois sur place.", it:"Si capisce perfettamente perché, una volta sul posto."},
    {fr:"Je me sens incroyablement reposé après une seule nuit ici.", it:"Mi sento incredibilmente riposato dopo una sola notte qui."},
    {fr:"On prolongerait volontiers notre séjour, si c'était possible.", it:"Prolungheremmo volentieri il nostro soggiorno, se fosse possibile."}
  ]},
  { title:"Un contrôle de billets dans le train", phrases:[
    {fr:"Le contrôleur vient de nous demander nos billets.", it:"Il controllore ci ha appena chiesto i biglietti."},
    {fr:"Je n'avais pas validé le mien avant de monter.", it:"Non avevo convalidato il mio prima di salire."},
    {fr:"Cela risque de m'entraîner une amende assez salée.", it:"Questo rischia di farmi avere una multa piuttosto salata."},
    {fr:"Expliquez simplement la situation, il comprendra sûrement.", it:"Spieghi semplicemente la situazione, capirà sicuramente."},
    {fr:"Heureusement, il a fait preuve d'une grande indulgence.", it:"Per fortuna, ha dimostrato una grande indulgenza."},
    {fr:"Il m'a simplement demandé de valider dès la prochaine gare.", it:"Mi ha semplicemente chiesto di convalidare alla prossima stazione."},
    {fr:"J'ai retenu la leçon pour le reste du voyage.", it:"Ho imparato la lezione per il resto del viaggio."},
    {fr:"Désormais, je vérifie systématiquement avant chaque trajet.", it:"Da ora in poi, controllo sistematicamente prima di ogni tragitto."},
    {fr:"Ce genre de règle diffère souvent d'un pays à l'autre.", it:"Questo tipo di regola differisce spesso da un paese all'altro."},
    {fr:"Mieux vaut toujours se renseigner avant de voyager.", it:"È sempre meglio informarsi prima di viaggiare."}
  ]},
  { title:"Découvrir un marché aux puces", phrases:[
    {fr:"Ce marché aux puces n'ouvre qu'une fois par mois.", it:"Questo mercatino delle pulci apre solo una volta al mese."},
    {fr:"Nous avons eu la chance de tomber sur la bonne date.", it:"Abbiamo avuto la fortuna di capitare nella data giusta."},
    {fr:"Chaque stand regorgeait d'objets anciens fascinants.", it:"Ogni bancarella era piena di oggetti antichi affascinanti."},
    {fr:"J'ai trouvé une vieille carte postale de Rome datant des années vingt.", it:"Ho trovato una vecchia cartolina di Roma risalente agli anni venti."},
    {fr:"Le vendeur connaissait l'histoire exacte de chaque objet.", it:"Il venditore conosceva la storia esatta di ogni oggetto."},
    {fr:"J'ai négocié le prix, par simple plaisir du jeu.", it:"Ho contrattato il prezzo, per il semplice piacere del gioco."},
    {fr:"Il a fini par accepter une réduction raisonnable.", it:"Ha finito per accettare una riduzione ragionevole."},
    {fr:"Ce genre d'objet raconte une histoire qu'aucun musée ne raconte.", it:"Questo tipo di oggetto racconta una storia che nessun museo racconta."},
    {fr:"J'adore chiner ce genre d'endroit en voyage.", it:"Adoro frequentare questo tipo di posto in viaggio."},
    {fr:"On y retournera sans aucun doute la prochaine fois.", it:"Ci torneremo senza alcun dubbio la prossima volta."}
  ]},
  { title:"Un cours de cuisine improvisé", phrases:[
    {fr:"La propriétaire de notre appartement nous a proposé un cours de cuisine.", it:"La proprietaria del nostro appartamento ci ha proposto un corso di cucina."},
    {fr:"Nous avons appris à préparer des tagliatelles entièrement à la main.", it:"Abbiamo imparato a preparare le tagliatelle completamente a mano."},
    {fr:"Le mélange de la farine et des œufs demande une vraie technique.", it:"L'impasto di farina e uova richiede una vera tecnica."},
    {fr:"Mes premières tentatives ressemblaient davantage à de la colle.", it:"I miei primi tentativi assomigliavano più a della colla."},
    {fr:"Elle nous a corrigés patiemment, sans jamais se moquer.", it:"Ci ha corretti con pazienza, senza mai prendere in giro."},
    {fr:"Après plusieurs essais, le résultat devenait enfin présentable.", it:"Dopo diversi tentativi, il risultato diventava finalmente presentabile."},
    {fr:"On a dégusté notre propre création avec une immense fierté.", it:"Abbiamo degustato la nostra creazione con un'immensa fierezza."},
    {fr:"Ce n'était pas parfait, mais c'était quand même délicieux.", it:"Non era perfetto, ma era comunque delizioso."},
    {fr:"Je vais essayer de reproduire ça une fois rentré chez moi.", it:"Cercherò di riprodurre questo una volta tornato a casa."},
    {fr:"Ce souvenir vaut largement plus qu'un simple restaurant.", it:"Questo ricordo vale ampiamente più di un semplice ristorante."}
  ]},
  { title:"Un malentendu avec un serveur", phrases:[
    {fr:"Je crois qu'il y a une erreur sur l'addition.", it:"Credo che ci sia un errore sul conto."},
    {fr:"Nous n'avons jamais commandé ce plat-là.", it:"Non abbiamo mai ordinato quel piatto lì."},
    {fr:"Le serveur a vérifié et s'est aussitôt excusé.", it:"Il cameriere ha controllato e si è subito scusato."},
    {fr:"C'était simplement une confusion avec une autre table.", it:"Era semplicemente una confusione con un altro tavolo."},
    {fr:"Ce genre d'erreur arrive parfois, surtout un soir chargé.", it:"Questo tipo di errore succede a volte, soprattutto una sera affollata."},
    {fr:"Il nous a offert un dessert pour se faire pardonner.", it:"Ci ha offerto un dolce per farsi perdonare."},
    {fr:"C'était vraiment un geste très apprécié de sa part.", it:"È stato davvero un gesto molto apprezzato da parte sua."},
    {fr:"Ce genre de petit incident ne gâche jamais une bonne soirée.", it:"Questo tipo di piccolo incidente non rovina mai una bella serata."},
    {fr:"L'important, c'est la façon de le résoudre, finalement.", it:"L'importante è il modo di risolverlo, in fondo."},
    {fr:"Nous reviendrons certainement dans ce restaurant.", it:"Torneremo certamente in questo ristorante."}
  ]},
  { title:"Traverser les Dolomites", phrases:[
    {fr:"Les Dolomites offrent des paysages montagneux à couper le souffle.", it:"Le Dolomiti offrono paesaggi montani che tolgono il fiato."},
    {fr:"Nous avons prévu une randonnée de plusieurs heures.", it:"Abbiamo previsto un'escursione di diverse ore."},
    {fr:"L'air y est incroyablement plus frais qu'en ville.", it:"L'aria lì è incredibilmente più fresca che in città."},
    {fr:"Les sommets rocheux changent de couleur selon la lumière.", it:"Le cime rocciose cambiano colore secondo la luce."},
    {fr:"Au coucher du soleil, elles deviennent presque roses.", it:"Al tramonto, diventano quasi rosa."},
    {fr:"On nous avait prévenus, mais c'est encore plus beau en vrai.", it:"Ci avevano avvertito, ma è ancora più bello dal vivo."},
    {fr:"Un petit refuge sert justement des plats régionaux copieux.", it:"Un piccolo rifugio serve proprio piatti regionali abbondanti."},
    {fr:"Après tant d'efforts, le repas paraissait encore meilleur.", it:"Dopo tanti sforzi, il pasto sembrava ancora più buono."},
    {fr:"Cette région mélange influences italiennes et autrichiennes.", it:"Questa regione mescola influenze italiane e austriache."},
    {fr:"On sent vraiment ce mélange culturel partout autour de nous.", it:"Si sente davvero questa mescolanza culturale tutto intorno a noi."}
  ]},
  { title:"Perdre sa connexion internet", phrases:[
    {fr:"Je n'ai plus aucun réseau depuis que nous sommes en montagne.", it:"Non ho più nessuna rete da quando siamo in montagna."},
    {fr:"Ça fait presque du bien de se déconnecter un peu.", it:"Fa quasi bene disconnettersi un po'."},
    {fr:"On ne regarde plus constamment nos téléphones, c'est agréable.", it:"Non guardiamo più costantemente i nostri telefoni, è piacevole."},
    {fr:"On remarque bien plus de détails autour de nous.", it:"Notiamo molti più dettagli intorno a noi."},
    {fr:"J'avais presque oublié le plaisir d'une vraie conversation.", it:"Avevo quasi dimenticato il piacere di una vera conversazione."},
    {fr:"Nos proches vont sûrement s'inquiéter de notre silence.", it:"I nostri cari si preoccuperanno sicuramente del nostro silenzio."},
    {fr:"On leur enverra un message dès qu'on retrouvera du réseau.", it:"Manderemo loro un messaggio appena ritroveremo la rete."},
    {fr:"Ce genre de pause numérique devrait arriver plus souvent.", it:"Questo tipo di pausa digitale dovrebbe succedere più spesso."},
    {fr:"Je me sens étonnamment plus détendu depuis ce matin.", it:"Mi sento sorprendentemente più rilassato da questa mattina."},
    {fr:"Peut-être qu'on devrait répéter ça régulièrement, une fois rentrés.", it:"Forse dovremmo ripeterlo regolarmente, una volta tornati."}
  ], tip:{
    title:"« Da quando » : depuis que",
    example:"Je n'ai plus aucun réseau depuis que nous sommes en montagne. — Non ho più nessuna rete da quando siamo in montagna.",
    body:"« Da quando » introduit une action qui dure depuis un point de départ précis, exactement comme « depuis que » en français. On le distingue de « da » employé seul avec une durée (« da due giorni », depuis deux jours)."
  }},
  { title:"Fin du module : les imprévus du voyage", phrases:[
    {fr:"Ce module nous a appris à gérer bien des imprévus.", it:"Questo modulo ci ha insegnato a gestire molti imprevisti."},
    {fr:"Chaque difficulté a finalement tourné en bonne surprise.", it:"Ogni difficoltà si è alla fine trasformata in una bella sorpresa."},
    {fr:"Voyager demande une certaine souplesse d'esprit, décidément.", it:"Viaggiare richiede decisamente una certa flessibilità mentale."},
    {fr:"On apprend à s'adapter plus vite qu'on ne le pensait.", it:"Si imparare ad adattarsi più in fretta di quanto si pensasse."},
    {fr:"Ces petites aventures rendent le voyage encore plus mémorable.", it:"Queste piccole avventure rendono il viaggio ancora più memorabile."},
    {fr:"Tu as terminé le module « En voyage » du Niveau 2 !", it:"Hai terminato il modulo « In viaggio » del Livello 2!"},
    {fr:"Ton vocabulaire s'enrichit vraiment à chaque situation rencontrée.", it:"Il tuo vocabolario si arricchisce davvero a ogni situazione incontrata."},
    {fr:"Le prochain module portera sur la conversation sociale.", it:"Il prossimo modulo riguarderà la conversazione sociale."},
    {fr:"J'ai hâte de voir comment tu vas progresser encore.", it:"Non vedo l'ora di vedere come progredirai ancora."},
    {fr:"Continue à pratiquer, les résultats sont déjà remarquables.", it:"Continua a esercitarti, i risultati sono già notevoli."}
  ]}
];

const level2Module3Lessons = [
  { title:"Discuter de la vie en Italie", phrases:[
    {fr:"Cela doit faire une énorme différence de vivre ici plutôt qu'en France.", it:"Deve fare un'enorme differenza vivere qui piuttosto che in Francia."},
    {fr:"Honnêtement, le rythme de vie est beaucoup moins pressé.", it:"Onestamente, il ritmo di vita è molto meno frenetico."},
    {fr:"Les repas durent souvent bien plus longtemps qu'ailleurs.", it:"I pasti durano spesso molto più tempo che altrove."},
    {fr:"On prend vraiment le temps de profiter de chaque instant.", it:"Ci si prende davvero il tempo di godersi ogni istante."},
    {fr:"Est-ce que ça vous manquerait de retourner en ville, un jour ?", it:"Le mancherebbe tornare in città, un giorno?"},
    {fr:"Peut-être un peu, mais je m'y suis vraiment habitué.", it:"Forse un po', ma mi ci sono davvero abituato."},
    {fr:"Les gens semblent globalement plus détendus par ici.", it:"Le persone sembrano in generale più rilassate qui."},
    {fr:"C'est sans doute dû au climat et à la culture locale.", it:"È probabilmente dovuto al clima e alla cultura locale."},
    {fr:"En tout cas, ça donne envie de ralentir un peu soi-même.", it:"In ogni caso, fa venire voglia di rallentare un po' anche noi."},
    {fr:"C'est exactement la leçon que je retiens de ce voyage.", it:"È esattamente la lezione che traggo da questo viaggio."}
  ], tip:{
    title:"« Mancherebbe » : le conditionnel de manquer",
    example:"Est-ce que ça vous manquerait de retourner en ville, un jour ? — Le mancherebbe tornare in città, un giorno?",
    body:"« Mancare » fonctionne comme « piacere » : le sujet grammatical est la chose qui manque, et la personne reçoit un pronom indirect. « Mi manca » = « ça me manque », « le mancherebbe » = « ça lui/vous manquerait »."
  }},
  { title:"Un débat animé sur la gastronomie", phrases:[
    {fr:"Je soutiens que la cuisine italienne surpasse toutes les autres.", it:"Sostengo che la cucina italiana superi tutte le altre."},
    {fr:"C'est un avis que beaucoup partageraient sans hésiter.", it:"È un'opinione che molti condividerebbero senza esitare."},
    {fr:"Pourtant, certains préfèrent nettement la cuisine française.", it:"Eppure, alcuni preferiscono decisamente la cucina francese."},
    {fr:"Chaque pays possède évidemment ses propres forces culinaires.", it:"Ogni paese possiede evidentemente i propri punti forti culinari."},
    {fr:"Il serait injuste de n'en privilégier qu'une seule.", it:"Sarebbe ingiusto privilegiarne solo una."},
    {fr:"Je suis entièrement d'accord avec cette façon de voir les choses.", it:"Sono completamente d'accordo con questo modo di vedere le cose."},
    {fr:"Au fond, le débat n'a probablement pas de vraie réponse.", it:"In fondo, il dibattito probabilmente non ha una vera risposta."},
    {fr:"Et puis, le plus important reste de se régaler, non ?", it:"E poi, la cosa più importante resta godersela, no?"},
    {fr:"Exactement, c'est la seule chose qui compte vraiment.", it:"Esattamente, è la sola cosa che conta davvero."},
    {fr:"Sur ce point, personne ne pourra jamais me contredire.", it:"Su questo punto, nessuno potrà mai contraddirmi."}
  ], tip:{
    title:"Le subjonctif après « sostenere che »",
    example:"Je soutiens que la cuisine italienne surpasse toutes les autres. — Sostengo che la cucina italiana <b>superi</b> tutte le altre.",
    body:"Les verbes exprimant une opinion forte comme « sostenere » (soutenir) ou « credere » (croire) entraînent souvent le subjonctif dans la proposition qui suit, là où le français garde l'indicatif. « Superi » est ici le subjonctif présent de « superare »."
  }},
  { title:"Parler de politique avec prudence", phrases:[
    {fr:"Je préfère rester plutôt neutre sur ce genre de sujet.", it:"Preferisco restare piuttosto neutrale su questo tipo di argomento."},
    {fr:"C'est tout à fait compréhensible, c'est un sujet délicat.", it:"È del tutto comprensibile, è un argomento delicato."},
    {fr:"Chacun a évidemment le droit d'avoir son propre avis.", it:"Ognuno ha evidentemente il diritto di avere la propria opinione."},
    {fr:"Je trouve ça intéressant de voir les différences entre nos pays.", it:"Trovo interessante vedere le differenze tra i nostri paesi."},
    {fr:"Les systèmes politiques varient énormément d'un endroit à l'autre.", it:"I sistemi politici variano enormemente da un posto all'altro."},
    {fr:"On apprend toujours beaucoup en discutant avec des étrangers.", it:"Si imparare sempre molto parlando con stranieri."},
    {fr:"C'est exactement pour ça que j'aime autant voyager.", it:"È esattamente per questo che amo tanto viaggiare."},
    {fr:"Ça permet de relativiser pas mal de choses, finalement.", it:"Permette di relativizzare parecchie cose, in fondo."},
    {fr:"Je suis complètement d'accord avec cette vision des choses.", it:"Sono completamente d'accordo con questa visione delle cose."},
    {fr:"Changeons plutôt de sujet, veux-tu ?", it:"Cambiamo piuttosto argomento, vuoi?"}
  ]},
  { title:"Discuter d'un livre lu récemment", phrases:[
    {fr:"Je viens de terminer un roman italien absolument captivant.", it:"Ho appena finito un romanzo italiano assolutamente avvincente."},
    {fr:"De quoi parle-t-il exactement, si je peux demander ?", it:"Di cosa parla esattamente, se posso chiedere?"},
    {fr:"D'une famille sicilienne sur plusieurs générations.", it:"Di una famiglia siciliana attraverso diverse generazioni."},
    {fr:"Ça me rappelle un peu un livre que j'ai lu il y a des années.", it:"Mi ricorda un po' un libro che ho letto anni fa."},
    {fr:"L'auteur décrit la Sicile avec une précision impressionnante.", it:"L'autore descrive la Sicilia con una precisione impressionante."},
    {fr:"On dirait presque qu'on visite l'île en le lisant.", it:"Si direbbe quasi di visitare l'isola leggendolo."},
    {fr:"Je vais absolument devoir me le procurer, alors.", it:"Dovrò assolutamente procurarmelo, allora."},
    {fr:"Je te le prêterai volontiers une fois que j'aurai fini.", it:"Te lo presterò volentieri una volta che avrò finito."},
    {fr:"Ce serait vraiment adorable de ta part, merci.", it:"Sarebbe davvero gentile da parte tua, grazie."},
    {fr:"On pourra en discuter ensemble après ta lecture.", it:"Potremo discuterne insieme dopo la tua lettura."}
  ]},
  { title:"Discuter de ses peurs et craintes", phrases:[
    {fr:"Je dois t'avouer que j'ai une peur panique de l'avion.", it:"Devo confessarti che ho una paura folle dell'aereo."},
    {fr:"C'est une peur bien plus courante que tu ne le penses.", it:"È una paura molto più comune di quanto tu pensi."},
    {fr:"Comment arrives-tu à la gérer pendant les vols ?", it:"Come riesci a gestirla durante i voli?"},
    {fr:"J'essaie de me concentrer sur ma respiration, surtout.", it:"Cerco soprattutto di concentrarmi sulla mia respirazione."},
    {fr:"La musique m'aide aussi énormément à me détendre.", it:"Anche la musica mi aiuta enormemente a rilassarmi."},
    {fr:"Je devrais peut-être essayer cette méthode moi-même.", it:"Dovrei forse provare anche io questo metodo."},
    {fr:"Certains suivent même des formations spécifiques pour ça.", it:"Alcuni seguono persino corsi specifici per questo."},
    {fr:"J'ignorais complètement que ça existait, en réalité.", it:"Non sapevo affatto che esistesse, in realtà."},
    {fr:"Au moins, tu n'es certainement pas seul face à cette peur.", it:"Almeno, non sei certamente solo davanti a questa paura."},
    {fr:"Ça me rassure un peu de l'entendre, merci.", it:"Mi tranquillizza un po' sentirlo, grazie."}
  ]},
  { title:"Réagir à une mauvaise nouvelle", phrases:[
    {fr:"J'ai appris une nouvelle plutôt triste hier soir.", it:"Ho saputo una notizia piuttosto triste ieri sera."},
    {fr:"Oh non, qu'est-ce qui s'est passé exactement ?", it:"Oh no, cosa è successo esattamente?"},
    {fr:"Mon grand-père a été hospitalisé pour quelques jours.", it:"Mio nonno è stato ricoverato per qualche giorno."},
    {fr:"Je suis vraiment désolé d'apprendre ça, courage à toi.", it:"Mi dispiace davvero sentirlo, coraggio a te."},
    {fr:"Merci beaucoup, ça me touche énormément de l'entendre.", it:"Grazie mille, mi tocca molto sentirlo."},
    {fr:"Les médecins semblent plutôt optimistes pour sa guérison.", it:"I medici sembrano piuttosto ottimisti riguardo al suo recupero."},
    {fr:"C'est déjà une excellente nouvelle en soi, heureusement.", it:"È già un'ottima notizia in sé, per fortuna."},
    {fr:"N'hésite surtout pas à me solliciter si tu as besoin.", it:"Non esitare soprattutto a chiedermi se hai bisogno."},
    {fr:"C'est vraiment gentil, ça compte beaucoup pour moi.", it:"È davvero gentile, significa molto per me."},
    {fr:"On reste évidemment là les uns pour les autres.", it:"Restiamo ovviamente là gli uni per gli altri."}
  ]},
  { title:"Partager un souvenir d'enfance", phrases:[
    {fr:"Mes grands-parents venaient justement de cette région.", it:"I miei nonni venivano proprio da questa regione."},
    {fr:"Je passais tous mes étés ici quand j'étais enfant.", it:"Passavo tutte le mie estati qui quando ero bambino."},
    {fr:"Cette ville a dû beaucoup changer depuis, non ?", it:"Questa città deve essere cambiata molto da allora, no?"},
    {fr:"Énormément, même si certains coins restent reconnaissables.", it:"Moltissimo, anche se alcuni angoli restano riconoscibili."},
    {fr:"Je reconnais encore cette petite place, par exemple.", it:"Riconosco ancora questa piccola piazza, per esempio."},
    {fr:"Ça fait quel genre de sensation, de revenir ici ?", it:"Che tipo di sensazione fa, tornare qui?"},
    {fr:"Un mélange étrange de nostalgie et de joie, honnêtement.", it:"Una strana mescolanza di nostalgia e gioia, onestamente."},
    {fr:"Je comprends tout à fait ce sentiment particulier.", it:"Capisco perfettamente questo sentimento particolare."},
    {fr:"Les souvenirs d'enfance restent toujours les plus forts.", it:"I ricordi d'infanzia restano sempre i più forti."},
    {fr:"Je ne pourrais pas être plus d'accord avec toi.", it:"Non potrei essere più d'accordo con te."}
  ]},
  { title:"Discuter de ses rêves futurs", phrases:[
    {fr:"Si tu pouvais faire n'importe quoi, que choisirais-tu ?", it:"Se potessi fare qualsiasi cosa, cosa scegliere sti?"},
    {fr:"Je crois que j'ouvrirais un petit restaurant, sincèrement.", it:"Credo che aprirei un piccolo ristorante, sinceramente."},
    {fr:"Ça ne m'étonne absolument pas, vu ta passion pour la cuisine.", it:"Questo non mi sorprende affatto, vista la tua passione per la cucina."},
    {fr:"Et toi, qu'est-ce que tu ferais, dans ce cas-là ?", it:"E tu, cosa faresti, in quel caso?"},
    {fr:"Je partirais probablement vivre quelque part au bord de la mer.", it:"Andrei probabilmente a vivere da qualche parte vicino al mare."},
    {fr:"Ça semble être un rêve que beaucoup de gens partagent.", it:"Sembra essere un sogno che molte persone condividono."},
    {fr:"C'est vrai, mais peu de gens osent vraiment le réaliser.", it:"È vero, ma poche persone osano davvero realizzarlo."},
    {fr:"Peut-être qu'un jour, on tentera le coup tous les deux.", it:"Forse un giorno, ci proveremo entrambi."},
    {fr:"Ce serait une aventure vraiment folle, mais tentante.", it:"Sarebbe un'avventura davvero folle, ma tentatrice."},
    {fr:"Gardons cette idée en tête, qui sait ce qui nous attend.", it:"Teniamo questa idea in mente, chissà cosa ci aspetta."}
  ]},
  { title:"Parler d'une rupture amoureuse", phrases:[
    {fr:"J'ai appris que ton couple avait rencontré des difficultés.", it:"Ho saputo che la tua coppia aveva incontrato delle difficoltà."},
    {fr:"Oui, malheureusement, nous nous sommes finalement séparés.", it:"Sì, purtroppo, alla fine ci siamo lasciati."},
    {fr:"Je suis vraiment désolé de l'apprendre, ça a dû être dur.", it:"Mi dispiace davvero saperlo, deve essere stato duro."},
    {fr:"Ça l'a été, mais je commence doucement à aller mieux.", it:"Lo è stato, ma comincio lentamente a sentirmi meglio."},
    {fr:"Le temps arrange généralement beaucoup de choses, tu verras.", it:"Il tempo generalmente sistema molte cose, vedrai."},
    {fr:"J'essaie de me concentrer davantage sur moi-même désormais.", it:"Cerco di concentrarmi di più su me stesso ormai."},
    {fr:"C'est une excellente façon de voir la situation, je trouve.", it:"È un ottimo modo di vedere la situazione, trovo."},
    {fr:"Mes amis m'ont beaucoup soutenu pendant cette période difficile.", it:"I miei amici mi hanno sostenuto molto durante questo periodo difficile."},
    {fr:"C'est important d'avoir des gens sur qui compter.", it:"È importante avere persone su cui contare."},
    {fr:"Merci de m'écouter, ça me fait vraiment du bien.", it:"Grazie di ascoltarmi, mi fa davvero bene."}
  ]},
  { title:"Discuter des traditions familiales", phrases:[
    {fr:"Chaque dimanche, toute ma famille se retrouve autour d'un grand repas.", it:"Ogni domenica, tutta la mia famiglia si ritrova intorno a un grande pasto."},
    {fr:"Cette tradition existe-t-elle depuis longtemps chez vous ?", it:"Questa tradizione esiste da molto tempo da voi?"},
    {fr:"Depuis au moins trois générations, autant que je sache.", it:"Da almeno tre generazioni, per quanto ne sappia."},
    {fr:"C'est touchant de voir une tradition perdurer aussi longtemps.", it:"È commovente vedere una tradizione perdurare così a lungo."},
    {fr:"Ma grand-mère insiste pour cuisiner elle-même chaque plat.", it:"Mia nonna insiste per cucinare lei stessa ogni piatto."},
    {fr:"Elle doit y consacrer énormément de temps et d'énergie.", it:"Deve dedicarci un'enorme quantità di tempo ed energia."},
    {fr:"Oui, mais elle dit que ça la rend profondément heureuse.", it:"Sì, ma dice che questo la rende profondamente felice."},
    {fr:"Ce genre d'habitude familiale finit toujours par créer des souvenirs précieux.", it:"Questo tipo di abitudine familiare finisce sempre per creare ricordi preziosi."},
    {fr:"Je garderai cette tradition pour mes propres enfants, un jour.", it:"Conserverò questa tradizione per i miei stessi figli, un giorno."},
    {fr:"C'est une très belle intention, vraiment admirable.", it:"È un'intenzione molto bella, davvero ammirabile."}
  ]},
  { title:"Parler de ses doutes professionnels", phrases:[
    {fr:"J'ai sérieusement envisagé de changer complètement de carrière.", it:"Ho seriamente considerato di cambiare completamente carriera."},
    {fr:"Qu'est-ce qui t'a poussé vers cette réflexion ?", it:"Cosa ti ha spinto verso questa riflessione?"},
    {fr:"Je ne me sens plus vraiment épanoui dans mon travail actuel.", it:"Non mi sento più davvero realizzato nel mio lavoro attuale."},
    {fr:"C'est un sentiment que beaucoup de gens finissent par ressentir.", it:"È una sensazione che molte persone finiscono per provare."},
    {fr:"Est-ce que tu as une idée précise de ce que tu voudrais faire ?", it:"Hai un'idea precisa di cosa vorresti fare?"},
    {fr:"Pas encore complètement, mais j'y réfléchis sérieusement.", it:"Non ancora del tutto, ma ci sto riflettendo seriamente."},
    {fr:"Prends le temps nécessaire, ce genre de décision ne se prend pas à la légère.", it:"Prenditi il tempo necessario, questo tipo di decisione non si prende alla leggera."},
    {fr:"Tu as parfaitement raison, je ne veux rien précipiter.", it:"Hai perfettamente ragione, non voglio precipitare niente."},
    {fr:"Quoi que tu décides, je te soutiendrai pleinement.", it:"Qualunque cosa tu decida, ti sosterrò pienamente."},
    {fr:"Ça me fait vraiment plaisir de l'entendre, merci infiniment.", it:"Mi fa davvero piacere sentirlo, grazie infinitamente."}
  ]},
  { title:"Discuter d'un sujet d'actualité", phrases:[
    {fr:"As-tu entendu parler de cette nouvelle réglementation ?", it:"Hai sentito parlare di questa nuova normativa?"},
    {fr:"Oui, vaguement, mais pas en détail, pour être honnête.", it:"Sì, vagamente, ma non nei dettagli, a dire il vero."},
    {fr:"Apparemment, ça pourrait changer pas mal de choses.", it:"A quanto pare, potrebbe cambiare parecchie cose."},
    {fr:"J'espère sincèrement que ce sera pour le mieux.", it:"Spero sinceramente che sarà per il meglio."},
    {fr:"Les avis semblent vraiment très partagés sur la question.", it:"I pareri sembrano davvero molto divisi sulla questione."},
    {fr:"C'est souvent le cas pour ce genre de décision importante.", it:"È spesso il caso per questo tipo di decisione importante."},
    {fr:"On verra bien quels seront les effets réels, finalement.", it:"Vedremo quali saranno gli effetti reali, in fondo."},
    {fr:"Je préfère rester prudent avant de me former un avis définitif.", it:"Preferisco restare cauto prima di formarmi un'opinione definitiva."},
    {fr:"C'est effectivement une approche sage, je trouve.", it:"È effettivamente un approccio saggio, trovo."},
    {fr:"On en rediscutera dans quelques mois, avec plus d'informations.", it:"Ne riparleremo tra qualche mese, con più informazioni."}
  ], tip:{
    title:"« Prima di » + infinitif",
    example:"Je préfère rester cauto prima di formarmi un'opinione definitiva.",
    body:"« Prima di » suivi d'un infinitif signifie « avant de », exactement comme en français : « prima di partire » (avant de partir), « prima di decidere » (avant de décider). C'est une structure très simple et extrêmement fréquente."
  }},
  { title:"Encourager un ami découragé", phrases:[
    {fr:"Tu sembles vraiment découragé en ce moment, est-ce que ça va ?", it:"Sembri davvero scoraggiato in questo momento, va tutto bene?"},
    {fr:"Pas vraiment, rien ne semble se passer comme je l'espérais.", it:"Non proprio, niente sembra andare come speravo."},
    {fr:"Tout le monde traverse ce genre de période, tu sais.", it:"Tutti attraversano questo tipo di periodo, sai."},
    {fr:"Je sais, mais ça n'enlève rien à la frustration ressentie.", it:"Lo so, ma questo non toglie nulla alla frustrazione provata."},
    {fr:"Essaie de te souvenir de tout ce que tu as déjà accompli.", it:"Cerca di ricordare tutto quello che hai già realizzato."},
    {fr:"C'est vrai que j'oublie souvent de me féliciter moi-même.", it:"È vero che spesso mi dimentico di congratularmi con me stesso."},
    {fr:"Sois un peu plus indulgent envers toi-même, pour une fois.", it:"Sii un po' più indulgente verso te stesso, per una volta."},
    {fr:"Tu as raison, je vais vraiment essayer d'y travailler.", it:"Hai ragione, cercherò davvero di lavorarci."},
    {fr:"Je crois sincèrement en toi, n'en doute jamais.", it:"Credo sinceramente in te, non dubitarne mai."},
    {fr:"Merci, ça me redonne vraiment confiance en moi.", it:"Grazie, questo mi ridà davvero fiducia in me stesso."}
  ]},
  { title:"Discuter d'un rêve étrange", phrases:[
    {fr:"J'ai fait un rêve particulièrement étrange cette nuit.", it:"Ho fatto un sogno particolarmente strano questa notte."},
    {fr:"Raconte-moi, j'adore ce genre d'histoire bizarre.", it:"Raccontami, adoro questo tipo di storia strana."},
    {fr:"Je marchais dans une ville qui ressemblait à Venise, mais flottante.", it:"Camminavo in una città che sembrava Venezia, ma galleggiante."},
    {fr:"Tout semblait à la fois familier et complètement irréel.", it:"Tutto sembrava al tempo stesso familiare e completamente irreale."},
    {fr:"Les rêves prennent souvent des éléments de nos récents voyages.", it:"I sogni prendono spesso elementi dai nostri recenti viaggi."},
    {fr:"C'est probablement exactement ce qui s'est passé, en effet.", it:"È probabilmente esattamente ciò che è successo, infatti."},
    {fr:"Est-ce que tu te souviens de comment il se terminait ?", it:"Ti ricordi come finiva?"},
    {fr:"Non, je me suis réveillé juste avant la fin, malheureusement.", it:"No, mi sono svegliato proprio prima della fine, purtroppo."},
    {fr:"C'est toujours frustrant quand ça arrive, je comprends.", it:"È sempre frustrante quando succede, capisco."},
    {fr:"Peut-être que je rêverai de la suite cette nuit.", it:"Forse sognerò il resto questa notte."}
  ]},
  { title:"Parler de son rapport à l'argent", phrases:[
    {fr:"Je trouve ça parfois difficile de gérer mon budget en voyage.", it:"Trovo a volte difficile gestire il mio budget in viaggio."},
    {fr:"C'est vrai qu'on dépense facilement plus que prévu.", it:"È vero che si spende facilmente più del previsto."},
    {fr:"J'essaie désormais de me fixer une limite quotidienne.", it:"Ormai cerco di fissarmi un limite giornaliero."},
    {fr:"Ça demande une bonne discipline, mais ça fonctionne plutôt bien.", it:"Richiede una buona disciplina, ma funziona piuttosto bene."},
    {fr:"Est-ce que tu économises aussi pour tes prochains voyages ?", it:"Risparmi anche per i tuoi prossimi viaggi?"},
    {fr:"Oui, je mets un peu d'argent de côté chaque mois.", it:"Sì, metto un po' di soldi da parte ogni mese."},
    {fr:"C'est une excellente habitude à garder sur le long terme.", it:"È un'ottima abitudine da mantenere nel lungo termine."},
    {fr:"Ça permet surtout de voyager sans trop culpabiliser.", it:"Permette soprattutto di viaggiare senza sentirsi troppo in colpa."},
    {fr:"Je comprends tout à fait cette façon de penser.", it:"Capisco perfettamente questo modo di pensare."},
    {fr:"L'équilibre reste, selon moi, la clé de tout.", it:"L'equilibrio resta, secondo me, la chiave di tutto."}
  ]},
  { title:"Discuter de son identité culturelle", phrases:[
    {fr:"Après tant de voyages, je me sens parfois un peu partout chez moi.", it:"Dopo tanti viaggi, a volte mi sento un po' a casa ovunque."},
    {fr:"C'est un sentiment que beaucoup de grands voyageurs partagent.", it:"È una sensazione che molti grandi viaggiatori condividono."},
    {fr:"On finit par emprunter des habitudes de chaque culture rencontrée.", it:"Si finisce per prendere abitudini da ogni cultura incontrata."},
    {fr:"J'ai même adopté certaines expressions italiennes dans mon langage.", it:"Ho persino adottato alcune espressioni italiane nel mio linguaggio."},
    {fr:"Ça arrive souvent après un séjour prolongé quelque part.", it:"Succede spesso dopo un soggiorno prolungato da qualche parte."},
    {fr:"Je trouve ça plutôt enrichissant, cette identité qui se mélange.", it:"Trovo piuttosto arricchente questa identità che si mescola."},
    {fr:"Certains trouvent ça déstabilisant, pourtant, de ne pas se sentir d'un seul endroit.", it:"Alcuni trovano questo destabilizzante, invece, non sentirsi di un solo posto."},
    {fr:"Je comprends ce point de vue, même si je ne le partage pas totalement.", it:"Capisco questo punto di vista, anche se non lo condivido del tutto."},
    {fr:"Au final, chacun vit cette expérience de manière différente.", it:"Alla fine, ognuno vive questa esperienza in modo diverso."},
    {fr:"C'est exactement ce qui rend chaque voyageur unique.", it:"È esattamente ciò che rende ogni viaggiatore unico."}
  ]},
  { title:"Faire ses adieux après un long séjour", phrases:[
    {fr:"Il est vraiment difficile de dire au revoir après tant de temps passé ici.", it:"È davvero difficile dire arrivederci dopo tanto tempo passato qui."},
    {fr:"Cette ville est devenue un peu comme une seconde maison pour moi.", it:"Questa città è diventata un po' come una seconda casa per me."},
    {fr:"Je comprends parfaitement ce sentiment, je l'ai déjà vécu.", it:"Capisco perfettamente questo sentimento, l'ho già vissuto."},
    {fr:"Les amitiés nouées ici me manqueront énormément, c'est certain.", it:"Le amicizie nate qui mi mancheranno enormemente, è certo."},
    {fr:"Rien ne t'empêche de revenir dès que possible, cependant.", it:"Niente ti impedisce di tornare appena possibile, però."},
    {fr:"C'est vrai, et je compte bien le faire dès l'année prochaine.", it:"È vero, e conto davvero di farlo già dall'anno prossimo."},
    {fr:"On restera en contact d'ici là, promis juré.", it:"Resteremo in contatto fino ad allora, promesso."},
    {fr:"Ce genre d'au revoir n'est jamais vraiment définitif, finalement.", it:"Questo tipo di arrivederci non è mai davvero definitivo, in fondo."},
    {fr:"C'est une belle façon de voir les choses, vraiment.", it:"È un bel modo di vedere le cose, davvero."},
    {fr:"Merci pour tout, cette expérience aura changé ma vie.", it:"Grazie per tutto, questa esperienza avrà cambiato la mia vita."}
  ]},
  { title:"Discuter d'une passion commune", phrases:[
    {fr:"Je ne savais pas que tu t'intéressais autant à la photographie.", it:"Non sapevo che ti interessassi tanto alla fotografia."},
    {fr:"C'est une passion qui m'accompagne depuis l'adolescence.", it:"È una passione che mi accompagna dall'adolescenza."},
    {fr:"Quel genre de sujets préfères-tu photographier ?", it:"Che tipo di soggetti preferisci fotografare?"},
    {fr:"Surtout l'architecture ancienne et les rues animées.", it:"Soprattutto l'architettura antica e le strade animate."},
    {fr:"L'Italie doit être un véritable paradis pour toi, alors.", it:"L'Italia deve essere un vero paradiso per te, allora."},
    {fr:"Absolument, je prends des centaines de photos chaque jour.", it:"Assolutamente, scatto centinaia di foto ogni giorno."},
    {fr:"Montre-moi tes préférées un de ces jours, je serais curieux.", it:"Mostrami le tue preferite un giorno di questi, sarei curioso."},
    {fr:"Avec grand plaisir, j'adore partager ce travail.", it:"Con grande piacere, adoro condividere questo lavoro."},
    {fr:"On pourrait même sortir photographier ensemble, un matin.", it:"Potremmo anche uscire a fotografare insieme, una mattina."},
    {fr:"Excellente idée, l'aube offre toujours la plus belle lumière.", it:"Ottima idea, l'alba offre sempre la luce più bella."}
  ], tip:{
    title:"« Da » : point de départ dans le temps",
    example:"C'est une passion qui m'accompagne depuis l'adolescence. — È una passione che mi accompagna dall'adolescenza.",
    body:"« Dall'adolescenza » contracte « da » et « l'adolescenza » (de l'adolescence), tout comme « dal » contracte « da » et « il ». Cette préposition marque un point de départ dans le temps qui se prolonge jusqu'à aujourd'hui, exactement comme « depuis » en français."
  }},
  { title:"Réconcilier deux amis", phrases:[
    {fr:"J'ai remarqué une certaine tension entre vous deux récemment.", it:"Ho notato una certa tensione tra voi due recentemente."},
    {fr:"Oui, nous avons eu un petit malentendu stupide.", it:"Sì, abbiamo avuto un piccolo malinteso stupido."},
    {fr:"Est-ce que vous en avez discuté calmement depuis ?", it:"Ne avete discusso con calma da allora?"},
    {fr:"Pas encore vraiment, chacun attend que l'autre fasse le premier pas.", it:"Non ancora davvero, ognuno aspetta che l'altro faccia il primo passo."},
    {fr:"Et si tu étais celui qui fait ce premier pas, pour une fois ?", it:"E se fossi tu a fare questo primo passo, per una volta?"},
    {fr:"Tu as probablement raison, l'orgueil ne mène jamais à rien de bon.", it:"Hai probabilmente ragione, l'orgoglio non porta mai a niente di buono."},
    {fr:"Une amitié solide vaut largement la peine d'un peu d'humilité.", it:"Un'amicizia solida vale ampiamente la pena di un po' di umiltà."},
    {fr:"Je vais l'appeler dès ce soir pour arranger les choses.", it:"Lo chiamerò già stasera per sistemare le cose."},
    {fr:"C'est une excellente décision, je suis fier de toi.", it:"È un'ottima decisione, sono fiero di te."},
    {fr:"Merci de m'avoir poussé dans la bonne direction.", it:"Grazie di avermi spinto nella direzione giusta."}
  ], tip:{
    title:"« Chi » au sens de « celui qui »",
    example:"Et si tu étais celui qui fait ce premier pas ? — E se fossi tu a fare questo primo passo?",
    body:"Dans la langue courante, « chi » peut remplacer toute une proposition relative : « chi fa il primo passo » signifie « celui qui fait le premier pas ». C'est un pronom très pratique qui évite des tournures plus lourdes."
  }},
  { title:"Fin du module : un dernier regard", phrases:[
    {fr:"Ce module nous a menés vers des conversations bien plus profondes.", it:"Questo modulo ci ha portato verso conversazioni molto più profonde."},
    {fr:"On ne parle plus seulement de restaurants ou d'hôtels.", it:"Non si parla più solo di ristoranti o hotel."},
    {fr:"On discute désormais d'émotions, d'opinions et de rêves.", it:"Ormai si discute di emozioni, opinioni e sogni."},
    {fr:"C'est exactement ça, parler une vraie langue vivante.", it:"È esattamente questo, parlare una vera lingua viva."},
    {fr:"Tu as terminé l'intégralité du Niveau 2, félicitations !", it:"Hai terminato l'intero Livello 2, congratulazioni!"},
    {fr:"Six cents nouvelles phrases et quinze points de grammaire en plus.", it:"Seicento nuove frasi e quindici punti di grammatica in più."},
    {fr:"Le Niveau 3 t'attend pour un italien encore plus naturel.", it:"Il Livello 3 ti aspetta per un italiano ancora più naturale."},
    {fr:"J'ai vraiment hâte de continuer vers ce niveau de maîtrise.", it:"Non vedo davvero l'ora di continuare verso questo livello di padronanza."},
    {fr:"Tes progrès sont réellement impressionnants depuis le début.", it:"I tuoi progressi sono davvero impressionanti dall'inizio."},
    {fr:"Continue ainsi, la fluidité n'est plus très loin désormais.", it:"Continua così, la fluidità non è più molto lontana ormai."}
  ]}
];

/* ============================================================
   NIVEAU 3
   ============================================================ */

const level3Module1Lessons = [
  { title:"S'installer durablement à Rome", phrases:[
    {fr:"Après plusieurs séjours, j'ai finalement décidé de m'installer à Rome pour de bon.", it:"Dopo diversi soggiorni, ho finalmente deciso di stabilirmi a Roma per sempre."},
    {fr:"Les démarches administratives se sont révélées bien plus complexes que prévu.", it:"Le procedure amministrative si sono rivelate molto più complesse del previsto."},
    {fr:"Il a fallu que je rassemble une quantité impressionnante de documents.", it:"Ho dovuto raccogliere una quantità impressionante di documenti."},
    {fr:"Sans l'aide d'un ami italien, je m'y serais probablement perdu.", it:"Senza l'aiuto di un amico italiano, probabilmente mi sarei perso."},
    {fr:"La bureaucratie semble parfois conçue pour tester notre patience.", it:"La burocrazia a volte sembra concepita per testare la nostra pazienza."},
    {fr:"Malgré tout, je ne regrette absolument pas cette décision.", it:"Nonostante tutto, non rimpiango assolutamente questa decisione."},
    {fr:"Chaque difficulté rencontrée en valait largement la récompense.", it:"Ogni difficoltà incontrata ne valeva ampiamente la ricompensa."},
    {fr:"Je me sens désormais pleinement intégré dans mon quartier.", it:"Ora mi sento pienamente integrato nel mio quartiere."},
    {fr:"Les voisins m'ont accueilli avec une générosité qui m'a bouleversé.", it:"I vicini mi hanno accolto con una generosità che mi ha sconvolto."},
    {fr:"Je ne me serais jamais imaginé me sentir aussi chez moi ailleurs.", it:"Non avrei mai immaginato di sentirmi così a casa altrove."}
  ], tip:{
    title:"« Senza che » + subjonctif",
    example:"Senza che me ne rendessi davvero conto.",
    body:"« Senza che » (sans que) est toujours suivi du subjonctif en italien, exactement comme en français. « Senza che me ne rendessi conto » signifie « sans que je m'en rende compte » : une structure fréquente pour exprimer une action qui échappe à notre conscience."
  }},
  { title:"Gérer ses finances dans un nouveau pays", phrases:[
    {fr:"Ouvrir un compte bancaire s'est avéré étonnamment laborieux.", it:"Aprire un conto bancario si è rivelato sorprendentemente laborioso."},
    {fr:"Chaque banque semblait exiger des documents légèrement différents.", it:"Ogni banca sembrava richiedere documenti leggermente diversi."},
    {fr:"J'aurais dû me renseigner bien davantage avant de me lancer.", it:"Avrei dovuto informarmi molto di più prima di lanciarmi."},
    {fr:"Une fois le compte ouvert, tout est heureusement devenu plus simple.", it:"Una volta aperto il conto, per fortuna tutto è diventato più semplice."},
    {fr:"Je dois encore m'habituer à certaines habitudes fiscales locales.", it:"Devo ancora abituarmi a certe abitudini fiscali locali."},
    {fr:"Les impôts fonctionnent ici selon un système bien différent du nôtre.", it:"Le tasse funzionano qui secondo un sistema molto diverso dal nostro."},
    {fr:"Un comptable local m'a grandement facilité la compréhension du système.", it:"Un contabile locale mi ha enormemente facilitato la comprensione del sistema."},
    {fr:"Je lui en suis sincèrement reconnaissant pour sa patience.", it:"Gliene sono sinceramente grato per la sua pazienza."},
    {fr:"Gérer son argent à l'étranger demande une vraie rigueur.", it:"Gestire il proprio denaro all'estero richiede un vero rigore."},
    {fr:"Mais on finit toujours par trouver ses marques, avec le temps.", it:"Ma si finisce sempre per trovare il proprio equilibrio, col tempo."}
  ], tip:{
    title:"Le conditionnel passé : « avrei dovuto »",
    example:"J'aurais dû me renseigner bien davantage avant de me lancer. — Avrei dovuto informarmi molto di più prima di lanciarmi.",
    body:"Le conditionnel passé italien (« avrei dovuto », « sarebbe stato ») exprime un regret ou une action qui aurait pu se passer différemment, exactement comme « j'aurais dû » en français. Il se forme avec le conditionnel de l'auxiliaire suivi du participe passé."
  }},
  { title:"Les relations de voisinage", phrases:[
    {fr:"Mon voisin du dessus organise régulièrement des repas improvisés sur son balcon.", it:"Il mio vicino di sopra organizza regolarmente cene improvvisate sul suo balcone."},
    {fr:"Il nous invite presque systématiquement dès qu'il sent l'odeur de sa cuisine.", it:"Ci invita quasi sistematicamente appena sente l'odore della sua cucina."},
    {fr:"Cette spontanéité contraste énormément avec ce dont j'avais l'habitude.", it:"Questa spontaneità contrasta enormemente con quello a cui ero abituato."},
    {fr:"Les relations entre voisins semblent beaucoup plus chaleureuses qu'ailleurs.", it:"I rapporti tra vicini sembrano molto più calorosi che altrove."},
    {fr:"On s'échange volontiers des outils, des recettes et parfois des conseils.", it:"Ci si scambia volentieri attrezzi, ricette e a volte consigli."},
    {fr:"J'ai même appris à préparer un plat typique grâce à eux.", it:"Ho persino imparato a preparare un piatto tipico grazie a loro."},
    {fr:"Cette proximité humaine me manquait sans que je m'en rende vraiment compte.", it:"Questa vicinanza umana mi mancava senza che me ne rendessi davvero conto."},
    {fr:"Je comprends désormais mieux pourquoi on parle tant de la convivialité italienne.", it:"Ora capisco meglio perché si parla tanto della convivialità italiana."},
    {fr:"Ce genre de lien social ne s'invente pas, il se cultive patiemment.", it:"Questo tipo di legame sociale non si inventa, si coltiva con pazienza."},
    {fr:"Je me considère vraiment chanceux d'avoir atterri dans ce quartier.", it:"Mi considero davvero fortunato di essere finito in questo quartiere."}
  ]},
  { title:"Adopter de nouvelles habitudes culinaires", phrases:[
    {fr:"J'ai complètement changé ma façon de faire mes courses depuis mon arrivée.", it:"Ho completamente cambiato il mio modo di fare la spesa da quando sono arrivato."},
    {fr:"Je privilégie désormais les petits commerçants plutôt que les grandes surfaces.", it:"Ora privilegio i piccoli commercianti piuttosto che i grandi supermercati."},
    {fr:"Le boucher du coin connaît mes préférences mieux que moi-même.", it:"Il macellaio dell'angolo conosce le mie preferenze meglio di me stesso."},
    {fr:"Cuisiner devient presque un rituel quotidien plutôt qu'une simple corvée.", it:"Cucinare diventa quasi un rituale quotidiano piuttosto che una semplice faccenda."},
    {fr:"Je passe beaucoup plus de temps à préparer mes repas qu'auparavant.", it:"Passo molto più tempo a preparare i miei pasti rispetto a prima."},
    {fr:"Étonnamment, je ne trouve plus ça fatigant, mais plutôt apaisant.", it:"Sorprendentemente, non lo trovo più faticoso, ma piuttosto rilassante."},
    {fr:"Les saisons dictent véritablement ce que je mange chaque semaine.", it:"Le stagioni dettano davvero ciò che mangio ogni settimana."},
    {fr:"Je n'avais jamais autant prêté attention à la provenance des aliments.", it:"Non avevo mai prestato così tanta attenzione alla provenienza del cibo."},
    {fr:"Cette approche change radicalement mon rapport à la nourriture.", it:"Questo approccio cambia radicalmente il mio rapporto con il cibo."},
    {fr:"Je mangeais mieux sans même m'en apercevoir, finalement.", it:"Mangiavo meglio senza nemmeno accorgermene, in fondo."}
  ]},
  { title:"Trouver un équilibre entre travail et vie personnelle", phrases:[
    {fr:"Dans mon ancien emploi, je travaillais sans compter mes heures.", it:"Nel mio vecchio lavoro, lavoravo senza contare le ore."},
    {fr:"Depuis mon installation ici, mon rapport au travail a profondément évolué.", it:"Da quando mi sono stabilito qui, il mio rapporto con il lavoro si è profondamente evoluto."},
    {fr:"Mes collègues italiens accordent une importance considérable à leur temps libre.", it:"I miei colleghi italiani danno un'importanza considerevole al loro tempo libero."},
    {fr:"Au début, cette mentalité me semblait presque déroutante.", it:"All'inizio, questa mentalità mi sembrava quasi disorientante."},
    {fr:"J'ai pourtant fini par adopter une approche bien plus équilibrée.", it:"Ho però finito per adottare un approccio molto più equilibrato."},
    {fr:"Je consacre désormais plus de temps à mes proches qu'à mon ordinateur.", it:"Ora dedico più tempo ai miei cari che al mio computer."},
    {fr:"Cette évolution a eu un effet remarquable sur mon bien-être général.", it:"Questa evoluzione ha avuto un effetto notevole sul mio benessere generale."},
    {fr:"Je dors mieux, je mange mieux, je ris sans doute plus souvent aussi.", it:"Dormo meglio, mangio meglio, probabilmente rido anche più spesso."},
    {fr:"Je ne retournerais jamais en arrière, quelles que soient les circonstances.", it:"Non tornerei mai indietro, qualunque siano le circostanze."},
    {fr:"Certains changements ne se mesurent pas uniquement en termes financiers.", it:"Alcuni cambiamenti non si misurano solo in termini finanziari."}
  ], tip:{
    title:"« Quelle che siano » : quelles que soient",
    example:"Je ne retournerais jamais en arrière, quelles que soient les circonstances. — Non tornerei mai indietro, qualunque siano le circostanze.",
    body:"« Qualunque » suivi du subjonctif exprime une concession totale, équivalente à « quel que soit » ou « quelles que soient » en français. On le trouve aussi sous la forme « qualsiasi », avec un sens très proche."
  }},
  { title:"Discuter des différences culturelles au travail", phrases:[
    {fr:"Les réunions ici se déroulent de façon beaucoup moins formelle qu'en France.", it:"Le riunioni qui si svolgono in modo molto meno formale che in Francia."},
    {fr:"On discute souvent de sujets personnels avant même d'aborder le travail.", it:"Si parla spesso di argomenti personali prima ancora di affrontare il lavoro."},
    {fr:"J'ai mis du temps à comprendre que ce n'était absolument pas une perte de temps.", it:"Ho impiegato tempo a capire che questo non era assolutamente una perdita di tempo."},
    {fr:"Au contraire, ça renforce considérablement la confiance entre collègues.", it:"Al contrario, rafforza notevolmente la fiducia tra colleghi."},
    {fr:"Les décisions semblent parfois prendre plus de temps à se concrétiser.", it:"Le decisioni a volte sembrano richiedere più tempo per concretizzarsi."},
    {fr:"Mais une fois prises, elles bénéficient d'une adhésion bien plus solide.", it:"Ma una volta prese, godono di un'adesione molto più solida."},
    {fr:"Je trouve cette approche finalement plus durable que l'efficacité à tout prix.", it:"Trovo questo approccio alla fine più duraturo dell'efficienza a ogni costo."},
    {fr:"Mes collègues apprécient visiblement ma volonté de m'adapter à leurs usages.", it:"I miei colleghi apprezzano visibilmente la mia volontà di adattarmi ai loro usi."},
    {fr:"S'intégrer professionnellement demande autant d'humilité que de patience.", it:"Integrarsi professionalmente richiede tanta umiltà quanta pazienza."},
    {fr:"Je pense sincèrement en être ressorti meilleur professionnel.", it:"Penso sinceramente di esserne uscito un professionista migliore."}
  ]},
  { title:"Apprendre un dialecte régional", phrases:[
    {fr:"Au-delà de l'italien standard, chaque région possède son propre dialecte vivant.", it:"Oltre all'italiano standard, ogni regione possiede un proprio dialetto vivo."},
    {fr:"Certains de mes voisins ne parlent presque qu'en dialecte entre eux.", it:"Alcuni dei miei vicini parlano quasi solo in dialetto tra loro."},
    {fr:"J'ai commencé à en retenir quelques expressions, presque par jeu.", it:"Ho cominciato a memorizzarne qualche espressione, quasi per gioco."},
    {fr:"Les gens semblent toujours ravis qu'un étranger s'y intéresse.", it:"Le persone sembrano sempre felici che uno straniero se ne interessi."},
    {fr:"Ça crée une complicité immédiate, presque impossible à atteindre autrement.", it:"Crea una complicità immediata, quasi impossibile da raggiungere altrimenti."},
    {fr:"Certains mots n'ont d'ailleurs aucun équivalent exact en italien standard.", it:"Alcune parole peraltro non hanno alcun equivalente esatto nell'italiano standard."},
    {fr:"Ils traduisent des nuances culturelles très spécifiques à la région.", it:"Traducono sfumature culturali molto specifiche della regione."},
    {fr:"Cette richesse linguistique me fascine chaque jour un peu plus.", it:"Questa ricchezza linguistica mi affascina ogni giorno un po' di più."},
    {fr:"Je ne maîtriserai probablement jamais totalement ce dialecte, et ça me va.", it:"Probabilmente non padroneggerò mai del tutto questo dialetto, e va bene così."},
    {fr:"L'essentiel reste l'intention et le respect qu'on y met.", it:"L'essenziale resta l'intenzione e il rispetto che ci si mette."}
  ], tip:{
    title:"Le futur pour atténuer une affirmation",
    example:"Probablement non padroneggerò mai del tutto questo dialetto, et va bene così. — Probabilmente non padroneggerò mai del tutto questo dialetto, e va bene così.",
    body:"Le futur simple italien (« padroneggerò ») s'emploie parfois, comme en français, pour exprimer une affirmation nuancée sur l'avenir plutôt qu'une certitude absolue. Associé à « probabilmente » (probablement), il adoucit encore davantage le propos."
  }},
  { title:"Participer à une fête de quartier", phrases:[
    {fr:"Chaque été, mon quartier organise une fête qui dure plusieurs jours entiers.", it:"Ogni estate, il mio quartiere organizza una festa che dura diversi giorni interi."},
    {fr:"Les rues se transforment entièrement, décorées de guirlandes colorées.", it:"Le strade si trasformano completamente, decorate con ghirlande colorate."},
    {fr:"Chaque famille contribue à sa façon, qu'il s'agisse de nourriture ou de musique.", it:"Ogni famiglia contribuisce a modo suo, sia con il cibo che con la musica."},
    {fr:"J'ai proposé d'apporter des gâteaux français, par curiosité et par envie de partager.", it:"Ho proposto di portare dei dolci francesi, per curiosità e voglia di condividere."},
    {fr:"Ils ont été accueillis avec un enthousiasme qui m'a sincèrement touché.", it:"Sono stati accolti con un entusiasmo che mi ha sinceramente toccato."},
    {fr:"Ce genre d'événement renforce véritablement le sentiment d'appartenance collective.", it:"Questo tipo di evento rafforza davvero il senso di appartenenza collettiva."},
    {fr:"Je n'avais jamais vécu une telle ambiance dans mon pays d'origine.", it:"Non avevo mai vissuto un'atmosfera simile nel mio paese d'origine."},
    {fr:"Les enfants, les adultes et les anciens se mélangent sans la moindre distinction.", it:"Bambini, adulti e anziani si mescolano senza la minima distinzione."},
    {fr:"Cette solidarité intergénérationnelle mérite vraiment d'être soulignée.", it:"Questa solidarietà intergenerazionale merita davvero di essere sottolineata."},
    {fr:"J'attends désormais cette fête chaque année avec une impatience sincère.", it:"Ormai aspetto questa festa ogni anno con sincera impazienza."}
  ]},
  { title:"Faire face à la nostalgie du pays d'origine", phrases:[
    {fr:"Malgré mon bonheur ici, certains jours la nostalgie me saisit sans prévenir.", it:"Nonostante la mia felicità qui, certi giorni la nostalgia mi colpisce senza preavviso."},
    {fr:"Ce sont souvent de petits détails qui me ramènent brutalement en France.", it:"Sono spesso piccoli dettagli a riportarmi bruscamente in Francia."},
    {fr:"Une odeur, une chanson, ou simplement une lumière particulière suffisent.", it:"Un odore, una canzone, o semplicemente una luce particolare bastano."},
    {fr:"J'ai appris à ne plus combattre ce sentiment, mais à l'accueillir simplement.", it:"Ho imparato a non combattere più questo sentimento, ma semplicemente ad accoglierlo."},
    {fr:"Il ne remet absolument pas en question mon choix de vivre ici.", it:"Non rimette assolutamente in discussione la mia scelta di vivere qui."},
    {fr:"On peut parfaitement aimer deux endroits à la fois, finalement.", it:"Si può amare perfettamente due posti al tempo stesso, in fondo."},
    {fr:"Appeler ma famille régulièrement m'aide énormément à apaiser ce sentiment.", it:"Chiamare regolarmente la mia famiglia mi aiuta enormemente a calmare questo sentimento."},
    {fr:"Je rentre aussi deux ou trois fois par an, lorsque c'est possible.", it:"Torno anche due o tre volte all'anno, quando è possibile."},
    {fr:"Ces visites me permettent de recharger mes batteries affectives.", it:"Queste visite mi permettono di ricaricare le mie batterie affettive."},
    {fr:"Avoir deux maisons dans son cœur n'est finalement pas une malédiction.", it:"Avere due case nel proprio cuore non è alla fine una maledizione."}
  ]},
  { title:"S'adapter aux rythmes saisonniers", phrases:[
    {fr:"L'été romain impose un rythme de vie complètement différent de l'hiver.", it:"L'estate romana impone un ritmo di vita completamente diverso dall'inverno."},
    {fr:"La chaleur devient parfois si intense qu'elle dicte littéralement nos journées.", it:"Il caldo diventa a volte così intenso che dettata letteralmente le nostre giornate."},
    {fr:"Les commerces ferment souvent en début d'après-midi, puis rouvrent plus tard.", it:"I negozi spesso chiudono a inizio pomeriggio, poi riaprono più tardi."},
    {fr:"Au début, cette organisation me semblait étrange et peu pratique.", it:"All'inizio, questa organizzazione mi sembrava strana e poco pratica."},
    {fr:"J'ai fini par comprendre sa logique profondément liée au climat local.", it:"Ho finito per capire la sua logica profondamente legata al clima locale."},
    {fr:"Désormais, je fais aussi une sieste lorsque la chaleur devient insupportable.", it:"Ormai, faccio anche un pisolino quando il caldo diventa insopportabile."},
    {fr:"Cette habitude, autrefois impensable pour moi, me semble aujourd'hui essentielle.", it:"Questa abitudine, un tempo impensabile per me, mi sembra oggi essenziale."},
    {fr:"L'hiver, au contraire, ramène une atmosphère bien plus calme et intérieure.", it:"L'inverno, al contrario, riporta un'atmosfera molto più calma e interiore."},
    {fr:"Chaque saison apporte finalement son propre équilibre et ses propres plaisirs.", it:"Ogni stagione porta alla fine il proprio equilibrio e i propri piaceri."},
    {fr:"Vivre au rythme d'un pays, c'est aussi apprendre à respecter sa nature.", it:"Vivere al ritmo di un paese significa anche imparare a rispettare la sua natura."}
  ]},
  { title:"Recevoir sa famille venue de France", phrases:[
    {fr:"Mes parents sont enfin venus me rendre visite après plusieurs mois d'attente.", it:"I miei genitori sono finalmente venuti a visitarmi dopo diversi mesi di attesa."},
    {fr:"J'avais hâte de leur montrer la vie que je m'étais construite ici.", it:"Non vedevo l'ora di mostrare loro la vita che mi ero costruito qui."},
    {fr:"Ils ont été surpris de me voir parler italien avec une telle aisance.", it:"Sono stati sorpresi di vedermi parlare italiano con tanta disinvoltura."},
    {fr:"Mon père n'arrêtait pas de me poser des questions sur chaque détail.", it:"Mio padre non smetteva di farmi domande su ogni dettaglio."},
    {fr:"Ma mère, quant à elle, s'est instantanément liée d'amitié avec mes voisins.", it:"Mia madre, invece, si è legata istantaneamente d'amicizia con i miei vicini."},
    {fr:"Les voir s'intégrer aussi facilement m'a remué bien plus que je ne l'imaginais.", it:"Vederli integrarsi così facilmente mi ha commosso molto più di quanto immaginassi."},
    {fr:"On a passé des heures à table, exactement comme les Italiens aiment le faire.", it:"Abbiamo passato ore a tavola, esattamente come piace fare agli italiani."},
    {fr:"Leur visite a rendu cette nouvelle vie encore plus réelle et tangible.", it:"La loro visita ha reso questa nuova vita ancora più reale e tangibile."},
    {fr:"Au moment de partir, ma mère pleurait presque autant que moi.", it:"Al momento di partire, mia madre piangeva quasi tanto quanto me."},
    {fr:"Ils reviendront, c'est certain, et j'en suis profondément heureux.", it:"Torneranno, è certo, e ne sono profondamente felice."}
  ]},
  { title:"Gérer un conflit administratif", phrases:[
    {fr:"J'ai reçu un courrier contenant une erreur manifeste sur mon nom de famille.", it:"Ho ricevuto una lettera contenente un errore evidente sul mio cognome."},
    {fr:"Corriger ce genre de détail s'est révélé plus compliqué qu'escompté.", it:"Correggere questo tipo di dettaglio si è rivelato più complicato del previsto."},
    {fr:"J'ai dû me présenter en personne à plusieurs guichets différents.", it:"Ho dovuto presentarmi di persona a diversi uffici differenti."},
    {fr:"Chaque fonctionnaire me renvoyait vers un service soi-disant plus compétent.", it:"Ogni funzionario mi rimandava verso un ufficio presumibilmente più competente."},
    {fr:"J'ai fini par perdre patience, ce qui, je l'admets, n'a rien arrangé.", it:"Ho finito per perdere la pazienza, cosa che, lo ammetto, non ha migliorato nulla."},
    {fr:"Un employé particulièrement bienveillant a finalement résolu le problème en dix minutes.", it:"Un impiegato particolarmente gentile ha finalmente risolto il problema in dieci minuti."},
    {fr:"Cette expérience m'a appris une leçon précieuse sur la patience nécessaire ici.", it:"Questa esperienza mi ha insegnato una lezione preziosa sulla pazienza necessaria qui."},
    {fr:"Je garde désormais une copie de chaque document, par simple précaution.", it:"Ora conservo una copia di ogni documento, per semplice precauzione."},
    {fr:"L'administration reste décidément un défi, quel que soit le pays concerné.", it:"L'amministrazione resta decisamente una sfida, qualunque sia il paese in questione."},
    {fr:"Mais rien n'est jamais totalement insurmontable avec un peu de persévérance.", it:"Ma niente è mai del tutto insormontabile con un po' di perseveranza."}
  ]},
  { title:"Apprécier la lenteur italienne", phrases:[
    {fr:"Beaucoup de choses prennent ici manifestement plus de temps qu'ailleurs.", it:"Molte cose qui richiedono visibilmente più tempo che altrove."},
    {fr:"Au début, cette lenteur générale m'exaspérait sincèrement.", it:"All'inizio, questa lentezza generale mi esasperava sinceramente."},
    {fr:"J'étais habitué à une efficacité presque obsessionnelle dans mon ancien quotidien.", it:"Ero abituato a un'efficienza quasi ossessiva nella mia vecchia quotidianità."},
    {fr:"Petit à petit, j'ai commencé à percevoir cette lenteur différemment.", it:"Poco a poco, ho cominciato a percepire questa lentezza in modo diverso."},
    {fr:"Elle laisse en réalité beaucoup plus de place à l'inattendu et à l'humain.", it:"In realtà lascia molto più spazio all'imprevisto e all'umano."},
    {fr:"Un simple café peut désormais devenir l'occasion d'une vraie conversation.", it:"Un semplice caffè può ormai diventare l'occasione per una vera conversazione."},
    {fr:"Je ne cours plus constamment après le temps comme je le faisais avant.", it:"Non corro più costantemente dietro al tempo come facevo prima."},
    {fr:"Cette transformation intérieure a été bien plus profonde que je ne l'anticipais.", it:"Questa trasformazione interiore è stata molto più profonda di quanto anticipassi."},
    {fr:"Je me sens globalement plus apaisé depuis que j'ai accepté ce rythme.", it:"Mi sento globalmente più sereno da quando ho accettato questo ritmo."},
    {fr:"Certaines leçons de vie s'apprennent vraiment en changeant simplement de pays.", it:"Alcune lezioni di vita si imparano davvero semplicemente cambiando paese."}
  ]},
  { title:"Faire la différence entre politesse et sincérité", phrases:[
    {fr:"Au début, je confondais souvent politesse formelle et véritable sincérité.", it:"All'inizio, confondevo spesso la cortesia formale con la vera sincerità."},
    {fr:"Certaines expressions polies ne traduisent pas forcément une intention profonde.", it:"Alcune espressioni cortesi non traducono necessariamente un'intenzione profonda."},
    {fr:"J'ai appris progressivement à distinguer les deux dans le ton employé.", it:"Ho imparato progressivamente a distinguere le due cose nel tono usato."},
    {fr:"Un sourire sincère se reconnaît toujours, peu importe la culture concernée.", it:"Un sorriso sincero si riconosce sempre, indipendentemente dalla cultura in questione."},
    {fr:"Les Italiens que j'ai rencontrés savent exprimer leurs émotions sans grande retenue.", it:"Gli italiani che ho incontrato sanno esprimere le proprie emozioni senza grande riserbo."},
    {fr:"Cette franchise directe m'a d'abord déstabilisé, avant de me plaire énormément.", it:"Questa franchezza diretta mi ha prima destabilizzato, prima di piacermi enormemente."},
    {fr:"On sait généralement très vite où l'on se situe avec quelqu'un.", it:"Si sa generalmente molto in fretta dove ci si trova con qualcuno."},
    {fr:"Cette transparence relationnelle facilite étonnamment la construction d'amitiés durables.", it:"Questa trasparenza relazionale facilita sorprendentemente la costruzione di amicizie durature."},
    {fr:"Je préfère nettement cette approche à une politesse purement superficielle.", it:"Preferisco decisamente questo approccio a una cortesia puramente superficiale."},
    {fr:"Comprendre ces nuances culturelles a changé ma manière de communiquer.", it:"Capire queste sfumature culturali ha cambiato il mio modo di comunicare."}
  ]},
  { title:"Trouver sa place dans une nouvelle communauté", phrases:[
    {fr:"Intégrer un groupe d'amis déjà bien établi n'a rien d'évident au départ.", it:"Integrarsi in un gruppo di amici già ben consolidato non è affatto facile all'inizio."},
    {fr:"J'ai rejoint un club de course à pied simplement pour sortir de ma routine.", it:"Mi sono unito a un gruppo di corsa semplicemente per uscire dalla mia routine."},
    {fr:"Les premières sorties étaient teintées d'une timidité assez inconfortable.", it:"Le prime uscite erano segnate da una timidezza piuttosto scomoda."},
    {fr:"Au fil des semaines, les conversations sont devenues bien plus naturelles.", it:"Con il passare delle settimane, le conversazioni sono diventate molto più naturali."},
    {fr:"Courir ensemble crée un lien particulier, difficile à décrire autrement.", it:"Correre insieme crea un legame particolare, difficile da descrivere altrimenti."},
    {fr:"On partage l'effort, la fatigue, et finalement une vraie complicité silencieuse.", it:"Si condivide lo sforzo, la fatica, e alla fine una vera complicità silenziosa."},
    {fr:"Je me suis rendu compte que je comptais déjà parmi les membres les plus anciens.", it:"Mi sono rendu conto di contare già tra i membri più anziani."},
    {fr:"Cette évolution s'est faite si naturellement que je ne l'ai presque pas remarquée.", it:"Questa evoluzione è avvenuta così naturalmente che quasi non l'ho notata."},
    {fr:"Appartenir véritablement à un groupe demande du temps, mais ça finit par arriver.", it:"Appartenere davvero a un gruppo richiede tempo, ma alla fine succede."},
    {fr:"Aujourd'hui, ce sont eux qui m'invitent, et non plus l'inverse.", it:"Oggi, sono loro a invitarmi, e non più il contrario."}
  ]},
  { title:"Repenser sa définition du bonheur", phrases:[
    {fr:"Avant de m'installer ici, je mesurais le bonheur presque uniquement en termes de réussite professionnelle.", it:"Prima di stabilirmi qui, misuravo la felicità quasi solo in termini di successo professionale."},
    {fr:"Cette définition s'est progressivement élargie à mesure que ma vie changeait.", it:"Questa definizione si è progressivamente ampliata man mano che la mia vita cambiava."},
    {fr:"Un repas partagé, une conversation sincère comptent désormais autant qu'une promotion.", it:"Un pasto condiviso, una conversazione sincera contano ora quanto una promozione."},
    {fr:"Je ne dis pas que l'ambition a totalement disparu, loin de là.", it:"Non dico che l'ambizione sia del tutto scomparsa, lontano da questo."},
    {fr:"Simplement, elle occupe désormais une place plus raisonnable dans mes priorités.", it:"Semplicemente, ora occupa un posto più ragionevole tra le mie priorità."},
    {fr:"Les petites joies quotidiennes ont pris une importance que je négligeais autrefois.", it:"Le piccole gioie quotidiane hanno preso un'importanza che prima trascuravo."},
    {fr:"Un ciel dégagé, un café partagé, un fou rire entre amis suffisent souvent.", it:"Un cielo sereno, un caffè condiviso, una risata tra amici bastano spesso."},
    {fr:"Je me sens globalement plus apaisé face à l'avenir qu'auparavant.", it:"Mi sento globalmente più sereno di fronte al futuro rispetto a prima."},
    {fr:"Ce changement de perspective doit beaucoup à mon expérience italienne.", it:"Questo cambiamento di prospettiva deve molto alla mia esperienza italiana."},
    {fr:"Je ne saurai jamais vraiment comment j'aurais évolué sans ce déménagement.", it:"Non saprò mai davvero come sarei evoluto senza questo trasferimento."}
  ]},
  { title:"Transmettre ce que l'on a appris", phrases:[
    {fr:"Un nouvel ami français vient d'arriver dans ma ville, totalement perdu.", it:"Un nuovo amico francese è appena arrivato nella mia città, completamente perso."},
    {fr:"Je me reconnais tellement dans sa confusion que ça me fait presque sourire.", it:"Mi riconosco così tanto nella sua confusione che quasi mi fa sorridere."},
    {fr:"J'ai décidé de lui transmettre tout ce que j'avais appris, sans rien garder pour moi.", it:"Ho deciso di trasmettergli tutto ciò che avevo imparato, senza tenere nulla per me."},
    {fr:"Je lui ai présenté mes voisins, mes commerçants préférés, mes petites habitudes.", it:"Gli ho presentato i miei vicini, i miei commercianti preferiti, le mie piccole abitudini."},
    {fr:"Le voir progresser rapidement me procure une satisfaction inattendue.", it:"Vederlo progredire rapidamente mi procura una satisfazione inaspettata."},
    {fr:"C'est en quelque sorte ma façon de rendre ce qu'on m'a offert.", it:"È in un certo senso il mio modo di restituire quello che mi è stato offerto."},
    {fr:"Personne ne réussit vraiment seul une intégration aussi complète que celle-ci.", it:"Nessuno riesce davvero da solo in un'integrazione così completa come questa."},
    {fr:"On avance toujours grâce à ceux qui nous ont précédés sur ce chemin.", it:"Si avanza sempre grazie a chi ci ha precedduto su questo cammino."},
    {fr:"Aider quelqu'un d'autre referme, paradoxalement, une boucle très personnelle.", it:"Aiutare qualcun altro chiude, paradossalmente, un cerchio molto personale."},
    {fr:"Je me sens enfin pleinement ancré dans cette vie que je m'étais choisie.", it:"Mi sento finalmente pienamente radicato in questa vita che mi ero scelto."}
  ]},
  { title:"Apprendre à cuisiner comme les anciens", phrases:[
    {fr:"Une voisine octogénaire a accepté de m'enseigner ses recettes familiales.", it:"Una vicina ottantenne ha accettato di insegnarmi le sue ricette di famiglia."},
    {fr:"Elle refuse catégoriquement d'utiliser la moindre balance de cuisine.", it:"Si rifiuta categoricamente di usare la minima bilancia da cucina."},
    {fr:"Tout se mesure chez elle à l'œil et à l'instinct, après des décennies de pratique.", it:"Tutto si misura da lei a occhio e per istinto, dopo decenni di pratica."},
    {fr:"J'ai dû réapprendre à cuisiner sans suivre aucune recette écrite.", it:"Ho dovuto reimparare a cucinare senza seguire nessuna ricetta scritta."},
    {fr:"Ce changement d'approche m'a semblé déstabilisant au tout début.", it:"Questo cambiamento di approccio mi è sembrato destabilizzante all'inizio."},
    {fr:"Petit à petit, j'ai commencé à faire confiance à mes propres sens.", it:"Poco a poco, ho cominciato a fidarmi dei miei stessi sensi."},
    {fr:"Ses sauces tomates n'ont absolument rien à voir avec celles du commerce.", it:"Le sue salse di pomodoro non hanno assolutamente nulla a che vedere con quelle del commercio."},
    {fr:"Elle me répète sans cesse que la patience constitue le véritable ingrédient secret.", it:"Mi ripete incessantemente che la pazienza costituisce il vero ingrediente segreto."},
    {fr:"Je comprends enfin pourquoi certains plats demandent des heures de préparation.", it:"Capisco finalmente perché certi piatti richiedono ore di preparazione."},
    {fr:"Ces leçons valent largement plus que n'importe quel cours de cuisine payant.", it:"Queste lezioni valgono ampiamente più di qualsiasi corso di cucina pagato."}
  ]},
  { title:"Observer les saisons changer depuis sa fenêtre", phrases:[
    {fr:"Depuis ma fenêtre, j'observe désormais les saisons défiler avec une attention nouvelle.", it:"Dalla mia finestra, ormai osservo le stagioni susseguirsi con un'attenzione nuova."},
    {fr:"Le figuier de la cour change littéralement d'apparence chaque mois.", it:"Il fico del cortile cambia letteralmente aspetto ogni mese."},
    {fr:"Je n'avais jamais pris le temps de remarquer ce genre de détail auparavant.", it:"Non avevo mai preso il tempo di notare questo tipo di dettaglio prima."},
    {fr:"Vivre au même endroit depuis longtemps change radicalement notre perception du temps.", it:"Vivere nello stesso posto da tanto tempo cambia radicalmente la nostra percezione del tempo."},
    {fr:"On devient sensible à des cycles qu'on ignorait complètement auparavant.", it:"Si diventa sensibili a cicli che prima si ignoravano completamente."},
    {fr:"Mes voisins se basent encore sur ces signes naturels pour organiser leurs récoltes.", it:"I miei vicini si basano ancora su questi segni naturali per organizzare i loro raccolti."},
    {fr:"Cette connaissance transmise oralement me fascine toujours autant.", it:"Questa conoscenza trasmessa oralmente mi affascina sempre tanto."},
    {fr:"Elle semble totalement absente de la vie urbaine que je menais auparavant.", it:"Sembra totalmente assente dalla vita urbana che conducevo prima."},
    {fr:"Je me sens désormais réellement connecté au lieu où je vis.", it:"Mi sento ormai davvero connesso al luogo in cui vivo."},
    {fr:"Ce lien avec la nature constitue probablement mon plus grand cadeau de cette installation.", it:"Questo legame con la natura costituisce probabilmente il mio più grande regalo di questa ambientazione."}
  ], tip:{
    title:"« Da tanto tempo » : depuis longtemps",
    example:"Vivre au même endroit depuis longtemps change radicalement notre perception du temps. — Vivere nello stesso posto da tanto tempo cambia radicalmente la nostra percezione del tempo.",
    body:"« Da tanto tempo » (depuis longtemps) suit la même logique que les autres expressions avec « da » vues précédemment : le verbe reste au présent lorsque l'action continue encore maintenant, contrairement au passé composé parfois utilisé en français familier."
  }},
  { title:"Fin du module : un nouveau chez-soi", phrases:[
    {fr:"Ce module a retracé toute une installation, avec ses joies et ses embûches.", it:"Questo modulo ha raccontato tutta un'ambientazione, con le sue gioie e i suoi ostacoli."},
    {fr:"Chaque difficulté administrative ou culturelle a fini par se transformer en apprentissage.", it:"Ogni difficoltà amministrativa o culturale ha finito per trasformarsi in apprendimento."},
    {fr:"Ton italien reflète désormais une aisance digne d'un vrai quotidien vécu.", it:"Il tuo italiano riflette ora una disinvoltura degna di una vera quotidianità vissuta."},
    {fr:"Tu maîtrises des structures bien plus complexes qu'au début de ce parcours.", it:"Padroneggi strutture molto più complesse rispetto all'inizio di questo percorso."},
    {fr:"Chaque nuance apprise ici te rapproche d'une véritable fluidité naturelle.", it:"Ogni nuance imparata qui ti avvicina a una vera fluidità naturale."},
    {fr:"Tu as terminé le module « Le quotidien » du Niveau 3 !", it:"Hai terminato il modulo « La vita quotidiana » del Livello 3!"},
    {fr:"Le prochain module t'emmènera vers des situations de voyage plus avancées encore.", it:"Il prossimo modulo ti porterà verso situazioni di viaggio ancora più avanzate."},
    {fr:"J'ai hâte de voir jusqu'où cette aventure linguistique va te mener.", it:"Non vedo l'ora di vedere dove questa avventura linguistica ti porterà."},
    {fr:"Chaque module franchi te rapproche un peu plus d'un italien véritablement naturel.", it:"Ogni modulo superato ti avvicina un po' di più a un italiano davvero naturale."},
    {fr:"Continue avec la même détermination, les résultats parlent déjà d'eux-mêmes.", it:"Continua con la stessa determinazione, i risultati parlano già da soli."}
  ]}
];

const level3Module2Lessons = [
  { title:"Organiser un road trip en Sicile", phrases:[
    {fr:"Nous avons décidé de parcourir l'intégralité de la Sicile en voiture.", it:"Abbiamo deciso di percorrere l'intera Sicilia in macchina."},
    {fr:"L'île regorge de paysages si variés qu'on a du mal à y croire.", it:"L'isola pullula di paesaggi così variati che è difficile crederci."},
    {fr:"En une seule journée, on passe de plages dorées à des volcans fumants.", it:"In una sola giornata, si passa da spiagge dorate a vulcani fumanti."},
    {fr:"Conduire sur ces petites routes sinueuses demande une concentration de tous les instants.", it:"Guidare su queste piccole strade tortuose richiede una concentrazione costante."},
    {fr:"Chaque village semble raconter une histoire différente, mêlant influences grecques et arabes.", it:"Ogni paese sembra raccontare una storia diversa, mescolando influenze greche e arabe."},
    {fr:"Cette superposition de cultures se ressent jusque dans l'architecture la plus modeste.", it:"Questa sovrapposizione di culture si avverte persino nell'architettura più modesta."},
    {fr:"Nous avons prévu de nous arrêter dans chaque petite ville qui nous intrigue.", it:"Abbiamo previsto di fermarci in ogni piccola città che ci incuriosisce."},
    {fr:"Ce genre de voyage sans itinéraire rigide laisse place à de vraies découvertes.", it:"Questo tipo di viaggio senza itinerario rigido lascia spazio a vere scoperte."},
    {fr:"On s'attend à devoir réviser nos plans presque chaque jour.", it:"Ci aspettiamo di dover rivedere i nostri piani quasi ogni giorno."},
    {fr:"C'est justement cette flexibilité qui rend l'aventure aussi excitante.", it:"È proprio questa flessibilità che rende l'avventura così eccitante."}
  ], tip:{
    title:"« Avere difficoltà a crederci »",
    example:"L'île regorge de paysages si variés qu'on a du mal à y croire. — L'isola pullula di paesaggi così variati che è difficile crederci.",
    body:"« Crederci » combine « credere » (croire) et le pronom « ci » (y), exactement comme « y croire » en français. « È difficile crederci » = « c'est difficile à y croire », une construction très fréquente dans la langue parlée."
  }},
  { title:"Négocier sur un marché oriental sicilien", phrases:[
    {fr:"Le marché de Ballarò ressemble davantage à un souk qu'à un marché européen classique.", it:"Il mercato di Ballarò assomiglia più a un suk che a un mercato europeo classico."},
    {fr:"Les vendeurs interpellent les passants avec une énergie presque théâtrale.", it:"I venditori chiamano i passanti con un'energia quasi teatrale."},
    {fr:"Négocier ici fait pleinement partie du jeu social, bien plus qu'ailleurs.", it:"Contrattare qui fa interamente parte del gioco sociale, molto più che altrove."},
    {fr:"J'ai fini par marchander pour presque tout, même les choses les moins chères.", it:"Ho finito per contrattare quasi su tutto, anche le cose meno costose."},
    {fr:"Un vendeur m'a offert un café simplement parce que j'avais tenté quelques mots d'italien.", it:"Un venditore mi ha offerto un caffè semplicemente perché avevo provato qualche parola d'italiano."},
    {fr:"Cette générosité spontanée transforme chaque achat en véritable échange humain.", it:"Questa generosità spontanea trasforma ogni acquisto in un vero scambio umano."},
    {fr:"Les odeurs d'épices, de poisson frais et de pain chaud se mêlent sans cesse.", it:"Gli odori di spezie, pesce fresco e pane caldo si mescolano continuamente."},
    {fr:"On pourrait y passer des heures sans jamais s'ennuyer une seconde.", it:"Ci si potrebbe passare ore senza annoiarsi nemmeno un secondo."},
    {fr:"Ce marché résume à lui seul toute la vitalité de la ville.", it:"Questo mercato riassume da solo tutta la vitalità della città."},
    {fr:"Je recommande vivement cette expérience à quiconque visite la Sicile.", it:"Raccomando vivamente questa esperienza a chiunque visiti la Sicilia."}
  ]},
  { title:"Escalader l'Etna au lever du jour", phrases:[
    {fr:"Nous avons décidé de gravir les flancs de l'Etna avant l'aube.", it:"Abbiamo deciso di salire sui fianchi dell'Etna prima dell'alba."},
    {fr:"Il faisait un froid surprenant, malgré la chaleur régnant en bas, sur la côte.", it:"Faceva un freddo sorprendente, nonostante il caldo che regnava in basso, sulla costa."},
    {fr:"Le guide nous a prévenus que le volcan pouvait se montrer imprévisible.", it:"La guida ci ha avvertito che il vulcano poteva mostrarsi imprevedibile."},
    {fr:"Marcher sur cette roche volcanique noire procurait une sensation presque irréelle.", it:"Camminare su questa roccia vulcanica nera dava una sensazione quasi irreale."},
    {fr:"Au sommet, le lever du soleil illuminait un paysage absolument saisissant.", it:"In cima, l'alba illuminava un paesaggio assolutamente impressionante."},
    {fr:"On apercevait distinctement la mer d'un côté et les vignes de l'autre.", it:"Si vedeva distintamente il mare da un lato e le vigne dall'altro."},
    {fr:"Une légère fumée s'échappait du cratère, nous rappelant qu'il restait bien actif.", it:"Un leggero fumo usciva dal cratere, ricordandoci che restava ben attivo."},
    {fr:"Cette sensation de fragilité face à la nature m'a profondément marqué.", it:"Questa sensazione di fragilità davanti alla natura mi ha profondamente colpito."},
    {fr:"La descente fut presque aussi mémorable que la montée elle-même.", it:"La discesa fu quasi altrettanto memorabile quanto la salita stessa."},
    {fr:"Je conserverai cette expérience parmi les plus fortes de toute ma vie.", it:"Conserverò questa esperienza tra le più intense di tutta la mia vita."}
  ], tip:{
    title:"L'imparfait pour décrire un décor",
    example:"Il faisait un froid surprenant. — Faceva un freddo sorprendente.",
    body:"L'imparfait (« faceva », « si vedeva ») décrit un décor, une ambiance ou un état continu dans le passé, exactement comme en français. On l'oppose au passé composé (« abbiamo deciso »), réservé aux actions ponctuelles qui font avancer le récit."
  }},
  { title:"Faire face à un contrôle de police", phrases:[
    {fr:"Nous avons été arrêtés à un contrôle de routine sur l'autoroute.", it:"Siamo stati fermati a un controllo di routine sull'autostrada."},
    {fr:"L'agent a demandé nos papiers avec une politesse tout à fait cordiale.", it:"L'agente ha chiesto i nostri documenti con una cortesia del tutto cordiale."},
    {fr:"J'étais un peu nerveux, bien que nous n'ayons rien à nous reprocher.", it:"Ero un po' nervoso, anche se non avevamo nulla da rimproverarci."},
    {fr:"Il a simplement vérifié le contrat de location et notre assurance.", it:"Ha semplicemente verificato il contratto di noleggio e la nostra assicurazione."},
    {fr:"Tout semblait en ordre, et il nous a souhaité bonne route.", it:"Tutto sembrava in ordine, e ci ha augurato buon viaggio."},
    {fr:"Ce genre de contrôle fait partie des choses à anticiper lorsqu'on loue une voiture.", it:"Questo tipo di controllo fa parte delle cose da prevedere quando si noleggia una macchina."},
    {fr:"Garder tous ses documents facilement accessibles évite bien des complications.", it:"Tenere tutti i documenti facilmente accessibili evita molte complicazioni."},
    {fr:"L'expérience s'est révélée beaucoup moins intimidante que ce que je redoutais.", it:"L'esperienza si è rivelata molto meno intimidante di quanto temessi."},
    {fr:"On a même échangé quelques mots sur notre itinéraire avec l'agent.", it:"Abbiamo persino scambiato qualche parola sul nostro itinerario con l'agente."},
    {fr:"Il nous a même recommandé une plage moins fréquentée des touristes.", it:"Ci ha persino raccomandato una spiaggia meno frequentata dai turisti."}
  ], tip:{
    title:"« Anche se » : bien que, même si",
    example:"J'étais un peu nerveux, bien que nous n'ayons rien à nous reprocher. — Ero un po' nervoso, anche se non avevamo nulla da rimproverarci.",
    body:"« Anche se » (littéralement « même si ») introduit une concession, comme « bien que » ou « même si » en français. Contrairement au français, il n'exige pas forcément le subjonctif et peut être suivi de l'indicatif, ce qui simplifie son usage."
  }},
  { title:"Traverser la mer vers les îles Éoliennes", phrases:[
    {fr:"Le ferry pour les îles Éoliennes part tôt le matin, avant la grande chaleur.", it:"Il traghetto per le isole Eolie parte presto la mattina, prima del grande caldo."},
    {fr:"La mer était exceptionnellement calme pendant toute la traversée.", it:"Il mare era eccezionalmente calmo durante tutta la traversata."},
    {fr:"Stromboli apparaissait à l'horizon, crachant occasionnellement un peu de fumée.", it:"Stromboli appariva all'orizzonte, sputando occasionalmente un po' di fumo."},
    {fr:"Ce volcan actif attire chaque année des milliers de visiteurs curieux.", it:"Questo vulcano attivo attira ogni anno migliaia di visitatori curiosi."},
    {fr:"On nous a conseillé d'observer les éruptions nocturnes depuis un bateau, à distance.", it:"Ci hanno consigliato di osservare le eruzioni notturne da una barca, a distanza."},
    {fr:"Le spectacle promettait d'être à la fois impressionnant et parfaitement sûr.", it:"Lo spettacolo prometteva di essere al tempo stesso impressionante e perfettamente sicuro."},
    {fr:"Les maisons blanches de Panarea contrastaient magnifiquement avec le bleu profond de la mer.", it:"Le case bianche di Panarea contrastavano magnificamente con il blu profondo del mare."},
    {fr:"Chaque île possédait finalement une personnalité remarquablement distincte des autres.", it:"Ogni isola possedeva alla fine una personalità straordinariamente distinta dalle altre."},
    {fr:"Il faudrait sans doute plusieurs semaines pour toutes les explorer sérieusement.", it:"Ci vorrebbero probabilmente diverse settimane per esplorarle tutte seriamente."},
    {fr:"On a déjà prévu d'y retourner l'été prochain, sans la moindre hésitation.", it:"Abbiamo già previsto di tornarci l'estate prossima, senza la minima esitazione."}
  ]},
  { title:"Résoudre un problème de logement introuvable", phrases:[
    {fr:"Notre réservation s'est révélée introuvable à notre arrivée sur place.", it:"La nostra prenotazione si è rivelata introvabile al nostro arrivo sul posto."},
    {fr:"Le propriétaire ne répondait ni aux appels ni aux messages envoyés.", it:"Il proprietario non rispondeva né alle chiamate né ai messaggi inviati."},
    {fr:"Nous commencions sérieusement à nous inquiéter, la nuit approchant rapidement.", it:"Cominciavamo seriamente a preoccuparci, con la notte che si avvicinava rapidamente."},
    {fr:"Un voisin compréhensif nous a aidés à contacter une agence locale.", it:"Un vicino comprensivo ci ha aiutato a contattare un'agenzia locale."},
    {fr:"Ils ont fini par nous trouver une chambre dans un petit hôtel familial.", it:"Hanno finito per trovarci una stanza in un piccolo hotel familiare."},
    {fr:"Ce n'était évidemment pas ce que nous avions prévu initialement.", it:"Non era evidentemente quello che avevamo previsto inizialmente."},
    {fr:"Mais l'accueil chaleureux nous a rapidement fait oublier ce contretemps.", it:"Ma l'accoglienza calorosa ci ha rapidamente fatto dimenticare questo contrattempo."},
    {fr:"Nous avons obtenu un remboursement intégral quelques jours plus tard.", it:"Abbiamo ottenuto un rimborso integrale qualche giorno dopo."},
    {fr:"Ce genre d'imprévu finit souvent par devenir une anecdote amusante avec le temps.", it:"Questo tipo di imprevisto finisce spesso per diventare un aneddoto divertente col tempo."},
    {fr:"L'essentiel, c'est de garder son calme et de chercher des solutions concrètes.", it:"L'importante è mantenere la calma e cercare soluzioni concrete."}
  ]},
  { title:"Participer à une procession religieuse traditionnelle", phrases:[
    {fr:"Nous sommes tombés par hasard sur une procession religieuse impressionnante.", it:"Siamo capitati per caso in una processione religiosa impressionante."},
    {fr:"Toute la ville semblait s'être rassemblée pour l'occasion, dans un silence respectueux.", it:"Sembrava che tutta la città si fosse radunata per l'occasione, in un silenzio rispettoso."},
    {fr:"Les porteurs soutenaient une statue immense sur leurs épaules, sans jamais faiblir.", it:"I portatori sostenevano una statua immensa sulle loro spalle, senza mai cedere."},
    {fr:"Certains spectateurs semblaient profondément émus, les larmes aux yeux.", it:"Alcuni spettatori sembravano profondamente commossi, con le lacrime agli occhi."},
    {fr:"Nous avons observé la scène avec un respect mêlé d'une véritable curiosité.", it:"Abbiamo osservato la scena con un rispetto misto a una vera curiosità."},
    {fr:"Un habitant nous a patiemment expliqué toute l'histoire de cette tradition séculaire.", it:"Un abitante ci ha paziententemente spiegato tutta la storia di questa tradizione secolare."},
    {fr:"Elle remonte apparemment à plusieurs siècles, transmise de génération en génération.", it:"Risale apparentemente a diversi secoli fa, trasmessa di generazione in generazione."},
    {fr:"Ce genre de moment dépasse largement le simple cadre touristique.", it:"Questo tipo di momento supera ampiamente il semplice contesto turistico."},
    {fr:"On touche ici à quelque chose de profondément ancré dans l'identité locale.", it:"Si tocca qui qualcosa di profondamente radicato nell'identità locale."},
    {fr:"Nous nous sentions presque privilégiés d'avoir pu assister à cette scène.", it:"Ci sentivamo quasi privilegiati di aver potuto assistere a questa scena."}
  ]},
  { title:"Affronter une canicule inattendue", phrases:[
    {fr:"Une vague de chaleur exceptionnelle s'est abattue sur toute la région.", it:"Un'ondata di caldo eccezionale si è abbattuta su tutta la regione."},
    {fr:"Les températures dépassaient quarante degrés dès le début de la matinée.", it:"Le temperature superavano i quaranta gradi già dall'inizio della mattinata."},
    {fr:"Nous avons dû complètement revoir nos plans de visite prévus initialement.", it:"Abbiamo dovuto rivedere completamente i nostri piani di visita previsti inizialmente."},
    {fr:"Les habitants locaux semblaient paradoxalement bien plus détendus que nous face à cette chaleur.", it:"Gli abitanti locali sembravano paradossalmente molto più tranquilli di noi davanti a questo caldo."},
    {fr:"Ils connaissent manifestement toutes les astuces pour y survivre sans trop souffrir.", it:"Conoscono evidentemente tutti i trucchi per sopravvivervi senza soffrire troppo."},
    {fr:"On nous a conseillé de rester à l'intérieur entre midi et seize heures.", it:"Ci hanno consigliato di restare al chiuso tra mezzogiorno e le sedici."},
    {fr:"Les visites se décalent alors naturellement vers le matin ou la soirée.", it:"Le visite si spostano quindi naturalmente verso la mattina o la sera."},
    {fr:"Cette contrainte a finalement enrichi notre expérience d'une manière inattendue.", it:"Questo vincolo ha alla fine arricchito la nostra esperienza in modo inaspettato."},
    {fr:"On a découvert une vie nocturne locale dont on ignorait totalement l'existence.", it:"Abbiamo scoperto una vita notturna locale di cui ignoravamo del tutto l'esistenza."},
    {fr:"Chaque contrainte climatique semble finalement cacher une opportunité méconnue.", it:"Ogni vincolo climatico sembra alla fine nascondere un'opportunità poco conosciuta."}
  ]},
  { title:"Réparer une crevaison en pleine campagne", phrases:[
    {fr:"Notre pneu a crevé en plein milieu d'une route de campagne totalement isolée.", it:"La nostra gomma si è bucata nel bel mezzo di una strada di campagna completamente isolata."},
    {fr:"Aucun réseau téléphonique ne passait dans cette zone reculée.", it:"Nessuna rete telefonica arrivava in questa zona remota."},
    {fr:"Nous avons dû changer la roue nous-mêmes, sans aucune aide extérieure.", it:"Abbiamo dovuto cambiare la ruota da soli, senza alcun aiuto esterno."},
    {fr:"Je n'avais jamais eu à le faire auparavant, et ça se voyait clairement.", it:"Non avevo mai dovuto farlo prima, e si vedeva chiaramente."},
    {fr:"Un fermier qui passait par là s'est arrêté pour nous donner un coup de main.", it:"Un contadino che passava di lì si è fermato per darci una mano."},
    {fr:"Il maniait le cric avec une aisance qui nous a sincèrement impressionnés.", it:"Maneggiava il cric con una disinvoltura che ci ha sinceramente impressionato."},
    {fr:"En moins de dix minutes, tout était réparé et nous pouvions repartir.", it:"In meno di dieci minuti, tutto era riparato e potevamo rimetterci in viaggio."},
    {fr:"Il a catégoriquement refusé toute forme de rémunération pour son aide.", it:"Ha categoricamente rifiutato qualsiasi forma di ricompensa per il suo aiuto."},
    {fr:"Ce genre de générosité désintéressée reste gravé bien plus longtemps qu'on ne l'imagine.", it:"Questo tipo di generosità disinteressata resta impresso molto più a lungo di quanto si immagini."},
    {fr:"Nous avons repris la route avec une gratitude sincère envers cet inconnu providentiel.", it:"Abbiamo ripreso la strada con una gratitudine sincera verso questo sconosciuto provvidenziale."}
  ]},
  { title:"Explorer des grottes mystérieuses", phrases:[
    {fr:"Un habitant nous a parlé d'un réseau de grottes peu connu des guides touristiques.", it:"Un abitante ci ha parlato di un reticolo di grotte poco conosciuto dalle guide turistiche."},
    {fr:"L'entrée se dissimulait derrière une végétation dense, presque invisible depuis la route.", it:"L'entrata si celava dietro una vegetazione densa, quasi invisibile dalla strada."},
    {fr:"Nous avons dû emprunter des lampes frontales pour nous aventurer à l'intérieur.", it:"Abbiamo dovuto procurarci torce frontali per avventurarci all'interno."},
    {fr:"Les parois révélaient des formations rocheuses façonnées sur des millénaires.", it:"Le pareti rivelavano formazioni rocciose modellate nel corso di millenni."},
    {fr:"Un silence presque absolu régnait, uniquement rompu par le bruit de l'eau qui s'infiltrait.", it:"Regnava un silenzio quasi assoluto, interrotto solo dal rumore dell'acqua che filtrava."},
    {fr:"On racontait que des pêcheurs s'y cachaient autrefois lors de tempêtes soudaines.", it:"Si raccontava che dei pescatori ci si rifugiassero una volta durante tempeste improvvise."},
    {fr:"Cette légende rendait l'exploration encore plus fascinante à mes yeux.", it:"Questa leggenda rendeva l'esplorazione ancora più affascinante ai miei occhi."},
    {fr:"Nous sommes finalement ressortis à la lumière du jour, presque éblouis.", it:"Siamo finalmente usciti alla luce del giorno, quasi accecati."},
    {fr:"Ce genre de découverte improvisée surpasse souvent les attractions les plus célèbres.", it:"Questo tipo di scoperta improvvisata supera spesso le attrazioni più famose."},
    {fr:"Je garderai cette expédition parmi mes souvenirs les plus précieux de ce voyage.", it:"Conserverò questa spedizione tra i miei ricordi più preziosi di questo viaggio."}
  ]},
  { title:"Participer à une pêche traditionnelle", phrases:[
    {fr:"Un pêcheur local a accepté de nous embarquer pour une sortie en mer avant l'aube.", it:"Un pescatore locale ha accettato di imbarcarci per un'uscita in mare prima dell'alba."},
    {fr:"Il pratique ce métier exactement comme son père et son grand-père avant lui.", it:"Esercita questo mestiere esattamente come suo padre e suo nonno prima di lui."},
    {fr:"Ses gestes témoignaient d'une maîtrise acquise au fil de longues années de pratique.", it:"I suoi gesti testimoniavano una padronanza acquisita nel corso di lunghi anni di pratica."},
    {fr:"Nous l'avons aidé à remonter les filets, maladroitement mais avec beaucoup d'enthousiasme.", it:"Lo abbiamo aiutato a tirare su le reti, in modo maldestro ma con molto entusiasmo."},
    {fr:"Chaque prise suscitait chez lui une satisfaction visible et sincère.", it:"Ogni presa suscitava in lui una satisfazione visibile e sincera."},
    {fr:"Il nous a expliqué comment la pêche a profondément changé ces dernières décennies.", it:"Ci ha spiegato come la pesca sia profondamente cambiata negli ultimi decenni."},
    {fr:"Certains poissons se font aujourd'hui bien plus rares qu'auparavant.", it:"Alcuni pesci si fanno oggi molto più rari di prima."},
    {fr:"Cette inquiétude transparaissait clairement dans chacune de ses paroles.", it:"Questa preoccupazione traspariva chiaramente in ogni sua parola."},
    {fr:"Nous avons partagé un déjeuner simple, composé uniquement de notre pêche du matin.", it:"Abbiamo condiviso un pranzo semplice, composto solo dalla nostra pesca del mattino."},
    {fr:"Aucun restaurant n'aurait pu rivaliser avec la fraîcheur de ce repas improvisé.", it:"Nessun ristorante avrebbe potuto competere con la freschezza di questo pasto improvvisato."}
  ]},
  { title:"Visiter une ville fantôme abandonnée", phrases:[
    {fr:"On nous a parlé d'un village entièrement abandonné après un glissement de terrain.", it:"Ci hanno parlato di un paese completamente abbandonato dopo una frana."},
    {fr:"Les habitants ont dû le quitter précipitamment il y a plusieurs décennies.", it:"Gli abitanti hanno dovuto lasciarlo precipitosamente diversi decenni fa."},
    {fr:"Les maisons restent debout, figées comme dans un instant suspendu dans le temps.", it:"Le case restano in piedi, immobili come in un istante suspeso nel tempo."},
    {fr:"Marcher dans ces rues silencieuses provoquait une sensation étrangement oppressante.", it:"Camminare in queste strade silenziose provocava una sensazione strangamente opprimente."},
    {fr:"On apercevait encore des meubles, voire de la vaisselle, abandonnés sur place.", it:"Si vedevano ancora mobili, persino stoviglie, abbandonati sul posto."},
    {fr:"Cette image suspendue du quotidien d'autrefois nous a profondément troublés.", it:"Questa immagine suspesa della quotidianità di una volta ci ha profondamente turbati."},
    {fr:"Nous avons avancé avec une prudence et un respect presque religieux.", it:"Abbiamo avanzato con una prudenza e un rispetto quasi religiosi."},
    {fr:"Ce genre de lieu raconte une histoire bien plus puissante que n'importe quel musée.", it:"Questo tipo di luogo racconta una storia molto più potente di qualsiasi museo."},
    {fr:"Nous sommes repartis en silence, chacun absorbé dans ses propres pensées.", it:"Siamo repartiti in silenzio, ognuno assorto nei propri pensieri."},
    {fr:"Cette visite restera sans doute l'une des plus intenses de tout notre séjour.", it:"Questa visita resterà senza dubbio una delle più intense di tutto il nostro soggiorno."}
  ]},
  { title:"Partager un repas avec des bergers", phrases:[
    {fr:"En randonnant dans les montagnes, nous avons croisé un groupe de bergers.", it:"Camminando in montagna, abbiamo incrociato un gruppo di pastori."},
    {fr:"Ils nous ont invités sans la moindre hésitation à partager leur repas simple.", it:"Ci hanno invitato senza la minima esitazione a condividere il loro pasto semplice."},
    {fr:"Le fromage qu'ils fabriquaient eux-mêmes avait un goût incroyablement authentique.", it:"Il formaggio che producevano loro stessi aveva un sapore incredibilmente autentico."},
    {fr:"Ils vivent une grande partie de l'année isolés, loin de toute vie urbaine.", it:"Vivono gran parte dell'anno isolati, lontano da qualsiasi vita urbana."},
    {fr:"Cette existence paraît à la fois extrêmement rude et profondément libre.", it:"Questa esistenza sembra al tempo stesso estremamente dura e profondamente libera."},
    {fr:"Ils connaissent chaque sentier, chaque source, chaque recoin de cette montagne.", it:"Conoscono ogni sentiero, ogni fonte, ogni angolo di questa montagna."},
    {fr:"Leur savoir-faire ancestral risque malheureusement de disparaître avec leur génération.", it:"Il loro sapere ancestrale rischia purtroppo di scomparire con la loro generazione."},
    {fr:"Peu de jeunes semblent désireux de perpétuer ce mode de vie exigeant.", it:"Pochi giovani sembrano desiderosi di perpetuare questo stile di vita impegnativo."},
    {fr:"Cette rencontre nous a offert un aperçu précieux d'un monde en voie de disparition.", it:"Questo incontro ci ha offerto uno sguardo preziosa su un mondo in via di scomparsa."},
    {fr:"Nous les avons quittés avec une immense gratitude et un profond respect.", it:"Li abbiamo lasciati con un'immensa gratitudine e un profondo rispetto."}
  ]},
  { title:"Se perdre volontairement dans une vieille ville", phrases:[
    {fr:"Nous avons délibérément décidé de ranger toute carte et de nous perdre volontairement.", it:"Abbiamo deliberatamente deciso di riporre ogni mappa e di perderci volontariamente."},
    {fr:"Cette approche change radicalement notre façon de percevoir une ville inconnue.", it:"Questo approccio cambia radicalmente il nostro modo di percepire una città sconosciuta."},
    {fr:"On remarque soudainement des détails qu'on aurait complètement ignorés en suivant un itinéraire fixe.", it:"Si notano improvvisamente dettagli che si sarebbero completamente ignorati seguendo un itinerario fisso."},
    {fr:"Une ruelle anodine nous a menés vers une place cachée absolument magnifique.", it:"Un vicolo anonimo ci ha portato verso una piazza nascosta assolutamente magnifica."},
    {fr:"Aucun guide touristique ne mentionnait d'ailleurs cet endroit extraordinaire.", it:"Nessuna guida turistica menzionava peraltro questo posto straordinario."},
    {fr:"C'est précisément ce genre de découverte fortuite qui rend un voyage inoubliable.", it:"È proprio questo tipo di scoperta fortuita che rende un viaggio indimenticabile."},
    {fr:"Nous avons fini par demander notre chemin à un vieil homme assis sur un banc.", it:"Abbiamo finito per chiedere la strada a un vecchio seduto su una panchina."},
    {fr:"Il nous a raconté toute l'histoire de ce quartier avec une passion communicative.", it:"Ci ha raccontato tutta la storia di questo quartiere con una passione contagiosa."},
    {fr:"Nous avons appris plus en une heure de conversation qu'en plusieurs jours de visites classiques.", it:"Abbiamo imparato più in un'ora di conversazione che in diversi giorni di visite classiche."},
    {fr:"Se perdre volontairement est décidément devenu notre nouvelle façon préférée de voyager.", it:"Perdersi volontariamente è decisamente diventato il nostro nuovo modo preferito di viaggiare."}
  ]},
  { title:"Assister à une naissance de chiot dans une ferme", phrases:[
    {fr:"Nous séjournions dans une ferme lorsque la chienne de la famille s'est mise à mettre bas.", it:"Soggiornavamo in una fattoria quando la cagna di famiglia ha cominciato a partorire."},
    {fr:"Toute la famille s'est immédiatement rassemblée autour d'elle avec une tendresse visible.", it:"Tutta la famiglia si è immediatamente riunita intorno a lei con una tenerezza visibile."},
    {fr:"Nous avons été invités à observer la scène, à distance respectueuse.", it:"Siamo stati invitati a osservare la scena, a distanza rispettosa."},
    {fr:"Chaque nouveau chiot provoquait des exclamations de joie dans toute la pièce.", it:"Ogni nuovo cucciolo provocava esclamazioni di gioia in tutta la stanza."},
    {fr:"Ce moment de vie pure nous a profondément touchés, bien plus qu'on ne l'imaginait.", it:"Questo momento di vita pura ci ha profondamente toccati, molto più di quanto immaginassimo."},
    {fr:"Le grand-père expliquait patiemment aux enfants le fonctionnement de cette naissance.", it:"Il nonno spiegava paziententemente ai bambini il funzionamento di questa nascita."},
    {fr:"Cette transmission naturelle entre générations m'a semblé particulièrement précieuse.", it:"Questa trasmissione naturale tra generazioni mi è sembrata particolarmente preziosa."},
    {fr:"On nous a même proposé de choisir un prénom pour l'un des chiots.", it:"Ci hanno persino proposto di scegliere un nome per uno dei cuccioli."},
    {fr:"Ce genre de moment improvisé dépasse largement n'importe quelle attraction planifiée.", it:"Questo tipo di momento improvvisato supera ampiamente qualsiasi attrazione pianificata."},
    {fr:"Nous avons quitté cette ferme avec des souvenirs qui dureront toute une vie.", it:"Abbiamo lasciato questa fattoria con ricordi che dureranno tutta una vita."}
  ]},
  { title:"Discuter avec des réfugiés climatiques locaux", phrases:[
    {fr:"Certains habitants nous ont parlé de villages contraints de se déplacer cause de la sécheresse.", it:"Alcuni abitanti ci hanno parlato di paesi costretti a spostarsi a causa della siccità."},
    {fr:"L'eau est devenue une ressource critique dans plusieurs régions du sud.", it:"L'acqua è diventata una risorsa critica in diverse regioni del sud."},
    {fr:"Les agriculteurs locaux évoquent des changements qu'ils n'avaient jamais connus auparavant.", it:"Gli agricoltori locali evocano cambiamenti che non avevano mai conosciuto prima."},
    {fr:"Cette réalité contrastait fortement avec l'image de carte postale que je m'étais faite du pays.", it:"Questa realtà contrastava fortemente con l'immagine da cartolina che mi ero fatto del paese."},
    {fr:"Certains ont dû abandonner des cultures pratiquées depuis des générations entières.", it:"Alcuni hanno dovuto abbandonare colture praticate da intere generazioni."},
    {fr:"Cette conversation m'a profondément fait réfléchir sur mon propre rapport à l'environnement.", it:"Questa conversazione mi ha profondamente fatto riflettere sul mio stesso rapporto con l'ambiente."},
    {fr:"Voyager, c'est aussi accepter de voir des réalités moins confortables que prévu.", it:"Viaggiare significa anche accettare di vedere realtà meno confortevoli del previsto."},
    {fr:"Ces témoignages resteront gravés bien plus durablement que n'importe quel monument.", it:"Queste testimonianze resteranno impresse molto più durevolmente di qualsiasi monumento."},
    {fr:"J'ai quitté cette discussion avec davantage de questions que de réponses.", it:"Ho lasciato questa discussione con più domande che risposte."},
    {fr:"C'est peut-être justement le signe d'une véritable prise de conscience naissante.", it:"È forse proprio il segno di una vera presa di coscienza nascente."}
  ]},
  { title:"Vivre une panne de courant collective", phrases:[
    {fr:"Une panne de courant générale a plongé toute la ville dans l'obscurité en pleine soirée.", it:"Un blackout generale ha gettato tutta la città nell'oscurità in piena serata."},
    {fr:"Au lieu de paniquer, les habitants sont spontanément sortis dans la rue.", it:"Invece di farsi prendere dal panico, gli abitanti sono spontaneamente usciti in strada."},
    {fr:"Des bougies sont apparues comme par magie à chaque fenêtre du quartier.", it:"Delle candele sono apparse come per magia a ogni finestra del quartiere."},
    {fr:"Des voisins se sont mis à chanter et à jouer de la guitare sur les places.", it:"Dei vicini hanno cominciato a cantare e a suonare la chitarra nelle piazze."},
    {fr:"Cette panne, censée être une catastrophe, s'est transformée en véritable fête improvisée.", it:"Questo blackout, che doveva essere una catastrofe, si è trasformato in una vera festa improvvisata."},
    {fr:"Je n'avais jamais vu une communauté réagir avec autant de légèreté face à un imprévu.", it:"Non avevo mai visto una comunità reagire con tanta leggerezza davanti a un imprevisto."},
    {fr:"Le courant est finalement revenu vers deux heures du matin, presque à regret.", it:"La corrente è finalmente tornata verso le due del mattino, quasi con rimpianto."},
    {fr:"Certains auraient presque souhaité que la panne dure encore un peu plus longtemps.", it:"Alcuni avrebbero quasi desiderato che il blackout durasse ancora un po' più a lungo."},
    {fr:"Cette soirée improvisée restera l'une des plus mémorables de tout notre séjour.", it:"Questa serata improvvisata resterà una delle più memorabili di tutto il nostro soggiorno."},
    {fr:"Elle illustre parfaitement cette capacité italienne à transformer l'imprévu en célébration.", it:"Illustra perfettamente questa capacità italiana di trasformare l'imprevisto in celebrazione."}
  ]},
  { title:"Participer à une cueillette d'olives", phrases:[
    {fr:"Un ancien agriculteur nous a proposé de participer à la cueillette des olives.", it:"Un vecchio agricoltore ci ha proposto di partecipare alla raccolta delle olive."},
    {fr:"Cette récolte se déroule traditionnellement entre octobre et décembre.", it:"Questa raccolta si svolge tradizionalmente tra ottobre e dicembre."},
    {fr:"Nous étendions de grands filets sous chaque olivier avant de secouer les branches.", it:"Stendevamo grandi reti sotto ogni ulivo prima di scuotere i rami."},
    {fr:"Le geste semble simple, mais demande en réalité une technique précise.", it:"Il gesto sembra semplice, ma richiede in realtà una tecnica precisa."},
    {fr:"Nos dos nous ont fait souffrir dès le deuxième jour de récolte.", it:"La schiena ci ha fatto soffrire già dal secondo giorno di raccolta."},
    {fr:"Le soir, nous avons assisté à la première pression des olives fraîchement cueillies.", it:"La sera, abbiamo assistito alla prima spremitura delle olive appena raccolte."},
    {fr:"L'odeur qui s'échappait du moulin était absolument enivrante.", it:"L'odore che usciva dal frantoio era assolutamente inebriante."},
    {fr:"Goûter cette huile encore tiède reste l'un des souvenirs les plus marquants de ce séjour.", it:"Assaggiare quest'olio ancora tiepido resta uno dei ricordi più marcanti di questo soggiorno."},
    {fr:"Rien à voir avec ce que l'on trouve habituellement en bouteille au supermarché.", it:"Niente a che vedere con quello che si trova di solito in bottiglia al supermercato."},
    {fr:"Ce travail physique nous a donné une immense admiration pour ces agriculteurs.", it:"Questo lavoro fisico ci ha dato un'immensa ammirazione per questi agricoltori."}
  ], tip:{
    title:"« Prima di » avec un nom",
    example:"Nous étendions de grands filets avant de secouer les branches. — Stendevamo grandi reti prima di scuotere i rami.",
    body:"On a déjà vu « prima di » devant un infinitif ; il peut aussi précéder directement un nom pour marquer un ordre chronologique : « prima dell'inverno » (avant l'hiver), « prima del raccolto » (avant la récolte)."
  }},
  { title:"Rencontrer un apiculteur passionné", phrases:[
    {fr:"Un apiculteur nous a invités à découvrir ses ruches installées en pleine colline.", it:"Un apicoltore ci ha invitato a scoprire le sue arnie installate in piena collina."},
    {fr:"Il nous a prêté des combinaisons intégrales avant même d'approcher les ruches.", it:"Ci ha prestato delle tute integrali prima ancora di avvicinarci alle arnie."},
    {fr:"Le bourdonnement constant créait une ambiance étrangement apaisante malgré le danger apparent.", it:"Il ronzio costante creava un'atmosfera stranamente rilassante nonostante il pericolo apparente."},
    {fr:"Il manipulait les cadres avec un calme qui semblait totalement naturel chez lui.", it:"Maneggiava i favi con una calma che sembrava del tutto naturale per lui."},
    {fr:"Chaque variété de fleur donne un miel aux arômes radicalement différents.", it:"Ogni varietà di fiore dà un miele con aromi radicalmente diversi."},
    {fr:"Nous avons goûté trois miels distincts, chacun plus surprenant que le précédent.", it:"Abbiamo assaggiato tre miele distinti, ognuno più sorprendente del precedente."},
    {fr:"Il nous a expliqué les menaces sérieuses qui pèsent aujourd'hui sur les abeilles.", it:"Ci ha spiegato le minacce serie che oggi pesano sulle api."},
    {fr:"Cette prise de conscience m'a donné envie de consommer plus localement à l'avenir.", it:"Questa presa di coscienza mi ha fatto venire voglia di consumare più localmente in futuro."},
    {fr:"Son métier dépasse largement la simple production, selon ce qu'il nous a confié.", it:"Il suo mestiere supera ampiamente la semplice produzione, secondo quanto ci ha confidato."},
    {fr:"Nous sommes repartis avec plusieurs pots de miel et une admiration sincère pour son travail.", it:"Siamo repartiti con diversi vasetti di miele e una sincera ammirazione per il suo lavoro."}
  ], tip:{
    title:"« Secondo » : selon",
    example:"Selon ce qu'il nous a confié. — Secondo quanto ci ha confidato.",
    body:"« Secondo » signifie « selon » et s'utilise devant un nom, un pronom ou « quanto » (ce que) : « secondo lui » (selon lui), « secondo quanto ha detto » (selon ce qu'il a dit). C'est une préposition très utile pour rapporter une opinion ou une source."
  }},
  { title:"Fin du module : au-delà du simple tourisme", phrases:[
    {fr:"Ce module nous a emmenés bien au-delà du tourisme classique et attendu.", it:"Questo modulo ci ha portato ben oltre il turismo classico e previsto."},
    {fr:"Chaque rencontre a révélé une facette insoupçonnée de ce pays magnifique.", it:"Ogni incontro ha rivelato una faccia insospettata di questo paese magnifico."},
    {fr:"Ton vocabulaire couvre désormais des situations véritablement complexes et nuancées.", it:"Il tuo vocabolario copre ormai situazioni davvero complesse e sfumate."},
    {fr:"Tu es capable de raconter une expérience entière avec précision et naturel.", it:"Sei in grado di raccontare un'esperienza intera con precisione e naturalezza."},
    {fr:"C'est exactement ce niveau de maîtrise qui permet de voyager en profondeur.", it:"È esattamente questo livello di padronanza che permette di viaggiare in profondità."},
    {fr:"Tu as terminé le module « En voyage » du Niveau 3 !", it:"Hai terminato il modulo « In viaggio » del Livello 3!"},
    {fr:"Il ne reste plus qu'un seul module avant de compléter l'intégralité du parcours.", it:"Non resta che un solo modulo prima di completare l'intero percorso."},
    {fr:"J'ai vraiment hâte de voir comment tu vas conclure cette magnifique aventure.", it:"Non vedo davvero l'ora di vedere come concluderai questa magnifica avventura."},
    {fr:"Chaque phrase apprise ici t'ouvre un peu plus les portes d'un pays entier.", it:"Ogni frase imparata qui ti apre un po' di più le porte di un intero paese."},
    {fr:"Continue avec la même passion, l'arrivée n'est désormais plus très loin.", it:"Continua con la stessa passione, l'arrivo non è ormai più molto lontano."}
  ]}
];

const level3Module3Lessons = [
  { title:"Débattre du sens du mot « bonheur »", phrases:[
    {fr:"Je me demande parfois si le bonheur se définit vraiment de la même façon partout.", it:"Mi chiedo a volte se la felicità si definisca davvero allo stesso modo ovunque."},
    {fr:"En Italie, j'ai l'impression qu'il se niche surtout dans les petits plaisirs quotidiens.", it:"In Italia, ho l'impressione che si nasconda soprattutto nei piccoli piaceri quotidiani."},
    {fr:"C'est une observation intéressante, bien que probablement un peu réductrice.", it:"È un'osservazione interessante, anche se probabilmente un po' riduttiva."},
    {fr:"Je suis d'accord, chaque individu vit cette notion de façon très personnelle.", it:"Sono d'accordo, ogni individuo vive questa nozione in modo molto personale."},
    {fr:"Pourtant, certaines cultures semblent collectivement plus douées pour le cultiver.", it:"Eppure, alcune culture sembrano collettivamente più dotate nel coltivarla."},
    {fr:"Peut-être simplement parce qu'elles accordent moins d'importance à la comparaison sociale.", it:"Forse semplicemente perché danno meno importanza al confronto sociale."},
    {fr:"Cette hypothèse me semble tout à fait plausible, en y réfléchissant bien.", it:"Questa ipotesi mi sembra del tutto plausibile, ripensandoci bene."},
    {fr:"Le bonheur résiderait donc moins dans ce que l'on possède que dans ce que l'on partage.", it:"La felicità risiederebbe quindi meno in ciò che si possiede che in ciò che si condivide."},
    {fr:"C'est une conclusion à laquelle je souscris pleinement, personnellement.", it:"È una conclusione a cui sottoscrivo pienamente, personalmente."},
    {fr:"Ce genre de discussion n'aura probablement jamais de réponse définitive, et c'est tant mieux.", it:"Questo tipo di discussione probabilmente non avrà mai una risposta definitiva, e meno male."}
  ], tip:{
    title:"« Si definisca » : le subjonctif après « se »",
    example:"Je me demande si le bonheur se définit vraiment de la même façon partout. — Mi chiedo se la felicità si definisca davvero allo stesso modo ovunque.",
    body:"Après « chiedersi se » (se demander si), l'italien emploie fréquemment le subjonctif pour exprimer le doute ou l'incertitude, là où le français garde l'indicatif. « Si definisca » est le subjonctif présent de « definirsi »."
  }},
  { title:"Discuter de l'héritage et de la mémoire familiale", phrases:[
    {fr:"Ma grand-mère conservait des lettres que son propre grand-père avait écrites pendant la guerre.", it:"Mia nonna conservava lettere che il suo stesso nonno aveva scritto durante la guerra."},
    {fr:"Quel genre d'histoires ces lettres racontaient-elles, si je peux demander ?", it:"Che tipo di storie raccontavano queste lettere, se posso chiedere?"},
    {fr:"Des récits simples, teintés d'espoir malgré des conditions extrêmement difficiles.", it:"Racconti semplici, segnati dalla speranza nonostante condizioni estremamente difficili."},
    {fr:"Ce genre d'héritage immatériel vaut probablement plus que n'importe quel bien matériel.", it:"Questo tipo di eredità immateriale vale probabilmente più di qualsiasi bene materiale."},
    {fr:"Je partage entièrement ce point de vue, surtout avec le temps qui passe.", it:"Condivido interamente questo punto di vista, soprattutto con il passare del tempo."},
    {fr:"Malheureusement, peu de familles prennent le temps de consigner ces souvenirs par écrit.", it:"Purtroppo, poche famiglie si prendono il tempo di annotare questi ricordi per scritto."},
    {fr:"C'est précisément pour cette raison que j'ai commencé à interviewer mes propres grands-parents.", it:"È precisamente per questo motivo che ho cominciato a intervistare i miei stessi nonni."},
    {fr:"Quelle merveilleuse initiative, j'envie sincèrement tes futurs descendants.", it:"Che meravigliosa iniziativa, invidio sinceramente i tuoi futuri discendenti."},
    {fr:"J'espère simplement que ces enregistrements traverseront les générations à venir.", it:"Spero semplicemente che queste registrazioni attraversino le generazioni future."},
    {fr:"Préserver la mémoire, c'est finalement offrir un cadeau à ceux qui ne sont pas encore nés.", it:"Preservare la memoria significa alla fine offrire un regalo a chi non è ancora nato."}
  ], tip:{
    title:"Le conditionnel pour une affirmation nuancée",
    example:"Le bonheur résiderait donc moins dans ce que l'on possède. — La felicità risiederebbe quindi meno in ciò che si possiede.",
    body:"Comme en français, l'italien utilise le conditionnel pour présenter une affirmation comme une hypothèse plutôt qu'une certitude absolue, notamment dans un raisonnement ou un débat d'idées. « Risiederebbe » nuance ainsi l'affirmation plutôt que de l'asséner directement."
  }},
  { title:"Analyser un tableau dans un musée", phrases:[
    {fr:"Ce tableau dégage une tension presque palpable, malgré son apparente simplicité.", it:"Questo quadro emana una tensione quasi palpabile, nonostante la sua apparente semplicità."},
    {fr:"L'artiste jouait manifestement avec les ombres pour créer un effet dramatique.", it:"L'artista giocava evidentemente con le ombre per creare un effetto drammatico."},
    {fr:"On remarque un contraste saisissant entre la lumière du visage et l'obscurité du fond.", it:"Si nota un contrasto impressionante tra la luce del volto e l'oscurità dello sfondo."},
    {fr:"Je trouve fascinant que cette œuvre suscite encore autant de débats, des siècles après.", it:"Trovo affascinante che quest'opera susciti ancora tanti dibattiti, secoli dopo."},
    {fr:"Chaque génération semble y projeter ses propres préoccupations et interrogations.", it:"Ogni generazione sembra proiettarvi le proprie preoccupazioni e domande."},
    {fr:"C'est sans doute cela, la marque d'une véritable œuvre intemporelle.", it:"È senza dubbio questo, il segno di una vera opera intemporale."},
    {fr:"Les historiens de l'art continuent d'ailleurs à se disputer sur son interprétation exacte.", it:"Gli storici dell'arte continuano peraltro a discutere sulla sua interpretazione esatta."},
    {fr:"Personnellement, je préfère laisser mon propre ressenti primer sur toute analyse savante.", it:"Personalmente, preferisco lasciare che la mia stessa sensazione prevalga su qualsiasi analisi erudita."},
    {fr:"Cette approche instinctive a aussi sa valeur, je trouve, même sans expertise académique.", it:"Questo approccio istintivo ha anch'esso il suo valore, trovo, anche senza competenza accademica."},
    {fr:"L'art, après tout, appartient autant au spectateur qu'à son créateur original.", it:"L'arte, dopo tutto, appartiene tanto allo spettatore quanto al suo creatore originale."}
  ], tip:{
    title:"« Tanto... quanto » : autant... que",
    example:"L'art appartient autant au spectateur qu'à son créateur. — L'arte appartiene tanto allo spettatore quanto al suo creatore.",
    body:"« Tanto... quanto » établit une égalité entre deux éléments, exactement comme « autant... que » en français. On le retrouve aussi sous la forme « così... come » dans certains contextes, avec un sens très proche."
  }},
  { title:"Confronter deux visions du succès", phrases:[
    {fr:"Pour mon père, le succès se mesurait presque exclusivement en termes de carrière.", it:"Per mio padre, il successo si misurava quasi esclusivamente in termini di carriera."},
    {fr:"Ma génération semble définir cette notion de manière radicalement différente.", it:"La mia generazione sembra definire questa nozione in modo radicalmente diverso."},
    {fr:"On valorise davantage l'équilibre personnel que l'accumulation purement matérielle.", it:"Si valorizza di più l'equilibrio personale rispetto all'accumulazione puramente materiale."},
    {fr:"Est-ce que cela crée des tensions entre vous, dans vos conversations familiales ?", it:"Questo crea delle tensioni tra voi, nelle vostre conversazioni familiari?"},
    {fr:"Parfois, mais nous essayons toujours de rester respectueux des parcours de chacun.", it:"A volte, ma cerchiamo sempre di restare rispettosi dei percorsi di ognuno."},
    {fr:"Chaque génération grandit dans un contexte économique et social bien différent, après tout.", it:"Ogni generazione cresce in un contesto economico e sociale molto diverso, dopo tutto."},
    {fr:"C'est précisément ce que j'essaie de lui faire comprendre, sans toujours y parvenir.", it:"È precisamente ciò che cerco di fargli capire, senza sempre riuscirci."},
    {fr:"Le dialogue intergénérationnel demande énormément de patience de part et d'autre.", it:"Il dialogo intergenerazionale richiede un'enorme quantità di pazienza da entrambe le parti."},
    {fr:"Je pense sincèrement que nous progressons, même lentement, vers une meilleure compréhension mutuelle.", it:"Penso sinceramente che progrediamo, anche lentamente, verso una migliore comprensione reciproca."},
    {fr:"C'est tout ce qu'on peut espérer, finalement, dans ce genre de désaccord affectueux.", it:"È tutto quello che si può sperare, alla fine, in questo tipo di disaccordo affettuoso."}
  ]},
  { title:"Discuter d'un dilemme éthique", phrases:[
    {fr:"Imagine que tu trouves un portefeuille rempli d'argent, mais sans aucune pièce d'identité.", it:"Immagina di trovare un portafoglio pieno di soldi, ma senza alcun documento d'identità."},
    {fr:"Instinctivement, je chercherais un moyen de le rendre, même sans savoir à qui.", it:"Istintivamente, cercherei un modo di restituirlo, anche senza sapere a chi."},
    {fr:"Beaucoup de gens seraient tentés de garder l'argent, en toute honnêteté.", it:"Molte persone sarebbero tentate di tenere i soldi, con tutta onestà."},
    {fr:"Probablement, mais je pense que ça me rongerait moralement par la suite.", it:"Probabilmente, ma penso che questo mi tormenterebbe moralmente in seguito."},
    {fr:"L'intégrité personnelle vaut-elle vraiment plus qu'une somme d'argent conséquente ?", it:"L'integrità personale vale davvero più di una somma di denaro considerevole?"},
    {fr:"Pour moi, clairement oui, même si la réponse n'est sans doute pas universelle.", it:"Per me, chiaramente sì, anche se la risposta probabilmente non è universale."},
    {fr:"Ce genre de dilemme révèle beaucoup de choses sur nos valeurs profondes.", it:"Questo tipo di dilemma rivela molte cose sui nostri valori profondi."},
    {fr:"C'est précisément pour cela que je trouve ces questions si fascinantes à débattre.", it:"È precisamente per questo che trovo queste domande così affascinanti da discutere."},
    {fr:"On apprend souvent plus sur quelqu'un en dix minutes de ce débat qu'en des mois de fréquentation.", it:"Si impara spesso più su qualcuno in dieci minuti di questo dibattito che in mesi di frequentazione."},
    {fr:"Je suis entièrement d'accord, ça révèle une part de nous-mêmes qu'on cache habituellement.", it:"Sono completamente d'accordo, rivela una parte di noi stessi che di solito nascondiamo."}
  ]},
  { title:"Parler de son rapport au temps qui passe", phrases:[
    {fr:"Je remarque que je perçois le temps très différemment depuis que je vieillis.", it:"Noto che percepisco il tempo molto diversamente da quando invecchio."},
    {fr:"Les années semblent littéralement s'accélérer, alors qu'elles paraissaient infinies enfant.", it:"Gli anni sembrano letteralmente accelerare, mentre sembravano infiniti da bambino."},
    {fr:"C'est un phénomène que beaucoup de gens observent, apparemment, avec l'âge.", it:"È un fenomeno che molte persone osservano, a quanto pare, con l'età."},
    {fr:"Je suppose que notre cerveau traite les nouveautés différemment des habitudes répétées.", it:"Suppongo che il nostro cervello elabori le novità diversamente dalle abitudini ripetute."},
    {fr:"Ça expliquerait pourquoi les voyages semblent toujours ralentir cette perception.", it:"Questo spiegherebbe perché i viaggi sembrano sempre rallentare questa percezione."},
    {fr:"Exactement, chaque nouveauté étire paradoxalement notre sensation du temps.", it:"Esattamente, ogni novità allunga paradossalmente la nostra sensazione del tempo."},
    {fr:"C'est peut-être justement pour cela que je voyage autant, sans vraiment m'en rendre compte.", it:"È forse proprio per questo che viaggio tanto, senza rendermene davvero conto."},
    {fr:"Une façon inconsciente de ralentir le temps qui, sinon, nous échapperait.", it:"Un modo inconscio di rallentare il tempo che, altrimenti, ci scapperebbe."},
    {fr:"Cette théorie me semble à la fois poétique et étonnamment logique.", it:"Questa teoria mi sembra al tempo stesso poetica e sorprendentemente logica."},
    {fr:"En tout cas, elle me donne une bonne excuse pour continuer à voyager sans fin.", it:"In ogni caso, mi dà una buona scusa per continuare a viaggiare senza fine."}
  ]},
  { title:"Débattre de l'intelligence artificielle", phrases:[
    {fr:"Penses-tu que l'intelligence artificielle va fondamentalement changer notre façon de vivre ?", it:"Pensi che l'intelligenza artificiale cambierà fondamentalmente il nostro modo di vivere?"},
    {fr:"Sans aucun doute, même si nous ne mesurons pas encore totalement son ampleur.", it:"Senza alcun dubbio, anche se non ne misuriamo ancora del tutto la portata."},
    {fr:"Certains redoutent qu'elle remplace entièrement certains métiers humains.", it:"Alcuni temono che sostituisca interamente alcuni mestieri umani."},
    {fr:"D'autres estiment au contraire qu'elle en créera de nouveaux, encore inimaginables aujourd'hui.", it:"Altri ritengono al contrario che ne creerà di nuovi, ancora inimmaginabili oggi."},
    {fr:"L'histoire nous a d'ailleurs montré que chaque révolution technologique suit ce même schéma.", it:"La storia ci ha peraltro mostrato che ogni rivoluzione tecnologica segue questo stesso schema."},
    {fr:"C'est vrai, mais la vitesse actuelle du changement reste tout de même inquiétante.", it:"È vero, ma la velocità attuale del cambiamento resta comunque preoccupante."},
    {fr:"Je préfère rester optimiste, tant que l'humain garde le contrôle des décisions essentielles.", it:"Preferisco restare ottimista, purché l'uomo mantenga il controllo delle decisioni essenziali."},
    {fr:"C'est exactement là que réside tout l'enjeu éthique de cette technologie.", it:"È esattamente lì che risiede tutta la posta in gioco etica di questa tecnologia."},
    {fr:"Ce débat va probablement occuper nos sociétés pendant encore de nombreuses décennies.", it:"Questo dibattito occuperà probabilmente le nostre società per ancora molti decenni."},
    {fr:"En attendant, continuons à en discuter ouvertement, sans excès de peur ni d'euphorie.", it:"Nel frattempo, continuiamo a discuterne apertamente, senza eccesso di paura né di euforia."}
  ], tip:{
    title:"« Purché » : pourvu que",
    example:"Tant que l'humain garde le contrôle. — Purché l'uomo mantenga il controllo.",
    body:"« Purché » (pourvu que, à condition que) exige toujours le subjonctif en italien, exactement comme son équivalent français. C'est une conjonction très utile pour poser une condition essentielle à une affirmation."
  }},
  { title:"Parler de ses regrets avec sincérité", phrases:[
    {fr:"Si je pouvais revenir en arrière, je pense que je prendrais davantage de risques.", it:"Se potessi tornare indietro, penso che correrei più rischi."},
    {fr:"Quel genre de risques aurais-tu aimé prendre, à l'époque ?", it:"Che tipo di rischi avresti voluto correre, a quel tempo?"},
    {fr:"J'aurais sans doute étudié à l'étranger, plutôt que de rester dans ma zone de confort.", it:"Avrei probabilmente studiato all'estero, piuttosto che restare nella mia zona di comfort."},
    {fr:"Ce genre de regret semble assez répandu chez beaucoup de gens, en réalité.", it:"Questo tipo di rimpianto sembra piuttosto diffuso tra molte persone, in realtà."},
    {fr:"C'est vrai, mais je préfère désormais transformer ce regret en motivation future.", it:"È vero, ma ormai preferisco trasformare questo rimpianto in motivazione futura."},
    {fr:"C'est une attitude admirable, bien plus constructive que le simple regret stérile.", it:"È un atteggiamento ammirevole, molto più costruttivo del semplice rimpianto sterile."},
    {fr:"Il n'est d'ailleurs jamais vraiment trop tard pour tenter quelque chose de nouveau.", it:"Non è peraltro mai davvero troppo tardi per tentare qualcosa di nuovo."},
    {fr:"Exactement, c'est pour cette raison que j'envisage sérieusement un nouveau projet à l'étranger.", it:"Esattamente, è per questo motivo che sto seriamente considerando un nuovo progetto all'estero."},
    {fr:"Quelle merveilleuse nouvelle, je serai ravi de suivre cette aventure avec toi.", it:"Che meravigliosa notizia, sarò felice di seguire questa avventura con te."},
    {fr:"Merci, ton soutien compte vraiment énormément pour moi dans cette décision.", it:"Grazie, il tuo sostegno conta davvero moltissimo per me in questa decisione."}
  ]},
  { title:"Explorer la notion d'identité multiple", phrases:[
    {fr:"Après tant d'années passées entre deux pays, je ne sais plus vraiment où est mon identité.", it:"Dopo tanti anni passati tra due paesi, non so più davvero dove sia la mia identità."},
    {fr:"Peut-être que l'identité n'a justement pas besoin de se réduire à un seul lieu.", it:"Forse l'identità non ha proprio bisogno di ridursi a un solo luogo."},
    {fr:"C'est une pensée réconfortante, mais parfois difficile à accepter pleinement.", it:"È un pensiero rassicurante, ma a volte difficile da accettare pienamente."},
    {fr:"On nous a souvent appris à définir qui nous sommes par une seule appartenance.", it:"Ci hanno spesso insegnato a definire chi siamo tramite una sola appartenenza."},
    {fr:"Pourtant, la réalité humaine semble bien plus riche et complexe que cette simplification.", it:"Eppure, la realtà umana sembra molto più ricca e complessa di questa semplificazione."},
    {fr:"Je me sens à la fois pleinement français et profondément transformé par l'Italie.", it:"Mi sento al tempo stesso pienamente francese e profondamente trasformato dall'Italia."},
    {fr:"Ces deux appartenances ne s'excluent absolument pas, bien au contraire.", it:"Queste due appartenenze non si escludono assolutamente, anzi."},
    {fr:"Elles s'enrichissent mutuellement, chacune éclairant l'autre sous un jour nouveau.", it:"Si enriquecono reciprocamente, ognuna illuminando l'altra sotto una luce nuova."},
    {fr:"C'est une belle façon de concevoir l'identité, loin de toute vision figée.", it:"È un bel modo di concepire l'identità, lontano da ogni visione rigida."},
    {fr:"J'espère que de plus en plus de gens finiront par voir les choses ainsi.", it:"Spero che sempre più persone finiscano per vedere le cose così."}
  ]},
  { title:"Discuter de la place de la technologie dans nos vies", phrases:[
    {fr:"Je trouve que nos téléphones ont fini par envahir chaque recoin de notre quotidien.", it:"Trovo che i nostri telefoni abbiano finito per invadere ogni angolo della nostra quotidianità."},
    {fr:"C'est vrai, même nos repas en famille sont désormais souvent perturbés par des notifications.", it:"È vero, anche i nostri pasti in famiglia sono ormai spesso interrotti da notifiche."},
    {fr:"J'ai récemment décidé d'instaurer des moments sans écran chez moi.", it:"Ho recentemente deciso di instaurare dei momenti senza schermo a casa mia."},
    {fr:"Comment tes enfants ont-ils réagi face à cette nouvelle règle familiale ?", it:"Come hanno reagito i tuoi figli davanti a questa nuova regola familiare?"},
    {fr:"Plutôt mal au début, puis ils ont fini par apprécier ce temps retrouvé ensemble.", it:"Piuttosto male all'inizio, poi hanno finito per apprezzare questo tempo ritrovato insieme."},
    {fr:"C'est encourageant d'entendre que ce genre d'effort finit par porter ses fruits.", it:"È incoraggiante sentire che questo tipo di sforzo finisce per portare i suoi frutti."},
    {fr:"Je pense sincèrement que nous sous-estimons l'impact réel de cette surexposition numérique.", it:"Penso sinceramente che sottovalutiamo l'impatto reale di questa sovraesposizione digitale."},
    {fr:"Les études commencent d'ailleurs à révéler des effets assez préoccupants sur la concentration.", it:"Gli studi cominciano peraltro a rivelare effetti piuttosto preoccupanti sulla concentrazione."},
    {fr:"Trouver un équilibre semble plus que jamais essentiel dans ce monde hyperconnecté.", it:"Trovare un equilibrio sembra più che mai essenziale in questo mondo iperconnesso."},
    {fr:"C'est exactement la conclusion à laquelle j'étais moi-même arrivé, de mon côté.", it:"È esattamente la conclusione a cui ero io stesso arrivato, dal mio lato."}
  ]},
  { title:"Parler d'un mentor qui a marqué sa vie", phrases:[
    {fr:"Un ancien professeur m'a profondément marqué dès mes premières années d'études.", it:"Un vecchio professore mi ha profondamente segnato già dai miei primi anni di studi."},
    {fr:"Qu'est-ce qui le distinguait particulièrement des autres enseignants, selon toi ?", it:"Cosa lo distingueva particolarmente dagli altri insegnanti, secondo te?"},
    {fr:"Il croyait sincèrement en chacun de ses élèves, même les plus en difficulté.", it:"Credeva sinceramente in ognuno dei suoi alunni, anche i più in difficoltà."},
    {fr:"Ce genre de confiance inconditionnelle change littéralement une trajectoire de vie.", it:"Questo tipo di fiducia incondizionata cambia letteralmente una traiettoria di vita."},
    {fr:"Je n'ai réalisé l'ampleur de son influence que de nombreuses années plus tard.", it:"Ho realizzato la portata della sua influenza solo molti anni dopo."},
    {fr:"L'as-tu déjà recontacté pour lui exprimer ta gratitude ?", it:"Lo hai già ricontattato per esprimergli la tua gratitudine?"},
    {fr:"Oui, et ses larmes aux yeux m'ont confirmé à quel point ça comptait aussi pour lui.", it:"Sì, e le sue lacrime agli occhi mi hanno confermato quanto contasse anche per lui."},
    {fr:"Ce genre de moment doit être incroyablement gratifiant pour un enseignant.", it:"Questo tipo di momento deve essere incredibilmente gratificante per un insegnante."},
    {fr:"Je pense que trop peu d'anciens élèves pensent à exprimer cette reconnaissance.", it:"Penso che troppo pochi ex alunni pensino a esprimere questo riconoscimento."},
    {fr:"Tu m'as donné envie de recontacter, moi aussi, quelqu'un qui compte vraiment pour moi.", it:"Mi hai fatto venire voglia di ricontattare, anch'io, qualcuno che conta davvero per me."}
  ]},
  { title:"Discuter de ce que signifie « réussir sa vie »", phrases:[
    {fr:"Qu'est-ce que réussir sa vie signifie vraiment, selon toi, au fond ?", it:"Cosa significa davvero riuscire nella vita, secondo te, in fondo?"},
    {fr:"Je crois que ça consiste surtout à vivre en accord avec ses propres valeurs.", it:"Credo che consista soprattutto nel vivere in accordo con i propri valori."},
    {fr:"Beaucoup confondent encore cette notion avec la seule réussite matérielle.", it:"Molti confondono ancora questa nozione con la sola riuscita materiale."},
    {fr:"C'est vrai, mais la société entretient encore largement cette confusion, malheureusement.", it:"È vero, ma la società mantiene ancora ampiamente questa confusione, purtroppo."},
    {fr:"Pour moi, réussir signifie plutôt se réveiller chaque matin avec un but qui a du sens.", it:"Per me, riuscire significa piuttosto svegliarsi ogni mattina con uno scopo che ha senso."},
    {fr:"C'est une définition magnifique, bien plus profonde que n'importe quel compte en banque.", it:"È una definizione magnifica, molto più profonda di qualsiasi conto in banca."},
    {fr:"Nos sociétés devraient sans doute valoriser davantage ce genre de réussite intérieure.", it:"Le nostre società dovrebbero probabilmente valorizzare più questo tipo di riuscita interiore."},
    {fr:"Je suis persuadé que les mentalités évoluent, même si c'est lentement.", it:"Sono convinto che le mentalità stiano evolvendo, anche se lentamente."},
    {fr:"Ce genre de conversation me donne toujours énormément d'espoir pour l'avenir.", it:"Questo tipo di conversazione mi dà sempre un'enorme speranza per il futuro."},
    {fr:"À moi aussi, continuons simplement à vivre selon cette conviction, chacun à notre façon.", it:"Anche a me, continuiamo semplicemente a vivere secondo questa convinzione, ognuno a modo suo."}
  ]},
  { title:"Parler d'un acte de courage marquant", phrases:[
    {fr:"Te souviens-tu d'un moment où tu as dû faire preuve d'un courage inhabituel ?", it:"Ti ricordi di un momento in cui hai dovuto dimostrare un coraggio inusuale?"},
    {fr:"Oui, le jour où j'ai décidé de quitter un emploi stable pour poursuivre un vrai rêve.", it:"Sì, il giorno in cui ho deciso di lasciare un lavoro stabile per inseguire un vero sogno."},
    {fr:"Ça a dû demander une confiance en toi considérable, face à l'incertitude.", it:"Deve aver richiesto una fiducia in te stesso considerevole, davanti all'incertezza."},
    {fr:"Honnêtement, j'avais une peur immense, mais je savais que je le regretterais sinon.", it:"Onestamente, avevo una paura immensa, ma sapevo che altrimenti me ne sarei pentito."},
    {fr:"Le regret anticipé l'emportait donc finalement sur la peur du changement elle-même.", it:"Il rimpianto anticipato prevaleva quindi alla fine sulla paura del cambiamento stesso."},
    {fr:"Exactement, et avec le recul, cette décision reste la meilleure de toute ma vie.", it:"Esattamente, e col senno di poi, questa decisione resta la migliore di tutta la mia vita."},
    {fr:"Ton histoire m'inspire véritablement à reconsidérer certains de mes propres choix actuels.", it:"La tua storia mi ispira davvero a riconsiderare alcune delle mie scelte attuali."},
    {fr:"Le courage, finalement, se résume souvent à choisir l'inconfort temporaire plutôt que le regret permanent.", it:"Il coraggio, in fondo, si riduce spesso a scegliere il disagio temporaneo piuttosto che il rimpianto permanente."},
    {fr:"C'est une formule que je retiendrai précieusement, merci de l'avoir partagée.", it:"È una formula che conserverò preziosamente, grazie di averla condivisa."},
    {fr:"Avec plaisir, j'espère sincèrement qu'elle t'accompagnera dans tes propres décisions futures.", it:"Con piacere, spero sinceramente che ti accompagnerà nelle tue stesse decisioni future."}
  ]},
  { title:"Réfléchir sur la notion d'étranger", phrases:[
    {fr:"Après toutes ces années ici, je ne me sens plus vraiment étranger, et pourtant je ne suis pas né ici.", it:"Dopo tutti questi anni qui, non mi sento più davvero straniero, eppure non sono nato qui."},
    {fr:"Qu'est-ce qui, selon toi, définit véritablement cette frontière entre étranger et local ?", it:"Cosa definisce davvero, secondo te, questo confine tra straniero e locale?"},
    {fr:"Je crois que ça tient davantage à l'engagement envers un lieu qu'à l'origine elle-même.", it:"Credo che dipenda più dall'impegno verso un luogo che dall'origine stessa."},
    {fr:"S'investir dans une communauté finit peut-être par effacer cette distinction artificielle.", it:"Investire in una comunità finisce forse per cancellare questa distinzione artificiale."},
    {fr:"C'est en tout cas ce que mon expérience personnelle semble confirmer, jour après jour.", it:"È comunque ciò che la mia esperienza personale sembra confermare, giorno dopo giorno."},
    {fr:"Les administrations, elles, continuent pourtant à maintenir cette frontière de façon très rigide.", it:"Le amministrazioni, invece, continuano a mantenere questo confine in modo molto rigido."},
    {fr:"C'est le paradoxe que je vis au quotidien, entre appartenance réelle et statut légal.", it:"È il paradosso che vivo quotidianamente, tra appartenenza reale e statuto legale."},
    {fr:"Ce décalage doit être particulièrement frustrant à vivre sur la durée.", it:"Questo scarto deve essere particolarmente frustrante da vivere nel tempo."},
    {fr:"Ça l'est, mais je préfère me concentrer sur ce que je ressens plutôt que sur un papier.", it:"Lo è, ma preferisco concentrarmi su ciò che provo piuttosto che su un documento."},
    {fr:"C'est une sagesse précieuse que beaucoup devraient méditer, je trouve.", it:"È una saggezza preziosa su cui molti dovrebbero riflettere, trovo."}
  ]},
  { title:"Parler d'un sacrifice personnel accepté", phrases:[
    {fr:"Vivre loin de ma famille représente sans doute le plus grand sacrifice de mon existence.", it:"Vivere lontano dalla mia famiglia rappresenta probabilmente il più grande sacrificio della mia esistenza."},
    {fr:"Comment parviens-tu à accepter ce choix au quotidien, malgré la distance ?", it:"Come riesci ad accettare questa scelta quotidianamente, nonostante la distanza?"},
    {fr:"Je me répète constamment que chaque choix implique nécessairement un renoncement.", it:"Mi ripeto costantemente che ogni scelta implica necessariamente una rinuncia."},
    {fr:"C'est une philosophie lucide, même si elle n'efface jamais totalement la douleur ressentie.", it:"È una filosofia lucida, anche se non cancella mai totalmente il dolore provato."},
    {fr:"Exactement, certains jours restent plus difficiles que d'autres, je ne vais pas le nier.", it:"Esattamente, certi giorni restano più difficili di altri, non lo negherò."},
    {fr:"Je trouve ton honnêteté sur ce sujet vraiment admirable, beaucoup l'évitent par pudeur.", it:"Trovo la tua onestà su questo argomento davvero ammirevole, molti la evitano per pudore."},
    {fr:"Je préfère assumer pleinement la complexité de ce choix plutôt que de prétendre qu'il est facile.", it:"Preferisco assumere pienamente la complessità di questa scelta piuttosto che pretendere che sia facile."},
    {fr:"Cette authenticité rend ton témoignage d'autant plus précieux à mes yeux.", it:"Questa autenticità rende la tua testimonianza ancora più preziosa ai miei occhi."},
    {fr:"Merci, ça me touche sincèrement de l'entendre formulé ainsi.", it:"Grazie, mi tocca sinceramente sentirlo formulato così."},
    {fr:"Chaque sacrifice assumé consciemment finit par devenir une véritable source de force intérieure.", it:"Ogni sacrificio assunto consapevolmente finisce per diventare una vera fonte di forza interiore."}
  ]},
  { title:"Discuter de la transmission des valeurs", phrases:[
    {fr:"Quelles valeurs espères-tu transmettre à tes propres enfants, un jour ?", it:"Quali valori speri di trasmettere ai tuoi stessi figli, un giorno?"},
    {fr:"Avant tout, la curiosité envers les autres cultures et façons de penser.", it:"Prima di tutto, la curiosità verso le altre culture e modi di pensare."},
    {fr:"C'est précisément ce que ton propre parcours de vie illustre si bien.", it:"È precisamente ciò che il tuo stesso percorso di vita illustra così bene."},
    {fr:"J'espère aussi leur apprendre à ne jamais craindre l'inconnu ou la différence.", it:"Spero anche di insegnare loro a non temere mai l'ignoto o la differenza."},
    {fr:"Ce genre de valeur se transmet sans doute davantage par l'exemple que par les mots.", it:"Questo tipo di valore si trasmette probabilmente più con l'esempio che con le parole."},
    {fr:"Je suis entièrement d'accord, les enfants observent bien plus qu'ils n'écoutent.", it:"Sono completamente d'accordo, i bambini osservano molto più di quanto ascoltino."},
    {fr:"C'est aussi pour cette raison que je continue à voyager, même avec de jeunes enfants.", it:"È anche per questo motivo che continuo a viaggiare, anche con dei bambini piccoli."},
    {fr:"Quelle magnifique façon de leur offrir cette ouverture d'esprit dès leur plus jeune âge.", it:"Che magnifico modo di offrire loro questa apertura mentale dalla più tenera età."},
    {fr:"J'espère sincèrement qu'ils garderont cette curiosité tout au long de leur vie future.", it:"Spero sinceramente che conserveranno questa curiosità per tutta la loro vita futura."},
    {fr:"Au vu de ce que tu leur transmets déjà, je n'en doute absolument pas une seconde.", it:"Visto quello che gli trasmetti già, non ne dubito assolutamente nemmeno un secondo."}
  ]},
  { title:"Discuter de la solitude choisie", phrases:[
    {fr:"Je passe de plus en plus de temps seul, et étonnamment, ça ne me pèse plus du tout.", it:"Passo sempre più tempo da solo, e sorprendentemente, non mi pesa più affatto."},
    {fr:"Je trouve ça admirable, beaucoup confondent encore solitude et tristesse.", it:"Trovo questo ammirevole, molti confondono ancora la solitudine con la tristezza."},
    {fr:"C'est exactement cette confusion que j'ai moi-même longtemps entretenue, avant de changer d'avis.", it:"È esattamente questa confusione che ho io stesso a lungo mantenuto, prima di cambiare idea."},
    {fr:"Qu'est-ce qui t'a fait évoluer sur cette question, si je peux te demander ?", it:"Cosa ti ha fatto evolvere su questa domanda, se posso chiederti?"},
    {fr:"J'ai simplement commencé à apprécier ma propre compagnie, sans chercher à la fuir.", it:"Ho semplicemente cominciato ad apprezzare la mia stessa compagnia, senza cercare di fuggirla."},
    {fr:"C'est une forme de maturité que peu de gens atteignent vraiment, selon moi.", it:"È una forma di maturità che poche persone raggiungono davvero, secondo me."},
    {fr:"Je ne fuis plus le silence comme je le faisais autrefois, et ça change tout.", it:"Non fuggo più il silenzio come facevo una volta, e questo cambia tutto."},
    {fr:"Le silence permet d'ailleurs souvent d'entendre ce que le bruit ambiant masquait.", it:"Il silenzio permette peraltro spesso di sentire ciò che il rumore ambientale mascherava."},
    {fr:"Cette réflexion me donne vraiment envie de réserver plus de moments pour moi-même.", it:"Questa riflessione mi fa davvero venire voglia di riservare più momenti per me stesso."},
    {fr:"Je t'encourage sincèrement à essayer, les bénéfices dépassent largement l'inconfort initial.", it:"Ti incoraggio sinceramente a provare, i benefici superano ampiamente il disagio iniziale."}
  ]},
  { title:"Parler de la peur de décevoir", phrases:[
    {fr:"J'ai longtemps vécu avec la peur constante de décevoir mes proches.", it:"Ho vissuto a lungo con la paura costante di deludere i miei cari."},
    {fr:"Cette peur dictait littéralement la majorité de mes choix de vie, à l'époque.", it:"Questa paura dettava letteralmente la maggior parte delle mie scelte di vita, allora."},
    {fr:"Qu'est-ce qui t'a finalement aidé à t'en libérer, au moins en partie ?", it:"Cosa ti ha finalmente aiutato a liberartene, almeno in parte?"},
    {fr:"J'ai réalisé que vivre selon les attentes d'autrui ne me rendait jamais vraiment heureux.", it:"Ho realizzato che vivere secondo le aspettative degli altri non mi rendeva mai davvero felice."},
    {fr:"C'est une prise de conscience fondamentale, même si elle arrive souvent tardivement.", it:"È una presa di coscienza fondamentale, anche se arriva spesso tardivamente."},
    {fr:"Mieux vaut tard que jamais, comme on dit si justement dans toutes les langues.", it:"Meglio tardi che mai, come si dice così giustamente in tutte le lingue."},
    {fr:"Depuis, j'essaie de prendre mes décisions en fonction de mes propres convictions.", it:"Da allora, cerco di prendere le mie decisioni in base alle mie proprie convinzioni."},
    {fr:"Et comment réagissent tes proches face à ce changement d'attitude ?", it:"E come reagiscono i tuoi cari davanti a questo cambiamento di atteggiamento?"},
    {fr:"Certains ont eu du mal à l'accepter, mais les plus proches ont fini par me soutenir pleinement.", it:"Alcuni hanno avuto difficoltà ad accettarlo, ma i più vicini hanno finito per sostenermi pienamente."},
    {fr:"C'est souvent ainsi qu'on distingue les relations véritablement solides des autres.", it:"È spesso così che si distinguono le relazioni davvero solide dalle altre."}
  ]},
  { title:"Réfléchir à ce que l'on laissera derrière soi", phrases:[
    {fr:"As-tu déjà réfléchi à ce que tu aimerais laisser derrière toi, une fois ta vie terminée ?", it:"Hai già riflettuto su cosa vorresti lasciare dietro di te, una volta terminata la tua vita?"},
    {fr:"C'est une question profonde, que j'évite généralement d'aborder trop directement.", it:"È una domanda profonda, che generalmente evito di affrontare troppo direttamente."},
    {fr:"Je comprends, mais je trouve qu'elle aide à clarifier nos priorités réelles.", it:"Capisco, ma trovo che aiuti a chiarire le nostre vere priorità."},
    {fr:"En y réfléchissant sincèrement, je crois que je voudrais surtout laisser des souvenirs chaleureux.", it:"Riflettendoci sinceramente, credo che vorrei soprattutto lasciare ricordi calorosi."},
    {fr:"Pas forcément des accomplissements, mais plutôt une présence qui aura compté pour certains.", it:"Non necessariamente dei successi, ma piuttosto una presenza che sia contata per alcuni."},
    {fr:"C'est une aspiration magnifique, bien plus durable que n'importe quelle réussite matérielle.", it:"È un'aspirazione magnifica, molto più durevole di qualsiasi riuscita materiale."},
    {fr:"Je pense sincèrement que c'est la seule chose qui compte, au bout du compte.", it:"Penso sinceramente che sia la sola cosa che conta, alla fine dei conti."},
    {fr:"Cette conversation me rend presque mélancolique, mais d'une mélancolie apaisante, en réalité.", it:"Questa conversazione mi rende quasi malinconico, ma di una malinconia rassicurante, in realtà."},
    {fr:"C'est exactement l'effet que ce genre de réflexion devrait produire, je trouve.", it:"È esattamente l'effetto che questo tipo di riflessione dovrebbe produrre, trovo."},
    {fr:"Merci pour cette conversation, elle restera gravée parmi les plus belles de ce voyage.", it:"Grazie per questa conversazione, resterà impressa tra le più belle di questo viaggio."}
  ], tip:{
    title:"« Al bout du compte » : « alla fine dei conti »",
    example:"C'est la seule chose qui compte, au bout du compte. — È la sola cosa che conta, alla fine dei conti.",
    body:"« Alla fine dei conti » signifie littéralement « à la fin des comptes » et correspond exactement à l'expression française « au bout du compte » ou « en fin de compte ». C'est une formule idiomatique parfaite pour conclure un raisonnement."
  }},
  { title:"Fin du module : une langue devenue sienne", phrases:[
    {fr:"Ce dernier module t'a confronté aux conversations les plus riches et les plus nuancées.", it:"Questo ultimo modulo ti ha confrontato con le conversazioni più ricche e più sfumate."},
    {fr:"Tu es désormais capable de débattre d'idées abstraites avec une aisance remarquable.", it:"Sei ormai capace di discutere idee abstratte con una disinvoltura notevole."},
    {fr:"Ce niveau de maîtrise dépasse largement la simple communication touristique.", it:"Questo livello di padronanza supera ampiamente la semplice comunicazione turistica."},
    {fr:"Tu peux désormais exprimer des nuances, des doutes, des convictions profondes.", it:"Ormai puoi esprimere sfumature, dubbi, convinzioni profonde."},
    {fr:"C'est exactement cela, posséder véritablement une langue plutôt que simplement la parler.", it:"È esattamente questo, possedere davvero una lingua piuttosto che semplicemente parlarla."},
    {fr:"Tu as terminé l'intégralité du Niveau 3, et donc du parcours complet !", it:"Hai terminato l'intero Livello 3, e quindi l'intero percorso!"},
    {fr:"Dix-huit cents phrases et quarante-cinq points de grammaire désormais derrière toi.", it:"Milleottocento frasi e quarantacinque punti di grammatica ora dietro di te."},
    {fr:"L'italien fait désormais partie intégrante de qui tu es devenu.", it:"L'italiano fa ormai parte integrante di chi sei diventato."},
    {fr:"Continue à pratiquer, à lire, à voyager, pour ne jamais perdre cette richesse acquise.", it:"Continua a esercitarti, a leggere, a viaggiare, per non perdere mai questa ricchezza acquisita."},
    {fr:"Félicitations sincères pour ce parcours accompli avec une constance admirable.", it:"Congratulazioni sincere per questo percorso compiuto con una costanza ammirevole."}
  ]}
];

const LEVEL1_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Un road trip en Italie pour démarrer, puis les phrases du quotidien.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Aéroport, hôtel, transports : de quoi se débrouiller partout.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Parler de soi, faire connaissance, échanger avec aisance.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module3Lessons
  }
];
const LEVEL1_FREE_LESSONS = { 1: 10, 2: 0, 3: 0 }; // seul le module 1 a des leçons gratuites

const LEVEL2_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"La vie de tous les jours, avec un vocabulaire plus riche.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Des situations de voyage plus variées et plus complexes.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Des échanges sociaux plus nuancés et plus naturels.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module3Lessons
  }
];
const LEVEL2_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // à partir du niveau 2, seulement 3 leçons gratuites

const LEVEL3_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Une vie quotidienne installée en Italie, avec ses subtilités.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Des aventures de voyage plus poussées et plus authentiques.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Des conversations profondes : opinions, débats, émotions.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module3Lessons
  }
];
const LEVEL3_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // comme au niveau 2 : seulement 3 leçons gratuites dans le premier module

const LEVELS = [
  { id:1, name:"Niveau 1", modules: LEVEL1_MODULES, freeLessonsPerModule: LEVEL1_FREE_LESSONS },
  { id:2, name:"Niveau 2", modules: LEVEL2_MODULES, freeLessonsPerModule: LEVEL2_FREE_LESSONS },
  { id:3, name:"Niveau 3", modules: LEVEL3_MODULES, freeLessonsPerModule: LEVEL3_FREE_LESSONS }
];
let MODULES = LEVELS[0].modules;
let FREE_LESSONS_PER_MODULE = LEVELS[0].freeLessonsPerModule;
