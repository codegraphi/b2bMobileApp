import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { FlatList } from 'react-native-gesture-handler';

const MoneyTransfer = () => {
    const [form, setForm] = useState({
        senderMobile: '',
        beneficiaryAccount: '',
        beneficiaryIFSC: '',
        beneficiaryName: '',
        amount: '',
    });
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Refund' },
        { id: 3, title: 'Transaction History' },
        { id: 4, title: 'Exit' },
    ];

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        // Add your submit logic here (e.g., API call)
        Alert.alert(
            'Transaction Submitted',
            'Your transaction is being processed.',
        );
    };

    const handleReset = () => {
        setForm({
            senderMobile: '',
            beneficiaryAccount: '',
            beneficiaryIFSC: '',
            beneficiaryName: '',
            amount: '',
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        const isActive = item.id === activeCategory;

                        return (
                            <TouchableOpacity
                                style={[
                                    styles.categoryButton,
                                    {
                                        backgroundColor: isActive
                                            ? 'white'
                                            : '#042e6f',
                                    },
                                ]}
                                onPress={() => setActiveCategory(item.id)}
                                className="p-4 rounded-full shadow mr-2 mb-5"
                            >
                                <Text
                                    style={[
                                        styles.categoryText,
                                        { color: isActive ? 'black' : 'white' },
                                    ]}
                                >
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

            {/* Form Container */}
            <View style={styles.formContainer}>
                {/* Form Inputs */}
                <View style={styles.inputContainer}>
                    <View style={styles.formGroup}>
                        <Ionicons
                            name="call-outline"
                            size={20}
                            color={colors.secondary}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Sender's Mobile Number"
                            maxLength={10}
                            keyboardType="numeric"
                            value={form.senderMobile}
                            onChangeText={(value) =>
                                handleChange('senderMobile', value)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Ionicons
                            name="wallet-outline"
                            size={20}
                            color={colors.secondary}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Beneficiary Account Number"
                            value={form.beneficiaryAccount}
                            onChangeText={(value) =>
                                handleChange('beneficiaryAccount', value)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Ionicons
                            name="card-outline"
                            size={20}
                            color={colors.secondary}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Beneficiary IFSC Code"
                            value={form.beneficiaryIFSC}
                            onChangeText={(value) =>
                                handleChange('beneficiaryIFSC', value)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color={colors.secondary}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Beneficiary's Name"
                            value={form.beneficiaryName}
                            onChangeText={(value) =>
                                handleChange('beneficiaryName', value)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Ionicons
                            name="cash-outline"
                            size={20}
                            color={colors.secondary}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Transaction Amount"
                            keyboardType="numeric"
                            value={form.amount}
                            onChangeText={(value) =>
                                handleChange('amount', value)
                            }
                        />
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.resetButton}
                            onPress={handleReset}
                        >
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 15,
        backgroundColor: colors.white,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    navText: {
        fontSize: 16,
        color: colors.secondary,
    },
    marquee: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    textGreen: {
        color: 'green',
    },
    textBlue: {
        color: 'blue',
    },
    formContainer: {
        // backgroundColor: 'white',
        // borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 3,
        // padding: 20,
    },
    formTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        paddingBottom: 20,
    },
    formGroup: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        padding: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    submitButton: {
        backgroundColor: colors.red,
        padding: 15,
        borderRadius: 100,
        width: '48%',
    },
    resetButton: {
        backgroundColor: colors.blue,
        padding: 15,
        borderRadius: 100,
        width: '48%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.SemiBold,
    },
});

export default MoneyTransfer;
