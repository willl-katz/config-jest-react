import { useCallback, useEffect, useState } from "react";
import { loadPosts } from "../../utils/LoadPosts";
import { Button } from "../utils/Button/Button";

export const TestConvertFunction = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(2);
    const [searchValue, setSearchValue] = useState("");

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue
        ? allPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        : posts;

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPosts = await loadPosts();
        setPosts(postsAndPosts.slice(page, postsPerPage));
        setAllPosts(postsAndPosts);
    }, [])

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    return (
        <div>
            {!!searchValue && (
                <>
                    <h1>You are Searching: {searchValue}</h1>
                    <br />
                    <br />
                </>
            )}
            <input
                type="search"
                onChange={handleChange}
                value={searchValue}
            />
            <br />
            <br />
            <br />
            {filteredPosts.length > 0 &&
                posts.map((post) => {
                    return (
                        <div className="post" key={post.id}>
                            <img src={post.cover} alt={post.title} />
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    );
                })}
            {filteredPosts.length === 0 && <p>Posts Nou Found 😥</p>}
            {!searchValue && (
                <Button
                    text="Oha o Macaco!"
                    onClick={loadMorePosts}
                    disabled={noMorePosts}
                />
            )}
        </div>
    );
};
