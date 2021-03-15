/* eslint-disable */
import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import {
    useDispatch, useSelector
} from 'react-redux';
import { authActions } from '../../redux';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));
const VerifyAccountView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { loading, success, token } = useSelector((state) => state.auth);
    if ((!loading && success) || token) { navigate('/resetPassword', { replace: true }); }

    return (
        <Page
            className={classes.root}
            title="Verification Email"
        >
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: ''
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string().max(255).required('Verification Code is required'),
                            })
                        }
                        onSubmit={(email) => {
                            dispatch(authActions.forgotPassword(email));
                        }}
                    > 
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            touched,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box mb={3}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Reset Your Account
                  </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        please enter email here to reset your account
                  </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Enter your Email"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    variant="outlined"
                                />

                                <Box my={2}>
                                    <Button
                                        color="primary"
                                        disabled={loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Submit
                  </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </Page>
    );
};

export default VerifyAccountView;
