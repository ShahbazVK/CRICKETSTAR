const Post = require('../models/post');
const Credentials = require('../models/credentials');
exports.create = (req, res) => {
    console.log(req.body);
    const { player1Batsman, player2Batsman, player2Bowler, player1Bowler, message, tossWon, team1, team2, batFirst, target, score, bowlFirst, firstInningstats, secondInningstats, email, scoreByBall } = req.body;
    Post.create({ player1Batsman, player2Batsman, player2Bowler, player1Bowler, message, tossWon, team1, team2, batFirst, target, score, bowlFirst, firstInningstats, secondInningstats, email, scoreByBall }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "Error is here..." })
        }
        res.json(post)
    })
}

exports.show = (req, res) => {
    // console.log(req.body);
    // const { player1Batsman, player2Batsman, player2Bowler, player1Bowler, message, tossWon, team1, team2, batFirst, target, score, bowlFirst, firstInningstats, secondInningstats } = req.body;
    Post.find({}, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "Error is here..." })
        }
        res.json(post)
    })
}

exports.signup = (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    Credentials.create({ email, password }, (err, post) => {
        if (err) res.json({ error: "Account already found by this email" });
        else res.json(post)
    })
}

exports.signin = (req, res) => {
    console.log(req.params);
    Credentials.findOne({ email: req.params.email }, (err, post) => {
        if (err) console.log(err);
        else res.json(post);
    })
}

exports.deleteAll = (req, res) => {
    Post.deleteMany({}, (err, post) => {
        if (err) console.log(err);
        else console.log(post);
    })
}