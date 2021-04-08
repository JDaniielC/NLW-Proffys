const Database = require('./db')
const createProffy = require('./crateProffy')

Database.then(async (db) => {
    proffyValue= {
        name: 'Mayk Brito',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBhMIBw0RERAWERUTERYWDRMQEhgTGRUWGCAdGBgYHSgiGholGxUfLT0hJSktLzAuHR8/OTMsNygyOi4BCgoKDg0OGRAQGyslICUvNywrLzUtLy0yLS0rMi0tLi8tLi01LS0vLi0vKzUtLS0tLS0tLTUtLS0tNystLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBQgEAQL/xAA/EAACAQMBAwgGBwYHAAAAAAAAAQIDBBEFBhIhBzFBUWFxgZETIjJSocEUFSNCYoKSU3KisbLCJCVDY2Rzo//EABkBAQADAQEAAAAAAAAAAAAAAAADBAUCAf/EACERAQACAgIDAQADAAAAAAAAAAABAgMRBDESIVFBEzJC/9oADAMBAAIRAxEAPwCNgA3maAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgtTky2YpQ06Os3kFOrNt0t5ZUIJtZS954znqx2keXLGOu5dUpNp1CCabsvfahidCzrOD6WlSWOxzwmTHSeTd1KTpat6qa3qdSnUxVi+mFSD3oNdqfj1WWDPvy7269LVcFY7VlX5Kpb3+Hvlj8Vvx+EjzVeSy5S+yu6Mu+E4/wAslrA5jlZfr3+GnxSd9yf6laR3o0Y1V/t1FJ+UsPyRGrihO2rOjcwlCa54yi4yXgzpE1+s6Lb63beg1Gkpr7r5pxfXGXOianNn/UOLcePxz0DfbXbM1dm71Qm9+jPLpTxjOOiS6JL4/wAtCX62i0bhWmJidSAA9eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABktqP0m5hbp4c5xhnq3pJfMDf7O7GXmvUlcUVGnRbwqk88evdiuMvgu0unTrOOn2FOzo+zTpxhHrxFJce3gZbahG2t429CKjCMVGKXMopYS8jIY+bPbJPvpex44oAAhSAAAAADUbT6BT2j05WdzKUMTU4SjjKkk1zPnWJPgUfrelVNF1SdhdY3ovg0uEovipLsa+fUdDlX8sVmo3NtexXGUZ05P8AdalH+qRc4mWYt4fiDPSNeSugAaSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS2q/R7mFb3Zxl+lp/IxnyazBrsA6WB5tNrfSNPpV196nCXnFP5npMFpAAAAAAAABXHLJVxb2tHrnUl+lQX95Y5VfLFV3tTtqPu0py/VJL+wscWN5YRZv6Sr4AGspAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsNn6ELrXre3uVmErilGS6GnNLD7+YTOo2RC7dj6vptlbWf/Hpp98YqPyNwY7e3ha0VRtoRhBcIxjFRil2JcEZDCtO5mWjEagAB49AAAAAAp3lYq7+1Sh7tvTXjvVJfNFxEA5W7CitIhfKnBVvTxhvqKU5R3J8G+leqvIscW2skIs0bqqkAGspAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABltbh2l1C5hzwnGa74yUvkYgB0lRqqtSjVpvMZJSi+tNZR+yLcm+prUdlqdNv16P2Ml2R9n+BryZKTDvXxtMNGs7jYADl6AAAAABW3LFefZ21gumU6suzCUV570vIskozb/U1qm1NWpTeYU8UYPshnP8bl8C1xK7yb+Ic86rpHQAaimAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADa7M6vU0bV6delVlCm6kFWSliMqaks7y6cJs6AOamsrBe2w2q/W+zVKtJ5nFeiqde/DCy+9YfiUebTqyxx7dw34AM9aAAAAAEK5UtYqabpNOhZVZU6lWo8uMt2Xo4xe9hrm4yiU+uBK+UvVfrHaaVGm8wox9Eurf55PzePykUNfjU8ccKOW27SAAnRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE15K9XlZ679WvLp108dlSEXJPucU1+nqIUSbk3jvbZ0H1elf8A4zXzI80ROO2/jrHOrQu8AGK0AAADU7Vaq9E0CrfwWZRilDq35NRi32JyRtiNco8d/Yy4X/W/KtTfyO8cRN4ifrm86rKkJSc5OU2222228tt9L7T4AbbPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7o0pV60aNGLlOUlGKXO5N4SXe2WbsDsXc6Xqi1PU92GISUYKW/PMlj1muC4Z5myvtBoyuddt6NH2nXp48Jpt+CWfA6GKfLyzWPGP1PgpE+5AAZq2AAAa7aHTfrfRaunxluucMJtZSeU1ldWUbEHsTqdw8mN+lB6/sxd6AlPUKa3HLdjOM1KDlhvHWnhPnRpi2eV+jKeh0a0VmMa63uzehJJ+fDxKmNjBkm9Nyo5KxW2oAASuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjo+h3WtVNzTaEprOHL2aa75Ph4c/YJmIjckRtrj1adptfVK/oNOozqy6VGPBfvPmiu9lk6DyZUqOKut1fSy/ZwbhT8Ze1L4E7s7OlY0FQs6cKcFzRjFRXkink5lY9V9p64JntDNhNiJaLdfWOqODrbuKcY+soZ5230yxw4c2Xz5J0AUL5LXncrNaxWNQAA4dAAAAADyarp9PVdOnY3azCcd19a6U12ppPwKb13Ya+0fNSNP09Jffpptpfihzrwyu0u8E2LPbH10jvji7moF7a9sfZa3mdxS3Kr/wBSniE89vRLxTK613k8vNOzVscXNP8ACsVUu2HT+VvuNDHyqX79SrWw2qhwPsouE3CaaaeGmsNPqafMz4WEQAAAAAAAAAAAAAAAAAAAAAAAAbnQ9l7zXGnY0Wqf7SfqUvB/e/KmfAQ8jLOOm4SYqRadSsXQeTe1ssVdUk7mfU1uUV+Xnl4vHYTWlSjRpqlRioxSwkkopLsS5gDKvkted2lcrWK9P2ADh0AAAAAAAAAAAAAAAA1Ot7OWmuQ/zCgnLGFNepUXdJccdj4Fd67yaXFpmro9T08PcliFVePsy+HcATY896dS4tjrbtCLihO2rOjcwlCa9qMouMl3pmMA16T5ViVG0anQAD14AAAAAAAA/9k=',
        whatsapp: '98765432123',
        bio: 'Testando o database'
    }
    //não pode usar class, pq é reconhecido pelo js
    classeValue = {
        subject: 'Química',
        cost: '21',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1720
        }
    ]

    // await createProffy(db, {proffyValue, classeValue, classScheduleValues})

    //consultar os dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "1220"
    `)

    console.log(selectClassesSchedules)

})

// const proffys =[{
//     name: "Daniel",
//     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HVdZs3tsTxg5dNUgwxUgyUJZHZYnVOJDepmsn_VL-AwpJoDQcXEh_zng9nKDFkhqV9Q&usqp=CAU",
//     whatsapp: "123123123312",
//     bio: "Teste",
//     subject: "Matemática",
//     cost: "201",
//     weekday: [1],
//     time_from: [13],
//     time_to: [14],
// }
// ];
