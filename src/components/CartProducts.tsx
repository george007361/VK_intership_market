import { Panel, Group, PanelHeader, View } from "@vkontakte/vkui";
import React from "react";
import { ProductItem } from "./ProductItem";
import { useAppSelector } from "../store/store";
import { CartProductsMock } from "./CartProductsMock";

export const CartProducts: React.FC = () => {
    const products = useAppSelector((state) => state.cartStore.products);

    return (
        <View activePanel="main">
            <Panel style={{ alignItems: 'stretch' }} id="main">
                <PanelHeader transparent>
                    {/* товары */}
                </PanelHeader>
                <Group style={{ flex: 1 }}>
                    {products.length ? (
                        products.map(product => (
                            <ProductItem
                                key={product.id}
                                {...product}
                            />
                        ))
                    ) : (
                        <CartProductsMock />
                    )}
                </Group>
            </Panel>
        </View>
    );
}