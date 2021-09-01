import React, { useEffect } from "react";
import { Container, Badge, Box } from "@chakra-ui/react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";
import PropTypes from "prop-types";

const Home = ({ getPosts, post }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container className="grid">
      <Link to="/post/:id">
        <Box
          className="card"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <CloseIcon m={2} />
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
        </Box>
      </Link>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
      </Box>
    </Container>
  );
};

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Home);
