import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
   // web: 'css',
   default: "native",
});

// Layout Stack in (public) folder
// Layout Drawer in (auth) folder

const Layout = () => {
  return <Slot />;
}

export default Layout