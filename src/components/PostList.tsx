import { Post, User } from "@prisma/client";

interface Props {
  posts: (Post & { author: User | null })[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {posts.map((post, i) => {
        return (
          <div
            key={i}
            className="flex w-full items-center gap-6 rounded-xl border border-zinc-600 py-4"
          >
            <div className="ml-4 flex h-14 w-14 flex-shrink-0 items-center justify-center">
              <img
                src={post.author?.imageUrl || ""}
                alt="avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">{post.author?.name}</h3>
              <p className="text-lg font-light">{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
