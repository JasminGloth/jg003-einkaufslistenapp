import items from "../data/items.json";
import departments from "../data/departments.json";

export const PageList = () => {
  return /*html*/ `
<div class="page pageList">
	<h2>Einkaufsliste</h2>
	<p>Es gibt ${items.length} Waren in ${departments.length} Abteilungen</p>
	<ul>
		${items
      .map((item) => {
        return `<li> ${item.amount}x ${item.title}</li>`;
      })
      .join("")}
	</ul>
</div>
`;
};
