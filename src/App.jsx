import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DryCleaning from './pages/DryCleaning'
import LaundryServices from './pages/LaundryServices'
import Tailoring from './pages/Tailoring'
import BridalGown from './pages/BridalGown'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dry-cleaning" element={<DryCleaning />} />
        <Route path="/laundry-services" element={<LaundryServices />} />
        <Route path="/tailoring-alterations" element={<Tailoring />} />
        <Route path="/bridal-gown-cleaning" element={<BridalGown />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
