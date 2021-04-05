import express from 'express';
import authRoutes from './routes/auth-routes';
import mongoose from 'mongoose';
import keys from './config/keys';

const passportSetup = require('./config/passport-setup');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// setup routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app now listening for requests on port ${PORT}`);
});
