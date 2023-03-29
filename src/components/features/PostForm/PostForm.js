import styles from './PostForm.module.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";


const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
   setDateError(!publishedDate)
   if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
   }
  }

 

return (
  <Form onSubmit={validate(handleSubmit)} className={styles.listForm}>
  <Form.Group className="mb-3" controlId="postForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control {...register("title", { required: true, minLength: 4 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
    {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="postForm.ControlInput2">
    <Form.Label>Author</Form.Label>
    <Form.Control {...register("author", { required: true, minLength: 4 })} type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
    {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="postForm.ControlInput3">
    <Form.Label>Published</Form.Label>
    <Form.Control type="date" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
    {dateError && <small className="d-block form-text text-danger mt-2">Wrong date format</small>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short description</Form.Label>
    <Form.Control {...register("shortDescription", { required: true, minLength: 21 })} as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
    {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field must contain more than 20 characters</small>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
    <Form.Label>Main content</Form.Label>
    <ReactQuill theme="snow" value={content}  onChange={value => setContent(value)} />
    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
  </Form.Group>
  <Button variant="primary" type="submit">{actionText}</Button>
</Form>
);
};


export default PostForm;