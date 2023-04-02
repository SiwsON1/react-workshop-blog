import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllPosts, getPostByCategory } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PostCards.module.scss';
import dateToStr from '../../../utils/dateToStr';



function usePosts(category, isInCategory) {
      let selector;

    if (isInCategory) {
      selector = getPostByCategory;
    } else {
      selector = getAllPosts;
    }
  const posts = useSelector(state => selector(state, category));
  return posts;
}

const PostCards = ({category, isInCategory}) => {
  
  const posts = usePosts(category, isInCategory);

 


  return (
    <section className={styles.cards} >
    <div className="d-flex flex-row flex-wrap justify-content-between">
    {posts.map(post => (
    <Card key={post.id} className={styles.card}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2">Author: <span className="fw-light">{post.author}</span></Card.Subtitle>
        <Card.Subtitle className="mb-2 ">Published: <span className="fw-light">{dateToStr(post.publishedDate)}</span></Card.Subtitle>
        <Card.Subtitle className="mb-2">Category: <span className="fw-light">{post.category}</span></Card.Subtitle>
        <Card.Text>
          {post.shortDescription}
        </Card.Text>
        <Link to={`/post/${post.id}`}>
        <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
     ))}
    </div>
     </section>
  );
}

export default PostCards;