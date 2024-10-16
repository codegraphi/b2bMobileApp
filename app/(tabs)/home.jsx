import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
    const navigation = useNavigation();
    // const [categories, setCategories] = useState(["Services"]);
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, title: 'Services' },
        { id: 2, title: 'Recharge' },
        { id: 3, title: 'Loans' },
        { id: 4, title: 'Others' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Background Image */}
                <Image
                    source={require('../../assets/background/7.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
                {/* Wallet Section */}
                <View style={styles.card}>
                    <View style={styles.row}>
                        <View style={styles.colLeft}>
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>
                                    Good Morning,
                                </Text>
                                <Text style={styles.cardTitle}>User</Text>
                                <Text style={styles.mb4}>
                                    Wallet
                                    <Text style={styles.bold}>₹ 42.00</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.colRight}>
                            <Image
                                source={require('../../assets/images/man-with-laptop-light.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
                {/* Services Section */}
                <View className="px-5 mt-5">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id}
                        className="overflow-visible"
                        renderItem={({ item }) => {
                            let isActive = item.id === activeCategory;

                            return (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: isActive
                                            ? 'white'
                                            : '#042e6f', // Active background color
                                    }}
                                    onPress={() => setActiveCategory(item.id)}
                                    className="p-4 px-5 rounded-full shadow mr-2 mb-5"
                                >
                                    <Text
                                        className={`font-semibold ${
                                            isActive
                                                ? 'text-black'
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

                {/* <Text style={styles.heading}>Services</Text>
      <Text style={styles.subHeading}>Look A glance towards services</Text> */}

                {/* Service Cards */}
                <View style={styles.row}>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AEPS')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/fingerprint.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>AEPS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('BBPS')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/bhim.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>BBPS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MoneyTransfer')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/money-transfer.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Money Transfer
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('WalletToWallet')
                            }
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/wallet.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>Wallet</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PersonalLoan')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/personal.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Personal Loan
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('BusinessLoan')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/loan.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Business Loan
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreditCard')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/credit-card.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Credit Card
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreditLine')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/credit-card1.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Credit Line
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DematAccount')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/trade.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Demat Account
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DTHRecharge')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/online.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    DTH Recharge
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('AccountOpening')
                            }
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/add-user.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Account Opening
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Insurance')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/healthcare.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Insurance
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Investment')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/financial-growth.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Investment
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('MobileRecharge')
                            }
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/mobile.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>Recharge</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('OtherServices')}
                        >
                            <View style={styles.serviceCard}>
                                <Image
                                    source={require('../../assets/images/more.png')}
                                    style={styles.serviceIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.serviceText}>
                                    Other Services
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexGrow: 1,
        marginTop: 42,
    },
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '110%', // Ensure it covers enough vertical space for scrolling
        top: 0,
        left: 0,
        opacity: 40,
    },
    card: {
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    serviceCard: {
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: "space-between",
    },
    colLeft: {
        flex: 7,
    },
    colRight: {
        flex: 5,
        alignItems: 'center',
    },
    cardBody: {
        padding: 16,
    },
    cardTitle: {
        marginTop: 5,
        marginBottom: 2,
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    mb4: {
        paddingTop: 20,
        marginTop: 10,
        fontSize: 25,
        color: 'white',
    },
    bold: {
        fontWeight: 'bold',
    },
    image: {
        height: 200,
        width: '140%',
    },
    mt2: {
        marginTop: 16,
    },
    newsHeading: {
        fontSize: 24,
        color: '#007bff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    marquee: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginTop: 8,
    },
    heading: {
        fontFamily: 'Poppins-Black',
        fontSize: 20,
        color: '#D2042D',
        marginTop: 20,
        marginBottom: 10,
    },
    subHeading: {
        fontSize: 18,
        color: '#555',
        marginBottom: 16,
        textAlign: 'center',
    },
    cardContainer: {
        width: '23%', // Adjusting width for 4 items per row
        marginBottom: 16,
        alignItems: 'center',
    },

    serviceContainer: {
        width: '25%', // Adjusting width for 4 items per row
        marginBottom: 16,
        alignItems: 'center',
    },

    serviceIcon: {
        width: 50,
        height: 50,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Home;
