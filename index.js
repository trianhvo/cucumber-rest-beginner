const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Temporary storage for persons
const persons = [];

// Endpoint to show the request (GET /person)
app.get('/', (req, res) => {
  res.json({ request: req.body });
});

// Endpoint to create a new person (POST /person)
app.post('/', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  const newPerson = { name, age };
  persons.push(newPerson);
  res.json(newPerson);
});

// Endpoint to add 2 to the age (PUT /person)
app.put('/', (req, res) => {
  if (persons.length === 0) {
    return res.status(404).json({ error: 'No persons to update' });
  }

  persons[persons.length - 1].age += 2;
  res.json(persons[persons.length - 1]);
});

// Endpoint to delete the last person (DELETE /person)
app.delete('/', (req, res) => {
  if (persons.length === 0) {
    return res.status(404).json({ error: 'No persons to delete' });
  }

  const deletedPerson = persons.pop();
  res.json(deletedPerson);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
