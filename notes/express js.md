## Express JS framework

1. In express we can use middleware to parse body. For that we need to install body-parser and register it as a middleware.

```
const body-parser=require('body-parser');
app.use(body-parser.urlencoded({extended: false}))
```

after this middle ware we will get our req.body as a js object and we can use it for our need.

2. If we want to 404 page, we can use the code below

```
//our route after all files
app.use(function) //Ourfunction which displays the 404 page
```

3. We can send html file by using res.sendFile function. But in order to send other files which that html file need such as css or js files, we need to serve them statically. For that we need to have folder which contains our accessable files to frontend and that folder will be allowed to access as a exception.
   For that we need tell our app in our main file.

```
app.use(express.static(path.join(__dirname, 'public')));
```

4. In order to send user to auth code which will be used to detect him or her in out application we need to use cookies, for cookies we can use the pack below: 
`const session = require('express-session');` then we can can store the cookie in our db for different porpuses. 
`const MongoDBStore = require('connect-mongodb-session')(session);`


5. 
