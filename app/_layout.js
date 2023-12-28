import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
   // web: 'css',
   default: "native",
});

const Layout = () => {
  return <Slot />;
}

export default Layout