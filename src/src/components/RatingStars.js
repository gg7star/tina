import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Review from './svgicons/Review';
import {em} from '../common/constants'

export default class RatingStars extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rating: props.rating
    }
  }

  handleStarClick = (i) => {
    this.setState({rating: i})
  }

  render(){
    var starContents = [];
    for (var i = 1; i <= 5; i++){
     starContents.push(<TouchableOpacity key={i} style={styles.ratingStar} onPress={this.handleStarClick.bind(this, i)}><Review width={30*em} height={30*em} color={i <= this.state.rating? "#f7d100":"#ebeaf0"} /></TouchableOpacity>) 
    }
    return(
      <View style={styles.ratingWrapper}>
          {starContents}
      </View>
    )
  }
}
const styles = {
  ratingWrapper: {
    flexDirection:"row", 
    justifyContent:"center", 
    marginTop: 20*em, 
    marginBottom: 20*em
  },

  ratingStar:{
    marginRight: 15*em
  }
}