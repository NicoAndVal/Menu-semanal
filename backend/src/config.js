process.env.PORT = process.env.PORT || 5000

process.env.NODE_ENV = process.env.NODE_ENV ||'dev'

if(process.env.NODE_ENV == 'dev'){
    process.env.URL_DB  = 'mongodb://localhost:27017/planificadorComidas'
}

