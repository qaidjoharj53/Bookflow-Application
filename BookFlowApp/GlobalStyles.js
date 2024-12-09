import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  body: {
    margin: 0,
    fontFamily: 'Roboto', // Ensure this font is available or include it in the project.
  },
  code: {
    fontFamily: 'Courier New',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    backgroundColor: '#ffd793',
    borderRadius: 5,
    textDecorationLine: 'none',
    color: 'black',
  },
  listItem: {
    fontSize: 20,
  },
  link: {
    color: 'white',
  },
  linkHover: {
    color: '#3498db',
  },
});

export default GlobalStyles;
