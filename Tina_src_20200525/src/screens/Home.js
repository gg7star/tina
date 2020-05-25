import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import Internet from '../components/svgicons/Internet';
import { BlurView } from "@react-native-community/blur";
import MenuContent from '../components/MenuContent';
import { Rect } from 'react-native-svg';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuVisible: true,
    }
  }

  renderBlur(){
    if (this.state.menuVisible){
      return (
          <BlurView
              style={styles.absolute}
              viewRef={this.state.menuVisible}
              blurType="dark"
              blurAmount={20}
              reducedTransparencyFallbackColor="black"
            />
      )
    }else{
      return null;
    }
  }

  renderMenu(){
    if (this.state.menuVisible){
      return (
        <MenuContent />
      )
    }else{
      return null;
    }
  }

  renderMenuRectBg(){
    if (this.state.menuVisible){
      return(
        <View style={styles.absolute}>
          <View style={{position: 'absolute', left: 20, top: 100}}>
            <RectangleImage image={"B1"} size={50} />
          </View>

          <View style={{position: 'absolute', left: 40, bottom: 200}}>
          <RectangleImage image={"B2"} size={40} />
          </View>

          <View style={{position: 'absolute', right: 30, bottom: 300}}>
            <RectangleImage image={"B3"} size={30} />
          </View>
        </View>
      );
    }else{
      return null;
    }
  }

  render() {
    return (
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

        </View>

        <View style={{flex: 1}}>
          <ImageBackground source={require('../Assets/home_bg.png')} style={styles.menuBackgroundWrapper} resizeMode={'stretch'}>
            <View style={{flex:1, flexDirection:"column", marginRight:30}}>
              <View style={{flex:1}}>
                <TouchableOpacity style={styles.mainBtn}>
                  <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#d4f4fc"}])}>
                    <Ordinateur />
                  </View>
                  <Text style={styles.menuText}>Ordinateur</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:1}}>
                  <TouchableOpacity style={styles.mainBtn}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ccf7f4"}])}>
                      <Periferique />
                    </View>
                    <Text style={styles.menuText}>Peripherique</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flex:1}}>
                <TouchableOpacity style={styles.mainBtn}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#ffefe2"}])}>
                      <Astuce />
                    </View>
                    <Text style={styles.menuText}>Astuce</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:1, flexDirection: "column"}}>
              <View style={{flex:0.5}}>
              </View>

              <View style={{flex:1}}>
                <TouchableOpacity style={styles.mainBtn}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#e9e5fb"}])}>
                      <Logiciel />
                    </View>
                    <Text style={styles.menuText}>Logiciel</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flex:1}}>
                <TouchableOpacity style={styles.mainBtn}>
                    <View style={StyleSheet.flatten([styles.circleOverlay, {backgroundColor:"#edf3ff"}])}>
                      <Internet />
                    </View>
                    <Text style={styles.menuText}>Internet/Reseaux</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flex:0.5}}>
              </View>

            </View>
          </ImageBackground>
        </View>

        {this.renderBlur()}

        <View style={styles.absolute}>
          <View style={styles.menuContentWrapper}>
            <MenuBtn image={this.state.menuVisible? "close":"burger"} onPress={()=>{this.setState({'menuVisible': !this.state.menuVisible})}}/>
            {this.renderMenu()}
          </View>
        </View>

        {this.renderMenuRectBg()}

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
    flex: 1,
    width: width,
    height: height
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