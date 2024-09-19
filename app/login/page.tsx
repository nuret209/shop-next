
export default function Login() {
  return (
    <>
      <div className="endBanner flex absolute text-[14px] cursor-pointer left-[44px] items-center justify-between w-[calc(100%-88px)] bottom-[26px] text-[#525866]">

        <div className="copyright">© 2024 wagmigg Teknoloji A.Ş.</div>
        <div className="lang flex items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15.5C3.85775 15.5 0.5 12.1422 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1422 0.5 15.5 3.85775 15.5 8C15.5 12.1422 12.1422 15.5 8 15.5ZM6.2825 13.7502C5.54256 12.1807 5.1139 10.4827 5.02025 8.75H2.0465C2.19244 9.90417 2.67044 10.9911 3.42243 11.8788C4.17441 12.7664 5.16801 13.4166 6.2825 13.7502ZM6.5225 8.75C6.63575 10.5792 7.1585 12.2975 8 13.814C8.86424 12.2574 9.36908 10.5271 9.4775 8.75H6.5225ZM13.9535 8.75H10.9797C10.8861 10.4827 10.4574 12.1807 9.7175 13.7502C10.832 13.4166 11.8256 12.7664 12.5776 11.8788C13.3296 10.9911 13.8076 9.90417 13.9535 8.75ZM2.0465 7.25H5.02025C5.1139 5.51734 5.54256 3.81926 6.2825 2.24975C5.16801 2.58341 4.17441 3.23356 3.42243 4.12122C2.67044 5.00888 2.19244 6.09583 2.0465 7.25ZM6.52325 7.25H9.47675C9.36856 5.47295 8.86398 3.74265 8 2.186C7.13576 3.74259 6.63092 5.47289 6.5225 7.25H6.52325ZM9.7175 2.24975C10.4574 3.81926 10.8861 5.51734 10.9797 7.25H13.9535C13.8076 6.09583 13.3296 5.00888 12.5776 4.12122C11.8256 3.23356 10.832 2.58341 9.7175 2.24975Z" fill="#868C98" />
          </svg>
          <span className="ml-[2px] flex items-center">
            TR<svg className="ml-[2px]" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00005 3.879L8.71255 0.166504L9.77305 1.227L5.00005 6L0.227051 1.227L1.28755 0.166504L5.00005 3.879Z" fill="#525866" />
            </svg>

          </span>

        </div>
      </div>
      <div className="login w-full h-full flex absolute items-center justify-center">
        <div className="loginArea flex flex-col items-center">


          <div className="logo flex justify-center">
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" fill="url(#paint0_linear_73_80)" />
              <rect x="0.5" y="0.5" width="87" height="87" rx="43.5" stroke="url(#paint1_linear_73_80)" />
              <g filter="url(#filter0_d_73_80)">
                <rect x="16" y="16" width="56" height="56" rx="28" fill="white" />
                <rect x="16.5" y="16.5" width="55" height="55" rx="27.5" stroke="#E2E4E9" />
                <path d="M44 58L44 44L58 44C50.2797 44.0205 44.0249 50.2797 44 58Z" fill="#D9D9D9" />
                <path d="M44 58L44 44L58 44C50.2797 44.0205 44.0249 50.2797 44 58Z" fill="#0A0D14" />
                <path d="M44 30L44 44L30 44C37.7203 43.9795 43.9751 37.7203 44 30Z" fill="#D9D9D9" />
                <path d="M44 30L44 44L30 44C37.7203 43.9795 43.9751 37.7203 44 30Z" fill="#0A0D14" />
                <path d="M44 58L44 52.4374C44 47.7775 40.2224 44 35.5626 44L30 44C37.7203 44.0205 43.9751 50.2797 44 58Z" fill="#D9D9D9" />
                <path d="M44 58L44 52.4374C44 47.7775 40.2224 44 35.5626 44L30 44C37.7203 44.0205 43.9751 50.2797 44 58Z" fill="#0A0D14" />
                <path d="M44 30L44 35.5626C44 40.2224 47.7776 44 52.4374 44L58 44C50.2797 43.9795 44.0249 37.7203 44 30Z" fill="#D9D9D9" />
                <path d="M44 30L44 35.5626C44 40.2224 47.7776 44 52.4374 44L58 44C50.2797 43.9795 44.0249 37.7203 44 30Z" fill="#0A0D14" />
              </g>
              <defs>
                <filter id="filter0_d_73_80" x="12" y="14" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_73_80" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_73_80" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_73_80" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E4E5E7" stopOpacity="0.48" />
                  <stop offset="1" stopColor="#F7F8F8" stopOpacity="0" />
                  <stop offset="1" stopColor="#E4E5E7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_73_80" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E4E5E7" />
                  <stop offset="0.765625" stopColor="#E4E5E7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <span className="find flex w-[350px] sm:w-[392px] justify-center text-center mb-[24px] font-['Satoshi',_sans-serif] font-extrabold text-[44px] bg-[linear-gradient(180deg,_#000_0%,_#151515_89.17%)] bg-clip-text">
            en yakın oyun merkezini bul.
          </span>
          <button className="loginButton flex items-center justify-center box-border cursor-pointer gap-[4px] [box-shadow:0px_1px_2px_rgba(27,_28,_29,_0.48),_0px_0px_0px_1px_#242628] rounded-[10px] h-10 w-[200px] sm:w-[392px] outline-[0] border-[0px] bg-[#0a0d14] text-[white]">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.798001 4.63249C1.42201 3.38992 2.37928 2.34537 3.56282 1.61559C4.74637 0.885805 6.10955 0.499547 7.5 0.499985C9.52125 0.499985 11.2193 1.24249 12.5175 2.45374L10.3673 4.60474C9.5895 3.86149 8.601 3.48274 7.5 3.48274C5.54625 3.48274 3.8925 4.80274 3.30375 6.57499C3.15375 7.02499 3.06825 7.50499 3.06825 7.99999C3.06825 8.49499 3.15375 8.97499 3.30375 9.42499C3.89325 11.198 5.54625 12.5172 7.5 12.5172C8.50875 12.5172 9.3675 12.251 10.0395 11.801C10.4291 11.5445 10.7626 11.2117 11.0199 10.8226C11.2772 10.4336 11.4529 9.99638 11.5365 9.53749H7.5V6.63649H14.5635C14.652 7.12699 14.7 7.63849 14.7 8.17024C14.7 10.4547 13.8825 12.3777 12.4635 13.6827C11.223 14.8287 9.525 15.5 7.5 15.5C6.51498 15.5004 5.53953 15.3067 4.62941 14.9299C3.71929 14.5531 2.89234 14.0007 2.19582 13.3042C1.4993 12.6076 0.946872 11.7807 0.570101 10.8706C0.19333 9.96046 -0.000393646 8.98501 6.00536e-07 7.99999C6.00536e-07 6.78949 0.289501 5.64499 0.798001 4.63249Z" fill="white" />
            </svg>
            Google ile giriş yap
          </button>
          <span className="toSignUp mt-[24px] flex justify-center text-[#525866]">
            Hesabınız yok mu?
            <a className="text-[#0a0d14] flex gap-1 items-center ml-[4px] hover:underline" href="/sign-up">
              Kayıt Ol
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.129 5.25L5.106 1.227L6.1665 0.166504L12 6L6.1665 11.8335L5.106 10.773L9.129 6.75H0V5.25H9.129Z" fill="#0A0D14" />
              </svg>

            </a>
          </span>
        </div>
      </div>
    </>
  )
}