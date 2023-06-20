import products from "../data/products.json";
import departments from "../data/departments.json";
import buyItems from "../data/buyItems.json"
import { Department } from "../components/Department";

export const PagePreisvergleich = () => {
  return /*html*/ `
<div class="page pageList">
		<p>Es gibt ${products.length} Waren in ${departments.length} Abteilungen ${buyItems.length}</p>

</div>
`;
};
