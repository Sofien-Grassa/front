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
const pythonQuestions = [
    {
        question: "Quelle fonction est utilisée pour afficher un message en Python ?",
        options: ['echo()', 'print()', 'console.log()', 'output()'],
        correctAnswer: 'print()'
    },
    {
        question: "Comment déclare-t-on une variable en Python ?",
        options: ['let x = 5;', 'var x = 5;', 'x = 5', 'int x = 5;'],
        correctAnswer: 'x = 5'
    },
    {
        question: "Quelle méthode est utilisée pour convertir une chaîne en majuscules en Python ?",
        options: ['toUpperCase()', 'upper()', 'capitalize()', 'str.upper()'],
        correctAnswer: 'upper()'
    },
    {
        question: "Comment définir une fonction en Python ?",
        options: ['function func()', 'def func()', 'lambda func()', 'void func()'],
        correctAnswer: 'def func()'
    },
    {
        question: "Quel mot-clé est utilisé pour importer une bibliothèque en Python ?",
        options: ['include', 'import', 'require', 'use'],
        correctAnswer: 'import'
    },
    {
        question: "Comment créer une liste en Python ?",
        options: ['()', '{}', '[]', '<>'],
        correctAnswer: '[]'
    },
    {
        question: "Quelle fonction retourne la longueur d'une liste en Python ?",
        options: ['size()', 'len()', 'count()', 'length()'],
        correctAnswer: 'len()'
    },
    {
        question: "Quelle bibliothèque est utilisée pour manipuler les tableaux en Python ?",
        options: ['Pandas', 'NumPy', 'Math', 'Array'],
        correctAnswer: 'NumPy'
    },
    {
        question: "Comment peut-on lire un fichier en Python ?",
        options: ['open()', 'read()', 'file()', 'readfile()'],
        correctAnswer: 'open()'
    },
    {
        question: "Comment déclarer un tuple en Python ?",
        options: ['()', '[]', '{}', '<>'],
        correctAnswer: '()'
    },
    {
        question: "Quel opérateur est utilisé pour les comparaisons en Python ?",
        options: ['==', '=', 'equals', 'compareTo'],
        correctAnswer: '=='
    },
    {
        question: "Quelle structure permet de gérer les exceptions en Python ?",
        options: ['try/catch', 'try/except', 'try/error', 'catch/except'],
        correctAnswer: 'try/except'
    },
    {
        question: "Comment commenter une seule ligne en Python ?",
        options: ['//', '/* */', '#', '--'],
        correctAnswer: '#'
    },
    {
        question: "Quel type de données représente True/False en Python ?",
        options: ['binary', 'bool', 'Boolean', 'integer'],
        correctAnswer: 'bool'
    },
    {
        question: "Quelle méthode est utilisée pour supprimer une clé dans un dictionnaire ?",
        options: ['del', 'delete', 'remove', 'erase'],
        correctAnswer: 'del'
    },
    {
        question: "Quelle est la sortie de print(3 ** 2) ?",
        options: ['6', '9', '32', 'None'],
        correctAnswer: '9'
    },
    {
        question: "Quelle méthode est utilisée pour vérifier les types en Python ?",
        options: ['check()', 'type()', 'typeof()', 'instance()'],
        correctAnswer: 'type()'
    },
    {
        question: "Quelle bibliothèque est utilisée pour créer des graphiques en Python ?",
        options: ['Matplotlib', 'Seaborn', 'Pandas', 'NumPy'],
        correctAnswer: 'Matplotlib'
    },
    {
        question: "Comment peut-on obtenir les arguments d'une ligne de commande en Python ?",
        options: ['sys.argv', 'os.args', 'command.args', 'input.args'],
        correctAnswer: 'sys.argv'
    },
    {
        question: "Quel est le rôle du mot-clé 'global' en Python ?",
        options: ['Créer une variable locale', 'Déclarer une variable globale', 'Effacer une variable', 'Définir une constante'],
        correctAnswer: 'Déclarer une variable globale'
    }
];
const csharpQuestions = [
    {
        question: "Quel est le type de données utilisé pour stocker des nombres entiers en C# ?",
        options: ['float', 'int', 'decimal', 'integer'],
        correctAnswer: 'int'
    },
    {
        question: "Quel mot-clé est utilisé pour définir une méthode en C# ?",
        options: ['function', 'def', 'method', 'void'],
        correctAnswer: 'void'
    },
    {
        question: "Quel namespace est couramment utilisé pour les entrées/sorties en C# ?",
        options: ['System.IO', 'System.Input', 'System.Output', 'IO.System'],
        correctAnswer: 'System.IO'
    },
    {
        question: "Quel est le rôle du mot-clé 'static' en C# ?",
        options: ['Créer une classe', 'Créer un objet', 'Définir une méthode indépendante', 'Créer une propriété privée'],
        correctAnswer: 'Définir une méthode indépendante'
    },
    {
        question: "Quel est le point d'entrée principal d'une application C# ?",
        options: ['void main()', 'public static void Main()', 'main()', 'entry()'],
        correctAnswer: 'public static void Main()'
    },
    {
        question: "Comment définir une classe en C# ?",
        options: ['def class', 'class', 'define', 'create class'],
        correctAnswer: 'class'
    },
    {
        question: "Quel mot-clé permet de gérer les exceptions en C# ?",
        options: ['catch', 'try', 'throw', 'try-catch'],
        correctAnswer: 'try-catch'
    },
    {
        question: "Quelle méthode est utilisée pour afficher des données dans la console en C# ?",
        options: ['print()', 'Console.WriteLine()', 'echo()', 'log()'],
        correctAnswer: 'Console.WriteLine()'
    },
    {
        question: "Quel type de boucle permet de parcourir une collection en C# ?",
        options: ['for', 'while', 'foreach', 'do-while'],
        correctAnswer: 'foreach'
    },
    {
        question: "Quel est le type de données booléen en C# ?",
        options: ['boolean', 'bool', 'Boolean', 'binary'],
        correctAnswer: 'bool'
    },
    {
        question: "Comment déclarer une constante en C# ?",
        options: ['const', 'final', 'static const', 'constant'],
        correctAnswer: 'const'
    },
    {
        question: "Quelle interface est utilisée pour implémenter des collections génériques en C# ?",
        options: ['IEnumerable', 'IList', 'ICollection', 'ICollection<>'],
        correctAnswer: 'ICollection<>'
    },
    {
        question: "Quelle est la méthode de base utilisée pour convertir un objet en chaîne en C# ?",
        options: ['toString()', 'convert()', 'ToString()', 'asString()'],
        correctAnswer: 'ToString()'
    },
    {
        question: "Quel est le rôle du mot-clé 'override' en C# ?",
        options: ['Écraser une méthode', 'Créer une méthode', 'Protéger une méthode', 'Aucun'],
        correctAnswer: 'Écraser une méthode'
    },
    {
        question: "Comment définir un tableau en C# ?",
        options: ['[]', '{}', '<>', '()'],
        correctAnswer: '[]'
    },
    {
        question: "Quelle méthode est utilisée pour convertir une chaîne en nombre en C# ?",
        options: ['Convert.ToInt()', 'Int32.Parse()', 'Integer.Parse()', 'toNumber()'],
        correctAnswer: 'Int32.Parse()'
    },
    {
        question: "Quelle classe est utilisée pour manipuler des fichiers en C# ?",
        options: ['FileSystem', 'File', 'System.File', 'IO.File'],
        correctAnswer: 'File'
    },
    {
        question: "Quel est le type utilisé pour représenter une chaîne en C# ?",
        options: ['str', 'string', 'text', 'char[]'],
        correctAnswer: 'string'
    },
    {
        question: "Quelle est la portée d'une variable déclarée en dehors de toute méthode en C# ?",
        options: ['Globale', 'Privée', 'Locale', 'Statique'],
        correctAnswer: 'Globale'
    },
    {
        question: "Quel est le mot-clé utilisé pour libérer de la mémoire en C# ?",
        options: ['dispose', 'release', 'delete', 'using'],
        correctAnswer: 'dispose'
    }
];
const angularQuestions = [
    {
        question: "Quel langage est principalement utilisé avec Angular ?",
        options: ['JavaScript', 'TypeScript', 'Dart', 'Python'],
        correctAnswer: 'TypeScript'
    },
    {
        question: "Comment crée-t-on un nouveau projet Angular via la CLI ?",
        options: ['ng new', 'ng create', 'ng init', 'ng start'],
        correctAnswer: 'ng new'
    },
    {
        question: "Quelle directive Angular permet de répéter une liste d'éléments ?",
        options: ['*ngIf', '*ngSwitch', '*ngFor', '*ngModel'],
        correctAnswer: '*ngFor'
    },
    {
        question: "Quel fichier Angular contient la configuration des routes ?",
        options: ['app.module.ts', 'app.component.ts', 'app.routing.module.ts', 'routes.config.ts'],
        correctAnswer: 'app.routing.module.ts'
    },
    {
        question: "Comment injecte-t-on un service dans un composant Angular ?",
        options: ['Via constructor', 'Via import', 'Via @Injectable()', 'Automatiquement'],
        correctAnswer: 'Via constructor'
    },
    {
        question: "Quel mot-clé permet de définir une classe injectable en Angular ?",
        options: ['@Inject', '@Service', '@Injectable()', '@Component'],
        correctAnswer: '@Injectable()'
    },
    {
        question: "Quelle commande est utilisée pour générer un nouveau composant Angular ?",
        options: ['ng generate component', 'ng create component', 'ng new component', 'ng add component'],
        correctAnswer: 'ng generate component'
    },
    {
        question: "Comment applique-t-on un style conditionnel dans Angular ?",
        options: ['[ngStyle]', '[style]', '[ngClass]', '[class]'],
        correctAnswer: '[ngStyle]'
    },
    {
        question: "Quel fichier Angular définit les métadonnées du projet ?",
        options: ['package.json', 'angular.json', 'tsconfig.json', 'polyfills.ts'],
        correctAnswer: 'angular.json'
    },
    {
        question: "Quel est le rôle d'un module dans Angular ?",
        options: ['Créer une classe', 'Encapsuler des fonctionnalités', 'Gérer les fichiers', 'Créer des services'],
        correctAnswer: 'Encapsuler des fonctionnalités'
    },
    {
        question: "Comment récupère-t-on les données d'un formulaire dans Angular ?",
        options: ['FormGroup', 'FormBuilder', 'NgModel', 'Tous les précédents'],
        correctAnswer: 'Tous les précédents'
    },
    {
        question: "Quelle méthode HTTP est utilisée pour créer de nouvelles ressources dans Angular ?",
        options: ['GET', 'POST', 'PUT', 'DELETE'],
        correctAnswer: 'POST'
    },
    {
        question: "Comment détecter un changement dans une variable Angular ?",
        options: ['Observer', 'ChangeDetector', 'EventEmitter', 'Tous les précédents'],
        correctAnswer: 'EventEmitter'
    },
    {
        question: "Quel est le rôle des pipes dans Angular ?",
        options: ['Gérer les événements', 'Transformer les données', 'Créer des modules', 'Appliquer des styles'],
        correctAnswer: 'Transformer les données'
    },
    {
        question: "Quelle méthode permet de naviguer vers une route Angular ?",
        options: ['Router.navigate()', 'Navigate()', 'navigate()', 'Redirect()'],
        correctAnswer: 'Router.navigate()'
    },
    {
        question: "Comment interagit-on avec une API REST en Angular ?",
        options: ['Via HttpClient', 'Via HttpRequest', 'Via HttpService', 'Via HttpModule'],
        correctAnswer: 'Via HttpClient'
    },
    {
        question: "Quel décorateur est utilisé pour une directive Angular personnalisée ?",
        options: ['@Directive', '@Injectable', '@Component', '@Pipe'],
        correctAnswer: '@Directive'
    },
    {
        question: "Quelle balise encapsule un composant Angular dans un template ?",
        options: ['<app-root>', '<ng-root>', '<angular-root>', '<root-component>'],
        correctAnswer: '<app-root>'
    },
    {
        question: "Quelle commande permet de lancer un projet Angular localement ?",
        options: ['ng serve', 'ng start', 'npm start', 'ng run'],
        correctAnswer: 'ng serve'
    },
    {
        question: "Quelle directive permet d'afficher un élément conditionnellement en Angular ?",
        options: ['*ngIf', '*ngFor', '*ngSwitch', '*ngClass'],
        correctAnswer: '*ngIf'
    }
];
const javascriptQuestions = [
    {
        question: "Quel mot-clé permet de déclarer une variable accessible uniquement dans un bloc ?",
        options: ['var', 'let', 'const', 'Tous les précédents'],
        correctAnswer: 'let'
    },
    {
        question: "Quel opérateur est utilisé pour vérifier strictement l'égalité en JavaScript ?",
        options: ['==', '!=', '===', '='],
        correctAnswer: '==='
    },
    {
        question: "Comment appelle-t-on une fonction de manière anonyme en JavaScript ?",
        options: ['Arrow Function', 'Function Expression', 'Callback Function', 'Anonymous Function'],
        correctAnswer: 'Anonymous Function'
    },
    {
        question: "Quelle méthode retourne un tableau de clés pour un objet ?",
        options: ['Object.keys()', 'Object.values()', 'Object.entries()', 'Object.props()'],
        correctAnswer: 'Object.keys()'
    },
    {
        question: "Quelle méthode permet de filtrer un tableau en JavaScript ?",
        options: ['map()', 'reduce()', 'filter()', 'find()'],
        correctAnswer: 'filter()'
    },
    {
        question: "Comment convertir une chaîne en entier en JavaScript ?",
        options: ['parseInt()', 'toInt()', 'Number()', 'int()'],
        correctAnswer: 'parseInt()'
    },
    {
        question: "Comment ajouter un élément à la fin d'un tableau ?",
        options: ['push()', 'append()', 'add()', 'insert()'],
        correctAnswer: 'push()'
    },
    {
        question: "Quel est le type de données retourné par typeof null ?",
        options: ['null', 'undefined', 'object', 'boolean'],
        correctAnswer: 'object'
    },
    {
        question: "Comment vérifier si une valeur existe dans un tableau ?",
        options: ['includes()', 'contains()', 'exists()', 'search()'],
        correctAnswer: 'includes()'
    },
    {
        question: "Quel est le résultat de '5' - 3 en JavaScript ?",
        options: ['2', 'NaN', '8', 'error'],
        correctAnswer: '2'
    },
    {
        question: "Quelle méthode permet d'ajouter un écouteur d'événements à un élément DOM ?",
        options: ['addEvent()', 'on()', 'addEventListener()', 'attachEvent()'],
        correctAnswer: 'addEventListener()'
    },
    {
        question: "Comment accéder à l'élément avec l'ID 'myElement' ?",
        options: ['document.getById()', 'document.getElementById()', 'document.querySelector()', 'document.get()'],
        correctAnswer: 'document.getElementById()'
    },
    {
        question: "Comment déclare-t-on une promesse en JavaScript ?",
        options: ['promise()', 'new Promise()', 'createPromise()', 'Promise.create()'],
        correctAnswer: 'new Promise()'
    },
    {
        question: "Quelle méthode est utilisée pour concaténer deux tableaux ?",
        options: ['concat()', 'join()', 'append()', 'merge()'],
        correctAnswer: 'concat()'
    },
    {
        question: "Quel est le résultat de 0.1 + 0.2 === 0.3 en JavaScript ?",
        options: ['true', 'false', 'error', 'undefined'],
        correctAnswer: 'false'
    },
    {
        question: "Quelle est la portée d'une variable déclarée avec var dans une fonction ?",
        options: ['Globale', 'Locale', 'Bloquée', 'Statique'],
        correctAnswer: 'Locale'
    },
    {
        question: "Comment définit-on une classe en JavaScript ?",
        options: ['class MyClass {}', 'function class() {}', 'createClass()', 'defineClass()'],
        correctAnswer: 'class MyClass {}'
    },
    {
        question: "Quel type de boucle permet de parcourir directement les valeurs d'un tableau ?",
        options: ['for', 'for...of', 'for...in', 'while'],
        correctAnswer: 'for...of'
    },
    {
        question: "Quelle méthode est utilisée pour exécuter du code après un délai ?",
        options: ['setTimeout()', 'setInterval()', 'delay()', 'timeout()'],
        correctAnswer: 'setTimeout()'
    },
    {
        question: "Quelle est la valeur par défaut de this dans une fonction non liée ?",
        options: ['window', 'undefined', 'null', 'Object'],
        correctAnswer: 'window'
    }
];

