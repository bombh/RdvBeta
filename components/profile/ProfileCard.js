import {
   View, Text, TouchableOpacity, Image
} from 'react-native'

import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const ProfileCard = ({
   id,
   imgUrl,
   title,
   rating,
   genre,
   address,
   short_description,
   dishes,
   long,
   lat,
}) => {
  return (
    <TouchableOpacity className="bg-white rounded-sm shadow">
      <Image
         source={{
            uri: imgUrl,
         }}
         className="w-64 h-36 rounded-sm"
      />

      <View className="px-3 pb-4">
         <Text className="font-bold text-lg pt-2">{title}</Text>
         <View className="flex-row items-center space-x-1">
            <StarIcon color={"#00CCBB"} size={20} />
            <Text className="text-xs text-green-500">{rating}</Text>
            <Text className="text-xs text-gray-500"> {genre}</Text>
         </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileCard