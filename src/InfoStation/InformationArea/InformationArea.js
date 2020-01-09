import React from 'react';
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
    justify-content: space-around;
`;

const TitleContainer = styled.Text`
    font-size: 24;
    font-weight: bold;
    padding-bottom: 5px;
`;

const InfoContainer = styled.Text`
    font-size: 14;
    color: gray;
    padding-left: 5px;
`;

const IconTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function InformationArea({ name, local, city, price, time, description }) {

    function getPriceLabel (price) {
        if (price > 0) return `R$ ${price}/kWh`
        return 'Free'
    }

    return (
        <InformationAreaContainer>
            <TitleContainer >{name}</TitleContainer>
            <InfoContainer>{local}</InfoContainer>
            <InfoContainer>{city}</InfoContainer>
            <MoneyAndTimeContainer>
                <IconTextContainer>
                    <Ionicons name={"ios-calendar"} size={20} color="gray" />
                    <InfoContainer>{time}</InfoContainer>
                </IconTextContainer>
                <IconTextContainer>
                    <Ionicons name={"md-cash"} size={20} color="gray" />
                    <InfoContainer>{getPriceLabel(price)}</InfoContainer>
                </IconTextContainer>
            </MoneyAndTimeContainer>
            <InfoContainer>{description}</InfoContainer>
        </InformationAreaContainer>
    )
}
