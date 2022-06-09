const Posts = ({posts}) => {
    return(
        <ul className="list-non space-y-4 text-4xl mb-3">
            {posts.data.length > 0 ?
                posts.data.map((post) => {
                    console.log(post)
                    return (
                        <li key={post.id}>
                            <a href={`post/${post.attributes.slug}`}>{post.attributes.title}</a>
                        </li>
                    )
                })
                :
                <li>No Posts</li>
            }
        </ul>
    );
};

export default Posts;