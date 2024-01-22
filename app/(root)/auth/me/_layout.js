import { Stack } from 'expo-router/stack';
import colors from 'tailwindcss/colors';


const baseStackOptions = {
   headerShown: false,
   headerStyle: {
      backgroundColor: colors.amber[500],
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