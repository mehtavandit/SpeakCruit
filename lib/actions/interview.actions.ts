'use server'

import { db } from "@/firebase/admin";



export const deleteInterviewWithFeedback = async ({
  interviewId,
  userId,
}: {
  interviewId: string;
  userId: string;
}) => {
  // Delete feedback if exists
  const feedbackRef = await db
    .collection("feedback")
    .where("interviewId", "==", interviewId)
    .where("userId", "==", userId)
    .get();

  feedbackRef.forEach((doc) => doc.ref.delete());

  // Delete interview
  await db.collection("interviews").doc(interviewId).delete();

  return { success: true };
};
