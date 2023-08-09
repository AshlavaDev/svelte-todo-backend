require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.get('/getTodos', async (req, res) => {
  try {
    const todos = await Todo.find();

    if(todos.length > 0) {
      res.status(200).json(todos);
    } else {
      res.status(404).json({ message: 'No todos found' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/createTodo', async (req, res) => {
  try {
    const { content, editing, checked } = req.body;

    const newTodo = new Todo({
      content,
      editing,
      checked,
    });

    const createdTodo = await newTodo.save();

    res.status(201).json(createdTodo);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/updateTodo/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { content, editing, checked } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      _id,
      { content, editing, checked },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(updatedTodo);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/deleteTodo/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(deletedTodo);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});