const express = require('express');
const app = express();



app.use(express.static('public'))


// app.get('/', (req, res) => {
//     res.end('works');
// })


app.listen(3000, () => {
    console.log(`servidor iniciado http://localhost:3000`);

});
