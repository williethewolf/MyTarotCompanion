import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import SunCalc from 'suncalc';

const MoonPhase = ({ display = "both",  fontSize = 55 }) => {
    const [moonPhase, setMoonPhase] = useState({ name: '', symbol: '' });

  useEffect(() => {
    const getMoonPhase = () => {
      const now = new Date();
      const phase = SunCalc.getMoonIllumination(now).phase;
      
      let name, symbol;

      if (phase === 0) {
        name = 'New Moon';
        symbol = '🌑';
      } else if (phase < 0.25) {
        name = 'Waxing Crescent';
        symbol = '🌒';
      } else if (phase === 0.25) {
        name = 'First Quarter';
        symbol = '🌓';
      } else if (phase < 0.5) {
        name = 'Waxing Gibbous';
        symbol = '🌔';
      } else if (phase === 0.5) {
        name = 'Full Moon';
        symbol = '🌕';
      } else if (phase < 0.75) {
        name = 'Waning Gibbous';
        symbol = '🌖';
      } else if (phase === 0.75) {
        name = 'Last Quarter';
        symbol = '🌗';
      } else {
        name = 'Waning Crescent';
        symbol = '🌘';
      }

      setMoonPhase({ name, symbol });
    };

    getMoonPhase();
  }, []);

  const textStyle = { fontSize: fontSize } ;
  return(
  <View>
      {display === "both" && <Text style={textStyle}>{moonPhase.symbol} {moonPhase.name}</Text>}
      {display === "symbol" && <Text style={textStyle}>{moonPhase.symbol}</Text>}
      {display === "name" && <Text style={textStyle}>{moonPhase.name}</Text>}
    </View>
    )
};

export default MoonPhase;
