import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { Stack, useRouter, useNavigation, usePathname } from 'expo-router'

import { Man, Woman } from '../../constants/image'
import ButtonPicture from './common/ButtonPicture'

const ProfileCard = ( { id, name, age, city, type, pictureTotal, thumb, picture } ) => {
   const router = useRouter()
   const pathname = usePathname()

   let placeholder
   if( type === 'Man' ) {
      placeholder = Man
   } else {
      placeholder = Woman
      console.log('type', type)
   }

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
            className="w-48 h-48 rounded-lg bg-gray-200"
            placeholder={placeholder}
            placeholderContentFit='cover'
            transition={500}
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