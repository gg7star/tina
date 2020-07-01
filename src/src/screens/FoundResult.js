import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, WIDTH, Q_TYPES, em} from '../common/constants';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import AnswerFound from '../components/svgicons/AnswerFound';
import Internet from '../components/svgicons/Internet';
import ResultItem from '../components/ResultItem';
import { Actions } from 'react-native-router-flux';
import Good from '../components/svgicons/Good';
import { ScrollView } from 'react-native-gesture-handler';
import { AppActions, QuestionActions } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FoundResult extends Component {
  constructor(props){
    super(props)
  }

  componentWillUnmount(){
    if (this.props.question.questions.length > 0){
      this.props.questionActions.removeLastQuestion()
    }    
  }

  renderIcons(){
    if (this.props.qType == Q_TYPES.L){
      return (<Logiciel width={30*em} height={30*em} />)
    }else if (this.props.qType == Q_TYPES.O){
      return (<Ordinateur width={30*em} height={30*em} />)
    }else if (this.props.qType == Q_TYPES.P){
      return (<Periferique width={30*em} height={30*em} />)
    }else if (this.props.qType == Q_TYPES.I){
      return (<Internet width={25*em} height={25*em} />)
    }else if (this.props.qType == Q_TYPES.A){
      return (<Astuce width={20*em} height={20*em} />)
    }
  }

  handleBackToHome = () => {
    this.props.questionActions.clearQuestions();
    Actions.reset('home');
  }

  render(){
    const questionsItems = this.props.question.questions.map((item, index) => 
      <ResultItem key={item.qid} id={index+1} title={item.title} answer={item.answerText} />
    )
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
                          <AnswerFound width={25*em} height={25*em} />
                      </View>
                    </View>
                </View>
                
                {this.props.isLoggedIn?
                (
                <View style={styles.menuWrapper}>
                  <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
                </View>):null}

                {this.props.isLoggedIn?
                (<View style={styles.dateWrapper}>
                  <Text style={{color:"#fff", fontSize: 12*em, fontFamily:"OpenSans-Regular"}}>{this.props.dateString}</Text>
                </View>):null}
            </LinearGradient>
          </View>

          <View style={styles.contentContainer}>           

            <Image source={require('../Assets/result_split.png')} style={styles.SplitImage} resizeMode={'stretch'} />

            <View style={styles.contentWrapper}>

              <Text style={[styles.solutionText, {marginTop: 15*em}]}>
                {this.props.title? this.props.title:"Panne logicielle"}
              </Text>            

              <ScrollView style={{flex: 1, paddingTop:10*em}}>              
                  
                {/* <FlatList data={DATA}
                  renderItem={({item}) => <ResultItem id={item.id} title={item.title} answer={item.answer} />}
                  keyExtractor={item => item.id.toString()} /> */}

                  {questionsItems}

                  <View style={{flexDirection:"column"}}>
                    <TouchableOpacity style={styles.ActionButtonNoBg}>
                      <Good width={45*em} height={45*em}/>
                    </TouchableOpacity>

                    <Text style={styles.solutionText}>Réponse</Text>
                    <Text style={styles.resultText}>
                        {this.props.solution}
                    </Text>
                  </View>

                  
              </ScrollView>

              {!this.props.isLoggedIn?
                (<View style={styles.ActionWrapper}>

                  <TouchableOpacity style={styles.ActionButtonBlue} onPress={()=>Actions.signin()}>
                    <Text style={styles.ActionBlueText}>Enregistrer le résultat</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.ActionButtonNoBg} onPress={this.handleBackToHome}>
                    <Text style={styles.ActionNoBgText}>Revenir au menu</Text>
                  </TouchableOpacity>
                </View>):null}

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
    height: 180*em,
  },

  contentContainer: {
    flex:1,  
    marginTop: -130*em, 
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

  headerContentContainer:{
    flex: 1, 
    flexDirection: "column", 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  titleText:{
    color:"#fff", 
    fontSize: 25*em, 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    color:"#fff", 
    fontSize: 14*em, 
    marginTop: 8*em,
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

  solutionText:{
    paddingLeft: 60*em, 
    paddingRight: 60*em, 
    fontSize: 18*em, 
    color:"#251b4d", 
    textAlign: "center",
    fontFamily: "Merriweather-Black"
  },

  circleOverlay: {
    width: 80*em,
    height: 80*em,
    borderRadius: 40*em,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff",
    elevation: 20
  },

  ActionButtonBlue: {
    overflow: 'hidden',
    borderRadius: 18*em,
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    height: 50*em,
    justifyContent: 'center',
    marginLeft:20*em, 
    marginRight:20*em,
    marginBottom:15*em, 
  },

  ActionWrapper:{
    backgroundColor:"#fff", 
    borderTopLeftRadius:20*em, 
    borderTopRightRadius: 20*em, 
    width:WIDTH, 
    paddingTop: 13*em, 
    paddingBottom: 13*em, 
    justifyContent:"center"
  },

  ActionButtonNoBg: {
    flexDirection:"row",
    justifyContent:"center", 
    alignItems:"center",
    alignSelf:"center",
    marginTop:8*em,
    marginBottom:8*em,
  },

  ActionBlueText:{
    color:"#fff", 
    fontSize: 14*em,
    fontFamily:"OpenSans-SemiBold"
  },

  ActionNoBgText:{
    color:"#a099b0", 
    fontSize: 14*em , 
    marginRight: -5*em,
    marginLeft: -5*em,
    fontFamily:"OpenSans-SemiBold",
    paddingBottom:15*em,
  },

  menuWrapper:{
    position:"absolute", 
    left:20*em,
    top:20*em
  },

  dateWrapper:{
    position:"absolute", 
    right:20*em,
    top:30*em
  },

  resultText:{
    color:"#a099b0", 
    paddingTop: 15*em,
    paddingBottom: 50*em,
    paddingLeft: 25*em,
    paddingRight: 25*em, 
    fontFamily: "OpenSans-Regular", 
    textAlign:"center",
    fontSize: 13*em,
    lineHeight:20*em,
  }
}

const mapStateToProps = state => ({
  app: state.app || {},
  question: state.question || {}
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  questionActions: bindActionCreators(QuestionActions, dispatch)
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(FoundResult);