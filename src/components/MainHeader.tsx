import { Icon28ShoppingCartOutline } from "@vkontakte/icons";
import { PanelHeader, PanelHeaderContent } from "@vkontakte/vkui";
import React from "react";

export const MainHeader: React.FC = () => {
    return (
        <PanelHeader
            delimiter='none'
            shadow
            fixed
            style={{
                zIndex: '99999',
            }}
        >
            <PanelHeaderContent
                before={<Icon28ShoppingCartOutline color='var(--vkui--color_icon_accent_themed)' />}
            >
                Корзина
            </PanelHeaderContent>
        </PanelHeader>
    );
}