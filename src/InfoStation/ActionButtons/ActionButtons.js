import React from 'react'
import { Animated, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const ActionButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px;
`;

const Arrow = styled(Animated.View)`
    align-self: center;
    flex: 1;
    align-items: center;
`;

const Close = styled(Animated.View)`
    position: absolute;
    top: 5;
    right: 15;
`;

export default function ActionButtons({ translateY, handleOpen, handleClose }) {
    return (
        <ActionButtonsContainer>
            <Arrow 
                style={{
                    transform: [{
                        rotate: translateY.interpolate({
                            inputRange: [0, 490],
                            outputRange: ['0deg', '180deg'],
                          })
                    }],
                  }}
            >
                <TouchableWithoutFeedback onPress={() => handleOpen()}>
                    <Ionicons name={"ios-arrow-up"} size={32} color="gray" />
                </TouchableWithoutFeedback>
            </Arrow>
            <Close>
                <TouchableWithoutFeedback onPress={() => handleClose()}>
                    <Ionicons name={"ios-close"} size={36} color="gray" />
                </TouchableWithoutFeedback>
            </Close>
        </ActionButtonsContainer>
    )
}
