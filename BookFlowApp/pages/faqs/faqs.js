import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './faqsStyles';

const FAQ = () => {
  const faqData = [
    {
      question: "How do I borrow a book?",
      answer: "You can borrow a book by using our convenient QR code scanning feature. Simply point your device at the book's QR code, and you can check it out instantly."
    },
    {
      question: "What types of books do you have?",
      answer: "We have a wide range of books spanning various genres, so you can find something that suits your interests."
    },
    {
      question: "How can I access my reading history?",
      answer: "You can easily access your reading history in your profile. It allows you to see the books you've borrowed and returned."
    }
  ];

  return (
    <View style={styles.faqPage}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      <FlatList
        data={faqData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FAQ;
