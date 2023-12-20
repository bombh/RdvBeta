import React, { useLayoutEffect } from 'react'

import { ScrollView, View, Text } from 'react-native'
import { Stack } from 'expo-router'

import FeaturedRow from '../../components/people/FeaturedRow'


const ControlPanel = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerTitle: 'Control Panel',
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerTitleAlign: 'center',
         }}/>

      <ScrollView
         className="bg-gray-50"
         contentContainerStyle={{
            paddingBottom: 20,
         }}
      >
         
         {/* Promo Message */}
         <View className="w-full bg-teal-500 p-3">
            <Text className="text-center text-white">ControlPanel Message</Text>
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

export default ControlPanel