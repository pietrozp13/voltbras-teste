import React from 'react'
import { Animated, Dimensions } from 'react-native';

import {ItemContainer, Item, ItemText } from './styles';

// import { GestureHandler } from 'expo';
// const { PanGestureHandler, State}  = GestureHandler;

import { PanGestureHandler, State } from 'react-native-gesture-handler'


export default function InforStation() {
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChanged(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
          let opened = false;
          const { translationY } = event.nativeEvent;
    
          offset += translationY;
    
          if (translationY >= 100) {
            opened = true;
          } else {
            translateY.setValue(offset);
            translateY.setOffset(0);
            offset = 0;
          }
    
          Animated.timing(translateY, {
            toValue: opened ? 380 : 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            offset = opened ? 380 : 0;
            translateY.setOffset(offset);
            translateY.setValue(0);
          });
        }
      }
    

    return (
        <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
        >
            <ItemContainer style={{
                transform: [{
                    translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                    }),
                }],
                }}>
                <Item key={'123'}>
                    <ItemText>testeeee</ItemText>
                </Item>
            </ItemContainer>
        </PanGestureHandler>
    )
}