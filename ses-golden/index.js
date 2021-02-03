const AWS = require("aws-sdk"); // Load the SDK for JavaScript
const mailer = require("./mailer");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

// Load your AWS credentials and try to instantiate the object.
AWS.config.loadFromPath(__dirname + '/config.json');

// Our end-point for handling the enquiry request
app.post("/verify", (req, res, next) => {
    return mailer
        .sendMail("app.golden.publicidade@gmail.com", req.body.email, req.body)
        .then(() => res.send(req.body))
        .catch(next);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