const noSqlQuestions = [
    {
        question: "Qu'est-ce qu'une base de données NoSQL ?",
        options: ['Relationnelle', 'Orientée Documents', 'Hiérarchique', 'Graphique'],
        correctAnswer: 'Orientée Documents'
    },
    {
        question: "Quelle caractéristique est associée à une base de données NoSQL ?",
        options: ['ACID', 'BASE', 'OLTP', 'SQL strict'],
        correctAnswer: 'BASE'
    },
    {
        question: "Quel type de base NoSQL est MongoDB ?",
        options: ['Graphique', 'Colonnes', 'Clé-Valeur', 'Documents'],
        correctAnswer: 'Documents'
    },
    {
        question: "Quelle base NoSQL est conçue pour les graphiques ?",
        options: ['Neo4j', 'Cassandra', 'Redis', 'DynamoDB'],
        correctAnswer: 'Neo4j'
    },
    {
        question: "Quel langage est utilisé pour interroger MongoDB ?",
        options: ['SQL', 'MQL', 'Cypher', 'JSON'],
        correctAnswer: 'MQL'
    },
    {
        question: "Comment stocke-t-on les données dans une base de type Clé-Valeur ?",
        options: ['Collections', 'Colonnes', 'Clés et valeurs', 'Graphiques'],
        correctAnswer: 'Clés et valeurs'
    },
    {
        question: "Cassandra est un exemple de base NoSQL de quel type ?",
        options: ['Clé-Valeur', 'Colonnes', 'Graphique', 'Documents'],
        correctAnswer: 'Colonnes'
    },
    {
        question: "Quel format est couramment utilisé pour stocker des documents NoSQL ?",
        options: ['CSV', 'JSON', 'XML', 'TXT'],
        correctAnswer: 'JSON'
    },
    {
        question: "Quelle base NoSQL est particulièrement adaptée au caching ?",
        options: ['MongoDB', 'Redis', 'Neo4j', 'Couchbase'],
        correctAnswer: 'Redis'
    },
    {
        question: "Comment s'appelle la fonction équivalente à JOIN dans MongoDB ?",
        options: ['aggregate', 'lookup', 'combine', 'merge'],
        correctAnswer: 'lookup'
    },
    {
        question: "Quelle commande MongoDB insère un nouveau document ?",
        options: ['db.insert()', 'db.save()', 'db.add()', 'db.insertOne()'],
        correctAnswer: 'db.insertOne()'
    },
    {
        question: "Dans MongoDB, comment supprime-t-on un document ?",
        options: ['db.delete()', 'db.remove()', 'db.deleteOne()', 'db.drop()'],
        correctAnswer: 'db.deleteOne()'
    },
    {
        question: "Quelle base NoSQL est fournie par Amazon ?",
        options: ['Redis', 'DynamoDB', 'CouchDB', 'Neo4j'],
        correctAnswer: 'DynamoDB'
    },
    {
        question: "Quelle est l'unité de stockage minimale dans Cassandra ?",
        options: ['Row', 'Column Family', 'Node', 'Partition'],
        correctAnswer: 'Column Family'
    },
    {
        question: "Quel outil peut être utilisé pour sauvegarder des bases MongoDB ?",
        options: ['mongodump', 'mongoexport', 'backupdb', 'mongosave'],
        correctAnswer: 'mongodump'
    },
    {
        question: "Quel protocole est utilisé par CouchDB pour synchroniser les données ?",
        options: ['HTTP', 'FTP', 'AMQP', 'gRPC'],
        correctAnswer: 'HTTP'
    },
    {
        question: "Comment MongoDB garantit-il la haute disponibilité ?",
        options: ['Sharding', 'Replication', 'Backups', 'Mirroring'],
        correctAnswer: 'Replication'
    },
    {
        question: "Quelle commande liste toutes les collections dans MongoDB ?",
        options: ['show collections', 'db.getCollections()', 'list collections', 'db.collections()'],
        correctAnswer: 'show collections'
    },
    {
        question: "Quelle commande renvoie les statistiques d'une collection dans MongoDB ?",
        options: ['db.stats()', 'db.collection.stats()', 'collection.info()', 'db.collection.info()'],
        correctAnswer: 'db.collection.stats()'
    },
    {
        question: "Quel type de base de données est utilisé pour les données massives et distribuées ?",
        options: ['NoSQL', 'SQL', 'OLAP', 'OLTP'],
        correctAnswer: 'NoSQL'
    }
];

