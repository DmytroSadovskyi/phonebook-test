import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';

const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  password: Yup.string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={({ ...values }, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ field, form: { touched, errors } }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
              />
            )}
          </Field>

          <Field name="email">
            {({ field, form: { touched, errors } }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
              />
            )}
          </Field>

          <Field name="password">
            {({ field, form: { touched, errors } }) => (
              <TextField
                {...field}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                variant="outlined"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
                margin="normal"
                size="small"
                autoComplete="off"
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Field>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
