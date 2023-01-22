import { SelectProps } from "@chakra-ui/react";

import { FieldErrorsImpl, Path, UseFormRegister } from "react-hook-form";

import { IOption } from "../../../domain/models/option";

import FormField, { FieldLabel } from "./field";

import { MultiSelectMenu } from "./select-menu-multi";

export type SelectSizes = "xs" | "sm" | "md" | "lg";

type Props = SelectProps & {
  name: string;
  label: FieldLabel;
  errors: FieldErrorsImpl;
  fieldRegister: Path<any>;
  register: UseFormRegister<any>;
  size?: SelectSizes;
  options: IOption[];
  placeholder: string;
  onChange: (value: string[] | undefined) => void;
};

const FormSelectMulti = (props: Props) => {
  const {
    onChange,
    register,
    fieldRegister,
    size = "sm",
    name,
    label,
    errors,
    options,
    ...selectProps
  } = props;

  return (
    <FormField name={name} label={label} error={errors[name]}>
      <MultiSelectMenu
        label={label.text}
        options={options}
        onChange={onChange}
        fieldRegister={fieldRegister}
        register={register}
        {...selectProps}
      />
    </FormField>
  );
};

export default FormSelectMulti;
