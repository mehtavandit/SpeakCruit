import { NextRequest, NextResponse } from "next/server";
import { createFeedback } from "@/lib/server/createFeedback";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { interviewId, userId, transcript, feedbackId } = body;

    if (!interviewId || !userId || !transcript) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const result = await createFeedback({ interviewId, userId, transcript, feedbackId });

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
