// Packages
import React from 'react'

function Star({
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
        d="M18.4687 22.5002C18.3109 22.5008 18.1568 22.4516 18.0286 22.3596L12 17.989L5.97139 22.3596C5.84259 22.453 5.68742 22.503 5.52831 22.5025C5.36921 22.5019 5.21441 22.4507 5.08629 22.3564C4.95818 22.262 4.86339 22.1294 4.81563 21.9776C4.76787 21.8258 4.76961 21.6628 4.82061 21.5121L7.17185 14.5479L1.07811 10.369C0.946112 10.2786 0.846491 10.1483 0.793797 9.99723C0.741103 9.84617 0.7381 9.68221 0.785225 9.52931C0.83235 9.37642 0.927135 9.2426 1.05573 9.14741C1.18432 9.05222 1.33999 9.00065 1.49998 9.00022H9.01779L11.2865 2.0182C11.3354 1.86746 11.4308 1.73607 11.5589 1.64289C11.6871 1.5497 11.8415 1.49951 12 1.49951C12.1584 1.49951 12.3128 1.5497 12.441 1.64289C12.5692 1.73607 12.6645 1.86746 12.7134 2.0182L14.9822 9.00257H22.5C22.6602 9.00249 22.8162 9.0537 22.9452 9.14871C23.0741 9.24372 23.1693 9.37753 23.2167 9.53054C23.2641 9.68355 23.2613 9.84773 23.2087 9.99902C23.156 10.1503 23.0563 10.2808 22.9242 10.3713L16.8281 14.5479L19.1779 21.5102C19.216 21.6229 19.2267 21.7431 19.2092 21.8608C19.1916 21.9785 19.1464 22.0903 19.0771 22.187C19.0078 22.2837 18.9165 22.3626 18.8107 22.417C18.7049 22.4715 18.5877 22.5 18.4687 22.5002Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Star)
