import React from 'react'
import SwitchOn from './svgicons/SwitchOn';
import SwitchOff from './svgicons/SwitchOff';

export default Switch = ({checked}) => (
    checked? <SwitchOn width={50} height={30} />:<SwitchOff width={50} height={30} />
)