import products from "../data/products.json";
import departments from "../data/departments.json";
import buyItems from "../data/buyItems.json";

export const PagePreisvergleich = () => {
  return /*html*/ `
<div class="page pageList">
		<h2>Es gibt ${products.length} Waren in ${departments.length} Abteilungen </h2>

  	${products
      .map((product) => {
       return `<div>${product.name}</div>`;
      })
      .join("")}  

</div>
`;
};
