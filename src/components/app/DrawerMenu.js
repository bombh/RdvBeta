import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'

const DrawerMenu = (props) => {

   const router = useRouter()

   return (
      <DrawerContentScrollView {...props}>
         <Pressable onPress={() => router.push("/auth/me")} >
            <View className='w-full flex-row items-center space-x-4  pl-3 py-5'>
               <Image
                  source={{
                     uri:'https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR/1365176_14_638391.jpg'
                  }}
                  className='w-16 h-16 rounded-full'
               />
               <View>
                  <Text className='text-neutral-400 text-lg' numberOfLines={1}>Faaab</Text>
                  <Text className='text-neutral-600 text-sm' numberOfLines={1}>47 ans • Bruxelles</Text>

               </View>
            </View>
         </Pressable>
         
         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   )
}

export default DrawerMenu