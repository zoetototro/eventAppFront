import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
  Text,
} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Notification = ({ navigation }) => (
  <ScreenContainer>
    <Content>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{
                uri: "https://source.unsplash.com/user/chrisjoelcampbell",
              }}
            />
          </Left>
          <Body>
            <Button>
              <Text>マッチする</Text>
            </Button>
          </Body>
        </ListItem>
      </List>
    </Content>
  </ScreenContainer>
);
