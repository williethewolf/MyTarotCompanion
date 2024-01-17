//import React from 'react';
import { Text } from 'react-native';

const StringParser = (text, properties) => {
    // Function to format a segment of text
    const formatTextSegment = (segment, key) => {
      // Check if the segment matches any property to bold
      const propertyMatch = properties.find(prop => segment.includes(prop));
      if (propertyMatch) {
        return <Text key={key} style={{ fontWeight: 'bold' }}>{segment}</Text>;
      }
  
      // Bold Text
      if (segment.startsWith('**') && segment.endsWith('**')) {
        return <Text key={key} style={{ fontWeight: 'bold' }}>{segment.slice(2, -2)}</Text>;
      }
      // Italic Text
      if (segment.startsWith('*') && segment.endsWith('*')) {
        return <Text key={key} style={{ fontStyle: 'italic' }}>{segment.slice(1, -1)}</Text>;
      }
      // Underlined Text
      if (segment.startsWith('_') && segment.endsWith('_')) {
        return <Text key={key} style={{ textDecorationLine: 'underline' }}>{segment.slice(1, -1)}</Text>;
      }
  
      // Regular Text
      return <Text key={key}>{segment}</Text>;
    };
  
    // Construct a regex that includes properties and formatting markers
    const regex = new RegExp(`(${properties.join('|')}|\\*\\*.*?\\*\\*|\\*.*?\\*|_.*?_|#.*?\\[.*?\\]|## .*|# .*|-.*)`);
    
    // Split text into paragraphs and then format each segment
    return text.split('\n').map((para, paraIndex) => (
      <Text key={`para-${paraIndex}`} style={{ marginBottom: 10 }}>
        {para.split(regex).map((segment, segIndex) => formatTextSegment(segment, `seg-${segIndex}`))}
      </Text>
    ));
  };

  export default StringParser