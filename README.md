#Order Lunch

####A simple application which allows to order lunch, and manage orders

* New User Account Creation
* Secure Password Reset via Email
* Ability to Update / Delete Account
* Session Tracking for Logged-In Users
* Local Cookie Storage for Returning Users
* Blowfish-based Scheme Password Encryption
* Place order for lunch
* List all previous orders with their status (currently only two statuses: not accepted and accepted)
* Administrator is able to manage orders, marking them as accepted

***

####Order-Lunch is built on top of the following libraries :

* [Node.js](http://nodejs.org/) - Application Server
* [Express.js](http://expressjs.com/) - Node.js Web Framework
* [MongoDb](http://www.mongodb.org/) - Database Storage
* [Node Mongo Native](https://github.com/mongodb/node-mongodb-native) - Node.js MongoDB adapter
* [Node Mongo Join](https://github.com/cbumgard/node-mongo-join) - Node.js MongoDB document joiner
* [Jade](http://jade-lang.com/) - HTML Templating Engine
* [Stylus](http://learnboost.github.com/stylus/) - CSS Preprocessor
* [EmailJS](http://github.com/eleith/emailjs) - Node.js > SMTP Server Middleware
* [Moment.js](http://momentjs.com/) - Lightweight Date Library
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - UI Component & Layout Library

***

####Installation & Setup
This assumes you already have node.js & npm installed.
```
git clone git@github.com:Malgin/order-lunch.git order-lunch
cd node-login
npm install -d
node app
```

Questions and suggestions for improvement are welcome.
