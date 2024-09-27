export class userApi {
  static async getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  }
}
