require(process.cwd()+'/.env');
module.exports = () =>{
    if(process.env.NODE_ENV){
        console.log('entered in production');
        require('newrelic');
        process.env.TW_CB = 'https://toggl-clone.herokuapp.com/'
    }else{
        process.env.NEW_RELIC_LK = NEW_RELIC_LK;
        require('newrelic');
        console.log('entered in development');        
        process.env.TW_CB = 'http://localhost:9000/'
    }
}