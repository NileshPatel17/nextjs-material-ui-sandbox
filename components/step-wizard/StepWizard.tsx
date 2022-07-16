import React from 'react';

import { FormikStep } from './FormikStep';
import { FormikStepper } from './FormikStepper';

import { IStepWizardProps, IStep } from './types'

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));


export function StepWizard({ values, onFormSubmit }: IStepWizardProps) {
    return (
        <FormikStepper
            initialValues={values.initialValues}
            onSubmit={async (values) => {
                await sleep(3000);
                onFormSubmit(values)
                // console.log('values', values);
            }}
        >
            {values.steps.map((step: IStep) => (
                <FormikStep label={step.title} validationSchema={step.validationSchema}>
                    {step.content}
                </FormikStep>
            ))}
        </FormikStepper>
    )
}