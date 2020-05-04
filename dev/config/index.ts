import path from 'path'
const config = {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '../..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.APP_ROOT || '',
}

export { config }