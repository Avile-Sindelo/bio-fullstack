import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';

//Database connection
//db string
const connectionString = process.env.DATABASE_URL || 'postgres://iajdqtoo:CO2sgzM3PLzJcKZ-2vDspOHP-3vVMrYu@arjuna.db.elephantsql.com/iajdqtoo';
const postgresP = pgPromise(connectionString);

const app = express();
//View engine configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');

//Middleware config
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.get('/', async function(){
    //Get the database details 
    //Render a view
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
});