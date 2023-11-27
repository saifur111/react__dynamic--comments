/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./SingleComment.css";
export default function SingleComment({ input: { username, email, comment } }) {
  return (
    <div className="single__comment">
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
      <p>Comment: {comment}</p>
    </div>
  );
}
