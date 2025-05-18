import TranslationService from "./services/translation-service";

export const Services = {
  TranslationService,
};

export default {
  initialize: async ({ container }, options) => {
    container.register("translationService", {
      factory: () =>
        new TranslationService({ manager: container.resolve("manager") }),
      lifetime: "singleton",
    });
  },
};
