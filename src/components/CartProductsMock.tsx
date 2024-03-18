import { Icon36ClockOutline } from "@vkontakte/icons";
import { Div, Spacing, Text } from "@vkontakte/vkui";
import React from "react";

export const CartProductsMock: React.FC = () => {
    return (
        <Div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <Icon36ClockOutline />
            <Spacing />
            <Text>
                Товаров пока нет
            </Text>
        </Div>
    );
}