import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import CompanyCard from "../Components/CompanyCard";

const HomeScreen = () => {
  return (
    <>
      <View style={tw`items-center bg-gray-700`}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/catalogosapp-d2a32.appspot.com/o/Images%2Flogo-white.png?alt=media&token=69fc55fe-94a1-4321-8b38-76901cf7d3b8",
          }}
          style={tw`w-28 h-28`}
        />
      </View>
      <View style={tw`items-center h-full`}>
        <CompanyCard />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
