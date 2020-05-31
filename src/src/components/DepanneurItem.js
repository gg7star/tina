import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Location from '../components/svgicons/Location';
import Phone from '../components/svgicons/Phone';
import Email from '../components/svgicons/Email';

export default DepanneurItem = ({image, title, location, phone, email}) => (
    <TouchableOpacity style={styles.ActionButton}>
        <View style={{flexDirection:"row"}}>
            <Image style={{width: 80, height: 80, borderRadius: 40}} source={image}></Image>
            <View style={{flex: 1, flexDirection:"column", marginLeft: 20}}>
                <Text style={{fontSize: 23, color:"#251b4d", fontFamily:"Merriweather-Black"}}>{title}</Text>

                <View style={{flexDirection:"row", alignItems:"center", marginTop: 15}}>
                    <Location width={20} height={20} />
                    <Text style={{color:"#928da6", fontSize: 18, paddingLeft: 10, fontFamily:"OpenSans-Regular"}}>{location}</Text>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", marginTop: 15}}>
                    <Phone width={20} height={20} />
                    <Text style={{color:"#928da6", fontSize: 18, paddingLeft: 10, fontFamily:"OpenSans-Regular"}}>{phone}</Text>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", marginTop: 15}}>
                    <Email width={20} height={20} />
                    <Text style={{color:"#928da6", fontSize: 18, paddingLeft: 10, fontFamily:"OpenSans-Regular"}}>{email}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = {
    ActionButton: {
        overflow: 'hidden',
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding:25,
        justifyContent: 'center',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        elevation: 20,
      },
}