import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, WIDTH, Q_TYPES} from '../common/constants';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import AnswerFound from '../components/svgicons/AnswerFound';
import Internet from '../components/svgicons/Internet';
import ResultItem from '../components/ResultItem';
import { Actions } from 'react-native-router-flux';
import Good from '../components/svgicons/Good';

const DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor situndefined - 1",
    answer: "Oui"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor situndefined - 2",
    answer: "Non"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor situndefined - 3",
    answer: "Oui"
  },
  {
    id: 4,
    title: "Lorem ipsum dolor situndefined - 4",
    answer: "Oui"
  },
  {
    id: 5,
    title: "Lorem ipsum dolor situndefined - 5",
    answer: "Non"
  },
  {
    id: 6,
    title: "Lorem ipsum dolor situndefined - 6",
    answer: "Oui"
  },
  {
    id: 7,
    title: "Lorem ipsum dolor situndefined - 7",
    answer: "Non"
  },
  {
    id: 8,
    title: "Lorem ipsum dolor situndefined - 8",
    answer: "Oui"
  },
  {
    id: 9,
    title: "Lorem ipsum dolor situndefined - 9",
    answer: "Oui"
  },
  {
    id: 10,
    title: "Lorem ipsum dolor situndefined - 10",
    answer: "Non"
  }
]
class FoundResult extends Component {
  constructor(props){
    super(props)
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

                      <View style={styles.AnswerFoundWrapper}>
                          <AnswerFound width={30} height={30} />
                      </View>
                    </View>
                </View>
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>           

            <Image source={require('../Assets/result_split.png')} style={styles.SplitImage} resizeMode={'stretch'} />

            <View style={styles.contentWrapper}>

              <Text style={styles.solutionText}>
                Panne logicielle
              </Text>            

              <View style={{flex: 1, paddingTop:20}}>
              
                <FlatList data={DATA}
                  renderItem={({item}) => <ResultItem id={item.id} title={item.title} answer={item.answer} />}
                  keyExtractor={item => item.id.toString()} />
            
              </View>
              <View style={styles.ActionWrapper}>

                <TouchableOpacity style={styles.ActionButtonBlue} onPress={()=>Actions.depanneurs()}>
                  <Text style={styles.ActionBlueText}>Enregistrer le résultat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ActionButtonNoBg}>
                  <Text style={styles.ActionNoBgText}>Reven</Text>
                  <Good width={50} height={50}/>
                  <Text style={styles.ActionNoBgText}>menu</Text>
                </TouchableOpacity>
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
    height: 200,
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
  },

  titleText:{
    color:"#fff", 
    fontSize: 28, 
    marginTop: 40, 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    color:"#fff", 
    fontSize: 18, 
    marginTop: 10,
    fontFamily:"OpenSans-Regular"
  },

  AnswerFoundWrapper:{
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
    paddingRight: 15,
    fontFamily:"OpenSans-Regular"
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
    fontSize: 24, 
    color:"#251b4d", 
    textAlign: "center",
    fontFamily: "Merriweather-Black"
  },

  circleOverlay: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff",
    elevation: 20
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
    marginBottom:20, 
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
    flexDirection:"row",
    justifyContent:"center", 
    alignItems:"center",
    alignSelf:"center",
    marginTop:10,
    marginBottom:10,
  },

  ActionBlueText:{
    color:"#fff", 
    fontSize: 20,
    fontFamily:"OpenSans-SemiBold"
  },

  ActionNoBgText:{
    color:"#a099b0", 
    fontSize: 20, 
    marginRight: -5,
    marginLeft: -5,
    fontFamily:"OpenSans-SemiBold",
    paddingBottom:20,
  }
}

export default FoundResult;