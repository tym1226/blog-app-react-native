import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

const BlogPostForm = ({ title1, title2, title3, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  initialValues;

  return (
    <View>
      <Text style={styles.label}>{title1}</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
        multiline={true}
        numberOfLines={1}
      />
      <Text style={styles.label}>{title2}</Text>
      <TextInput
        style={styles.contentInput}
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline={true}
        numberOfLines={5}
      />
      <Button title={title3} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  contentInput: {
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

export default BlogPostForm;
