import React from "react";
import { Basket } from "@components/SVGIcons";

type ShoppingCartIconProps = {
  cartCount: number;
  name: string;
};

const ShoppingCartIcon = ({ cartCount, name }: ShoppingCartIconProps) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      );
    }
    return `(${cartCount})`;
  };

  return (
    <div className="container">
      <Basket />
      <div className="text">
        {` ${name} `}
        {showCartCount()}
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
