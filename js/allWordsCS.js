const allWordsCS = [
    'afgán',
    'ajťák',
    'akord',
    'akril',
    'aktiv',
    'alíky',
    'alkáč',
    'amant',
    'anděl',
    'anima',
    'anime',
    'argot',
    'aspik', 
    'augle',
    'aušus',
    'auťák',
    'albín',
    'adept',
    'akcie',
    'atlas',
    'avízo',
    'achát',
    'arsen',
    'aktér',
    'afekt',
    'alibi',
    'astma',
    'aréna',
    'alias',
    'audio',
    'bahno',
    'dláto',
    'bacil',
    'domek',
    'bulva',
    'balón',
    'balík',
    'bedna',
    'brada',
    'broky',
    'bratr',
    'bajka',
    'buben',
    'bláto',
    'blesk',
    'bičík',
    'bluma',
    'bludy',
    'brouk',
    'brána',
    'banán',
    'borec',
    'banda',
    'baňka',
    'buňka',
    'měsíc',
    'banka',
    'barák',
    'bazén',
    'binec',
    'barva',
    'bašta',
    'bastl',     //ledabylá, odfláknutá práce
    'batoh',
    'bazoš',
    'beďar',
    'bedna',
    'běhna',
    'beran',
    'beton',
    'bombr',
    'boháč',
    'bicák',   //biceps slangově 
    'bidlo',   //dlouhá tyč
    'bydlo',   //obydlí/domov
    'biják',   //kino
    'bindr',   //stahovací páska, využívaná na svazování kabelů nebo 'trubek' stahování několika dílů k sobě apod
    'bizon',
    'bouře',
    'bobek',
    'bobík',
    'bomba',
    'borax',
    'bouda',
    'brept', //přeřeknutí
    'brčko',
    'bůček',
    'bubák',
    'brzda',
    'budík',
    'budka',
    'bufet',
    'buran',
    'bytná',
    'blána',
    'bunda',
    'bunkr',
    'cápek',
    'cecek',
    'čenda',
    'výčep',
    'černá',
    'čechy',
    'cévař',
    'číhat',
    'cihla',
    'čípek',
    'šípek',
    'číslo',
    'citát',
    'císař',
    'cesta',
    'čidlo',
    'čéška',
    'čolek',
    'češka',
    'cívka',
    'čudla',
    'culík',
    'cucek',
    'čundr',
    'čůrek',
    'půrko',
    'pírko',
    'ďábel',
    'dacan',
    'dálka',
    'dusík',
    'démon',
    'dárce',
    'darda',
    'datel',
    'drozd',
    'dáseň',
    'detox',
    'deska',
    'drdol',
    'depka',
    'dívka',
    'dieta',
    'džíny',
    'pizza',
    'helma',
    'debut',
    'dřevo',
    'derby',
    'dýmka',
    'dráha',
    'dolar',
    'drama',
    'drban',
    'drift',
    'držka',
    'držák',
    'dýško',
    'býček',
    'délka',
    'dcera',
    'emzák',
    'extra',
    'ekzém',
    'efekt',
    'etika',
    'elita',
    'email',
    'estét',
    'epika',
    'eidam',
    'enzym',
    'fabka',
    'facka',
    'fešák',
    'fitko',
    'finta',
    'flexa',
    'fošna',
    'foťák',
    'mobil',
    'frgál',
    'fólie',
    'fotka',
    'froté',
    'firma',
    'foton',
    'fóbie',
    'fluór',
    'fénix',
    'fetiš',
    'fakír',
    'fréza',
    'farář',
    'flirt',
    'fušer',
    'fuška',
    'freon',
    'fjord',
    'fórum',
    'fráze',
    'fauna',
    'frmol',
    'forma',
    'fíkus',
    'fixka',
    'futra',
    'fůrie',
    'farma', 
    'barel',
    'gembl',
    'gamer',
    'gekon',
    'golem',
    'gulag',
    'guláš',
    'gympl',
    'gyros',
    'gusto',
    'garda',
    'grant',
    'gejša',
    'garde',
    'glose',     //poznámka, vysvětlivka
    'garáž',
    'gibon',
    'grunt',
    'gesto',
    'gumák',
    'gamba',
    'habán',    //vysový muž/chlapecc
    'háček',
    'hádka',
    'hasič',
    'hafan',
    'halda',
    'hrách',
    "hrnec",
    'hasák',
    'helma',
    'herec',
    'herka',
    'hlína',
    'hlíva',
    'hlava',
    'hobit',
    'hůlka',
    'hokej',
    'holič',
    'humor',
    'house',
    'houba',
    'hopík',
    'hořák',
    'horko',
    'hrana',
    'hrábě',
    'hrabě',
    'hroch',
    'hudba',
    'huban',
    'hyena',
    'hltan',
    'hrtan',
    'humus',
    'horor',
    'hovor',
    'hrbáč',
    'holeň',
    'hýždě',
    'heslo',
    'hrbol',
    'hrách',
    'hrdlo',
    'honba',
    'herna',
    'harém',
    'horal',
    'horda',
    'harfa',
    'hřích',
    'hoboj',
    'hvizd',
    'havěť',
    'hnida',
    'hrůza',
    'hobby',
    'hever',
    'hydra',
    'haluz',
    'hmota',
    'hanba',
    'hymna',
    'holub',
    'chrup',
    'chábr',
    'chaos',
    'chata',
    'chléb',
    'chlup',
    'chůva',
    'chyba',
    'chvoj',
    'chůdy',
    'chvat',
    'chlap',
    'chmel',
    'chrám',
    'chlór',
    'chlad',
    'chýše',
    'islám',
    'idiom',
    'image',
    'jatka',
    'jelen',
    'jehla',
    'jetel',
    'ježek',
    'játro',
    'jamka',
    'javor',
    'jádro',
    'jízda',
    'jogín',
    'jídlo',
    'jižan',
    'jazyk',
    'jidiš',
    'jesle',
    'jizva',
    'jekot',
    'kabát',
    'kabel',
    'kobka',
    'kapka',
    'kočka',
    'kebab',
    'kefír',
    'kakao',
    'kašel',
    'koule',
    'kytka',
    'kapsa',
    'kanál',
    'krása',
    'kámen',
    'kárka',
    'karta',
    'komín',
    'kérka',
    'kokos',
    'koště',
    'kozel',
    'kůzle',
    'křoví',
    'klaun',
    'klika',
    'klima',
    'kmotr',
    'kulka',
    'kniha',
    'kobra',
    'kočár',
    'kojot',
    'kolík',
    'kořen',
    'komix',
    'komár',
    'kongo',
    'miska',
    'konto',
    'konev',
    'kopec',
    'korba',
    'koláč',
    'krysa',
    'kráva',
    'konec',
    'krédo',
    'křída',
    'krpál',
    'kudla',
    'kůlna',
    'kovář',
    'kvalt',
    'krtek',
    'karma',
    'kamna',
    'korál',
    'kupec',
    'kázeň',
    'klišé',
    'kulma',
    'komik',
    'krimi',
    'kaluž',
    'koala',
    'krach',
    'kavka',
    'kanón',
    'kanec',
    'korek',
    'kolek',
    'kupón',
    'kapie',
    'kutil',
    'kacíř',
    'koláž',
    'kánoe',
    'koráb',
    'kolie',
    'kotva',
    'kolos',
    'korán',
    'kvóta',
    'kokon',
    'kujón',
    'kalba',
    'kaňka',
    'kupka',
    'kašna',
    'kečup',
    'krčma',
    'kurír',
    'koňak',
    'kukla',
    'kvádr',
    'kšilt',
    'kšeft',
    'kajak',
    'kahan',
    'kopie',
    'labuť',
    'lázeň',
    'lávka',
    'látka',
    'lempl',
    'lovec',
    'lemur',
    'lanko',
    'lázně',
    'láhev',
    'lajna',
    'loket',
    'lemra',
    'laser',
    'lavor',
    'lanýž',
    'lampa',
    'lebka',
    'lesba',
    'lékař',
    'lepra',
    'ležák',
    'leták',
    'liják',
    'liška',
    'losos',
    'lupen',
    'lýtko',
    'lipid',
    'lyska',
    'larva',
    'linie',
    'líska',
    'letka',
    'linka',
    'lalok',
    'louka',
    'lokaj',
    'lezec',
    'luxus',
    'legie',
    'likér',
    'láska',
    'libra',
    'lokna',
    'liána',
    'limit',
    'lymfa',
    'leták',
    'laser',
    'lustr',
    'lokál',
    'lupič',
    'latex',
    'macek',
    'mléko',
    'magie',
    'matka',
    'mamka',
    'maník',
    'malíř',
    'masér',
    'máslo',
    'maska',
    'masna',
    'malta',
    'mazák',
    'mazec',
    'medik',
    'melta',
    'město',
    'model',
    'metro',
    'metla',
    'mudla',    //???
    'mixér',
    'muška',
    'mouka',
    'mobil',
    'myčka',
    'modla',
    'mrcha',
    'mládě',
    'mrkev',
    'mrzák',
    'mumie',
    'masáž',
    'móres',
    'motor',
    'mínus',
    'major',
    'májka',
    'moták',
    'modul',
    'mango',
    'marod',
    'mušle',
    'mozek',
    'mánie',
    'mýval',
    'mamut',
    'mýlka',
    'měnič',
    'maják',
    'madam',
    'metal',
    'mříže',
    'morče',
    'marka',
    'manéž',
    'mudrc',
    'měšec',
    'mýtus',
    'mafie',
    'masív',
    'mince',
    'mnich',
    'motiv',
    'modem',
    'mozol',
    'myrta',
    'malér',
    'mašle',
    'menza',
    'motto',
    'mulat',
    'motýl',
    'magma',
    'manga',
    'moped',
    'malba',
    'motel',
    'mužík',
    'manko',
    'mamba',
    'dárek',
    'nápoj',
    'náboj',
    'nález',
    'lustr',
    'bulka',
    'bůvol',
    'filet',
    'baron',
    'burák',
    'machr',
    'troud',
    'náběh',
    'návrh',
    'náčrt',
    'náběr',
    'nábor',
    'nafta',
    'nájem',
    'nákup',
    'nákyp',
    'nálet',
    'náhon',
    'nálev',
    'kláda',
    'nádor',
    'naháč',
    'nádrž',
    'ňadro',
    'nanuk',
    'nános',
    'námět',
    'nápor',
    'náraz',
    'názor',
    'nátěr',
    'násyp',
    'národ',
    'nárok',
    'nářky',
    'nauka',
    'návěs',
    'návod',
    'návyk',
    'název',
    'náves',
    'nepál',
    'němec',
    'nylon',
    'němka',
    'nerez',
    'nervy',
    'ninja',
    'notář',
    'norma',
    'nugát',
    'nůžky',
    'nymfa',
    'ňouma',
    'obava',
    'obilí',
    'obřad',
    'objem',
    'obora',
    'obvaz',
    'obrys',
    'obočí',
    'obrat',
    'obvod',
    'obzor',
    'oddíl',
    'oceán',
    'občan',
    'odhad',
    'odpad',
    'odpal',
    'odtok',
    'odkaz',
    'odvar',
    'odpor',
    'odvoz',
    'orgán',
    'obraz',
    'ofina',
    'odraz',
    'ostří',
    'bodec',
    'čumák',
    'osmák',
    'ďolík',
    'ortel',
    'otrok',
    'olovo',
    'oltář',
    'oliva',
    'číňan',
    'pájka',
    'pádlo',
    'parta',
    'packa',
    'prach',
    'palba',
    'pálka',
    'palma',
    'pumpa',
    'pánev',
    'papež',
    'panic',
    'panna',
    'papír',
    'palec',
    'paměť',
    'panda',
    'pakůň',
    'panák',
    'pasák',
    'písmo',
    'párty',
    'párek',
    'pasta',
    'pásmo',
    'poupě',
    'plast',
    'prkno',
    'písek',
    'prach',
    'pauza',
    'pažba',
    'pětka',
    'patro',
    'pekáč',
    'peklo',
    'prase',
    'penál',
    'penze',
    'piáno',
    'pirát',
    'pilíř',
    'pítko',
    


    
    ]