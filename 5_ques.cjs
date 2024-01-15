//Use the promise chain and fetch the first todo. Then find all the details for the user that is associated with that todo

const todos_API_URL = " https://jsonplaceholder.typicode.com/todos";

const todosPromise = fetch(todos_API_URL);

todosPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let firstTodo = data[0];
    let userId = firstTodo.userId;
    let idUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    const idUrlPromise = fetch(idUrl);

    idUrlPromise
      .then((response1) => {
        return response1.json();
      })
      .then((obj) => {
        console.log(obj);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
