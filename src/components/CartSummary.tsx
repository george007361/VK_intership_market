import { Text, Panel, Group, Header, Div, PanelHeader } from "@vkontakte/vkui";
import { useAppSelector } from "../store/store";

export const CartSummary: React.FC = () => {
    const totalPrice = useAppSelector((state) => state.cartStore.totalPrice);

    return (
        <Panel>
            <PanelHeader transparent>
                {/* Корзина */}
            </PanelHeader>
            <Group>
                <Header>Итого</Header>
                <Div>
                    <Text>{totalPrice.toFixed(2)} руб.</Text>
                </Div>
            </Group>
        </Panel>
    );
}