## Sequelize

Sequelize is the jslish way of wirting mysql codes, just like mongoose.

in order to use sequelize we initialize in our main file(app.js) like below:

```
sequelize
  // .sync({ force: true })
  .sync()
```

sequelize functions return promise we can handle those promises to get the data we want.

in order to create define tables, we use models.

- in newer versions of sequelize, we use findByPk instead of findById.
