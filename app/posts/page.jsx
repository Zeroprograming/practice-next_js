import PostCard from "@/components/PostCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 10000));

  return data;
}

//  React Server Component
async function PostPages() {
  const posts = await loadPosts();

  return (
    <div className="grid grid-cols-3 gap-[1rem] p-[2rem] rounded-2xl">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostPages;
