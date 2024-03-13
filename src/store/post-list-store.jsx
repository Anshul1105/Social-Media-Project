import { Children, createContext, useReducer } from "react";

const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, default_post_list);

    const addPost = () => { }

    const deletePost = () => { }

    return <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost
        }
    }>
        {children}
    </PostList.Provider>;
}

const default_post_list = [{
    id: '1',
    title: 'Ayodhya',
    body: 'A trip to Ayodhya',
    reactions: 0,
    userId: 'user-9',
    tags: ['vacation', 'Ayodhya', 'friends'],
}, {
    id: '2',
    title: 'Kashiyatra',
    body: 'A wonderful college fest',
    reactions: 15,
    userId: 'user-12',
    tags: ['friends', 'college', 'fests'],
}];

export default PostListProvider;