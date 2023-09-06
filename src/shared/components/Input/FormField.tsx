import {
    CheckboxProps,
    FormControl,
    FormHelperText,
    InputProps, SelectProps
} from "@mui/material";
import {
    DeepMap,
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from 'react-hook-form';
import React, {useMemo} from "react";
import {FormLabel} from "../../styles/componnents";

type IFieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
    TFieldValues,
    FieldError
>;

type FormComponent = React.ReactElement<
    InputProps | CheckboxProps | SelectProps
>;

export interface FormFieldProps<TFieldValues extends FieldValues = FieldValues> {
    value?: TFieldValues[FormFieldProps<TFieldValues>['name']];
    name: Path<TFieldValues>;
    register?: UseFormRegister<TFieldValues>;
    label?: string;
    errors?: IFieldErrors;
    component: FormComponent;
    sx?: any
}

export const FormField = <TFieldValues extends FieldValues = any>({
                                                                      value,
                                                                      name,
                                                                      register,
                                                                      label,
                                                                      errors,
                                                                      component,
                                                                      ...props
                                                                  }: FormFieldProps<TFieldValues>) => {
    const renderedFormComponent = useMemo(() => {
        const registerResult = register ? {...register(name), required: true} : null;

        return React.cloneElement(component, {
            value,
            name,
            ...(registerResult || {}),
        });
    }, [value, component, register, name]);

    return (
        <FormControl error={Boolean(errors && errors[name])} {...props}>
            {renderedFormComponent}
            {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
            <FormHelperText sx={{height: '1.2rem'}}>{errors && errors[name] && errors[name].message}</FormHelperText>
        </FormControl>
    )
}
