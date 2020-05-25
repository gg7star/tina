import React from 'react'
import br1 from '../Assets/rectangle_blue_1.png';
import br2 from '../Assets/rectangle_blue_2.png';
import br3 from '../Assets/rectangle_blue_3.png';
import {Image} from 'react-native';

export default class RectangleImage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {image, size, mLeft, mRight, mTop, mBottom} = this.props
    var sourceAsset;
    switch(image){
      case "B1":
        var sourceAsset = br1;
        break;
      case "B2":
        var sourceAsset = br2;
        break;
      case "B3":
        var sourceAsset = br3;
    }

    return(
      <Image source={sourceAsset} style={{width: size, height: size, marginLeft: mLeft, marginRight: mRight, marginTop: mTop, marginBottom: mBottom}} />
      )    
  }
}
