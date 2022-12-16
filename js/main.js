const allWords = [
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
    
    ]
    

/**
 * CONFIG
 */

// REMOVE ACCENTS
const noAccents = (str) => {
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
}


// CONFETTI
let myConfetti = confetti.create(document.querySelector('canvas'), {
    resize: true,
    useWorker: true
})

myConfetti({
    particleCount: 100,
    spread: 160
})


// MICRO MODAL
MicroModal.init({
    disableFocus: true
})


/**
 * ANIMATIONS
 */

// ADD NEW LETTER
const animateTileBounce = (tile) => {
    tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
}


// SUBMIT NON-EXISTANT WORD
const animateRowShake = (row) => {
    row.classList.remove('animate__shakeX')

    setTimeout(() => {
        row.classList.add('animate__animated', 'animate__shakeX')
    }, 0)
}


// SUBMIT EXISTING WORD
const animateTileReveal = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.classList.remove('animate__bounceIn', 'animate__flipInY')

        setTimeout(() => {
            tile.style.visibility = 'visible'
            tile.classList.add('animate__flipInY', `animate__delay-${index}s`)
        }, 0)
    })
}


// CORRECT WORD!!
const animateTileDance = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.innerHTML = solution.charAt(index)
        tile.classList.remove('animate__bounceIn', 'animate__flipInY', 'animate__bounce')

        setTimeout(() => {
            tile.classList.add('animate__bounce', `animate__delay-${index}s`)
        }, 0)
    })
}


// HIGHLIGHT LETTERS
const highlightLetters = () => {
    let rowTiles = currentRow().querySelectorAll(".tile")
    let lettersToCheck = noAccentSolution.split('')

    // first we find all 'correct' letters
    rowTiles.forEach((tile, index) => {
        tile.style.visibility = "hidden"

        let letter = noAccents(word.charAt(index))

        if (lettersInRow.correct.some(o => o.letter === letter && o.index === index)) {
            tile.classList.add('correct')
            lettersToCheck[index] = null
        }
    })

    // then we check for 'present' and 'wrong'
    rowTiles.forEach((tile, index) => {
        tile.style.visibility = "hidden"

        let letter = noAccents(word.charAt(index))
        let colorClass = "wrong"

        if (lettersInRow.present.some(o => o.letter === letter && o.index === index)) {
            if (lettersToCheck.includes(letter)) {
                colorClass = 'present'
                lettersToCheck[lettersToCheck.indexOf(letter)] = null
            }
        }

        tile.classList.add(colorClass)
    })


    // aplhabet row in footer
    document.querySelectorAll(".keyboard .tile").forEach((tile, index) => {
        let colorClass = ""

        if (lettersInRow.wrong.some(o => o.letter === tile.id)) colorClass = "wrong"
        if (lettersInRow.present.some(o => o.letter === tile.id)) colorClass = "present"
        if (lettersInRow.correct.some(o => o.letter === tile.id)) colorClass = "correct"

        if (colorClass) {
            setTimeout(() => tile.classList.add(colorClass), 1400)
        }
    })
}


// FADE OUT KEYBOARD
const fadeOutKeyboard = (variant, delay) => {
    let keyboardDelay = delay || 2500
    let keyboardButtons = document.querySelectorAll('.keyboard .row .tile')

    // fade out all keys
    setTimeout(() => {
        // if you win, keys fade out nicely
        if (variant === 'win') {
            keyboardButtons.forEach(tile =>
                tile.classList.add('animate__animated', 'animate__fadeOutDown')
            )
        }
        // if you lose, keys fall out erratically
        else if (variant === 'lose') {
            keyboardButtons.forEach(tile => {
                let chance = Math.floor(Math.random() * 5) + 1
                tile.classList.add('animate__animated', 'animate__fadeOutDownBig', `animate__delay-${chance}s`)
            })
        }
    }, keyboardDelay)
}


// FADE IN "PLAY AGAIN" BUTTON
const fadeInPlayAgainButton = (delay) => {
    let buttonDelay = delay || 2750

    // again button
    let winnerButton = document.querySelector('.keyboard .winner')

    setTimeout(() => {
        winnerButton.style.display = 'flex'
        winnerButton.classList.add('animate__animated', 'animate__fadeIn')
    }, buttonDelay)
}


/**
 * TOOLTIPS
 */

const tooltipElement = document.querySelector('.tooltip')

const tooltip = (text, forever) => {
    if (!text) return

    tooltipElement.innerHTML = text
    tooltipElement.className = 'tooltip animate__animated'

    // fade in tooltip
    setTimeout(() => {
        tooltipElement.classList.add('animate__fadeIn')
    }, 0)

    // fade out tooltip
    if (!forever) {
        setTimeout(() => {
            tooltipElement.className = 'tooltip animate__animated'
            tooltipElement.classList.add('animate__fadeOut')
        }, 2500)
    }
}

