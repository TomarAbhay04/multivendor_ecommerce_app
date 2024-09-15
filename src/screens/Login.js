import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 items-center justify-center px-4">
      {/* Welcome to SolSho */}
      <Text className="font-bold text-[38.83px] leading-[46.39px] mb-5 text-black">
        Welcome to SolSho
      </Text>

      {/* Email Input */}
      <View className="w-[364px] h-[59.33px] bg-[#F3F3F3] rounded-lg px-4 mb-5 flex-row items-center">
        <Image source={require('../assets/icons/email-icon.png')} className="w-6 h-6 mr-2.5" />
        <TextInput
          placeholder="Email ID"
          placeholderTextColor="#A9A9A9"
          className="flex-1 font-medium text-[12.94px] leading-[15.78px] "
        />
      </View>

      {/* Password Input */}
      <View className="w-[364px] h-[59.33px] bg-[#F3F3F3] rounded-lg px-4 mb-5 flex-row items-center">
        <Image source={require('../assets/icons/password-icon.png')} className="w-12 h-12 mr-2 -ml-3" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
          className="flex-1 font-medium text-[12.94px] leading-[15.78px]"
        />
      </View>

      {/* Remember Me and Forgot Password */}
      <View className="w-[364px] flex-row justify-between items-center mb-5">
        <View className="flex-row items-center">
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            className="mr-2"
          />
          <Text className="font-semibold text-[14px] leading-[17.07px] text-black">Remember Me</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
          <Text className="font-semibold text-[14px] leading-[17.07px] text-[#FF4B26]">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity className="w-[364px] h-[59px] bg-[#D0E1D4] rounded-lg justify-center items-center mb-5">
        <Text className="font-semibold text-[20.57px] leading-[26.3px] text-black">Login</Text>
      </TouchableOpacity>

      {/* OR Section */}
      <View className="w-[412px] h-[24px] justify-center items-center mb-4">
        <Text className="font-medium text-[12.94px] leading-[15.78px] text-center">- OR -</Text>
      </View>

      {/* Login as Vendor */}
      <TouchableOpacity className="w-[364px] h-[59px] bg-[#D0E1D4] rounded-lg justify-center items-center mb-5">
        <Text className="font-semibold text-[20.57px] leading-[26.3px] text-black">Login as Vendor</Text>
      </TouchableOpacity>

      {/* Don't Have an Account Text */}
      <View className="w-[413px] h-[50px] justify-center items-center mb-5">
        <Text className="font-medium text-[18px] leading-[26.3px]">
          Don't have an account?
        </Text>
      </View>

      {/* Create a User Account Button */}
      <TouchableOpacity 
        className="w-[364px] h-[59.33px] bg-[#1A1B25] rounded-lg justify-center items-center mb-2.5"
        onPress={() => navigation.navigate('AccountForm', { accountType: 'user'})} // Navigate to CreateAccount screen
      >
        <Text className="font-semibold text-[20.57px] leading-[26.3px] text-white">Create a User Account</Text>
      </TouchableOpacity>

      {/* Create a Vendor Account Button */}
      <TouchableOpacity
  className="w-[364px] h-[59.33px] bg-[#1A1B25] rounded-lg justify-center items-center"
  onPress={() => navigation.navigate('AccountForm', { accountType: 'vendor' })} // Navigate to Vendor Account
>
  <Text className="font-semibold text-[20.57px] leading-[26.3px] text-white">Create a Vendor Account</Text>
</TouchableOpacity>
    </View>
  );
};

export default Login;
