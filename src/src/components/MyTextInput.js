import React from 'react'
import { TextInput } from 'react-native'

export default class MyTextInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isFocused: props.isFocused,
    }
  }

  handleFocus = () => this.setState({isFocused: true})

  handleBlur = () => this.setState({isFocused: false})

  render(){
    return (<TextInput 
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      style={[this.props.style, {borderBottomColor: this.state.isFocused? "#28c7ee":'#928da6'}]} 
      autoFocus={this.props.autoFocus}
      secureTextEntry={this.props.secureTextEntry} 
      textContentType={this.props.textContentType} 
      placeholder={this.props.placeholder} />)
  }
}