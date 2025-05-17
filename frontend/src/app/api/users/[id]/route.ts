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

// Hàm helper để kiểm tra ID hợp lệ và lấy người dùng
const getUserById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("ID người dùng không hợp lệ");
  }

  const user = await User.findById(id);
  if (!user) {
    throw new Error("Không tìm thấy người dùng");
  }

  return user;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const user = await getUserById(params.id);

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error: unknown) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);

    if (
      error instanceof Error &&
      (error.message === "ID người dùng không hợp lệ" ||
        error.message === "Không tìm thấy người dùng")
    ) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Lỗi khi lấy thông tin người dùng" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    await connectDB();
    const user = await getUserById(params.id);

    // Cập nhật người dùng
    Object.keys(body).forEach((key) => {
      if (body[key] !== undefined) {
        user[key] = body[key];
      }
    });

    await user.save();

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error: unknown) {
    console.error("Lỗi khi cập nhật người dùng:", error);

    if (error instanceof Error) {
      if (error.name === "ValidationError") {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 400 }
        );
      }

      if (
        error.message === "ID người dùng không hợp lệ" ||
        error.message === "Không tìm thấy người dùng"
      ) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: "Lỗi khi cập nhật người dùng" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const user = await getUserById(params.id);

    await user.deleteOne();

    return NextResponse.json(
      { success: true, message: "Người dùng đã được xóa thành công" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Lỗi khi xóa người dùng:", error);

    if (
      error instanceof Error &&
      (error.message === "ID người dùng không hợp lệ" ||
        error.message === "Không tìm thấy người dùng")
    ) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Lỗi khi xóa người dùng" },
      { status: 500 }
    );
  }
}
