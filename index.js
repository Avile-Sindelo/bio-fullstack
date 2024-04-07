import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';
import Database from './database.js';
import Typed from 'typed.js';
import emailjs from '@emailjs/nodejs'

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
    // console.log('All the Skills of the developer are as follows: ', await database.getAllSkills());
    const myProjects = await database.getAllProjects();
    const typedText = await database.getTypedText();
    //Render a view
    res.render('index', {skills: await database.getAllSkills(), projects: myProjects.reverse(), typed: typedText});
});

app.post('/email', async function(req, res){
    console.log('Gama: ', req.body.customername);
    console.log('Email: ', req.body.customeremail);
    console.log('Myalezo: ', req.body.customermessage);

    const serviceID = "service_0uoqn1h";
    const templateID = "template_cfqu6aa";
    const data = {
        name: req.body.customername,
        email: req.body.customeremail,
        message: req.body.customermessage
    };

    emailjs.init({
        publicKey: 'ZcSgXgprLloKsX4rN'
      });
      
      errorFree(data)? emailjs.send(serviceID, templateID, data)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      ) : console.log('Error occurred!');

      //check for errors
      function errorFree(data){
        if(data.name == ''){
            console.log('Please enter your name');
            return false;
        } else if(data.email == ''){
            console.log('Please don\'t forget to enter your email address');
            return false;
        } else if(data.message == ''){
            console.log('Please make sure you include a message for the developer');
            return false;
        } else {
            console.log('All the fields have been filled well, thank you!')
            return true;
        }
    }

    res.redirect('/');
})

let PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
});