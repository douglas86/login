import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './keys';
import User from '../models/user-model';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            // options for the google strategy
            callbackURL: '/auth/google/redirect',
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
        },
        (accessToken, refreshToken, profile, done) => {
            // check if user already exists in our db
            User.findOne({
                googleId: profile.id,
            }).then((currentUser) => {
                if (currentUser) {
                    // already have the user
                    console.log('user is:', currentUser);
                    done(null, currentUser);
                } else {
                    // if not, create user in our db
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        thumbnail: profile._json.picture,
                    })
                        .save()
                        .then((newUser) => {
                            console.log('new user created: ' + newUser);
                            done(null, newUser);
                        });
                }
            });
        }
    )
);
