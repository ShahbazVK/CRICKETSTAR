const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    player1Batsman: {
        type: Array,
        trim: true,
        required: true,
    },
    player1Bowler: {
        type: Array,
        trim: true,
        required: true,
    },
    player2Batsman: {
        type: Array,
        trim: true,
        required: true,
    },
    player2Bowler: {
        type: Array,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        required: true,
    },
    tossWon: {
        type: String,
        trim: true,
        required: true,
    },
    team1: {
        type: String,
        trim: true,
        required: true,
    },
    team2: {
        type: String,
        trim: true,
        required: true,
    },
    batFirst: {
        type: String,
        trim: true,
        required: true,
    },
    bowlFirst: {
        type: String,
        trim: true,
        required: true,
    },
    target: {
        type: Number,
        trim: true,
        required: true,
    },
    score: {
        type: Number,
        trim: true,
        required: true,
    },
    firstInningstats: {
        type: Object,
        trim: true,
        required: true,
    },
    secondInningstats: {
        type: Object,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    scoreByBall: {
        type: Array,
        // trim: true,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema)