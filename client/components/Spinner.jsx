import React from 'react'

const Spinner = ({
  secondaryColor,
  speed = 100,
  still,
  thickness = 100,
  ...svgProps
}) => {
  const strokeWidth = 4 * (thickness / 100)
  const circleStyle = !still
    ? { animation: `spinners-react-circular ${140 / speed}s linear infinite` }
    : {}

  return (
    <svg
      fill='none'
      width='100'
      color={'#38ad48'}
      {...svgProps}
      viewBox='0 0 66 66'
    >
      <circle
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke='currentColor'
        strokeDasharray='1, 174'
        strokeDashoffset='306'
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        style={circleStyle}
      />
    </svg>
  )
}

export default Spinner