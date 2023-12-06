import React, { useLayoutEffect } from 'react'

import { ScrollView, View, Text } from 'react-native';
import { Stack } from 'expo-router';

// import Categories from '../components/Categories'

import HomeRow from '../../components/profile/HomeRow'


const ControlPanel = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerTitle: 'Control Panel',
            headerBackTitleVisible: false,
            headerBackVisible: false,
         }}/>

      <ScrollView
         className="bg-white"
         contentContainerStyle={{
            paddingBottom: 50,
         }}
      >
         
         {/* Promo Message */}
         <View className="w-full bg-teal-500 p-2">
            <Text className="text-center text-white">ControlPanel Message</Text>
         </View>
         

         {/* Featured Rows */}
         <HomeRow 
            id="1"
            title="Vous aimerez peut-être"
            description=""
            featuredCategory="featured"
         />


         <HomeRow 
            id="2"
            title="Ils ont flashé sur vous"
            description=""
            featuredCategory="featured"
         />

         <HomeRow 
            id="3"
            title="Les nouveaux"
            description=""
            featuredCategory="featured"
         />

         <HomeRow 
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