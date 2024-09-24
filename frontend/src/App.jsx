import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountingLandingPage1 from './pages/1AccountantLandingPage';
import PromoSelection2 from './pages/2PromoSelection';
import Services3 from './pages/3Services';
import Services4 from './pages/4Services';
import Confidential5 from './pages/5Confidential';
import Const6 from './pages/6Const';
import AboutUs7 from './pages/7AboutUs';
import Components8 from './pages/8Components';
import AccountantProfiles9 from './pages/9AccountantProfile';
import OurBestDeal10 from './pages/10OurBestDeal';
import BookAnAppointment11 from './pages/11BookAnAppointment';
import AppointmentForm12 from './pages/12AppointmentForm';
// import BlurAppointmentForm13 from './pages/13BlurredAppointmentForm';
import ExpandGlobal14 from './pages/14ExpandGlobal';
import Footer15 from './pages/15Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <AccountingLandingPage1 />
            <PromoSelection2 />
            <AboutUs7 />
            <Services3 />
            <Services4 />
            <Confidential5 />
            <Const6 />
            <Components8 />
            <AccountantProfiles9 />
            <OurBestDeal10 />
            <BookAnAppointment11 />
            <AppointmentForm12 />
            {/* <BlurAppointmentForm13 /> */}
            <ExpandGlobal14 />
            <Footer15 />
          </>
        } />
        <Route path="/about-us" element={
          <>
            <AboutUs7 />
            {/* <Components8 />
            <AccountantProfiles9 />
            <OurBestDeal10 />
            <BookAnAppointment11 /> */}
            <Services3 />
            <Services4 />
            <Confidential5 />
            <Const6 />
            <Components8 />
            <AccountantProfiles9 />
            <OurBestDeal10 />
            <BookAnAppointment11 />
            <AppointmentForm12 />
            {/* <BlurAppointmentForm13 /> */}
            <ExpandGlobal14 />
            <Footer15 />
          </>
        } />

        <Route path="/our-services" element={
          <>
            <Services3 />
            {/* <Services4 />
            <Confidential5 />
            <Const6 /> */}
            <Services4 />
            <Confidential5 />
            <Const6 />
            <Components8 />
            <AccountantProfiles9 />
            <OurBestDeal10 />
            <BookAnAppointment11 />
            <AppointmentForm12 />
            {/* <BlurAppointmentForm13 /> */}
            <ExpandGlobal14 />
            <Footer15 />
          </>
        } />
        <Route path="/contact-us" element={<Footer15 />} />
        <Route path="/api/book-an-appointment" element={< AppointmentForm12/>} />
      </Routes>
    </Router>
  );
}

export default App;