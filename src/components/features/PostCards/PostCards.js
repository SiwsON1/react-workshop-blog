import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllPosts } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PostCards.module.scss';

const PostCards = () => {

  const posts = useSelector(getAllPosts);

  return (
    <section className={styles.cards} >
    <div className="d-flex flex-row flex-wrap justify-content-between">
    {posts.map(post => (
    <Card key={post.id} className={styles.card}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2">Author: {post.author}</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">Published: <span className="fw-light">{post.publishedDate}</span></Card.Subtitle>
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