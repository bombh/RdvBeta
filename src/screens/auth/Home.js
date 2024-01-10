import React, { useLayoutEffect } from 'react'

import { ScrollView, View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'

import FeaturedRow from '../../components/profile/FeaturedRow'

const HomeScreen = () => {
  return (
   <>
      <Drawer.Screen
         options={{
            headerShown: true,
            headerTitle: 'Control Panel',
            headerTitleAlign: 'center',
            headerLeft: () => <DrawerToggleButton tintColor='#FFF' />
         }}
      />


      <ScrollView
         className="bg-gray-50"
         contentContainerStyle={{
            paddingBottom: 20,
         }}
      >
         
         {/* Promo Message */}
         <View className="w-full bg-teal-500 p-3">
            <Text className="text-center text-white">HomeScreen Message</Text>
         </View>
         
         <View className="h-1"></View>

         {/* Featured Rows */}
         <FeaturedRow 
            id="1"
            title="Vous aimerez peut-être"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="2"
            title="Ils ont flashé sur vous"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="3"
            title="Les nouveaux"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="4"
            title="Dans votre région"
            description=""
            featuredCategory="featured"
         />

      </ScrollView>
   </>
  )
}

export default HomeScreen