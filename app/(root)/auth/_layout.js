import { Drawer } from 'expo-router/drawer';
import DrawerMenu from '../../../src/components/app/DrawerMenu'

import { HomeIcon, ChatBubbleLeftEllipsisIcon, UserGroupIcon, MagnifyingGlassIcon, EnvelopeIcon, SparklesIcon, UserIcon, UsersIcon } from 'react-native-heroicons/solid'

const Layout = () => {
   return (
      <Drawer
         
         screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerHideStatusBarOnOpen: true,
            
            headerTitleAlign: 'center',
            drawerStyle : {
               width: 240,
               backgroundColor: '#222',
            },
            drawerLabelStyle: {
               marginLeft: -20,
            },
            drawerActiveTintColor: '#FFF',
            drawerActiveBackgroundColor: '#444',
            drawerInactiveTintColor: '#AAA',
         }}

         drawerContent={ props => <DrawerMenu {...props} /> }
      >

         <Drawer.Screen name='home'
            options={{
               drawerLabel: 'Accueil',
               title: 'Accueil',
               drawerIcon: ({ color }) => (
                  <HomeIcon color={color} size={20} />
               )
            }}
         />

         <Drawer.Screen name='me'
            options={{
               drawerLabel: 'Mon Profil',
               title: 'Mon Profil',
               drawerIcon: ({ color }) => (
                  <UserIcon color={color} size={20} />
               )
            }}
         />




      </Drawer>
   );
}

export default Layout