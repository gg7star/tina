import React from 'react'
import CheckNormal from './svgicons/CheckNormal';
import CheckSelected from './svgicons/CheckSelected';

export default CheckBox = ({checked}) => (
    checked? <CheckSelected width={25} height={25} />:<CheckNormal width={25} height={25} />
)