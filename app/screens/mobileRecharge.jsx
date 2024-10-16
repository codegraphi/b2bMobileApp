
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const MobileRecharge = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [agentName] = React.useState('John Doe'); // Replace with actual customer name from your state management
  const [operator, setOperator] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const uniqueRefNo = `REF${Math.floor(Math.random() * 100000)}`; // Unique reference number generation

  const handleSubmit = () => {
    // Add your submit logic here (e.g., API call)
    Alert.alert('Success', `Mobile Number: ${mobileNumber}, Amount: ${amount}, Reference: ${uniqueRefNo}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <Text style={styles.navItem} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={styles.navItem} onPress={() => {}}>Refund</Text>
        <Text style={styles.navItem} onPress={() => {}}>Pending Status</Text>
        <Text style={styles.navItem} onPress={() => navigation.navigate('Home')}>Exit</Text>
      </View>

      {/* Welcome Marquee */}
      <Text style={styles.marquee}>
        Welcome To <Text style={styles.textSuccess}>Graphi</Text><Text style={styles.textInfo}>Graphi</Text> Solutions 🙂
      </Text>

      {/* Form Section */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            <Text style={styles.textSuccess}>Mobile</Text> <Text style={styles.textInfo}>Recharge</Text>
          </Text>
        </View>
        
        <View style={styles.cardBody}>
          {/* Mobile Number */}
          <TextInput
            style={styles.input}
            placeholder="9876543210"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            required
          />
          
          {/* Agent Name (Account) */}
          <TextInput
            style={styles.input}
            value={agentName}
            editable={false}
          />
          
          {/* Select Operator */}
          <Picker
            selectedValue={operator}
            style={styles.picker}
            onValueChange={(itemValue) => setOperator(itemValue)}
            required
          >
            <Picker.Item label="Select Operator" value="" />
            <Picker.Item label="Jio" value="116" />
            <Picker.Item label="BSNL" value="4" />
            <Picker.Item label="Vodafone" value="37" />
            <Picker.Item label="Airtel" value="3" />
            <Picker.Item label="Idea" value="12" />
          </Picker>

          {/* Amount */}
          <TextInput
            style={styles.input}
            placeholder="Enter the amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            required
          />

          {/* Unique Reference Number */}
          <TextInput
            style={styles.input}
            value={uniqueRefNo}
            editable={false}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
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
  navItem: {
    fontSize: 16,
    color: '#007bff',
  },
  marquee: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  textSuccess: {
    color: 'green',
  },
  textInfo: {
    color: 'blue',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    padding: 20,
  },
  cardHeader: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    color: 'white',
  },
  cardBody: {
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MobileRecharge;
