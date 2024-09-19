'use client'
import iller from "@/data/iller.json"
import ilceler from "@/data/ilceler.json"
import Cafes from "@/data/Cafes.json"
import Cafe from "@/components/Cafe"
import Tab from "@/components/Tab"
import React from "react";
import Pop_up from "@/components/Pop_up"
export default function Home() {
  const Pop_upRef = React.useRef<HTMLDivElement>(null);
  const [city, setCity] = React.useState(0);
  const [pop_upActive, setPop_upActive] = React.useState(false);
  const [activetab, setactivetab] = React.useState(1);
  const handleClick = (event: MouseEvent) => {
    if (Pop_upRef.current && !Pop_upRef.current.contains(event.target as HTMLElement)) setPop_upActive(false);
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
  return (
    <>
      <main>
        <div className="top-banner max-[600px]:text-[9px] flex justify-center h-[54px] items-center relative text-white bg-topBannerBG">
          <span className="firstText text-transparent bg-[linear-gradient(89.73deg,_#FFFFFF_0%,_#D7DBFF_1.33%,_#EDFFAC_76.53%)] bg-clip-text">
          ⚡ İşletminizi wagmigg ' ye taşıyın!

          </span>
          <span className="dot relative max-[600px]:mx-1 mr-3 ml-3 bg-white block h-1 w-1 rounded-full">


          </span>
          <span className="secondText mr-3 text-transparent bg-[linear-gradient(89.56deg,_#D0FC59_0%,_#F5FEE0_50.91%,_#FAEDFE_100%)] bg-clip-text">
            0536 014 28 18 ya da
          </span>
          <div className="callMeButton flex justify-center items-center max-[600px]:py-1 max-[600px]:px-[6px]    px-3 py-2 cursor-pointer rounded-full border border-white">
            <svg className="max-[600px]:mr-1 mr-3" viewBox="0 0 15 14" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 10.315V12.967C14.2501 13.1569 14.1781 13.3397 14.0487 13.4786C13.9192 13.6176 13.7419 13.7022 13.5525 13.7155C13.2247 13.738 12.957 13.75 12.75 13.75C6.12225 13.75 0.75 8.37775 0.75 1.75C0.75 1.543 0.76125 1.27525 0.7845 0.9475C0.797792 0.758083 0.882436 0.580758 1.02135 0.451307C1.16027 0.321855 1.34312 0.249914 1.533 0.25H4.185C4.27803 0.249906 4.36777 0.284394 4.4368 0.346765C4.50582 0.409136 4.5492 0.494937 4.5585 0.5875C4.57575 0.76 4.5915 0.89725 4.6065 1.0015C4.75555 2.04169 5.061 3.05337 5.5125 4.00225C5.58375 4.15225 5.53725 4.3315 5.40225 4.4275L3.78375 5.584C4.77334 7.88984 6.61091 9.72741 8.91675 10.717L10.0717 9.1015C10.119 9.0355 10.1878 8.98816 10.2664 8.96774C10.3449 8.94732 10.4281 8.95511 10.5015 8.98975C11.4503 9.4404 12.4617 9.74509 13.5015 9.8935C13.6058 9.9085 13.743 9.925 13.914 9.9415C14.0064 9.95098 14.092 9.99443 14.1543 10.0634C14.2165 10.1324 14.2509 10.2221 14.2507 10.315H14.25Z" fill="white" />
            </svg>
            Sizi Arayalım
          </div>


        </div>
        <div className="topComponent justify-between flex px-[80px] max-[600px]:px-0 py-[20px] items-center relative mb-[12px] after:content-[''] after:w-full after:h-px after:bg-[#e2e5e8] after:absolute after:bottom-0 after:left-0">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9999 40L19.9999 20L39.9999 20C28.9709 20.0293 20.0356 28.971 19.9999 40Z" fill="black" />
              <path d="M19.9999 0L19.9999 20L-5.84125e-05 20C11.029 19.9707 19.9643 11.029 19.9999 0Z" fill="black" />
              <path d="M19.9999 40L19.9999 32.5C19.9999 25.5964 14.4035 20 7.49994 20L-6.01609e-05 20C11.029 20.0293 19.9643 28.971 19.9999 40Z" fill="black" />
              <path d="M19.9999 0L19.9999 7.5C19.9999 14.4036 25.5964 20 32.4999 20L39.9999 20C28.9709 19.9707 20.0356 11.029 19.9999 0Z" fill="black" />
            </svg>

          </div>
          <div className="search relative border-[1px] border-[solid] border-[#e5e7eb] flex sm:pl-[24px] py-2 pl-2 rounded-[100px] items-center  before:top-[6px]  sm:before:top-[14px] before:left-[95px] sm:before:left-[122px] before:content-[''] before:absolute before:bg-[#e5e7eb] before:h-[24px] before:w-px">

            <select className="text-sm w-[89px]  sm:mr-[20px]  mr-2 cursor-pointer font-medium s sm:my-[8px] appearance-none outline-0 bg-transparent border-[0PX] max-[600px]:m-0" onChange={(e: Event) => setCity(e.target.value)} name="il" id="il">
              <option value="">İl</option>
              {iller.map(il => <option key={il.id} value={il.id}>{il.name}</option>)}
            </select>
            <select className="text-sm w-[89px] cursor-pointer font-medium sm:my-[8px] my-1  appearance-none outline-0 bg-transparent border-[0PX] max-[600px]:m-0" name="ilce" id="ilce">
              <option value="">İlçeler</option>
              {ilceler.map(ilce => (city == +ilce.il_id && <option key={ilce.id} value={ilce.id}>{ilce.name}</option>))}
            </select>
            <div className="searchIcon stroke-[white] sm:h-[32px] h-[22px] w-[22px] sm:w-[32px] mr-[4px] sm:mr-[6px] bg-[#0a0d14] rounded-[100px] flex items-center justify-center ml-2 sm:ml-[16px]" >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0417 13.0416L9.91671 9.91665M0.958374 6.16665C0.958374 3.29016 3.29022 0.958313 6.16671 0.958313C9.04319 0.958313 11.375 3.29016 11.375 6.16665C11.375 9.04313 9.04319 11.375 6.16671 11.375C3.29022 11.375 0.958374 9.04313 0.958374 6.16665Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="userPanel relative">
            <div onClick={() => setPop_upActive(!pop_upActive)} className="icons w-[86px] h-[44px] flex cursor-pointer rounded-[100px] border-[1px] border-[solid] border-[#ddd] items-center justify-center relative">
              <svg className="menuButton mr-[14px]" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.5H14M0 9.5H14M0 1.5H14" stroke="#0A0D14" strokeWidth="1.5" />
              </svg>
              <svg className="userLogo" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.200012C7.55995 0.200012 0.699951 7.06001 0.699951 15.5C0.699951 23.94 7.55995 30.8 16 30.8C24.44 30.8 31.2999 23.94 31.2999 15.5C31.2999 7.06001 24.44 0.200012 16 0.200012ZM16 28.2C11.98 28.2 8.39995 26.32 6.06995 23.39C7.69155 21.2686 9.95316 19.7258 12.52 18.99C11.5947 18.4035 10.8327 17.5927 10.3048 16.6329C9.77679 15.6731 9.49994 14.5955 9.49995 13.5C9.49995 11.7761 10.1848 10.1228 11.4038 8.90382C12.6227 7.68483 14.276 7.00001 16 7.00001C17.7239 7.00001 19.3772 7.68483 20.5961 8.90382C21.8151 10.1228 22.5 11.7761 22.5 13.5C22.5007 14.597 22.2243 15.6763 21.6963 16.6379C21.1683 17.5994 20.406 18.4119 19.4799 19C22.047 19.7352 24.3089 21.2781 25.93 23.4C24.7436 24.8968 23.2342 26.106 21.5147 26.9372C19.7951 27.7684 17.9099 28.2001 16 28.2Z" fill="#0A0D14" />
              </svg>
            </div>
          <div ref={Pop_upRef} className="pop-up">  <Pop_up active={pop_upActive} /></div>
          </div>

        </div>

        <div className="main-page sm:flex sm:flex-row sm:justify-between flex flex-col items-center sm:items-start sm:mx-[80px]">
          <div className="cards w-full">
            <div className="tabs sm:mr-5 flex rounded-[100px] bg-[#f6f8fa] p-[4px] mb-[16px]">
              <Tab defaultTab={0} a={setactivetab}>
                <div>
                  <svg className="mr-[8px] min-h-[20px] min-w-[20px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.16667 14.1667H13.8333M9.68141 2.30333L4.02949 6.69927C3.65168 6.99312 3.46278 7.14005 3.32669 7.32405C3.20614 7.48704 3.11633 7.67065 3.06169 7.86588C3 8.08627 3 8.32558 3 8.80421V14.8333C3 15.7667 3 16.2335 3.18166 16.59C3.34144 16.9036 3.59641 17.1585 3.91002 17.3183C4.26654 17.5 4.73325 17.5 5.66667 17.5H15.3333C16.2668 17.5 16.7335 17.5 17.09 17.3183C17.4036 17.1585 17.6586 16.9036 17.8183 16.59C18 16.2335 18 15.7667 18 14.8333V8.80421C18 8.32558 18 8.08627 17.9383 7.86588C17.8837 7.67065 17.7939 7.48704 17.6733 7.32405C17.5372 7.14005 17.3483 6.99312 16.9705 6.69927L11.3186 2.30333C11.0258 2.07562 10.8794 1.96177 10.7178 1.918C10.5752 1.87938 10.4248 1.87938 10.2822 1.918C10.1206 1.96177 9.97418 2.07562 9.68141 2.30333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="whitespace-nowrap  items-center"> İnternet Cafe</span></div>
                <div>
                  <svg className="mr-[8px]  min-h-[20px]  min-w-[20px] h-[20px] w-[20px]" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3334 8.16667H14.3334C15.2668 8.16667 15.7335 8.16667 16.09 8.34832C16.4036 8.50811 16.6586 8.76308 16.8184 9.07668C17 9.4332 17 9.89991 17 10.8333V16.5M10.3334 16.5V4.16667C10.3334 3.23325 10.3334 2.76654 10.1517 2.41002C9.99191 2.09641 9.73694 1.84144 9.42334 1.68166C9.06682 1.5 8.60011 1.5 7.66669 1.5H4.66669C3.73327 1.5 3.26656 1.5 2.91004 1.68166C2.59643 1.84144 2.34147 2.09641 2.18168 2.41002C2.00002 2.76654 2.00002 3.23325 2.00002 4.16667V16.5M17.8334 16.5H1.16669M4.91669 4.83333H7.41669M4.91669 8.16667H7.41669M4.91669 11.5H7.41669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <span className="flex items-center" >Playstation Cafe</span></div>
                <div>
                  <svg width="20" className="fillsvg min-h-[20px]  min-w-[20px] mr-[8px] fill-[#868c98]" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8641 0.934672L18.7971 0.796041L18.6603 0.86674L3.99099 8.44703V4.54894V4.39894H3.84099H2.67571H2.52571V4.54894V9.20416L1.18116 9.89864L1.05133 9.9657L1.11497 10.0972L1.63585 11.1738L1.7029 11.3124L1.8397 11.2418L2.52571 10.8875V17.7957H2.5256L2.52583 17.8016L2.52932 17.8913L2.52925 17.8913L2.52959 17.8961C2.57911 18.593 3.14348 19.15 3.84099 19.15H16.659V19.1501L16.6652 19.1499L16.7521 19.1463L16.7521 19.1463L16.7572 19.146C17.442 19.094 17.9743 18.5052 17.9743 17.7957V2.90492L19.3189 2.20985L19.4486 2.14277L19.385 2.01128L18.8641 0.934672ZM8.41008 10.4233L8.41007 10.4232L8.40378 10.4237C7.71915 10.4763 7.18681 11.0649 7.18681 11.7745V17.6457H3.99099V10.1305L16.509 3.66209V17.6457H13.3132V11.7745H13.3133L13.3131 11.7696L13.3102 11.6799L13.3103 11.6799L13.3099 11.674C13.2597 10.9772 12.6954 10.4202 11.9979 10.4202H8.50209V10.4201L8.49689 10.4203L8.41008 10.4233ZM8.65209 17.6457V11.9245H11.8479V17.6457H8.65209ZM15.6437 7.55958C15.6437 7.14905 15.3202 6.80745 14.9111 6.80745C14.502 6.80745 14.1785 7.14905 14.1785 7.55958C14.1785 7.9701 14.502 8.3117 14.9111 8.3117C15.3202 8.3117 15.6437 7.9701 15.6437 7.55958Z" strokeWidth="0.3" />
                  </svg>





                  <span className="flex items-center"> Simülasyon Cafe</span></div>

                <div className="">
                  <svg className="fillsvg mr-[8px] min-h-[20px]  min-w-[20px] fill-[#868c98]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9329 14.1799L17.9329 14.1801L17.9409 14.1792C18.3285 14.1356 18.6333 13.8116 18.6333 13.4138V4.25345H19.45C19.6985 4.25345 19.9 4.05198 19.9 3.80345V3.16207C19.9 2.91354 19.6985 2.71207 19.45 2.71207H18.6333V1.3C18.6333 1.05147 18.4319 0.85 18.1833 0.85H17.5167C17.2681 0.85 17.0667 1.05147 17.0667 1.3V2.71207H1.05C0.801472 2.71207 0.6 2.91354 0.6 3.16207V3.80345C0.6 4.05198 0.801472 4.25345 1.05 4.25345H1.86667V13.4138H1.86639L1.86695 13.4229L1.87138 13.4956L1.87115 13.4956L1.87212 13.5038C1.91726 13.8896 2.25074 14.1845 2.65 14.1845H17.85V14.1847L17.8588 14.1842L17.9329 14.1799ZM8.26712 7.0615L8.26711 7.06129L8.25915 7.06218C7.87153 7.10575 7.56667 7.4298 7.56667 7.82759V12.6431H4.28333C3.81389 12.6431 3.43333 12.2625 3.43333 11.7931V4.25345H17.0667V11.7931C17.0667 12.2625 16.6861 12.6431 16.2167 12.6431H12.9333V7.82759H12.9336L12.9331 7.81845L12.9286 7.74583L12.9289 7.74581L12.9279 7.73753C12.8827 7.35175 12.5493 7.0569 12.15 7.0569H8.35V7.05664L8.34122 7.05715L8.26712 7.0615ZM7.58333 19.15H12.9167C13.2757 19.15 13.5667 18.859 13.5667 18.5V18.2586C13.5667 17.8996 13.2757 17.6086 12.9167 17.6086H7.58333C7.22435 17.6086 6.93333 17.8996 6.93333 18.2586V18.5C6.93333 18.859 7.22435 19.15 7.58333 19.15ZM8.85 16.6672H11.65C12.009 16.6672 12.3 16.3762 12.3 16.0172V15.7759C12.3 15.4169 12.009 15.1259 11.65 15.1259H8.85C8.49101 15.1259 8.2 15.4169 8.2 15.7759V16.0172C8.2 16.3762 8.49101 16.6672 8.85 16.6672ZM9.13333 8.59828H11.3667V12.6431H9.13333V8.59828ZM16.1 5.96552C16.1 5.53722 15.7462 5.19483 15.3167 5.19483C14.8871 5.19483 14.5333 5.53722 14.5333 5.96552C14.5333 6.39382 14.8871 6.73621 15.3167 6.73621C15.7462 6.73621 16.1 6.39382 16.1 5.96552Z" strokeWidth="0.3" />
                  </svg>


                  <span className={`flex items-center`}>VR Cafe</span></div>
              </Tab>
            </div>
            <div className="cafes flex flex-wrap justify-center sm:justify-normal max-w-full">



              {Cafes.map((cafe, index: number) => (cafe.type == activetab &&
                <Cafe key={index}
                  favorite={cafe.favorite}
                  title={cafe.location}
                  date={cafe.date}
                  rates={cafe.rates}
                  price={cafe.price}
                  distance={cafe.distance}
                />
              ))}
            </div>
          </div>
          <div className="map rounded-xl w-[300px] h-[400px] sm:min-h-[900px] sm:max-h-[1000px] sm:min-w-[calc(50%)] bg-[#000]"></div>
        </div>
      </main>
    </>
  );
}
