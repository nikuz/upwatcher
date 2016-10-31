'use strict';

import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: props.search.feeds,
      trimReg: /\/|\"|\'|\`|\^|\&|\$|\%|\*|\(|\)|\[|\]|\{|\}|\?|\;|\:|<|>|\+|\=|\#|\@|\!/g
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  trim(value) {
    return value
      .trim()
      .replace(this.state.trimReg, '')
      .replace(/\s+/g, ' ');
  }
  onChangeText(value) {
    this.setState({
      feeds: value
    });
  }
  submitHandler() {
    dismissKeyboard();
    this.props.addFeeds(this.state.feeds);
  }
  componentDidMount = async () => {
    this.setState({
      feeds: await this.props.getStoredFeeds()
    });
  };
  render() {
    var props = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          defaultValue={this.state.feeds}
          placeholder="Find Jobs"
          placeholderTextColor="#999"
          editable={!props.search.loading}
          style={styles.field}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.submitHandler}
          enablesReturnKeyAutomatically={true}
          underlineColorAndroid="transparent"
          returnKeyType="search"
        />
        {props.search.loading ?
          <ActivityIndicator size="small" />
          :
          <TouchableOpacity style={styles.submit_wrap} onPress={this.submitHandler}>
            <MaterialIcons name="search" style={styles.submit_icon} />
          </TouchableOpacity>
        }
      </View>
    );
  }
}

Search.propTypes = {
  addFeeds: React.PropTypes.func.isRequired,
  getStoredFeeds: React.PropTypes.func.isRequired
};

export default Search;