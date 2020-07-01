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

  showToast() {
    const { appActions, app } = this.props;

    if (app.globalNotification && app.globalNotification.message) {
      
      const { message, type, duration } = app.globalNotification;

      const toastStyle = {
        height: 30*em,
        borderRadius: 15*em,
        paddingHorizontal: 10*em,
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        bottom: 40*em,
      };
      let toastPosition = Toast.positions.BOTTOM;
      const toastOption = { containerStyle: toastStyle, shadow: false, position: toastPosition};
      Toast.show(message, toastOption);

      appActions.setGlobalNotification({message: null, type: ''});
    }
  }
  
  render() {
    const { loaded } = this.state;

    if (loaded) this.showToast();
    
    return (
      <RootSiblingParent>
        <View style={styles.safeArea}>
          <View style={styles.container}>
          { loaded 
            ? (
                <RootRoutes />
            ):null
          }
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

const mapStateToProps = state => ({
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(AppView);