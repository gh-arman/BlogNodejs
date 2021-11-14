const startup = require('./startup');


(async ()=> {

    startup.initExpress();
    
    startup.initRoutes();

    await startup.initDatabase();

    startup.runApp();

})();













