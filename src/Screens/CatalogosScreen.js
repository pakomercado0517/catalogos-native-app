import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { getCataologoUrl } from "../redux/actions";

const CatalogosScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const companyCatalogo = useSelector((state) => state.companyCatalogo);
  // console.log("companyCatalogo", companyCatalogo);
  const handlePress = (url) => {
    dispatch(getCataologoUrl(url));
    navigation.navigate("Join");
  };

  return (
    <View>
      <FlatList
        data={companyCatalogo}
        resizeMode="contain"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.url)}
            style={tw`my-5 shadow-lg self-center`}
          >
            <Image
              style={tw`w-48 h-48 p-2 rounded-xl`}
              source={{ uri: `${item.image}` }}
            />
            <Text style={tw`text-center text-gray-500 text-lg`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CatalogosScreen;

const styles = StyleSheet.create({});
