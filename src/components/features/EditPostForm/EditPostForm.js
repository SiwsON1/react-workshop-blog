import styles from './EditPostForm.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { editPost } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {

  const { id } = useParams();

  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const action = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/')
};

if(!postData) return <Navigate to="/" />
else return (

 <PostForm action ={action} actionText ={'Edit Post'} id={id} title ={postData.title} author ={postData.author} publishedDate ={postData.publishedDate} shortDescription ={postData.shortDescription} content = {postData.content} />
);
};


export default EditPostForm;