const express = require( 'express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());

//ENDPOINTS
app.get("/api/skiers", ctrl.getSkiers);




app.listen(4000, () => console.log('Making it rain on port 4000'));

