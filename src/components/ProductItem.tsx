import { Icon20AddCircleOutline, Icon20RemoveCircleOutline, Icon20TrashSimpleOutline } from "@vkontakte/icons";
import { Text, SimpleCell, Header, Div, InfoRow, Spacing, ButtonGroup, Button } from "@vkontakte/vkui";
import React from "react";
import { changeProductAmountByID, removeProductByID } from "../store/cartSlice";
import { useAppDispatch } from "../store/store";
import { ProductData } from "../types/all";
import { ProductImage } from "./ProductImage";

interface ProductItemProps extends ProductData {
}

export const ProductItem: React.FC<ProductItemProps> = React.memo((props) => {
    const { title, description, price, image, amount, id } = props;
    const dispatch = useAppDispatch();

    const handleItemClick = () => {
        return;
    }

    const handleIncrement = () => {
        dispatch(changeProductAmountByID({
            id,
            delta: 1,
        }));
    }

    const handleDecrement = () => {
        dispatch(changeProductAmountByID({
            id,
            delta: -1,
        }));
    }

    const handleDelete = () => {
        dispatch(removeProductByID(id));
    }


    return (
        <SimpleCell
            multiline
            before={<ProductImage src={image} />}
            onClick={handleItemClick}
            style={{
                cursor: 'auto'
            }}
        >
            <Header>{title}</Header>
            <Div>
                <InfoRow header="Описание">{description}</InfoRow>
                <InfoRow header="Стоимость">{(price).toFixed(2)}</InfoRow>
                <Spacing />
                <ButtonGroup
                    mode='horizontal'
                    stretched
                    align='right'
                    style={{
                        alignItems: 'center',
                    }}>
                    <Button
                        disabled={amount > 9}
                        onClick={handleIncrement}
                        appearance='neutral'
                        before={<Icon20AddCircleOutline />}
                    />
                    <Text
                        style={{
                            userSelect: 'none'
                        }}
                    >
                        {amount}
                    </Text>
                    <Button
                        disabled={amount < 1}
                        onClick={handleDecrement}
                        appearance='neutral'
                        before={<Icon20RemoveCircleOutline />}
                    />
                    <Button
                        onClick={handleDelete}
                        appearance='negative'
                        before={<Icon20TrashSimpleOutline />}
                    />
                </ButtonGroup>
            </Div>
        </SimpleCell>
    );
});