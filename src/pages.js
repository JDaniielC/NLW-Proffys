const Database = require('./database/db')

const {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
} = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query
    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", {filters, subjects, weekdays})
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `
    try {
        const db = await Database
        const proffys = await db.all(query)

        proffys.map ((proffy) => {
            proffy.subject = getSubject(proffy.subject)
        })

        return res.render('study.html', {proffys, subjects, filters, weekdays})
    } catch (error) {
        console.log(error)
    }

}

function pageGiveClasses(req, res) {

    return res.render("give-classes.html", {subjects, weekdays})
}

async function saveClass (req, res) {
    const createProffy = require('./database/crateProffy')
    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classeValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    console.log(classeValue)

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        let time_from = req.body.time_from;
        let time_to = req.body.time_to;
        if (typeof(time_from) !== "string") {
            time_from = time_from[index]
            time_to = time_to[index]
        }
        return {
            weekday,
            time_from: convertHoursToMinutes(time_from),
            time_to: convertHoursToMinutes(time_to)
        }
    }) 

    try {
        const db = await Database
        await createProffy(db, {proffyValue, classeValue, classScheduleValues})
        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0]
        queryString += "&time=" + req.body.time_from[0]
        return res.redirect("/study" + queryString)
    } catch (error) {
        console.log(error)
    }

    return res.redirect("/study")
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClass
}