import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
      <Button
        title="Go to User"
        onPress={() => {
          navigation.navigate('User', {
            userId:  Math.floor(Math.random() * 100),
            userName: 'Jamus Lim'
          });
        }}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
      </View>
    );
}