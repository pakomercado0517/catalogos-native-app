import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";
import tw from "tailwind-react-native-classnames";

const CatalogoJoinScreen = () => {
  const catalogoUrl = useSelector((state) => state.catalogoUrl);
  console.log("catalogoUrl", catalogoUrl);
  return (
    <View style={styles.container}>
      <WebView source={{ uri: `${catalogoUrl}` }} />
    </View>
  );
};

export default CatalogoJoinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
