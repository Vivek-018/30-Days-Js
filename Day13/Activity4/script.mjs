// Task6
import _ from "lodash";

const array = [1, 2, 2, 2, 4, 4, 5, 5, 5, 6, 7, 9];
const uniquarray = _.uniq(array);
console.log(uniquarray);

// Task7
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
