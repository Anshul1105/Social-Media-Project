import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'Delete_Post') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId);
    }
    else if (action.type === 'Add_Post') {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === 'Add_Initial_Post') {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        // console.log(`${userId},${postTitle},${postBody},${reactions},${tags}`)
        dispatchPostList({
            type: 'Add_Post',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })
    }

    const addInitialPost = (posts) => {

        dispatchPostList({
            type: 'Add_Initial_Post',
            payload: {
                posts
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'Delete_Post',
            payload: {
                postId,
            },
        })
    }

    return <PostList.Provider value={
        {
            postList,
            addPost,
            addInitialPost,
            deletePost
        }
    }>
        {children}
    </PostList.Provider>;
}

// const default_post_list = [{
//     id: '1',
//     title: 'Ayodhya',
//     body: 'A trip to Ayodhya',
//     reactions: '25',
//     userId: 'user-9',
//     tags: ['#vacation', '#Ayodhya', '#friends'],
// }, {
//     id: '2',
//     title: 'Kashiyatra',
//     body: 'A wonderful college fest',
//     reactions: 15,
//     userId: 'user-12',
//     tags: ['#friends', '#college', '#fests'],
// }];

export default PostListProvider;