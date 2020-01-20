interface Settings {
    ENV: string
    BASE_URL: string,
    VERSION: string,
    SENTRY: string,
}

// @todo determine which
const development: Settings = {
    ENV: "development",
    BASE_URL: "http://dominos.orderpicker.localhost/local_marvia.php/",
    VERSION: "0.0.1",
    SENTRY: "todo",
}

const production: Settings = {
    ...development,
    BASE_URL: "http://replace-url-for-api-endpoint/",
    ENV: "production",
}

const environments = {
    production,
    development,
}

export const settings = environments[process.env.NODE_ENV === 'development' ? 'development' : 'production']
