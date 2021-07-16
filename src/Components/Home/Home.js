import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Error from "../Error/Error";
import Card from "../Cards/Card";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {
  const [listOFUsers, setListOFUsers] = useState([]);
  const [bg, setBg] = useState(true);
  const [isLaoding, setIsLaoding] = useState(true);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const Url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(Url)
      .then((repense) => {
        setListOFUsers(repense.data);
        setIsLaoding(false);
        setBg(true);
      })
      .catch((error) => {
        setIsLaoding(false);
        setBg(false);
      });
  };

  const handleChangeFilterByName = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={{ marginTop: "3%" }}>
      {isLaoding ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div>
          {!bg ? (
            <Error />
          ) : (
            <div>
              <Search handleChangeFilterByName={handleChangeFilterByName} />
              <div>
                <div className="Cards">
                  {listOFUsers
                    .filter((user) =>
                      user.name.toUpperCase().includes(inputText.toUpperCase())
                    )
                    .map((user) => (
                      <Card user={user} key={user.id} isPost={false} />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Home;
