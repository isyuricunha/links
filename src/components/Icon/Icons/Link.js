// Packages
import React from 'react'

function Link({
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
        d="M9.406 16.5H6.75a4.5 4.5 0 1 1 0-9h2.597m5.306 0h2.597a4.5 4.5 0 1 1 0 9h-2.656M7.925 12h8.244"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default React.memo(Link)
