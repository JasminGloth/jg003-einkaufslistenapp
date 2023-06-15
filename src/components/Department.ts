interface IDepartment {
    title:string;
}

export const Department = (department:IDepartment) => {
    return /*html*/ `
    <h3>${department.title}</h3>
    
    `;
}