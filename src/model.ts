import _products from "./data/products.json";
import _departments from "./data/departments.json";

export const products = [..._products];
export const departments = [..._departments];

export const getProductDepartments= () => {
  return departments.map((department) => {
    return {
      name: department.name,
      products: products.filter(
        (product) => product.departmentId === department.id
      ),
    };
  });
};