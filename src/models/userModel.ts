import mongoose, { Schema, Document } from 'mongoose';

// interface for user model
export interface IUser extends Document {
    firstName: String,
    lastName: String,
    password: String,
    email: String,
}

//create a schema for user
const userSchema = new Schema<IUser>({
    firstName: {type: String , required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
})

const userModel = mongoose.model("User", userSchema);
export default userModel;
