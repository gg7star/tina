import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import FAQDetailItem from '../components/FAQDetailItem';

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

          <ScrollView style={{flex:1, paddingLeft: 25, paddingRight: 25}}>
            {content}

            <View style={styles.bottomTitle}>
              <Text style={[styles.descText, {color:"#251b4d"}]}>Vous n'avez pas trouvé votre réponse ?</Text>
              <TouchableOpacity><Text style={[styles.descText, {color:"#26c8ee", paddingTop:10}]}>Contacter notre service client ici</Text></TouchableOpacity>
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
    paddingLeft: 25,
    paddingRight:25
  },

  listDivider:{
    height:1.5, 
    marginLeft:20, 
    backgroundColor:"#eee"
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    fontSize: 20,
    fontFamily:"OpenSans-SemiBold"
  },

  resultText:{
    color:"#a099b0", 
    paddingTop: 20,
    paddingBottom: 50,
    fontFamily: "OpenSans-Regular", 
    fontSize: 18,
    lineHeight:30,
  },

  bottomTitle:{
    justifyContent:"center", 
    alignItems:"center",
    backgroundColor:"#fff", 
    flexDirection:"column", 
    paddingTop: 60, 
    paddingBottom:140
  }
}

export default FAQDetail;