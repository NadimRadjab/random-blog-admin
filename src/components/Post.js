import React, { useState, useEffect } from "react";
import { Container, Text, Heading } from "@chakra-ui/react";
import "../styles/post.css";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions";

function Post({ singlePost, getPost, routeProps }) {
  const id = routeProps[0].match.params.id;
  console.log();
  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <div className="container">
      <div className="main">
        <Heading mt={2} as="h2" size="xl">
          {singlePost.post.name}
        </Heading>
        <Text mt={6} fontSize="2xl">
          {singlePost.post.text}
        </Text>
        <Container>
          <Container d="flex" flexDirection="column" alignItems="center" mt={4}>
            <h2>Comments:</h2>
            {singlePost.comments.map((comment) => (
              <Comment postId={id} key={comment._id} comment={comment} />
            ))}
          </Container>
        </Container>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  singlePost: state.post,
  comments: state.comments,
});
export default connect(mapStateToProps, { getPost })(Post);
