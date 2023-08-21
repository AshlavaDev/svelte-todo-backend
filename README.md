# Svelte Full-stack Todo App - Back end

## Author: Ashley Morgan

### Purpose: A simple backend for the Svelte Todo App

### Keywords: Backend, Express, MongoDB, Mongoose, CORS, Cyclic, Postman

### Description

This relatively simple back-end project uses basic GET, POST, PUT, and DELETE functionality that
are common in CRUD applications. CORS was added to allow for proper header access from the front end,
and the project was deployed on Cyclic (see links below) after being tested locally using Postman.

That particular service was used to deploy the back end as previous attempts to build this project failed
at the deploy stage, mostly due to serverless functions being required by other hosting services that are
not built for back end projects. After some research and one very useful tutorial, Cyclic was deemed the
better option and code therefore works both locally for testing as well as in a deployed state.

### Limitations

Like all free services, API calls are limited to a set number, although since this is part of a portfolio
project and not a public service, it should not be too much of an issue.

## Links

- ### [Cyclic deployment](https://panicky-erin-rabbit.cyclic.app/)
Run https://panicky-erin-rabbit.cyclic.app/getTodos to fetch database or go to project
- ### [Svelte Todo Deployed](https://ashley-svelte-todo.netlify.app/)
- ### [Svelte Todo Repo](https://github.com/AshlavaDev/sveltekit-todo-app)
- ### [Cyclic Tutorial](https://www.youtube.com/watch?v=Uj2Iq8TCQVE)