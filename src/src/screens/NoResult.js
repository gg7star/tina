import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, WIDTH, Q_TYPES} from '../common/constants';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import AnswerNotFound from '../components/svgicons/AnswerNotFound';
import Internet from '../components/svgicons/Internet';
import BottomArrow from '../components/svgicons/BottomArrow';
import Alert from '../components/svgicons/Alert';
import CheckBox from '../components/CheckBox';
import Tool from '../components/svgicons/Tool';

class NoResult extends Component {
  constructor(props){
    super(props)
    this.state = {solutionIndex: 1}
  }

  renderIcons(){
    if (this.props.qType == Q_TYPES.L){
      return (<Logiciel width={40} height={40} />)
    }else if (this.props.qType == Q_TYPES.O){
      return (<Ordinateur width={40} height={40} />)
    }else if (this.props.qType == Q_TYPES.P){
      return (<Periferique width={40} height={40} />)
    }else if (this.props.qType == Q_TYPES.I){
      return (<Internet width={40} height={40} />)
    }else if (this.props.qType == Q_TYPES.A){
      return (<Astuce width={40} height={40} />)
    }
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={colors[this.props.qType][0]} />
          <View style={styles.headerContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1}}
              colors={colors[this.props.qType]}
              style={{flex:0.9}}>
                
                <View style={styles.headerContentContainer}>
                    <View style={styles.circleOverlay}>

                      {this.renderIcons()}

                      <View style={styles.AnswerNotFoundWrapper}>
                          <AnswerNotFound width={30} height={30} />
                      </View>
                    </View>

                    <Text style={styles.titleText}>Je suis desolee</Text>
                    <Text style={styles.descText}>Je nai pas trouve de solution.</Text>                  
                </View>
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>           

            <Image source={require('../Assets/result_split.png')} style={styles.SplitImage} resizeMode={'stretch'} />

            <View style={styles.ArrowWrapper}>
                <BottomArrow width={60} height={60} />
            </View>

            <View style={styles.contentWrapper}>

              <Text style={styles.solutionText}>
                Voici des autres solutions :
              </Text>            

              <View style={styles.ChoiceWrapper}>
                  <TouchableOpacity style={styles.ActionButton} onPress={() => {this.setState({solutionIndex: 0})}}>
                    <View style={styles.CheckWrapper}>
                        <View style={StyleSheet.flatten([styles.circleIconOverlay, {backgroundColor:"#fef8d9"}])}>
                            <Alert width={20} height={20} />
                        </View>

                        <Text style={styles.CheckContent}>
                          Etre averti des que Tina aura trouve une solution a votre panne.
                        </Text>

                        <CheckBox checked={this.state.solutionIndex == 0} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={StyleSheet.flatten([styles.ActionButton, {marginTop:20}])} onPress={() => {this.setState({solutionIndex: 1})}}>
                    <View style={styles.CheckWrapper}>
                        <View style={StyleSheet.flatten([styles.circleIconOverlay, {backgroundColor:"#f1eeff"}])}>
                            <Tool width={20} height={20} />
                        </View>

                        <Text style={styles.CheckContent}>
                          Etre mis en contact avec un depanneur le plus proche
                        </Text>

                        <CheckBox checked={this.state.solutionIndex == 1} />
                    </View>
                  </TouchableOpacity>                 
              </View>
              
              <View style={{flex:1, justifyContent:"flex-end"}}>
                <View style={styles.ActionWrapper}>

                  <TouchableOpacity style={styles.ActionButtonBlue}>
                    <Text style={styles.ActionBlueText}>Continuer</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ActionButtonNoBg}>
                    <Text style={styles.ActionNoBgText}>Fermer</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

          </View>

        </View>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f5fa',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 0.8
  },

  contentContainer: {
    flex:1,  
    marginTop: -150, 
    flexDirection: "column"
  },

  contentWrapper:{
    flex: 1, 
    flexDirection:"column", 
    marginTop:-100
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  }, 

  headerContentContainer:{
    flex: 1, 
    flexDirection: "column", 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingBottom: 100
  },

  titleText:{
    color:"#fff", 
    fontSize: 28, 
    marginTop: 40, 
    fontWeight:"bold"
  },

  descText:{
    color:"#fff", 
    fontSize: 18, 
    marginTop: 10
  },

  AnswerNotFoundWrapper:{
    position: "absolute",
    right: 0, 
    top: 0,
  },

  SplitImage: {
    width: WIDTH, 
    height: WIDTH*0.4
  },

  ArrowWrapper: {
    position:'absolute', 
    left:0, 
    right: 0, 
    alignItems:'center', 
    marginTop: 25
  },

  ChoiceWrapper:{
    flex: 1, 
    flexDirection: "column", 
    paddingLeft: 30, 
    paddingRight: 30, 
    marginTop: 20
  },

  CheckWrapper:{
    flex: 1, 
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingTop:20, 
    paddingBottom:20
  },

  CheckContent:{
    flex:1, 
    color:"#251b4d", 
    fontSize: 16, 
    paddingLeft: 20, 
    paddingRight: 15
  },

  ActionButton: {
    overflow: 'hidden',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding:25,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 2,
  },

  solutionText:{
    paddingLeft: 80, 
    paddingRight: 80, 
    marginTop: 20,
    fontSize: 25, 
    color:"#251b4d", 
    textAlign: "center"
  },

  circleOverlay: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff",
    elevation: 1
  },

  circleIconOverlay: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },

  ActionButtonBlue: {
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    height: 65,
    justifyContent: 'center',
    marginLeft:30, 
    marginRight:30,
  },

  ActionWrapper:{
    backgroundColor:"#fff", 
    borderTopLeftRadius:25, 
    borderTopRightRadius: 25, 
    width:WIDTH, 
    paddingTop: 15, 
    paddingBottom: 15, 
    justifyContent:"center"
  },

  ActionButtonNoBg: {
    justifyContent:"center", alignSelf:"center"
  },

  ActionBlueText:{
    color:"#fff", 
    fontSize: 20
  },

  ActionNoBgText:{
    color:"#a099b0", 
    fontSize: 20, 
    padding: 30
  }
}

export default NoResult;