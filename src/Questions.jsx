const javaQuestions = [
    {
        question: "Quel est le type de données par défaut pour une variable non initialisée en Java ?",
        options: ['int', 'float', 'null', 'undefined'],
        correctAnswer: 'null'
    },
    {
        question: "Comment déclarer une méthode en Java ?",
        options: ['function myMethod()', 'void myMethod()', 'public void myMethod()', 'method myMethod()'],
        correctAnswer: 'public void myMethod()'
    },
    {
        question: "Quel est le principal objectif de l'utilisation des classes en Java ?",
        options: ['Encapsulation', 'Abstraction', 'Héritage', 'Polymorphisme'],
        correctAnswer: 'Encapsulation'
    },
    {
        question: "Quelle est la différence entre une ArrayList et un tableau en Java ?",
        options: ['Une ArrayList est plus rapide', 'Un tableau est dynamique', 'Une ArrayList peut contenir des types différents', 'Un tableau est fixe en taille'],
        correctAnswer: 'Un tableau est fixe en taille'
    },
    {
        question: "Comment déclarer une variable d'instance en Java ?",
        options: ['public int myVar', 'int myVar', 'myVar int', 'private int myVar'],
        correctAnswer: 'private int myVar'
    },
    {
        question: "Qu'est-ce qu'une exception en Java ?",
        options: ['Un message derreur', 'Un objet qui capte des erreurs', 'Un type de variable', 'Un type de méthode'],
    correctAnswer: 'Un objet qui capte des erreurs'
  },
    {
        question: "Qu'est-ce que l'héritage en Java ?",
        options: ['L’ajout de nouvelles fonctionnalités', 'La redéfinition de méthodes', 'La possibilité de modifier un objet', 'La possibilité de réutiliser le code d’une autre classe'],
        correctAnswer: 'La possibilité de réutiliser le code d’une autre classe'
    },
    {
        question: "Qu'est-ce que le polymorphisme en Java ?",
        options: ['La capacité à avoir plusieurs formes de méthodes', 'La capacité d’hériter d’une seule classe', 'La capacité de ne pas utiliser les exceptions', 'Aucune de ces réponses'],
        correctAnswer: 'La capacité à avoir plusieurs formes de méthodes'
    },
    {
        question: "Qu'est-ce qu'une interface en Java ?",
        options: ['Un type de classe', 'Un type dobjet', 'Un contrat que les classes peuvent implémenter', 'Un type de méthode'],
    correctAnswer: 'Un contrat que les classes peuvent implémenter'
  },
    {
        question: "Que signifie 'public static void main(String[] args)' en Java ?",
        options: ['La méthode principale qui est exécutée au démarrage du programme', 'Une méthode privée', 'Un constructeur', 'Un type de variable'],
        correctAnswer: 'La méthode principale qui est exécutée au démarrage du programme'
    },
    {
        question: "Quel est l'objectif d'un constructeur en Java ?",
        options: ['Allouer de la mémoire pour un objet', 'Initialiser un objet', 'Mettre à jour les valeurs des propriétés de l’objet', 'Créer des méthodes'],
        correctAnswer: 'Initialiser un objet'
    },
    {
        question: "Qu'est-ce que l'encapsulation en Java ?",
        options: ['La possibilité de modifier des objets', 'La protection des données en les cachant dans des classes', 'Le mécanisme permettant de redéfinir des méthodes', 'Le partage des méthodes entre plusieurs classes'],
        correctAnswer: 'La protection des données en les cachant dans des classes'
    },
    {
        question: "Que fait la méthode 'System.out.println()' en Java ?",
        options: ['Affiche un message à lécran', 'Modifie la valeur d’une variable', 'Écrit dans un fichier', 'Crée une nouvelle ligne dans la console'],
    correctAnswer: 'Affiche un message à lécran'
  },
    {
        question: "Comment créer un tableau en Java ?",
        options: ['int[] myArray = new int[5];', 'Array myArray = new int[5];', 'int[] myArray = new int[];', 'int[5] myArray;'],
        correctAnswer: 'int[] myArray = new int[5];'
    },
    {
        question: "Que signifie le mot-clé 'super' en Java ?",
        options: ['Appeler un constructeur de la classe parente', 'Accéder à une variable locale', 'Définir une méthode privée', 'Renvoyer une valeur'],
        correctAnswer: 'Appeler un constructeur de la classe parente'
    },
    {
        question: "Qu'est-ce qu'un package en Java ?",
        options: ['Une classe contenant plusieurs méthodes', 'Un groupe de classes et interfaces liées', 'Un type de méthode', 'Une bibliothèque d’objets'],
        correctAnswer: 'Un groupe de classes et interfaces liées'
    },
    {
        question: "Qu'est-ce qu'un tableau multidimensionnel en Java ?",
        options: ['Un tableau qui contient plusieurs types de données', 'Un tableau qui contient d’autres tableaux', 'Un tableau qui peut contenir plusieurs objets', 'Un tableau de chaînes de caractères'],
        correctAnswer: 'Un tableau qui contient d’autres tableaux'
    },
    {
        question: "Quelle est la différence entre == et .equals() en Java ?",
        options: ['== compare les adresses mémoire, .equals() compare les valeurs', '.equals() compare les adresses mémoire', '== compare les valeurs, .equals() compare les types', 'Aucune différence'],
        correctAnswer: '== compare les adresses mémoire, .equals() compare les valeurs'
    },
    {
        question: "Comment gérer plusieurs exceptions en Java ?",
        options: ['Utiliser une seule clause catch', 'Utiliser plusieurs blocs try-catch', 'Utiliser un bloc try avec un seul catch', 'Utiliser le mot-clé throws'],
        correctAnswer: 'Utiliser plusieurs blocs try-catch'
    },
    {
        question: "Quel est le rôle du mot-clé 'final' en Java ?",
        options: ['Indiquer que la classe ne peut pas être étendue', 'Définir une méthode comme publique', 'Indiquer qu une méthode ne peut pas être modifiée', 'Définir une variable constante'],
    correctAnswer: 'Définir une variable constante'
  },
    {
        question: "Qu'est-ce qu'un objet immuable en Java ?",
        options: ['Un objet dont l’état peut être modifié après sa création', 'Un objet dont l’état ne peut pas être modifié après sa création', 'Un objet qui contient des données statiques', 'Un objet qui ne peut pas être instancié'],
        correctAnswer: 'Un objet dont l’état ne peut pas être modifié après sa création'
    },
    {
        question: "Quel est le résultat de l'exécution du code suivant : 'String str = 'Java'; System.out.println(str.charAt(0));' ?",
        options: ['J', 'A', 'V', 'Erreur'],
        correctAnswer: 'J'
    }
];
const reactQuestions = [
    {
        question: "Quel est le principal but de React ?",
        options: ['Manipuler le DOM', 'Créer des applications web', 'Gérer les bases de données', 'Créer des pages statiques'],
        correctAnswer: 'Créer des applications web'
    },
    {
        question: "Comment définir un état dans un composant fonctionnel React ?",
        options: ['useState()', 'state()', 'this.setState()', 'ReactState()'],
        correctAnswer: 'useState()'
    },
    {
        question: "Quel est le rôle de JSX dans React ?",
        options: ['Faire la gestion de l’état', 'Définir la structure de l’interface utilisateur', 'Manipuler le DOM', 'Gérer les événements'],
        correctAnswer: 'Définir la structure de l’interface utilisateur'
    },
    {
        question: "Quelle fonction est utilisée pour rendre un composant React ?",
        options: ['render()', 'ReactDOM.render()', 'useEffect()', 'React.render()'],
        correctAnswer: 'ReactDOM.render()'
    },
    {
        question: "Quelle est la fonction du Hook useEffect() en React ?",
        options: ['Effectuer une requête réseau', 'Mettre à jour l’état', 'Exécuter du code après le rendu du composant', 'Gérer les événements de la souris'],
        correctAnswer: 'Exécuter du code après le rendu du composant'
    },
    {
        question: "Qu'est-ce que le Virtual DOM en React ?",
        options: ['Une copie de la base de données', 'Une copie virtuelle du DOM réel', 'Un cache pour les fichiers statiques', 'Un outil de gestion de l’état'],
        correctAnswer: 'Une copie virtuelle du DOM réel'
    },
    {
        question: "Quel hook React permet de gérer l’état dans un composant fonctionnel ?",
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 'useState'
    },
    {
        question: "Quel est le but du Hook useContext() en React ?",
        options: ['Gérer l’état local', 'Accéder à des valeurs globales', 'Mettre à jour l’interface utilisateur', 'Exécuter des effets secondaires'],
        correctAnswer: 'Accéder à des valeurs globales'
    },
    {
        question: "Qu'est-ce qu'une clé (key) dans une liste React ?",
        options: ['Un identifiant unique pour chaque élément de la liste', 'Une méthode pour manipuler le DOM', 'Un type d’événement', 'Une fonction pour la gestion de l’état'],
        correctAnswer: 'Un identifiant unique pour chaque élément de la liste'
    },
    {
        question: "Comment les composants React peuvent-ils être communiqués entre eux ?",
        options: ['En utilisant les props', 'En utilisant des événements', 'En utilisant l’état global', 'En utilisant la bibliothèque Redux'],
        correctAnswer: 'En utilisant les props'
    },
    {
        question: "Quel est l'avantage principal d'utiliser un composant fonctionnel plutôt qu'un composant de classe en React ?",
        options: ['Les composants fonctionnels sont plus rapides', 'Les composants fonctionnels ont un état', 'Les composants fonctionnels peuvent utiliser les hooks', 'Les composants fonctionnels ne nécessitent pas de render()'],
        correctAnswer: 'Les composants fonctionnels peuvent utiliser les hooks'
    },
    {
        question: "Que fait le Hook useReducer() en React ?",
        options: ['Gère un état complexe', 'Met à jour l’état', 'Écoute les événements', 'Effectue une requête réseau'],
        correctAnswer: 'Gère un état complexe'
    },
    {
        question: "Qu'est-ce qu'un 'fragment' en React ?",
        options: ['Un type de composant', 'Un conteneur qui permet de rendre plusieurs éléments sans ajouter de nœuds supplémentaires dans le DOM', 'Un hook', 'Un type d’événement'],
        correctAnswer: 'Un conteneur qui permet de rendre plusieurs éléments sans ajouter de nœuds supplémentaires dans le DOM'
    },
    {
        question: "Quelle fonction permet d'éviter que le composant React se re-render indéfiniment ?",
        options: ['componentDidMount()', 'shouldComponentUpdate()', 'useEffect()', 'React.memo()'],
        correctAnswer: 'React.memo()'
    },
    {
        question: "Qu'est-ce que le concept de 'lifting state up' en React ?",
        options: ['La remontée d’un état du parent vers un enfant', 'La remontée de l’état d’un enfant vers son parent', 'Le partage de l’état entre plusieurs composants', 'Le stockage de l’état dans une base de données'],
        correctAnswer: 'La remontée de l’état d’un enfant vers son parent'
    },
    {
        question: "Qu'est-ce qu'un 'Controlled Component' en React ?",
        options: ['Un composant qui gère son propre état', 'Un composant dont l’état est contrôlé par le parent', 'Un composant sans état', 'Un composant utilisant Redux pour la gestion de l’état'],
        correctAnswer: 'Un composant dont l’état est contrôlé par le parent'
    },
    {
        question: "Que signifie 'JSX' en React ?",
        options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript eXtension', 'JavaScript Extra'],
        correctAnswer: 'JavaScript XML'
    },
    {
        question: "Quel est le rôle de React Router dans une application React ?",
        options: ['Gérer l’état de l’application', 'Gérer la navigation entre les différentes pages', 'Exécuter des effets secondaires', 'Gérer la logique métier'],
        correctAnswer: 'Gérer la navigation entre les différentes pages'
    },
    {
        question: "Quel est l'objectif principal du Hook useRef() en React ?",
        options: ['Accéder directement à un élément du DOM', 'Mettre à jour un état', 'Créer un effet secondaire', 'Rendre un composant',
        ],
        correctAnswer: 'Accéder directement à un élément du DOM'
    },
    {
        question: "Que signifie 'props' en React ?",
        options: ['Une méthode', 'Un objet contenant des propriétés', 'Une fonction qui renvoie un état', 'Un attribut'],
        correctAnswer: 'Un objet contenant des propriétés'
    }
];
const phpQuestions = [
    {
        question: "Quel type de variable est utilisé pour stocker une chaîne de caractères en PHP ?",
        options: ['string', 'varchar', 'text', 'char'],
        correctAnswer: 'string'
    },
    {
        question: "Comment inclure un fichier dans un autre fichier en PHP ?",
        options: ['include', 'require', 'import', 'require_once'],
        correctAnswer: 'require'
    },
    {
        question: "Comment créer une fonction en PHP ?",
        options: ['function maFonction()', 'def maFonction()', 'void maFonction()', 'create maFonction()'],
        correctAnswer: 'function maFonction()'
    },
    {
        question: "Quel est le type de données retourné par la fonction isset() en PHP ?",
        options: ['String', 'Boolean', 'Integer', 'Object'],
        correctAnswer: 'Boolean'
    },
    {
        question: "Comment vérifier si une variable est définie en PHP ?",
        options: ['isset()', 'defined()', 'isNull()', 'isEmpty()'],
        correctAnswer: 'isset()'
    },
    {
        question: "Quel opérateur est utilisé pour concaténer des chaînes en PHP ?",
        options: ['+', '-', '*', '.'],
        correctAnswer: '.'
    },
    {
        question: "Comment créer une constante en PHP ?",
        options: ['const MA_CONSTANTE', 'define("MA_CONSTANTE")', 'constant MA_CONSTANTE', 'const("MA_CONSTANTE")'],
        correctAnswer: 'define("MA_CONSTANTE")'
    },
    {
        question: "Quel est le rôle de la fonction echo en PHP ?",
        options: ['Afficher une chaîne à lécran', 'Retourner une valeur', 'Inclure un fichier', 'Écrire dans un fichier'],
    correctAnswer: 'Afficher une chaîne à lécran'
  },
    {
        question: "Comment déclarer un tableau indexé en PHP ?",
        options: ['array()', '[]', 'new array()', 'list()'],
        correctAnswer: 'array()'
    },
    {
        question: "Quelle fonction PHP est utilisée pour rediriger un utilisateur vers une autre page ?",
        options: ['header()', 'redirect()', 'location()', 'goTo()'],
        correctAnswer: 'header()'
    },
    {
        question: "Qu'est-ce qu'un tableau associatif en PHP ?",
        options: ['Un tableau avec des indices numériques', 'Un tableau avec des clés de chaîne', 'Un tableau avec des objets', 'Un tableau vide'],
        correctAnswer: 'Un tableau avec des clés de chaîne'
    },
    {
        question: "Quelle fonction PHP permet de vérifier si un fichier existe ?",
        options: ['is_file()', 'file_exists()', 'exists()', 'check_file()'],
        correctAnswer: 'file_exists()'
    },
    {
        question: "Quel est le rôle de la fonction include() en PHP ?",
        options: ['Inclure un fichier externe', 'Inclure une bibliothèque', 'Exécuter une fonction', 'Créer une variable'],
        correctAnswer: 'Inclure un fichier externe'
    },
    {
        question: "Comment peut-on récupérer les données envoyées par un formulaire en PHP ?",
        options: ['$_POST', '$_GET', '$_REQUEST', 'Les deux premières réponses'],
        correctAnswer: 'Les deux premières réponses'
    },
    {
        question: "Quel type de données retourne la fonction mysqli_fetch_assoc() en PHP ?",
        options: ['Un tableau associatif', 'Un tableau indexé', 'Un objet', 'Une chaîne'],
        correctAnswer: 'Un tableau associatif'
    },
    {
        question: "Qu'est-ce qu'une session en PHP ?",
        options: ['Un objet de base de données', 'Une fonction pour stocker les variables temporairement', 'Un tableau global', 'Un cookie'],
        correctAnswer: 'Une fonction pour stocker les variables temporairement'
    },
    {
        question: "Comment démarrer une session en PHP ?",
        options: ['session_start()', 'session_init()', 'start_session()', 'session_open()'],
        correctAnswer: 'session_start()'
    },
    {
        question: "Quelle fonction PHP est utilisée pour échapper les caractères spéciaux dans une chaîne ?",
        options: ['htmlspecialchars()', 'escape()', 'sanitize()', 'filter_var()'],
        correctAnswer: 'htmlspecialchars()'
    },
    {
        question: "Qu'est-ce que PDO en PHP ?",
        options: ['Une bibliothèque pour la gestion des fichiers', 'Une méthode pour interagir avec une base de données', 'Un type de variable', 'Un framework PHP'],
        correctAnswer: 'Une méthode pour interagir avec une base de données'
    },
    {
        question: "Quel est le rôle de la fonction var_dump() en PHP ?",
        options: ['Afficher les informations sur une variable', 'Afficher une chaîne', 'Manipuler une variable', 'Supprimer une variable'],
        correctAnswer: 'Afficher les informations sur une variable'
    },
    {
        question: "Comment obtenir la longueur d'une chaîne en PHP ?",
        options: ['strlen()', 'length()', 'count()', 'size()'],
        correctAnswer: 'strlen()'
    }
];
export { javaQuestions, reactQuestions, phpQuestions };