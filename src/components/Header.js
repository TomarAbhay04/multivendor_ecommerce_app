import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View 
      className="flex-row items-center justify-between w-[412px] h-[64px]  px-4 py-2" 
      style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16, position: 'absolute', top: 51 }}
    >
      {/* App Logo */}
      <Image 
        source={require('../assets/icons/home-logo.png')} 
        style={{ width: 123, height: 42, padding: 4 }} 
        resizeMode="contain" 
      />

      {/* Notification and Cart Icons */}
      <View className="flex-row space-x-2">
        {/* Notification Icon */}
        <TouchableOpacity>
          <Image 
            source={require('../assets/icons/notification.png')} 
            style={{ width: 48, height: 48 }} 
            resizeMode="contain" 
          />
        </TouchableOpacity>

        {/* Cart Icon */}
        <TouchableOpacity>
          <Image 
            source={require('../assets/icons/cart.png')} 
            style={{ width: 48, height: 48 }} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
