const express = require('express');
const app = express();
const path = require('path');

// Setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use("/assets",express.static('assets'));

app.get('/', (req, res) => {
    res.render('index',);
})


// App listen 
app.listen(3000, () => {
    console.log('App running on port 3000');
})