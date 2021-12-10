
[https://dfrank.herokuapp.com/](https://dfrank.herokuapp.com/)

### Packages used

```md
apollo-server-express, apollo/client, graphql, 
react, react-dom, react-router-dom, react-scripts.
mongoose, mongodb-js/charts-embed-dom
mui/material, mui/x-data-grid
arpad, dotenv
```

1,665 days May 5, 2017 - November 25, 2021


## TODO

('-__v') exclude version key
  //mongoose.set('debug', true);


[] figure out grouping searches


[options.timestamps=null] «Boolean» If set to false and schema-level timestamps are enabled, skip timestamps for this update. Note that this allows you to overwrite timestamps. Does nothing if schema-level timestamps are not set.

    "graphql": "experimental-stream-defer",


### Problems

[] MUI datagrid date sorting with many pages

[] Fight.aggregate().search({ 
      "message": "Unrecognized pipeline stage name: '$search'",

[] Pagination apollo? mongo? graphql?
relay?

[] Renaming the fields
timeOf = t
winnerName = wN
loserName = lN
winnerClan = wC
loserClan = lC
killorGank = kg
killNumber = kN
loserRank = lR
winnerRank = wR
before avg doc size:231.2B total 250.4 MB
after. avg doc size:163.2B total 176.7 MB


## performance
  ?useGETForQueries: slightly faster?
  


## Things to remember
 unique_data = [...new Set(someVar)];
 -- may want to remove default buildpack from heroku

 ## Heroku
runs install > runs build > start
- sets production by default
prunes dev dep's in production

## Mongo mongoose
mongoose.set('debug', true);
### id && _id
id is a virtual string version of _id.
both are enabled by default.


### Lists/Arrays Mongo/mongoose
$addToSet does NOT add the list/array if it already contains it,
$push will add the given object to field whether it exists or not.

## Mongo Schema order matters

A Procfile is not required to run Apollo Server on Heroku. If you don't provide a Procfile, attempts to run the start script that's defined in your root package.json file.