import React, {useState} from 'react';

import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Shape from './Shape';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');
  const [shapeColors, setShapeColors] = useState([
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
  ]);

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomBackground(randomColor);

    const newColors = Array.from(
      {length: 6},
      () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    );
    setShapeColors(newColors);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          {shapeColors.slice(0, 3).map((color, index) => (
            <Shape key={index} color={color} />
          ))}
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        {shapeColors.slice(3).map((color, index) => (
          <Shape key={index + 3} color={color} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ffffff',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;
