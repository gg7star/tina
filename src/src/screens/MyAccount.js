import React, { Component} from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import { em } from '../common/constants';

const Divider = () => (<View style={styles.listDivider} />)

const AccountItem = ({title, content, onPress}) => (
  <View style={{flexDirection:"column"}}>
    <Text style={styles.itemTitle}>{title}</Text>
    <TouchableOpacity onPress={onPress} style={styles.itemContentWraper}>
      <Text style={styles.itemContentText}>{content}</Text>
    </TouchableOpacity>
    <Divider />
  </View>
)

class MyAccount extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Mon compte</Text>

            <View style={{marginTop:25*em}}>
              <AccountItem title="Nom" content="Florin Bruno" onPress={()=>Actions.myname()} />
              <AccountItem title="Adresee email" content="bruno@tina.fr" onPress={()=>Actions.myemail()} />
              <AccountItem title="Pays" content="France" />
              <AccountItem title="Code postal" content="33000" />
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
    flex: 1
  },

  menuWrapper:{
    position:"absolute", 
    left:20*em,
    top:20*em
  },

  contentContainer: {
    flex: 1,
    flexDirection: "column", 
    marginTop: 90*em, 
  },

  listDivider:{
    height:1*em, 
    marginLeft:18*em, 
    marginTop:15*em, 
    marginBottom:15*em,
    backgroundColor:"#eee"
  },

  titleText:{
    fontSize: 24*em,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black",
    marginLeft:20*em
  },

  itemTitle:{
    color:"#a099b0", 
    fontSize:11*em, 
    fontFamily:"OpenSans-Regular", 
    paddingLeft:20*em
  },

  itemContentWraper:{
    paddingTop:4*em, 
    paddingLeft:20*em
  },

  itemContentText:{
    color:"#251b4d", 
    fontSize:16*em, 
    fontFamily:"OpenSans-Regular"
  },
}

export default MyAccount;