import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppActions } from '../actions';
import Toast from 'react-native-root-toast';
import { RootSiblingParent } from 'react-native-root-siblings'
import {
  StyleSheet, View,
} from 'react-native';
import RootRoutes from '../routes';
import { em } from '../common/constants';

class AppView extends Component {
  state = {
    loaded: false
  };
  
  async UNSAFE_componentWillReceiveProps(nextProps) {
    const { app } = nextProps;
    const { loaded } = this.state;
    if (app.loaded && !loaded) {
      const _this = this;
      this.setState({loaded: true}, () => {
        _this.initialize();
      });
    }
  }

  async initialize() {
    const { appActions } = this.props;
    appActions.setGlobalNotification({message: null, type: ''});
  }

  render() {    
    return (
      <RootSiblingParent>
        <View style={styles.safeArea}>
          <View style={styles.container}>
            <RootRoutes />
          </View>
        </View>
      </RootSiblingParent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }  
});

//export default AppView;
// const mapStateToProps = state => ({
//   app: state.app || {},
// });

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
});

export default connect(
    null, 
    mapDispatchToProps)(AppView);