import React, { useEffect } from "react";
import { Badge, Box, Button, Heading, CloseButton } from "@chakra-ui/react";
import "../styles/home.css";
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../actions/postActions";
import PropTypes from "prop-types";
import UpdatePost from "./UpdatePost";

const Home = ({ getPosts, post, deletePost }) => {
  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleLocation = (id) => {
    history.push(`/post/${id}`);
  };
  const deletePosts = (id) => {
    deletePost(id);
  };
  const isLogged = !!localStorage.getItem("token");
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="grid">
        {post.posts.map((p) => (
          <Box
            key={p._id}
            className="card"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <CloseButton
              size="md"
              onClick={deletePosts.bind(this, p._id)}
              m={2}
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  <Heading fontSize="20">{p.name.substr(0, 7)}...</Heading>
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="md"
                  ml="5"
                >
                  <p>Made by:</p> {p.author.username}
                </Box>
              </Box>

              <Box
                mt="3"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {p.text.substr(0.2)}...
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {new Date(p.creationDate).toUTCString().substr(0, 17)}
                </Box>
              </Box>
            </Box>
            <Box d="flex" m="10" justifyContent="space-evenly">
              <Button
                color="white"
                bg="teal"
                mr="2"
                onClick={handleLocation.bind(this, p._id)}
              >
                View Post
              </Button>

              <UpdatePost title={p.name} description={p.text} id={p._id} />
            </Box>
          </Box>
        ))}
      </div>
    </div>
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
