import { likeQuestion } from "@/app/actions/questions";


type LikeButtonProps = {
    questionId: number;
    likes: number;
};


export default function LikeButton({
    questionId,
    likes,
}: LikeButtonProps) {
    return (
        <form
            action={likeQuestion.bind(null, questionId)}
        >
            <button
                className="mt-4 border rounded-lg px-4 py-2 hover:bg-gray-100 transition"
            >
                ❤️ {likes}
            </button>
        </form>
    );
}