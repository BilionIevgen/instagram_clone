import React from "react";
import { useParams } from "react-router";
import { MorePostsFromUser } from "../components/post/MorePostsFromUser";
import { Post } from "../components/post/Post";
import { Layout } from "../components/shared/Layout";

// path="/p/:postId" 
function PostPage() {
  const {postId} = useParams()
  return <Layout>
    <Post postId={postId} />
    <MorePostsFromUser/>
  </Layout>;
}

export default PostPage;
