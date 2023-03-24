import EditPostForm from "../../features/EditPostForm/EditPostForm";
import styles from './PostEddit.module.scss';

const PostEdit = () => {
  
  return (
    
    <section className ={styles.postForm}>
    <h1>Edit Post</h1>
     <EditPostForm />
    </section>
      
    
  );
};

export default PostEdit;