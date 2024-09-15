import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation(); // Navigation hook to navigate between screens
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false); // State to handle OTP section
  const [otp, setOtp] = useState(['', '', '', '']); // State to handle OTP inputs

  // Function to simulate email submission and OTP state transition
  const handleEmailSubmit = () => {
    // Simulate sending OTP and switching to OTP section
    setOtpSent(true);
  };

  // Placeholder function for OTP verification
  const handleVerifyOtp = () => {
    // Logic for verifying OTP will go here
    console.log('OTP:', otp.join(''));
    // Example placeholder action
    alert('Verify button clicked. OTP:', otp.join(''));
    navigation.navigate('Home'); // Navigate to Home screen after OTP verification
  };

  return (
    <View className="flex-1 items-center justify-start px-6 pt-10">
      {!otpSent ? (
        // Forgot Password Section
        <>
          {/* Forgot Password Heading */}
          <View className="w-[412px] h-[109px] items-start justify-start mb-4 pt-2 pb-2 pl-6 pr-6">
            <Text className="font-bold text-[38.83px] leading-[46.39px] text-black">
              Forgot
            </Text>
            <Text className="font-bold text-[38.83px] leading-[46.39px] text-black">
              Password?
            </Text>
          </View>

          {/* Email Input Section */}
          <View className="w-[412px] h-auto bg-transparent px-6 pt-6">
            {/* Email Input */}
            <View className="flex flex-row items-center w-full h-16 bg-gray-100 px-4 border-[1.08px] rounded-[16px] border-[#A8A8A9]">
              <Image
                source={require('../assets/icons/email-icon.png')}
                className="w-5 h-5 mr-2"
              />
              <TextInput
                placeholder="Email ID"
                placeholderTextColor="#A9A9A9"
                className="flex-1 text-montserrat font-medium text-sm"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Instruction Text */}
            <Text className="font-normal text-[15px] leading-[17.07px] text-[#A9A9A9] w-[364px] h-[48px] mb-4 mt-4 ml-1">
              * We will send you a message to set or reset your new password
            </Text>

            {/* Submit Button */}
            <TouchableOpacity
              className="w-[364px] h-[59px] bg-[#D0E1D4] rounded-lg justify-center items-center"
              onPress={handleEmailSubmit}
            >
              <Text className="font-semibold text-[20.57px] leading-[26.3px] text-black">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // OTP Section
        <>
          {/* OTP Heading */}
          <View className="w-[412px] h-[114px] items-center justify-start mt-[170px] pt-2 pb-2 px-6">
            <Text className="font-poppins font-bold text-[20px] leading-[49px] text-black text-center" style={{ letterSpacing: 1 }}>
              We have sent you an OTP to your email
            </Text>
          </View>

          {/* Email Display */}
          <Text className="font-normal text-[15px] leading-[17.07px] text-[#A9A9A9] w-[364px] h-[70px] text-center">
            {email.slice(0, 4)}****@gmail.com
          </Text>

          {/* OTP Input Section */}
          <View className="flex flex-row justify-between w-[315.5px] h-[60px] mb-4">
            {/* OTP Inputs */}
            {otp.map((value, index) => (
              <TextInput
                key={index}
                className="w-[67.5px] h-[60px] bg-gray-100 text-center text-[20px] border-[1px] border-[#A8A8A9] rounded-lg"
                maxLength={1}
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => {
                  const newOtp = [...otp];
                  newOtp[index] = text;
                  setOtp(newOtp);
                }}
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            className="w-[364px] h-[59px] bg-[#D0E1D4] rounded-lg justify-center items-center"
            onPress={handleVerifyOtp}
          >
            <Text className="font-semibold text-[20.57px] leading-[26.3px] text-black">
              Verify
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ForgotPassword;
