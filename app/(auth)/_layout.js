
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';

const Layout = () => {
   return (
      <Drawer>
         <View className="w-full bg-teal-500 p-3"></View>
        <Drawer.Screen name="home" />
        <Drawer.Screen name="people/[id]" />
      </Drawer>
    );
}

export default Layout