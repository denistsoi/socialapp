# api (notes)

## notes related to api

### start (offset) & filter
```
http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10
```

### Filtering resources

Basic filtering is supported through query parameters.

```
// Will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json))
```


### Nested resources

One level of nested route is available.
```
// Equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))
```