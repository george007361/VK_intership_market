import { SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useFetchProductsQuery } from "./store/cartAPI";
import { CartProducts } from "./components/CartProducts";
import { CartSummary } from "./components/CartSummary";
import { MainHeader } from "./components/MainHeader";

function App() {
  useFetchProductsQuery();

  return (
    <SplitLayout
      header={<MainHeader />}
    >
      <SplitCol width={'75%'} autoSpaced>
        <CartProducts />
      </SplitCol>
      <SplitCol autoSpaced fixed width={'calc(25%  - 64px)'} >
        <CartSummary />
      </SplitCol>
    </SplitLayout>
  )
}

export default App
