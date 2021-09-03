import React, { useEffect } from "react";
import { Container, Text, Heading } from "@chakra-ui/react";
import "../styles/post.css";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getPost } from "../actions/postActions";
import { Redirect } from "react-router-dom";

function Post({ singlePost, getPost, routeProps }) {
  const id = routeProps[0].match.params.id;
  console.log();
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);
  const isLogged = !!localStorage.getItem("token");
  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="main">
        <Heading mt={2} as="h2" size="xl">
          {singlePost.post.name}
        </Heading>
        <Container>
          <Text mt={6} fontSize="2xl">
            {singlePost.post.text}
          </Text>
        </Container>

        <Container borderTop="1px" p="5" mt="30">
          <Container d="flex" flexDirection="column" alignItems="center" mt={4}>
            <Heading>Comments:</Heading>
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
