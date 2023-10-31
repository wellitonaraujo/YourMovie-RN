type ColorValue = string;

export const colors: {
  background: ColorValue;
  text: ColorValue;
} = {
  background: '#ff8a01',
  text: '#ff8a01',
};

export const styles = {
  text: {color: colors.text},
  background: {color: colors.background},
};
