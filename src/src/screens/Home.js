import React, { Component, useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import Internet from '../components/svgicons/Internet';
import MenuModal from '../components/MenuModal';
import { Actions } from 'react-native-router-flux';
import {Q_TYPES, WIDTH, HEIGHT, em} from '../common/constants';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuVisible: false,
      isLoggedIn: this.props.isLoggedIn,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("ComponentWillReceiveProps")
    this.setState({isLoggedIn:nextProps.isLoggedIn})
  }

  renderMenu(){
    if (this.state.menuVisible){
      return (
        <MenuModal isModalVisible={true} 
                  isLoggedIn={this.state.isLoggedIn}
                  onPress={()=>{this.setState({menuVisible: false})}} 
                  onPressHistory={()=>{this.setState({menuVisible: false}); Actions.history()}}
                  onPressFAQ={()=>{this.setState({menuVisible:false}); Actions.faq()}}
                  onPressSignIn={()=>{this.setState({menuVisible: false}); Actions.signin()}}
                  onPressRegister={()=>{this.setState({menuVisible: false}); Actions.regemail()}}
                  onPressBecomeAdvertiser={()=>{this.setState({menuVisible: false}); Actions.becomeadvertiser()}}
                  onPressSettings={()=>{this.setState({menuVisible: false}); Actions.settings()}}
                  onPressAbout={()=>{this.setState({menuVisible:false}); Actions.about()}}
                  onPressLogout={()=>{this.setState({menuVisible: false, isLoggedIn: false})}} />
      )
    }else{
      return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <View style={styles.helloContainer}>
              <ImageBackground source={require('../Assets/home_hello_bg.png')} style={styles.helloLogo} resizeMode={'stretch'}>
                <Text style={styles.helloText}>
                  {this.state.isLoggedIn? 'Hello Bruno!':'Hello!'}
                </Text>
              </ImageBackground>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RectangleImage image={"B2"} size={25*em} mTop={47*em} mRight={120}/>
              </View>
            </View>

            <View style={styles.tinaLogoWrapper}>
              <Image source={require('../Assets/tina_logo.png')} style={{width: 150*em, height:160*em}} resizeMode={'stretch'} />
              <View style={{position:'absolute', right:32*em, bottom:20*em}}><RectangleImage image={"B3"} size={17*em}/></View>
            </View>

            <View style={{flexDirection: "row", justifyContent:"center", alignItems:"flex-start", marginTop: 10*em}} >
              <View style={{position:'absolute', left:0}}><RectangleImage image={"B1"} size={33*em} mLeft={-8*em} mTop={-8*em}/></View>
              <Text style={styles.titleText}>Votre question se porte sur :</Text>
            </View>

            <View style={{position:"absolute", right: 21*em, top: 21*em}}>
              <MenuBtn image={"burger"} onPress={()=>{this.setState({'menuVisible': true})}}/>
            </View>
          </View>

          <View style={{height:330*em}}>
            <ImageBackground source={require('../Assets/home_bg.png')} style={styles.menuBackgroundWrapper} resizeMode={'stretch'}>
              <View style={{flex:1, flexDirection:"column", marginRight:26*em}}>
                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.O})}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#d4f4fc"}])}>
                      <Ordinateur width={21*em} height={21*em}/>
                    </View>
                    <Text style={styles.menuText}>Ordinateur</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.P})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ccf7f4"}])}>
                        <Periferique width={21*em} height={21*em}/>
                      </View>
                      <Text style={styles.menuText}>Périphérique</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.A})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ffefe2"}])}>
                        <Astuce width={21*em} height={21*em} />
                      </View>
                      <Text style={styles.menuText}>Astuce</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={{flex:1, flexDirection: "column"}}>
                <View style={{flex:0.5}}></View>
                
                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.L})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#e9e5fb"}])}>
                        <Logiciel width={21*em} height={21*em} />
                      </View>
                      <Text style={styles.menuText}>Logiciel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.I})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#edf3ff"}])}>
                        <Internet width={16*em} height={16*em} />
                      </View>
                      <Text style={styles.menuText}>Internet/Réseaux</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.5}}></View>              
              </View>
            </ImageBackground>
          </View>
        </View>

        {this.renderMenu()}

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
    flex: 1,
    width: WIDTH,
    height: HEIGHT
  },

  helloLogo :  {
    width: 100*em,
    height: 114*em,
    justifyContent:"center",
    alignItems:"center"
  }, 

  helloText: {
    color:"#fff", 
    fontSize:20*em, 
    fontFamily:"Merriweather-BlackItalic", 
    paddingRight:10*em, 
    paddingBottom:10*em,
    textAlign:'center'
  },

  helloContainer: {
    position:"absolute",
    left:0,
    top:0
  },

  mainBtn: {
    flex: 1,
    marginTop: 8*em, 
    marginBottom:8*em,
    overflow: 'hidden',
    borderRadius: 20*em,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },

  circleOverlay: {
    width: 40*em,
    height: 40*em,
    borderRadius: 20*em,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText:{
    fontSize:18*em, 
    fontFamily:"Merriweather-Black", 
    color:"#251b4d"
  },

  menuText: {
    color: "#251b4d", 
    fontSize: 11*em,
    paddingTop:4*em,
    fontFamily: "OpenSans-SemiBold"
  },

  menuBackgroundWrapper: {
    flexDirection:"row", 
    flex: 1, 
    justifyContent:"center", 
    paddingTop: 25*em, 
    paddingLeft: 20*em, 
    paddingRight:20*em, 
    paddingBottom:10*em
  },

  tinaLogoWrapper: {
    marginTop: 20*em, 
    flexDirection: 'row', 
    justifyContent:'center', 
    alignItems:'flex-end'
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }, 
}
export default Home;