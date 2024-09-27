import { userApi } from "./api/UserApi.js";
import UserList from "./components/UserList.js";

import "./css/main.css";

async function init() {
  const users = await userApi.getUsers();
  const userList = new UserList(users);
  userList.render();

  document.querySelector("#filter-input").addEventListener("input", (event) => {
    userList.filter(event.target.value);
  });
}

init();
