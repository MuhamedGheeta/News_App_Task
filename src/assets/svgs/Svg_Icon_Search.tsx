import Colors from '@common/colors';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Svg_Icon_Search = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={Colors.gray}
      d="M9.75 3.25a6.5 6.5 0 0 1 6.5 6.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27a6.52 6.52 0 0 1-4.23 1.56 6.5 6.5 0 1 1 0-13Zm0 2c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5Z"
    />
  </Svg>
);
export default Svg_Icon_Search;
