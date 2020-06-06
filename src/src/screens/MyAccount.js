import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';

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

            <View style={{marginTop:30}}>
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
    left:25,
    top:25
  },
  
  listWrapper:{
    borderRadius:20, 
    marginTop: 20,
    backgroundColor:"#fff", 
    elevation:10, 
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    flexDirection: "column", 
    marginTop: 120, 
  },

  listDivider:{
    height:1.5, 
    marginLeft:20, 
    marginTop:20, 
    marginBottom:20,
    backgroundColor:"#eee"
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black",
    marginLeft:25
  },

  itemTitle:{
    color:"#a099b0", 
    fontSize:15, 
    fontFamily:"OpenSans-Regular", 
    paddingLeft:25
  },

  itemContentWraper:{
    paddingTop:5, 
    paddingLeft:25
  },

  itemContentText:{
    color:"#251b4d", 
    fontSize:22, 
    fontFamily:"OpenSans-Regular"
  },
}

export default MyAccount;