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
    }
  }

  renderMenu(){
    if (this.state.menuVisible){
      return (
        <MenuModal isModalVisible={true} onPress={()=>{this.setState({menuVisible: false})}} />
      )
    }else{
      return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../Assets/home_hello_logo.png')} style={styles.helloLogo} resizeMode={'stretch'}/>
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
              <Text style={{fontSize:30, fontWeight: "bold"}}>Votre question se porte sur :</Text>
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
                      <Text style={styles.menuText}>Peripherique</Text>
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
                      <Text style={styles.menuText}>Internet/Reseaux</Text>
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

  menuText: {
    color: "#000", 
    fontSize: 16
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
    marginTop: -20, 
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