import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'

const HomeScreen = () => {

   const router = useRouter()

   return (
      <>
   
      <Drawer.Screen
         options={{
            headerShown: true,
            headerTitle: 'Control Panel',
            headerTitleAlign: 'center',
            headerLeft: () => ( <DrawerToggleButton tintColor='#FFF' /> )
         }}
      />

      <View className="flex-1 items-center justify-center bg-white">
         <Text className='text-2xl text-neutral-500 pb-3'>Control Panel2</Text>
         <Text className='text-md text-neutral-800 pb-3'>(root)/auth/home</Text>

         <View className="flex-row w-full justify-center">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={() => router.push('/(root)/auth/home/detail')}>
                  <Text className="text-lg fonsem text-white text-center">Detail</Text>
            </Pressable>
         </View>
      </View>

      </>
      
   )
}

export default HomeScreen