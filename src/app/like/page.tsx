"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Iks, Like, Reyt } from "@/assets/images";
import liked from "@/assets/images/ticker_message_love_feedback_heart_chat_like_icon_258916.png";
const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [count, setCount] = useState(1);

  interface UseType {
    id: number;
    title: string;
    img: StaticImageData;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key) as string);
          }
          return null;
        });
        setFavorites(favoriteItems.filter((item) => item !== null) as []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const removeFromFavorites = (itemId: number) => {
    localStorage.removeItem(`likeData_${itemId}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item: { id: number }) => item.id !== itemId),
    );
  };

  const dataLength = favorites.length;

  return (
    <div className="bacround">
      <Header />
      <div className="mx-auto mt-8 w-[90%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Главная</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Избранное ({dataLength})</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="mx-auto w-[320px] ">
        {favorites.map((item) => (
          <div key={item.id} className="my-5 shadow-xl">
            <div className="relative  justify-start border">
              <div className="flex  items-center justify-center border bg-white">
                <Image src={item.img} alt="imgsrc" className="m-3 h-[237px]" />
              </div>
              <div className=" bg-custom-b  justify-between border">
                <div className="ml-1 mt-5">
                  <h1 className="text-[18px] font-[500]">{item.title}</h1>
                  <br />
                  <p className="text-[12px] text-[#7A7687]">Артикул: 213134</p>
                  <p className="text-[12px] text-[#7A7687]"> наличии</p>
                </div>
                <div className="">
                  <br />
                  <h1 className="text-[16px]   font-[600]">300 000 руб.</h1>
                  <br />
                </div>
                <div className="absolute right-5 top-5 flex justify-between">
                  <button>
                    <Reyt />
                  </button>
                  <button className="mx-5">
                    <img src={liked.src} alt="liked" />
                  </button>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="flex items-center text-[20px] font-[700]"
                  >
                    <Iks />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
