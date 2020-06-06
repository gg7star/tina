import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import Position from '../components/svgicons/Position';
import MyTextInput from '../components/MyTextInput';
import PostcodeItem from '../components/PostcodeItem';

const DATA = [
  {
    id: 1,
    postCode: "3000 Leuven, Belgique",
  },

  {
    id: 2,
    postCode: "3000 Nimes",
  },

  {
    id: 3,
    postCode: "3001 Heverlee, Belgique",
  },

  {
    id: 4,
    postCode: "3010 Kessel, Belgique",
  },

  {
    id: 5,
    postCode: "4000 Leuven, Belgique",
  },

  {
    id: 6,
    postCode: "4000 Nimes",
  },

  {
    id: 7,
    postCode: "4001 Heverlee, Belgique",
  },

  {
    id: 8,
    postCode: "4010 Kessel, Belgique",
  },

  {
    id: 9,
    postCode: "5000 Leuven, Belgique",
  },

  {
    id: 10,
    postCode: "5000 Nimes",
  },

  {
    id: 11,
    postCode: "5001 Heverlee, Belgique",
  },

  {
    id: 12,
    postCode: "5010 Kessel, Belgique",
  }
]

class SearchPostcode extends Component {
  constructor(props){
    super(props)

    this.state = { postCode: "" }
  }

  handleChange = (text) => {
    this.setState({postCode: text})
  }

  renderDivider = () => (<View style={styles.listDivider} />)

  render(){
    let searchData = [];
    DATA.map((item) => 
      { 
        if (this.state.postCode != "" && item.postCode.indexOf(this.state.postCode) !== -1){
          searchData.push(item) 
        } 
      }
    );

    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={{paddingLeft:25, paddingRight:25, marginTop:130}}>
            <MyTextInput handleChange={this.handleChange} style={styles.TextInput} textContentType={"telephoneNumber"} autoFocus={true} placeholder={"Code postal"} value={this.state.postCode} />
            <FlatList data={searchData}
                ItemSeparatorComponent={this.renderDivider}
                renderItem={({item}) => <PostcodeItem id={item.id} title={item.postCode} />}
                keyExtractor={item => item.id.toString()} />
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
    flex: 1
  },

  menuWrapper:{
    position:"absolute", 
    left:25,
    top:25
  },

  contentContainer: {
    backgroundColor:"#ff0",
    flexDirection: "column", 
    marginTop: 130, 
    alignItems:"center",
    paddingLeft: 25,
    paddingRight: 25
  },

  tinaLogo:{
    width: 110, 
    height:118, 
    marginBottom: 20
  },

  contentWrapper:{
    width:WIDTH, 
    paddingLeft: 30, 
    paddingRight: 30, 
    paddingTop: 20
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  contentText:{
    fontSize: 18, 
    marginTop: 10, 
    color:"#251b4d", 
    fontFamily:"OpenSans-Regular"
  },

  contentBlueText:{
    fontSize: 18, 
    fontFamily:"OpenSans-Regular",
    color:"#28c7ee",
    marginLeft: 15
  },

  positionWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 20, 
    marginBottom: 100
  },

  descText:{
    fontSize: 18, 
    marginTop: 15, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 26,
    height: 70, 
    alignItems: 'center',
    backgroundColor: '#918da6',
    justifyContent: 'center',
    marginTop: 20
  },

  TextInput:{
    height: 60, 
    fontSize: 20, 
    color:"#28c7ee", 
    borderBottomWidth:2, 
    borderBottomColor:"#28c7ee", 
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 20, 
    fontFamily: "OpenSans-SemiBold"
  },

  listDivider:{
    height:1.5, 
    backgroundColor:"#eee"
  },
}

export default SearchPostcode;