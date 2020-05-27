import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Back from '../components/svgicons/Back';
import LinearGradient from 'react-native-linear-gradient';
import Info from '../components/svgicons/Info';
import { Actions } from 'react-native-router-flux';
import InfoModal from '../components/InfoModal';

export const question_types = {O: "ordinateur", P: "periferique", L: "logiciel", I: "internet", A: "astuce"}
export const question_colors = {
  "ordinateur": [
    "#28c7ee", "#76dcf3", "#8be0f5"
  ],
  "periferique": [
    "#05d7ca", "#7cf1e9", "#9ffaf3"
  ],
  "logiciel": [
    "#7f68ff", "#9e8dff", "#cec5fe"
  ],
  "internet": [
    "#0059ff", "#77a6fe", "#98b9fe"
  ],
  "astuce": [
    '#ffad71', '#ffc9a1', '#ffe9d9'
  ],
}

class Questionnaire extends Component {
  constructor(props){
    super(props)
    this.state = {infoVisible: false}
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

  render(){
    return (
      <View style={{flex:1}}>
          
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={question_colors[this.props.qType][0]} />
          <View style={styles.headerContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1}}
              colors={question_colors[this.props.qType]}
              style={{flex:0.9}}>
                
                <View style={{flex: 1, flexDirection: "column"}}>

                  <View style={{flexDirection:'row', 
                                padding: 25,
                                justifyContent:'flex-end',
                                alignItems:'center'}}>
                    <Image source={require("../Assets/tina_header.png")} style={{position:"absolute", left: 0, alignSelf: 'center', height: 60, width: width}} resizeMode={"center"}/>
                    <MenuBtn image={"close"} onPress={() => Actions.home()}/>                  
                  </View>

                  <View style={styles.absolute}>
                    <View style={{position: 'absolute', right: 40, bottom: 150}}>
                      <RectangleImage image={"T1"} size={50} />
                    </View>

                    <View style={{position: 'absolute', left: 40, bottom: 200}}>
                    <RectangleImage image={"T2"} size={40} />
                    </View>

                    <View style={{position: 'absolute', right: 90, top: 80}}>
                      <RectangleImage image={"T3"} size={20} />
                    </View>
                  </View>

                  <View style={styles.absolute, {flex:1, alignItems:"center", flexDirection:"column-reverse"}}>
                      <Image source={require('../Assets/tina_logo_2.png')} style={{width: 350, height:350}} resizeMode={'stretch'} />
                  </View>
                  
                </View>
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/questionair_split.png')} style={{width: width, height: width*0.4}} resizeMode={'stretch'} />

            <TouchableOpacity style={styles.ButtonWrapper} elevation={20}>
              <Back />
            </TouchableOpacity>

            <View style={styles.contentWrapper}>
              
              <Text style={styles.questionText}>
                Votre ordinateur est un Apple?
              </Text>

              <View style={{flex: 1, flexDirection:"column-reverse"}}>
                
                <View style={styles.progressWrapper}>

                  <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={question_colors[this.props.qType]}
                    style={{width: Math.random() * width, height: 30}}>
                  </LinearGradient>                

                </View>

                <View style={styles.answerWrapper}>
                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1}])}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:question_colors[this.props.qType][0]}])}>Qui</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleSheet.flatten([styles.ActionButtion, {flex:1, marginLeft: 20}])}>
                      <Text style={StyleSheet.flatten([styles.answerText, {color:question_colors[this.props.qType][0]}])}>Non</Text>
                    </TouchableOpacity>
                </View>

                <View styles={{backgroundColor:"#fff"}}>
                  <TouchableOpacity style={styles.ActionButtionNoShadow}>
                    <Text style={styles.dunnoText}>Je ne sais pas</Text>
                  </TouchableOpacity>
                  
                </View>

                <TouchableOpacity style={styles.infoWrapper} onPress={()=>{this.setState({infoVisible:true})}}>
                  <Info color={question_colors[this.props.qType][0]}/>
                  <Text style={StyleSheet.flatten([styles.infoText, {color:question_colors[this.props.qType][0]}])}> +info</Text>
                </TouchableOpacity>
              </View>
              
            </View>         
      
          </View>
        </View>

        {this.renderInfoModal()}

      </View>
    )
  }
}

var {height, width} = Dimensions.get('window');
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

  ButtonWrapper: {
    overflow: 'hidden',
    borderRadius: 18,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:48,
    height: 48,
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 15,
    position:"absolute", left: width * 48 / 750, top: width * 0.4 * 50 / 300
  },

  ActionButtion: {
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 65,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 70,
  },

  ActionButtionNoShadow: {
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 65,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 0.5,
    marginLeft:30, 
    marginRight:30,
    zIndex:-1
  },

  infoWrapper:{
    flexDirection:"row", 
    justifyContent:'center',
    alignItems:'center', 
    marginBottom: 20
  },

  infoText:{
    fontSize: 16,
  },

  dunnoText:{
    color:"#908ea6", 
    fontSize: 22
  },

  answerWrapper:{
    paddingLeft: 30, 
    paddingRight:30, 
    paddingBottom: 30, 
    paddingTop: 20, 
    flexDirection:"row", 
    zIndex:-1
  },

  answerText:{
    fontSize: 22 
  },

  progressWrapper:{
    width: width, 
    height: 30, 
    backgroundColor:"#e1e0e5"
  },

  questionText:{
    paddingLeft: 80, 
    paddingRight: 80, 
    fontSize: 25, 
    color:"#251b4d", 
    textAlign: "center"
  }
}

export default Questionnaire;