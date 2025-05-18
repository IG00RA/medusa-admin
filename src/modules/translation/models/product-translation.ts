import { model } from "@medusajs/framework/utils";

const ProductTranslation = model.define("product_translation", {
  id: model.id().primaryKey(),
  product_id: model.text(),
  locale: model.text(),
  title: model.text(),
  description: model.text(),
});

export default ProductTranslation;
