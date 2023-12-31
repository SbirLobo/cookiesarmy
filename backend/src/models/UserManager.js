const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUser(id) {
    return this.database.query(
      `select firstname, lastname, email, admin from  ${this.table} where id = ?`,
      [[id]]
    );
  }

  findAllUser() {
    return this.database.query(
      `select firstname, lastname, email, admin from  ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, admin ) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.admin,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ?, admin = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.admin,
        user.id,
      ]
    );
  }

  findByMail(user) {
    return this.database.query(`select * from ${this.table} where email= ?`, [
      user.email,
    ]);
  }
}

module.exports = UserManager;
