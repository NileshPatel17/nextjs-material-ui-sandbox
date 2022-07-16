import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export interface FormikStepperProps extends FormikConfig<FormikValues> {
  // children: React.ReactNode;
  data: IStepData;
  // onFormSubmit: (values: any) => Promise<void>;
}

export interface IStep {
  key: number;
  title: string;
  validationSchema: any;
  content: React.ReactNode;
  backButtonLabel?: string;
  nextButtonlabel?: string;
}

export interface IStepData {
  initialValues: any;
  steps: Array<IStep>;
  lastStepButtonLabel?: string;
}

export interface StepWizardProps {
  data: IStepData;
  // onFormSubmit: (values: any) => Promise<void>;
}
