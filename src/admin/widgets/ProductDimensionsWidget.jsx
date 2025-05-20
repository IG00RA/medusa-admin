import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container } from "@medusajs/ui";
import CustomProductForm from "./CustomProductForm";

const ProductDimensionsWidget = ({ data: product }) => {
  return (
    <Container>
      <h2>Розміри та вага</h2>
      <CustomProductForm product={product} />
    </Container>
  );
};

export const config = defineWidgetConfig({
  zone: "product.details.after",
});

export default ProductDimensionsWidget;
