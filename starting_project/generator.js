import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const generate = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => props.add()}>
            <View style={styles.generate}>
                <Text style={{color: '#fff'}}>Add number</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    generate: {
        backgroundColor: 'orange',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginTop: 10
    }
});

export default generate;