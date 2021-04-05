import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './keys';

passport.use(
    new GoogleStrategy(
        {
            // options for the google strategy
            callbackURL: '/auth/google/redirect',
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
        },
        (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log('passport callback function fired');
            console.log(profile);
        }
    )
);
