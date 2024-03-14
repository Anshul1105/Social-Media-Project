import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);

  return <div className="card post-card" style={{ width: "25rem" }}>
    {/* <img src="https://plus.unsplash.com/premium_photo-1673014201877-64e88f4b5542?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
          <MdDelete />
        </span></h5>
      <p className="card-text">{post.body}</p>


      {post.tags.map(tag => <span key={tag} className="badge text-bg-info hashtag">{tag}</span>)}

      <div className="alert alert-success reactions" role="alert">
        number of likes : {post.reactions}
      </div>


      <button type="button" className="btn btn-primary">
        Like
      </button>
    </div>
  </div>

}

export default Post;