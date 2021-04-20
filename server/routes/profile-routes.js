import express from 'express';
import User from '../model/regular-users';
import bcrypt from 'bcrypt';
import fs from 'fs';
import Memory from '../model/memory';

const router = express.Router();

router.post('/memories', (req, res) => {
    let token = req.body.User;
    let username = req.body.username;
    new Memory({
        username: username,
        title: token.title,
        message: token.message,
        tags: token.tags,
    })
        .save()
        .then((newUser) => {
            console.log('Saved new Memory to db: ' + newUser);
        })
        .catch((err) => console.log(err));
});

router.get('/', (req, res) => {
    let rawdata = fs.readFileSync('user.json');
    let user = JSON.parse(rawdata);
    res.send(user);
});

router.get('/login/:username/:password', (req, res) => {
    let token = req.params;
    User.findOne({
        username: token.username,
    }).then((currentUser) => {
        if (currentUser) {
            bcrypt.compare(
                token.password,
                currentUser.password,
                (err, result) => {
                    if (result) {
                        let user = {
                            username: token.username,
                        };
                        let data = JSON.stringify(user);
                        fs.writeFileSync('user.json', data);
                        res.send(result);
                    } else {
                        res.send(result);
                    }
                }
            );
        } else {
            console.log('Please register as a user');
        }
    });
});

export default router;
