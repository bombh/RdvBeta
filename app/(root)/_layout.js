import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import colors from 'tailwindcss/colors';

// import { StatusBar }
// Do not work in _layout...
// Change it in node_modules/expo-router/src/ExpoRoot.tsx 

const Layout = () => {
  return <>
   <StatusBar style='light' hidden={true} />
   <Stack
         screenOptions={{
            headerShown: false,
            headerStyle: {
            backgroundColor: colors.amber[500],
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
               fontWeight: 'bold',
            },
            elevation: 0,
         }}
   />
  </>
  ;
}

export default Layout