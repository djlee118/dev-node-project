const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Apple Device');
});

// app.get("/iphone", (req,res) => {
//     res.json({'device' : 'iphone send'});
// });

// app.get("/ipad", (req, res) => {
//     res.json({'device' : 'ipad send'})
// });

app.get('/device/:name', (req,res) => {
    const { name } = req.params;

    if(name == "ipad") {
        res.json({'device' : 'ipad send'});
    } else if(name == "iphone") {
        res.json({'device' : 'iphone send'});
    } else {
        res.json({'device' : 'none'});
    }
});

app.listen(port, () => {
    console.log(`Apple Device App listening on port ${port}`);
});