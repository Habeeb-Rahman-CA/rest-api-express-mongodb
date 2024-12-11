const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add your user name"]
    },
    email: {
        type: String,
        required: [true, "Please add user email"],
        unique: [true, "Email address aleardy taken"]
    },
    password:{
        type: String,
        required: [true, "Please add user password"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)