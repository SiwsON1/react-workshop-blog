import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import styles from './Post.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import ModalPrimary from '../../common/modal/modal';
import { Navigate } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';

const Post = () => {
  const { id } = useParams();

  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/" />
else return (
    
    <section className={styles.posts} >
    <div className={styles.header}>
    <h2>{postData.title}</h2>
    <div className={styles.buttons}>
    <Link to={`/post/edit/${id}/`}>
      <Button variant="outline-info">Edit</Button>
      </Link>
      <ModalPrimary id={id}/>
    </div>
    </div>
    <h4 className="mb-2">Author: <span className="fw-light">{postData.author}</span></h4>
    <h4 className="mb-2 ">Published: <span className="fw-light">{dateToStr(postData.publishedDate)}</span></h4>
    <p className="mt-4 "dangerouslySetInnerHTML={{ __html: postData.content }} />
    </section>
      
    
  );
};

export default Post;