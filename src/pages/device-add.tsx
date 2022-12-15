import { Box, Card, CardContent } from '@material-ui/core';
import React, { ReactElement } from 'react';

import { Layout } from '../Layout';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';

// const Form = JSONSchemaForm.default;

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

function MultiStepForm() {
  return (
    <Box>
      <Box>Nilesh Patel</Box>
      <Card>
        <CardContent>
          <Form
            schema={schema}
            validator={validator}
            onChange={log('changed')}
            onSubmit={log('submitted')}
            onError={log('errors')}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

MultiStepForm.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MultiStepForm;
