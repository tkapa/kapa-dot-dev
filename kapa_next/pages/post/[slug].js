import Layout from "../../components/layout";
import markdownToHtml from "../../lib/markdownToHtml";
import { fetcher } from "../api/api";

const Post = ({ post, content }) => {
    return(
        <Layout>
            <h1>{post.attributes.title}</h1>
            <div classNmae='tracking-wide font-normal text-sm' 
                dangerouslySetInnerHTML={{__html: content}}></div>
        </Layout>
    )
}

export default Post;

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const postResponse = await fetcher(`${process.env.STRAPI_BASE_URI}/slugify/slugs/post/${slug}`);
    const content = await markdownToHtml(postResponse.data.attributes.content);

    return{
        props: {
            post: postResponse.data,
            content
        }
    }
}