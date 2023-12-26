import { View, Text } from 'react-native'
import { Stack } from 'expo-router/stack'
//import { Drawer } from 'expo-router/drawer'
import React from 'react'

const Conversation = () => {
   return (
      <>
         <Stack.Screen
            options={{
               headerShown: true,
               headerStyle: {
                  backgroundColor: '#f59e0b',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
               headerTitle: 'Conversation',
               elevation: 0,
            }}
         />

         <View>
            <Text>Conversation</Text>
         </View>
      </>
  )
}

export default Conversation