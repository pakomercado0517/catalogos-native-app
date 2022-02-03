import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { getAllCompanies, getCatalogoByCompanyId } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const CompanyCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allCompanies = useSelector((state) => state.allCompanies);

  const handlePress = (id) => {
    dispatch(getCatalogoByCompanyId(id));
    navigation.navigate("Catalogos");
  };

  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);

  return (
    <View>
      <FlatList
        resizeMode={"contain"}
        data={allCompanies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={tw`my-5 shadow-lg`}
          >
            <Image
              style={tw`w-56 h-56 rounded-xl`}
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

export default CompanyCard;

const styles = StyleSheet.create({});
