import Link from "next/link";

const Company = () => {
  return (
    <>
      <div className=" md:grid-cols-3 gap-6 flex">
        <div>
          <ul className=" p-4">
            <li>
              <Link href="#">О компании</Link>
            </li>
            <li>
              <Link href="#">Сертификаты</Link>
            </li>
            <li>
              <Link href="#">Вакансии</Link>
            </li>
            <li>
              <Link href="#">Гарантии</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li>
              <Link href="#">Услуги</Link>
            </li>
            <li>
              <Link href="#">Акции</Link>
            </li>
            <li>
              <Link href="#">Доставка</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li>
              <Link href="#">Оплата</Link>
            </li>
            <li>
              <Link href="#">Возврат</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Лизинг</Link>
            </li>
            <li>
              <Link href="#">Отзывы</Link>
            </li>
            <li>
              <Link href="#">Блог</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Company;
