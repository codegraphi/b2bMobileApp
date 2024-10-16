import { colors } from '@/utils/colors';
import { fonts } from '@/utils/fonts';
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
import { FlatList } from 'react-native-gesture-handler';
const WalletToWallet = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Refund' },
        { id: 3, title: 'Pending Status' },
        { id: 4, title: 'Exit' },
    ];

    const handleSubmit = () => {
        // Add your submit logic here (e.g., API call)
        if (mobileNumber.length === 10) {
            Alert.alert(
                'Mobile Number Submitted',
                `You entered: ${mobileNumber}`,
            );
        } else {
            Alert.alert(
                'Error',
                'Please enter a valid 10-digit mobile number.',
            );
        }
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
                                className="p-4 rounded-full shadow mr-3 mb-5"
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

            {/* Welcome Marquee */}

            {/* Form Section */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>
                        <Text style={styles.textGreen}>Wallet To Wallet</Text>{' '}
                        <Text style={styles.textBlue}>Transfer</Text>
                    </Text>
                </View>
                {/* <Text style={styles.cardTitle}>
                    <Text style={styles.textGreen}>Search User</Text>
                </Text> */}
                <View style={styles.cardBody}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="9876543210"
                            keyboardType="numeric"
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                            maxLength={10} // Limit input to 10 digits
                        />
                    </View>

                    {/* Submit Button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
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
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    navText: {
        fontSize: 16,
        color: '#007bff',
    },
    marquee: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    textGreen: {
        color: 'black',
        fontFamily: fonts.Regular,
    },
    textBlue: {
        color: 'green',
        fontFamily: fonts.Bold,

    },
    //   card: {
    //     backgroundColor: 'white',
    //     borderRadius: 8,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     elevation: 3,
    //     padding: 20,
    //   },
    cardHeader: {
        // backgroundColor: 'green',
        // padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    cardHeaderText: {
        fontSize: 20,
        color: 'white',
    },
    cardTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    cardBody: {
        paddingBottom: 20,
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 100,
        padding: 20,
        marginTop: 5,
        fontFamily: fonts.Light,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    submitButton: {
        backgroundColor: colors.red,
        padding: 15,
        borderRadius: 100,
        width: '48%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default WalletToWallet;
