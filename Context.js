import React, { createContext, useState } from 'react';
import PieMenuOverlay from './components/PieMenuOverlay'; // Update this path as needed

export const PieMenuContext = createContext();

export const PieMenuProvider = ({ children }) => {
  const [pieMenu, setPieMenu] = useState({ visible: false, content: null });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const showPieMenu = (content) => {
    console.log('showPieMenu triggered');
    setPieMenu({ visible: true, content });
  };
  const hidePieMenu = () => setPieMenu({ visible: false, content: null });

  const hidePieMenuAfterAnimation = () => {
    // Set the menu to be invisible after the fade-out animation
    setPieMenu({ visible: false, content: null });
  };

  return (
    <PieMenuContext.Provider value={{ pieMenu, showPieMenu, hidePieMenu, buttonPosition, setButtonPosition, hidePieMenuAfterAnimation }}>
      {children}
      {pieMenu.visible && <PieMenuOverlay />}
    </PieMenuContext.Provider>
  );
};