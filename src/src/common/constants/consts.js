import { Dimensions } from 'react-native'

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const Q_TYPES = {
  O: "ordinateur", 
  P: "periferique", 
  L: "logiciel", 
  I: "internet", 
  A: "astuce"
}