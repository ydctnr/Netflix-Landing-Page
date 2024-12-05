import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Hero, Trends, Reasons, FAQ, Footer } from './components';


function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
      <div className='w-full min-h-screen overflow-hidden'>

          <div className='relative z-10'>
            <Hero language={language} onLanguageChange={handleLanguageChange}/>
          </div>

          <div className='relative z-20 -mt-[65px] px-6 md:px-8 lg:px-[80px] xl:px-[148px] pb-16'>
            <Trends />
            <Reasons />
            <FAQ />
            <Footer language={language} onLanguageChange={handleLanguageChange}/>
          </div>

      </div>
  )
}

export default App

