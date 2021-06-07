const { env } = require("process");

envConfig = (env) => {
    switch(env.toUpperCase() || env){
        case 'dev':
            return ({
                host:'127.0.0.1',
                port: 3001
    
             });
             break;
        case 'prod':
            return ({
                host:'127.0.0.1',
                port: 3001
    
             });
             break;
        default: 
         return ({
            host:'127.0.0.1',
            port: 3001

         });
    }


};


module.exports.envconfig = envConfig;

exports.message = envConfig;