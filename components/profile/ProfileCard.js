import { View, Text, TouchableOpacity, Image } from 'react-native'

import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const ProfileCard = ({ id, imgUrl, title, age, city }) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg shadow--sm">
      <Image
         source={{
            uri: imgUrl,
         }}
         className="w-40 h-40 rounded-lg"
      />

      <View className="px-3 pb-4">
         <Text className="text-center text-lg pt-2 uppercase text-gray-400">{title}</Text>
         <Text className="text-xs text-center text-gray-600"> {age} - {city}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileCard