import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./style.css";

const PostReferral = () => {
  return (
    <div className="post-container">
      <h1>Post Referral</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3 floating-label"
      >
        <Form.Control
          type="text"
          placeholder="Title"
          style={{ width: "400px" }}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3 floating-label"
        >
        <Form.Control
        as={"textarea"}
        placeholder="Description"
        style={{ width: "400px", height: "100px" }}
        />
        </FloatingLabel>

        <Button variant="primary" type="submit" className="add-referral">
            Post
        </Button>
    </div>
  );
};
export default PostReferral;
