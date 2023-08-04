import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Perfil');
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Atrás" />
      <Appbar.Action icon="account" onPress={navigateToProfile} />
    </Appbar.Header>
  );
};

export default NavBar;
