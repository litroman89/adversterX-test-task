export default class UserCard {
  constructor(user) {
    this.user = user;
  }

  render() {
    return `
            <li class="user-card">
                <div class="user-card__name">Name: ${this.user.name}</div>
                <div class="user-card__phone">Phone: ${this.user.phone}</div>
                <div class="user-card__city">City: ${this.user.address.city}</div>
            </li>
        `;
  }
}
