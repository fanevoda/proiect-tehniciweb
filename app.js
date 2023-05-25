// imports

const express = require('express');
const session = require('express-session');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// generam nu ne jucam

fs.readFile('pagina.ejs', 'utf8', (err, data) => {
   if (err) {
     console.error('nu stiu de ce nu merge', err);
     return;
   }
 

   const templateData = {
     title: 'na ca merge',
     heading: 'nu mi vine sa cred',
     content: 'efectiv plang'
   };

   const compiledTemplate = ejs.compile(data);
 

   const generatedHTML = compiledTemplate(templateData);

   console.log(generatedHTML);
 });

//generam nu ne jucam

const jsonData = fs.readFileSync('users.json');
const data = JSON.parse(jsonData);
const users = data.users;

function findUser(username, password)
{
   for (let i = 0; i < users.length; i++) {
     const user = users[i];
     if (user.username == username && user.password == password) {
       return true;
     }
   }
   return false;
 }

// static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(bodyParser.urlencoded({ extended: true }))

// set views

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('',(req, res) =>    
   {
    res.render('index')
   }
)


app.get('/index',(req, res) =>    
   {
    res.render('index')
   }
)

app.get('/about',(req, res) =>    
   {
    res.render('about')
   }
)

app.get('/comanda',(req, res) =>    
   {
    res.render('comanda')
   }
)

app.get('/comandasucces',(req,res) =>
{
  const name = req.query.name;
  const email = req.query.email;
  const model = req.query.model;
  const metri = req.query.metri;
  const address = req.query.address;

  res.render('comandasucces', { name, email, model, metri, address });

})

app.post('/comanda', (req, res) => 
{

   const name = req.body.name;
   const email = req.body.email;
   const model = req.body.model; 
   const metri = req.body.metri;
   const address = req.body.address;

   const namePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const metriPattern = /^\d+$/;


  if (!name.match(namePattern)) {
    return res.status(400).send('Invalid name');
  }


  if (!email.match(emailPattern)) {
    return res.status(400).send('Invalid email');
  }


  if (!metri.match(metriPattern)) {
    return res.status(400).send('Invalid metri');
  }

 

   res.redirect(`/comandasucces?name=${name}&email=${email}&model=${model}&metri=${metri}&address=${address}`);
 });



// incerc login si logout

app.use(session({
   secret: 'secret-key',
   resave: false,
   saveUninitialized: false
 }));
 
 
 app.get('/', (req, res) => {
   if (req.session.loggedIn) {
     res.send('Bun venit, utilizator logat!');
   } else {
     res.send('Bun venit, vizitator!');
   }
 });
 
 app.post('/login', (req, res) => {
   
   const username = req.body.username;
   const password = req.body.password;
 
   if (findUser(username,password)) 
   {
     req.session.loggedIn = true;
     res.redirect('/');
   } 
   else 
   {
     res.send('Nume de utilizator sau parolă incorecte!');
   }
 });
 

 app.get('/login', (req, res) => {
   res.render('login');
 });
 
 app.get('/logout', (req, res) => {
   req.session.loggedIn = false;
   res.render('logout');
 });


 app.use((req, res, next) => {
   res.status(404).render('404');
 });



 // listen ala nu conteaza


app.listen(port, () => console.info('Listening on port 3000.'))