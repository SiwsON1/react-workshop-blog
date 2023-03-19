import PostCards from "../../features/PostCards/PostCards";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container>
      <div className={styles.header}>
      <h1>All Posts</h1>
      <Link to='/post/add'>
        <Button variant="outline-info">Add post</Button>
        </Link>
      </div>
      <Row className={styles.cardContainer}>
        <PostCards />
      </Row>
    </Container>
  );
};

export default Home;