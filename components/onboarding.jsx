import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '@/utils/fonts';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/onboarding.gif')}
                style={styles.bannerImage}
            />
            <Text style={styles.title}>B2B PANEL</Text>
            <Text style={styles.subTitle}>
                Welcome to our B2B panel. We hope you have a good time!
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: '#00baf2' },
                    ]}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.loginButtonWrapper,
                        { backgroundColor: colors.red },
                    ]}
                    onPress={handleSignup}
                >
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/CodeGraphi.png')}
                style={styles.logo}
            />
            <Text style={styles.subTitle}>By CodeGraphi</Text>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between', // Evenly distribute elements vertically
        paddingVertical: height * 0.05, // Add some padding to prevent elements from touching screen edges
    },
    logo: {
        marginTop: height * 0.02,
        height: height * 0.08,
        width: height * 0.08,
        marginBottom: height * -0.04, // Adjust the margin to ensure it's spaced well
    },
    bannerImage: {
        height: height * 0.4,
        width: height * 0.4,
        resizeMode: 'contain', // Ensures the image scales without distortion
    },
    title: {
        fontSize: width * 0.1,
        fontFamily: fonts.SemiBold,
        color: colors.primary,
        textAlign: 'center',
        marginVertical: height * 0.02, // Provide space between the title and subtitle
    },
    subTitle: {
        fontSize: width * 0.045,
        fontFamily: fonts.Medium,
        color: colors.secondary,
        textAlign: 'center',
        paddingHorizontal: width * 0.1, // Add some padding to ensure text isn't too close to the screen edge
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: height * 0.02, // Add margin to push the buttons slightly below the subtitle
    },
    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%', // Ensures the buttons take up the appropriate width of the screen
        height: height * 0.07, // Adjust button height for all screen sizes
        borderRadius: 50,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: width * 0.045,
        fontFamily: fonts.SemiBold,
    },
    signupButtonText: {
        color: colors.white,
        fontSize: width * 0.045,
        fontFamily: fonts.SemiBold,
    },
});
