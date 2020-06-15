import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import FAQDetailItem from '../components/FAQDetailItem';
import {em} from '../common/constants'

const DATA = [
  {
    id: 1,
    title: "Question 1",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam noumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doloreundefined",
  },

  {
    id: 2,
    title: "Lorem ipsumundefined",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam noumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.",
  },

  {
    id: 3,
    title: "Lorem ipsumundefined",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam noumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum.",
  },

  {
    id: 4,
    title: "Lorem ipsumundefined",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam noumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doloreundefined",
  }
]

class FAQDetail extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let content = DATA.map((item) => 
      <FAQDetailItem key={item.id.toString()} id={item.id} title={item.title} description={item.description} />
    );
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />

          <ScrollView style={{flex:1, paddingLeft: 20*em, paddingRight: 20*em}}>
            {content}

            <View style={styles.bottomTitle}>
              <Text style={[styles.descText, {color:"#251b4d"}]}>Vous n'avez pas trouvé votre réponse ?</Text>
              <TouchableOpacity><Text style={[styles.descText, {color:"#26c8ee", paddingTop:8*em}]}>Contacter notre service client ici</Text></TouchableOpacity>
            </View>
          </ScrollView>
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
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

  descText:{
    fontSize: 13*em,
    fontFamily:"OpenSans-SemiBold"
  },

  bottomTitle:{
    justifyContent:"center", 
    alignItems:"center",
    backgroundColor:"#fff", 
    flexDirection:"column", 
    paddingTop: 30*em, 
    paddingBottom:80*em
  }
}

export default FAQDetail;