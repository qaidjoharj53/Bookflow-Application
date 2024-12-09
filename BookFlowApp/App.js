import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

// Import your style files
import AppStyles from './AppStyles';
import GlobalStyles from './GlobalStyles';

// Import your screens
import HomePage from './pages/home_page/HomePage';
import AuthPage from './pages/login_page/AuthPage';
import AdminPanel from './pages/admin_panel/AdminPanel';
import StudentPanel from './pages/student_panel/StudentPanel';
import AddBook from './pages/admin_panel/admin_pages/AddBook';
import ManageStudents from './pages/admin_panel/admin_pages/ManageStudents';
import IssuedBooks from './pages/admin_panel/admin_pages/IssuedBooks';
import AllBooks from './pages/admin_panel/admin_pages/AllBooks';
import StudentAccount from './pages/student_panel/student_pages/StudentAccount';
import StudentHistory from './pages/student_panel/student_pages/StudentHistory';
import Search from './pages/student_panel/student_pages/StudentSearch';
import ForgetPassword from './pages/login_page/ForgetPassword';
import AboutUs from './pages/about_us/AboutUs';
import AdminHistory from './pages/admin_panel/admin_pages/AdminHistory';
import PendingIssue from './pages/admin_panel/admin_pages/PendingIssue';
import TermsAndConditions from './pages/login_page/term_condition/TermsAndConditions';
import AdminDashboard from './pages/admin_panel/adminDashboard';
import StudentDashboard from './pages/student_panel/studentdashboard';
import ContactUs from './pages/contact-us/ContactUs';
import EmailVerifiedPage from './pages/email_verified/EmailVerified';
import StudentRequests from './pages/student_panel/student_pages/StudentRequests';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={AppStyles.app}>
            <View style={GlobalStyles.body}>
              <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="AuthPage" component={AuthPage} />
                <Stack.Screen name="AdminPanel" component={AdminPanel} />
                <Stack.Screen name="StudentPanel" component={StudentPanel} />
                <Stack.Screen name="AddBook" component={AddBook} />
                <Stack.Screen name="ManageStudents" component={ManageStudents} />
                <Stack.Screen name="IssuedBooks" component={IssuedBooks} />
                <Stack.Screen name="AllBooks" component={AllBooks} />
                <Stack.Screen name="StudentAccount" component={StudentAccount} />
                <Stack.Screen name="StudentHistory" component={StudentHistory} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="AdminHistory" component={AdminHistory} />
                <Stack.Screen name="PendingIssue" component={PendingIssue} />
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
                <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
                <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
                <Stack.Screen name="ContactUs" component={ContactUs} />
                <Stack.Screen name="EmailVerifiedPage" component={EmailVerifiedPage} />
                <Stack.Screen name="StudentRequests" component={StudentRequests} />
              </Stack.Navigator>
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
