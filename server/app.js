/**
 * Created by dhanush on 5/22/17.
 */
module.exports = function(app) {
    require("./services/chat.service.server.js")(app);
};