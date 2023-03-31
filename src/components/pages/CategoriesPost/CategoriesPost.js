import PostCards from "../../features/PostCards/PostCards";

const CategoriesPost = () => {
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

export default CategoriesPost;