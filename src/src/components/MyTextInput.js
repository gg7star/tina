import React from 'react'
import { TextInput } from 'react-native'
import {em} from '../common/constants'

export default class MyTextInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isFocused: props.isFocused
    }
  }

  handleFocus = () => {
    this.setState({isFocused: true})
    if (this.props.handleFocus) this.props.handleFocus()
  }

  handleBlur = () => this.setState({isFocused: false})

  render(){
    return (<TextInput
      onChangeText={this.props.handleChange}
      value={this.props.value}
      clearButtonMode="while-editing"
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      style={[this.props.style, {color:"#251b4d", fontSize: 15*em, borderBottomColor: this.state.isFocused? "#28c7ee":'#928da6'}]} 
      autoFocus={this.props.autoFocus}
      secureTextEntry={this.props.secureTextEntry} 
      textContentType={this.props.textContentType} 
      placeholder={this.props.placeholder} />)
  }
}