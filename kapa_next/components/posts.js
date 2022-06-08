const Posts = ({posts}) => {
    return(
        <>
            <ul className="list-non space-y-4 text-4xl font-bold mb-3">
                {posts &&
                    posts.data.map((post) => {
                        console.log(post)
                        return (
                            <li key={post.id}>
                                <a href={`post/${post.attributes.slug}`}>{post.attributes.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default Posts;