import express from 'express';

const app = express();

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
  res.json("signing in");
})

app.listen(3000, () => {
  console.log("is up and running");
});