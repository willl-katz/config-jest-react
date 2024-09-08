import { Component } from "react";
import { loadPosts } from "../../utils/LoadPosts";
import { Button } from "../utils/Button";

export default class TestByClass2 extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 2,
        searchValue: "",
    };

    // Monta o component
    async componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response) => response.json())
        //     .then((posts) => this.setState({ posts }));

        const { page, postsPerPage } = this.state;

        const photosAndPosts = await loadPosts();
        this.setState({
            posts: photosAndPosts.slice(page, postsPerPage),
            allPosts: photosAndPosts,
        });
    }

    loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        this.setState({ posts, page: nextPage });
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value });
    };

    render() {
        const { posts, searchValue, page, postsPerPage, allPosts } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = searchValue
            ? allPosts.filter((post) => {
                return post.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            })
            : posts;

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
                    onChange={this.handleChange}
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
                        onClick={this.loadMorePosts}
                        disabled={noMorePosts}
                    />
                )}
            </div>
        );
    }
}

// !variável inverte o valor booleano da variável.
// !!variável converte o valor da variável em um booleano.
