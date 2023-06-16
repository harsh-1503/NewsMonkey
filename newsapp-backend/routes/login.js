const express = require('express')
const app = express();
const router = express.Router();


const {login,signup} = require('../controllers/login')
router.route("/").post(signup).get(login);


module.exports = router