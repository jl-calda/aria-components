"use client"
import {v4 as uuidv4} from 'uuid'

import { PillDataType } from './radioPillData'
import { Radio } from 'react-aria-components';

interface RadioPillProps {
    data:PillDataType[]
    name: string;
    value: string;
    onChange: (e:any) => void;
}

const RadioPill:React.FC<RadioPillProps> = ({data,value,name,onChange}) => {
  
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {data.map((item) => (
        <label key={uuidv4()} htmlFor={item.value}>
        <input
            type="radio"
            name={name}
            id={item.value}
            value={item.value}
            onChange={onChange}
            checked={item.value === value}
        />
        <span>{item.label}</span>
    </label>
      ))}
    </div>
  )

}

export default RadioPill;


 