import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import DetailScreen from "./DetailScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack Home"
        component={HomeScreenContent}
      ></Stack.Screen>
      <Stack.Screen
        name="Stack Details"
        component={DetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeScreenContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate("Stack Details")}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
