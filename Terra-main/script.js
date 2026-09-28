const startButton = document.querySelector("#startButton")
const questionFrame = document.querySelector("#questionFrame")
const yesButton = document.querySelector("#yesButton")
const noButton = document.querySelector("#noButton")
const progressBar = document.querySelector(".progress-bar")
let selectedQuestion
let usedNpc

let points = {
    "poobert": 0,
    "blargh": 0,
    "heidi": 0,
    "ratticus": 0,
    "player": 0

}

let list = ["Are you helpful", "Are you slightly silly", "Are you a yapper", "Are you a Blåhaj", "Do you have best fit", "Are you blunt", "Are you kind",
    "Do you love your plants and your trash", "Do you say haii!", "Do you use only CAPS", "Are you goblin", "Do you have tom nook vibes", "Are you quiet and always thinking"
    , "Are you slightly lost", "Are you whimsical"]
let npcQuestions = {
    "Are you helpful": {
        "answered": false,
        "npc": "poobert"
    },
    "Are you slightly silly": {
        "answered": false,
        "npc": "poobert"
    },
    "Are you a yapper": {
        "answered": false,
        "npc": "poobert"
    },
    "Are you a Blåhaj": {
        "answered": false,
        "npc": "blargh"
    },
    "Do you have best fit": {
        "answered": false,
        "npc": "blargh"
    },
    "Are you blunt": {
        "answered": false,
        "npc": "blargh"
    },
    "Are you kind": {
        "answered": false,
        "npc": "heidi"
    },
    "Do you love your plants and your trash": {
        "answered": false,
        "npc": "heidi"
    },
    "Do you say haii!": {
        "answered": false,
        "npc": "heidi"
    },
    "Do you use only CAPS": {
        "answered": false,
        "npc": "ratticus"
    },
    "Are you goblin": {
        "answered": false,
        "npc": "ratticus"
    },
    "Do you have tom nook vibes": {
        "answered": false,
        "npc": "ratticus"
    },
    "Are you quiet and always thinking": {
        "answered": false,
        "npc": "player"
    },
    "Are you slightly lost": {
        "answered": false,
        "npc": "player"
    },
    "Are you whimsical": {
        "answered": false,
        "npc": "player"
    }
}

function takeRandomQuestion() {
    console.log(npcQuestions)
    let randomQuestionNum = Math.floor(Math.random() * list.length)
    let randomFromList = list[randomQuestionNum]
    list.splice(randomQuestionNum, 1)
    console.log(randomQuestionNum)
    console.log(list)

    if (randomFromList == undefined) {
        if (list.length === 0) {
            console.log("(ARARaR")
        } else {
            takeRandomQuestion()
        }
    }
    return randomFromList

}

function ShowNextQuestion() {
    console.log("Next question!")
    selectedQuestion = takeRandomQuestion()
    if (selectedQuestion == undefined) {
        console.log("All questions asked!")
        showResults()
    } else {
        document.querySelector("#question").innerHTML = selectedQuestion + "?"

    }

}


yesButton.addEventListener("click", (event) => {
    console.log("Next question! Answered yes")
    answered("yes")

})

noButton.addEventListener("click", (event) => {
    console.log("Next question! Answered no")
    answered("no")

})

function answered(answer) {
    if (answer == "yes") {
        usedNpc = npcQuestions[selectedQuestion]["npc"];
        points[usedNpc] += 1
        console.log(points)
    }

    ShowNextQuestion()
    progressBarUpdate()

}

let progressBarVal = 0

function progressBarUpdate() {
    progressBarVal = progressBarVal + 6.66666
    progressBar.style.width = progressBarVal + "%"

}


ShowNextQuestion()

function showResults() {
    let highestScore = -1
    let winners = []


    Object.entries(points).forEach(([character, characterPoints]) => {
        if (characterPoints > highestScore) {
            highestScore = characterPoints
            winners = [character]
        } else if (characterPoints === highestScore && characterPoints > 0) {
            winners.push(character)
        }
    });

    if (winners.length === 0) {
        showWinner("Nobody")
    } else if (winners.length > 1) {
        showWinner(winners)
    } else {
        showWinner(winners[0])
    }
}


function showWinner(winner) {
    console.log(winner, "winner")
    document.querySelector("#hideAll").hidden = true
    document.querySelector("#winner").innerHTML = `You are ${winner}!`
}
