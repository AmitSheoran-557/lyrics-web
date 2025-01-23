import React from 'react'

const CustomButton = (props) => {
  return (
    <button className={`${props.className} px-[14px] py-0.5 border text-light-brown-2 border-black hover:bg-black hover:text-white transition-all ease-linear duration-300 rounded-[9px] font-medium text-xs`}>{props.title}</button>
  )
}

export default CustomButton