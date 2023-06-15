import items from "../data/items.json";
import departments from "../data/departments.json";
import { Department } from "../components/Department";

export const PageList = () => {
  return /*html*/ `
<div class="page pageList">
		<p>Es gibt ${items.length} Waren in ${departments.length} Abteilungen</p>
	${departments
    .map((department) => {
      return Department(items, department);
    })
    .join("")}
</div>
`;
};