const typeScriptQuestions = [
    {
        question: "Quel est l'avantage principal de TypeScript par rapport à JavaScript ?",
        options: ['Typage statique', 'Plus rapide', 'Pas besoin de transpiler', 'Support direct des modules'],
        correctAnswer: 'Typage statique'
    },
    {
        question: "Quel est l'extension d'un fichier TypeScript ?",
        options: ['.js', '.ts', '.tsx', '.type'],
        correctAnswer: '.ts'
    },
    {
        question: "Quel outil est utilisé pour transpiler TypeScript en JavaScript ?",
        options: ['Babel', 'Webpack', 'TypeScript Compiler (tsc)', 'Vite'],
        correctAnswer: 'TypeScript Compiler (tsc)'
    },
    {
        question: "Quel type représente une variable qui peut être de plusieurs types ?",
        options: ['Union', 'Intersection', 'Any', 'Tuple'],
        correctAnswer: 'Union'
    },
    {
        question: "Quelle commande permet d'initialiser un projet TypeScript ?",
        options: ['tsc init', 'tsc --init', 'tsc create', 'tsc config'],
        correctAnswer: 'tsc --init'
    },
    {
        question: "Quelle syntaxe est utilisée pour définir un type en TypeScript ?",
        options: ['@type', 'define', 'type', 'var'],
        correctAnswer: 'type'
    },
    {
        question: "Quel fichier contient la configuration de TypeScript ?",
        options: ['ts.config.json', 'tsconfig.json', 'tsconfig.js', 'typescript.json'],
        correctAnswer: 'tsconfig.json'
    },
    {
        question: "Comment définit-on une interface en TypeScript ?",
        options: ['class', 'type', 'interface', 'define'],
        correctAnswer: 'interface'
    },
    {
        question: "Comment force-t-on une variable à être d'un type précis ?",
        options: ['Avec :', 'Avec as', 'Avec cast', 'Avec set'],
        correctAnswer: 'Avec as'
    },
    {
        question: "Quelle méthode de compilation surveille les changements en TypeScript ?",
        options: ['tsc watch', 'tsc -w', 'tsc --watch', 'tsc monitor'],
        correctAnswer: 'tsc --watch'
    },
    {
        question: "Quel type est utilisé pour éviter 'undefined' ou 'null' ?",
        options: ['Optionnel', 'Nullable', 'NonNullable', 'Strict'],
        correctAnswer: 'NonNullable'
    },
    {
        question: "Quelle est la valeur par défaut d'une variable non initialisée ?",
        options: ['undefined', 'null', '0', 'NaN'],
        correctAnswer: 'undefined'
    },
    {
        question: "Comment désactiver les erreurs liées au typage ?",
        options: ['Utiliser any', 'Utiliser strict', 'Utiliser unknown', 'Utiliser disable'],
        correctAnswer: 'Utiliser any'
    },
    {
        question: "Quel est le mot-clé utilisé pour hériter d'une classe ?",
        options: ['inherit', 'extends', 'implement', 'derive'],
        correctAnswer: 'extends'
    },
    {
        question: "Quel type est utilisé pour une fonction sans retour ?",
        options: ['never', 'void', 'undefined', 'null'],
        correctAnswer: 'void'
    },
    {
        question: "Quel est le rôle du mot-clé 'readonly' en TypeScript ?",
        options: ['Rendre une propriété modifiable', 'Empêcher une modification', 'Ajouter un type', 'Créer une constante'],
        correctAnswer: 'Empêcher une modification'
    },
    {
        question: "Quelle propriété permet d'assurer que toutes les clés d'un objet suivent un type ?",
        options: ['Record', 'Keyof', 'Mapped Type', 'Index Signature'],
        correctAnswer: 'Index Signature'
    },
    {
        question: "Quel type est utilisé pour combiner deux types ?",
        options: ['Intersection', 'Union', 'Combine', 'Tuple'],
        correctAnswer: 'Intersection'
    },
    {
        question: "Comment ajouter une fonction par défaut à une interface ?",
        options: ['default function', 'add default', 'declare', 'Utiliser une classe'],
        correctAnswer: 'Utiliser une classe'
    },
    {
        question: "Quel est le type qui représente un objet inconnu ?",
        options: ['unknown', 'any', 'object', 'null'],
        correctAnswer: 'unknown'
    }
];
const vueQuestions = [
    {
        question: "Quelle est la commande pour créer un projet Vue.js avec Vue CLI ?",
        options: ['vue new', 'vue create', 'vue init', 'vue start'],
        correctAnswer: 'vue create'
    },
    {
        question: "Quel fichier contient l'instance principale de Vue ?",
        options: ['main.js', 'index.js', 'app.vue', 'vue.js'],
        correctAnswer: 'main.js'
    },
    {
        question: "Quel est le rôle de la directive `v-bind` en Vue.js ?",
        options: [
            'Liaison de données unidirectionnelle',
            'Boucle à travers un tableau',
            'Conditionnel',
            'Événement click'
        ],
        correctAnswer: 'Liaison de données unidirectionnelle'
    },
    {
        question: "Quelle directive est utilisée pour afficher des listes en Vue.js ?",
        options: ['v-show', 'v-list', 'v-for', 'v-bind'],
        correctAnswer: 'v-for'
    },
    {
        question: "Comment appelle-t-on les composants enfants dans Vue.js ?",
        options: ['$child', '$refs', '$components', '$slots'],
        correctAnswer: '$refs'
    },
    {
        question: "Quelle fonction permet de détecter un changement de variable ?",
        options: ['watch', 'computed', 'methods', 'mounted'],
        correctAnswer: 'watch'
    },
    {
        question: "Quel est l'objectif de la méthode `emit` dans Vue.js ?",
        options: [
            'Envoyer des données au parent',
            'Modifier une propriété',
            'Charger des composants dynamiques',
            'Créer des événements globaux'
        ],
        correctAnswer: 'Envoyer des données au parent'
    },
    {
        question: "Quel hook de cycle de vie est appelé juste avant que le DOM soit détruit ?",
        options: ['beforeDestroy', 'destroyed', 'beforeUpdate', 'updated'],
        correctAnswer: 'beforeDestroy'
    },
    {
        question: "Quel outil est utilisé pour gérer les routes dans Vue.js ?",
        options: ['vuex', 'vue-router', 'router.js', 'vue-store'],
        correctAnswer: 'vue-router'
    },
    {
        question: "Quelle syntaxe permet d’ajouter un style dynamique ?",
        options: [
            ':class="{ active: isActive }"',
            'v-bind:style="styles"',
            ':style="activeStyle"',
            'Toutes les réponses'
        ],
        correctAnswer: 'Toutes les réponses'
    },
    {
        question: "Comment intégrer un composant dans un autre en Vue.js ?",
        options: ['import', 'include', 'extends', 'component'],
        correctAnswer: 'import'
    },
    {
        question: "Quel mot-clé est utilisé pour rendre une propriété accessible dans un composant enfant ?",
        options: ['props', 'data', 'computed', 'methods'],
        correctAnswer: 'props'
    },
    {
        question: "Quel est le fichier principal de configuration dans un projet Vue.js ?",
        options: ['vue.config.js', 'main.js', 'package.json', 'app.vue'],
        correctAnswer: 'vue.config.js'
    },
    {
        question: "Quelle méthode de Vuex est utilisée pour envoyer des actions ?",
        options: ['dispatch', 'commit', 'setState', 'store'],
        correctAnswer: 'dispatch'
    },
    {
        question: "Quelle balise contient le template dans un composant Vue.js ?",
        options: ['<template>', '<script>', '<style>', '<view>'],
        correctAnswer: '<template>'
    },
    {
        question: "Comment créer un composant global ?",
        options: [
            'Vue.component()',
            'export default component',
            'registerComponent()',
            'createComponent()'
        ],
        correctAnswer: 'Vue.component()'
    },
    {
        question: "Comment activer le mode de développement dans Vue.js ?",
        options: ['Vue.debug = true', 'Vue.config.productionTip = false', 'setDebug()', 'debugMode()'],
        correctAnswer: 'Vue.config.productionTip = false'
    },
    {
        question: "Quelle propriété est utilisée pour écouter les événements ?",
        options: ['@', 'v-on', ':on', 'on:'],
        correctAnswer: 'v-on'
    },
    {
        question: "Comment appeler une fonction dans un événement clic ?",
        options: ['@click="fonction"', 'v-click="fonction"', ':click="fonction"', 'on-click="fonction"'],
        correctAnswer: '@click="fonction"'
    },
    {
        question: "Quel mot-clé est utilisé pour rendre une propriété immuable ?",
        options: ['readonly', 'immutable', 'prop', 'static'],
        correctAnswer: 'readonly'
    }
];

