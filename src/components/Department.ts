

export const Department = (items: IItem[], department: IDepartment) => {
  return /*html*/ `
    <h3>${department.title}</h3>
    <ul>
		${items
      .filter((item) => item.department === department.title)
      .map((item) => {
        return `<li> ${item.amount}x ${item.title} Kaufland ${(item.price_kaufland =
          item.amount * item.price_kaufland)} € Lidl ${(item.price_lidl =
          item.amount * item.price_lidl)} €</li>`;
      })
      .join("")}
	</ul>
    `;
};
