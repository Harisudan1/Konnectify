 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
 
mongoose.connect('mongodb+srv://71762134019:<Harisudan>@cluster0.smn0sbb.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

 
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Form = mongoose.model('Form', formSchema);

app.use(bodyParser.json());
 
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
   
    const formEntry = new Form({ name, email, message });
   
    await formEntry.save();
    res.json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
