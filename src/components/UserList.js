import UserCard from "./UserCard.js";

export default class UserList {
  constructor(users) {
    this.users = users;
    this.filteredUsers = users;
  }

  filter(query) {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.phone.includes(query) ||
        user.address.city.toLowerCase().includes(query.toLowerCase())
    );
    this.render();
  }

  render() {
    const container = document.querySelector(".user-list");
    container.innerHTML = "";
    this.filteredUsers.forEach((user) => {
      const userCard = new UserCard(user);
      container.innerHTML += userCard.render();
    });
  }
}
