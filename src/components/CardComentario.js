import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const CardComentario = () => {
  return(
    <Card style={{margin:10,padding:5,}}>
    <View style={{flex:1,flexDirection:'row',maxWidth:350}}>
      <Avatar.Image size={48} source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Text variant="titleLarge">Rodrigo Manuel Nieto</Text>
        <Text variant="bodyMedium">Junio 2023</Text>
      </Card.Content>
    </View>
    <Card.Content style={{maxWidth:350,padding:5,}}>
        <Text variant="bodySmall">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</Text>
    </Card.Content>
  </Card>
  );
  }

export default CardComentario;
