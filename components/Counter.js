import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';


class Counter extends Component {
    
    render() {
        console.log(this.props);
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
              0
            </Text>
          </Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30
    },
  });

export default connect()(Counter);