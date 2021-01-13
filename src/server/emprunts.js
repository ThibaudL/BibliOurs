let emprunts;
const initialized = () => {
    console.warn("Database emprunts is ready")
    emprunts = db.addCollection('emprunts');
};
const path = require('path');
const loki = require('lokijs');
const db = new loki(path.join(__dirname, '../../data/emprunts.db'),{
    autoload: true,
    autoloadCallback : initialized,
    autosave: true,
    autosaveInterval: 4000
});

exports.EmpruntsService = class {
    constructor(app) {
        console.log("Starting emprunts services")
        app.post('/emprunts', this.addEmprunts);
        app.get('/emprunts', this.getEmprunts)
    }

    addEmprunts(req, res) {
        console.log(req.body);
        emprunts.insert(req.body);
        res.sendStatus(200);
    }
    getEmprunts(req, res) {
        res.send(emprunts.data);
    }
}
