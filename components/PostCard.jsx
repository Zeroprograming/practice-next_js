"use client";
import Link from "next/link";

// React Client Component
function PostCard({ post }) {
  return (
    <div className="bg-gray-950 p-10 rounded-3xl">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}.{post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <div className="text-center mt-2">
        <Link href={`/posts/${post.id}`} passHref>
          <button className="bg-slate-700 text-slate-100 px-2 py-1 rounded mt-4 w-[60%]">
            Click
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
