import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type CustomIconProps = {
  icon: IconProp;
  size?: number;
  color?: string;
};

export const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  size = 20,
  color = '#333',
}) => <FontAwesomeIcon icon={icon} size={size} color={color} />;
