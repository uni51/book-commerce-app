import { NextResponse } from "next/server";

//購入履歴の保存
export async function POST(request: Request, response: Response) {
  try {
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
