import React, { Component} from 'react';
import { View, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {em} from '../common/constants';
import { FlatList } from 'react-native-gesture-handler';
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

          <View style={{paddingLeft:20*em, paddingRight:20*em, marginTop:100*em}}>
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
    left:20*em,
    top:20*em
  },

  TextInput:{
    height: 45*em, 
    fontSize: 13*em, 
    color:"#28c7ee", 
    borderBottomWidth:1*em, 
    borderBottomColor:"#28c7ee", 
    fontFamily:"OpenSans-Regular"
  },

  listDivider:{
    height:1.2*em, 
    backgroundColor:"#eee"
  },
}

export default SearchPostcode;