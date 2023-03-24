
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {

 

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const action = ({ title, author, publishedDate, shortDescription, content }) => {
      dispatch(addPost( {title, author, publishedDate, shortDescription, content} ));
      navigate("/", { replace: true })
      
  }

return (

 <PostForm action ={action} actionText ={'Add Post'} />
);
};


export default AddPostForm;