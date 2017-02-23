var mongoose = require('mongoose');
module.exports = () => {
    var options = {
        server: {
            socketOptions: {
                keepAlive: 2*3600*1000,
                connectTimeoutMS: 30000
            }
        },
        replset: {
            socketOptions: {
                keepAlive: 2*3600*1000,
                connectTimeoutMS: 30000
            }
        }
    };
    var dbUri = 'mongodb://test:test@ds039010.mlab.com:39010/toggl';
    
    mongoose.connect(dbUri, options);
/*    var conn = mongoose.connection;

    conn.on('error', console.error.bind(console, 'connection error:'));

    conn.once('open',  ()=> {
        // Wait for the database connection to establish, then start the app.                         
    });*/
}