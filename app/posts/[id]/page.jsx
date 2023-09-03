import PostPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (res.status !== 200) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="">
      <div className="p-4 ">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-5 text-xs font-extralight">Post No. {params.id}</p>
        <p className="text-base font-light">{post.body}</p>
      </div>
      <hr className="text-center" />
      <h2 className=" pt-10 px-5 text-4xl font-bold">More Posts</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default Page;
