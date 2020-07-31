import { Dimensions } from 'react-native'

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const em = WIDTH / 375;
export const Q_TYPES = {
  O: "ordinateur", 
  P: "périphérique", 
  L: "logiciel", 
  I: "internet_réseaux", 
  A: "astuce"
};
export const Q_TYPE_STRINGS = {
  ordinateur: "ordinateur",
  periferique: "périphérique",
  logiciel: "logiciel",
  internet: "internet",
  astuce: "astuce"
}