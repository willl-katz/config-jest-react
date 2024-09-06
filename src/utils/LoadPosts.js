export const loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/posts");

    const [posts, photos] = Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const photosAndPosts = postsJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url };
    });

    return photosAndPosts;
};
