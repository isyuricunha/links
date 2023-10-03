// Packages
import React from 'react'

function ProductHunt({
  color = 'currentColor',
  size = 24
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M13.337,9h-2.838v3h2.838c0.829,0,1.501-0.672,1.501-1.501C14.838,9.672,14.167,9,13.337,9z"
      />
      <path
        fill={color}
        d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13.337,14h-2.838v3H8.501V7h4.837 c1.933,0,3.499,1.566,3.499,3.499C16.837,12.434,15.271,14,13.337,14z"
      />
    </svg>
  )
}

export default React.memo(ProductHunt)