const express = require('express')
const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
var JefNode = require('json-easy-filter').JefNode;

const app = express()

dotenv.config();

const db = new sqlite3.Database("../solea.db", sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.error(err.message);
})
const exporter = new SqliteToJson({
    client: new sqlite3.Database('../solea.db')
});


let sql = `SELECT SongName,PrdYear,GenreName,Mood FROM SONGS A
    LEFT OUTER JOIN GENRES B ON A.GenreId = B.GenreId`
   
db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    var res = new JefNode(rows).filter(function(node) {
        if (node.has('Mood')) {
            return node.value.Mood;
        }
    });
    console.log(res);

    const moodQuery = JSON.stringify(rows);
    JSON.parse(moodQuery);

    fs.appendFile('./data/moodfilter.json', moodQuery, (err) => {
        if (err)
            throw err;
         });

        
   
  });



exporter.save('SONGS', './data/songs.json', function (err) {
    // no error and you're good.
});

exporter.save('GENRES', './data/genres.json', function (err) {
    // no error and you're good.
});


exporter.all(function (err, all) {
    // all your data here
});



app.get("/songs",(req,res)=>{
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, '/data/songs.json'));
})
app.get("/genres",(req,res)=>{
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, '/data/genres.json'));
})
app.get("/moodfilter",(req,res)=>{
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, '/data/moodfilter.json'));
})



app.listen(5500, ()=>{})