import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    const handleHome = async () => {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.reset({
            index: 0,
            routes: [{ name: 'AppNav' }],
        });
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'AppNav' }],
                });
            }
        };
        checkLoginStatus();
    }, [navigation]);

    // Form validation schema
    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required')
            .oneOf(['codegraphi@gmail.com'], 'Invalid email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
            .oneOf(['codegraphi'], 'Invalid password'),
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButtonWrapper}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name={'arrow-back-outline'}
                    color={colors.primary}
                    size={25}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    handleHome();
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View style={styles.formContainer}>
                        {/* Email Input */}
                        <View style={styles.inputContainer}>
                            <Ionicons
                                name={'mail-outline'}
                                size={30}
                                color={colors.secondary}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your email"
                                placeholderTextColor={colors.secondary}
                                keyboardType="email-address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        {errors.email && touched.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}

                        {/* Password Input */}
                        <View style={styles.inputContainer}>
                            <SimpleLineIcons
                                name={'lock'}
                                size={30}
                                color={colors.secondary}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your password"
                                placeholderTextColor={colors.secondary}
                                secureTextEntry={secureEntery}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <TouchableOpacity
                                onPress={() => setSecureEntery((prev) => !prev)}
                            >
                                <SimpleLineIcons
                                    name={'eye'}
                                    size={20}
                                    color={colors.secondary}
                                />
                            </TouchableOpacity>
                        </View>
                        {errors.password && touched.password && (
                            <Text style={styles.errorText}>
                                {errors.password}
                            </Text>
                        )}

                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.loginButtonWrapper}
                        >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.continueText}>
                            or continue with
                        </Text>
                        <TouchableOpacity style={styles.googleButtonContainer}>
                            <Image
                                source={require('../assets/icons/CodeGraphi.png')}
                                style={styles.googleImage}
                            />
                            <Text style={styles.googleText}>Google</Text>
                        </TouchableOpacity>

                        <View style={styles.footerContainer}>
                            <Text style={styles.accountText}>
                                Don’t have an account?
                            </Text>
                            <TouchableOpacity onPress={handleSignup}>
                                <Text style={styles.signupText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        marginTop: 25,
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: 10,
    },
    forgotPasswordText: {
        textAlign: 'right',
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    loginButtonWrapper: {
        height: 60,
        backgroundColor: '#00baf2',
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        padding: 10,
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    googleButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    googleImage: {
        height: 40,
        width: 40,
    },
    googleText: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
    },
    signupText: {
        color: colors.red,
        fontFamily: fonts.Bold,
    },
});
