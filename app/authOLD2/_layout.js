import { Drawer } from 'expo-router/drawer';


const Layout = () => {
   return (
      <Drawer
         screenOptions={{
            headerShown: false,
            
            drawerStyle : {
               backgroundColor: '#333333',
               width: 240,
            }
         }}>
      
        <Drawer.Screen
            name="home"
            options={{
               drawerLabel: 'Accueil',
               title: 'Accueil',
             }} />

         <Drawer.Screen
            name="message/list"
            options={{
               drawerLabel: 'Messages',
               title: 'Messages',
             }}/>

         <Drawer.Screen
            name="contact/list"
            options={{
               drawerLabel: 'Contacts',
               title: 'Contacts',

             }}/>

         <Drawer.Screen
            name="people/search"
            options={{
               drawerLabel: 'Search',
               title: 'Search',
             }}/>

         <Drawer.Screen
            name="people/public"
            options={{
               drawerLabel: 'Public Messages',
               title: 'Public Messages',
             }}/>

         <Drawer.Screen
            name="events"
            options={{
               drawerLabel: 'Events',
               title: 'Events',
             }}/>

         <Drawer.Screen
            name="blog"
            options={{
               drawerLabel: 'Blog',
               title: 'Blog',
             }}/>

         <Drawer.Screen
            name="me"
            options={{
               drawerLabel: 'My Profile',
               title: 'My Profile',
             }}/>

      </Drawer>
    )
}

export default Layout