const ajaxQuestions = [
    {
        question: "Que signifie AJAX ?",
        options: [
            'Asynchronous JavaScript and XML',
            'Advanced JSON and XML',
            'API JavaScript and XML',
            'Active JavaScript and XML'
        ],
        correctAnswer: 'Asynchronous JavaScript and XML'
    },
    {
        question: "Quelle méthode est utilisée pour envoyer une requête HTTP GET en AJAX ?",
        options: ['ajax.get()', 'XMLHttpRequest', 'fetch()', '$.get()'],
        correctAnswer: '$.get()'
    },
    {
        question: "Quelle méthode AJAX est utilisée pour envoyer une requête POST ?",
        options: ['$.ajax()', '$.post()', '$.put()', '$.send()'],
        correctAnswer: '$.post()'
    },
    {
        question: "Quel objet natif est utilisé pour créer des requêtes AJAX ?",
        options: ['Fetch', 'XMLHttpRequest', 'AJAXObject', 'Promise'],
        correctAnswer: 'XMLHttpRequest'
    },
    {
        question: "Quel format de données est souvent utilisé avec AJAX ?",
        options: ['XML', 'JSON', 'HTML', 'CSV'],
        correctAnswer: 'JSON'
    },
    {
        question: "Quelle propriété d'XMLHttpRequest contient le code d'état de la requête ?",
        options: ['statusText', 'readyState', 'status', 'responseCode'],
        correctAnswer: 'status'
    },
    {
        question: "Quel événement est déclenché lorsque la réponse AJAX est prête ?",
        options: ['onload', 'onreadystatechange', 'oncomplete', 'onrequest'],
        correctAnswer: 'onreadystatechange'
    },
    {
        question: "Quelle méthode de l'objet Fetch permet de lire la réponse sous forme de JSON ?",
        options: ['readJSON()', 'parseJSON()', 'toJSON()', 'json()'],
        correctAnswer: 'json()'
    },
    {
        question: "Quelle est l'alternative moderne à XMLHttpRequest pour AJAX ?",
        options: ['Fetch API', 'WebSockets', 'Promises', 'jQuery'],
        correctAnswer: 'Fetch API'
    },
    {
        question: "Quel est l'avantage principal d'AJAX ?",
        options: [
            'Rechargement total de la page',
            'Communication asynchrone',
            'Simplification des scripts',
            'Utilisation facile avec PHP uniquement'
        ],
        correctAnswer: 'Communication asynchrone'
    },
    {
        question: "Quelle méthode permet d'annuler une requête XMLHttpRequest ?",
        options: ['abort()', 'cancel()', 'stop()', 'end()'],
        correctAnswer: 'abort()'
    },
    {
        question: "Quel est le rôle de l'en-tête `Content-Type` dans AJAX ?",
        options: [
            'Spécifie le type de réponse attendu',
            'Indique la méthode HTTP utilisée',
            'Définit le type de données envoyées',
            'Spécifie le domaine autorisé'
        ],
        correctAnswer: 'Définit le type de données envoyées'
    },
    {
        question: "Quelle option est nécessaire pour envoyer des cookies avec une requête Fetch ?",
        options: ['credentials: include', 'withCookies: true', 'cookies: true', 'headers: "cookies"'],
        correctAnswer: 'credentials: include'
    },
    {
        question: "Quel est l'état `readyState` d'une requête terminée ?",
        options: ['0', '1', '2', '4'],
        correctAnswer: '4'
    },
    {
        question: "Comment gérer les erreurs dans une requête Fetch ?",
        options: ['try...catch', 'if(response.error)', 'onerror()', 'finally()'],
        correctAnswer: 'try...catch'
    },
    {
        question: "Quelle méthode Fetch permet d'inclure des en-têtes personnalisés ?",
        options: ['headers()', 'setHeaders()', 'init.headers', 'options.headers'],
        correctAnswer: 'init.headers'
    },
    {
        question: "Quelle méthode jQuery permet d'arrêter une requête en cours ?",
        options: ['stop()', 'abort()', 'end()', 'terminate()'],
        correctAnswer: 'abort()'
    },
    {
        question: "Quel est le code HTTP pour une requête réussie en AJAX ?",
        options: ['200', '301', '404', '500'],
        correctAnswer: '200'
    },
    {
        question: "Quel en-tête est souvent utilisé pour permettre les requêtes CORS ?",
        options: [
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Methods',
            'Content-Type',
            'Authorization'
        ],
        correctAnswer: 'Access-Control-Allow-Origin'
    }
];
const jqueryQuestions = [
    {
        question: "Quelle est la syntaxe correcte pour sélectionner un élément par ID en jQuery ?",
        options: ['$(#id)', '$(".id")', '$(id)', '$("#id")'],
        correctAnswer: '$("#id")'
    },
    {
        question: "Quelle méthode est utilisée pour masquer un élément en jQuery ?",
        options: ['hide()', 'invisible()', 'display:none', 'remove()'],
        correctAnswer: 'hide()'
    },
    {
        question: "Comment attacher un gestionnaire d'événements `click` en jQuery ?",
        options: [
            '$("#button").on("click", function() {})',
            '$("#button").addEventListener("click", function() {})',
            '$("#button").click(function() {})',
            'Les deux premières options'
        ],
        correctAnswer: 'Les deux premières options'
    },
    {
        question: "Quelle méthode est utilisée pour ajouter une classe CSS à un élément ?",
        options: ['addStyle()', 'cssClass()', 'addClass()', 'addStyleClass()'],
        correctAnswer: 'addClass()'
    },
    {
        question: "Comment récupérer la valeur d'un champ input avec jQuery ?",
        options: [
            '$("#input").text()',
            '$("#input").html()',
            '$("#input").val()',
            '$("#input").getValue()'
        ],
        correctAnswer: '$("#input").val()'
    },
    {
        question: "Quelle méthode est utilisée pour effectuer une requête AJAX GET en jQuery ?",
        options: ['$.ajaxGet()', '$.get()', '$.ajax()', '$.getJSON()'],
        correctAnswer: '$.get()'
    },
    {
        question: "Quelle méthode est utilisée pour insérer du contenu HTML avant un élément en jQuery ?",
        options: ['before()', 'prepend()', 'insertBefore()', 'htmlBefore()'],
        correctAnswer: 'before()'
    },
    {
        question: "Quelle fonction permet d'exécuter du code après le chargement complet de la page ?",
        options: ['$(document).ready()', '$.onLoad()', '$.init()', 'load()'],
        correctAnswer: '$(document).ready()'
    },
    {
        question: "Quelle méthode est utilisée pour changer un attribut HTML d'un élément ?",
        options: ['attr()', 'setAttr()', 'attribute()', 'property()'],
        correctAnswer: 'attr()'
    },
    {
        question: "Comment vérifier si un élément a une classe particulière en jQuery ?",
        options: [
            '$("#element").is(".classe")',
            '$("#element").hasClass("classe")',
            '$("#element").checkClass("classe")',
            '$("#element").classList.contains("classe")'
        ],
        correctAnswer: '$("#element").hasClass("classe")'
    },
    {
        question: "Quelle méthode permet d'ajouter un effet de fondu ?",
        options: ['fadeIn()', 'fadeOut()', 'fadeToggle()', 'Toutes les réponses'],
        correctAnswer: 'Toutes les réponses'
    },
    {
        question: "Quelle méthode permet de retirer tous les éléments enfants d'un élément ?",
        options: ['clear()', 'empty()', 'remove()', 'detach()'],
        correctAnswer: 'empty()'
    },
    {
        question: "Quelle méthode est utilisée pour arrêter une animation en cours ?",
        options: ['pause()', 'stop()', 'end()', 'abort()'],
        correctAnswer: 'stop()'
    },
    {
        question: "Comment appliquer une animation personnalisée à un élément ?",
        options: ['animate()', 'custom()', 'transition()', 'move()'],
        correctAnswer: 'animate()'
    },
    {
        question: "Quelle méthode permet d'exécuter une fonction après une animation ?",
        options: ['done()', 'complete()', 'then()', 'callback()'],
        correctAnswer: 'complete()'
    },
    {
        question: "Quelle méthode permet de supprimer un élément HTML du DOM ?",
        options: ['remove()', 'delete()', 'detach()', 'destroy()'],
        correctAnswer: 'remove()'
    },
    {
        question: "Quelle méthode jQuery est utilisée pour copier un élément HTML ?",
        options: ['clone()', 'copy()', 'duplicate()', 'replicate()'],
        correctAnswer: 'clone()'
    },
    {
        question: "Comment désactiver temporairement un gestionnaire d'événements en jQuery ?",
        options: ['off()', 'disable()', 'unbind()', 'removeHandler()'],
        correctAnswer: 'off()'
    },
    {
        question: "Quelle méthode permet de basculer entre deux états d'un élément HTML ?",
        options: ['toggle()', 'switch()', 'changeState()', 'toggleClass()'],
        correctAnswer: 'toggle()'
    },
    {
        question: "Quelle méthode permet de gérer les événements liés aux touches du clavier ?",
        options: ['keydown()', 'keypress()', 'keyup()', 'Toutes les réponses'],
        correctAnswer: 'Toutes les réponses'
    }
];
const cQuestions = [
    {
        question: "Quel est le type de retour de la fonction `main()` en C ?",
        options: ['int', 'void', 'float', 'char'],
        correctAnswer: 'int'
    },
    {
        question: "Quel est l'opérateur utilisé pour accéder au contenu d'un pointeur ?",
        options: ['&', '*', '->', '.'],
        correctAnswer: '*'
    },
    {
        question: "Quelle bibliothèque est utilisée pour les entrées/sorties standard en C ?",
        options: ['<stdlib.h>', '<stdio.h>', '<string.h>', '<conio.h>'],
        correctAnswer: '<stdio.h>'
    },
    {
        question: "Quelle est la taille d'un entier `int` sur une architecture 32 bits ?",
        options: ['2 octets', '4 octets', '8 octets', '1 octet'],
        correctAnswer: '4 octets'
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une constante en C ?",
        options: ['constant', 'define', 'const', 'static'],
        correctAnswer: 'const'
    },
    {
        question: "Quelle est la sortie de `printf(\"%d\", 10/3);` ?",
        options: ['3.3333', '3', 'Erreur', '10/3'],
        correctAnswer: '3'
    },
    {
        question: "Quelle est la valeur par défaut d'une variable globale non initialisée en C ?",
        options: ['0', 'null', 'indéfinie', 'garbage value'],
        correctAnswer: '0'
    },
    {
        question: "Quel est le mot-clé pour allouer dynamiquement de la mémoire en C ?",
        options: ['malloc', 'new', 'alloc', 'create'],
        correctAnswer: 'malloc'
    },
    {
        question: "Quelle est la fonction utilisée pour libérer de la mémoire allouée ?",
        options: ['free()', 'delete()', 'remove()', 'dispose()'],
        correctAnswer: 'free()'
    },
    {
        question: "Quel type de données est retourné par l'expression `sizeof` ?",
        options: ['int', 'size_t', 'float', 'unsigned int'],
        correctAnswer: 'size_t'
    },
    {
        question: "Quelle est la syntaxe correcte pour déclarer un tableau en C ?",
        options: ['int arr[];', 'int arr[10];', 'arr int[10];', 'int[] arr;'],
        correctAnswer: 'int arr[10];'
    },
    {
        question: "Que fait la fonction `strcpy` dans la bibliothèque `<string.h>` ?",
        options: [
            'Copie une chaîne dans une autre',
            'Compare deux chaînes',
            'Concatène deux chaînes',
            'Trouve la longueur d\'une chaîne'
        ],
        correctAnswer: 'Copie une chaîne dans une autre'
    },
    {
        question: "Quelle est la valeur de `x` après l'exécution de ce code : `int x = 5; x += 2;` ?",
        options: ['7', '5', '2', 'Erreur'],
        correctAnswer: '7'
    },
    {
        question: "Quel est l'opérateur logique pour AND en C ?",
        options: ['&&', '||', '&', '|'],
        correctAnswer: '&&'
    },
    {
        question: "Quel est le rôle de la directive `#include` ?",
        options: [
            'Inclure des fichiers d\'en-tête',
            'Définir des variables globales',
            'Allouer de la mémoire',
            'Compiler le code'
        ],
        correctAnswer: 'Inclure des fichiers d\'en-tête'
    },
    {
        question: "Quelle est la valeur de retour d'une fonction en cas de succès en C ?",
        options: ['1', '0', '-1', 'Erreur'],
        correctAnswer: '0'
    },
    {
        question: "Quel est l'équivalent de `if (!a)` ?",
        options: ['if (a == 0)', 'if (a != 0)', 'if (a)', 'if (a != 1)'],
        correctAnswer: 'if (a == 0)'
    },
    {
        question: "Quel type de boucle garantit une exécution au moins une fois ?",
        options: ['for', 'while', 'do...while', 'Aucune des réponses'],
        correctAnswer: 'do...while'
    },
    {
        question: "Quelle est la sortie de ce code : `printf(\"%c\", 'A' + 1);` ?",
        options: ['B', 'A', '1', 'Erreur'],
        correctAnswer: 'B'
    },
    {
        question: "Que fait la fonction `fscanf` en C ?",
        options: [
            'Lit les données d\'un fichier',
            'Écrit des données dans un fichier',
            'Ferme un fichier',
            'Alloue de la mémoire pour un fichier'
        ],
        correctAnswer: 'Lit les données d\'un fichier'
    }
];
const sqlQuestions = [
    {
        question: "Quel mot-clé est utilisé pour sélectionner toutes les colonnes dans une table SQL ?",
        options: ['ALL', '*', 'COLUMN', 'SELECT_ALL'],
        correctAnswer: '*'
    },
    {
        question: "Quelle commande SQL est utilisée pour insérer de nouvelles données dans une table ?",
        options: ['INSERT', 'ADD', 'APPEND', 'UPDATE'],
        correctAnswer: 'INSERT'
    },
    {
        question: "Quelle clause est utilisée pour filtrer les résultats d'une requête SQL ?",
        options: ['WHERE', 'FILTER', 'SEARCH', 'HAVING'],
        correctAnswer: 'WHERE'
    },
    {
        question: "Quelle commande est utilisée pour supprimer une table SQL ?",
        options: ['DROP TABLE', 'DELETE TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
        correctAnswer: 'DROP TABLE'
    },
    {
        question: "Quel mot-clé est utilisé pour éviter les doublons dans une requête SQL ?",
        options: ['DISTINCT', 'UNIQUE', 'DIFFERENT', 'NO_DUPLICATES'],
        correctAnswer: 'DISTINCT'
    },
    {
        question: "Quelle commande SQL est utilisée pour modifier des données existantes dans une table ?",
        options: ['UPDATE', 'MODIFY', 'EDIT', 'CHANGE'],
        correctAnswer: 'UPDATE'
    },
    {
        question: "Quelle clause est utilisée pour regrouper des données dans une requête SQL ?",
        options: ['GROUP BY', 'ORDER BY', 'AGGREGATE', 'COLLECT BY'],
        correctAnswer: 'GROUP BY'
    },
    {
        question: "Quelle commande est utilisée pour créer une nouvelle table en SQL ?",
        options: ['CREATE TABLE', 'ADD TABLE', 'NEW TABLE', 'GENERATE TABLE'],
        correctAnswer: 'CREATE TABLE'
    },
    {
        question: "Quelle clause est utilisée pour trier les résultats d'une requête SQL ?",
        options: ['ORDER BY', 'SORT BY', 'ARRANGE BY', 'ORGANIZE BY'],
        correctAnswer: 'ORDER BY'
    },
    {
        question: "Quel type de jointure retourne toutes les lignes des deux tables, même s'il n'y a pas de correspondance ?",
        options: ['FULL OUTER JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN'],
        correctAnswer: 'FULL OUTER JOIN'
    },
    {
        question: "Quelle commande est utilisée pour supprimer toutes les lignes d'une table sans supprimer la table elle-même ?",
        options: ['TRUNCATE TABLE', 'DELETE ALL', 'CLEAR TABLE', 'DROP ALL'],
        correctAnswer: 'TRUNCATE TABLE'
    },
    {
        question: "Quelle fonction est utilisée pour compter le nombre de lignes dans une table SQL ?",
        options: ['COUNT()', 'SUM()', 'NUMBER()', 'TOTAL()'],
        correctAnswer: 'COUNT()'
    },
    {
        question: "Quelle commande SQL est utilisée pour ajouter une nouvelle colonne à une table existante ?",
        options: ['ALTER TABLE', 'ADD COLUMN', 'MODIFY TABLE', 'APPEND COLUMN'],
        correctAnswer: 'ALTER TABLE'
    },
    {
        question: "Comment peut-on limiter le nombre de résultats retournés par une requête SQL ?",
        options: ['LIMIT', 'TOP', 'MAX', 'RESTRICT'],
        correctAnswer: 'LIMIT'
    },
    {
        question: "Quel opérateur est utilisé pour rechercher une correspondance partielle dans une requête SQL ?",
        options: ['LIKE', 'MATCH', 'SEARCH', 'FIND'],
        correctAnswer: 'LIKE'
    },
    {
        question: "Quelle commande SQL est utilisée pour renommer une table existante ?",
        options: ['RENAME TABLE', 'ALTER TABLE RENAME', 'CHANGE TABLE', 'MODIFY TABLE'],
        correctAnswer: 'RENAME TABLE'
    },
    {
        question: "Quelle fonction SQL retourne la somme des valeurs d'une colonne ?",
        options: ['SUM()', 'TOTAL()', 'ADD()', 'AGGREGATE()'],
        correctAnswer: 'SUM()'
    },
    {
        question: "Quelle clause est utilisée pour appliquer une condition sur les groupes dans une requête SQL ?",
        options: ['HAVING', 'WHERE', 'GROUP BY', 'FILTER'],
        correctAnswer: 'HAVING'
    },
    {
        question: "Quel type de clé est utilisé pour identifier de manière unique chaque ligne dans une table SQL ?",
        options: ['PRIMARY KEY', 'UNIQUE KEY', 'FOREIGN KEY', 'IDENTIFIER KEY'],
        correctAnswer: 'PRIMARY KEY'
    },
    {
        question: "Quel type de jointure retourne uniquement les lignes correspondantes entre deux tables ?",
        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'OUTER JOIN'],
        correctAnswer: 'INNER JOIN'
    }
];
 const dotNetQuestions = [
    {
        question: "Quel mot-clé est utilisé pour déclarer une classe en C# ?",
        options: ['class', 'public', 'private', 'void'],
        correctAnswer: 'class'
    },
    {
        question: "Quel mot-clé est utilisé pour créer un objet en C# ?",
        options: ['new', 'create', 'object', 'instance'],
        correctAnswer: 'new'
    },
    {
        question: "Quel est le type de données par défaut pour une variable qui n'a pas de valeur assignée en C# ?",
        options: ['null', 'undefined', '0', 'empty'],
        correctAnswer: 'null'
    },
    {
        question: "Dans .NET, quel namespace contient les classes de base pour l'I/O (entrée/sortie) ?",
        options: ['System.IO', 'System.Data', 'System.Text', 'System.Linq'],
        correctAnswer: 'System.IO'
    },
    {
        question: "Comment déclarer une méthode sans valeur de retour en C# ?",
        options: ['void', 'null', 'empty', 'return'],
        correctAnswer: 'void'
    },
    {
        question: "Quel attribut est utilisé pour rendre une méthode asynchrone en C# ?",
        options: ['async', 'await', 'synchronous', 'parallel'],
        correctAnswer: 'async'
    },
    {
        question: "Quel est le type de données utilisé pour une chaîne de caractères en C# ?",
        options: ['string', 'char', 'text', 'varchar'],
        correctAnswer: 'string'
    },
    {
        question: "Quel mot-clé est utilisé pour hériter d'une classe dans C# ?",
        options: ['inherits', 'extends', 'base', 'class'],
        correctAnswer: 'base'
    },
    {
        question: "Quel type de contrôle est utilisé pour afficher une liste déroulante dans une application ASP.NET ?",
        options: ['DropDownList', 'ListBox', 'ComboBox', 'CheckBox'],
        correctAnswer: 'DropDownList'
    },
    {
        question: "Quel est le rôle du mot-clé 'using' en C# ?",
        options: ['Inclure un namespace', 'Gérer la mémoire', 'Créer un alias', 'Définir une interface'],
        correctAnswer: 'Inclure un namespace'
    },
    {
        question: "Comment créer une exception personnalisée en C# ?",
        options: ['En héritant de la classe Exception', 'En utilisant throw', 'Avec try-catch', 'En utilisant throw new'],
        correctAnswer: 'En héritant de la classe Exception'
    },
    {
        question: "Quel est l'équivalent de JavaScript 'console.log()' en C# ?",
        options: ['Console.WriteLine()', 'Console.Log()', 'Print()', 'System.out.println()'],
        correctAnswer: 'Console.WriteLine()'
    },
    {
        question: "Comment créer un tableau de 5 entiers en C# ?",
        options: ['int[] arr = new int[5];', 'int arr[5];', 'array int[5];', 'new int[5]'],
        correctAnswer: 'int[] arr = new int[5];'
    },
    {
        question: "Quelle est la méthode pour obtenir la longueur d'un tableau en C# ?",
        options: ['array.length', 'arr.size()', 'arr.Length', 'arr.count()'],
        correctAnswer: 'arr.Length'
    },
    {
        question: "Quel attribut est utilisé pour indiquer qu'une méthode peut être surchargée en C# ?",
        options: ['virtual', 'abstract', 'override', 'new'],
        correctAnswer: 'virtual'
    },
    {
        question: "Quel est le rôle de l'interface IDisposable en C# ?",
        options: ['Libérer les ressources non managées', 'Gérer les erreurs', 'Définir une méthode asynchrone', 'Créer un objet'],
        correctAnswer: 'Libérer les ressources non managées'
    },
    {
        question: "Quel est l'équivalent d'un destructeur en C# ?",
        options: ['Finalizer', 'Destructor', 'Dispose', 'Finalize'],
        correctAnswer: 'Finalizer'
    },
    {
        question: "Dans quel fichier se trouve la configuration de l'application ASP.NET Core ?",
        options: ['appsettings.json', 'web.config', 'application.xml', 'config.json'],
        correctAnswer: 'appsettings.json'
    },
    {
        question: "Quel est le type de données par défaut pour une variable de type entier en C# ?",
        options: ['int', 'long', 'decimal', 'float'],
        correctAnswer: 'int'
    },
    {
        question: "Quel est le type d'exception levé lorsque l'on tente d'accéder à un indice de tableau hors des limites en C# ?",
        options: ['IndexOutOfRangeException', 'ArgumentOutOfRangeException', 'NullReferenceException', 'InvalidOperationException'],
        correctAnswer: 'IndexOutOfRangeException'
    },
    {
        question: "Quel est le but de l'attribut 'Serializable' en C# ?",
        options: ['Permet de convertir un objet en une séquence de bytes', 'Permet de rendre une méthode publique', 'Permet de générer une clé de session', 'Permet de déclarer un objet constant'],
        correctAnswer: 'Permet de convertir un objet en une séquence de bytes'
    }
];

