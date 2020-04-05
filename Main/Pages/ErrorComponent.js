import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { ERROR_DIALOG_CLOSE_FUNCTION } from '../Store/Actions/ERROR_ACTION/ErrorComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

class ErrorComponent extends Component {
  render() {
    return (
      <View style={styles.ErrorContainer}>
        <Snackbar visible={this.props.visible} onDismiss={() => this.props.errorDialogCloseFunction(false)} action={{ label: <Icon name="close" size={25} color="#FFEEE0" />, onPress: () => this.props.errorDialogCloseFunction(false) }} >{this.props.error}</Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  ErrorContainer:{
    flex: 0,
  } 
});


const mapStateToProps = (state) => {
  const { visible, error } = state.ErrorReducer;
  return { visible, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    errorDialogCloseFunction : (value) => dispatch(ERROR_DIALOG_CLOSE_FUNCTION(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);



