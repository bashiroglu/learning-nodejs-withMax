# Node app

- in this kinda applications we can use query params to render different pages in the same route

```
<a href="/admin/edit-product/<%= product.id %>?edit=true" class="btn">Edit</a> //engine code
```

then we can extract that param like below:

```
const editMode = req.query.edit; // not in body
```

we also use query param to request different routes

```
<form class="product-form" action="/admin/<% if (editing)
{ %>edit-product<% } else { %>add-product<% } %>" method="POST"> //engine code
```

when we use html form to delete something, in oreder to add extra data to our body we use hidden input, as below:

```
<input type="hidden" value="<%= product.id %>" name="productId">
```

- If we want to use, mysql in node app, we need to config first as below:

```
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'password'
});

module.exports = pool.promise();// we return promise 
```
Then we can consume this promise to get extract data.