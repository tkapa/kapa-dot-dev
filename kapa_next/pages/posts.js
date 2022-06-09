import Layout from "../components/layout";
import { fetcher } from "./api/api";
import Posts from "../components/posts";

const PostList = ({ posts }) => {
    return(
        <Layout>
            <h1 className="text-5xl font-bold">Posts</h1>
            <Posts posts={posts} />
        </Layout>
    )
}

export default PostList;

export async function getStaticProps(){
    const postsResponse = await fetcher(`${process.env.STRAPI_BASE_URI}/posts`);

    return{
        props: {
            posts: postsResponse
        }
    }
}