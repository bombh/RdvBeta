import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const DrawerMenu = (props) => {
   return (
      <DrawerContentScrollView {...props}>
         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   )
}

export default DrawerMenu