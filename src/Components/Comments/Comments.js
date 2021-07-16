import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Error from "../Error/Error";
import Comment from "../Comment/Comment";

const Comments = ({ location, history }) => {
  let post = location.state;
  const [listOfComments, setListOfComments] = useState([]);
  const [bg, setBg] = useState(true);
  const [isLaoding, setIsLaoding] = useState(true);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    const Url = `https://jsonplaceholder.typicode.com/comments/?postId=${post.id}`;
    axios
      .get(Url)
      .then((repense) => {
        setListOfComments(repense.data);
        setIsLaoding(false);
        setBg(true);
      })
      .catch((error) => {
        setIsLaoding(false);
        setBg(false);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isLaoding ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div>
          {!bg ? (
            <Error />
          ) : (
            <div>
              <div className="Comments">
                {" "}
                <p
                  style={{ color: "white", fontSize: "50px" }}
                >{`${listOfComments.length} Comments`}</p>
                {listOfComments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}{" "}
              </div>
              <div>
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
                <i
                  class="fas fa-home"
                  style={{
                    fontSize: "50px",
                    color: "lightblue",
                    cursor: "pointer",
                    margin: "3%",
                  }}
                  onClick={() => history.push("/")}
                ></i>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
