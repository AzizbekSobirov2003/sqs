import { LinkIcon } from "@/assets/images";
import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        <div>
          <ul className="p-4 w-[200px]">
            <li className="font-semibold">Адрес:</li>
            <li>г. Москва, ул. Московская, д. 35</li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li className="flex items-center font-semibold">
              Карта проезда <LinkIcon />
            </li>
          </ul>
        </div>
        <div>
          <ul className=" p-4">
            <li className="font-semibold">График работы:</li>
            <li>Пн-Пт с 09:00-19:00,</li>
            <li>Сб-Вс - выходной</li>
          </ul>
        </div>
        <div>
          <ul className="p-4 w-[200px]">
            <li className="font-semibold">Телефоны:</li>
            <li>+7 000-000-00-00</li>
            <li>+7 495-000-00-00</li>
            <li>8 800-000-00-00</li>
          </ul>
        </div>
        <div>
          <ul className="p-4 flex">
            <br />
            <br />
            <br />
            <br />
            <br />
            <li className="font-semibold">Email:</li>
            <li>info@mail.ru</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contacts;
