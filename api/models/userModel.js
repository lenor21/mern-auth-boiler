import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a text value'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add a text value'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
