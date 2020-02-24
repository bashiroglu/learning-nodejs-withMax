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
