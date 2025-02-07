import React from 'react'
import './button.css'

function Button({onclick ,children , classname}) {
  return (
    <button onclick={onclick} className={`px-30 py-10 text-purple-200 font-semiBold text-lg bg-purple-400 rounded-sm `}>
        {children}
    </button>
  )
}

export default Button