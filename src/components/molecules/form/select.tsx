import { ButtonProps } from "@chakra-ui/react";

import { FieldErrorsImpl } from "react-hook-form";

import { IOption } from "../../../domain/models/option";

import FormField, { FieldLabel } from "./field";
import { SelectMenu } from "./select-menu";

export type SelectSizes = "xs" | "sm" | "md" | "lg";

type Props = ButtonProps & {
  defaultID: string;
  name: string;
  label: FieldLabel;
  errors: FieldErrorsImpl;
  size?: SelectSizes;
  options: IOption[];
  placeholder: string;
  onChange: (value: string | undefined) => void;
};

const FormSelect = (props: Props) => {
  const {
    size = "sm",
    name,
    label,
    errors,
    options,
    defaultID,
    placeholder,
    onChange,
    ...propsElement
  } = props;

  return (
    <FormField name={name} label={label} error={errors[name]}>
      <SelectMenu
        w="100%"
        data-testid={`select-status-${label}`}
        defaultID={defaultID}
        options={options}
        onChange={onChange}
        isDisabled={false}
        placeholder={placeholder}
        {...propsElement}
      />
    </FormField>
  );
};

export default FormSelect;
