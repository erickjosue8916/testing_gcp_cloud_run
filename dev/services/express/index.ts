import  express from "express";

export default (apiRoot:any, routes:any) => {
    const app = express()
    
    app.use(apiRoot, routes)

    return app
}