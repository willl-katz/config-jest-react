import { Component } from 'react';

export default class TestByClass extends Component {
    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: 'O título 1',
                body: 'O corpo 1'
            },
            {
                id: 2,
                title: 'O título 2',
                body: 'O corpo 2'
            },
            {
                id: 3,
                title: 'O título 3',
                body: 'O corpo 3'
            }
        ]
    };
    timeoutUpdate = null;

    // Monta o component
    componentDidMount() {
        this.handleTimeout();
    }

    // Desmonta o component
    componentWillUnmount() {
        clearTimeout(this.timeoutUpdate);
    }

    // Atualliza e remonta o component
    componentDidUpdate() {
        //clearTimeout(this.timeoutUpdate)
        this.handleTimeout();
    }

    handleTimeout = () => {
        const { posts, counter } = this.state;
        posts[0].title = "O título mudou!";

        this.timeoutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter + 1 });
        }, 3000);
    }

    render() {
        const { posts, counter } = this.state;

        return (
            <div>
                <h1>{ counter }</h1>
                {posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
