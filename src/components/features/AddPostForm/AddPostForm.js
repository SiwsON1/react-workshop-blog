import styles from './AddPostForm.module.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setshortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setshortDescription('');
      setContent('');
      navigate("/", { replace: true })
      
  }

return (
  <Form onSubmit={handleSubmit} className={styles.listForm}>
  <Form.Group className="mb-3" controlId="postForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="postForm.ControlInput2">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="postForm.ControlInput3">
    <Form.Label>Published</Form.Label>
    <Form.Control type="date" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setshortDescription(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
    <Form.Label>Main content</Form.Label>
    <Form.Control as="textarea" rows={7} placeholder="Enter content here" value={content} onChange={e => setContent(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit">Add post</Button>
</Form>
);
};


export default AddPostForm;