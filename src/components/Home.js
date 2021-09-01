import React, { useEffect } from "react";
import { Container, Badge, Box, Button } from "@chakra-ui/react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../actions/postActions";
import PropTypes from "prop-types";
import NewPost from "./NewPost";

const Home = ({ getPosts, post, deletePost }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const deletePosts = (id) => {
    deletePost(id);
  };
  return (
    <>
      <NewPost />
      <Container className="grid">
        {post.posts.map((p) => (
          <Box
            key={p.id}
            className="card"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <CloseIcon onClick={deletePosts.bind(this, p.id)} m={2} />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Name
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Author
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Text
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  Date
                </Box>
              </Box>
            </Box>
            <Box m="10">
              <Button bg="teal" color="white">
                <Link mr="2" to={`/post/${p.id}`}>
                  View Post
                </Link>
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </>
  );
};

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts, deletePost })(Home);
