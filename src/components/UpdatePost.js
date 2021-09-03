import React from "react";
import {
  Button,
  FormControl,
  Input,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { updatePost } from "../actions/postActions";
import useFormState from "../hooks/useFormState";

function UpdatePost({ updatePost, id, title, description }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useFormState(title);
  const [text, setText] = useFormState(description);
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();

    updatePost(id, name, text);
    onClose();
  };
  return (
    <div>
      <>
        <Button bg="goldenrod" color="white" onClick={onOpen}>
          Edit Post
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <form onSubmit={onSubmit}>
              <ModalHeader>Update a Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    required
                    type="text"
                    onChange={setName}
                    value={name}
                    name="name"
                    placeholder="Title"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Text</FormLabel>
                  <Textarea
                    required
                    size="lg"
                    name="text"
                    onChange={setText}
                    value={text}
                    placeholder="Here is a sample placeholder"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { updatePost })(UpdatePost);
