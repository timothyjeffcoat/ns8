# ns8
NS8 Assessment project

The database is in-memory only

# How to run this project
   npm install
   
   npm start

# How to run unit tests
   
   You can also look in the controller.specs.ts to identify routes.
   
   npm run test
   
# Routes
    
     /users (post) -- adds a user to the database
     {
       "email": "test2@ns8.com",
       "password": "passwordIsPizza",
       "phone": "333-222-1111"
     }

    
    * /users (get) -- gets all of the users in the database

    * /user/:email (delete) -- remove one user from database based on email address

    * /events/all (get) -- get all events
    
    * /events/:email (get) -- get all events for given email
    
    * /lastdayevents  (get) -- get all events for the last 24 hours
    
