import { Box, Card, CardContent } from '@material-ui/core';
import { Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';

import React from 'react';
import * as Yup from 'yup';

import { Layout } from '../Layout';
import { StepWizard, IStepWizardValues } from '../components/step-wizard';

const step0Schema = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
});

const step1Schema = Yup.object({
  money: Yup.mixed().when('millionaire', {
    is: true,
    then: Yup.number()
      .required()
      .min(
        1_000_000,
        'Because you said you are a millionaire you need to have 1 million'
      ),
    otherwise: Yup.number().required(),
  }),
});

const step2Schema = Yup.object({
  description: Yup.string(),
});

function Step0Content() {
  return (
    <>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="firstName"
          component={TextField}
          label="First Name"
        />
      </Box>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="lastName"
          component={TextField}
          label="Last Name"
        />
      </Box>
      <Box paddingBottom={2}>
        <Field
          name="millionaire"
          type="checkbox"
          component={CheckboxWithLabel}
          Label={{ label: 'I am a millionaire' }}
        />
      </Box>
    </>
  );
}
function Step1Content() {
  return (
    <>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="money"
          type="number"
          component={TextField}
          label="All the money I have"
        />
      </Box>
    </>
  );
}
function Step2Content() {
  return (
    <>
      <Box paddingBottom={2}>
        <Field
          fullWidth
          name="description"
          component={TextField}
          label="Description"
        />
      </Box>
    </>
  );
}

const stepWizardData: IStepWizardValues = {
  initialValues: {
    firstName: '',
    lastName: '',
    millionaire: false,
    money: 0,
    description: '',
  },
  steps: [
    {
      key: 0,
      title: 'Personal Data',
      validationSchema: step0Schema,
      backButtonLabel: 'baccck',
      content: <Step0Content />,
    },
    {
      key: 1,
      title: 'Bank Accounts',
      validationSchema: step1Schema,
      backButtonLabel: 'baccck',
      content: <Step1Content />,
    },
    {
      key: 2,
      title: 'More Info',
      validationSchema: step2Schema,
      backButtonLabel: 'baccck',
      content: <Step2Content />,
    },
  ],
};

export default function Home() {
  const onFormSubmit = (formValues: any) => {
    console.log(
      '%c formValues',
      'font-size: 36px; font-weight: bold',
      formValues
    );
  };
  return (
    <Box>
      <Box>Nilesh Patel</Box>
      <Card>
        <CardContent>
          <StepWizard values={stepWizardData} onFormSubmit={onFormSubmit} />
        </CardContent>
      </Card>
    </Box>
  );
}
