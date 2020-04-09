'use strict';

module.exports = {
    modify(config, {target, dev}, webpack) {
        const appConfig = config; // stay immutable here

        if(appConfig.devServer){
            appConfig.devServer.watchOptions['poll'] = 1000;
            appConfig.devServer.watchOptions['aggregateTimeout'] = 300;
        }

        return appConfig;
    },
};