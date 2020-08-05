import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Input extends Component {

    state = {
        myTextInput: '',
        users: ['Kylie', 'Gracie', 'Jamie', 'Andie', 'Hallie', 'Millie', 'Randy']
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    onAddUser = () => {
        this.setState(prevState => {
            return {
                myTextInput: '',
                users: [...prevState.users, prevState.myTextInput]
            }
        })
    }

    render() {
        return (
            <View style={styles.inputWrapper} >

                {
                    this.state.users.map(item => (
                    <Text style={styles.users} key={item}>{item}</Text>
                    ))
                }

                <TextInput 
                    style={styles.input}
                    value={this.state.myTextInput}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                />

                <Button
                    title="Add user name"
                    onPress={() => this.onAddUser()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#F2F2F2',
        marginTop: 20,
        fontSize: 20,
        padding: 20
    },
    users: {
        fontSize: 40,
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        marginBottom: 20
    }
})

export default Input;