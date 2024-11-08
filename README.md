
# Perfume Full-Stack Website

A full-stack perfume e-commerce application with features for browsing, reviewing, and managing perfumes. The homepage displays perfume cards that link to detailed pages with full descriptions and user reviews. Built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with MongoDB Atlas for efficient data management.


## Tech Stack

**Client:** ReactJS, CSS, JavaScript

**Server:** Node, Express, MongoDB


## Installation of npm Packages

Install npm of Backend and Frontend

```bash
  cd .\Backend-System\
  npm install
  cd ../frontend
  npm install 
```
## Starting of Servers

```bash
  cd .\Backend-System\
  npm run dev

  cd ../frontend
  npm start 
```
## API Reference

#### Get all Perfumes

```http
  GET /api/perfumes
```


#### Get Perfume by id

```http
  GET /api/perfumes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post new Perfumes

```http
  POST /api/perfumes
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of new perfume |
| `description`      | `string` | **Required**. Description of new perfume |
| `price`      | `number` | **Required**. Price of new perfume |
| `imageUrl`      | `string` | **Required**. Image of new perfume |
| `Reviews`      | `array` |  Reviews about new perfume |

#### Delete Perfume by id

```http
  DELETE /api/perfumes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete All reviews of Particular Perfume

```http
  DELETE api/perfumes/${id}/reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Cors

In this project, CORS (Cross-Origin Resource Sharing) is used to enable secure communication between the backend and frontend, as they are hosted on different origins (URLs). By configuring CORS, we allow the frontend to make HTTP requests to the backend API without encountering cross-origin restrictions. 

```http
  const cors = require('cors')
```
