export default class UserModel {
  constructor(data) {
    this.avatar = data.avatar_url;
    this.mail = data.email;
    this.id = data.id;
    this.super = data.is_pro;
    this.name = data.name;
  }

  static parseUser(data) {
    return new UserModel(data);
  }
}
