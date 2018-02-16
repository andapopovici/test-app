import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/countActions';


class Counter extends Component {
    
    render() {
        console.log(this.props.counter);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              Counter is: {'\n'}{'\n'}
            </Text>
            <Text>
            {this.props.counter}
            </Text> 
          </Text>
          <Button
            color="green"
            onPress={() => this.props.dispatch(incrementCounter())}
            title="INCREMENT" />
          <Button
            color="red"
            onPress={() => this.props.dispatch(decrementCounter())}
            title="DECREMENT" />  
          </View>
        );
      }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.counter        
    };
} 

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30
    },
  });

export default connect(mapStateToProps)(Counter);