const nodeJsQuestions = [
    {
        question: "Quelle commande est utilisée pour installer un module Node.js ?",
        options: ["npm install <module>", "npm add <module>", "node install <module>", "install <module>"],
        correctAnswer: "npm install <module>"
    },
    {
        question: "Quel module est utilisé pour manipuler des fichiers en Node.js ?",
        options: ["fs", "file", "http", "stream"],
        correctAnswer: "fs"
    },
    {
        question: "Quel mot-clé est utilisé pour importer un module en Node.js ?",
        options: ["require", "import", "include", "load"],
        correctAnswer: "require"
    },
    {
        question: "Quelle commande permet de démarrer un fichier Node.js ?",
        options: ["node <filename>", "run <filename>", "start <filename>", "execute <filename>"],
        correctAnswer: "node <filename>"
    },
    {
        question: "Quel framework est populaire pour construire des API avec Node.js ?",
        options: ["Express.js", "Django", "Spring", "Flask"],
        correctAnswer: "Express.js"
    },
    {
        question: "Quelle méthode est utilisée pour lire un fichier de manière synchrone avec le module 'fs' ?",
        options: ["fs.readFileSync", "fs.readFile", "fs.syncRead", "fs.read"],
        correctAnswer: "fs.readFileSync"
    },
    {
        question: "Quel est le rôle du fichier package.json ?",
        options: [
            "Définir les dépendances du projet",
            "Exécuter les scripts",
            "Stocker les données de l'application",
            "Contenir le code de l'application"
        ],
        correctAnswer: "Définir les dépendances du projet"
    },
    {
        question: "Comment installer un module globalement avec npm ?",
        options: ["npm install -g <module>", "npm add -g <module>", "global install <module>", "npm global <module>"],
        correctAnswer: "npm install -g <module>"
    },
    {
        question: "Quel module est utilisé pour créer un serveur HTTP en Node.js ?",
        options: ["http", "https", "fs", "net"],
        correctAnswer: "http"
    },
    {
        question: "Quelle méthode est utilisée pour écrire des données dans un fichier en mode asynchrone ?",
        options: ["fs.writeFile", "fs.writeSync", "fs.write", "fs.asyncWrite"],
        correctAnswer: "fs.writeFile"
    },
    {
        question: "Quel est le rôle de 'process' en Node.js ?",
        options: [
            "Fournir des informations sur l'environnement d'exécution",
            "Gérer les requêtes HTTP",
            "Lire les fichiers",
            "Créer des threads"
        ],
        correctAnswer: "Fournir des informations sur l'environnement d'exécution"
    },
    {
        question: "Quelle méthode est utilisée pour envoyer une réponse dans un serveur HTTP Node.js ?",
        options: ["response.end", "response.send", "response.write", "response.close"],
        correctAnswer: "response.end"
    },
    {
        question: "Quel est le port par défaut pour exécuter une application Node.js ?",
        options: ["3000", "8080", "80", "5000"],
        correctAnswer: "3000"
    },
    {
        question: "Quel module est utilisé pour gérer les événements en Node.js ?",
        options: ["events", "emitter", "eventHandler", "listener"],
        correctAnswer: "events"
    },
    {
        question: "Comment gérer les promesses en Node.js ?",
        options: ["Avec then() et catch()", "Avec try() et catch()", "Avec resolve() et reject()", "Avec async()"],
        correctAnswer: "Avec then() et catch()"
    },
    {
        question: "Quel est l'objectif de 'buffer' en Node.js ?",
        options: [
            "Manipuler des flux de données binaires",
            "Créer un serveur",
            "Lire les fichiers texte",
            "Gérer les événements"
        ],
        correctAnswer: "Manipuler des flux de données binaires"
    },
    {
        question: "Quelle méthode est utilisée pour convertir un Buffer en chaîne de caractères ?",
        options: ["toString", "convert", "bufferString", "parse"],
        correctAnswer: "toString"
    },
    {
        question: "Quel est le rôle du module 'os' en Node.js ?",
        options: [
            "Fournir des informations sur le système d'exploitation",
            "Créer un serveur HTTP",
            "Gérer les fichiers",
            "Lancer des scripts"
        ],
        correctAnswer: "Fournir des informations sur le système d'exploitation"
    },
    {
        question: "Quelle méthode permet de gérer les exceptions non capturées en Node.js ?",
        options: [
            "process.on('uncaughtException')",
            "catchException()",
            "errorHandler()",
            "exceptionHandler()"
        ],
        correctAnswer: "process.on('uncaughtException')"
    },
    {
        question: "Quelle commande permet d'initialiser un projet Node.js avec npm ?",
        options: ["npm init", "node init", "npm start", "init project"],
        correctAnswer: "npm init"
    }
];

export { javaQuestions, cQuestions, nodeJsQuestions, dotNetQuestions,ajaxQuestions, sqlQuestions,jqueryQuestions, vueQuestions,typeScriptQuestions, reactQuestions, phpQuestions, pythonQuestions, csharpQuestions, angularQuestions, javascriptQuestions, noSqlQuestions };