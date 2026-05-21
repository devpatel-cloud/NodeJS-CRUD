const express = require('express');


const app = express();


// Simple route

app.get('/', (req, res) => {

    res.json({

        message: "Azure VM + Nginx + CI/CD project working successfully"

    });

});


// Start server

app.listen(3000, () => {

    console.log("Server is listening on port 3000");

});
