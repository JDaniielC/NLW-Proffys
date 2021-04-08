module.exports = async function(db, {proffyValue, classeValue, classScheduleValues}) {
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        )   VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID 

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            )   VALUES (
                "${classeValue.subject}",
                "${classeValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            )   VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)

    })

    await Promise.all(insertedAllClassScheduleValues)
}

//await é pra ir sequêncial, esperando um terminar para ir ao próximo, sem necessidade do Then. Para usar await precisa do async antes do function