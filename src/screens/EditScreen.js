import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const { id } = route.params;
  const blogPostToUpdate = state.find(
    (blogPostToUpdate) => blogPostToUpdate.id === id
  );

  return (
    <BlogPostForm
      title1="Edit Title:"
      title2="Edit Content"
      title3="Save Blog"
      initialValues={{
        title: blogPostToUpdate.title,
        content: blogPostToUpdate.content,
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default EditScreen;
