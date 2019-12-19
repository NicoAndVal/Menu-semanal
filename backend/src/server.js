const app = require('./app')

const db = require('./models/db')


app.listen(app.get('port'),()=>{
    console.log('La api rest esta iniciando en el puerto ' + app.get('port'))
})