const express = require('express');
const app = express();

const routes = require('./Routes')

app.use(express.json());
app.use(routes);


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})