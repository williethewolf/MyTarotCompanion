import { useState, useEffect } from 'react';
import astroEvents from '../data/astrologicalEvents'

const useNextAstrologicalEvent = () => {
    const [nextEvent, setNextEvent] = useState(null);

    useEffect(() => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        let upcomingEvent = astroEvents.find(event => new Date(event.date) >= today);

        if (upcomingEvent) {
            upcomingEvent.isToday = upcomingEvent.date === todayStr;
            setNextEvent(upcomingEvent);
        }
    }, []);

    return nextEvent;
};

export default useNextAstrologicalEvent;


//HOW TO USE IN THE OTHER COMPONENT WHERE IT WILL BE USED WITH THE OPACITY LOGIC
// const nextEvent = useNextAstrologicalEvent();

//     if (!nextEvent) {
//         return <Text>No upcoming events found.</Text>;
//     }

//     const symbolStyle = {
//         opacity: nextEvent.isToday ? 1 : 0.5,
//         fontSize: 30, // Adjust size as needed
//     };

//     return (
//         <View>
//             <Text style={symbolStyle}>{nextEvent.symbol}</Text>
//             <Text>{nextEvent.name}</Text>
//             <Text>{nextEvent.description}</Text>
//             <Text>{nextEvent.date}</Text>
//         </View>
//     );