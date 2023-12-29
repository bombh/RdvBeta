import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'

const HomeScreen = () => {

   const router = useRouter()

   return (
      <>
   
      <Stack.Screen
         options={{
            headerShown: true,
            headerTitle: 'Mon Profil',
            headerTitleAlign: 'center',
            headerLeft: () => ( <DrawerToggleButton tintColor='#FFF' /> )
         }}
      />

      <View className="flex-1 items-center justify-center bg-white">
         <Text className='text-2xl text-neutral-500 pb-3'>Mon Profil</Text>
         <Text className='text-md text-neutral-800 pb-3'>(root)/auth/me</Text>

         
      </View>

      </>
      
   )
}

export default HomeScreen