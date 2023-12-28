import { Drawer } from 'expo-router/drawer';

const Layout = () => {
   return (
      <Drawer
         
         screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerHideStatusBarOnOpen: true,
            
            headerTitleAlign: 'center',
            drawerStyle: {
               backgroundColor: '#333333',
               width: 240,
            },
         }}
      >

         <Drawer.Screen name='home'
            
         />
      </Drawer>
   );
}

export default Layout