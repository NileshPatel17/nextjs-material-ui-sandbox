import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';

export interface IStep {
  key: number;
  title: string;
  validationSchema: any;
  content: React.ReactNode;
  backButtonLabel?: string;
  nextButtonlabel?: string;
}

export interface IStepWizardValues {
  initialValues: any;
  steps: Array<IStep>;
  lastStepButtonLabel?: string;
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export interface IStepWizardProps {
  values: IStepWizardValues;
  onFormSubmit: (values: any) => void;
}