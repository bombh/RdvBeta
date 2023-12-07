import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

import { HeartIcon, ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'

import ButtonChat from './common/ButtonChat'
import ButtonFlash from './common/ButtonFlash'

const router = useRouter()

let id = 123

const ProfileCard = ({ id, imgUrl, name, age, city }) => {
  return (
    <Pressable
      className="bg-white rounded-lg shadow border border-gray-100 active:opacity-70 active:bg-gray-100 relative"
      onPress={() => router.push(`/auth/people/${id}`)}
      >
      <Image
         source={{
            uri: imgUrl,
         }}
         className="w-40 h-40 rounded-lg"
      />

      {/* Online status */}
      <View className="rounded-full border border-white/70 bg-black/50 w-4 h-4 absolute top-2 right-2"></View>

      {/* Icons action */}
      <View className="flex-row justify-evenly -mt-5">

         <ButtonChat />
         
         <ButtonFlash />
         
      </View>

      {/* Infos */}
      <View className="px-3 pb-3 -mt-2 w-40">
         <Text className="text-center text-lg pt-2 uppercase text-gray-400">{name}</Text>
         <Text numberOfLines={1} className="text-xs text-center text-gray-600"> {age} - {city}</Text>
      </View>

    </Pressable>
  )
}

export default ProfileCard