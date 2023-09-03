"use client";
import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("Home page :p");
  }, []);

  return (
    <div className="flex h-[92vh] items-center justify-center">
      <h1>It is a simple home</h1>
    </div>
  );
}

export default Users;
