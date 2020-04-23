# notes

## task:

1. Given the public API: `https://jsonplaceholder.typicode.com`
2. Write a UI using React Native
3. Native modules(Java/Kotlin/Objective-C/Swoft) integration
4. Put the code into a GitHub repository and provide us with how to start the application
5. Please, provide your submission as quickly as possible.

---

### 1. What's the judging criteria?

```
  A. Cleanness of code
  B. Ease of use/navigation
  C. Look and feel
  D. Creativeness
```

### 2. What should it contain?

It is a simple social network app.  
Users have posts and photo albums and a todo listPosts have comments. Photo albums have photos.

We don't want to be too restrictive regarding how the data gets presented

An example app could look like (but is not restricted to):

```
A. Have a top level list of users.
B. Click a user widget and get to the user details page.
C. Have another button to show the address
D. Have a section for photo album
E. Have a section for todo's
F. Have a section for posts.
G. Each section navigates to the respective details view.
H. Navigating back up the UI tree should be possible.
```

## todos:

- [x] ensure tsconfig is setup
- [x] setup eslint-rules
- [x] setup prettier
- [x] setup husky and precommits
- [x] setup jest (already brought in)

### api

- [x] look at what data is brought from the api
- [ ] implement in memory cache
- [ ] implement offset/limit for jsonplaceholder

- implement endpoints for
  - [ ] `/posts`
  - [ ] `/comments`
  - [ ] `/albums`
  - [ ] `/photos`
  - [ ] `/todos`
  - [ ] `/users`

### setup storybook for component development

- [x] setup tooling
- [ ] sort components based on use and include stories within each component folder (perhaps i should add in root alias)

### todo

- [x] handle navigation (use react-navigation/native)

### components

- [ ] card (pass in props to adjust card)
- [ ] `/photos` photo / photo album
- [ ] `/todos` todos list
- [ ] nav buttons
- [x] will probably need a react stack navigator
  - [ ] need to have a better frontend design for this

### views

- [ ] top list of users `/users`
- [ ] user details
- [ ] `\posts` posts
- [ ] `\comments`
- [ ] `\albums` photo album
- [ ] `\photos`
- [ ] `\todos` todos
- [ ] `\users\` address

### nice to have:

- [ ] offline?
- [ ] look at some bridging components, perhaps the camera: photo gallery
