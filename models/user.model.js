const {Schema, model, Types} = require("mongoose")

const UserSchema = new Schema ({
    username: {type:String, required:true, trim: true },
    name: {type: String, required: true, trim:true, minLength: 3},
    passwordHash: {type: String, required:true, trim:true, minLength: 3},
    blogs:[{ type:  Types.ObjectId, ref: "Blog"}]
})

const UserModel = model("User", UserSchema);
module.exports = UserModel;