import React from 'react'

function Button({onclick ,children , classname}) {
  return (
    <button onclick={onclick} className={`px-20 py-10 text-purple-200 font-semiBold text-lg bg-purple-400 rounded-sm ${classname}`}>
        {children}
    </button>
  )
}

export default Button