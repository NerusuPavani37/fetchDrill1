// Use the promise chain and fetch the users first and then the todos.

const user_API_URL = "https://jsonplaceholder.typicode.com/users";

const userPromise = fetch(user_API_URL);

userPromise
  .then((response) => {
    if (!response) {
      throw err;
    }
    return response.json();
  })
  .then((data) => {
    let idsArray = data.map((obj) => {
      return obj.id;
    });
    idsArray.forEach((ele) => {
      userId = `https://jsonplaceholder.typicode.com/users?id=${ele}`;
      const idPromise = fetch(userId);
      idPromise
        .then((response) => {
          if (!response) {
            throw err;
          }
          return response.json();
        })
        .then((obj) => {
          console.log(`${obj[0].name} =`, obj);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  })
  .catch((err) => {
    console.error(err);
  });
