import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Nav from './nav';
import Generator from './generator';
import ListItem from './listitem';
import Input from './input';
import { ScrollView } from 'react-native-gesture-handler';
import Picker from './picker';
import ModalComponent from './modal';

class App extends Component {

  state = {
    nameOfApp: 'my awesome app',
    random:[20,837]
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    })
  }

  onItemDelete = (position) => {
      const newArray = this.state.random.filter((item, index) => {
        return position != index;
      })
      this.setState({
        random: newArray
      })
  }

  render() {
    return (
      <ScrollView
        style={{width: '100%'}}
        // onMomentumScrollBegin={()=>alert('call more data once at the edge')}
        // onMomentumScrollEnd={()=>alert('scroll end')}
        >
        <View style={styles.container}>
          {/* <Nav name={this.state.nameOfApp}/>
          <View style={styles.basicView}>
            <Text style={styles.basicText}>1st</Text>
          </View>
          <View style={styles.basicView}>
            <Text style={styles.basicText}>2nd</Text>
          </View>
          <View style={styles.secondaryView}>
            <Text style={styles.secondaryText}>3rd</Text>
            <Text style={styles.secondaryText}>4th</Text>
          </View>
    
          <Generator add={this.onAddRandom}/>
    
          <ListItem 
            items={this.state.random}
            delete={this.onItemDelete} /> */}

            {/* <Input /> */}
            {/* <Picker />
            <ActivityIndicator 
              size="large"
              color="lightblue"
            /> */}
            
          <ModalComponent />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  basicView: {
    backgroundColor: 'navy',
    width: '100%',
    marginBottom: 5
  },
  basicText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  secondaryView: {
    backgroundColor: 'maroon',
    width: '80%',
  },
  secondaryText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;