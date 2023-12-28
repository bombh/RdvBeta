import { Stack } from 'expo-router/stack';


const StackBase = () => {
   return 
   (
      <Stack
         screenOptions={{
            headerShown: false,
            headerStyle: {
               backgroundColor: '#f59e0b',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
               fontWeight: 'bold',
            },
            elevation: 0,
         }}
      />
   )
}

export default StackBase