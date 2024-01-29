import React, {useState} from 'react'
import { Stack } from 'expo-router'
import HamburgerMenuButton from '../../components/HamburgerMenuButton'
import HamburgerDrawer from '../../components/HamburgerDrawer'
import StyledTitle from '../../components/StyledTitle'
import NavigationMenuButton from '../../components/NavigationMenuButton'
import { PieMenuProvider } from '../../Context';

const StackLayouts = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <PieMenuProvider>
    {/* Render Hamburger drawer */}
    <HamburgerDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    <Stack 
      screenOptions={({ navigation }) => ({
          headerTitle: () => <StyledTitle navigation={navigation} />,
          headerTitleAlign: 'center',
          headerRight: () => <HamburgerMenuButton onPress={toggleDrawer}/>,
          headerLeft: () => (
           <NavigationMenuButton />
          ),
          headerBackVisible: false,
          animationEnabled: false,
          transitionSpec: false,
        })}
        >
          
       <Stack.Screen name="Dashboard" options={{ title: 'My Day'}}/>
         {/*To implement the names for each page in a centralized way use
        <Stack.Screen name="index" options={{ title: 'Home'}}/>*/}
        
     </Stack>
     </PieMenuProvider>
  )
}

export default StackLayouts