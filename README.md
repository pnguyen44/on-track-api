# On Track

A full stack app that allows users to add, update, and delete to-do items. It was created using Node.js, Express, MongoDB, Mongoose, JavaScript, React, HTML, CSS, and Material-UI.

<img width="1440" alt="on-track app" src="https://i.imgur.com/TAHEaav.png">

## Deployed apps and repositories

| Resource   | URL            |
|------------|----------------|
| client side, deployed    | <https://pnguyen44.github.io/on-track/>             |
| client app repo   | <https://github.com/pnguyen44/on-track>            |
| server api, deployed | <https://on-track-api.herokuapp.com/>            |
| server api repo  | <https://github.com/pnguyen44/on-track-api>    |

## API Endpoints

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/todos`               | `todos#index`     |
| POST   | `/todos`               | `todos#create`    |
| GET    | `/todos/:id`           | `todos#show`      |
| PATCH  | `/todos/:id`           | `todos#update`    |
| DELETE | `/todos/:id`           | `todos#destroy`   |

## Development

### Install Dependencies

```sh
npm install

```

### Start server

```sh
npm run start
```

### Deploy To Heroku

```sh
git push heroku master
```

## Technologies Used

- Front End
  - React JS
  - React Router
  - Javascript
  - Material UI
  - HTML
  - CSS
  - Node Package Manager

- Back End
  - Node.js
  - Express
  - MongoDB
  - Heroku
