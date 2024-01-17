//lista pytań
const questions = [
        {
        question: 'Jaką nazywę nosi wyjątkowy pistolet z rozmawiającą AI znaleziony przez V?',
        options: ['Stiggy', 'Clicky', 'Skippy', 'The Triggy'],
        correctAnswer: 'Skippy',
    },
    {
        question: 'Jaką nazwę nosi projekt skupiający się na cyfryzacji świadomości, zwany również jako \'więzienie duszy\'?',
        options: ['Cyberspace', 'Militech', 'Heiwa', 'Mikoshi'],
        correctAnswer: 'Mikoshi',
    },
    {
        question: 'Jak nazywał zespół Johnny\'ego Silverhanda?',
        options: ['Hellsbound', 'Us Cracks', 'Trident', 'Samurai'],
        correctAnswer: 'Samurai',
    },
    {
        question: 'Ile osobowości miał Delamain zanim gracz zadecydował i jego losie?',
        options: ['4', '5', '7', '10'],
        correctAnswer: '7',
    },
    {
        question: 'Jak nazywa się utwór słyszany na napisach końcowych, będący również piosenką Samuraja?',
        options: ['Never Fade Away', 'A Like Supreme', 'Blackdog', 'Chippin\' In'],
        correctAnswer: 'Never Fade Away',
    },
    {
        question: 'Jakie trzy ścieżki są dostępna dla gracza chcącego zacząć przygodę ze swoim V?',
        options: ['Streetkid, Military, NCPD Officer', 'Military, Corpo, Freelancer', 'Streetkid, Corpo, Nomad', 'Corpo, Streetkid, NCPD Officer'],
        correctAnswer: 'Streetkid, Corpo, Nomad',
    },
    {
        question: 'Jak nazywa się bariera dzieląca Nową Sieć i dziką SI w cyberprzestrzeni?',
        options: ['The Badlands', 'The Division', 'The Frontier', 'The Blackwall'],
        correctAnswer: 'The Blackwall',
    },
    {
        question: 'Gdzie pracowała Evelyn Parker przed posadą się w Barze Lizzie?\'s Bar?',
        options: ['Clouds', 'Riot', 'Arasaka', 'Afterlife'],
        correctAnswer: 'Clouds',
    },
    {
        question: 'Z którą frakcją dobili targu V i Jackie kupująć Flatheada dla Dexa?',
        options: ['Militech', 'Maelstrom', 'Arasaka', 'Tyger Claws'],
        correctAnswer: 'Maelstrom',
    },
    {
        question: 'Która z tych osób może zostać partnerem V?',
        options: ['Evelyn', 'Judy', 'Jackie', 'Takemura'],
        correctAnswer: 'Judy',
    },
    {
        question: 'Jaką nazwę nosi waluta w grze?',
        options: ['Eurodolary', 'Kredyty', 'Dolary', 'Tokeny'],
        correctAnswer: 'Eurodolary',
    },
    {
        question: 'Jak nazywa się AI która udziela V pomocy z Relic\'em?',
        options: ['Dexter', 'Johnny', 'Alt Cunningham', 'Jackie'],
        correctAnswer: 'Alt Cunningham',
    },
    {
        question: 'Jaka stacja telewizyjna dostarcza graczowi informacji o świecie gry?',
        options: ['NW54', 'Wolf', 'C77', 'NCTV'],
        correctAnswer: 'NW54',
    },
    {
        question: 'W którym dystrykcie miasta mieszkają najbogatsi mieszkańcy?',
        options: ['Pacifica', 'Westbrook', 'City Center', 'Santo Domingo'],
        correctAnswer: 'Westbrook',
    },
    {
        question: 'W którym roku po raz pierwszy ogłoszono Cyberpunka 2077?',
        options: ['2012', '2018', '2017', '2013'],
        correctAnswer: '2012',
    },
    {
        question: 'Na jakiej architektórze wzorowane była gra?',
        options: ['Brutalizm', 'Industrlializm', 'Art Deco', 'Modernistycyzm'],
        correctAnswer: 'Brutalizm',
    },
    {
        question: 'Jaką nazwę nosi AI stworzona przez Alt Cunningham?',
        options: ['Cellbie', 'CellVois', 'Algen', 'SoulKiller'],
        correctAnswer: 'SoulKiller',
    },
    {
        question: 'Jaką nazwę nosi spin-off anime o Cyberpunku?',
        options: ['Cyberpunk: Edgerunners', 'Cyberpunk: B-side', 'Cyberpunk: Deadly District', 'Cyberpunk: Cyberlife'],
        correctAnswer: 'Cyberpunk: Edgerunners7',
    },
    {
        question: 'Ile wynosił budżet całej gry?',
        options: ['115 milionów USD', '286 milionów USD', '312 milionów USD', '176 milionów USD'],
        correctAnswer: '312 milionów USD',
    },
    {
        question: 'Kto jest twórcą uniwersum Cyberpunk, na którym oparta jest gra Cyberpunk 2077?',
        options: ['Mike Pondsmith', 'William Gibson', 'Neal Stephenson', 'Philip K. Dick'],
        correctAnswer: 'Mike Pondsmith',
    },
    {
        question: 'Vincent i Valerie to imiona:',
        options: ['Rodzeństwa z Aldecaldos', 'Bliźniaków z 6th Street', 'Głównych bohaterów gry', 'Żadna odpowiedź nie jest poprawna'],
        correctAnswer: 'Głównych bohaterów gry',
    },
    {
        question: 'W siedzibie którego fixera w Night City poznajemy Panam?',
        options: ['Rogue', 'Mr. Hands', 'Muamar Reyes', 'Regina Jones'],
        correctAnswer: 'Rogue',
    },
    {
        question: 'Kto odpowiadał za śledztwa dotyczące cyberpsychozy?',
        options: ['Regina Jones', 'Dino Dinovic', 'Wakako Okada', 'Dakota Smith'],
        correctAnswer: 'Regina Jones',
    },
    {
        question: 'Którego z bohaterów posiadających swój własny wątek poboczny spotykamy najpóźniej?',
        options: ['Rivera', 'Judy', 'Kerry\'ego', 'Panam'],
        correctAnswer: 'Kerry\'ego',
    },
    {
        question: 'Który z bohaterów miał powiązania z grupą Mox?',
        options: ['Judy', 'Panam', 'Panam', 'Alt Cunningham'],
        correctAnswer: 'Judy',
    },
    {
        question: 'Postać odpowiadająca za śmierć Johnny\'ego Silverhanda to:',
        options: ['Adam Smasher', 'Misty Olszewski', 'Goro Takemura', 'Bes Isis'],
        correctAnswer: 'Adam Smasher',
    },
    {
        question: 'Jak miał na imię prorok głoszący swoje poglądy przed sklepikiem Misty?',
        options: ['Thorn', 'Gerald', 'Philip', 'Gustav'],
        correctAnswer: 'Gerald',
    },
    {
        question: 'Śmierć której postaci jesteśmy świadkami?',
        options: ['Alt Cunningham', 'Saburo Arasaka', 'Hanako Arasaka', 'Wszystkie odpowiedzi są niepoprawne'],
        correctAnswer: 'Saburo Arasaka',
    },
    {
        question: 'Delamain był:',
        options: ['SI odpowiadającą za firmę przewozową', 'Najemnikiem', 'Fixerem', 'Burmistrzem'],
        correctAnswer: 'SI odpowiadającą za firmę przewozową',
    },
    {
        question: 'Która postać niezależnie od naszych decyzji zawsze ginie w grze?',
        options: ['Evelyn Parker', 'Blue Moon', 'Claire Russell', 'Maiko Maeda'],
        correctAnswer: 'Evelyn Parker',
    },
    {
        question: 'Pepe zleca nam misję dotyczącą jego żony. Bohater ten jest:',
        options: ['Barmanem', 'Tatuażystą', 'Alfonsem', 'Taksówkarzem'],
        correctAnswer: 'Barmanem',
    },
    {
        question: 'Przedstawicielem Voodoo Boysów był:',
        options: ['Mitch Anderson', 'Placide', 'Ozob Bozo', 'T-Bug'],
        correctAnswer: 'Placide',
    },
    {
        question: 'Nazwiska której postaci nigdy nie poznajemy w grze?',
        options: ['Sandry z pierwszej misji z Jackiem', 'Mateo, barmana w klubie z Moxami', 'Saula, przedstawiciela Aldecaldos', 'T-Bug, netrunnerki z prologu'],
        correctAnswer: 'T-Bug, netrunnerki z prologu',
    }       
];

export default questions;
