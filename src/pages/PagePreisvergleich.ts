import {products} from "../model";
import {departments} from "../model";
import { getDepartmentProducts } from "../model";

const departmentProducts=getDepartmentProducts();
console.log (departmentProducts);

export const PagePreisvergleich = () => {
  return /*html*/ `
<div class="page pagePreisvergleich">
		<h2>Es gibt ${products.length} Waren in ${departments.length} Abteilungen </h2>

    <table>
      <tr>
        <th>Produkt</th>
        <th>Kaufland</th>
        <th>Lidl</th>
        <th>Aldi</th>
    </tr>
  	${products
      .map((product) => {
        return `<tr>
        <td>${product.name}</td>
        <td class="price">${product.priceKaufland}</td>
        <td class="price">${product.priceLidl}</td>
        <td class="price">${product.priceAldi}</td>
        </tr>`;
      })
      .join("")}  
    </table>
</div>
`;
};
