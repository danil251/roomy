import * as React from "react"

const Like = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <g clipPath="url(#a)">
      <path
        d="M14.645 7.466c-.898 0-1.744.351-2.38.986l-.261.263-.267-.267a3.345 3.345 0 0 0-2.38-.987c-.894 0-1.737.349-2.373.984A3.337 3.337 0 0 0 6 10.821c0 .898.351 1.741.987 2.377l4.71 4.71.01.01a.423.423 0 0 0 .596-.002l4.71-4.711A3.339 3.339 0 0 0 18 10.829c0-.898-.349-1.744-.984-2.377a3.317 3.317 0 0 0-2.371-.986Zm1.77 5.138-4.409 4.411-4.419-4.418a2.51 2.51 0 1 1 3.549-3.549l.566.567a.44.44 0 0 0 .6 0l.565-.564a2.501 2.501 0 0 1 1.778-.737c.67 0 1.3.262 1.775.737.475.475.737 1.105.734 1.778 0 .67-.262 1.3-.739 1.775Z"
        fill="#00AEEF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(6 6.75)" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Like