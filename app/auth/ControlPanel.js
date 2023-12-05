import React, { useLayoutEffect } from 'react'

import { Stack } from 'expo-router';

// import Categories from '../components/Categories'

import FeaturedRow from '../../components/profile/FeaturedRow'
import { ScrollView } from 'react-native-gesture-handler';


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
            className="bg-gray-100 px-2"
            contentContainerStyle={{
               paddingBottom: 50,
            }}
         >
         
         {/* Featured Rows */}
         <FeaturedRow 
            id="123"
            title="Vous aimerez peut-être"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="1234"
            title="Ils ont flashé sur vous"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="12345"
            title="Les nouveaux"
            description=""
            featuredCategory="featured"
         />

         <FeaturedRow 
            id="123456"
            title="Dans votre région"
            description=""
            featuredCategory="featured"
         />


      </ScrollView>
      
   </>
  )
}

export default ControlPanel