import React, { Component } from "react";
import {
  Container,
  View,
  Thumbnail,
  Form,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text,
  CardSwiper,
  Button
} from "native-base";
import { StyleSheet, TouchableHighlight, } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Statusbar hidden="true" style={{ color: "#C50000" }}/> */}
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            {/* <Thumbnail
              large
              source={{
                uri: "http://d1j8r0kxyu9tj8.cloudfront.net/webs/logo1.jpg"
              }}
            /> */}
            <Text style={{ fontSize: 36, color: "#ffffff", fontWeight: "bold", marginLeft: 35 }}>color</Text>
            <Text style={{ fontSize: 70, color: "#ffffff", fontWeight: "bold", marginRight: 30 }}>ME</Text>
          </View>
          <View style={styles.containerForm}>

            <Card style={styles.cardFrom}>
              <Form style={{ paddingHorizontal: 20 }}>
                <Text style={{ color: "#C50000", paddingTop: 13, marginLeft: 10, fontSize: 13 }}> Email</Text>
                <Item>
                  <Input placeholder="" />
                </Item>
                <Text style={{ color: "#C50000", fontSize: 13, marginLeft: 10, }} > Password</Text>
                <Item >
                  <Input placeholder="" />
                </Item>

              </Form>
              <Button style={styles.button}>
                <Text style={{ fontSize: 13, fontWeight: "bold" }}>Đăng nhập</Text>
              </Button>
            </Card>




          </View>


        </View>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.onPress}
        >
          <Text style={{ fontSize: 13, color: "#111111", }}>Đăng ký tài khoản</Text>
        </TouchableHighlight>





      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C50000"
  },
  containerForm: {
    flex: 1,
    padding: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  cardFrom: {
    flex: 1,
    width: 300,
    borderRadius: 20,
    height: 200,
    position: "absolute",
    top: -20,



  },
  button: {
    flex: 1,
    width: 250,
    height: 40,
    borderRadius: 20,

    alignContent: 'center',
    backgroundColor: '#C50000',
    position: "absolute",
    justifyContent: "center",
    paddingHorizontal: 20,

    bottom: -5,
    marginLeft: 25,

  },
  touchableHighlight: {
    marginLeft: 220,
    marginBottom: 20,

  }
});
