# LogidemyBackend
backEnd for logidemy app written in Express and Node

## Getting Started  

bare Express JS server that serves API Calls from MongoDB Database

### Running the server

- replace the Database url in config/db.config.js with your own.
- install the node modules running npm install
- run npm start command to start the server.

### Current API Calls

- server_url/fallacies : will return all the fallacies from the database.
- server_url/fallacies/fallacy_id : will return a specific fallacy from the database.
- server_url/fallacies/ByCategory : will return the fallacies category and in each category an array of the fallacies names and keys of that category.
- server_udl/content/content_name : will return a specific content page from the database.

### Road Map

Implement other API calls : 
- Getting feed posts [second version of the app]

