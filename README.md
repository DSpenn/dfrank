
[https://dfrank.herokuapp.com/](https://dfrank.herokuapp.com/)

## Description

Archive, timeline, and attempted elo ranking for Darkfall rise of agon metrics player kill/death ratio.
[https://www.riseofagon.com/ ](https://www.riseofagon.com/ ).

I created this out of curiosity, player kill/death / win/loss data is publicly available here [https://www.riseofagon.com/agonmetrics/pvp/global](https://www.riseofagon.com/agonmetrics/pvp/global/).
I wanted more than 21,666 pages of data. 



1,670 days May 5, 2017 - November 30, 2021
unfortunately as of November 30th 2021 the metrics website is no longer updating data. 


## Features
```
[X] mui datagrid for every character 
[X] Timeline of game's activity levels based on fight count and unique name count
[X] Searching for a character 
```


## Rankings 
the Elo rankings should be taken with a grain of salt, 
 After 60 days of inactivity a character goes to storage, their name on the metrics becomes "missing no. "
      if they ever log in again, the 'lost data' changes from "missing no." to whatever their name was/is.
      As of 11/30/21 about half the fights involve a 'missing no.' character 

<details>
  <summary> is it really that bad? </summary> 

  ```
  Global PVP kill count 916,385
  Global PVP gank count 166,883
                total 1,033,268
{ "winnerName" : /.*missingno.*/ }         526,167
{ "loserName" : /.*missingno.*/ }          602,367
 ```
</details>

### Packages used

```md
apollo-server-express, apollo/client, graphql, mongoose
react, react-dom, react-router-dom, react-scripts.
mui/material, mui/x-data-grid
arpad, dotenv
```

### Project reqs

Use React for the front end.
Use GraphQL with a Node.js and Express.js server.
Use MongoDB and the Mongoose ODM for the database.