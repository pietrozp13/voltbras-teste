import React from 'react'
import { Animated, TouchableWithoutFeedback } from 'react-native';

import {ItemContainer, Item, ItemText } from './styles';


export default function InforStation() {
    let isOpen = false

    const translateY = new Animated.Value(0);

    function handleOnClickAnimation () {

      Animated.timing(translateY, {
        toValue: isOpen ? 0 : -490,
        duration: 200,
        useNativeDriver: true,
      }).start();
      isOpen = !isOpen
    }
    

    return (
      <TouchableWithoutFeedback onPress={() => handleOnClickAnimation()}>
        <ItemContainer style={{
            transform: [{
                translateY: translateY,
            }],
          }}
        >
            <Item>
                <ItemText>testeeee</ItemText>
            </Item>
        </ItemContainer>
      </TouchableWithoutFeedback>
    )
}