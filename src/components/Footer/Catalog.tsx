import Link from "next/link";

const Catalog = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <ul className="p-4">
            <li>
              <Link href="#">Реанимация</Link>
            </li>
            <li>
              <Link href="#">Хирургия</Link>
            </li>
            <li>
              <Link href="#">Офтальмология</Link>
            </li>
            <li>
              <Link href="#">Лабораторная диагностика</Link>
            </li>
            <li>
              <Link href="#">Акушерство и Гинекология</Link>
            </li>
            <li>
              <Link href="#">Гистология</Link>
            </li>
            <li>
              <Link href="#">Косметология</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li>
              <Link href="#">Орториноларингология</Link>
            </li>
            <li>
              <Link href="#">Рентгенология и томография</Link>
            </li>
            <li>
              <Link href="#">Стрерилизация</Link>
            </li>
            <li>
              <Link href="#">Физиотерапия и реабилитация</Link>
            </li>
            <li>
              <Link href="#">Функциональная диагностика</Link>
            </li>
            <li>
              <Link href="#">Эндоскопия</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li>
              <Link href="#">Новинки</Link>
            </li>
            <li>
              <Link href="#">Распродажи</Link>
            </li>
            <li>
              <Link href="#">Кабинеты под ключ</Link>
            </li>
            <li>
              <Link href="#">Скачать каталог</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Catalog;
