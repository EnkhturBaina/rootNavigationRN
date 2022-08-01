import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { UserStore } from "./src/contexts/UserContext";
import MainDrawerNavigation from "./src/navigations/MainDrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <UserStore>
        <MainDrawerNavigation />
      </UserStore>
    </NavigationContainer>
  );
}
