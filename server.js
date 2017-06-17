var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    endpoints = require('./routes/data/index'),
    holidayslist    = require('./routes/holidayslist'),
    server = express(),
    MongoClient = require('mongodb').MongoClient;


    var dburl = "mongodb://butjaa:admin@ds123182.mlab.com:23182/holidaychecker-db"

    

    MongoClient.connect(dburl, function (err, db) {

     if(err) throw err;

       // db.collection('countries', function (err, collection) {
          //collection.updateMany({},{$set: { "country": "Austria" }})
       // }); 

        
    });

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true
    }));
    server.use(methodOverride());    // simulate DELETE and PUT

    // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    server.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    server.get('/api', endpoints.findAll);
    server.get('/api/:country', endpoints.findByCountry);
    server.delete('/api/:country', endpoints.delete);
    //server.get('/api/:id', endpoints.findById);
    //server.post('/api', endpoints.add);
    //server.put('/api/:id', endpoints.update);
    server.get('/api/:country/:dateFrom/:dateTo', endpoints.findByGivenParams);
    //server.get('/api/search?country={country}&dateFrom={dateFrom}&dateTo={dateTo}', endpoints.findByGivenParams);


    server.set('port', process.env.PORT || 3000);
    server.listen(server.get('port'), function () {
        console.log('Express server listening on port ' + server.get('port'));
    });
