import express from 'express';
import authRoutes from './routes/auth-routes';
import profileRoutes from './routes/profile-routes';
import mongoose from 'mongoose';
import keys from './config/keys';
import cookieSession from 'cookie-session';
import passport from 'passport';

const passportSetup = require('./config/passport-setup');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey],
    })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// setup routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app now listening for requests on port ${PORT}`);
});
