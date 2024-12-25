import React from 'react'

export default function Dropdown({ months, selectedMonth, onChange }) {
  return (
    <select value={selectedMonth} onChange={(e) => onChange(e.target.value)}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  )
}
