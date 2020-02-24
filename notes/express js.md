## Express JS framework

1. In express we can use middleware to parse body. For that we need to install body-parser and register it as a middleware.

```
const body-parser=require('body-parser');
app.use(body-parser.urlencoded({extended: false}))
```
after this middle ware we will get our req.body as a js object and we can use it for our need.

2. If we want to 404 page, we can use the code below
//our route after all files
```
app.use(function) //Ourfunction which displays the 404 page
```