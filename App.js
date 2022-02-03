import HomeScreen from "./src/Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import CatalogosScreen from "./src/Screens/CatalogosScreen";
import CatalogoJoinScreen from "./src/Screens/CatalogoJoinScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Catalogos" component={CatalogosScreen} />
          <Stack.Screen name="Join" component={CatalogoJoinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
