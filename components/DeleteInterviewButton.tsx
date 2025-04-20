'use client'

import { deleteInterviewWithFeedback } from "@/lib/actions/interview.actions";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner"; // or use any toast/snackbar

type Props = {
  interviewId: string;
  userId: string;
  currentUserId: string;
};

const DeleteInterviewButton = ({ interviewId, userId, currentUserId }: Props) => {
  const router = useRouter();

  if (userId !== currentUserId) return null;

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this interview?");
    if (!confirmDelete) return;

    try {
      await deleteInterviewWithFeedback({ interviewId, userId });
      toast.success("Interview deleted successfully.");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete interview.");
      console.error(error);
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete} className="ml-auto bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-colors duration-200">
      Delete
    </Button>
  );
};

export default DeleteInterviewButton;
