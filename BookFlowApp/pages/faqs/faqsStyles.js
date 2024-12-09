import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  faqPage: {
    textAlign: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  answer: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
