import PostCards from "../../features/PostCards/PostCards";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

const CategoriesPost = () => {

  const { category } = useParams();

  return (
    <Container>
      <div>
      <h1>Category</h1>  
      </div>
      <Row >
        <PostCards isInCategory category={category}/>
      </Row>
    </Container>
  );
};

export default CategoriesPost;