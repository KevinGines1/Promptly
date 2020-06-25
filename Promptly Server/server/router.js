const controller = require('./controller')

module.exports = (app) => {
    app.get('/allHW/?:username', controller.getAllHomeworks)
    app.get('/allHWMonth/?:username', controller.getMonthHomeworks)
    app.get('/allHWWeek/?:username', controller.getWeekHomeworks)
    app.post('/addHW', controller.addHomework)
}