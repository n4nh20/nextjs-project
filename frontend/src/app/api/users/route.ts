import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";

// Kết nối tới MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Vui lòng thêm biến môi trường MONGODB_URI vào tệp .env.local"
    );
  }

  await mongoose.connect(process.env.MONGODB_URI);
};

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi khi lấy danh sách người dùng" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, message: "Vui lòng cung cấp tên và email" },
        { status: 400 }
      );
    }

    await connectDB();

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email đã được sử dụng" },
        { status: 400 }
      );
    }

    const user = await User.create(body);

    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error: any) {
    console.error("Lỗi khi tạo người dùng:", error);

    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Lỗi khi tạo người dùng" },
      { status: 500 }
    );
  }
}
