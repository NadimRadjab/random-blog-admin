import React from "react";
import { Container, Text, Heading } from "@chakra-ui/react";
import "../styles/post.css";
import Comment from "./Comment";

function Post() {
  return (
    <div className="container">
      <div className="main">
        <Heading mt={2} as="h2" size="xl">
          Name
        </Heading>
        <Text mt={6} fontSize="2xl">
          Text
        </Text>
        <Container>
          {/* <FormPost item={item} addComment={addComment} /> */}
          <Container d="flex" flexDirection="column" alignItems="center" mt={4}>
            <h2>Comments:</h2>
            <Comment />
          </Container>
        </Container>
      </div>
    </div>
  );
}
export default Post;
