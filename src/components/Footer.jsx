import { useTranslation } from 'react-i18next';
import { list } from '../constants';
import Select from './Select';


const Footer = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();

  
  return (
    <section id='footer'>
      <a className='text-[1rem]'>{t('footerAnchor')}</a>

      <div className='flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 py-12'>
        {list.map((item) => (
          <div key={item.id}>
            <ul>
              <li>
                <a className='text-[0.875rem]'>{t(item.key)}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className='max-w-32'>
      <Select language={language} onLanguageChange={onLanguageChange}/>
      </div>

      <p className='mt-10 text-[0.875rem] text-grayish-anchor'>Netflix</p>

    </section>
  )
}

export default Footer
