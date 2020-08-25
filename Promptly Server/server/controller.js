const database = require('./database')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

module.exports.getAllHomeworks = (req, res) => {
    // get username from URL
    const username = req.params.username

    // construct query
    const getAllHomeworksQuery = `SELECT * FROM assignment WHERE username='${username}';`
    // const query = `SELECT * FROM assignment WHERE username='${username}'`

    // execute query
    // get all homeworks
    database.query(getAllHomeworksQuery, (err, results) => {
        if (err) {
            console.log("GET ALL HW SERVER ERROR, ", err)
        } else {
            // console.log("IN SERVER: ", results)
            const listOfHw = results
            return res.status(200).send(listOfHw)
        }
    })
}

module.exports.getMonthHomeworks = (req, res) => {
    const username = req.params.username

    // console.log("GET THIS MONTH'S QUERY HERE")
    //construct query
    const getMonthHomeworksQuery = `select * from assignment where  (MONTH(due_date) IN (SELECT MONTH(due_date) WHERE MONTH(due_date) = MONTH(CURDATE())) AND username="${username}");`
    // execute query
    database.query(getMonthHomeworksQuery, (err, results) => {
        if (err) {
            console.log("GET ALL HW MONTH SERVER ERROR, ", err)
        } else {
            // console.log("IN SERVER: ", results)
            const listOfHw = results
            return res.status(200).send(listOfHw)
        }
    })
}

module.exports.getWeekHomeworks = (req, res) => {
    const username = req.params.username

    // console.log("GET THIS WEEK'S QUERY HERE")
    //construct query
    const getWeekHomeworksQuery = `SELECT * FROM assignment WHERE (WEEK(due_date) = WEEK(CURDATE()) and username="${username}");`
    // execute query
    database.query(getWeekHomeworksQuery, (err, results) => {
        if (err) {
            console.log("GET ALL HW WEEK SERVER ERROR, ", err)
        } else {
            // console.log("IN SERVER: ", results)
            const listOfHw = results
            return res.status(200).send(listOfHw)
        }
    })
}

module.exports.addHomework = (req, res) => {
    // get info from request body
    const homeworkInformation = req.body.homeworkInfo
    const title = homeworkInformation.title
    const description = homeworkInformation.description
    const due_date = homeworkInformation.due_date
    const course = homeworkInformation.course
    const school_email = homeworkInformation.school_email
    const username = homeworkInformation.username

    console.log("IN REQUEST: ", homeworkInformation)
    // construct query
    const addHomeWorkQuery = `INSERT INTO assignment(Assignment_title,Description, Due_date, School_email, Username, Progress, Course) VALUES ('${title}', '${description}', STR_TO_DATE('${due_date}', '%Y-%d-%m'), '${school_email}', '${username}', 'not done', '${course}');`

    // execute query
    database.query(addHomeWorkQuery, (err) => {
        if (err) {
            console.log("ADD HW SERVER ERROR IN DB, ", err)
        } else {
            return res.status(200).send({ msg: "Successfully added to database!" })
        }
    })
}

module.exports.removeHomework = (req, res) => {
    const homeworkID = req.params.hwID

    // construct query
    const removeFromDB = `DELETE FROM assignment WHERE assignment_id=${homeworkID}`
    //execute query
    database.query(removeFromDB, (err, results) => {
        if (err) {
            console.log("REMOVE HW SERVER ERROR IN DB, ", err)
        } else {
            return res.status(200).send({ msg: "Successfully removed from database!" })
        }
    })
}

module.exports.markHWAsDone = (req, res) => {
    const assignmentID = req.params.hwID

    //construct query
    const markHWAsDoneQuery = `UPDATE assignment SET Progress="done" WHERE Assignment_id=${assignmentID};`
    //execute query
    database.query(markHWAsDoneQuery, (err) => {
        if (err) {
            console.log("MARK AS DONE HW ERROR IN DB: ", err)
        } else {
            return res.status(200).send({ msg: "successfully marked hw as done!" })
        }
    })
}

module.exports.markHWAsUndone = (req, res) => {
    const assignmentID = req.params.hwID

    //construct query
    const markHWAsNotDone = `UPDATE assignment SET Progress="not done" WHERE Assignment_id=${assignmentID};`
    //execute query
    database.query(markHWAsNotDone, (err) => {
        if (err) {
            console.log("MARK AS NOT DONE HW ERROR IN DB: ", err)
        } else {
            return res.status(200).send({ msg: "successfully marked hw as not done!" })
        }
    })
}

module.exports.getCourses = (req, res) => {
    const username = req.params.username

    //construct query
    const getCourses = `SELECT DISTINCT Course FROM assignment WHERE username='${username}';`
    //execute query
    database.query(getCourses, (err, result) => {
        if (err) {
            console.log("GET COURSES ERROR IN DB: ", err)
        } else {
            // console.log(result)
            const listOfCourses = result
            res.status(200).send(listOfCourses)
        }
    })
}

module.exports.getCourseHW = (req, res) => {
    const username = req.params.username
    const course = req.params.course

    //construct query
    const getCourseHWQuery = `SELECT * FROM assignment WHERE username='${username}' AND course='${course}'; `
    //execute query
    database.query(getCourseHWQuery, (err, result) => {
        if (err) {
            console.log("GET COURSE HOMEWORK ERROR IN DB: ", err)
        } else {
            // console.log("RESULT: ", result)
            if (result.length !== 0) {
                const listOfHW = result
                res.status(200).send(listOfHW)
            }
        }
    })
}

module.exports.getCourseFromID = (req, res) => {
    // console.log(req.params.hwID)
    const homeworkID = req.params.hwID
    // console.log(homeworkID)
    //construct query
    const getCourseFromIDQuery = `SELECT Course FROM ASSIGNMENT WHERE assignment_id=${homeworkID};`
    //execute query
    database.query(getCourseFromIDQuery, (err, result) => {
        if (err) {
            console.log("GET COURSE FROM ID ERROR IN DB: ", err)
        } else {
            // console.log(result)
            res.status(200).send(result)
        }
    })
}