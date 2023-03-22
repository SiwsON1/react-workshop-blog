import AddPostForm from "../../features/AddPostForm/AddPostForm";
import styles from './PostAdd.module.scss';

const PostAdd = () => {
  return (
    <section className ={styles.postForm}>
    <h1>Add Post</h1>
     <AddPostForm />
    </section>
     
    
  );
};

export default PostAdd;