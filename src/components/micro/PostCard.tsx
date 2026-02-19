import { Link, useNavigate } from "react-router-dom";
import type { PostType, PostStatus } from "../../types";
import ReadTime from "../ReadTime";

type Props = {
  index: number;
  isTrash?: boolean;
  post: PostType;
  postStatus?: PostStatus;
  toggleArchive?: (postId: string, status: PostStatus) => void | Promise<void>;
  moveToTrash?: (postId: string) => void | Promise<void>;
  handlePermanentDelete?: (postId: string) => void | Promise<void>;
  handleMoveToArchive?: (postId: string) => void | Promise<void>;
};

const PostCard = ({
  index,
  isTrash,
  post,
  postStatus,
  toggleArchive,
  moveToTrash,
  handlePermanentDelete,
  handleMoveToArchive,
}: Props) => {
  const { id } = post;
  const navigate = useNavigate();

  return (
    <article className="bg-white rounded-lg shadow-md md:p-6 p-3 hover:shadow-lg transition">
      <span className="text-blue-600 font-bold">{index + 1}.</span>
      <h2 className="md:text-xl font-semibold mb-2">
        {post?.status === "published" ? (
          <Link to={`/articles/${post?.slug}`} className="underline">
            {post?.title}
          </Link>
        ) : (
          post?.title
        )}
      </h2>

      <p className="text-gray-600 text-sm mb-3 max-h-10 truncate">
        {post?.excerpt}
      </p>
      <div className="flex flex-wrap items-center md:gap-3 gap-2">
        <p className="text-sm text-gray-500">
          Created: {post?.createdAt.toDate().toLocaleDateString()}
        </p>
        {post?.published && (
          <p className="text-sm text-gray-500">
            Published: {post?.publishedAt.toDate().toLocaleDateString()}
          </p>
        )}
        <ReadTime textColor="black" content={post?.content} />
      </div>

      <div className="flex gap-2 items-end py-2">
        {isTrash ? (
          <>
            <button
              type="button"
              className="p-2 rounded-lg text-sm min-w-20 cursor-pointer border border-[#e1d3b6]"
              onClick={() =>
                handleMoveToArchive && handleMoveToArchive(post?.id)
              }
            >
              Move to Archive
            </button>
            <button
              type="button"
              className="p-2 rounded-lg text-sm min-w-20 cursor-pointer border border-[#e1d3b6]"
              onClick={() =>
                handlePermanentDelete && handlePermanentDelete(post?.id)
              }
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="p-2 rounded-lg text-sm min-w-20 cursor-pointer border border-[#e1d3b6]"
              onClick={() =>
                navigate(`/admin/editor/${post?.id}`, { state: { postStatus } })
              }
            >
              Edit
            </button>

            <button
              type="button"
              className="p-2 rounded-lg text-sm min-w-20 cursor-pointer border border-[#e1d3b6]"
              onClick={() =>
                toggleArchive && postStatus && toggleArchive(id, postStatus)
              }
            >
              {postStatus === "published" ? "Archive" : "Post"}
            </button>

            <button
              type="button"
              className="p-2 rounded-lg text-sm min-w-20 cursor-pointer border border-[#e1d3b6]"
              onClick={() => moveToTrash && moveToTrash(id)}
            >
              Trash
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default PostCard;
