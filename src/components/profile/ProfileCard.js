import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Stack, useRouter, useNavigation, usePathname } from 'expo-router'

import ButtonPicture from './common/ButtonPicture'

const ProfileCard = ( { id, name, age, city, pictureTotal, thumb, picture } ) => {
   const router = useRouter()
   const pathname = usePathname()

   return (
      <Pressable
         className="bg-white rounded-lg shadow-sm active:opacity-80 active:bg-gray-100 relative"
         onPress={ () => router.push({
            //pathname: `/auth/people/${id}`,
            pathname: `${pathname}/detail`,
            params: { id, name, age, city, pictureTotal, thumb, picture }
         })}
      >
      
         <Image
            
            source={{
               uri: thumb,
            }}
            className="w-48 h-48 rounded-lg"
         />

         {/* Online status */}
         <View className="rounded-full border border-white/70 bg-black/50 w-4 h-4 absolute top-2 right-2"></View>

         {/* Icons action */}
         <View className="flex-row justify-evenly -mt-7">
            <ButtonPicture total={pictureTotal} />      
         </View>

         {/* Infos */}
         <View className="px-3 pb-3 -mt-2 w-48">
            <Text className="text-center text-lg pt-2 uppercase text-gray-400">{name}</Text>
            <Text numberOfLines={1} className="text-xs text-center text-gray-600"> {age} ans - {city}</Text>
            <Text numberOfLines={1} className="text-xs text-center text-amber-500 pt-1">#randonnées #ski #funk</Text>
         </View>

    </Pressable>
  )
}

export default ProfileCard