const qs = require('qs');
const axios = require('axios');
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
// Setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use("/assets",express.static('assets'));

// app.get('/', (req, res) => {
//     res.render('index',);
// })


// App listen 
app.listen(3000, () => {
    console.log('App running on port 3000');
})





//  Added Code

/* GET home page. */
app.get('/', (req, res) => {
  res.render('index',);
});

/* GET about page. */
app.get('/about', (req, res) => {
  res.render('about',);
});

/* GET yet page. */
app.get('/login', (req, res) => {
  res.render('yet',);
});

app.get('/GetTokenAndSubdomain', function(req, res) {
    try {
        var config ={
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
        var data = {
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            resource: 'https://cognitiveservices.azure.com/'
        };
        var url = `https://login.windows.net/${process.env.TENANT_ID}/oauth2/token`
        // console.log(qs.stringify(data));
        axios.post(url, qs.stringify(data), config)
        .then(function (response) {
            console.log(response.data);
            var token = response.data.access_token;
            var subdomain = process.env.SUBDOMAIN;
            return res.send({token, subdomain});
        })
        .catch(function (response) {
            if (response.status !== 200) {
                return res.send({error :  "Unable to acquire Azure AD token. Check the debugger for more information."})
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send('CogSvcs IssueToken error');
    }
});

// module.exports = app;