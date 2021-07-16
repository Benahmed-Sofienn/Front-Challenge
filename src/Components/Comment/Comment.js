import React from "react";

const Comment = ({ comment }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1%",
        backgroundColor: "lightblue",
        width: "800px",
      }}
    >
      <p style={{ backgroundColor: "white" }}>{comment.body}</p>
   <div style={{display:'flex' , justifyContent:'space-around'}}>

      <samp>Name: {comment.name} </samp>
      <samp>Email: {comment.email}</samp>
   </div>
    </div>
  );
};

export default Comment;
