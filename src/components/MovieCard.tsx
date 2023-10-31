import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <Image
        source={require('../me.jpeg')}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
