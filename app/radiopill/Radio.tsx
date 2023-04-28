"use client"

interface RadioProps {
    label: string
    value: string
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio:React.FC<RadioProps> = ({
    label,
    value,
    onChange,
    name
}) => {

  return (
    <label htmlFor={value}>
        <input
            type="radio"
            name={name}
            id={value}
            value={value}
            onChange={onChange}
        />
        <span>{label}</span>
    </label>
  )
}

export default Radio