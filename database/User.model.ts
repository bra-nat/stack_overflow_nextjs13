import {Schema, models, model, Document} from "mongoose";

export interface IUser extends Document {
    clarkId: string;
    username: string;
    picture: string;
    name: string;
    email: string;
    password?: string;
    bio?: string;
    location?:string;
    portfoliowebsite: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;
}
const UserSchema = new Schema({
    clarkId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    picture: { type: String, required: true  },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String },
    bio: { type: String },
    location: { type: String },
    portfoliowebsite: { type: String, required: true },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: "Question" }], 
    joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model('User', UserSchema);

export default User;
