import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './HomePageStyles'; // Importing the stylesheet
import FAQ from '../faqs/faqs'; // Import your FAQ component

const HomePage = () => {
  const testimonials = [
    {
      name: 'Anshika Jain',
      quote: "I've been using this website for years, and it never disappoints."
    },
    {
      name: 'Qaidjohar Jukker',
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: 'Rohit Agrawal',
      quote: "The content on this website is top-notch. I recommend it to everyone."
    }
  ];

  return (
    <ScrollView style={styles.root} id="home">
      <View style={styles.page}>
        
        {/* Section 1 */}
        <View style={[styles.section, styles.section1]}>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionHeading, styles.mainHeading]}>
              Welcome to BookFlow
            </Text>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginBottom: 50, marginTop: -20, fontSize: 22 }}>
                Your Literary Oasis!
              </Text>
            </View>
            <TouchableOpacity onPress={() => { /* Handle navigation */ }} style={localStyles.button}>
              <Text style={localStyles.buttonText}>KNOW MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Section 2 */}
        <View style={[styles.section, { backgroundColor: '#68967D' }]}>
          <View style={{ maxWidth: '80vw' }}>
            <Text style={[styles.sectionText, { color: 'white' }]}>
              Step into a world where pages breathe life into imagination and stories dance with every click. BookFlow invites you to embark on a literary journey like no other.
              Whether you're a passionate reader or a diligent administrator, our webapp is your gateway to boundless realms of knowledge and creativity.
            </Text>
            <Text style={[styles.sectionText, { color: 'white' }]}>
              Dive into a sea of meticulously cataloged books, a treasure trove that spans genres, continents, and centuries.
              Admins, take the helm and navigate with ease, managing your library's every facet.
              Readers, discover new horizons, connect with fellow bibliophiles, and embark on literary adventures together. With BookFlow, literature comes to life, and your journey begins here. Welcome home.
            </Text>
            <View>
              <Text style={styles.sectionText}>We are a one-stop destination for all your book needs.</Text>
              <Text style={styles.sectionText}>We have a wide range of books for you to choose from.</Text>
              <Text style={styles.sectionText}>Your search for the best books ends here.</Text>
            </View>
          </View>
        </View>

        {/* Section 3 - QR Code Scanning */}
        <View style={[styles.section, { backgroundColor: '#FFD793' }]}>
          <View style={styles.sectionContent}>
            <View style={localStyles.sectionContentContainer}>
              <View style={styles.sectionTextContainer}>
                <Text style={[styles.sectionHeading, { textAlign: 'left' }]}>
                  Effortless QR Code Scanning
                </Text>
                <Text style={[styles.sectionText, localStyles.sectionText]}>
                  BookFlow takes convenience to the next level with seamless QR code scanning. Now, borrowing a book is as simple as pointing your device at the book's QR code. Our advanced scanning technology instantly recognizes the book, allowing you to check it out with just a tap.
                </Text>
                <Text style={[styles.sectionText, localStyles.sectionText]}>
                  Say goodbye to long queues and paperwork. Whether you're in the library or browsing our vast online catalog, QR code scanning makes borrowing books a breeze.
                </Text>
              </View>
              <View style={localStyles.imageContainer}>
                <Image source={require('../../images/vector1.png')} style={localStyles.image} />
              </View>
            </View>
          </View>
        </View>

        {/* Section 4 - Book Management */}
        <View style={[styles.section, { backgroundColor: '#FFFFFF' }]}>
          <View style={styles.sectionContent}>
            <View style={localStyles.sectionContentContainer}>
              <View style={localStyles.imageContainer}>
                <Image source={require('../../images/vector2.png')} style={localStyles.image} />
              </View>
              <View style={[styles.sectionTextContainer, { alignItems: 'flex-end' }]}>
                <Text style={[styles.sectionHeading, { textAlign: 'left' }]}>
                  All-in-One Book Management
                </Text>
                <Text style={styles.sectionText}>
                  BookFlow isn't just about reading; it's about managing your entire literary journey. Our web app empowers you to search, choose, and issue books all from one place. No more jumping between apps or websites. Everything you need is right here.
                </Text>
                <Text style={styles.sectionText}>
                  Explore our extensive library, read book summaries, and make informed decisions. Once you've found the perfect book, issue it instantly. The days of multiple logins and complicated procedures are over. BookFlow simplifies it all.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Section 5 - Reading History */}
        <View style={[styles.section, { backgroundColor: '#68967D' }]}>
          <View style={styles.sectionContent}>
            <View style={localStyles.sectionContentContainer}>
              <View style={styles.sectionTextContainer}>
                <Text style={[styles.sectionHeading, { textAlign: 'left', color: 'white' }]}>
                  Your Reading History
                </Text>
                <Text style={[styles.sectionText, { color: 'white' }]}>
                  BookFlow cares about your reading journey, and that's why we offer a personalized experience like no other. With our web app, you can easily access your reading history. See which books you've borrowed, which ones you've returned, and even track your favorite genres.
                </Text>
                <Text style={[styles.sectionText, { color: 'white' }]}>
                  It's your literary journey, beautifully organized in one place. BookFlow ensures that every chapter of your reading history is easily accessible and memorable.
                </Text>
              </View>
              <View style={localStyles.imageContainer}>
                <Image source={require('../../images/vector5.png')} style={localStyles.image} />
              </View>
            </View>
          </View>
        </View>

        {/* Section 6 - Testimonials */}
        <View style={[styles.section, { backgroundColor: 'white' }]}>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionHeading, { marginBottom: 50 }]}>
              Testimonials ~
            </Text>
            <View style={styles.testimonialCardContainer}>
              {testimonials.map((testimonial, index) => (
                <View key={index} style={styles.testimonialCard}>
                  <Text style={[styles.testimonialBg, { color: index === 1 ? '#90C5A9' : '#FFD793' }]}>&ldquo;</Text>
                  <Text style={styles.testimonialContent}>{testimonial.quote}</Text>
                  <Text style={styles.testimonialDivider}>~</Text>
                  <Text style={styles.testimonialName}>{testimonial.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <FAQ />
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  sectionContentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '80vw',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#68967D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: '60%',
    resizeMode: 'contain',
  },
});

export default HomePage;
