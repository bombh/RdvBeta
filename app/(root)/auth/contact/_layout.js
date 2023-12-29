import { Stack } from 'expo-router/stack';


const baseStackOptions = {
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
}

const Layout = () => {
   return <Stack screenOptions={baseStackOptions}
   />;
}

export default Layout