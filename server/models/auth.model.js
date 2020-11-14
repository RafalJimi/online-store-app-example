const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      default: "man"
    },
    address: {
      type: String,
      default: "",
    },
    postCode: {
      type: String,
      default: "",
      maxlength: 20,
    },
    city: {
      type: String,
      default: ""
    },
    cart: {
      type: Array,
      default: [],
    },
    history: {
      type: Array,
      default: [],
    },
    role: {
      type: Number,
      default: 1,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  generateToken: function (id) {
    
    const token = jwt.sign(
      {
        userID: id
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "60m",
      }
    );
    
    return token
  },
  
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);