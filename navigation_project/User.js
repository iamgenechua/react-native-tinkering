import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function UserScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>User Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      </View>
    );
}