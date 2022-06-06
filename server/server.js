/**
 * @author server
 * @description server file for accessing express and cors 
 * @date 2022-06-03
 * 
 * last change date  2022-06-03 (start of project)
 */

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// obtain driver connection for database object
const dbo = require('./dbo/conn');

app.listen(port, () => {
    // Connect to database whenever server starts 
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`server started on port: ${port}`);
})