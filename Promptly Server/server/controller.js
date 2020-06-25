const database = require('./database')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

module.exports.getAllHomeworks = (req,res) =>{
    // get username from URL
    const username = req.params.username
    
    // construct query
    const getAllHomeworksQuery = `SELECT * FROM assignment WHERE username='${username}';`
    // const query = `SELECT * FROM assignment WHERE username='${username}'`
    
    // execute query
    // get all homeworks
    database.query(getAllHomeworksQuery, (err, results)=>{
        if(err){
            console.log("GET ALL HW SERVER ERROR, ", err)
        }else{
            console.log("IN SERVER: ", results)
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
    database.query(getMonthHomeworksQuery, (err, results)=>{
        if(err){
            console.log("GET ALL HW MONTH SERVER ERROR, ", err)
        }else{
            console.log("IN SERVER: ", results)
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
    database.query(getWeekHomeworksQuery, (err, results)=>{
        if(err){
            console.log("GET ALL HW WEEK SERVER ERROR, ", err)
        }else{
            console.log("IN SERVER: ", results)
            const listOfHw = results
            return res.status(200).send(listOfHw)
        }
    })
}

module.exports.addHomework = (req,res) =>{
    // get info from request body
    const homeworkInformation = req.body.homeworkInfo
    const title = homeworkInformation.title
    const description = homeworkInformation.description
    const due_date = homeworkInformation.due_date
    const school_email = homeworkInformation.school_email
    const username = homeworkInformation.username
    
    console.log("IN REQUEST: ", homeworkInformation)
    // construct query
    const addHomeWorkQuery = `INSERT INTO assignment(assignment_title, description, due_date, school_email, username) VALUES ('${title}', '${description}', STR_TO_DATE('${due_date}', '%Y-%d-%m'), '${school_email}', '${username}')`

    // execute query
    database.query(addHomeWorkQuery, (err,results)=>{
        if(err){
            console.log("ADD HW SERVER ERROR IN DB, ", err)
        }else{
            return res.status(200).send({msg:"Successfully added to database!"})
        }
    })
}