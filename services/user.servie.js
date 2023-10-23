const { User } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userModel = User;
  }

  async store(payload) {
    const date = new Date();
    const { name, email, password } = payload;
    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
      // Simpan data pengguna ke database
      const data = await this.userModel.create({
        name,
        email,
        password: encryptedPassword, // Make sure to use the encrypted password here
        createdAt: date,
        updatedAt: date,
      });
      return data;
    } catch (error) {
      // Log the error for debugging
      console.error(error);
      throw error; // Re-throw the error for further handling, or return an appropriate response
    }
  }
}

module.exports = UserService;
