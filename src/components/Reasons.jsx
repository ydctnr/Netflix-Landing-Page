import { reasons } from "../constants";
import { useTranslation } from 'react-i18next';

const Reasons = () => {
  const { t } = useTranslation();


  return (
    <section id='reasons'>
      <div className='container flex flex-col gap-3.5'>
        
        <header>
          {t('reasonsHeader')}
        </header>

        <div className='flex justify-between leading-tight max-lg:flex-col max-lg:gap-2 lg:grid lg:grid-cols-2 lg:gap-3 xl:flex xl:flex-1 items-center'>
          {reasons.map((item) => (
            <div className="flex max-lg:w-full flex-grow-0 flex-shrink-0  xl:w-[calc(25%-0.7rem)] lg:h-[200px] xl:h-[325px] bg-card-gradient rounded-[1rem] px-4 lg:px-6 pt-6 pb-2 max-lg:pb-1"
            key={item.id}
            >
              <div className="flex flex-col justify-between md:w-full">
                <div>
                  <h3 className="text-[1.25rem] xl:text-[1.5rem] font-medium mb-2 lg:mb-4">{t(item.title)}</h3>
                  <p className="text-[1rem] text-card-text max-md:max-w-[20rem] lg:max-w-sm text-grayish-anchor">{t(item.text)}</p>
                </div>
                <div className="flex justify-end ">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reasons
