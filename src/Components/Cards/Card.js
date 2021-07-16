import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.css";

const Cards = ({ user, post, isPost }) => {
  const arr = ["Info"];
  console.log(isPost);
  return (
    <div>
      {arr.map((variant, idx) =>
        isPost ? (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header className="Header">
              <i className="fas fa-newspaper" style={{ fontSize: "50px" }}></i>
            </Card.Header>
            <Card.Body style={{ height: "180px" }}>
              <Card.Text>Post Title: {post.title}</Card.Text>
              <Link
                to={{
                  pathname: `/users/post/${post.id}`,
                  state: post,
                }}
              >
                <Button variant="light">Visit Post</Button>
              </Link>
            </Card.Body>
          </Card>
        ) : (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header className="Header">
              <h2>{user.name}</h2>
            </Card.Header>
            <Card.Body style={{ height: "180px" }}>
              <Card.Text>Web Site: {user.website}</Card.Text>
              <Card.Text>Phone number: {user.phone}</Card.Text>

              <Link
                to={{
                  pathname: `/users/${user.id}/posts`,
                  state: user,
                }}
              >
                <Button variant="light">Visit Posts</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
};

export default Cards;
