const express = require('express')
const router = express.Router()

const { create, show, signup, signin, deleteAll } = require("../controllers/post")

router.post("/post", create)
// router.get("/b", (req, res) => {
//     res.json(
//         { data: "reached2" }
//     )
// })


router.get("/find", show)
// router.get("/b", (req, res) => {
//     res.json(
//         { data: "reached2" }
//     )
// })

router.post("/signup", signup)
router.get("/signin/:email", signin)
router.get("/delete", deleteAll)

module.exports = router;