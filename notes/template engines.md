# Template Engines

After accepting request we are supposed to send response back but in order to send html response
we need to build that ppage with html and send then. For this, we need template engines. There
are several template engines, for example pug, handlebars, ejs. All differentiate for their
syntax but configuration of them is the same.
The syntax can be found in their docs.
In order to config our engine, in app file we write the code below:

```
app.set('view engine', 'ejs'); // which engine we are going to use
app.set('views', 'views'); // the folder where the templates will be found
```
