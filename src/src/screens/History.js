import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, HEIGHT} from '../common/constants';
import {Q_TYPES} from '../common/constants';
import HistoryItem from '../components/HistoryItem';

const DATA = [
  {
    id: 1,
    qType:Q_TYPES.L,
    title: "Panne logiciel",
    dateString: "23/02/2020",
  },
  {
    id: 2,
    qType:Q_TYPES.O,
    title: "Panne ordinateur",
    dateString: "23/02/2020",
  },
  {
    id: 3,
    qType:Q_TYPES.P,
    title: "Panne periferique",
    dateString: "23/02/2020",
  },
  {
    id: 4,
    qType:Q_TYPES.A,
    title: "Panne astuce",
    dateString: "23/02/2020",
  },
  {
    id: 5,
    qType:Q_TYPES.I,
    title: "Panne internet",
    dateString: "23/02/2020",
  },
  {
    id: 6,
    qType:Q_TYPES.L,
    title: "Panne logiciel",
    dateString: "23/02/2020",
  },
  {
    id: 7,
    qType:Q_TYPES.O,
    title: "Panne ordinateur",
    dateString: "23/02/2020",
  },
  {
    id: 8,
    qType:Q_TYPES.P,
    title: "Panne periferique",
    dateString: "23/02/2020",
  },
  {
    id: 9,
    qType:Q_TYPES.A,
    title: "Panne astuce",
    dateString: "23/02/2020",
  },
  {
    id: 10,
    qType:Q_TYPES.I,
    title: "Panne internet",
    dateString: "23/02/2020",
  },
  {
    id: 11,
    qType:Q_TYPES.L,
    title: "Panne logiciel",
    dateString: "23/02/2020",
  },
  {
    id: 12,
    qType:Q_TYPES.O,
    title: "Panne ordinateur",
    dateString: "23/02/2020",
  },
]

class History extends Component {
  constructor(props){
    super(props)
  }

  renderDivider = () => (<View style={styles.listDivider} />)

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Historique</Text>

            <View style={styles.listWrapper}>
              <FlatList data={DATA}
                ItemSeparatorComponent={this.renderDivider}
                renderItem={({item}) => <HistoryItem id={item.id} type={item.qType} title={item.title} date={item.dateString} />}
                keyExtractor={item => item.id.toString()} />
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
    height: HEIGHT - 250,
  },

  contentContainer: {
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
}

export default History;