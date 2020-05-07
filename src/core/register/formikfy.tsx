import React from 'react';
import { Field } from 'formik';
import { FormControl } from '@material-ui/core';

export const formikfy = (Component, presetProps: any = {}) => {
  const Wrapped = (props) => {
    const name = props.name;
    const variant = props.variant || 'outlined';
    return (
      <Field>
        {({ form }) => {
          const { values, errors, touched, handleChange, setFieldTouched } = form;

          if (presetProps.form) {
            presetProps.form = form;
          }

          return (
            <FormControl variant={variant}>
              <Component
                {...presetProps}
                value={(values && values[name]) || ''}
                error={touched[name] && errors[name]}
                onChange={(e) => {
                  setFieldTouched(name);
                  console.log(name, e);
                  handleChange(e);
                }}
                variant={variant}
                {...props}
              />
            </FormControl>
          );
        }}
      </Field>
    );
  };

  Wrapped.displayName = Component.diplayName;
  return Wrapped;
};
