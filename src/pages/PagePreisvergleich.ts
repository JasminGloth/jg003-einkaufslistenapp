import {products} from "../model";
import {departments} from "../model";
import { getProductDepartments } from "../model";

const productDepartments = getProductDepartments();
console.log (productDepartments);

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
  	${productDepartments
      .map((productDepartment) => {
        return `
        <tr>
          <td class="department" colspan="4">${productDepartment.name}</td>
        </tr>
        ${productDepartment.products
          .map((product) => {
            return `
          
        <tr>
          <td>${product.name}</td>
          <td class="price">${product.priceKaufland}</td>
          <td class="price">${product.priceLidl}</td>
          <td class="price">${product.priceAldi}</td>
        </tr>
        `;
          })
          .join("")}
        `;
      })
      .join("")}  
    </table>
</div>
`;
};
