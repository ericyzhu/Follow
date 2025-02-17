import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Home5CuteFiIconProps {
  width?: number
  height?: number
  color?: string
}

export const Home5CuteFiIcon = ({
  width = 24,
  height = 24,
  color = "#10161F",
}: Home5CuteFiIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path fill="#fff" fillOpacity={0.01} d="M24 0v24H0V0z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="m21.501 8.623-5.25-4.083c-.845-.657-1.548-1.204-2.17-1.58-.657-.395-1.317-.659-2.08-.659-.765 0-1.424.264-2.081.66-.623.375-1.326.922-2.17 1.58L2.514 8.613c-.224.174-.454.365-.569.645a1.2 1.2 0 0 0 .513 1.493c.28.162.59.16.901.16.103 0 .207-.001.31.004l.011.01c.119.759.183 1.53.247 2.298.03.37.061.739.098 1.105.124 1.242.225 2.246.385 3.05.167.831.414 1.545.892 2.167a5 5 0 0 0 1.33 1.203c.665.413 1.4.589 2.245.671.815.08 1.824.08 3.072.08h.102c1.248 0 2.257 0 3.073-.08.844-.082 1.579-.258 2.245-.671a5.002 5.002 0 0 0 1.33-1.203c.477-.622.725-1.336.891-2.168.16-.803.261-1.807.385-3.049.037-.367.068-.736.098-1.105.064-.769.129-1.54.247-2.298l.002-.01h.01a5.5 5.5 0 0 1 .312-.006c.313 0 .624 0 .903-.161a1.2 1.2 0 0 0 .51-1.49c-.112-.275-.328-.46-.556-.636M12.001 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </Svg>
  )
}
