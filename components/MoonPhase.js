import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import SunCalc from 'suncalc';

const MoonPhase = ({ display = "both", fontSize = 55 }) => {
    const [moonPhase, setMoonPhase] = useState({ name: '', symbol: '' });

    useEffect(() => {
        const getMoonPhase = () => {
            const now = new Date();
            const phase = SunCalc.getMoonIllumination(now).phase;
            //console.log(phase);
            
            let name, symbol;
            const epsilon = 0.03; // Threshold for fuzzy comparison

            if (Math.abs(phase - 0) < epsilon) {
                name = 'New Moon';
                symbol = '🌑';
            } else if (phase < 0.25 - epsilon) {
                name = 'Waxing Crescent';
                symbol = '🌒';
            } else if (Math.abs(phase - 0.25) < epsilon) {
                name = 'First Quarter';
                symbol = '🌓';
            } else if (phase < 0.5 - epsilon) {
                name = 'Waxing Gibbous';
                symbol = '🌔';
            } else if (Math.abs(phase - 0.5) < epsilon) {
                name = 'Full Moon';
                symbol = '🌕';
            } else if (phase < 0.75 - epsilon) {
                name = 'Waning Gibbous';
                symbol = '🌖';
            } else if (Math.abs(phase - 0.75) < epsilon) {
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

    const textStyle = { fontSize: fontSize };
    return (
        <View>
            {display === "both" && <Text style={textStyle}>{moonPhase.symbol} {moonPhase.name}</Text>}
            {display === "symbol" && <Text style={textStyle}>{moonPhase.symbol}</Text>}
            {display === "name" && <Text style={textStyle}>{moonPhase.name}</Text>}
        </View>
    );
};

export default MoonPhase;
