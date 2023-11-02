import {Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image500} from '../constants/imagesPath';
const {width, height} = Dimensions.get('window');

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick} style={{marginBottom: 20}}>
      <Image
        source={{
          uri: image500(item.poster_path),
        }}
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
