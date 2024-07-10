import Image from "next/image";
import Link from "next/link";
import { MasterCard, Mip, Tg, Vik, Visa, WhatSub } from "@/assets/images";
import FooterCoreImg from "@/assets/icons/footerCoreImg.svg";
import Company from "./Company";
import Catalog from "./Catalog";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <div className="bg-[#088169FF] text-[#F8F7F3]">
      <div className="mx-auto w-[90%] md:flex md:justify-between md:p-10 text-[14px]">
        {/* Покупателям */}
        <div className="mb-8 md:mb-0">
          <Link href="#" className="text-[18px] font-[600]">
            Покупателям
          </Link>
          <div className="mt-5 h-[2px] w-full md:w-[250px]"></div>
          <Company />
        </div>

        {/* Каталог */}
        <div className="mb-8 md:mb-0 md:ml-8">
          <Link href="#" className="text-[18px] font-[600]">
            Каталог
          </Link>
          <div className="mt-5 h-[2px] w-full md:w-[650px] bg-white"></div>
          <Catalog />
        </div>

        {/* Контакты */}
        <div className="mb-8 md:mb-0 md:ml-8">
          <Link href="#" className="text-[18px] font-[600]">
            Контакты
          </Link>
          <div className="mt-5 h-[2px] w-full md:w-[200px] bg-white"></div>
          <Contacts />
        </div>
      </div>

      {/* Footer core */}
      <div className="mx-auto w-[90%] text-[#F8F7F3]">
        <div className="h-[2px] w-full bg-white"></div>
        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src={FooterCoreImg} alt="slam" />
            <p className="mt-4">Мы в соцсетях</p>
            <div className="mt-2 flex space-x-4">
              <Vik />
              <Tg />
              <WhatSub />
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul>
              <li>
                <Link href="#">Партнерская программа</Link>
              </li>
              <li>
                <Link href="#">Оптовые продажи</Link>
              </li>
              <li>
                <Link href="#">Реквизиты</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href="#">Условия соглашения</Link>
              </li>
              <li>
                <Link href="#">Карта сайта</Link>
              </li>
            </ul>
            <div>
              <div className=" relative" >
              <Link href="#">Способы оплаты</Link>
              <div className="mt-2 flex space-x-4">
                <MasterCard />
                <Visa />
                <Mip />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="mx-auto mt-[30px] w-[90%] md:flex md:items-center md:justify-between">
        <h1 className="mb-4 md:mb-0">
          © 2022 Медоборудование <br /> Все права защищены
        </h1>
        <p className="text-[12px] text-[#83ACA1FF] md:w-[70%]">
          Информация на данном сайте носит справочный характер и не является
          публичной офертой, определяемой положениями Статьи 437 Гражданского
          кодекса Российской Федерации
        </p>
      </div>
    </div>
  );
};

export default Footer;
