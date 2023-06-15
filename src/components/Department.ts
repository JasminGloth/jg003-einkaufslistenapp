interface IDepartment {
    title:string;
}
interface IItem {
    title:string;
    amount:number;
    department:string;
}

export const Department = (items:IItem[], department:IDepartment) => {
    return /*html*/ `
    <h3>${department.title}</h3>
    <ul>
		${items
      .map((item) => {
        return `<li> ${item.amount}x ${item.title}</li>`;
      })
      .join("")}
	</ul>
    `;
}