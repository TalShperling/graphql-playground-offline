const express = require("express");
const path = require("path");

const app = express();
const PORT = 5678;

app.use('/@apollographql/graphql-playground-react@1.0.0/build/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Welcome to the Graphql Playground offline CDN');
});

app.listen(PORT, () => {
    console.log(`Offline playground CDN is running on port: ${PORT}`);
});