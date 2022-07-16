import {
    Button,
    CircularProgress,
    Grid,
    Step,
    StepLabel,
    Stepper,
} from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';


import React, { useState } from 'react';
import { FormikStepProps } from './types';

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
    const childrenArray = React.Children.toArray(
        children
    ) as React.ReactElement<FormikStepProps>[];

    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const currentChild = childrenArray[step];

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    };

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema ?? null}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);
                    helpers.setTouched({});
                }
            }}
        >
            {({ isSubmitting }) => (
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
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => setStep((s) => s - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                        ) : null}

                        <Grid item>
                            <Button
                                startIcon={
                                    isSubmitting ? <CircularProgress size="1rem" /> : null
                                }
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
