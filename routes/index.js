const projectWork = require('../controllers/projectWork');
const themePark = require('../controllers/themePark');
const attraction = require('../controllers/attractions');

module.exports = {
    auth: require('./auth'),
    attractions: require('./attractions'),
    creatives: require('./creatives'),
    themeParks: require('./themeParks'),
    projectWorks: require('./projectWorks'),
    users: require('./users')
}