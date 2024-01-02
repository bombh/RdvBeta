import { Stack } from 'expo-router/stack';

// import { StatusBar }
// Do not work in _layout...
// Change it in node_modules/expo-router/src/ExpoRoot.tsx 

const Layout = () => {
  return <Stack
      screenOptions={{
         headerShown: false,
         headerStyle: {
         backgroundColor: '#f59e0b',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
            fontWeight: 'bold',
         },
         elevation: 0,
      }}
  />;
}

export default Layout