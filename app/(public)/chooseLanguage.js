import { View, Text, Pressable } from 'react-native'
import { Stack } from 'expo-router/stack'
import { useRouter } from "expo-router"
import { styled } from 'nativewind'

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const router = useRouter()


const ChooseLanguage = () => {
  return (
   <>
      <Stack.Screen options={{
         headerTitle: 'Rendez-Vous',
         headerTitleAlign: 'center',
      }} />
      
      <StyledView className="flex-1 items-center justify-center bg-white">
         <StyledText className="text-gray-500 text-4xl mb-2">Home</StyledText>
         <StyledText className="text-black text-sm mb-6">Select your language</StyledText>

         
         <StyledView className="flex-row w-full justify-center mb-3">
            <StyledPressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/subscribe`)}>
               <StyledText className="text-lg text-white text-center">Français</StyledText>
            </StyledPressable>
         </StyledView>

         <StyledView className="flex-row w-full justify-center">
            <StyledPressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/subscribe`)}>
                  <StyledText className="text-lg fonsem text-white text-center">Nederlands</StyledText>
            </StyledPressable>
         </StyledView>
         
      </StyledView>
   </>
  )
}

export default ChooseLanguage