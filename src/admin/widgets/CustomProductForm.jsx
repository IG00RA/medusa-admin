import React from "react";
import { useForm } from "react-hook-form";
import CustomDimensionInput from "./CustomDimensionInput";
import { sdk } from "../lib/sdk";

const CustomProductForm = ({ product }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      width: product?.width?.toString() ?? "",
      length: product?.length?.toString() ?? "",
      height: product?.height?.toString() ?? "",
      weight: product?.weight?.toString() ?? "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Дані, що надсилаються:", data);
    try {
      const payload = {
        ...data,
        width: data.width ? parseFloat(data.width) : null,
        length: data.length ? parseFloat(data.length) : null,
        height: data.height ? parseFloat(data.height) : null,
        weight: data.weight ? parseFloat(data.weight) : null,
      };
      const response = await sdk.client.fetch(
        `/admin/custom-product-update/${product.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }
      );
      console.log("Дані збережено:", response);
    } catch (error) {
      console.error("Помилка збереження:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomDimensionInput name="width" control={control} label="Ширина" />
      <CustomDimensionInput name="length" control={control} label="Довжина" />
      <CustomDimensionInput name="height" control={control} label="Висота" />
      <CustomDimensionInput name="weight" control={control} label="Вага" />
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default CustomProductForm;
