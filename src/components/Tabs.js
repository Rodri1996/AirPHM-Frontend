import React from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import CardHospesaje from "./cardHospesaje";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import CardComentario from "./CardComentario";

export const Tabs = () => {
  const [index, setIndex] = React.useState(0);

  const misReservas = () => (
    <ScrollView>
      <View>
        <CardHospesaje
          operacion="Calificar"
        ></CardHospesaje>
        <CardHospesaje
          operacion="Calificar"
        ></CardHospesaje>
        <CardHospesaje
          operacion="Calificar"
        ></CardHospesaje>
      </View>
    </ScrollView>
  );

  const misAmigos = () => (
    <ScrollView>
      <View>
        <CardComentario
          image={
            "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          }
          title={"Pepe Argento"}
          subtitle={"Brasil"}
          component={"amigos"}
        ></CardComentario>
      </View>
    </ScrollView>
  );

  const misComentarios = () => (
    <ScrollView>
      <View>
        <CardComentario
          image={
            "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          }
          title={"a Rodrigo Manuel Nieto"}
          subtitle={"21 de octube 2022"}
          description={"Me encanto!!!"}
          score={3}
          component={"comentarios"}
        ></CardComentario>
      </View>
    </ScrollView>
  );

  return (
    <View style={{height:470, justifyContent:'flex-end'}}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
        style={{ backgroundColor: "grey" }}
      >
        <Tab.Item
          title="Reservas"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "cart", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Amigos"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "people-outline", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Comentarios"
          titleStyle={{ fontSize: 12 }}
          icon={{
            name: "chatbox-ellipses-outline",
            type: "ionicon",
            color: "white",
          }}
        />
        <Tab.Item
          title="Publicaciones"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "newspaper-outline", type: "ionicon", color: "white" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring" containerStyle={{backgroundColor:'pink', maxHeight:500,}}>
        <TabView.Item style={{ width: "100%" }}>
          {misReservas()}
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          {misAmigos()}
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          {misComentarios()}
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text>Mis Publicaciones</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};
