const proffys =[{
    name: "Daniel",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HVdZs3tsTxg5dNUgwxUgyUJZHZYnVOJDepmsn_VL-AwpJoDQcXEh_zng9nKDFkhqV9Q&usqp=CAU",
    whatsapp: "123123123312",
    bio: "Teste",
    subject: "Matemática",
    cost: "201",
    weekday: [1],
    time_from: [13],
    time_to: [14],
}
];

const weekdays = [    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


const subjects = [    
    "artes",
    "biologia",
    "Ciências",
    "Educação física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require ('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(3000)