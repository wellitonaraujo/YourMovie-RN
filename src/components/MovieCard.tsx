import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {fallbackMovie} from '../constants/fallbackMovie';
import {image500} from '../constants/imagesPath';
import React from 'react';
import {MovieProps} from '../models/castMember';

interface MovieCardProps {
  item: MovieProps;
  handleClick: () => void;
}

const {width, height} = Dimensions.get('window');

const MovieCard: React.FC<MovieCardProps> = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick} style={{marginBottom: 20}}>
      <Image
        source={{
          uri: image500(item.poster_path) || fallbackMovie,
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
