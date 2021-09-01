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
import { addPost } from "../actions/postActions";
import useFormState from "../hooks/useFormState";

function NewPost({ addPost }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName, resetName] = useFormState("");
  const [text, setText, resetText] = useFormState("");
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: "sdsdsd",
      name,
      text,
    };
    addPost(newPost);
    onClose();
  };
  return (
    <div>
      <>
        <Button onClick={onOpen}>Make a New Post</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <form onSubmit={onSubmit}>
              <ModalHeader>Create a New Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
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
export default connect(mapStateToProps, { addPost })(NewPost);
