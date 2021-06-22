# API Usage

We have built a super simple, easy to user, GraphQl API playground for you to test and make your own app with our API. API is available at [https://codehouse-api.herokuapp.com/](https://codehouse-api.herokuapp.com/)

Here are some examples for you to get started ✌️

## Example Code with `Fetch`

```js
fetch("https://codehouse-api.herokuapp.com/", {
  method: "POST",
  body: JSON.stringify({query: "{
    cheatsheets(sort: popular){
      cheatsheet_name
      website_url
    }
  }"}),
}).then((response)=> {
  console.log(response.data)
}).catch((error)=> {
  error.message
})
```

Here are some available types, make sure to have a visit to the playground because it is worth 🤗

---

### Get Top Cheatsheets

```
{
  cheatsheets(sort: popular){
    cheatsheet_name
    website_url
  }
}
```

### Get Latest Cheatsheets

```
{
  cheatsheets(sort: newest){
    cheatsheet_name
    website_url
  }
}
```

### Get All Categories

```
{
  categories{
    id
    name
  }
}
```

### Get Cheatsheets of a Category

```
{
  category(name: "html"){
    cheatsheet_name
    website_url
  }
}
```

### Get All Sources

```
{
  sources{
    hostname
    cheatsheets_count
  }
}
```

### Get Cheatsheets from a Source

```
{
  source(from: "medium.com"){
    cheatsheet_name
    upvotes
  }
}
```

### Get All Cheatsheets on Review

```
{
  review{
    cheatsheet_name
    website_url
  }
}
```

### Get Contents of a particular Cheatsheet

```
{
  cheatsheet(id: "63971e87ed4f4deb89e7777d2b3a6862") {
    cheatsheet_name
    description
    cover_image
  }
}
```

### Get All Contributors

```
{
  contributors {
    displayName
    email
    photoURL
  }
}

```

### Get All Feature Requests

```
{
  featureRequests {
    title
    description
    upvotes
  }
}
```
