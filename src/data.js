import uuid from 'uuid';

const restaurants = [
    {
      "_id": "5cb9ed7c546323e9de0cd96c",
      "photo": "Hôtel Restaurant La Varangue.jpg",
      "nom": "Hôtel Restaurant La Varangue",
      "desc": "Une adresse de luxe, réputée aussi bien pour son hôtel que pour son restaurant, ouvre notre classement.",
      "cuisine": "Malgache",
      "tel": "+261 34 88 047 13",
      "adresse": "137 Centre Street, Greenbush, Minnesota, 3813",
      "geo": "-14.103356, -177.22209",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Entrées",
          "prix": 32.47
        },
        {
          "id": 2,
          "nom": "Plats de résistance",
          "prix": 31.51
        },
        {
          "id": 3,
          "nom": "Desserts",
          "prix": 32.36
        }
      ]
    },
    {
      "_id": "5cb9ed7c457c56b9772471c3",
      "photo": "Hédiard.jpg",
      "nom": "Hédiard",
      "desc": "Deuxième ex-aequo avec le Grand Orient, Hédiard, bien sûr, c’est le gage d’une très grande qualité, reconnue à Paris comme à Antananarivo.",
      "cuisine": "Malgache",
      "tel": "+261 32 88 450 42",
      "adresse": "411 Hemlock Street, Glenbrook, Oregon, 4917",
      "geo": "5.408806, 70.560048",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 3,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 1,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c7ac8167b168bc5b1",
      "photo": "Restaurant Grand Orient.jpg",
      "nom": "Restaurant Grand Orient",
      "desc": "Parmi les adresses de luxe, et une nouvelle fois à Ivandry, le Grand Orient caracole dans 3 de nos critères : la qualité des plats (une cuisine asiatique), le service (des serveurs aux petits soins, qui se penchent pour remplir votre verre à moitié vide, s’inquiètent de votre plaisir…) ainsi que l’ambiance du lieu !",
      "cuisine": "Malgache",
      "tel": "+261 34 91 743 22",
      "adresse": "626 Bowery Street, Herald, Michigan, 525",
      "geo": "-24.675256, -91.056559",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 3,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c630cd3d4406ff320",
      "photo": "Emma Planque.jpg",
      "nom": "Emma Planque",
      "desc": "Du côté de l’ambiance, c’est un must : chez Emma Planque, on se sent comme à la maison, avec une cheminée, une douce musique, et un espace vert pour les enfants.",
      "cuisine": "Malgache",
      "tel": "+261 32 81 245 73",
      "adresse": "551 Lafayette Avenue, Vaughn, Palau, 419",
      "geo": "34.52379, 176.167414",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 2,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 3,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c7dc5dad291e4d57b",
      "photo": "Pizzéria Au Stade.jpg",
      "nom": "Pizzéria Au Stade",
      "desc": "Pas vraiment une adresse gastronomique… La Pizzéria Au Stade propose cependant les meilleures (sans doute) pizzas de la capitale.",
      "cuisine": "Malgache",
      "tel": "+261 34 80 550 72",
      "adresse": "365 Baughman Place, Leola, Arkansas, 4288",
      "geo": "39.068532, 65.327817",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 1,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 2,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 3,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c028ba097b513cf29",
      "photo": "Dzama Cocktail Café.jpg",
      "nom": "Dzama Cocktail Café",
      "desc": "Ne vous fiez pas à son nom… Le Dzama Cocktail Café est un excellent restaurant, parfait pour les repas d’affaires. Et, bien sûr, il propose un grand choix de cocktails, le midi comme le soir.",
      "cuisine": "Malgache",
      "tel": "+261 32 83 357 23",
      "adresse": "297 Bartlett Street, Sunriver, Colorado, 427",
      "geo": "56.320314, -124.648048",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 1,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 3,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c2df815e6a79e7dcf",
      "photo": "Restaurant Le Carnivore.jpg",
      "nom": "Restaurant Le Carnivore",
      "desc": "A l’instar d’une véritable Churrascaria brésilienne, l’enseigne sert de succulentes grillades préparées à partir de viandes malgaches fraiches.",
      "cuisine": "Malgache",
      "tel": "+261 33 90 744 12",
      "adresse": "314 Beard Street, Topaz, New Mexico, 7680",
      "geo": "77.278414, 106.12741",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 2,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 3,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 1,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 3,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c2a4ec811d8f5df38",
      "photo": "Pizzeria Chez Arnaud.jpg",
      "nom": "Pizzeria Chez Arnaud",
      "desc": "Chez Arnaud est une adresse incontournable pour les amateurs de bonnes pizzas à Antananarivo. Ouvert du mardi au dimanche, ce restaurant de Tana, offre un choix varié de pizzas et de spécialités européennes.",
      "cuisine": "Mixte",
      "tel": "+261 33 84 044 73",
      "adresse": "810 Covert Street, Dante, Iowa, 3133",
      "geo": "-16.49945, -113.094205",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 3,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 2,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c9487017798f35001",
      "photo": "Côté Saveurs.jpg",
      "nom": "Côté Saveurs",
      "desc": "Situé dans le quartier d’Androhibe, ce restaurant gastronomique de Tananarive profite d’un cadre verdoyant et empreint de quiétude.",
      "cuisine": "Malgache",
      "tel": "+261 33 90 859 73",
      "adresse": "341 Vanderveer Place, Roland, Federated States Of Micronesia, 4347",
      "geo": "-77.928339, -91.049699",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 3,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 3,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 1,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cff559f780cf1daa4",
      "photo": "Atlantis.jpg",
      "nom": "Atlantis",
      "desc": "Situé à deux pas de la charmante bourgade d'Ambohitrarahaba, le restaurant Atlantis vous accueille dans un cadre accueillant, arboré et pourvu d'installations modernes.",
      "cuisine": "Malgache",
      "tel": "+261 32 98 343 52",
      "adresse": "846 Bijou Avenue, Vowinckel, Oklahoma, 9748",
      "geo": "56.151807, -122.809077",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 3,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c99747df6c6778036",
      "photo": "Le Café de la Gare.jpg",
      "nom": "Le Café de la Gare",
      "desc": "Restaurant cosmopolite, le Café de la Gare vous accueille dans sa brasserie et son lounge convivial pour vos virées entre amis, vos soirées entre collègues ou vos sorties en amoureux à Tananarive. L’infrastructure de ce restaurant de Tana s’adapte aussi à l’organisation  de cocktails, de séminaires, de conférences de presse, de mariages ou de dîners de gala.",
      "cuisine": "Mixte",
      "tel": "+261 34 80 548 42",
      "adresse": "762 Irving Place, Basye, Georgia, 8024",
      "geo": "-71.858475, 89.547261",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 3,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 3,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 1,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7ce01f9a312737d3ed",
      "photo": "Restaurant L'Eurasie.jpg",
      "nom": "Restaurant L'Eurasie",
      "desc": "Ce restaurant situé à Ankorondrano, face à l'hôtel ibis, vous surprendra par son aisance à marier les spécialités culinaires chinoises et françaises.",
      "cuisine": "Euro-asiatique",
      "tel": "+261 32 84 545 22",
      "adresse": "888 Madoc Avenue, Churchill, Maine, 5399",
      "geo": "13.887212, -30.12106",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 3,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 3,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 2,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 1,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c24bf262dd7af8840",
      "photo": "La Bastide Blanche.jpg",
      "nom": "La Bastide Blanche",
      "desc": "La Bastide Blanche est une des tables de Tananarive où apprécier les subtilités de la cuisine chinoise et la saveur des plats mauriciens. Agencé dans un cadre sympathique et très accueillant, ce restaurant de Tana vous séduira par son ambiance familiale et son intimité.",
      "cuisine": "Malgache",
      "tel": "+261 32 92 142 42",
      "adresse": "183 Lake Street, Boomer, Kansas, 8288",
      "geo": "39.249761, -12.274172",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 1,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c87021033f1de79cf",
      "photo": "Restaurant La Boussole.jpg",
      "nom": "Restaurant La Boussole",
      "desc": "La Boussole Art Café est une des meilleures tables de Tana. Aménagé au cœur d'un jardin paysager dans le paisible quartier d'Isoraka, ce restaurant de caractère profite d'un cadre propice à l'évasion des sens.",
      "cuisine": "Malgache",
      "tel": "+261 32 84 544 93",
      "adresse": "987 Campus Road, Manitou, North Dakota, 1383",
      "geo": "8.181023, 176.755186",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 3,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c3c905c6c687ae128",
      "photo": "Restaurant le Carré.jpg",
      "nom": "Restaurant le Carré",
      "desc": "Restaurant tendance aménagé dans le quartier d’Antsahavola, Le Carré lounge est le lieu idéal pour prendre un verre et dîner dans un cadre convivial.",
      "cuisine": "Malgache",
      "tel": "+261 32 93 859 62",
      "adresse": "981 Jackson Street, Tecolotito, Tennessee, 6915",
      "geo": "-89.914327, -32.677982",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 3,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 3,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c57848eba5f322fe4",
      "photo": "Restaurant Le Paprika.jpg",
      "nom": "Restaurant Le Paprika",
      "desc": "Le Paprika est un restaurant d'ambiance situé dans le quartier d'Andraharo, à quelques pas de la zone industrielle Galaxy.",
      "cuisine": "Malgache",
      "tel": "+261 33 81 955 93",
      "adresse": "881 Aberdeen Street, Wyoming, Alaska, 8457",
      "geo": "-56.931236, 165.844847",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 3,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c61a4168969886186",
      "photo": "Le Petit Verdot.jpg",
      "nom": "Le Petit Verdot",
      "desc": "Aussi bien fréquenté par les touristes que par les nationaux, le restaurant Le Petit Verdot se distingue par l’originalité de ses options de restauration et par ses tarifs abordables.",
      "cuisine": "Guinea",
      "tel": "+261 33 83 559 62",
      "adresse": "379 Havens Place, Finzel, New York, 5837",
      "geo": "37.39305, 60.117168",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 3,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 3,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c09cfebada542023c",
      "photo": "Le Shandong.jpg",
      "nom": "Le Shandong",
      "desc": "Les amateurs de menus sucrés-salés et adeptes de nouvelles expériences gustatives se feront un plaisir de faire une pause gourmande dans ce restaurant d'Antananarivo.",
      "cuisine": "Malgache",
      "tel": "+261 34 86 350 83",
      "adresse": "581 Fayette Street, Ruffin, Illinois, 1727",
      "geo": "-56.99453, -12.319407",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 3,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c5d3221793f490355",
      "photo": "Restaurant Maka'Ai.jpg",
      "nom": "Restaurant Maka'Ai",
      "desc": "Situé dans le quartier d'Analamahitsy, route vers Nanisana, le Maka'Ai restaurant vous accueille du lundi au dimanche dans un cadre intime et familial.",
      "cuisine": "Malgache",
      "tel": "+261 34 98 258 53",
      "adresse": "371 Locust Avenue, Brazos, Maryland, 1960",
      "geo": "-63.945123, 64.918845",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 3,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c8c30bde3816994fe",
      "photo": "Au Viko Viko.jpg",
      "nom": "Au Viko Viko",
      "desc": "Le Viko Viko est un restaurant convivial situé en plein cœur de Tananarive. Accessible à quelques enjambées de l’hôtel Carlton, ce restaurant de Tana distille une atmosphère familiale.",
      "cuisine": "Malgache",
      "tel": "+261 32 84 447 82",
      "adresse": "728 Boerum Street, Logan, Montana, 1751",
      "geo": "-56.745744, -80.583805",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 1,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 3,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c13c56a7c16c5da21",
      "photo": "Table d’hôtes de Mariette.jpg",
      "nom": "Table d’hôtes de Mariette",
      "desc": "La table d’hôtes de Mariette est sans conteste l’une des meilleures tables de la capitale. Situé dans le quartier de Faravohitra, un des quartiers les plus calmes de Tananarive, ce temple de la saveur attire les gourmets de tous horizons.",
      "cuisine": "Malgache",
      "tel": "+261 32 86 940 43",
      "adresse": "183 Varanda Place, Guilford, Florida, 1253",
      "geo": "-10.939283, 99.944264",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 2,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 1,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 3,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c01b4445261bda175",
      "photo": "Restaurant du Palais Royal.jpg",
      "nom": "Restaurant du Palais Royal",
      "desc": "C'est dans le cadre idyllique des jardins du Palais Royal, à deux pas du ministère de la Culture, qu'on trouve cet élégant restaurant qui ne cache pas ses ambitions gastronomiques. Aux fourneaux officie le jeune chef grec Philip Chronopoulos, qui fut notamment chef exécutif de l'Atelier de Joël Robuchon-Étoile. Avec de superbes produits, il signe ici une cuisine créative, percutante, se fendant de recettes d'une vivifiante maturité – en témoignent ces langoustines justes saisies, girolles et amandes fraîches. On se délecte de ces douceurs dans un cadre contemporain au luxe discret, qui est un régal pour les yeux. L'été, la terrasse sous les arcades offre à vos agapes un décor à la hauteur de l'assiette. Avis aux amateurs : les petits clafoutis maison aux fruits de saison, offerts avant le café, sont un délice... Royal, c'est le mot.",
      "cuisine": "Française",
      "tel": "+261 32 90 949 92",
      "adresse": "813 Orange Street, Franklin, Nebraska, 1609",
      "geo": "-6.962509, -12.066888",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7ca7f73e20d163484c",
      "photo": "Les Pêcheurs.jpg",
      "nom": "Les Pêcheurs",
      "desc": "Superbement ancrés au bord des flots, ces Pêcheurs mettent évidemment à l'honneur le poisson de la Méditerranée... et plus largement toutes les belles saveurs du Sud, délicatement ciselées ; on se régale dans une salle à manger élégante et moderne (béton et verre), ou sur la terrasse à l'abri des voiles. Un petit paradis très Côte d'Azur !",
      "cuisine": "Française",
      "tel": "+261 33 92 154 23",
      "adresse": "429 Portland Avenue, Saranap, Indiana, 2020",
      "geo": "15.34084, -166.34328",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 1,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 2,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 3,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c9253fcdb09e8e647",
      "photo": "Fanny Rey & Jonathan Wahid.jpg",
      "nom": "Fanny Rey & Jonathan Wahid",
      "desc": "Fanny Rey, finaliste de Top Chef 2011, est aux fourneaux de cette vénérable Auberge et décline une savoureuse cuisine du marché, mettant superbement en valeur les produits des Alpilles. À ses côtés, on trouve nul autre que... Jonathan Wahid, son compagnon, pâtissier émérite et ancien champion de France du dessert. Un duo de choc !",
      "cuisine": "Française",
      "tel": "+261 34 90 650 42",
      "adresse": "486 Harbor Lane, Washington, Arizona, 8229",
      "geo": "-13.053457, 131.893075",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 1,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 2,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 3,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 1,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 3,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c4a22332be607e77b",
      "photo": "La Liégeoise.jpg",
      "nom": "La Liégeoise",
      "desc": "La Liégeoise offre une cuisine “poisson-passion” de toute beauté sur la digue de Wimereux. Lotie au 1er étage de l’hôtel Atlantic complètement tourné vers le large, le panorama y est splendide.",
      "cuisine": "Française",
      "tel": "+261 33 81 541 53",
      "adresse": "120 Flatlands Avenue, Yukon, Puerto Rico, 8557",
      "geo": "32.119677, -12.558961",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 2,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 3,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 1,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cd2e60cae01724afc",
      "photo": "Le Chiberta.jpg",
      "nom": "Le Chiberta",
      "desc": "Le Chiberta version Guy Savoy s’est choisi le noir comme couleur, le vin comme symbole et l’inventivité comme fil conducteur. En entrant, on est plongé dans un autre univers, tamisé, calme et feutré. Parfait pour les repas d’affaires comme pour les rencontres plus intimes. L’aménagement intérieur, conçu par l’architecte Jean-Michel Wilmotte, surprend par son minimalisme radical, tout en chic discret et design. La grande originalité du lieu reste indéniablement la \"cave\"",
      "cuisine": "Française",
      "tel": "+261 32 92 957 63",
      "adresse": "555 Pilling Street, Datil, Washington, 6125",
      "geo": "-5.316345, 125.51941",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 3,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 1,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c496375d8f7b43b6d",
      "photo": "Hostellerie Bérard.jpg",
      "nom": "Hostellerie Bérard",
      "desc": "À la suite de son père René, Jean-François Bérard a repris le flambeau de la table familiale. Jus corsés et émulsions subtiles, produits de qualité (dont les légumes et herbes du jardin)... du beau travail au service du goût, entre héritage et nouveauté !",
      "cuisine": "Française",
      "tel": "+261 33 88 455 72",
      "adresse": "608 Glenmore Avenue, Edneyville, Virginia, 9096",
      "geo": "61.106809, 63.876124",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 3,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7ca8a2bb62aaed7c41",
      "photo": "Patrick Jeffroy.jpg",
      "nom": "Patrick Jeffroy",
      "desc": "Arborant 2 étoiles au guide MICHELIN, le Restaurant Patrick Jeffroy à Carantec offre une audacieuse cuisine entre terre et mer. Avec la baie de Morlaix en fond d’écran, le chef s’attelle à sublimer les prises du jour dans votre assiette...",
      "cuisine": "Française",
      "tel": "+261 32 87 659 33",
      "adresse": "429 Throop Avenue, Homeland, South Carolina, 4586",
      "geo": "-43.004707, -35.920816",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 2,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 3,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7ce6bf551b5a6dbf6f",
      "photo": "Le Saint-Estève.jpg",
      "nom": "Le Saint-Estève",
      "desc": "C'est donc dans ce domaine luxueux que l'on retrouve Mathias Dandine, chef provençal dont le talent est déjà bien connu. Sa philosophie peut se résumer ainsi : les meilleurs produits de saison, une certaine simplicité et des parfums marqués. Tout l'éclat des saveurs de la région !",
      "cuisine": "Française",
      "tel": "+261 33 86 651 72",
      "adresse": "691 Sandford Street, Trinway, Marshall Islands, 7168",
      "geo": "-66.800133, 61.675626",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 1,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 2,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 3,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c6f3b5db4af77a042",
      "photo": "Le Saint-James.jpg",
      "nom": "Le Saint-James",
      "desc": "Un écrin design et baigné de lumière, dominant les environs... Voilà un bel endroit pour un repas de qualité, ancré dans la région : les produits aquitains y sont bien mis en valeur, en accord avec les vins du cru.",
      "cuisine": "Française",
      "tel": "+261 34 86 247 53",
      "adresse": "417 Doone Court, Reno, Utah, 1304",
      "geo": "-30.065138, 0.536604",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 1,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 3,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cdcb13dd889b393cb",
      "photo": "Auberge de l'Ill.jpg",
      "nom": "Auberge de l'Ill",
      "desc": "L’histoire commence au 19e s. : en 1882, Frédéric Haeberlin rachète avec son épouse la modeste Auberge de l’Arbre Vert sur les rives de l’Ill, entre Sélestat et Riquewihr. Matelote au riesling, préparations de gibier : l’adresse se fait un nom dans une veine \"terroir\" bien affirmée. Mais c’est après-guerre que Paul et Jean-Pierre font monter la maison en gamme. Marc Haeberlin est le dernier dépositaire de cette histoire familiale intiment liée à celle de l’Alsace. Comme un symbole, il réalise une belle alliance entre les créations de ses illustres prédécesseurs (timbale de homard, mousseline de grenouille, foie gras aux épices) et d’autres plus modernes, avec une philosophie toute personnelle : pas plus de trois saveurs différentes dans un plat. Simplicité, respect du produit, variété des préparations : le mythe est toujours vivace.",
      "cuisine": "Française",
      "tel": "+261 32 85 157 82",
      "adresse": "426 Nichols Avenue, Beaverdale, Wisconsin, 2668",
      "geo": "42.263431, 122.956846",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 2,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 3,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 1,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 3,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c8ad20d82b28ad27a",
      "photo": "Le Clarence.jpg",
      "nom": "Le Clarence",
      "desc": "Christophe Pelé au Clarence ? D’abord, on n’y a pas cru. Que viendrait donc faire l’artiste torturé de la Bigarrade (2 étoiles des Batignolles, à Paris, 2007-2012) dans ce somptueux hôtel particulier de 1884 situé à proximité des Champs-Élysées, et dont le cadre luxueux - murs tendus de tissus, boiseries murales dans la bibliothèque – invite à proposer une cuisine française bourgeoise ? Figurez-vous que la greffe a pris. Il est vrai que le chef connaît bien l’arrondissement parisien, pour avoir officié chez Ledoyen, Lasserre, Pierre Gagnaire, ou au Bristol.Pour vous en assurer, prenez l'apéritif dans le grand salon, au deuxième étage, dont le décor s'inspire du Château Haut-Brion. Aux fourneaux, ça swingue !",
      "cuisine": "Française",
      "tel": "+261 34 80 448 23",
      "adresse": "102 Gerald Court, Maury, Idaho, 5424",
      "geo": "-22.610447, 85.280489",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 3,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 2,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c9783a840673a3a9b",
      "photo": "Jean-Marc Pérochon.jpg",
      "nom": "Jean-Marc Pérochon",
      "desc": "Attablé derrière les grandes baies vitrées du restaurant, on admire les reflets du soleil sur l'Atlantique et les quelques gréements qui s'y découpent... Puis on découvre avec plaisir une cuisine savoureuse, sûre de ses fondamentaux, entre mer et terre (tourteau, langoustines, homard, poisson, volaille de Challans, etc.).",
      "cuisine": "Française",
      "tel": "+261 33 98 256 23",
      "adresse": "977 Dekoven Court, Bladensburg, District Of Columbia, 6072",
      "geo": "-12.31312, -55.946775",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 3,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 3,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 1,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c672a7a827f40afb4",
      "photo": "Christophe Bacquié.jpg",
      "nom": "Christophe Bacquié",
      "desc": "Christophe Bacquié multiplie ensuite les expériences parisiennes avant de retrouver la Corse, où il a grandi (La Villa à Calvi).Ensuite, tout va très vite : une étoile en 2002, la seconde en 2007. En guise d’écrin, un endroit splendide, niché au cœur de la Provence, tout proche du circuit automobile Paul-Ricard.Merlu de ligne, saint-pierre, langoustines de casier, poulpe (un summum !), mais aussi légumes des maraîchers locaux : les assiettes chantent les louanges de la région, cette Méditerranée éternelle et qui, décidément, enfante de bien talentueux créateurs. Une gastronomie époustouflante, à déguster sur la splendide terrasse, le palais en pâmoison.",
      "cuisine": "Française",
      "tel": "+261 33 94 353 83",
      "adresse": "797 Norman Avenue, Maxville, Virgin Islands, 2016",
      "geo": "-4.765823, -95.787845",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 2,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 3,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cd8aa8d6d3a5ede9f",
      "photo": "Le Pré Catelan.jpg",
      "nom": "Le Pré Catelan",
      "desc": "Un lieu somptueux et chargé d’histoire, mais inscrit dans notre époque : tel est Le Pré Catelan ! On doit à Pierre-Yves Rochon d'avoir révolutionné l'esprit de ce pavillon Napoléon III niché en plein cœur du bois de Boulogne, à grand renfort de mobilier design et de tons vert, blanc et argent.Aux commandes de cette noble maison, on continue de profiter des créations d'un Meilleur Ouvrier de France à la passion intacte : Frédéric Anton.",
      "cuisine": "Française",
      "tel": "+261 32 95 646 22",
      "adresse": "627 Kathleen Court, Brenton, Alabama, 605",
      "geo": "43.584484, 94.769845",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 3,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 1,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 3,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 1,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c7bdfaea9f4eaf760",
      "photo": "Le Carmin.jpg",
      "nom": "Le Carmin",
      "desc": "Sur cette place Carnot toute proche de l'Hôtel-Dieu, un vivifiant Carmin ! Le chef, Christophe Quéant, met à profit son expérience pour réaliser de très bons plats au goût du jour, tout en simplicité et en franchise. Avec, en prime, un très bon rapport plaisir-prix.",
      "cuisine": "Française",
      "tel": "+261 32 99 357 72",
      "adresse": "967 Overbaugh Place, Clay, Connecticut, 1820",
      "geo": "-50.10193, -81.293107",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 3,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 3,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 2,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 1,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c546a23bf275b8649",
      "photo": "Loiseau rive Gauche.jpg",
      "nom": "Loiseau rive Gauche",
      "desc": "Si la table se trouve rue de Bourgogne, qu'on ne s'y trompe pas : on célèbre ici tous les terroirs, qu'ils soient auvergnat, savoyards, ou autres ! Cette institution bourgeoise du groupe Bernard Loiseau offre un décor cossu, avec boiseries, chaises Louis XV et... une étonnante table design (la n° 20). À la carte du chef auvergnat Maxime Laurenson, une cuisine délicate, très identitaire, déclinée autour d'un menu idéalement nommé \"Climats de saison\", ou d'un menu dégustation \"Nature instantanée\".",
      "cuisine": "Française",
      "tel": "+261 34 92 149 03",
      "adresse": "942 Pitkin Avenue, Vincent, Northern Mariana Islands, 6871",
      "geo": "-62.3862, -25.011583",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 1,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cb1d1cc4a2d674e4b",
      "photo": "Le Violon d'Ingres.jpg",
      "nom": "Le Violon d'Ingres",
      "desc": "Une enseigne au sens double pour Christian Constant : elle évoque à la fois sa passion pour la cuisine, héritée de sa grand-mère, et sa fascination pour le peintre éponyme, originaire comme lui de Montauban. Le nom de son premier restaurant était donc tout trouvé, quand il a décidé de voler de ses propres ailes après une brillante carrière dans les palaces et les grandes maisons (Ledoyen, Ritz, Crillon). Ici, fini les grosses brigades et les ambiances très huppées : Christian Constant s'exprime avec simplicité, faisant confiance à une équipe réduite, dans ce qui ressemble à une néobrasserie de luxe. La salle se pare de teintes taupe, brun et beige, avec de grands miroirs muraux pour en agrandir l'espace. On y déguste de belles recettes traditionnelles – où le Sud-Ouest tient une bonne place –, d’une parfaite maîtrise technique, mais joliment modernisées et toujours concoctées à base de produits de grande qualité. Un détail : pensez à réserver, c’est souvent complet.",
      "cuisine": "Française",
      "tel": "+261 34 81 053 72",
      "adresse": "361 Abbey Court, Ola, Texas, 1461",
      "geo": "72.694335, -111.029766",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 1,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 3,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c9337d86422e27748",
      "photo": "L'Auberge des Glazicks.jpg",
      "nom": "L'Auberge des Glazicks",
      "desc": "La plage de Saint-Anne-La-Palud, Douarnenez, la pointe du Raz, Locronan et sa cité médiévale et, un peu plus au sud, Pont-Aven et la cité des peintres… Tels sont les paysages quotidiens du chef doublement étoilé Olivier Bellin. Il est vrai que la Bretagne a cette faculté unique de charmer l’imaginaire.",
      "cuisine": "Française",
      "tel": "+261 33 95 556 32",
      "adresse": "301 Village Court, Sisquoc, New Hampshire, 3846",
      "geo": "0.25957, 10.925877",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 3,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 3,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c2a1d1f0be4529237",
      "photo": "Aux Pesked.jpg",
      "nom": "Aux Pesked",
      "desc": "Laissez-vous saisir par l’univers magique du restaurant « aquatique et végétal » Aux Pesked, signifiant Aux Poissons. Récompensé d’une étoile au guide MICHELIN, l’établissement offre une cuisine fraiche et créative de la mer créative avec une vue imprenable sur la vallée du Gouët à Saint-Brieuc.",
      "cuisine": "Française",
      "tel": "+261 34 82 953 02",
      "adresse": "975 Bristol Street, Hickory, Guam, 235",
      "geo": "61.733855, -160.235389",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 3,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 3,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c6aa04be1e0692ddc",
      "photo": "L'Auberge de la Pomme.jpg",
      "nom": "L'Auberge de la Pomme",
      "desc": "Un nom hautement normand, une façade à colombages typique de la région... mais l'image d'Épinal s'arrête là ! La maison cache un décor très contemporain, bien à l'image de la cuisine du chef, William Boquelet, aussi inventif que passionné. Ses assiettes, pleines de relief, mettent bien en valeur les producteurs locaux...",
      "cuisine": "Française",
      "tel": "+261 32 95 757 22",
      "adresse": "609 Claver Place, Bridgetown, New Jersey, 4335",
      "geo": "27.953475, 103.77235",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 0,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 1,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 2,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 1,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 3,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c45854e25256ed39b",
      "photo": "Paul Bocuse.jpg",
      "nom": "Paul Bocuse",
      "desc": "Paul Bocuse, ce n’est rien moins que la statue du Commandeur. Tous les surnoms – primats des gueules, pape de la gastronomie – ne suffisent pas à résumer ce chef hors pair, aussi fort aux fourneaux qu’en affaires, dont le décès en 2018 a laissé le monde des toques sans voix. Il est celui par qui les brigades et leurs chefs sont passés de l’obscurité à la lumière : il est, en quelque sorte, le premier des modernes.",
      "cuisine": "Française",
      "tel": "+261 32 81 357 22",
      "adresse": "327 Lloyd Court, Cedarville, Delaware, 770",
      "geo": "45.954042, 118.375197",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 3,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 2,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 1,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 3,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c02d6b2f8a534cfc7",
      "photo": "La Table de Franck Putelat.jpg",
      "nom": "La Table de Franck Putelat",
      "desc": "La Cité médiévale fait partie du patrimoine immémorial de Carcassonne et sa région… et l’on pourrait presque en dire autant de Franck Putelat. Installé au pied des remparts de ladite cité, ce natif du Jura, Audois d’adoption, cuisine – brillamment – selon le concept de classique-fiction qu’il a lui-même théorisé.Traduction dans l’assiette : un détournement astucieux des anciens tubes gastronomiques (le classique), que le chef emmène ailleurs au gré de son inspiration du jour (la fiction). Trois exemples, devenus des incontournables : tartare d’huîtres Tarbouriech, filet de bœuf clouté de truffe noire et lard de Colonnata, ou encore bouillabaisse au foie gras de canard.Des visuels appétissants, du goût et de la finesse : on se délecte dans une ambiance animée – musique de rigueur, avis aux amateurs – parmi une clientèle très diverse… et l’on profite d’un service professionnel et compétent.",
      "cuisine": "Française",
      "tel": "+261 33 92 957 63",
      "adresse": "439 George Street, Whitewater, Missouri, 7111",
      "geo": "75.260194, 98.34749",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cd93abd0ecc308cc9",
      "photo": "Le Petit Nice.jpg",
      "nom": "Le Petit Nice",
      "desc": "Impossible de dissocier Le Petit Nice de sa ville, Marseille, et de la personnalité de Gérald Passedat. C’est dans le quartier d’Endoume, où se rencontrent influences italiennes et espagnoles, que le Petit Nice a fait son nid, avec la mer comme horizon et principale raison. \"Dans la méditerranée, je plonge dans tous les sens du terme, résume le chef. Elle me porte et m’inspire, ainsi que toutes les terres qui l’entourent\".",
      "cuisine": "Française",
      "tel": "+261 34 98 759 82",
      "adresse": "380 Delmonico Place, Edenburg, Louisiana, 7610",
      "geo": "28.147126, 160.241759",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 3,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 2,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cd12e0f5db4756a61",
      "photo": "L'Oustau de Baumanière.jpg",
      "nom": "L'Oustau de Baumanière",
      "desc": "Formidable ambassadeur de l’art de vivre méditerranéen, le domaine provençal de Baumanière compte un certain nombre de VIP parmi ses habitués : la reine Élisabeth II d’Angleterre, Jean Reno, Bono, Hugh Grant ou encore Pierre Arditi… qui viennent ici retrouver un mélange unique de repos, de rusticité et d’élégance.Et en cuisine ? L’état d’esprit est le même. Glenn Viel, aux commandes depuis 2015, pioche dans la riche production locale (huile d’olive de la vallée des Baux, légumes bio du jardin de Baumanière) pour composer ses assiettes.",
      "cuisine": "Française",
      "tel": "+261 33 89 651 13",
      "adresse": "447 Gold Street, Cutter, Wyoming, 1599",
      "geo": "12.714568, 144.687466",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 1,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 3,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c0400890bdf902550",
      "photo": "Le Refuge des Gourmets.jpg",
      "nom": "Le Refuge des Gourmets",
      "desc": "Ce restaurant cossu, d'inspiration Belle Époque, est un vrai refuge de gourmets ! Le chef et son fils concoctent une jolie cuisine moderne aux touches créatives, inspirée des produits locaux. Cette partition à quatre mains s'articule autour d'une saison ou d'un produit (chasse, homard, morilles, truffe noire...).",
      "cuisine": "Française",
      "tel": "+261 33 96 459 83",
      "adresse": "291 Elton Street, Nogal, Ohio, 7523",
      "geo": "-50.67775, 152.855933",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 3,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 2,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 1,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 1,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 3,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 2,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7cbb01d7cb4444351c",
      "photo": "Les Fresques.jpg",
      "nom": "Les Fresques",
      "desc": "Classique, feutré, élégant : le cadre sied à la dégustation d'une cuisine raffinée et parfumée, où brillent les produits nobles (truffe en saison) et les vins locaux, à commencer par ceux du vignoble de la propriété.",
      "cuisine": "Française",
      "tel": "+261 32 85 853 13",
      "adresse": "631 Emerson Place, Sandston, Mississippi, 3642",
      "geo": "-34.54092, -13.698562",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 3,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c046520d2bd19e4de",
      "photo": "Le Pressoir.jpg",
      "nom": "Le Pressoir",
      "desc": "Une véritable institution que cette table vannetaise ! Le chef, Vincent David, signe une vraie cuisine d'auteur, inspirée et soignée, où des produits de belle qualité sont conjugués avec équilibre... Un établissement tout indiqué pour les gourmets à la recherche de belles saveurs.",
      "cuisine": "Française",
      "tel": "+261 34 84 154 53",
      "adresse": "478 Verona Place, Cashtown, Vermont, 8109",
      "geo": "8.181878, 3.311209",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 3,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 2,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 1,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 3,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 2,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 1,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c0e5131c1391992c8",
      "photo": "Auberge du Vieux Puits.jpg",
      "nom": "Auberge du Vieux Puits",
      "desc": "L’aubergiste des Corbières : ainsi surnomme-t-on parfois Gilles Goujon, à qui l’on doit d’avoir placé le minuscule village de Fontjoncouse, dans l’Aude, sur la carte de la haute gastronomie française. Installé en 1992, il y a décroché sa troisième étoile en 2010.Ses marques de fabrique ? La sincérité et le savoir-faire. Les habitués le savent, chacune de ses assiettes est faite avec le cœur, et un soin de tous les instants. Goujon n’a pas son pareil pour s’effacer derrière le produit et le laisser s’exprimer dans toute sa simplicité : la marque des grands !",
      "cuisine": "Française",
      "tel": "+261 33 93 151 22",
      "adresse": "366 Lake Place, Groveville, Hawaii, 2454",
      "geo": "28.818058, -108.511893",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 3,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 1,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 0,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 0,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 0,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 0,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    },
    {
      "_id": "5cb9ed7c264d57a5648b42fb",
      "photo": "Le Cloître.jpg",
      "nom": "Le Cloître",
      "desc": "Dans le Cloître de l'ancien couvent des Minimes, le chef Jérôme Roy voue un véritable culte... aux mariages de saveurs. Sa cuisine, volontiers créative, nous emmène de surprise en surprise ; on passe un excellent moment sur la terrasse ombragée. Difficile de repartir !",
      "cuisine": "Iceland",
      "tel": "+261 33 84 952 52",
      "adresse": "746 Bushwick Place, Cade, Kentucky, 4633",
      "geo": "49.86158, 126.707186",
      "plat": [
        {
          "id": "5cb9ed7c123bb05a0fe933a7",
          "idmenu": 3,
          "nom": "Vin de table",
          "description": "Le vin de table constitue la catégorie de base de la pyramide qualitative des vins produit dans l'Union. Il provient généralement de coupages de vins de diverses régions.",
          "prix": 10.5,
          "photo": "Vin de table.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c13008072847b15ac",
          "idmenu": 2,
          "nom": "Jus de fruit",
          "description": "Composé de plusieurs fruits au choix (cerise, ananas, pomme, pêche, pastèque, etc...).",
          "prix": 3.0,
          "photo": "Jus de fruit.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c90a69bb95a268021",
          "idmenu": 1,
          "nom": "Eau plate",
          "description": "L'eau plate est une eau minérale ou une eau de source qui, contrairement à l'eau gazeuse, ne contient pas de gaz. Elle ne pétille donc pas.",
          "prix": 2.0,
          "photo": "Eau plate.jpg",
          "type": "Boisson"
        },
        {
          "id": "5cb9ed7c6dea98b3e8a0c98d",
          "idmenu": 0,
          "nom": "Romazava",
          "description": "C’est la version riche du ro matsatso. Le mijoté inclut la viande de zébu et des brèdes dites mafana ou anamalaho, type d’épinards au goût acidulé, aussi consommé sur l’archipel des Mascareignes. Le cuisinier peut y ajouter du poisson ou de la viande de volaille. Les autres brèdes comme les morelles ou les pariétaires sont également les bienvenues dans le potage.",
          "prix": 15.0,
          "photo": "Romazava.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cdcc41327433b23c0",
          "idmenu": 0,
          "nom": "La pièce montée A LA FRANCAISE",
          "description": "Pour VOTRE EVENEMENT inoubliable (mariage, baptême, communion, anniversaire ou séminaire), vous souhaitez un dessert « Waouhhh » qui allie gourmandise et légèreté.",
          "prix": 11.73,
          "photo": "La pièce montée A LA FRANCAISE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c3a9311356daab49d",
          "idmenu": 0,
          "nom": "Le Royal au Chocolat de Hardricourt",
          "description": "Si vous faites partie de ces fans de chocolat qui veulent se faire plaisir (mais VRAIMENT plaisir) et tout en légèreté, ce M. Royal est  fait pour vous.",
          "prix": 16.64,
          "photo": "Le Royal au Chocolat de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c8c001c512ac428c5",
          "idmenu": 0,
          "nom": "Gâteaux au chocolat",
          "description": "Alors, je vous l’accorde, leur nom est plutôt prétentieux, donc avec des mots simples, qu’est-ce que ces desserts ? Une alternance de couche de meringue croquante et de crème fouettée, le tout recouvert de copeaux de chocolat…. Simple, mais c’est vrai qu’une fois en bouche, j’en connais certains pour qui ces desserts étaient TRES TRES BONS.",
          "prix": 10.57,
          "photo": "Gâteaux au chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c4046d19622d860eb",
          "idmenu": 0,
          "nom": "La Tarte au Chocolat",
          "description": "C’est un sablé breton à la pointe de fleur de sel, surmonté de dômes de ganache au chocolat noir 58% (merci à la Chocolaterie de Hardricourt) et ornée de gouttes de chantilly.",
          "prix": 16.83,
          "photo": "La Tarte au Chocolat.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7cf07f4ed3e9352606",
          "idmenu": 0,
          "nom": "praliné de Hardricourt",
          "description": "Cet « ancien gâteau » est un dessert qui a malheureusement presque disparu des pâtisseries. C’est un gâteau composé de deux couches de biscuit dacquoise entre lesquelles se trouve une crème au beurre praliné. Aujourd’hui, on ne veut plus entendre parler de crème au beurre (trop riche) et de « trop de biscuit ». Alors, aux Desserts d’Ici, on a allégé la crème au beurre en lui ajoutant l’aérien d’une meringue italienne et on a mis du croquant avec des noisettes caramélisées.",
          "prix": 12.7,
          "photo": "praliné de Hardricourt.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c333ba7464838235b",
          "idmenu": 2,
          "nom": "TARTE AUX POIRES ET PRALINE",
          "description": "Très gourmande avec sa pâte sablée au praliné (Merci au praliné d’Hardricourt pour sa contribution de « trop bon »), sa crème d’amande peu sucrée et ses poires d’Ici si fondantes. Des poires, vous dites? Oui, des Williams, muries sur l’arbre, douces et bien parfumées.",
          "prix": 17.93,
          "photo": "TARTE AUX POIRES ET PRALINE.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c1d24846abbe5cf5f",
          "idmenu": 0,
          "nom": "Nougat Glacé",
          "description": "Épatez vos invités avec ce délicieux dessert, mélange onctueux de meringue et de fruits secs, qui peut être préparé plusieurs jours à l'avance sans problèmes.",
          "prix": 10.38,
          "photo": "Nougat Glacé.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c24f22f6af75d22a3",
          "idmenu": 0,
          "nom": "Omelette norvégienne",
          "description": "Sous ce drôle de nom d'omelette norvégienne, vous trouverez un élégant dessert composé de 2 couches de biscuits punchés qui enferment 2 couches de glace vanille et cassis. L'ensemble, glacé, est recouvert d'une couche de meringue française puis mis à four brulant quelques minutes pour juste faire dorer la meringue.",
          "prix": 18.06,
          "photo": "Omelette norvégienne.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c27b559f4de2ec5c3",
          "idmenu": 1,
          "nom": "Crème brûlée",
          "description": "La crème brûlée est assez facile à préparer, c'est une simple crème aux œufs. Toute la difficulté est de réussir la délicieuse croûte de caramel qui la recouvre, l'idéal étant (pour moi) d'avoir une crème froide et bien onctueuse, et au dessus une croûte de caramel bien chaude. C'est une nouvelle version de la recette originale, avec vidéo.",
          "prix": 19.22,
          "photo": "Crème brûlée.jpg",
          "type": "Dessert"
        },
        {
          "id": "5cb9ed7c06f86691d015acb8",
          "idmenu": 0,
          "nom": "Beignets de courgette",
          "description": "Je vous donne aujourd'hui une idée pour accompagner vos viandes, poissons ou tout simplement pour un apéritif original, ce sont des beignets de courgette. J'ai utilisé les produits Lesieur car j'ai reçu un coffret pour participer au défi #monplatprefere...",
          "prix": 10.61,
          "photo": "Beignets de courgette.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c1cd03d2eed6c3131",
          "idmenu": 0,
          "nom": "CHIKUZEN-NI",
          "description": "Plat traditionnel japonais contenant plein de bonnes choses pour la santé (carotte, pousse de bambou, konnyaku,...) cuit dans un bouillon sucré-salé typiquement japonais (sauce soja, mirin, saké, sucre...).",
          "prix": 19.73,
          "photo": "CHIKUZEN-NI.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5edc44ce49b37778",
          "idmenu": 0,
          "nom": "Tajine de poulet aux champignons",
          "description": "Plat oriental a base de poulet et champignons.",
          "prix": 17.37,
          "photo": "Tajine de poulet aux champignons.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c74d0963150570dfc",
          "idmenu": 0,
          "nom": "Emincés de porc et cocos plats aux saveurs d'Asie",
          "description": "Une recette simple et originale.",
          "prix": 13.3,
          "photo": "Emincés de porc et cocos plats aux saveurs d'Asie.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c3052bf2cad1464d4",
          "idmenu": 0,
          "nom": "Foie gras",
          "description": "Il est de toutes les tables pour les fêtes de fin d’année. Même si le monde associe cette spécialité à la France, la tradition du gavage d’oie remonte à l’Antiquité. Sur un pain brioché avec un peu de confit d’oignons ou de la confiture de figue, vous le dégusterez de façon idéale.",
          "prix": 11.28,
          "photo": "Foie gras.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c35e48cff08c2390b",
          "idmenu": 0,
          "nom": "Huîtres",
          "description": "Les huîtres sont le deuxième produit phare que l’on retrouve lors des fêtes de fin d’année. Ce coquillage peut se consommer chaud, mais les amateurs le préfère généralement cru et vivant. Les huîtres peuvent se déguster natures ou avec un filet de jus de citron, de vinaigre ou une sauce à l’échalote.",
          "prix": 17.05,
          "photo": "Huîtres.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5d6e8f4732cdb613",
          "idmenu": 0,
          "nom": "Cassoulet",
          "description": "Ce n’est probablement pas le plat le plus léger que vous pourrez déguster en France. Originaire du Languedoc-Roussillon, ce plat est composé de haricots blancs, de cuisses de canard et de viande de porc (sous différentes formes). Consommé pendant des siècles par les familles paysannes, les Français le cuisinent aujourd’hui pour réunir leur famille.",
          "prix": 16.7,
          "photo": "Cassoulet.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c070c4f8e07e6a8ca",
          "idmenu": 2,
          "nom": "Poulet basquaise",
          "description": "Le Pays Basque est une des régions françaises les plus riches en terme de gastronomie. On y élève de la volaille, en particulier des races rares de poulet et du canard. Le Poulet Basquaise est un plat complet où la viande est rendue moelleuse par une piperade, une sauce composée de jambon de Bayonne, poivrons, tomates et piment d’Espelette.",
          "prix": 10.87,
          "photo": "Poulet basquaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c22ec0fffbf1c5fbc",
          "idmenu": 3,
          "nom": "Mouclade charentaise",
          "description": "La zone de La Rochelle et de l’Ile de Ré est prisée dès le retour des températures douces. Les nombreux visiteurs, charmés par les spécialités culinaires de la région, réalisent chez eux cette recette goûteuse. Les moules de Bouchot (il s’agit d’une race très appréciée) sont cuisinées avec des échalotes, des gousses d’ail, des bouquets garnis, des épices, des œufs, de la crème et, surtout du Pineau des Charentes (l’alcool de la région).",
          "prix": 18.91,
          "photo": "Mouclade charentaise.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cca6809679f8dd100",
          "idmenu": 0,
          "nom": "Galettes bretonnes",
          "description": "Suite à un engouement gourmand, les crêperies bretonnes sont presque partout en France. Qu’est-ce qu’une galette ? Il s’agit d’une crêpe salée, réalisée avec de la farine de sarrasin, qui lui donne sa couleur grisée. ",
          "prix": 13.1,
          "photo": "Galettes bretonnes.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c421d16d36382052b",
          "idmenu": 1,
          "nom": "Carbonnade flamande",
          "description": "Vous trouverez un large choix de bières dans le Nord de la France. La proximité de la Belgique a, en effet, inspiré les ménagères qui cuisinent de génération en génération la Carbonnade Flamande. Il s’agit d’un plat de bœuf, mijoté dans de la bière blonde et des aromates. On y ajoute en fin de cuisson un peu de pain d’épice traditionnel moutardé afin de donner encore plus de goût à ce plat sucré-salé.",
          "prix": 15.39,
          "photo": "Carbonnade flamande.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c5b465bfbaa35c75f",
          "idmenu": 0,
          "nom": "Quiche lorraine",
          "description": "Voyageons jusqu’en Lorraine pour découvrir la recette originale. La quiche Lorraine est, selon la tradition lorraine, une tarte garnie avec un appareil composé de crème fraîche, de lait, d’œufs, de noix de muscade ainsi que de lardons grillés. Ces derniers ingrédients lui confèrent un petit goût fumé, tant apprécié au quatre coins de la France. Aujourd’hui, la quiche Lorraine est devenue tellement populaire qu’il est possible que vous de la trouviez, dans une boulangerie ou un restaurant, dans une version plus moderne : aux champignons, aux poireaux, au poulet.",
          "prix": 13.12,
          "photo": "Quiche lorraine.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7cc3ceac06c42b1cc8",
          "idmenu": 0,
          "nom": "Bœuf bourguignon",
          "description": "Le bœuf bourguignon est un plat familial traditionnel. Il s’agit de morceaux de bœuf mijotés dans du vin rouge avec des légumes racines et des champignons. C’est un plat typiquement bourguignon, étant donné que la Bourgogne est une région réputée pour ses élevages bovins et ses vins rouges, d’où le nom de ce met.",
          "prix": 25.63,
          "photo": "Bœuf bourguignon.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c56c481b8c3c07b66",
          "idmenu": 0,
          "nom": "Pizza royale",
          "description": "Une pizza royale, c'est un rêve à portée de main, puisqu'il suffit de mettre cette dernière à la pâte, de préparer une garniture savoureuse, et de laisser le four agir. Forcément, c'est mieux avec un accent italien et une météo ensoleillée, mais sinon, ça se passe bien aussi.",
          "prix": 9.55,
          "photo": "Pizza royale.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c216ad80f8caf72fd",
          "idmenu": 0,
          "nom": "pizza au bacon et cheeseburger",
          "description": "Cette recette décadente de pizza au bacon goûte à s’y méprendre aux cheeseburgers servis en restauration rapide, pour la moitié des calories. Sur une croûte de blé entier, des ingrédients aussi surprenants que délicieux sont étalés, comme des épices à steak, de la sauce au yogourt grec et à la moutarde et même de la sauce Worcestershire.",
          "prix": 8.17,
          "photo": "pizza au bacon et cheeseburger.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c0d4fe1f885f8405c",
          "idmenu": 0,
          "nom": "pizza aux deux saumons et aux asperges",
          "description": "Cette pizza garnie de saumon et d’asperges croquantes constitue une délicieuse alternative aux charcuteries grasses.",
          "prix": 7.34,
          "photo": "pizza aux deux saumons et aux asperges.jpg",
          "type": "Résistance"
        },
        {
          "id": "5cb9ed7c81a9d21018915d01",
          "idmenu": 0,
          "nom": "pizza à la mexicaine",
          "description": "Envie de pimenter votre pizza ? Ajoutez-y des Jalapenos et de la salsa aux tomates.",
          "prix": 7.5,
          "photo": "pizza à la mexicaine.jpg",
          "type": "Résistance"
        }
      ],
      "menu": [
        {
          "id": 1,
          "nom": "Brunch",
          "prix": 39.87
        },
        {
          "id": 2,
          "nom": "Menu du jour",
          "prix": 33.69
        },
        {
          "id": 3,
          "nom": "Menu de nuit",
          "prix": 37.48
        }
      ]
    }
  ];

const orders = [
    {
        nom: 'Poulet au coco',
        prix: 15,
        type: 'plat',
        photo: 'cafe_de_la_presse.jpg'
    }
]

export default restaurants
export { orders }