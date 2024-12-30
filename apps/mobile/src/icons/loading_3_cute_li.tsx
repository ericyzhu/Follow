import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Loading3CuteLiIconProps {
  width?: number
  height?: number
  color?: string
}

export const Loading3CuteLiIcon = ({
  width = 24,
  height = 24,
  color = "#10161F",
}: Loading3CuteLiIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path fill="#fff" fillOpacity={0.01} d="M24 0v24H0V0z" />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 3a8.958 8.958 0 0 0-6.225 2.5"
      />
    </Svg>
  )
}