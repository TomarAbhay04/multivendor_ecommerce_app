import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

const SearchAndAddress = () => {
  return (
    <View>
      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 p-2 mx-4 rounded-lg my-2">
        <TextInput
          placeholder="Search products..."
          className="flex-1 px-2"
        />
        <TouchableOpacity>
          {/* <FontAwesome name="search" size={20} color="gray" /> */}
        </TouchableOpacity>
      </View>

      {/* Address Section */}
      <View className="flex-row items-center justify-between px-4 py-2">
        {/* <FontAwesome name="map-marker" size={24} color="black" /> */}
        <View className="ml-2">
          <Text>Deliver to John Doe</Text>
          <Text>1234 Main Street, City, Country</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchAndAddress;
