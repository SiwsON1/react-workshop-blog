import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import styles from './Categories.module.scss';


const Categories= () => {

  const categories = useSelector(getAllCategories);

  return (
    <div>
    <h2>All categories</h2>
    <div className={styles.header}>
    {categories.map(category => (
        <ListGroup>
        <ListGroup.Item>
          <Link key={category} to={`/categories/${category}`} >
            <h3>{category}</h3>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    ))}
    </div>
  </div>
  );


    }

export default Categories;