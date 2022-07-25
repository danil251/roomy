import * as React from "react"

const Star = (props) => (
  <svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.5 0 2.357 7.255h7.63l-6.173 4.484 2.358 7.256L10.5 14.51l-6.172 4.484 2.358-7.256L.514 7.255h7.629L10.5 0Z"
      fill="#F7C034"
    />
  </svg>
)

export default Star
