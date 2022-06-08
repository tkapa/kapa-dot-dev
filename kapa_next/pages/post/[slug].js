import Layout from "../../components/layout";
import { fetcher } from "../api/api";

const Post = ({ post }) => {
    return(
        <Layout>
            <h1>{post.attributes.title}</h1>
            <div>
                {post.attributes.content}
            </div>
        </Layout>
    )
}

export default Post;

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const postResponse = await fetcher(`${process.env.STRAPI_BASE_URI}/slugify/slugs/post/${slug}`);

    console.log(postResponse);

    return{
        props: {
            post: postResponse.data
        }
    }
}