export const ARCHETYPES = [
  { id: 'innocente', nom: "Innocente Incarnée", couleur: '#2AACCB', icone: '✦' },
  { id: 'hedoniste', nom: "Hédoniste Passionné", couleur: '#CC3DAA', icone: '◇' },
  { id: 'divine_mere', nom: "Divine Mère", couleur: '#C9A96E', icone: '★' },
  { id: 'artiste', nom: "Artiste Ingénue", couleur: '#D4845A', icone: '♡' },
  { id: 'sage_leader', nom: "Sage Leader", couleur: '#1E3A8A', icone: '△' },
  { id: 'guerrier', nom: "Guerrier Lumineux", couleur: '#2AACCB', icone: '◈' },
  { id: 'explorateur', nom: "Explorateur Conscient", couleur: '#C9A96E', icone: '∞' },
];

export const QUESTIONS = [
  {
    q: "Si tu étais une saison, tu serais…",
    img: true,
    reponses: [
      { texte: "Le printemps", img: "spring", scores: { innocente: 1 } },
      { texte: "L'été", img: "summer", scores: { hedoniste: 1 } },
      { texte: "L'automne", img: "autumn", scores: { divine_mere: 1, sage_leader: 1 } },
      { texte: "L'hiver", img: "winter", scores: { artiste: 1, explorateur: 1 } },
    ]
  },
  {
    q: "Quel est le besoin prioritaire pour toi ?",
    img: false,
    reponses: [
      { texte: "Besoin de plaire", scores: { hedoniste: 1 } },
      { texte: "Besoin d'attention", scores: { innocente: 1, artiste: 1 } },
      { texte: "Besoin de comprendre", scores: { divine_mere: 1, sage_leader: 1 } },
      { texte: "Besoin de reconnaissance", scores: { guerrier: 1, explorateur: 1 } },
    ]
  },
  {
    q: "Au sein d'une équipe, tu es plutôt…",
    img: false,
    reponses: [
      { texte: "Celle ou celui qui dirige et qui ordonne", scores: { divine_mere: 1, sage_leader: 1 } },
      { texte: "Celle ou celui qui crée et s'exprime", scores: { innocente: 1, artiste: 1 } },
      { texte: "Celle ou celui qui structure", scores: { guerrier: 1 } },
      { texte: "Celle ou celui qui n'en fait qu'à sa tête", scores: { hedoniste: 1, explorateur: 1 } },
    ]
  },
  {
    q: "Qu'est-ce que tu préfères manger ?",
    img: true,
    reponses: [
      { texte: "Un plat exotique et nouveau", img: "exotic", scores: { artiste: 1, explorateur: 1 } },
      { texte: "Un burger ou un steak-frites", img: "burger", scores: { hedoniste: 1 } },
      { texte: "Ça dépend de l'envie du moment", img: "depends", scores: { innocente: 1, hedoniste: 1 } },
      { texte: "Une bonne soupe réconfortante", img: "soup", scores: { divine_mere: 1 } },
      { texte: "Un wrap vegan ou de la raw food", img: "vegan", scores: { guerrier: 1 } },
    ]
  },
  {
    q: "Quelle voiture ferait ton bonheur ?",
    img: true,
    reponses: [
      { texte: "Une Porsche décapotable, faut que ça claque", img: "porsche", scores: { hedoniste: 1 } },
      { texte: "Un Jeep tout-terrain, faut que ça passe partout", img: "jeep", scores: { explorateur: 1 } },
      { texte: "Confortable avec 6 places", img: "family-car", scores: { divine_mere: 1 } },
      { texte: "Une mini trop mimi", img: "mini", scores: { artiste: 1 } },
      { texte: "Une grosse BMW, faut que ça en impose", img: "bmw", scores: { sage_leader: 1 } },
      { texte: "Peu importe tant qu'il y a un chauffeur", img: "chauffeur", scores: { innocente: 1 } },
      { texte: "Une hybride, faut que ça soit propre", img: "hybrid", scores: { guerrier: 1 } },
    ]
  },
  {
    q: "Si tu étais un animal, tu serais…",
    img: true,
    reponses: [
      { texte: "Une étoile de mer", img: "starfish", scores: { innocente: 1 } },
      { texte: "Une guêpe", img: "wasp", scores: { hedoniste: 1 } },
      { texte: "Une marmotte", img: "marmot", scores: { divine_mere: 1 } },
      { texte: "Un ours", img: "bear", scores: { artiste: 1 } },
      { texte: "Une bécasse", img: "woodcock", scores: { sage_leader: 1 } },
      { texte: "Un renard", img: "fox", scores: { guerrier: 1 } },
      { texte: "Une souris", img: "mouse", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Avec quel élément as-tu le plus d'affinités ?",
    img: true,
    reponses: [
      { texte: "L'eau", img: "water", scores: { divine_mere: 1 } },
      { texte: "L'air", img: "air", scores: { artiste: 1, sage_leader: 1 } },
      { texte: "La terre", img: "earth", scores: { guerrier: 1, explorateur: 1 } },
      { texte: "Le feu", img: "fire", scores: { innocente: 1, hedoniste: 1 } },
    ]
  },
  {
    q: "Quel environnement te parle le plus ?",
    img: true,
    reponses: [
      { texte: "Un festival type Burning Man", img: "burning-man", scores: { hedoniste: 1 } },
      { texte: "Une forêt comestible comme chez Willy Wonka", img: "magical-forest", scores: { innocente: 1 } },
      { texte: "Une cour intérieure avec une fontaine", img: "courtyard", scores: { divine_mere: 1 } },
      { texte: "Une rivière agitée et fraîche", img: "river", scores: { artiste: 1 } },
      { texte: "Au sommet d'une montagne", img: "mountain", scores: { sage_leader: 1 } },
      { texte: "Une réserve naturelle protégée", img: "nature-reserve", scores: { guerrier: 1 } },
      { texte: "Où je n'ai jamais mis les pieds", img: "unknown", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Quelle émotion vis-tu le plus souvent ?",
    img: false,
    reponses: [
      { texte: "La colère", scores: { sage_leader: 1, guerrier: 1 } },
      { texte: "La tristesse", scores: { divine_mere: 1, artiste: 1 } },
      { texte: "L'indifférence", scores: { hedoniste: 1, explorateur: 1 } },
      { texte: "La joie", scores: { innocente: 1, hedoniste: 1 } },
    ]
  },
  {
    q: "Quel type de films préfères-tu regarder ?",
    img: true,
    reponses: [
      { texte: "Romantique", img: "romantic", scores: { divine_mere: 1 } },
      { texte: "Aventure", img: "adventure", scores: { hedoniste: 1 } },
      { texte: "Science-fiction", img: "scifi", scores: { sage_leader: 1 } },
      { texte: "Dessins animés", img: "cartoon", scores: { innocente: 1 } },
      { texte: "Policier", img: "crime", scores: { guerrier: 1 } },
      { texte: "Documentaire politique", img: "documentary", scores: { explorateur: 1 } },
      { texte: "Film d'auteur", img: "arthouse", scores: { artiste: 1 } },
    ]
  },
  {
    q: "En situation de conflit, tu es plutôt du genre à…",
    img: false,
    reponses: [
      { texte: "Dire que ce n'est pas de ta faute, que le monde est contre toi", scores: { innocente: 1 } },
      { texte: "Quitter la pièce ou la relation, les conflits ça te saoule", scores: { hedoniste: 1, artiste: 1 } },
      { texte: "Te taire et croire que c'est de ta faute", scores: { divine_mere: 1 } },
      { texte: "Observer pour trouver la faille et convaincre l'autre", scores: { sage_leader: 1, explorateur: 1 } },
      { texte: "Crier et imposer ta vérité", scores: { guerrier: 1 } },
    ]
  },
  {
    q: "Quelle affirmation te convient le mieux ?",
    img: false,
    reponses: [
      { texte: "Je vois le positif dans toute chose et je sais ce que je vaux", scores: { innocente: 1 } },
      { texte: "Je sais qu'on m'apprécie et que j'ai ma place", scores: { hedoniste: 1 } },
      { texte: "Je me fais confiance et je parle vrai", scores: { divine_mere: 1 } },
      { texte: "Je vois le système et j'agis pour le plus grand bien", scores: { sage_leader: 1 } },
      { texte: "J'aime tout ce qui est beau et j'exprime qui je suis", scores: { artiste: 1 } },
      { texte: "Je respecte mes limites et mes besoins", scores: { guerrier: 1 } },
      { texte: "Je connais mes cycles et je vais là où je dois être", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Quand tu es en relation, tu…",
    img: false,
    reponses: [
      { texte: "Es ouverte à toutes les expériences qu'on te propose", scores: { innocente: 1 } },
      { texte: "Es exaltée par les débuts mais la routine t'ennuie vite", scores: { hedoniste: 1, artiste: 1 } },
      { texte: "Préserves l'harmonie et prends soin", scores: { divine_mere: 1 } },
      { texte: "Amènes les ressources mais oublies parfois le lien", scores: { sage_leader: 1, guerrier: 1 } },
      { texte: "Excelle dans l'art de communiquer", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Quelle musique parle à ton âme ?",
    img: false,
    reponses: [
      { texte: '"Man I feel like a woman" de Shania Twain', scores: { artiste: 1 } },
      { texte: '"Tôt le matin" de Gaël Faye', scores: { explorateur: 1 } },
      { texte: '"Ain\'t no mountain high enough" de Marvin Gaye', scores: { hedoniste: 1 } },
      { texte: '"La liste" de Rose', scores: { innocente: 1 } },
      { texte: '"Wild World" de Cat Stevens', scores: { sage_leader: 1 } },
      { texte: '"Thunderstruck" de AC/DC', scores: { guerrier: 1 } },
      { texte: '"Je nous veux" de Céline Dion', scores: { divine_mere: 1 } },
    ]
  },
  {
    q: "Quand tu dois prendre une décision importante, tu fais d'abord…",
    img: false,
    reponses: [
      { texte: "Je pèse le pour et le contre en détail", scores: { sage_leader: 1 } },
      { texte: "Je demande l'avis de personnes de confiance", scores: { divine_mere: 1 } },
      { texte: "Je ferme les yeux et j'écoute ce que mon corps dit", scores: { innocente: 1 } },
      { texte: "Je cherche un signe, un tirage, une confirmation", scores: { artiste: 1 } },
      { texte: "Je passe à l'action, je ne réfléchis pas trop", scores: { guerrier: 1 } },
      { texte: "J'explore toutes les options possibles", scores: { explorateur: 1 } },
      { texte: "Je choisis ce qui me fait le plus envie", scores: { hedoniste: 1 } },
    ]
  },
  {
    q: "Le silence ou la solitude, pour toi c'est…",
    img: false,
    reponses: [
      { texte: "Un moment précieux où je me retrouve", scores: { artiste: 1, sage_leader: 1 } },
      { texte: "Quelque chose que je remplis vite (musique, téléphone)", scores: { hedoniste: 1 } },
      { texte: "Un peu angoissant, je préfère être entourée", scores: { divine_mere: 1 } },
      { texte: "Un luxe que je n'ai pas assez dans ma vie", scores: { innocente: 1 } },
      { texte: "Un espace nécessaire pour me recentrer", scores: { guerrier: 1 } },
      { texte: "Le moment où je me reconnecte à moi", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Ton intuition en ce moment, elle est plutôt…",
    img: false,
    reponses: [
      { texte: "Forte et claire, je lui fais confiance", scores: { sage_leader: 1 } },
      { texte: "Présente mais je ne sais pas si je peux lui faire confiance", scores: { divine_mere: 1, artiste: 1 } },
      { texte: "Étouffée, je ne l'entends plus", scores: { innocente: 1 } },
      { texte: "Mélangée à la peur et au mental, je ne fais pas la différence", scores: { guerrier: 1 } },
      { texte: "Je ne sais pas trop où elle en est", scores: { hedoniste: 1 } },
      { texte: "Elle me guide mais je résiste parfois", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Quand tu penses à ta « bonne trajectoire de vie »…",
    img: false,
    reponses: [
      { texte: "Je sais où je veux aller mais je n'y vais pas", scores: { artiste: 1 } },
      { texte: "Je ne sais même plus ce que ça veut dire", scores: { innocente: 1 } },
      { texte: "Je la sens mais je ne sais pas comment la rejoindre", scores: { divine_mere: 1 } },
      { texte: "Je suis dessus mais je doute", scores: { sage_leader: 1 } },
      { texte: "Je sais et j'y vais", scores: { guerrier: 1 } },
      { texte: "Je l'explore encore, elle se précise", scores: { explorateur: 1, hedoniste: 1 } },
    ]
  },
  {
    q: "Ce qui te freine le plus dans l'écoute de toi…",
    img: false,
    reponses: [
      { texte: "Le manque de temps", scores: { sage_leader: 1 } },
      { texte: "Le manque de confiance en moi", scores: { artiste: 1 } },
      { texte: "Le bruit extérieur (avis, conseils, attentes)", scores: { divine_mere: 1 } },
      { texte: "La peur de faire le mauvais choix", scores: { innocente: 1 } },
      { texte: "Mon mental qui analyse tout", scores: { explorateur: 1 } },
      { texte: "La fatigue, le manque d'énergie", scores: { hedoniste: 1 } },
      { texte: "Je ne sais pas par où commencer", scores: { guerrier: 1 } },
    ]
  },
  {
    q: "Si tu pouvais recevoir un message rien que pour toi, tu aimerais…",
    img: false,
    reponses: [
      { texte: "Qu'on me rassure sur ma direction", scores: { innocente: 1 } },
      { texte: "Qu'on m'aide à oser ce que je n'ose pas", scores: { artiste: 1, hedoniste: 1 } },
      { texte: "Qu'on m'offre un cadre pour m'écouter", scores: { divine_mere: 1, sage_leader: 1 } },
      { texte: "Qu'on me donne une clé concrète pour avancer", scores: { guerrier: 1 } },
      { texte: "Qu'on m'ouvre une perspective que je n'avais pas vue", scores: { explorateur: 1 } },
    ]
  },
  {
    q: "Aujourd'hui, ce qui compte le plus pour toi c'est…",
    img: false,
    reponses: [
      { texte: "Retrouver la joie et la légèreté", scores: { innocente: 1 } },
      { texte: "Vivre pleinement mes désirs et mes passions", scores: { hedoniste: 1 } },
      { texte: "Prendre soin de moi et des miens", scores: { divine_mere: 1 } },
      { texte: "Créer et exprimer qui je suis vraiment", scores: { artiste: 1 } },
      { texte: "Construire quelque chose de solide", scores: { sage_leader: 1 } },
      { texte: "Avancer et me dépasser", scores: { guerrier: 1 } },
      { texte: "Découvrir et explorer de nouveaux chemins", scores: { explorateur: 1 } },
    ]
  },
];

export const RESULTATS = {
  innocente: {
    titre: "Innocente Incarnée",
    sous_titre: "Tu es connectée à tes besoins profonds et à la joie de vivre.",
    force: "Tu as une capacité naturelle à ressentir ce qui est bon pour toi. Ton intuition est pure, directe, comme un enfant qui sait ce dont il a besoin sans hésiter. Tu vois le positif partout et ta joie est contagieuse.",
    defi: "Tu peux douter de ta valeur et te laisser submerger par tes émotions. Parfois, tu manques de vision à long terme et tu as besoin qu'on t'aide à ancrer ta direction sans perdre ta joie.",
    pratique: "Un rituel tout doux pour revenir à ton corps et écouter ce qu'il te dit vraiment — sans le filtre du mental ni de la peur des autres.",
    emoji: "✦",
    carte: "pétillance"
  },
  hedoniste: {
    titre: "Hédoniste Passionné",
    sous_titre: "Tu sais ce que tu veux et tu vis pleinement.",
    force: "Ton magnétisme naturel et ta confiance en toi font de toi une personne profondément vivante et inspirante. Tu suis tes désirs avec intensité et tu ne te contentes pas de moins que ce qui te fait vibrer.",
    defi: "Tu as tendance à brûler les étapes et à remplir le vide par l'action. Le silence te confronte à tes peurs, et tu peux confondre intensité et durabilité.",
    pratique: "Trois minutes pour rester immobile et silencieux — affronter le vide pour entendre ce qui est vraiment là, au-delà de l'excitation du moment.",
    emoji: "◇",
    carte: "feu sacré"
  },
  divine_mere: {
    titre: "Divine Mère",
    sous_titre: "Ton intuition est un don que tu offres au monde.",
    force: "Tu as une intuition naturelle puissante, surtout pour prendre soin des autres et créer l'harmonie autour de toi. Ta sagesse ancestrale fait de toi un phare pour ceux qui te entourent.",
    defi: "Tu t'oublies facilement dans la relation à l'autre. Ton intuition est forte, mais tu l'utilises surtout pour les autres — pas assez pour toi-même.",
    pratique: "Un tirage oracle pour toi, rien que pour toi — réapprendre à te poser les questions qui comptent pour ta propre vie.",
    emoji: "★",
    carte: "sagesse"
  },
  artiste: {
    titre: "Artiste Ingénue",
    sous_titre: "Tu vois la beauté là où les autres ne voient rien.",
    force: "Ta créativité et ta sensibilité sont des super-pouvoirs. Tu ressens le monde intensément et tu exprimes ta vérité avec authenticité. Ta liberté d'être inspire les autres.",
    defi: "Tu peux douter de ta légitimité et te cacher derrière un masque. Le regard des autres t'impacte plus que tu ne le montres, et tu as besoin d'un espace sécurisé pour exprimer pleinement qui tu es.",
    pratique: "Exprimer ce qui est vrai pour toi, maintenant — un exercice créatif pour libérer ta voix sans filtre ni jugement.",
    emoji: "♡",
    carte: "créativité"
  },
  sage_leader: {
    titre: "Sage Leader",
    sous_titre: "Tu construis des systèmes solides avec cœur.",
    force: "Tu as le sens du cadre, de la structure et de la responsabilité. Tu es un roc sur qui les autres peuvent compter. Tu sais créer des systèmes fiables et prendre des décisions éclairées.",
    defi: "Tu écoutes ta tête plus que ton corps. Ta puissance peut intimider, et tu as tendance à tout contrôler plutôt que de lâcher prise. Descendre de la tour de contrôle dans ton ventre est ton défi.",
    pratique: "Descendre de la tour de contrôle dans ton ventre — un exercice pour écouter ce que ton corps sait, au-delà de ce que ton mental analyse.",
    emoji: "△",
    carte: "vision"
  },
  guerrier: {
    titre: "Guerrier Lumineux",
    sous_titre: "Tu te bats pour ce qui est juste avec tout ton cœur.",
    force: "Tu passes à l'action rapidement et tu défends tes valeurs avec intégrité. Ta capacité à voir et déconstruire les conditionnements est remarquable. Tu es un protecteur né.",
    defi: "Tu peux confondre action et écoute. Parfois, tu fonces sans avoir pris le temps de sentir si c'est vraiment la bonne direction. Le conflit peut te faire perdre ta connexion à toi-même.",
    pratique: "Poser les armes et écouter avant d'agir — arrêter la course pour vérifier que ce que tu combats est vraiment ce qui mérite ton énergie.",
    emoji: "◈",
    carte: "feu sacré"
  },
  explorateur: {
    titre: "Explorateur Conscient",
    sous_titre: "Tu es libre et tu vis pour découvrir.",
    force: "Tu t'adaptes partout et tu as une intelligence du monde qui te rend unique. Tu comprends les cycles de la vie et tu sais concilier liberté et connexion. Ton ouverture d'esprit est immense.",
    defi: "Tu as du mal à t'ancrer dans une pratique régulière. Ta liberté d'explorer peut te faire passer à côté de l'approfondissement. Tu as besoin d'un cadre qui te suit sans te brider.",
    pratique: "Un cadre qui suit ton rythme sans te brider — créer une pratique intuitive qui s'adapte à ton besoin d'exploration.",
    emoji: "∞",
    carte: "exploration"
  }
};