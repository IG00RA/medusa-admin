import { model } from "@medusajs/framework/utils";

const CategoryTranslation = model.define("category_translation", {
  id: model.id().primaryKey(),
  category_id: model.text(),
  locale: model.text(),
  name: model.text(),
  description: model.text(),
});

export default CategoryTranslation;
