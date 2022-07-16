import * as React from 'react';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';

import { FormikStepProps, FormikStepperProps } from './types';

const { useState } = React;

export function FormikStepper({
  children,
  data,
  // onSubmit,
  ...props
}: FormikStepperProps) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const backButtonLabel = data.steps[step].backButtonLabel ?? 'Back';
  const nextButtonlabel = data.steps[step].nextButtonlabel ?? 'Nexttt';
  // const lastStepButtonLabel = data.lastStepButtonLabel ?? 'Submit';

  return (
    <Formik
      {...props}
      initialValues={data.initialValues}
      validationSchema={currentChild.props.validationSchema ?? null}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
          // onFormSubmit(values);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {(formikProps) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={formikProps.isSubmitting}
                  variant="contained"
                  color="secondary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  {backButtonLabel}
                </Button>
              </Grid>
            ) : null}

            <Grid item>
              <Button
                startIcon={
                  formikProps.isSubmitting ? (
                    <CircularProgress size="1rem" />
                  ) : null
                }
                disabled={formikProps.isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {formikProps.isSubmitting
                  ? 'Submitting'
                  : isLastStep()
                  ? 'Submittt'
                  : nextButtonlabel}
              </Button>
            </Grid>
          </Grid>
          <pre>{JSON.stringify(formikProps, null, 1)}</pre>
        </Form>
      )}
    </Formik>
  );
}
