import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Nav } from '../components';

const Hero = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const handleGetStartedClick = () => {
    if (email.trim() === '') {
      setEmailError(t('emailRequired'));
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError(t('invalidEmail'));
    } else {
      setEmailError('');
    }
  };

  return (
    <section id='hero' className="relative flex flex-col w-full lg:min-h-screen bg-auto xl:bg-cover xl:bg-center"
      style={{ backgroundImage: `linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%), url('https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/TR-en-20241014-TRIFECTA-perspective_3b4dd7e4-05b4-437e-8571-2007bbe85343_large.jpg')` }}
    >
      <Nav language={language} onLanguageChange={onLanguageChange}/>

      <div className='flex flex-col justify-center items-center mt-10 py-20 md:py-28 lg:py-36 pb-44 md:pb-56 lg:pb-60 xl:py-28 '>
        <div className='relative flex flex-col gap-2 text-center items-center max-w-sm lg:max-w-xl'>
          <h1 className='font-sans text-[2rem] font-bold lg:text-[2.5rem] xl:text-[3.5rem] lg:font-[900] leading-[1.30] lg:tracking-wide'>{t('heroH1')}</h1>
          <p className='text-[1rem] xl:text-[1.25rem] mb-3 xl:mb-7'>{t('heroP')}</p>
        </div>

        <form className='max-md:px-6 max-lg:px-36'>
          <h3 className='text-center md:max-w-[26rem] lg:max-w-[31.5rem] lg:mt-3'>{t('formH3')}</h3>
            
          <div className="w-full flex max-md:flex-col max-md:gap-4 max-md:items-center justify-center gap-2">
            <div className="w-full inline-flex relative items-center">
              <input 
                type='email' 
                minLength={5} 
                maxLength={50} 
                name='email' 
                className={`w-full bg-bg-input border-[0.0625rem] rounded-[0.25rem] px-4 pb-2 pt-6 peer ${emailError ? 'border-red-500' : 'border-input-border'}`} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label 
                className="absolute ml-4 text-grayish-anchor pointer-events-none transition-all 
                  duration-300 ease-in-out 
                  peer-placeholder-shown:text-base peer-placeholder-shown:mt-4 
                  peer-focus:text-[0.75rem] peer-focus:-mt-6"
              >
                {t('email')}
              </label>
              {emailError && (
                <div className='absolute flex gap-1.5 items-center bottom-[-1.7rem] left-0'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                      fill="rgb(235, 57, 66)"
                    ></path>
                  </svg>
                  <p className="text-warning-red text-[0.8125rem]">{emailError}</p>
                </div>
              )}
            </div>

            <button 
              type="button" 
              onClick={handleGetStartedClick}
              className="w-[16rem] xl:w-[19rem] max-md:w-[10rem] inline-flex justify-center items-center text-center gap-2 px-6 max-lg:px-4 py-3 bg-btn-red hover:bg-btn-red-hover rounded-[0.25rem] text-[1.125rem] xl:text-[1.5rem]"
            >
              {t('button')}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="bg-curve-gradient absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6.25rem] max-md:w-[200%] w-[150%] xl:w-[129%]"
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          borderBottom: 'none',
        }}
      ></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6rem] max-md:w-[200%] w-[150%] xl:w-[129%]"
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          borderBottom: 'none',
          background: `
          radial-gradient(
            50% 500% at 50% -420%,
            rgba(64, 97, 231, 0.4) 80%,
            rgba(0, 0, 0, 0.1) 100%
          ),
          black
        `,
        }}
      ></div>
    </section>
  )
}

export default Hero;
