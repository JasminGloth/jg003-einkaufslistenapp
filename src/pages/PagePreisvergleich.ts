import products from "../data/products.json";
import departments from "../data/departments.json";

export const PagePreisvergleich = () => {
  return /*html*/ `
<div class="page pagePreisvergleich">
		<h2>Es gibt ${products.length} Waren in ${departments.length} Abteilungen </h2>

    <table>
  	${products
      .map((product) => {
        return `<tr><td>${product.name}</td></tr>`;
      })
      .join("")}  
    </table>
</div>
`;
};
