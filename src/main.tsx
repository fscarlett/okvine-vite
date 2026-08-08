import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Layout from './components/layouts/Layout.tsx'
import Explore from './pages/Explore.tsx'
import Events from './pages/Events.tsx'
import KrewePage from './pages/Krewe.tsx'
import KitchenPage from './pages/Kitchen.tsx'
import AccountPage from './pages/Account.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.tsx'
import TermsOfUsePage from './pages/TermsOfUse.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/events' element={<Events />} />
          <Route path='/krewe' element={<KrewePage />} />
          <Route path='/kitchen' element={<KitchenPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-of-use' element={<TermsOfUsePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
