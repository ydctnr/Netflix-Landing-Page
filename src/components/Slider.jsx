import React, { useRef, useState } from 'react';

const images = [
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABc3MZisCeN-sK8QsBZ8J2NKcUqBB4jChRaOjCK6y-NJa9ThcfZH6vlKuOBy7IPJkR6mpfvn49NIJ4qDgfSWkNv2WX2D9eKYpetcspK1ej286ys0AJhZIElnoDyEg55WPpRx2l5SUnET-PMpzoBSeaRTcSwWLh3GOAzk3NJ_9FQHsrL5Q3qP6FfPF5HWiO2qsKNZ3c6jHFW2obIlftM20KzNL4pgOPePk5sx35M_U91K4b3l2OVh9l7RseNUNLut0y2cI0x3dSQf6FTTvC7zxVCNzrcniB5d7zTZCYE_rsA2NSXTWlXHOdBHTYKMZu60YIE5etaLtxStq32bzKuYBhxTwsDi7iZzOHIXD5EIbdFCCiBcJjyo.jpg?r=0bd',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQJjoM-8MbB8cm8Zt1cTBXy648EVfMDTZU7I-vjZHSGEei0CigtAMUeEafvAG5DBY42FWbEJy73Y1gOOfJSaVwVhccHeS6MnKrENphJZD4IoKP3Qb4_ratBEMf-zta365pcobHb5R5m8yMYkGI1YJADHXx9Bzdl2YdXYKaZ5N8IhgG2U2T0INjIC7wJBmFt0vRB8I2mGpvGpFlyTfVNX_c6STqYAiJc1FLiTgfP45Vcd2H5eJaEHmxmZLU2I9W9WokTuvp2s17jky9R-K8aF5u_pzjTvMM_TXq7kfyn4z92f4s5_5WFrHpb9KHiVkEwVrC2DmzPVMP1t2D4G_faMyEM.jpg?r=9ff',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeEcPjphSI1yvgIWtsEDFcIqAYg4LvXL2qf2bFkEjkT_gulKYdraqhOEHMqm112ZlII5nF46d3scPryUgthU5OHSbyFf0wE2PxYBYV8zf1tBj4573syKKprjhaDITE11GCj8boRg0r5qNynm0r_uaqy6o8QLzWZPEaQauCccH19LC07f9VJrqWkmEJo9VZ1_V4vvKoJcjR_qyABvbB2WcHeqOpf9EpEDS8ZotSxz8wkiEQP9qBrz246LFllk8AIPylRmsYnwxWKMqnXD1bqekRSnixlkn4pJQOaG9D9cA5BIZDEW2jsU1BwLMs_kgzGS1N4_NnWs7al_Ek-TPLyYkEs.jpg?r=bad',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXr5dJ2ACm14Z4FtbwxtW2SM8XP30PLWThQBILlntosTsaQPtVdwytyTnQPHZCh4X4-XU6__w297DjaeDOt_RAZhQRJLhQzVFj_2oK3mJTsG0p0Q0dnRJFGcWO9hqI8DhZ3dGF2vc6Qv8ngfT_-pewJw-Huwf3wJB9BISHtDnA8X1OwN1NeMUq09Fnoc5ySaqwUWMfj-BQ2hXR1Tp2JQ4tTVxeaDk6tEy8g-QpKS_lMaswTzeEgnMufcu-jPBJnFq8qyfqITRCMfBbpHZ4UqTwkavXxV8fTwqVkC-pgNOuypkAYH4xfSZjc7.jpg?r=57a',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeGMy8T8Q7gvzl9nt_YwtzH1PKN1je9giL9o8jud47JhoK3JSCQPspZ94kzhfSOvdg42te1TJSF7nIdqBhw4gON0XJJRxLmdzhiwJ3i3EGIpFU-KAb-pBIc1gNzBRZZ1PwSzDyWbzl05xgaMG8ZeGK4VbX8GNtVqbFurvkSxFK5ca0JgwwnWYBO56A19eMo0jBZ3iw5qzeAojTLknBgQMdhvqDGfw4xFwEHK3oDw9S8pcFBUkYdagJu4vkCJEqi-ZVMXnBw1Nsdid7CFkm_rszvxYMZP4oWbUobTFQLc7_T9r9WQ5yvBSW5VP7U_2dc_ba0ama0MzUrufGh8wJlaQGtEynsmcYORWL1obKX5US-j0QXdglI.jpg?r=fb6',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVNn1SYW93i5WFMpPWtAuCYMaOmg8HniPL7Q7A87nSMac-eRCeJe9EwwH-bWw-HRzvjYr695XpORZbgW71o4r0jdpuizGWcUJx8QFB7GyQTwR_K8x7AgntyUopTPhHotP8KRmdISC7d0gUBfYoXqtZtVMD5uNHGCWLjPXbWmbKd-QhWCez6d4uc8FwhwZKpv0vWf8pgaP_ZreRVGYCEelH4fRW1Pq8tfeSPbaV1HH3KO_NU1VbcDOe26KVRdJGqx3F0RIuDWirlGDIRFNgpK2ttZuBDcYDOyZpIxvlPnjrMQYyFmalQm3KDgNtOMPgGXhUc1cdHY-usNDzH0u9hp8VGo0jWScXSc9JxHdFhlWrmufHNok8.jpg?r=eb0',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABV41xocilcsygR5a5kVS3DSk0yZ_5-m32BJi0Zac7l4_MZ4bGAeoyVucF_octvps7FzNl3uQoN5COQ9evS0gMiBWodsygjxrQrayUABI3A75CKVEKNCbsWDbHa_hM76ZAg1Gx7zueR8_od-vy2ElN4R92u7KoKMGcUB-mlIDvjXGRzKLwr9MISvMz-OtylDNjxf87nqdBD6O6WKZ8uiTlc-9ByHYmj6JvWdD-kApDUsKI1SZ4YeaWjmf3tLDFMc3rx0qPXE9N5Yzd8nsTLpidckTf07rs0F_CJvwLgYtSX0MbOROpUi69-AZ.jpg?r=10e',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSVyoH6onbiCqnBTAiFQbAlq4sPvAOgBVu5GESSh2e4cf74kKmBXqxlvQPLYiWDLHB4v_uh8OguoEcmpzFC4Edf2kJEhcJ6fcpzeQQSDKEvPjIqPzKWdE9ndOVeyRo_hrd2ceyAf7v36O6vhtL3BAQNDOHJg_r1KkXf9-a9VrcsJfoVeEShM9VvysALC_j-m-K6WkZQR_EhrXYvWtFfhuu8aZuqC-Ga4Go0J0sz-keBYDslV62M1RsXBDy9sfhkY_w4XtFn981WefJG8BI8QF4_N448R.jpg?r=382',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaHqKzGUm_gRsgkZZngJ0B_5HCkYYi5Sh7H4VqTCgVfydBD0EG2ImMRGK1vn-O5owFk1utgKNHudmI3el8zGEndmXl6ewkde5HdWkPODC9dsn7UDXViBxpEYowCd_lAFtQ4UNQFafrhKdGybqnyDI-KzD4XdCs1BeR25GhW6-X_cZhq1CgwpC6ZHiR6JveKe-FTSjcr3lUqBf_r-K20x4TumbvwcMS7ILTvBJ2T3u963ELONAtDOm71bI5AiyNT9tQZ4ZGYI2pfiTlX39dh8yEg_uAPz4xQXz48XTjwircM6JARivRiQkzGv_m0juNZKhqgwL-Vq1UwJU9I7q7CHyv5sLXlvfLrwRZ1XM2FKRzOFIu2XGME.jpg?r=02a',
  'https://occ-0-7332-1490.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcq_8bTVPDGqZP2YCfWXrOidlktfkZho_8royY9747NP6VlVB22_AH0_m9LTr4dX2mXFHGWJ_hhdrhZc3S0URoAb6POhrw85wZPJGWjH8WneanNL9UxYt-kmvFkzu3sRF31DmQDhFXqAg675vpibqAN-B0Jq58b0GiTJJrbkgyxJdYOqkhA9F6EjhtY0WDMj0qviJrjOBuhV-OTEp5Dir4ZrNlivOF-zxzUeNev9isaZoZ1Pf8CYZcp2mmtjqppXDyR7wya0F07T2Lzb7o6eY22BIr_6Dm_-Dh0wjDklSiXA6RrNhFpZz7ks.jpg?r=478',
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
      sliderRef.current.scrollBy({
        left: -750,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 4);
      sliderRef.current.scrollBy({
        left: 750,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative flex gap-1 justify-center items-center w-full">
      
      {currentIndex > 0 && (
      <button
      onClick={scrollLeft}
      className='flex justify-center items-center w-[1.5rem] h-[7.5rem] rounded-[0.5rem] bg-slider-btn hover:bg-slider-btn-hover'
      >
      <svg
      className="rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
        fill="currentColor"
      ></path>
      </svg>
      </button>
      )}

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className='flex'>
          {images.map((src, index) => (
            <div
              key={index}
              className='w-32 lg:w-48 xl:w-56 max-lg:px-2.5 px-6 py-1 relative cursor-pointer hover:animate-grow'>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover rounded-[0.5rem]"
              />
              <span
                className="flex justify-center items-center absolute -bottom-2 lg:-bottom-3 -left-1 md:left-0 lg:-left-0 text-black font-bold tracking-tighter text-[4rem] lg:text-[5rem] xl:text-[6.25rem]"
                style={{ 
                  textShadow: '0px 0px 5px rgba(255, 255, 255, 0.9), 0 0 5px rgba(255, 255, 255, 0.9)' 
                }} 
              >
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {currentIndex <= images.length - 6 && (
      <button
      onClick={scrollRight}
      className="flex justify-center items-center w-[1.5rem] h-[7.5rem] rounded-[0.5rem] bg-slider-btn hover:bg-slider-btn-hover"
      >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
        fill="currentColor"
      ></path>
      </svg>
      </button>
      )}

    </div>
  );
};

export default ImageSlider;

