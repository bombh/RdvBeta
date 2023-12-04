import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const router = useRouter()

const LogIn = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerTitle: 'Log In',
            headerBackTitleVisible: false,
         }} />
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Log In</Text>
         <Text className="text-black text-md mb-6">Form to login</Text>

         <View className="flex-row">
            <Pressable
               className="w-3/5 bg-blue-500 p-2 active:bg-blue-600 rounded-md"
               onPress={() => router.replace('/auth/ControlPanel')}>
                  <Text className="text-lg fonsem text-white text-center">Log in</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default LogIn