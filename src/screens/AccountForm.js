import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const AccountForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { accountType } = route.params; // Get account type (user or vendor) from route params

  const isVendor = accountType === 'vendor';

  return (
    <View className="flex-1 items-center px-4 pt-16">
      {/* Dynamic Heading */}
      <View className="w-full max-w-md px-6 mb-6">
        <Text className="font-montserrat font-bold text-3xl leading-9 text-black">
          {isVendor ? 'Create a Vendor Account' : 'Create a User Account'}
        </Text>
      </View>

      {/* Input Fields */}
      <View className="w-full max-w-md px-6 pb-4 space-y-2">
        {/* Name Input */}
        <View className="flex flex-row items-center w-full h-16 bg-gray-100 px-4 border-[1.08px] rounded-[16px] border-[#A8A8A9]">
          <Image source={require('../assets/icons/name-icon.png')} className="w-8 h-8 mr-2" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#A9A9A9"
            className="flex-1 text-montserrat font-medium text-sm"
          />
        </View>

        {/* Email Input */}
        <View className="flex flex-row items-center w-full h-16 bg-gray-100 px-4 border-[1.08px] rounded-[16px] border-[#A8A8A9]">
          <Image source={require('../assets/icons/email-icon.png')} className="w-5 h-5 mr-2" />
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="#A9A9A9"
            className="flex-1 text-montserrat font-medium text-sm ml-3"
          />
        </View>

        {/* Password Input */}
        <View className="flex flex-row items-center w-full h-16 bg-gray-100 px-2 border-[1.08px] rounded-[16px] border-[#A8A8A9]">
          <Image source={require('../assets/icons/password-icon.png')} className="w-10 h-8 mr-2" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            className="flex-1 text-montserrat font-medium text-sm"
          />
        </View>

        {/* Confirm Password Input */}
        <View className="flex flex-row items-center w-full h-16 bg-gray-100 px-2 border-[1.08px] rounded-[16px] border-[#A8A8A9]">
          <Image source={require('../assets/icons/password-icon.png')} className="w-10 h-8 mr-2" />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            className="flex-1 text-montserrat font-medium text-sm"
          />
        </View>
      </View>

      {/* Terms and Conditions */}
      <Text className="font-montserrat text-sm font-medium leading-6 text-center mb-5 ">
        By clicking the {isVendor ? 'Register as Vendor' : 'Create Account'} button, you agree to the platform’s Terms and Conditions.
      </Text>

      {/* Create/ Register Button */}
      <TouchableOpacity className="w-[364px] h-[59px] bg-[#D0E1D4] rounded-lg justify-center items-center mb-4">
        <Text className="font-semibold text-[20.57px] leading-[26.3px] text-black">
          {isVendor ? 'Register as Vendor' : 'Create Account'}
        </Text>
      </TouchableOpacity>

      {/* Already have an account? */}
      <Text className="text-center w-[413px] h-[34px] py-1">Already have an account?</Text>

      {/* Login Button */}
      <TouchableOpacity className="w-[364px] h-[59.33px] bg-[#1A1B25] rounded-lg justify-center items-center px-6 mt-2" 
      onPress={() => navigation.navigate('Login')}>
        <Text className="font-semibold text-[20.57px] leading-[26.3px] text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountForm;
