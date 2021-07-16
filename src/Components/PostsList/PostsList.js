import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Error from "../Error/Error";
import Cards from "../Cards/Card";

const PostsList = ({ location, history }) => {
  const user = location.state;
  const [listOfPosts, setListOfPosts] = useState([]);
  const [bg, setBg] = useState(true);
  const [isLaoding, setIsLaoding] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    const Url = `https://jsonplaceholder.typicode.com/posts/?userId=${user.id}`;
    axios
      .get(Url)
      .then((repense) => {
        setListOfPosts(repense.data);
        setIsLaoding(false);
        setBg(true);
      })
      .catch((error) => {
        setIsLaoding(false);
        setBg(false);
      });
  };

  return (
    <div className="PostsList">
      {isLaoding ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div>
          {!bg ? (
            <Error />
          ) : (
            <div>
              <div className="Cards">
                {listOfPosts.map((post) => (
                  <Cards key={post.id} post={post} isPost={true} />
                ))}
              </div>
              <i
                className="fas fa-arrow-circle-left"
                style={{
                  fontSize: "50px",
                  color: "lightblue",
                  cursor: "pointer",
                  marginBottom: '3%'
                }}
                onClick={() => history.goBack()}
              ></i>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostsList;
