import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgb(242, 246, 248)',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 50,
    width: '100%',
  },
  section1: {
    backgroundColor: 'rgba(252, 252, 252, 0.3)',
    backgroundImage: 'url("https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg?auto=compress&cs=tinysrgb&w=600")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContent: {
    textAlign: 'center',
    paddingVertical: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeading: {
    color: '#000',
    marginBottom: 12,
    fontSize: 48,
    letterSpacing: 1,
    fontFamily: 'DelaGothicOne-Regular',
  },
  mainHeading: {
    fontSize: 96,
  },
  sectionTextContainer: {
    width: '50%',
  },
  sectionText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
  sectionDivider: {
    width: '50%',
    height: 3,
    marginHorizontal: 'auto',
    backgroundColor: '#000',
  },
  testimonialCardContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 180,
  },
  quoteImage: {
    width: 50,
    height: 50,
    marginLeft: 16,
  },
  testimonialCard: {
    width: 300,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialBg: {
    position: 'absolute',
    fontSize: 160,
    top: -50,
    lineHeight: 0,
    opacity: 0.3,
    color: '#FFD793',
  },
  testimonialName: {
    fontSize: 24,
    opacity: 0.8,
  },
  testimonialDivider: {
    margin: 0,
    zIndex: 1,
  },
  testimonialContent: {
    zIndex: 1,
  },
  testimonialBg: {
    position: 'absolute',
    fontSize: 160,
    top: -50,
    lineHeight: 0,
    opacity: 0.3,
    color: '#FFD793',
  },
});

export default styles;
