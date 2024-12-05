import React from "react";
import { useTranslation } from 'react-i18next';
import Slider  from '../components/Slider';

const Trends = () => {
  const { t } = useTranslation();


  return (
    <section id="trends">
      <div className="container flex flex-col gap-3.5">
        
        <header>
          {t('trendHeader')}
        </header>

        <div className="flex max-lg:flex-col max-lg:gap-3 gap-6 mb-3">
          <div className="relative flex items-center">
            <select className="pl-3 pr-9 py-2">
              <option>Türkiye</option>
              <option>{t('glbl')}</option>
            </select>
            <div className="absolute right-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative flex items-center">
            <select className="pl-3 pr-8 py-2">
              <option>{t('movies')}</option>
              <option>{t('shows')}</option>
            </select>
            <div className="absolute right-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Slider />
        </div>

      </div>
    </section>
  );
};

export default Trends;

