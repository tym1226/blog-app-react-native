import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome5 } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { state } = useContext(BlogContext);

  const blogPostToShow = state.find((blogPost) => id === blogPost.id);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
          <FontAwesome5 name="edit" size={24} paddingHorizontal={15} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}>{blogPostToShow.title}</Text>
      <Text style={styles.content}>{blogPostToShow.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    margin: 15,
  },
  content: {
    fontSize: 18,
    margin: 15,
  },
});

export default ShowScreen;
