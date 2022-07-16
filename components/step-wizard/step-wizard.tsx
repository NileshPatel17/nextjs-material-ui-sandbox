import * as React from 'react';

import { FormikStepper, FormikStep, StepWizardProps, IStep } from './index';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export function StepWizard({ data }: StepWizardProps) {
  return (
    <FormikStepper
      data={data}
      // onFormSubmit={async (values) => {
      //   await sleep(3000);
      //   // console.log('values', values);
      //   onFormSubmit(values);
      // }}
    >
      {data.steps.map((step: IStep) => (
        <FormikStep label={step.title} validationSchema={step.validationSchema}>
          {step.content}
        </FormikStep>
      ))}
    </FormikStepper>
  );
}
