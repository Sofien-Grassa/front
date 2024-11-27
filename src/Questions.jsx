const javaQuestions = [
    {
        question: "Quel est le type de donn�es par d�faut pour une variable non initialis�e en Java ?",
        options: ['int', 'float', 'null', 'undefined'],
        correctAnswer: 'null'
    },
    {
        question: "Comment d�clarer une m�thode en Java ?",
        options: ['function myMethod()', 'void myMethod()', 'public void myMethod()', 'method myMethod()'],
        correctAnswer: 'public void myMethod()'
    },
    {
        question: "Quel est le principal objectif de l'utilisation des classes en Java ?",
        options: ['Encapsulation', 'Abstraction', 'H�ritage', 'Polymorphisme'],
        correctAnswer: 'Encapsulation'
    },
    {
        question: "Quelle est la diff�rence entre une ArrayList et un tableau en Java ?",
        options: ['Une ArrayList est plus rapide', 'Un tableau est dynamique', 'Une ArrayList peut contenir des types diff�rents', 'Un tableau est fixe en taille'],
        correctAnswer: 'Un tableau est fixe en taille'
    },
    {
        question: "Comment d�clarer une variable d'instance en Java ?",
        options: ['public int myVar', 'int myVar', 'myVar int', 'private int myVar'],
        correctAnswer: 'private int myVar'
    },
    {
        question: "Qu'est-ce qu'une exception en Java ?",
        options: ['Un message derreur', 'Un objet qui capte des erreurs', 'Un type de variable', 'Un type de m�thode'],
    correctAnswer: 'Un objet qui capte des erreurs'
  },
    {
        question: "Qu'est-ce que l'h�ritage en Java ?",
        options: ['L�ajout de nouvelles fonctionnalit�s', 'La red�finition de m�thodes', 'La possibilit� de modifier un objet', 'La possibilit� de r�utiliser le code d�une autre classe'],
        correctAnswer: 'La possibilit� de r�utiliser le code d�une autre classe'
    },
    {
        question: "Qu'est-ce que le polymorphisme en Java ?",
        options: ['La capacit� � avoir plusieurs formes de m�thodes', 'La capacit� d�h�riter d�une seule classe', 'La capacit� de ne pas utiliser les exceptions', 'Aucune de ces r�ponses'],
        correctAnswer: 'La capacit� � avoir plusieurs formes de m�thodes'
    },
    {
        question: "Qu'est-ce qu'une interface en Java ?",
        options: ['Un type de classe', 'Un type dobjet', 'Un contrat que les classes peuvent impl�menter', 'Un type de m�thode'],
    correctAnswer: 'Un contrat que les classes peuvent impl�menter'
  },
    {
        question: "Que signifie 'public static void main(String[] args)' en Java ?",
        options: ['La m�thode principale qui est ex�cut�e au d�marrage du programme', 'Une m�thode priv�e', 'Un constructeur', 'Un type de variable'],
        correctAnswer: 'La m�thode principale qui est ex�cut�e au d�marrage du programme'
    },
    {
        question: "Quel est l'objectif d'un constructeur en Java ?",
        options: ['Allouer de la m�moire pour un objet', 'Initialiser un objet', 'Mettre � jour les valeurs des propri�t�s de l�objet', 'Cr�er des m�thodes'],
        correctAnswer: 'Initialiser un objet'
    },
    {
        question: "Qu'est-ce que l'encapsulation en Java ?",
        options: ['La possibilit� de modifier des objets', 'La protection des donn�es en les cachant dans des classes', 'Le m�canisme permettant de red�finir des m�thodes', 'Le partage des m�thodes entre plusieurs classes'],
        correctAnswer: 'La protection des donn�es en les cachant dans des classes'
    },
    {
        question: "Que fait la m�thode 'System.out.println()' en Java ?",
        options: ['Affiche un message � l�cran', 'Modifie la valeur d�une variable', '�crit dans un fichier', 'Cr�e une nouvelle ligne dans la console'],
    correctAnswer: 'Affiche un message � l�cran'
  },
    {
        question: "Comment cr�er un tableau en Java ?",
        options: ['int[] myArray = new int[5];', 'Array myArray = new int[5];', 'int[] myArray = new int[];', 'int[5] myArray;'],
        correctAnswer: 'int[] myArray = new int[5];'
    },
    {
        question: "Que signifie le mot-cl� 'super' en Java ?",
        options: ['Appeler un constructeur de la classe parente', 'Acc�der � une variable locale', 'D�finir une m�thode priv�e', 'Renvoyer une valeur'],
        correctAnswer: 'Appeler un constructeur de la classe parente'
    },
    {
        question: "Qu'est-ce qu'un package en Java ?",
        options: ['Une classe contenant plusieurs m�thodes', 'Un groupe de classes et interfaces li�es', 'Un type de m�thode', 'Une biblioth�que d�objets'],
        correctAnswer: 'Un groupe de classes et interfaces li�es'
    },
    {
        question: "Qu'est-ce qu'un tableau multidimensionnel en Java ?",
        options: ['Un tableau qui contient plusieurs types de donn�es', 'Un tableau qui contient d�autres tableaux', 'Un tableau qui peut contenir plusieurs objets', 'Un tableau de cha�nes de caract�res'],
        correctAnswer: 'Un tableau qui contient d�autres tableaux'
    },
    {
        question: "Quelle est la diff�rence entre == et .equals() en Java ?",
        options: ['== compare les adresses m�moire, .equals() compare les valeurs', '.equals() compare les adresses m�moire', '== compare les valeurs, .equals() compare les types', 'Aucune diff�rence'],
        correctAnswer: '== compare les adresses m�moire, .equals() compare les valeurs'
    },
    {
        question: "Comment g�rer plusieurs exceptions en Java ?",
        options: ['Utiliser une seule clause catch', 'Utiliser plusieurs blocs try-catch', 'Utiliser un bloc try avec un seul catch', 'Utiliser le mot-cl� throws'],
        correctAnswer: 'Utiliser plusieurs blocs try-catch'
    },
    {
        question: "Quel est le r�le du mot-cl� 'final' en Java ?",
        options: ['Indiquer que la classe ne peut pas �tre �tendue', 'D�finir une m�thode comme publique', 'Indiquer qu une m�thode ne peut pas �tre modifi�e', 'D�finir une variable constante'],
    correctAnswer: 'D�finir une variable constante'
  },
    {
        question: "Qu'est-ce qu'un objet immuable en Java ?",
        options: ['Un objet dont l��tat peut �tre modifi� apr�s sa cr�ation', 'Un objet dont l��tat ne peut pas �tre modifi� apr�s sa cr�ation', 'Un objet qui contient des donn�es statiques', 'Un objet qui ne peut pas �tre instanci�'],
        correctAnswer: 'Un objet dont l��tat ne peut pas �tre modifi� apr�s sa cr�ation'
    },
    {
        question: "Quel est le r�sultat de l'ex�cution du code suivant : 'String str = 'Java'; System.out.println(str.charAt(0));' ?",
        options: ['J', 'A', 'V', 'Erreur'],
        correctAnswer: 'J'
    }
];
const reactQuestions = [
    {
        question: "Quel est le principal but de React ?",
        options: ['Manipuler le DOM', 'Cr�er des applications web', 'G�rer les bases de donn�es', 'Cr�er des pages statiques'],
        correctAnswer: 'Cr�er des applications web'
    },
    {
        question: "Comment d�finir un �tat dans un composant fonctionnel React ?",
        options: ['useState()', 'state()', 'this.setState()', 'ReactState()'],
        correctAnswer: 'useState()'
    },
    {
        question: "Quel est le r�le de JSX dans React ?",
        options: ['Faire la gestion de l��tat', 'D�finir la structure de l�interface utilisateur', 'Manipuler le DOM', 'G�rer les �v�nements'],
        correctAnswer: 'D�finir la structure de l�interface utilisateur'
    },
    {
        question: "Quelle fonction est utilis�e pour rendre un composant React ?",
        options: ['render()', 'ReactDOM.render()', 'useEffect()', 'React.render()'],
        correctAnswer: 'ReactDOM.render()'
    },
    {
        question: "Quelle est la fonction du Hook useEffect() en React ?",
        options: ['Effectuer une requ�te r�seau', 'Mettre � jour l��tat', 'Ex�cuter du code apr�s le rendu du composant', 'G�rer les �v�nements de la souris'],
        correctAnswer: 'Ex�cuter du code apr�s le rendu du composant'
    },
    {
        question: "Qu'est-ce que le Virtual DOM en React ?",
        options: ['Une copie de la base de donn�es', 'Une copie virtuelle du DOM r�el', 'Un cache pour les fichiers statiques', 'Un outil de gestion de l��tat'],
        correctAnswer: 'Une copie virtuelle du DOM r�el'
    },
    {
        question: "Quel hook React permet de g�rer l��tat dans un composant fonctionnel ?",
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 'useState'
    },
    {
        question: "Quel est le but du Hook useContext() en React ?",
        options: ['G�rer l��tat local', 'Acc�der � des valeurs globales', 'Mettre � jour l�interface utilisateur', 'Ex�cuter des effets secondaires'],
        correctAnswer: 'Acc�der � des valeurs globales'
    },
    {
        question: "Qu'est-ce qu'une cl� (key) dans une liste React ?",
        options: ['Un identifiant unique pour chaque �l�ment de la liste', 'Une m�thode pour manipuler le DOM', 'Un type d��v�nement', 'Une fonction pour la gestion de l��tat'],
        correctAnswer: 'Un identifiant unique pour chaque �l�ment de la liste'
    },
    {
        question: "Comment les composants React peuvent-ils �tre communiqu�s entre eux ?",
        options: ['En utilisant les props', 'En utilisant des �v�nements', 'En utilisant l��tat global', 'En utilisant la biblioth�que Redux'],
        correctAnswer: 'En utilisant les props'
    },
    {
        question: "Quel est l'avantage principal d'utiliser un composant fonctionnel plut�t qu'un composant de classe en React ?",
        options: ['Les composants fonctionnels sont plus rapides', 'Les composants fonctionnels ont un �tat', 'Les composants fonctionnels peuvent utiliser les hooks', 'Les composants fonctionnels ne n�cessitent pas de render()'],
        correctAnswer: 'Les composants fonctionnels peuvent utiliser les hooks'
    },
    {
        question: "Que fait le Hook useReducer() en React ?",
        options: ['G�re un �tat complexe', 'Met � jour l��tat', '�coute les �v�nements', 'Effectue une requ�te r�seau'],
        correctAnswer: 'G�re un �tat complexe'
    },
    {
        question: "Qu'est-ce qu'un 'fragment' en React ?",
        options: ['Un type de composant', 'Un conteneur qui permet de rendre plusieurs �l�ments sans ajouter de n�uds suppl�mentaires dans le DOM', 'Un hook', 'Un type d��v�nement'],
        correctAnswer: 'Un conteneur qui permet de rendre plusieurs �l�ments sans ajouter de n�uds suppl�mentaires dans le DOM'
    },
    {
        question: "Quelle fonction permet d'�viter que le composant React se re-render ind�finiment ?",
        options: ['componentDidMount()', 'shouldComponentUpdate()', 'useEffect()', 'React.memo()'],
        correctAnswer: 'React.memo()'
    },
    {
        question: "Qu'est-ce que le concept de 'lifting state up' en React ?",
        options: ['La remont�e d�un �tat du parent vers un enfant', 'La remont�e de l��tat d�un enfant vers son parent', 'Le partage de l��tat entre plusieurs composants', 'Le stockage de l��tat dans une base de donn�es'],
        correctAnswer: 'La remont�e de l��tat d�un enfant vers son parent'
    },
    {
        question: "Qu'est-ce qu'un 'Controlled Component' en React ?",
        options: ['Un composant qui g�re son propre �tat', 'Un composant dont l��tat est contr�l� par le parent', 'Un composant sans �tat', 'Un composant utilisant Redux pour la gestion de l��tat'],
        correctAnswer: 'Un composant dont l��tat est contr�l� par le parent'
    },
    {
        question: "Que signifie 'JSX' en React ?",
        options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript eXtension', 'JavaScript Extra'],
        correctAnswer: 'JavaScript XML'
    },
    {
        question: "Quel est le r�le de React Router dans une application React ?",
        options: ['G�rer l��tat de l�application', 'G�rer la navigation entre les diff�rentes pages', 'Ex�cuter des effets secondaires', 'G�rer la logique m�tier'],
        correctAnswer: 'G�rer la navigation entre les diff�rentes pages'
    },
    {
        question: "Quel est l'objectif principal du Hook useRef() en React ?",
        options: ['Acc�der directement � un �l�ment du DOM', 'Mettre � jour un �tat', 'Cr�er un effet secondaire', 'Rendre un composant',
        ],
        correctAnswer: 'Acc�der directement � un �l�ment du DOM'
    },
    {
        question: "Que signifie 'props' en React ?",
        options: ['Une m�thode', 'Un objet contenant des propri�t�s', 'Une fonction qui renvoie un �tat', 'Un attribut'],
        correctAnswer: 'Un objet contenant des propri�t�s'
    }
];
const phpQuestions = [
    {
        question: "Quel type de variable est utilis� pour stocker une cha�ne de caract�res en PHP ?",
        options: ['string', 'varchar', 'text', 'char'],
        correctAnswer: 'string'
    },
    {
        question: "Comment inclure un fichier dans un autre fichier en PHP ?",
        options: ['include', 'require', 'import', 'require_once'],
        correctAnswer: 'require'
    },
    {
        question: "Comment cr�er une fonction en PHP ?",
        options: ['function maFonction()', 'def maFonction()', 'void maFonction()', 'create maFonction()'],
        correctAnswer: 'function maFonction()'
    },
    {
        question: "Quel est le type de donn�es retourn� par la fonction isset() en PHP ?",
        options: ['String', 'Boolean', 'Integer', 'Object'],
        correctAnswer: 'Boolean'
    },
    {
        question: "Comment v�rifier si une variable est d�finie en PHP ?",
        options: ['isset()', 'defined()', 'isNull()', 'isEmpty()'],
        correctAnswer: 'isset()'
    },
    {
        question: "Quel op�rateur est utilis� pour concat�ner des cha�nes en PHP ?",
        options: ['+', '-', '*', '.'],
        correctAnswer: '.'
    },
    {
        question: "Comment cr�er une constante en PHP ?",
        options: ['const MA_CONSTANTE', 'define("MA_CONSTANTE")', 'constant MA_CONSTANTE', 'const("MA_CONSTANTE")'],
        correctAnswer: 'define("MA_CONSTANTE")'
    },
    {
        question: "Quel est le r�le de la fonction echo en PHP ?",
        options: ['Afficher une cha�ne � l�cran', 'Retourner une valeur', 'Inclure un fichier', '�crire dans un fichier'],
    correctAnswer: 'Afficher une cha�ne � l�cran'
  },
    {
        question: "Comment d�clarer un tableau index� en PHP ?",
        options: ['array()', '[]', 'new array()', 'list()'],
        correctAnswer: 'array()'
    },
    {
        question: "Quelle fonction PHP est utilis�e pour rediriger un utilisateur vers une autre page ?",
        options: ['header()', 'redirect()', 'location()', 'goTo()'],
        correctAnswer: 'header()'
    },
    {
        question: "Qu'est-ce qu'un tableau associatif en PHP ?",
        options: ['Un tableau avec des indices num�riques', 'Un tableau avec des cl�s de cha�ne', 'Un tableau avec des objets', 'Un tableau vide'],
        correctAnswer: 'Un tableau avec des cl�s de cha�ne'
    },
    {
        question: "Quelle fonction PHP permet de v�rifier si un fichier existe ?",
        options: ['is_file()', 'file_exists()', 'exists()', 'check_file()'],
        correctAnswer: 'file_exists()'
    },
    {
        question: "Quel est le r�le de la fonction include() en PHP ?",
        options: ['Inclure un fichier externe', 'Inclure une biblioth�que', 'Ex�cuter une fonction', 'Cr�er une variable'],
        correctAnswer: 'Inclure un fichier externe'
    },
    {
        question: "Comment peut-on r�cup�rer les donn�es envoy�es par un formulaire en PHP ?",
        options: ['$_POST', '$_GET', '$_REQUEST', 'Les deux premi�res r�ponses'],
        correctAnswer: 'Les deux premi�res r�ponses'
    },
    {
        question: "Quel type de donn�es retourne la fonction mysqli_fetch_assoc() en PHP ?",
        options: ['Un tableau associatif', 'Un tableau index�', 'Un objet', 'Une cha�ne'],
        correctAnswer: 'Un tableau associatif'
    },
    {
        question: "Qu'est-ce qu'une session en PHP ?",
        options: ['Un objet de base de donn�es', 'Une fonction pour stocker les variables temporairement', 'Un tableau global', 'Un cookie'],
        correctAnswer: 'Une fonction pour stocker les variables temporairement'
    },
    {
        question: "Comment d�marrer une session en PHP ?",
        options: ['session_start()', 'session_init()', 'start_session()', 'session_open()'],
        correctAnswer: 'session_start()'
    },
    {
        question: "Quelle fonction PHP est utilis�e pour �chapper les caract�res sp�ciaux dans une cha�ne ?",
        options: ['htmlspecialchars()', 'escape()', 'sanitize()', 'filter_var()'],
        correctAnswer: 'htmlspecialchars()'
    },
    {
        question: "Qu'est-ce que PDO en PHP ?",
        options: ['Une biblioth�que pour la gestion des fichiers', 'Une m�thode pour interagir avec une base de donn�es', 'Un type de variable', 'Un framework PHP'],
        correctAnswer: 'Une m�thode pour interagir avec une base de donn�es'
    },
    {
        question: "Quel est le r�le de la fonction var_dump() en PHP ?",
        options: ['Afficher les informations sur une variable', 'Afficher une cha�ne', 'Manipuler une variable', 'Supprimer une variable'],
        correctAnswer: 'Afficher les informations sur une variable'
    },
    {
        question: "Comment obtenir la longueur d'une cha�ne en PHP ?",
        options: ['strlen()', 'length()', 'count()', 'size()'],
        correctAnswer: 'strlen()'
    }
];
export { javaQuestions, reactQuestions, phpQuestions };