// UNKNOWN WORD TOOLTIP
const tooltipUnknownWord = () => {
    let lastLetter = word.slice(-1).toLowerCase()

    if (['y', 'i'].includes(lastLetter)) {
        tooltip('Nejsou zde žádná přídavná jména, slovesa, množná čísla, ani jména.')
    }
    else {
        tooltip('Toto slovo neznám <br> ¯\\\_(ツ)_/¯')
    }
}

// TOOLTIP - YOU WON
const tooltipHellYeah = () => {
    setTimeout(() => {
        if (tries === 1) tooltip('🔥WOW!🔥 <br> jsi prostě NEJLEPŠÍ')
        else if (tries === 2 || tries === 3) tooltip('PARÁDA! 😉')
        else if (tries === 4 || tries === 5) tooltip('máš to! 👍')
        else if (tries === 6) tooltip('uff, to bylo byle těsně! ')
    }, 1500)
}


/**
 * APP.JS
 */

// DATA
const maxWordLength = 5
const maxTries = 6

let solution = allWords[(allWords.length * Math.random()) | 0].toLowerCase()
let word = ""
let tries = 1

// no accents (pre slovencinu)
let noAccentWords = allWords.map((x) => noAccents(x))
let noAccentSolution = noAccents(solution)

let canSubmit = true
let gameEnded = false

let lettersInRow = {
    correct: [],
    present: [],
    wrong: [],
}

// TILE TO UPDATE
const currentTile = () => {
    return currentRow().querySelector(`:nth-child(${word.length})`)
}

// ROW WE'RE PLAYING IN
const currentRow = () => {
    return document.querySelector(`.board .row:nth-of-type(${tries})`)
}

// KEY PRESS
document.addEventListener("keydown", (event) => {
    // de-focus any active element (needed for micromodal)
    if ("activeElement" in document) document.activeElement.blur()

    // nope
    if (gameEnded) return

    if (event.key === "Enter") {
        submitWord()
    } else if (event.key === "Backspace") {
        removeLetter()
    } else {
        addLetter(event.key)
    }
})

// SUBMIT
const submitWord = () => {
    if (word.length < maxWordLength) return
    if (!canSubmit) return

    // is this a real word ?
    if (!noAccentWords.includes(noAccents(word))) {
        animateRowShake(currentRow())
        tooltipUnknownWord()
        return
    }

    findLettersInRow()
    highlightLetters()
    animateTileReveal(currentRow())

    // can't submit again, while animations are running
    canSubmit = false

    // wait for reveal animation to finish
    setTimeout(judgeResult, 1500)
}

// ADD LETTER
const addLetter = (character) => {
    if (word.length >= maxWordLength) return

    // allow only letters
    if (/^\p{L}$/u.test(character)) {
        word = word + character
        word = word.toLowerCase()

        let tile = currentTile()
        tile.innerHTML = character

        animateTileBounce(tile)
    }
}

// REMOVE LETTER
const removeLetter = () => {
    if (word.length <= 0) return

    let tile = currentTile()
    tile.innerHTML = ""
    tile.className = "tile"

    word = word.slice(0, -1)
}

// JUDGE RESULT
const judgeResult = () => {
    canSubmit = true

    if (noAccents(word) === noAccentSolution) {
        youWin()
    } else if (tries >= maxTries) {
        youLose()
    } else {
        youTryAgain()
    }
}

// YOU WIN
const youWin = () => {
    gameEnded = true

    animateTileDance(currentRow())
    setTimeout(() => confetti(), 1500)
    tooltipHellYeah()
    fadeOutKeyboard('win')
    fadeInPlayAgainButton()
}

// YOU LOSE
const youLose = () => {
    gameEnded = true

    fadeOutKeyboard('lose', 100)
    fadeInPlayAgainButton(1000)
    setTimeout(() => {
        tooltip(`<small>Tvé řešení bylo:</small> <strong>${solution.toUpperCase()}</strong>`, true)
    }, 750)
}

// YOU TRY AGAIN
const youTryAgain = () => {
    word = ""
    tries++
}

// FIND LETTERS IN ROW
const findLettersInRow = () => {
    let present = []
    let correct = []
    let wrong = []

        ;[...word].forEach((letter, index) => {
            letter = noAccents(letter)

            // letter in correct place
            if (letter === noAccentSolution.charAt(index)) {
                correct.push({ letter: letter, index: index })
            }
            // letter in wrong place
            else if (noAccentSolution.includes(letter)) {
                present.push({ letter: letter, index: index })
            }
            // wrong letter
            else {
                wrong.push({ letter: letter, index: index })
            }
        })

    lettersInRow = {
        present,
        correct,
        wrong,
    }
}

// MOBILE
const keyboard = document.querySelector('.keyboard')
keyboard.addEventListener('click', (event) => {
    // clicked on button?
    if (event.target.nodeName !== 'BUTTON') return

    let character = event.target.id

    if (gameEnded && character === 'again') {
        window.location.reload()
    }
    else if (character === '↵') {
        submitWord()
    }
    else if (character === '←') {
        removeLetter()
    }
    else {
        addLetter(character)
    }
})
