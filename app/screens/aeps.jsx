import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { FlatList } from 'react-native';

const AEPS = () => {
    const [activeCategory, setActiveCategory] = useState(1);

    const validationSchema = Yup.object().shape({
        aadhaarNumber: Yup.string()
            .length(12, 'Aadhaar must be 12 digits')
            .required('Aadhaar is required'),
        bankIIN: Yup.string()
            .length(6, 'Bank IIN must be 6 digits')
            .required('Bank IIN is required'),
        amount: Yup.number()
            .positive('Enter a valid amount')
            .required('Amount is required'),
    });

    const categories = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Balance Enquiry' },
        { id: 3, title: 'Mini Statement' },
        { id: 4, title: 'Exit' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.navbar}>
                <View className>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={true}
                        // className="overflow-visible"
                        renderItem={({ item }) => {
                            let isActive = item.id === activeCategory;

                            return (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: isActive
                                            ? colors.red
                                            : colors.blue, // Active background color
                                    }}
                                    onPress={() => setActiveCategory(item.id)}
                                    className="p-4 px-5 rounded-full shadow mr-2 mb-5"
                                >
                                    <Text
                                        className={`font-semibold ${
                                            isActive
                                                ? 'text-white'
                                                : 'text-white'
                                        }`} // Apply text color dynamically
                                    >
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>

            <Formik
                initialValues={{ aadhaarNumber: '', bankIIN: '', amount: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert('Form submitted successfully!');
                    console.log(values);
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
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="person-outline"
                                size={20}
                                color={colors.secondary}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Aadhaar Number"
                                keyboardType="numeric"
                                maxLength={12}
                                onChangeText={handleChange('aadhaarNumber')}
                                onBlur={handleBlur('aadhaarNumber')}
                                value={values.aadhaarNumber}
                            />
                        </View>
                        {touched.aadhaarNumber && errors.aadhaarNumber && (
                            <Text style={styles.errorText}>
                                {errors.aadhaarNumber}
                            </Text>
                        )}

                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="card-outline"
                                size={20}
                                color={colors.secondary}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Bank IIN"
                                keyboardType="numeric"
                                maxLength={6}
                                onChangeText={handleChange('bankIIN')}
                                onBlur={handleBlur('bankIIN')}
                                value={values.bankIIN}
                            />
                        </View>
                        {touched.bankIIN && errors.bankIIN && (
                            <Text style={styles.errorText}>
                                {errors.bankIIN}
                            </Text>
                        )}

                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="cash-outline"
                                size={20}
                                color={colors.secondary}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                                onChangeText={handleChange('amount')}
                                onBlur={handleBlur('amount')}
                                value={values.amount}
                            />
                        </View>
                        {touched.amount && errors.amount && (
                            <Text style={styles.errorText}>
                                {errors.amount}
                            </Text>
                        )}

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    navItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: colors.secondary,
    },
    activeNavItem: {
        backgroundColor: colors.primary,
    },
    navText: {
        color: colors.white,
        fontFamily: fonts.Regular,
    },
    activeNavText: {
        color: colors.white,
        fontFamily: fonts.Bold,
    },
    form: {
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        padding: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: colors.red,
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.SemiBold,
    },
});

export default AEPS;
