//lista pytań
const questions = [
    {
        question: 'W której edycji gry z serii FIFA pierwszy raz można było usłyszeć polskich komentatorów?',
        options: ['FIFA 01', 'FIFA 06', 'FIFA 05', 'FIFA 04'],
        correctAnswer: 'FIFA 06',
    },
    {
        question: 'Na podstawie jakiej gry powstał animowany serial Arcane?',
        options: ['Fortnite', 'Dota 2', 'World of Warcraft', 'League of Legends'],
        correctAnswer: 'League of Legends',
    },
    {
        question: 'Która firma jest odpowiedzialna za stworzenie gry "Fortnite"?',
        options: ['Epic Games', 'Activision', 'Electronic Arts', 'Ubisoft'],
        correctAnswer: 'Epic Games',
    },
    {
        question: 'W którym roku została wydana gra "Minecraft"?',
        options: ['2008', '2011', '2009', '2012'],
        correctAnswer: '2009',
    },
    {
        question: 'Ezio Auditore da Firenze jest fikcyjnym bohaterem gry komputerowej z serii:',
        options: ['ANTHEM', 'Arcania', 'Assassin\'s Creed', 'Anno 2070'],
        correctAnswer: 'Assassin\'s Creed',
    },
    {
        question: 'Gra "Minecraft" została wymyślona przez:',
        options: ['Markusa Perssona', 'Davida Larsena', 'Daniela Rossenvelda', 'Simona Gregorek'],
        correctAnswer: 'Markusa Perssona',
    },
    {
        question: 'W którym roku ukazała się konsola PlayStation 2?',
        options: ['1998', '2000', '2002', '2004'],
        correctAnswer: '2000',
    },
    {
        question: 'W którym roku ukazała się pierwsza gra z serii "Call of Duty"?',
        options: ['2001', '2003', '2005', '2007'],
        correctAnswer: '2003',
    },
    {
        question: 'Kto jest twórcą serii gier "Metal Gear Solid"?',
        options: ['Hideo Kojima', 'Shigeru Miyamoto', 'Todd Howard', 'John Carmack'],
        correctAnswer: 'Hideo Kojima',
    },
    {
        question: 'Jak nazywa się tytułowy bohater gry Wiedźmin III: Dziki Gon',
        options: ['Vesemir', 'Geralt', 'Lambert', 'Eskel'],
        correctAnswer: 'Geralt',
    },
    {
        question: 'Deckard Cain to ważna dla fabuły postać mędrca pojawiającego się w grze?',
        options: ['Diablo', 'Tomb Raider', 'Warcraft', 'Wiedźmin'],
        correctAnswer: 'Diablo',
    },
    {
        question: 'Kto jest producentem gry: Destiny 2',
        options: ['Ubisoft', 'Bungie', 'Electronic Arts', 'CAPCOM'],
        correctAnswer: 'Bungie',
    },
    {
        question: 'Która gra zdobyła tytuł "Gry Roku" w 2021 roku na gali The Game Awards?',
        options: ['The Last of Us Part II', 'Cyberpunk 2077', 'It Takes Two', 'Hades'],
        correctAnswer: 'It Takes Two',
    },
    {
        question: 'W której grze z serii "Fallout" po raz pierwszy wystąpił Harold jako postać?',
        options: ['Fallout', 'Fallout 2', 'Fallout 3', 'Fallout: New Vegas'],
        correctAnswer: 'Fallout',
    },
    {
        question: 'W którym roku ukazała się gra "Among Us", zdobywając popularność po pewnym czasie od premiery?',
        options: ['2017', '2018', '2019', '2020'],
        correctAnswer: '2018',
    },
    {
        question: 'W którym roku ukazała się gra "Half-Life 2"?',
        options: ['1998', '2002', '2004', '2007'],
        correctAnswer: '2004',
    },
    {
        question: 'Kto jest twórcą serii gier "The Elder Scrolls" i "Fallout"?',
        options: ['Hideo Kojima', 'Todd Howard', 'Shigeru Miyamoto', 'Gabe Newell'],
        correctAnswer: 'Todd Howard',
    },
    {
        question: 'Który z poniższych tytułów jest grą z gatunku roguelike?',
        options: ['Hollow Knight', 'Dead Cells', 'The Legend of Zelda: Breath of the Wild', 'God of War'],
        correctAnswer: 'Dead Cells',
    },
    {
        question: 'Który z poniższych tytułów jest grą z otwartym światem osadzoną w postapokaliptycznej Ameryce?',
        options: ['The Division 2', 'Days Gone', 'Metro Exodus', 'The Last of Us Part II'],
        correctAnswer: 'Days Gone',
    },
    {
        question: 'Jak się nazywa człowiek, który połączył się z Ner\'Zulem i stał się Królem Liszem?',
        options: ['Arthas Menetil', 'Anduin Lothar', 'Tyrion Fordring', 'Kil\'jaeden'],
        correctAnswer: 'Arthas Menetil',
    },
    {
        question: 'Dokończ cytat: "(...) Ale gniew Beliara był tak wielki, że...":',
        options: ['Zesłał potężną falę.', 'Przemierzył on całą Ziemię, by znaleźć bestię.', 'Uprosił Innosa, by ten zostawił część swojej mocy na Ziemi.', 'Osiągnął swój limit'],
        correctAnswer: 'Przemierzył on całą Ziemię, by znaleźć bestię.',
    },
    {
        question: 'W jakim przedziale czasowym dzieje się "Europa Universalis IV"?',
        options: ['1444 - 1821', '1436 - 1806', '1399 - 1778', '1428-1864'],
        correctAnswer: '1444 - 1821',
    },
    {
        question: 'Jak ma na imię córka Flemeth z serii gier Dragon Age?',
        options: ['Morrigan', 'Kartarmona', 'Isabela', 'Aisha'],
        correctAnswer: 'Morrigan',
    },
    {
        question: 'Jak się nazywa główny bohater gry "Bound by Flame"?',
        options: ['Wulkan', 'Kirił', 'Jacob', 'Gejzer'],
        correctAnswer: 'Wulkan',
    },
    {
        question: 'Czyją zbroję odnajduje Ezio w Rzymie?',
        options: ['Brutusa', 'Cezara', 'Fladiusa', 'Desmonda'],
        correctAnswer: 'Brutusa',
    },
    {
        question: 'Jak się nazywa mod przenoszący akcję "Medievala 2" do realiów "Warhammera Fantasy"?',
        options: ['Warhammer The End of Time', 'Call of Warhammer', 'Warhammer War Is Imminent', 'Warhammer Total War'],
        correctAnswer: 'Call of Warhammer',
    },
    {
        question: 'Kto skomponował muzykę do "Mass Effect"?',
        options: ['Jack Wall i Sam Hullick', 'Lorne Bafle i Michael Hunter', 'Hans Zimmer', 'Rob King'],
        correctAnswer: 'Jack Wall i Sam Hullick',
    },
    {
        question: 'Jak nazywa się przywódca Swadian w "Mount&Blade: Warband" ?',
        options: ['Harlaus', 'Hakim', 'Ragnar', 'Astren'],
        correctAnswer: 'Harlaus',
    },
    {
        question: 'Jaki kolor to kolor Świętych z serii Saints Row?',
        options: ['Niebieski', 'Zielony', 'Fioletowy', 'Biały'],
        correctAnswer: 'Fioletowy',
    },
    {
        question: 'Jak nazywa się Inkwizytor z "Risena"?',
        options: ['Lakatis', 'Mendoza', 'De la Cruz', 'Talar'],
        correctAnswer: 'Mendoza',
    },
    {
        question: 'Jak ma na imię żółty ninja z "Mortal Kombat"?',
        options: ['Scorpion', 'Sub-Zero', 'Smoke', 'Kai'],
        correctAnswer: 'Scorpion',
    },
    {
        question: 'Jak nazywa się główny bohater gier z serii „Half-Life”?',
        options: ['Gordon Smith', 'James Smith', 'Bob Freeman', 'Gordon Freeman'],
        correctAnswer: 'Gordon Freeman',
    },
    {
        question: 'NFS to skrót od:',
        options: ['Need For Speed', 'Never From Surival', 'Ninth Friday Special', 'New For Sally'],
        correctAnswer: 'Need For Speed',
    },
    {
        question: 'Jaka była pierwsza gra firmy Blizzard?',
        options: ['Warcraft', 'Starcraft', 'Diablo', 'RPM Racing'],
        correctAnswer: 'Warcraft',
    },
    {
        question: 'Jaką grę otrzymał Barack Obama podczas wizyty w polsce?',
        options: ['Dying Light', 'Call of Juarez', 'Wiedźmin III: Dziki Gon', 'Wacki Kosmiczna Rozgrywka'],
        correctAnswer: 'Wiedźmin III: Dziki Gon',
    },
    {
        question: 'W którym roku został wydany Quake I?',
        options: ['1997', '1994', '1996', '1993'],
        correctAnswer: '1996',
    },
    {
        question: 'Który z tych skrótów NIE jest gatunkiem gry komputerowej?',
        options: ['SJP', 'RPG', 'MMO', 'RTS'],
        correctAnswer: 'SJP',
    },
    {
        question: 'Co robi Creeper z gry Minecraft?',
        options: ['Strzela z łuku', 'Wybucha', 'Atakuje wybuchającymi kulami', 'Atakuje mieczem'],
        correctAnswer: 'Wybucha',
    },
    {
        question: 'Zwierzak z gier Worms, który wysłany pędzi przed siebie i wybucha to:',
        options: ['Kogut', 'Owca', 'Pies', 'Świnia'],
        correctAnswer: 'Owca',
    },
    {
        question: 'Co jest celem naszej gry w pierwszej części „God of War”?',
        options: ['Pokonanie Zeusa', 'Zemsta na Aresie', 'Poślubienie Ateny', 'Odszukanie Hefajstosa'],
        correctAnswer: 'Zemsta na Aresie',
    },
    {
        question: 'W „Wiedźminie 2” Geralt jest oskarżony o:',
        options: ['Zabicie ostatniego smoka', 'Porwanie królewskich dzieci', 'Zabicie króla', 'Zabicie królweskiej czarodziejki'],
        correctAnswer: 'Zabicie króla',
    },
    {
        question: 'W „Legend of Zelda” kierujemy poczynaniami:',
        options: ['Zeldy', 'Linka', 'Ganondorfa', 'Miphy'],
        correctAnswer: 'Linka',
    },
    {
        question: 'W grze „Left 4 Dead” płacząca kobieta, której nie należy denerwować to:',
        options: ['Cry Girl', 'Witch', 'Alma', 'Gorla'],
        correctAnswer: 'Witch',
    },
    {
        question: 'Biały ptak w „Angry Birds”:',
        options: ['Znosi jajko', 'Przyspiesza', 'Wybucha', 'Powiela się'],
        correctAnswer: 'Znosi jajko',
    },
];

export default questions;
