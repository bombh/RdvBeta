import { Stack } from 'expo-router/stack';

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