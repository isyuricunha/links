// Packages
import React from 'react'

function Arrow({
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
        d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12H4.6875"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default React.memo(Arrow)
