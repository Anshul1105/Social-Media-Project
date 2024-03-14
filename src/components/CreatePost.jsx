import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handelSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' ');

        userIdElement.current.value = '';
        postTitleElement.current.value = '';
        postBodyElement.current.value = '';
        reactionsElement.current.value = '';
        tagsElement.current.value = '';

        addPost(userId, postTitle, postBody, reactions, tags);

    }

    return <form className="create-post" onSubmit={handelSubmit}>
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text" placeholder="Enter your user id" className="form-control" id="userId" ref={userIdElement} />
        </div>

        <div className="mb-3">
            <label htmlFor="Title" className="form-label">Post Title</label>
            <input type="text" placeholder="How are you feeling today!!" className="form-control" id="title" ref={postTitleElement} />
        </div>

        <div className="mb-3">
            <label htmlFor="Body" className="form-label">Post Content</label>
            <textarea rows={3} type="text" placeholder="How are you feeling today!!" className="form-control" id="body" ref={postBodyElement} />
        </div>

        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Hastags</label>
            <input type="text" placeholder="please enter your tags using space" className="form-control" id="tags" ref={tagsElement} />
        </div>

        <div className="mb-3">
            <label htmlFor="Reactions" className="form-label">Number of reactions</label>
            <input type="text" placeholder="How many people reacted to this post" className="form-control" id="reactions" ref={reactionsElement} />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
    </form>

}
export default CreatePost;