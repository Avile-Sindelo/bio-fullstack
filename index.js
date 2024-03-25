import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';
import Database from './database.js';

const app = express();

//Database connection
//db string
const connectionString = process.env.DATABASE_URL || 'postgres://iajdqtoo:CO2sgzM3PLzJcKZ-2vDspOHP-3vVMrYu@arjuna.db.elephantsql.com/iajdqtoo?ssl=true';
const postgresP = pgPromise();
const db = postgresP(connectionString);

const database = Database(db);

//View engine configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');

//Middleware config
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());     



//Routes
app.get('/', async function(req, res){
    //Get the database details 
    console.log('All the Skills of the developer are as follows: ', await database.getAllSkills());
    console.log('All Projects : ', await database.getAllProjects());
    //Render a view
    res.render('index', {skills: await database.getAllSkills(), projects: await database.getAllProjects()});
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
});