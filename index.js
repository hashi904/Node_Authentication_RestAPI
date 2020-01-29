const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//post の設定
const port = 4000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// you can see json in the chrome window
app.get('/', (request, response)=>{
    response.json({ info: 'starting server!'})
});

//user
//user情報のqueryをimport
const user_db = require('./queries/user_queries');
app.get('/users/', user_db.getUsers)
app.post('/users/', user_db.createUser)

//message on console
app.listen(port, () => {
    console.log(`App running on port ${port}`)
});
