import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal} from 'react-native';

class ModalComponent extends Component {
    render() {

        state = {
            modal: false
        }

        handleModal = () => {
            this.setState({
                modal: !this.state.modal ? true: false
            })
        }

        return (
            <Modal style={{marginTop: 100, backgroundColor: 'red'}}>
                <Text>Hi</Text>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
})

export default ModalComponent;