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
