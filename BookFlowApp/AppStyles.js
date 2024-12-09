import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  app: {
    textAlign: 'center', // Text alignment is applicable to Text elements in RN.
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20, // Adjust this as needed.
    color: 'white',
  },
  appLink: {
    color: '#61dafb',
  },
});

export default AppStyles;
