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
import {Q_TYPES, WIDTH, HEIGHT} from '../common/constants';

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
                  onPressSignIn={()=>{this.setState({menuVisible: false}); Actions.signin()}}
                  onPressRegister={()=>{this.setState({menuVisible: false}); Actions.regemail()}}
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
          <View>
            <View style={{flexDirection: 'row', paddingTop:10}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RectangleImage image={"B2"} size={40} mTop={70} mRight={120}/>
              </View>
            </View>

            <View style={styles.tinaLogoWrapper}>
              <Image source={require('../Assets/tina_logo.png')} style={{width: 240, height:250}} resizeMode={'stretch'} />
              <View style={{position:'absolute'}}><RectangleImage image={"B3"} size={28} mLeft={400} mBottom={50}/></View>
            </View>

            <View style={{flexDirection: "row", justifyContent:"center", alignItems:"flex-start", marginTop: 10}} >
              <View style={{position:'absolute', left:0}}><RectangleImage image={"B1"} size={50} mLeft={-10} mTop={-10}/></View>
              <Text style={styles.titleText}>Votre question se porte sur :</Text>
            </View>

            <View style={{position:"absolute", right: 25, top: 25}}>
              <MenuBtn image={"burger"} onPress={()=>{this.setState({'menuVisible': true})}}/>
            </View>
          </View>

          <View style={{flex: 1}}>
            <ImageBackground source={require('../Assets/home_bg.png')} style={styles.menuBackgroundWrapper} resizeMode={'stretch'}>
              <View style={{flex:1, flexDirection:"column", marginRight:30}}>
                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.O})}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#d4f4fc"}])}>
                      <Ordinateur width={25} height={25}/>
                    </View>
                    <Text style={styles.menuText}>Ordinateur</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.P})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ccf7f4"}])}>
                        <Periferique width={25} height={25}/>
                      </View>
                      <Text style={styles.menuText}>Périphérique</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.A})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ffefe2"}])}>
                        <Astuce width={25} height={25} />
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
                        <Logiciel width={25} height={25} />
                      </View>
                      <Text style={styles.menuText}>Logiciel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn} onPress={() => Actions.questionnaire({qType: Q_TYPES.I})}>
                      <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#edf3ff"}])}>
                        <Internet width={20} height={20} />
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
    width: 160,
    height: 186,
    justifyContent:"center",
    alignItems:"center"
  }, 

  helloText: {
    color:"#fff", 
    fontSize:35, 
    fontFamily:"Merriweather-BlackItalic", 
    paddingRight:20, 
    paddingBottom:10,
    textAlign:'center'
  },

  helloContainer: {
    position:"absolute",
    left:0,
    top:0
  },

  mainBtn: {
    flex: 1,
    marginTop: 10, 
    marginBottom:10,
    overflow: 'hidden',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },

  circleOverlay: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText:{
    fontSize:24, 
    fontFamily:"Merriweather-Black", 
    color:"#251b4d"
  },

  menuText: {
    color: "#251b4d", 
    fontSize: 16,
    paddingTop:5,
    fontFamily: "OpenSans-SemiBold"
  },

  menuBackgroundWrapper: {
    flexDirection:"row", 
    flex: 1, 
    justifyContent:"center", 
    paddingTop: 30, 
    paddingLeft: 30, 
    paddingRight:30, 
    paddingBottom:10
  },

  tinaLogoWrapper: {
    marginTop: 60, 
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

  menuContentWrapper: {
    flexDirection:'column', 
    marginTop: 25, 
    marginRight: 25, 
    alignItems:'flex-end'
  }
}
export default Home;