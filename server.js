import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//middleware to read json
app.use(bodyParser.json());

const mockDB = {
  users: [
    {
      id: '1',
      name: 'PJ',
      email: 'p@email.com',
      password: 'cook',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'Amy',
      email: 'a@email.com',
      password: 'bake',
      entries: 0,
      joined: new Date()
    },
    {
      id: '3',
      name: 'Lil',
      email: 'l@email.com',
      password: 'grill',
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get('/', (req, res) => {
  res.send("working");
});

app.post('/signIn', (req, res) => {
  if (req.body.email === mockDB.users[0].email && 
    req.body.password === mockDB.users[0].password) {
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
})

app.listen(3000, () => {
  console.log("is up and running");
});