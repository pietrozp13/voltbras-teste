import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const InformationAreaContainer = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

const MoneyAndTimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
`;

const TitleContainer = styled.Text`
    font-size: 24;
    font-weight: bold;
    padding-bottom: 5px;
`;

const InfoContainer = styled.Text`
    font-size: 14;
    color: gray;
`;

export default function InformationArea({ name, local, city, price, time, description }) {
    return (
        <InformationAreaContainer>
            <TitleContainer >{name}</TitleContainer>
            <InfoContainer>{local}</InfoContainer>
            <InfoContainer>{city}</InfoContainer>
            <MoneyAndTimeContainer>
                <InfoContainer>{time}</InfoContainer>
                <InfoContainer>{price}</InfoContainer>
            </MoneyAndTimeContainer>
            <InfoContainer>{description}</InfoContainer>
        </InformationAreaContainer>
    )
}
