import express from 'express';
import User from '../model/google-users';

const router = express.Router();

router.post('/google', (req, res) => {
    let token = req.body.googleInfo.profileObj;
    // find data from db using google id
    User.findOne({
        googleId: token.googleId,
    }).then((currentUser) => {
        // if user is in db
        if (currentUser) {
            console.log('user is: ', currentUser);
            res.send(true);
            // if user not in db
        } else {
            new User({
                googleId: token.googleId,
                imageUrl: token.imageUrl,
                email: token.email,
                name: token.name,
                givenName: token.givenName,
                familyName: token.familyName,
            })
                .save()
                // once saved to db
                .then((newUser) => {
                    console.log('new user created: ' + newUser);
                })
                .then(res.send(true));
        }
    });
});

export default router;
