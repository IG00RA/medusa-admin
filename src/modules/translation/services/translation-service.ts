import { EntityManager } from "@mikro-orm/postgresql";
import ProductTranslation from "../models/product-translation";
import CategoryTranslation from "../models/category-translation";

type InjectedDependencies = {
  manager: EntityManager;
};

class TranslationService {
  private manager_: EntityManager;

  constructor({ manager }: InjectedDependencies) {
    this.manager_ = manager;
  }

  async getProductTranslations(productId: string) {
    return this.manager_.find(ProductTranslation, { product_id: productId });
  }

  async createProductTranslation(data: {
    product_id: string;
    locale: string;
    title?: string;
    description?: string;
  }) {
    const translation = this.manager_.create(ProductTranslation, {
      product_id: data.product_id,
      locale: data.locale,
      title: data.title,
      description: data.description,
    });
    await this.manager_.persistAndFlush(translation);
    return translation;
  }

  async getCategoryTranslations(categoryId: string) {
    return this.manager_.find(CategoryTranslation, { category_id: categoryId });
  }

  async createCategoryTranslation(data: {
    category_id: string;
    locale: string;
    name?: string;
    description?: string;
  }) {
    const translation = this.manager_.create(CategoryTranslation, {
      category_id: data.category_id,
      locale: data.locale,
      name: data.name,
      description: data.description,
    });
    await this.manager_.persistAndFlush(translation);
    return translation;
  }
}

export default TranslationService;
