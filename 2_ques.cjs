//2.Fetch all the todos
const todos_API_URL = "https://jsonplaceholder.typicode.com/todos";

const todosPromise = fetch(todos_API_URL);

todosPromise
  .then((response) => {
    if (!response) {
      throw err;
    }

    return response.json();
  })
  .then((object) => {
    console.log(object);
  })
  .catch((err) => {
    console.log("Error fetching users :", err);
  });
