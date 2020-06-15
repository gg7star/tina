import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Back from '../components/svgicons/Back';
import LinearGradient from 'react-native-linear-gradient';
import Info from '../components/svgicons/Info';
import { Actions } from 'react-native-router-flux';
import InfoModal from '../components/InfoModal';
import {colors, WIDTH, em} from '../common/constants';
import EvaluationModal from '../components/EvaluationModal';

class Questionnaire extends Component {
  constructor(props){
    super(props)
    this.state = {
      infoVisible: false,
      evaluationVisible: false}
  }

  renderInfoModal(){
    if (this.state.infoVisible){
      return (
          <InfoModal isModalVisible={true} onPress={()=>{this.setState({infoVisible:false})}}/>
      )
    }else{
      return null;
    }
  }

  handleEvaluationClick(){
    this.setState({evaluationVisible:false})
    Actions.foundresult(this.props)
  }

  renderEvaluationModal(){
    if (this.state.evaluationVisible){
      return (
        <EvaluationModal isModalVisible={true} onPress={this.handleEvaluationClick.bind(this)}/>
      )
    }else{
      return null;
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
          
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={colors[this.props.qType][0]} />
          <View style={styles.headerContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1}}
              colors={colors[this.props.qType]}
              style={{flex:0.9}}>
                
                <View style={{flex: 1, flexDirection: "column"}}>

                  <View style={{flexDirection:'row', 
                                padding: 20*em,
                                justifyContent:'flex-end',
                                alignItems:'center'}}>
                    <Image source={require("../Assets/tina_header.png")} style={{position:"absolute", left: 0, alignSelf: 'center', height: 30*em, width: WIDTH}} resizeMode={"center"}/>
                    <MenuBtn image={"close"} onPress={() => Actions.pop()}/>                  
                  </View>

                  <View style={styles.absolute}>
                    <View style={{position: 'absolute', right: 30*em, bottom: 100*em}}>
                      <RectangleImage image={"T1"} size={33*em} />
                    </View>

                    <View style={{position: 'absolute', left: 30*em, bottom: 150*em}}>
                    <RectangleImage image={"T2"} size={25*em} />
                    </View>

                    <View style={{position: 'absolute', right: 80*em, top: 60*em}}>
                      <RectangleImage image={"T3"} size={17*em} />
                    </View>
                  </View>

                  <View style={styles.absolute, {flex:1, alignItems:"center", flexDirection:"column-reverse"}}>
                      <Image source={require('../Assets/tina_logo_2.png')} style={{width: 240*em, height:240*em}} resizeMode={'stretch'} />
                  </View>
                  
                </View>
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/questionair_split.png')} style={{width: WIDTH, height: WIDTH*0.4}} resizeMode={'stretch'} />

            <TouchableOpacity style={styles.ButtonWrapper} elevation={20}>
              <Back width={15*em} height={15*em}/>
            </TouchableOpacity>

            <View style={styles.contentWrapper}>
              
              <Text style={styles.questionText}>
                Votre ordinateur est un Apple?
              </Text>

              <View style={{flex: 1, flexDirection:"column-reverse"}}>
                
                <View style={styles.progressWrapper}>

                  <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={colors[this.props.qType]}
                    style={{width: Math.random() * WIDTH, height: 20*em}}>
                  </LinearGradient>

                </View>

                <View style={styles.answerWrapper}>
                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1}])} onPress={() => this.setState({evaluationVisible:true})}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:colors[this.props.qType][0]}])}>Oui</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1, marginLeft: 15*em}])} onPress={() => Actions.noresult({qType: this.props.qType})}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:colors[this.props.qType][0]}])}>Non</Text>
                    </TouchableOpacity>
                </View>

                <View styles={{backgroundColor:"#fff"}}>
                  <TouchableOpacity style={styles.ActionButtionNoShadow}>
                    <Text style={styles.dunnoText}>Je ne sais pas</Text>
                  </TouchableOpacity>
                  
                </View>

                <TouchableOpacity style={styles.infoWrapper} onPress={()=>this.setState({infoVisible:true})}>
                  <Info width={12*em} height={12*em} color={colors[this.props.qType][0]}/>
                  <Text style={StyleSheet.flatten([styles.infoText, {color:colors[this.props.qType][0]}])}> +info</Text>
                </TouchableOpacity>
              </View>
              
            </View>
      
          </View>
        </View>

        {this.renderInfoModal()}

        {this.renderEvaluationModal()}

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
    flex: 1
  },

  contentContainer: {
    flex:1,  
    marginTop: -120*em, 
    flexDirection: "column"
  },

  contentWrapper:{
    flex: 1, 
    flexDirection:"column", 
    marginTop:-80*em
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  }, 

  ButtonWrapper: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:40*em,
    height: 40*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 15,
    position:"absolute", 
    left: WIDTH * 48 / 750, 
    top: WIDTH * 0.4 * 50 / 300
  },

  ActionButtion: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 60,
  },

  ActionButtionNoShadow: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50*em,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft:20*em, 
    marginRight:20*em,
    zIndex:-1
  },

  infoWrapper:{
    flexDirection:"row", 
    justifyContent:'center',
    alignItems:'center', 
    marginBottom: 12*em
  },

  infoText:{
    fontSize: 12*em,
    fontFamily: "OpenSans-Regular"
  },

  dunnoText:{
    color:"#908ea6", 
    fontSize: 14*em,
    fontFamily: "OpenSans-SemiBold"
  },

  answerWrapper:{
    paddingLeft: 20*em, 
    paddingRight:20*em, 
    paddingBottom: 20*em, 
    paddingTop: 15*em, 
    flexDirection:"row", 
    zIndex:-1
  },

  answerText:{
    fontSize: 14*em,
    fontFamily:"OpenSans-SemiBold" 
  },

  progressWrapper:{
    width: WIDTH, 
    height: 20*em, 
    backgroundColor:"#e1e0e5"
  },

  questionText:{
    paddingLeft: 50*em, 
    paddingRight: 50*em, 
    fontSize: 18*em, 
    color:"#251b4d", 
    textAlign: "center",
    fontFamily: "Merriweather-Black",
    paddingTop:20*em
  }
}

export default Questionnaire;