//1. Fetch all the users

const user_API_URL = "https://jsonplaceholder.typicode.com/users";

const userPromise = fetch(user_API_URL);

userPromise
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
