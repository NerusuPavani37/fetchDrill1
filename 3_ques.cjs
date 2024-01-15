// Use the promise chain and fetch the users first and then the todos.

const user_API_URL = "https://jsonplaceholder.typicode.com/users";

const userPromise = fetch(user_API_URL);

const todos_API_URL = "https://jsonplaceholder.typicode.com/todos";

const todosPromise = fetch(todos_API_URL);

userPromise
  .then((response) => {
    if (!response) {
      throw err;
    }
    return response.json();
  })
  .then((object) => {
    console.log(object);

    return todosPromise;
  })
  .then((response1) => {
    if (!response1) {
      throw err;
    }
    return response1.json();
  })
  .then((object1) => {
    console.log(object1);
  })
  .catch((err) => {
    console.error(err);
  });
