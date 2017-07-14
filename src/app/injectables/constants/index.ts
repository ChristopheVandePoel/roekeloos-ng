export var devConfig = {
    apiRoot: 'http://www.roekeloos-wp.dev/wp-json/wp/v2/',
    mailRoot: 'http://localhost:9991/mail'
};

export var prodConfig = {
    apiRoot: 'http://dev.roekeloos.be/wp-json/wp/v2/',
    mailRoot: 'http://roekeloos.be:9991/mail'
}

const config = {
    devConfig,
    prodConfig
}

export default config;
