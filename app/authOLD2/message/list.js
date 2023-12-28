import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Drawer } from 'expo-router/drawer'

const index = () => {
   const router = useRouter()

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
                  elevation: 0,
            }}
         />

         <View className="flex-1 items-center justify-center bg-white">
            
            <Text className="text-gray-500 text-4xl mb-2">Message</Text>
            <Text className="text-black text-md mb-6">List of all conversations</Text>

            <View className="flex-row w-full justify-center">
               <Pressable
                  className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
                  onPress={() => router.push('/message/conversation')}>
                     <Text className="text-lg fonsem text-white text-center">Conversations</Text>
               </Pressable>
            </View>

         </View>
      </>
  )
}

export default index