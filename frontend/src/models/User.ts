import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên"],
      maxlength: [60, "Tên không được vượt quá 60 ký tự"],
    },
    email: {
      type: String,
      required: [true, "Vui lòng nhập email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Vui lòng nhập một địa chỉ email hợp lệ",
      ],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Nếu mô hình đã tồn tại, sử dụng lại nó; nếu không, tạo mới
export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
