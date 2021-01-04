import React from 'react'
import Keypad from '../components/keypad.component'
import ConversionOperations from '../components/conversions.component'
import Enter from '../components/enter.component'


export default function ConverisonPage()
{
    return(
        <div>
            <Keypad />
            <ConversionOperations />
            <Enter/>
        </div>
    )
}