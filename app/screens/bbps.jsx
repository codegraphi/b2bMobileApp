import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const BBPS = () => {
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Refund' },
        { id: 3, title: 'Transaction History' },
        { id: 4, title: 'Exit' },
    ];

    const services = [
        {
            title: 'Broadband Postpaid',
            icon: require('../../assets/bbps/broadband.png'),
        },
        { title: 'Cable TV', icon: require('../../assets/bbps/cableTv.png') },
        {
            title: 'Clubs and Associations',
            icon: require('../../assets/bbps/club.png'),
        },
        {
            title: 'Education Fees',
            icon: require('../../assets/bbps/educationFee.png'),
        },
        {
            title: 'Electricity',
            icon: require('../../assets/bbps/electricity.png'),
        },
        { title: 'FASTag', icon: require('../../assets/bbps/fastTag.png') },
        { title: 'Gas', icon: require('../../assets/bbps/gas.png') },
        {
            title: 'General Insurance',
            icon: require('../../assets/bbps/generalInsurance.png'),
        },
    ];

    const handleIconPress = (service) => {
        console.log(`${service} clicked`);
    };

    return (
        <ScrollView contentContainerStyle={styles.controller}>
            {/* Navigation Bar */}
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

            {/* Content Section */}
            <View style={styles.cardContainer}>
                {services.map((service, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleIconPress(service.title)}
                        style={styles.iconWrapper}
                    >
                        <Image source={service.icon} style={styles.icon} />
                        <Text style={styles.iconLabel}>{service.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    controller: {
        padding: 10,
    },
    navbar: {
        marginTop: 10,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    categoryButton: {
        padding: 12,
        borderRadius: 25,
        marginRight: 10,
        elevation: 2, // Shadow effect for Android
    },
    categoryText: {
        fontWeight: 'bold',
    },
    cardContainer: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: -8,
        //justifyContent: 'space-around',
    },
    iconWrapper: {
        justifyContent: 'center',
        width: '32%', // Adjust width for two columns
        alignItems: 'center',
        marginVertical: 15,
    },
    icon: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    iconLabel: {
        fontSize: 12,
        color: '#333',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default BBPS;
