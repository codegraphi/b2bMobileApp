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
import Carousel from '@/components/carousel';
import { colors } from '@/utils/colors';

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
    const IconButton = ({ label, image, onPress }) => (
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
            <Image source={image} style={styles.icon} resizeMode="contain" />
            <Text style={styles.iconText}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <ScrollView
                contentContainerStyle={[
                    styles.scrollViewContent,
                    { paddingBottom: 80 },
                ]}
            >
                {/* Pay & Add Money Section */}
                <View style={styles.payAddMoneyContainer}>
                    <IconButton
                        label="Pay"
                        image={require('../../assets/pay.png')}
                        onPress={() => console.log('Pay Pressed')}
                    />
                    <IconButton
                        label="Add Money"
                        image={require('../../assets/add.png')}
                        onPress={() => console.log('Add Money Pressed')}
                    />
                </View>

                {/* Background Image */}
                {/* <Image
                    source={require('../../assets/background/9.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                /> */}
                {/* Carousel */}
                {/* <View style={styles.carouselContainer}>
                    <Carousel />
                </View> */}

                {/* Services Section */}
                <View style={styles.categoryListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        renderItem={({ item }) => {
                            const isActive = item.id === activeCategory;
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.categoryButton,
                                        {
                                            backgroundColor: isActive
                                                ? colors.red
                                                : colors.blue,
                                        },
                                    ]}
                                    onPress={() => setActiveCategory(item.id)}
                                     className="p-4 rounded-full shadow"
                                >
                                    <Text
                                        style={[
                                            styles.categoryText,
                                            isActive && styles.activeText,
                                        ]}
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
                                    source={require('../../assets/images/BBPS.svg.png')}
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
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollViewContent: {
        padding: 10,
    },
    payAddMoneyContainer: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        padding: 10,
        backgroundColor: colors.blue,
        borderRadius: 20,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    iconText: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    carouselContainer: {
        marginHorizontal: 16,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    categoryList: {
        paddingLeft: 16,
        marginTop: 10,
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 10,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    activeText: {
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'space-between',
        marginTop: 20,
    },
    serviceContainer: {
        width: '25%',
        marginBottom: 16,
        alignItems: 'center',
    },
    serviceCard: {
        padding: 10,
        alignItems: 'center',
    },
    serviceIcon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    serviceText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Home;
