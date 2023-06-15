interface IDepartment {
  title: string;
}
interface IItem {
  title: string;
  amount: number;
  department: string;
  price: number;
}

export const Department = (items: IItem[], department: IDepartment) => {
  return /*html*/ `
    <h3>${department.title}</h3>
    <ul>
		${items
      .filter((item) => item.department === department.title)
      .map((item) => {
        return `<li> ${item.amount}x ${item.title} ${(item.price =
          item.amount * item.price)} €</li>`;
      })
      .join("")}
	</ul>
    `;
};
