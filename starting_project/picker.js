import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider } from 'react-native';

class PickerComponent extends Component {

    state = {
        language: 'English',
        value: 50
    }

    render() {
        return (
            <View>
                <Picker 
                    style={{height: 100, width: 400}}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language:itemValue})}>
                    <Picker.Item label="Spanish" value="spanish"/>
                    <Picker.Item label="Mandarin" value="mandarin"/>
                </Picker>
            </View>
        )
    }
}

export default PickerComponent;