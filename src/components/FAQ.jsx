import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { questions } from '../constants';


const Faq = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq">
      <div className="container flex flex-col gap-3.5">
        
        <header>
          {t('faqHeader')}
        </header>

        <div className="flex flex-col gap-2 cursor-pointer leading-tight">
          {questions.map((item, index) => (
            <ul key={index} className="flex flex-col gap-[0.7px] max-lg:gap-[1px] w-full text-[1.5rem] max-lg:text-[1.125rem]">
              <li
                className="bg-faqlist-background hover:bg-faqlist-hover p-6"
                onClick={() => handleToggle(index)}
              >
                <h3 className="flex justify-between">
                  {t(item.question)}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      viewBox="0 0 36 36"
                      width="36"
                      height="36"
                      data-icon="PlusLarge"
                      aria-hidden="true"
                      className={`max-lg:w-[25px] max-lg:h-[25px] transition-transform duration-200 ${activeIndex === index ? 'rotate-45' : ''}`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>
              </li>
              <div
                className={`overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.5, 0, 0.1, 1)] ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col bg-faqlist-background p-6">
                  <span>{t(item.answer)}</span>
                  <span className={`${item.br ? 'pt-6' : 'pt-0'}`}>{t(item.br)}</span>
                </div>
              </div>
            </ul>
          ))}
        </div>

        <form className='w-full mt-10'>
        <h3 className='lg:max-w-[40rem] md:text-center'>{t('formH3')}</h3>

        <div className="w-full lg:px-24 flex max-md:flex-col justify-center gap-2">
          <div className="w-full relative flex flex-col">
            
            <div className='w-full flex relative items-center'>
              <input 
              type='email' 
              minLength={5} 
              maxLength={50} 
              name='email' 
              className={`w-full bg-bg-input border-[0.0625rem] border-input-border rounded-[0.25rem] px-4 pb-2 pt-6 peer ${emailError ? 'border-red-500' : 'border-input-border'}`} 
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
            </div>

            <div className='flex max-md:py-2 pt-2'>
              {emailError && (
                <div className='flex gap-1.5 items-center'>
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

            </div>

            <div>
              <button 
              type="button" 
              onClick={handleGetStartedClick}
              className="w-[11rem] xl:w-[14rem] max-md:w-[10rem] flex justify-center items-center text-center gap-2 px-6 max-lg:px-4 py-3 md:py-4 xl:py-[11px] bg-btn-red hover:bg-btn-red-hover rounded-[0.25rem] text-[1.125rem] xl:text-[1.5rem]">{t('button')}
               <div>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
               </div>
              </button>
            </div>
            
        </div>
      </form>

      </div>
      
    </section>
  );
};

export default Faq;

