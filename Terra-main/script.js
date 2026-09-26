const startButton = document.querySelector("#startButton")
const questionFrame = document.querySelector("#questionFrame")


let list = ["Are you helpful", "Are you slightly silly", "Are you a yapper", "Are you a Blåhaj", "Do you have best fit", "Are you blunt", "Are you kind",
     "Do you love your plants and your trash", "Do you say haii!", "Do you use only CAPS", "Are you goblin", "Do you have tom nook vibes", "Are you quiet and always thinking"
    , "Are you slightly lost", "Are you whimsical"]
const npcQuestions = {
    "Are you helpful":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you slightly silly":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you a yapper":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you a Blåhaj":{
        "answered": false,
        "npc": "blargh"
    },
    "Do you have best fit":{
        "answered": false,
        "npc": "blargh"
    },
    "Are you blunt":{
        "answered": false,
        "npc": "blargh"
    },
    "Are you kind":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you love your plants and your trash":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you say haii!":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you use only CAPS":{
        "answered": false,
        "npc": "ratticus"
    },
    "Are you goblin":{
        "answered": false,
        "npc": "ratticus"
    },
    "Do you have tom nook vibes":{
        "answered": false,
        "npc": "ratticus"
    },
    "Are you quiet and always thinking":{
        "answered": false,
        "npc": "player"
    },
    "Are you slightly lost":{
        "answered": false,
        "npc": "player"
    },
    "Are you whimsical":{
        "answered": false,
        "npc": "player"
    }
}

function takeRandomQuestion ()   {
    console.log(npcQuestions)
    let randomQuestionNum = Math.floor(Math.random() * list.length)
    let randomFromList = list[randomQuestionNum]
    list.splice(randomQuestionNum, 1)
    console.log(randomQuestionNum)
    console.log(list)

    if (randomFromList == undefined){
        if (list.length === 0){
            console.log("(ARARaR")
        }else{
            takeRandomQuestion()
        }
    }
    return randomFromList
    
}

startButton.addEventListener("click",  (event) =>{
    console.log("Next question!")
    selectedQuestion = takeRandomQuestion()
    if (selectedQuestion == undefined){
        console.log("All questions asked!")
    }
    document.querySelector("#question").innerHTML = selectedQuestion + "?"
    
})
