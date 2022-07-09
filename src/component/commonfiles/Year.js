import React from 'react'

const Year = () => {
    const year = new Date().getFullYear()
  return (
    <span>{year}</span>
  )
}

export default Year