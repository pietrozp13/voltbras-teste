import styled from 'styled-components';
import { Dimensions, Animated } from 'react-native';

const screen = Dimensions.get('window');

export const ItemContainer = styled(Animated.View)`
    background-color: transparent;
    flex-direction: row;
    position: absolute;
    top: 380px;
`;

export const Item = styled.View`
    width: ${screen.width};
    height: ${screen.height};
    background-color: gray;
    margin-left: 10;
    margin-right: 10;
    opacity: 0.85;
    overflow: hidden;
    border-radius: 20;
`;

export const ItemText = styled.Text`
    width: ${screen.width};
    height: ${screen.height};
    background-color: gray;
    margin-left: 10;
    margin-right: 10;
    opacity: 0.85;
    overflow: hidden;
    border-radius: 20;
`;