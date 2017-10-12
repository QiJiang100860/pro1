//let host = 'http://192.168.1.126:8000/peafowl-datahandler-deploy/datahandler'
let host='https://s3.magugi.com/datahandler';

const service = {
    // baseCateId: '39',
    // version: '380',
    // imageServer:'https://dbb1.image.alimmdn.com/',
    // secrute: {
    //     unique: '$%^&HGF^&**((k',
    //     client: 'Wechat-app',
    // },
    service: {
        /**
         * vcode
         */
        login: `${host}/login`,
    }
};

export default service
