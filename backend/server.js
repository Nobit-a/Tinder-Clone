import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './cardFormat.js'


// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://Admin:zW9j1qado4zeXgYu@cluster0.nvcxo.mongodb.net/tinderdatabase?retryWrites=true&w=majority'

// Middlewares
app.use(express.json()); 
app.use(Cors());

// Database config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


// API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

app.post('/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    })
});

app.get('/cards', (req, res) => {

    Cards.find((err, data) => {
        if (err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    })
});


// Listener
app.listen(port, () => console.log("Listening on localhost: " + port));

