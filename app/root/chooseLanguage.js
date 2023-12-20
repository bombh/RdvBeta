import { View, Text, Pressable } from 'react-native'
import { Stack } from 'expo-router/stack'
import { useRouter } from "expo-router"
import { styled } from 'nativewind'

const StyledText = styled(Text);

const router = useRouter()


const ChooseLanguage = () => {
  return (
   <>
      <Stack.Screen options={{
         headerTitle: 'Rendez-Vous',
         headerTitleAlign: 'center',
      }} />
      
      <View className="flex-1 items-center justify-center bg-white">
         <StyledText className="text-gray-500 text-4xl mb-2">Home</StyledText>
         <StyledText className="text-black text-sm mb-6">Select your language</StyledText>

         
         <View className="flex-row mb-3">
            <Pressable
               className="w-30 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/root/subscribe`)}>
               <StyledText className="text-lg text-white text-center">Français</StyledText>
            </Pressable>
         </View>

         <View className="flex-row">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/root/subscribe`)}>
                  <StyledText className="text-lg fonsem text-white text-center">Nederlands</StyledText>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default ChooseLanguage