import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./post.css";
const Post = ({ location, history }) => {
  let post = location.state;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3%",
        height: "700px",
      }}
    >
      <p style={{ padding: "5%", width: "300px", backgroundColor: "white" }}>
        {post.body}
      </p>
      <Link
        to={{
          pathname: `/users/post/${post.id}/comments`,
          state: post,
        }}
      >
        <Button variant="light">Comments ...</Button>
      </Link>
      <i
        className="fas fa-arrow-circle-left"
        style={{
          fontSize: "50px",
          color: "lightblue",
          cursor: "pointer",
          margin: "3%",
        }}
        onClick={() => history.goBack()}
      ></i>
    </div>
  );
};

export default Post;
