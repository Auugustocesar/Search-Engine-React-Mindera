import React from "react";

export const ProductList = ({ products, columns }) => {
  const renderHeader = () =>
    Object.entries(columns).map(([key, value]) =>
      value ? <th key={key}>{key}</th> : null
    );

  const renderProductBody = () =>
    products.map((product) => (
      <tr key={product.id}>
        {columns.id ? <td>{product.id}</td> : null}
        {columns.name ? <td>{product.name}</td> : null}
        {columns.department ? <td>{product.department}</td> : null}
        {columns.price ? <td>{product.price}</td> : null}
        {columns.currency ? <td>{product.currency}</td> : null}
      </tr>
    ));

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderProductBody()}</tbody>
      </table>
    </div>
  );
};
