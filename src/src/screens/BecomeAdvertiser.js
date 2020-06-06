import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity, Image } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import FAQDetailItem from '../components/FAQDetailItem';
import { WIDTH, colors } from '../common/constants';
import Tina from '../components/svgicons/Tina';
import Binoculars from '../components/svgicons/Binoculars';
import Rocket from '../components/svgicons/Rocket'
import GameBoy from '../components/svgicons/GameBoy'
import Ticket from '../components/svgicons/Ticket'

const DATA = [
  {
    id: 1,
    title: "Devenir annonceur",
    description: "Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et eolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },

  {
    id: 2,
    title: "Devenir annonceur",
    description: "Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et eolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },

  {
    id: 3,
    title: "Devenir annonceur",
    description: "Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et eolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },

  {
    id: 4,
    title: "Devenir annonceur",
    description: "Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et eolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  }
]

const DevenirIcon = ({color, icon}) => (
  <View style={[styles.iconCircle, {backgroundColor:color}]}>
    {icon}
  </View>
)

const THUMB = [
  <DevenirIcon color={colors.ordinateur[3]} icon={<Binoculars width={70} height={70} />} />,
  <DevenirIcon color={colors.logiciel[3]} icon={<Rocket width={50} height={50} />} />,
  <DevenirIcon color={colors.astuce[3]} icon={<GameBoy width={50} height={50} />} />,
  <DevenirIcon color={colors.periferique[3]} icon={<Ticket width={50} height={50} />} />
]

const ContentItem = ({id, title, description}) => (
  <View style={styles.contentItem}>
    {THUMB[id - 1]}
    <Text style={styles.contentTitle}>{title}</Text>
    <Text style={styles.contentDesc}>{description}</Text>
  </View>
)

class FAQDetail extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let content = DATA.map((item) => 
      <ContentItem key={item.id.toString()} id={item.id} title={item.title} description={item.description}/>
    );
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />

          <ScrollView style={styles.scrollStyle}>
            <Image source={require('../Assets/announcer_header_round.png')} style={styles.headerBg} resizeMode="stretch"/>

            <View style={styles.tinaWrapper}>
              <Tina width={80} height={30} />
              <Image source={require('../Assets/tina_logo_4.png')} style={styles.tinaLogo} />
              {content}
            </View>

            <Image source={require('../Assets/announcer_bottom_round.png')} style={{width:WIDTH}} resizeMode="stretch"/>
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

  menuWrapper:{
    position:"absolute", 
    left:25,
    top:25
  },
  
  headerBg:{
    width:WIDTH, 
    marginTop:-60
  },

  tinaWrapper:{
    justifyContent:"center", 
    alignItems:"center", 
    flexDirection:"column", 
    marginTop:-200, 
    paddingLeft:25, 
    paddingRight: 25
  },

  tinaLogo:{
    width:120, 
    height:120, 
    marginTop: 10
  },

  scrollStyle:{
    flex:1, 
    backgroundColor:"#fff"
  },

  contentItem:{
    paddingTop:30, 
    paddingBottom: 40, 
    alignItems:"center", 
    justifyContent:"center"
  },

  contentTitle:{
    fontSize: 24, 
    color:"#251b4d", 
    marginTop: 20, 
    marginBottom: 20, 
    fontFamily:"Merriweather-Black"
  },

  contentDesc:{
    fontSize: 16, 
    textAlign:"center", 
    color:"#a099b0", 
    fontFamily: "OpenSans-Regular", 
    fontSize: 18, 
    lineHeight:30
  },

  iconCircle:{
    width: 110, 
    justifyContent:"center",
    alignItems:"center", 
    height:110, 
    borderRadius:55, 
  }
}

export default FAQDetail;