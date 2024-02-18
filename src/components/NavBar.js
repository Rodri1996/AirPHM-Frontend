import { Appbar, TouchableRipple } from "react-native-paper";

const NavBar = () => {
  
  const handleHomePress = () => {
    console.log("Home clicked");
  };
  const irAPerfil = () => {
    console.log("clicked");
  };
  const cerrarSesion = () => {
    console.log("clicked");
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="App" />
      <TouchableRipple onPress={handleHomePress}>
        <Appbar.Action icon="home" />
      </TouchableRipple>
      <TouchableRipple onPress={irAPerfil}>
        <Appbar.Action icon="account-circle" />
      </TouchableRipple>
      <TouchableRipple onPress={cerrarSesion}>
        <Appbar.Action icon="logout" />
      </TouchableRipple>
    </Appbar.Header>
  );
};

export default NavBar;
