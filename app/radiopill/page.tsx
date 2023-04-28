"use client"

import radioPillData from './radioPillData'
import RadioPill from './RadioPill'
import { useState } from "react";

const RadioPillPage = () => {

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <div>{value}</div>
      <RadioPill
        data={radioPillData} 
        value={value}
        name="category"
        onChange={handleChange}
        />
  </div>
  )
}

export default RadioPillPage