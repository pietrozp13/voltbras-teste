import styled from 'styled-components';
import { Dimensions, Animated } from 'react-native';

const screen = Dimensions.get('window');

export const ItemContainer = styled(Animated.View)`
    background-color: transparent;
    flex-direction: row;
    position: absolute;
    top: 490px;
`;

export const Item = styled.View`
    width: ${screen.width};
    height: ${screen.height + 20};
    background-color: #fff;
    margin-left: 10;
    margin-right: 10;
    overflow: hidden;
    border-radius: 15;
`;
