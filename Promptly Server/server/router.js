const controller = require('./controller')

module.exports = (app) => {
    // * homeworks
    app.get('/allHW/?:username', controller.getAllHomeworks)
    app.get('/allHWMonth/?:username', controller.getMonthHomeworks)
    app.get('/allHWWeek/?:username', controller.getWeekHomeworks)
    app.post('/addHW', controller.addHomework)
    app.delete('/removeHW/?:hwID', controller.removeHomework)
    app.patch('/done/?:hwID', controller.markHWAsDone)
    app.patch('/undone/?:hwID', controller.markHWAsUndone)
    // * courses
    app.get('/courses/?:username', controller.getCourses)
    app.get('/homeworks/?:username&:course', controller.getCourseHW)
    app.get('/course/?:hwID', controller.getCourseFromID)
}