import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { AuthContext } from "./../context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Image
        source={{
          uri: "https://source.unsplash.com/user/chrisjoelcampbell",
        }}
        style={{ maxHeight: 320, width: null, flex: 1 }}
      />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};
