import React, { useEffect, useState } from "react";
import { Container, CircularProgress, useToast } from "@chakra-ui/react";
import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  loadOnePost,
  closeToast,
  loadPostsPage,
} from "../../store/actions/PostsActions";
import { loadAllAuthors } from "../../store/actions/AuthorsActions";
import { useHistory } from "react-router";

const newPost = {
  id: null,
  title: "",
  body: "",
  userId: null,
};

const ManagePosts = ({ match }) => {
  //#region State

  const state = useSelector((state) => {
    return {
      post: state.postsPage.singlePost ? state.postsPage.singlePost : null,
      authors: state.authorsState.authors,
      newPostState: {
        isSaving: state.postsPage.isSaving,
        newPostAdded: state.postsPage.newPostAdded,
      },
    };
  });

  const [internPost, setInternPost] = useState(state.post);
  const [errors, setErrors] = useState({});

  //#endregion end of state region

  const idPost = match.params.id || null;
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.authors.length === 0) {
      dispatch(loadAllAuthors());
    }
    if (!state.post && idPost) {
      dispatch(loadOnePost(idPost));
    } else if (!idPost) {
      setInternPost(newPost);
    } else {
      setInternPost(state.post);
    }
  }, [dispatch, state.authors, state.post, idPost]);

  useEffect(() => {
    state.newPostState.newPostAdded &&
      toast({
        title: `Post ${idPost ? "updated" : "created"} succesfully!`,
        description: `We've ${
          idPost ? "updated" : "created"
        } your post for you.`,
        status: "success",
        position: "top-right",
        onCloseComplete: () => {
          dispatch(closeToast());
        },
        isClosable: true,
      });
  }, [state.newPostState.newPostAdded, toast, dispatch, idPost]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    // Clear errors
    setErrors((prevState) => {
      return { ...prevState, [name]: null };
    });

    console.log(name);

    setInternPost((prevState) => {
      return {
        ...prevState,
        [name]: name === "userId" ? parseInt(value, 10) : value,
      };
    });
  };

  const isFormValid = () => {
    const errors = {};
    const { title, body, userId } = internPost;

    if (!title) errors.title = "Title is required!";
    if (!body) errors.body = "Body is required!";
    if (!userId) errors.userId = "Author is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const saveHandler = (event) => {
    event.preventDefault();

    if (!isFormValid()) return;

    dispatch(createPost(internPost));
  };

  return (
    <Container>
      {!internPost ? (
        <CircularProgress isIndeterminate color="primary" />
      ) : (
        <>
          {/* {state.newPostState.newPostAdded && createToast()} */}
          <PostForm
            onChange={changeHandler}
            post={internPost}
            authors={state.authors}
            onSave={saveHandler}
            saving={state.newPostState.isSaving}
            errors={errors}
          />
        </>
      )}
    </Container>
  );
};

export default ManagePosts;
