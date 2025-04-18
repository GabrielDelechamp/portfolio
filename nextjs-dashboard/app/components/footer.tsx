'use client';

import { useTranslation } from 'react-i18next';
export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="h-[100%] border-[#1E2D3D] border-t-2">
            <div className="flex items-center h-[100%] justify-between">
                <span className="flex items-center h-[100%]">
                    <p className="px-[40px]">{t("Find me on")} :</p>
                    <a href="https://www.linkedin.com/in/gabriel-delechamp-1567a52a0/" target="_blank" className="items-center flex  px-[10px]  h-[100%] border-r-2 border-l-2 border-[#1E2D3D]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                            <g fill="#607b96" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                        </svg>
                    </a>
                </span>
                <span className="flex items-center border-l-2 border-[#1E2D3D] h-[100%]">
                    <a href="https://github.com/GabrielDelechamp" target="_blank" className="max-h-[100%] flex items-center px-[40px]">
                        <p className="py-[7px] px-[40px]">@GabrielDelechamp</p>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9771 0.278076C5.45205 0.278076 0.977052 4.75308 0.977052 10.2781C0.975918 12.3774 1.63587 14.4237 2.86327 16.1268C4.09067 17.8298 5.8232 19.1031 7.81505 19.7661C8.31505 19.8531 8.50205 19.5531 8.50205 19.2901C8.50205 19.0531 8.48905 18.2661 8.48905 17.4281C5.97705 17.8911 5.32705 16.8161 5.12705 16.2531C5.01405 15.9651 4.52705 15.0781 4.10205 14.8401C3.75205 14.6531 3.25205 14.1901 4.08905 14.1781C4.87705 14.1651 5.43905 14.9031 5.62705 15.2031C6.52705 16.7151 7.96505 16.2901 8.53905 16.0281C8.62705 15.3781 8.88905 14.9411 9.17705 14.6911C6.95205 14.4411 4.62705 13.5781 4.62705 9.75308C4.62705 8.66508 5.01405 7.76608 5.65205 7.06508C5.55205 6.81508 5.20205 5.79008 5.75205 4.41508C5.75205 4.41508 6.58905 4.15308 8.50205 5.44108C9.31611 5.21514 10.1572 5.10142 11.0021 5.10308C11.8521 5.10308 12.7021 5.21508 13.5021 5.44008C15.4141 4.14008 16.2521 4.41608 16.2521 4.41608C16.8021 5.79108 16.4521 6.81608 16.3521 7.06608C16.9891 7.76608 17.3771 8.65308 17.3771 9.75308C17.3771 13.5911 15.0401 14.4411 12.8151 14.6911C13.1771 15.0031 13.4901 15.6031 13.4901 16.5411C13.4901 17.8781 13.4771 18.9531 13.4771 19.2911C13.4771 19.5531 13.6651 19.8651 14.1651 19.7651C16.1501 19.0949 17.875 17.8191 19.097 16.1172C20.3189 14.4154 20.9765 12.3732 20.9771 10.2781C20.9771 4.75308 16.5021 0.278076 10.9771 0.278076Z" fill="#607B96"/>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}