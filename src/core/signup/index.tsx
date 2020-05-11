import React, { forwardRef } from 'react';
import { Formik, Form as FormBase, FormikConfig } from 'formik';
import { formikfy } from './formikfy';
import { TextField, Select as SelectBase, InputLabel } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const Form: React.FC<FormikConfig<any> & { id? }> = forwardRef<any, FormikConfig<any>>(
  (props: any, ref: any) => {
    const { children, className, id, ...rest } = props;
    return (
      <Formik {...(rest as any)} ref={ref}>
        {() => (
          <FormBase className={className} id={id}>
            {children}
          </FormBase>
        )}
      </Formik>
    );
  },
);

const Select = (props) => {
  const { name } = props;
  return (
    <>
      <InputLabel id={`id-${name}`}>{props.label}</InputLabel>
      <SelectBase labelId={`id-${name}`} {...props} />
    </>
  );
};

const DateInput = (props) => {
  const { value, variant, error, onChange, form, ...rest } = props;
  return (
    <KeyboardDatePicker
      disableToolbar
      value={new Date(value)}
      format="MM/ddd/YYYY"
      variant="inline"
      error={Boolean(error)}
      helperText={error}
      inputVariant={variant}
      onChange={(e) => form.setFieldValue(props.name, e)}
      {...rest}
    />
  );
};

export const FormDate = formikfy(DateInput, { form: true });
export const FormSelect = formikfy(Select);
export const FormInput: typeof TextField = formikfy(TextField);
