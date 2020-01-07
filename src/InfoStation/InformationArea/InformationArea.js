import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const InformationAreaContainer = styled.View`
    padding: 10px;
`;

export default function InformationArea({ name, local, city, price, time, description }) {
    return (
        <InformationAreaContainer>
            <Text>{name}</Text>
            <Text>{local}</Text>
            <Text>{city}</Text>
            <Text>{price}</Text>
            <Text>{time}</Text>
            <Text>{description}</Text>
        </InformationAreaContainer>
    )
}
