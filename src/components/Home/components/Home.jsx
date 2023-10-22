"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import landingPagePicture from "../../../../public/landing-page.svg";
import Link from "next/link";

export const Home = () => {
  return (
    <div>
      {/* Vortexa and Sign Up */}
      <div className="mt-8 grid grid-cols-12 gap-4">
        <div className="col-span-1 ml-8">
          <Link href={"/"}>
            <svg
              width="140"
              height="40"
              viewBox="0 0 140 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.188 0.343999L13.216 20H7.224L0.252 0.343999H5.348L10.22 15.184L15.12 0.343999H20.188ZM31.4851 20.196C29.6371 20.196 27.9385 19.7667 26.3891 18.908C24.8585 18.0493 23.6358 16.8547 22.7211 15.324C21.8251 13.7747 21.3771 12.0387 21.3771 10.116C21.3771 8.19333 21.8251 6.46667 22.7211 4.936C23.6358 3.40533 24.8585 2.21067 26.3891 1.352C27.9385 0.493333 29.6371 0.0639997 31.4851 0.0639997C33.3331 0.0639997 35.0225 0.493333 36.5531 1.352C38.1025 2.21067 39.3158 3.40533 40.1931 4.936C41.0891 6.46667 41.5371 8.19333 41.5371 10.116C41.5371 12.0387 41.0891 13.7747 40.1931 15.324C39.2971 16.8547 38.0838 18.0493 36.5531 18.908C35.0225 19.7667 33.3331 20.196 31.4851 20.196ZM31.4851 15.828C33.0531 15.828 34.3038 15.3053 35.2371 14.26C36.1891 13.2147 36.6651 11.8333 36.6651 10.116C36.6651 8.38 36.1891 6.99867 35.2371 5.972C34.3038 4.92667 33.0531 4.404 31.4851 4.404C29.8985 4.404 28.6291 4.91733 27.6771 5.944C26.7438 6.97067 26.2771 8.36133 26.2771 10.116C26.2771 11.852 26.7438 13.2427 27.6771 14.288C28.6291 15.3147 29.8985 15.828 31.4851 15.828ZM54.2248 20L50.1368 12.58H48.9888V20H44.2008V0.343999H52.2368C53.7862 0.343999 55.1022 0.614666 56.1848 1.156C57.2862 1.69733 58.1075 2.444 58.6488 3.396C59.1902 4.32933 59.4608 5.37467 59.4608 6.532C59.4608 7.83867 59.0875 9.00533 58.3408 10.032C57.6128 11.0587 56.5302 11.7867 55.0928 12.216L59.6288 20H54.2248ZM48.9888 9.192H51.9568C52.8342 9.192 53.4875 8.97733 53.9168 8.548C54.3648 8.11867 54.5888 7.512 54.5888 6.728C54.5888 5.98133 54.3648 5.39333 53.9168 4.964C53.4875 4.53467 52.8342 4.32 51.9568 4.32H48.9888V9.192ZM76.6065 0.343999V4.18H71.3985V20H66.6105V4.18H61.4025V0.343999H76.6065ZM83.7974 4.18V8.156H90.2094V11.852H83.7974V16.164H91.0494V20H79.0094V0.343999H91.0494V4.18H83.7974ZM106.198 20L102.194 13.98L98.6659 20H93.2339L99.5339 10.004L93.0939 0.343999H98.6659L102.614 6.28L106.086 0.343999H111.518L105.274 10.256L111.77 20H106.198ZM126.41 16.528H119.074L117.898 20H112.886L119.998 0.343999H125.542L132.654 20H127.586L126.41 16.528ZM125.178 12.832L122.742 5.636L120.334 12.832H125.178ZM137.058 20.224C136.218 20.224 135.527 19.9813 134.986 19.496C134.463 18.992 134.202 18.376 134.202 17.648C134.202 16.9013 134.463 16.276 134.986 15.772C135.527 15.268 136.218 15.016 137.058 15.016C137.879 15.016 138.551 15.268 139.074 15.772C139.615 16.276 139.886 16.9013 139.886 17.648C139.886 18.376 139.615 18.992 139.074 19.496C138.551 19.9813 137.879 20.224 137.058 20.224Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="col-span-11 flex justify-end mr-8">
          <Link href={"/register"}>
            <Button color="primary" className="px-10">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      {/* powerful forms */}
      <div className="mt-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 mt-12 ml-24">
            <h3 className="text-2xl font-semibold">POWERFULL FORMS,</h3>
            <h3 className="text-2xl font-semibold">EFFORTLESS CRAFTING!</h3>
            <p className="mt-6">
              Transform ideas into interactive forms with ease. Our
            </p>
            <p>form builder app empowers you to design, collect, and</p>
            <p>analyze data effortlessly. Build smarter forms and</p>
            <p>make informed decisions.</p>
            <p className="mt-16 font-bold underline">
              <Link href={"/login"}>Get Started</Link>
            </p>
          </div>
          <div>
            <Image src={landingPagePicture} alt="Landing page picture" />
          </div>
        </div>
      </div>
      {/* craft multitype forms */}
      <div className="mt-48 mb-48">
        <div className="ml-24">
          <h3 className="text-lg font-semibold">CRAFT MULTITYPE FORMS</h3>
          <p>Choose form type that matches to your needs.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 ml-[88px] mt-10">
          <a className="flex flex-col items-center bg-secondary border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg ml-2"
              src="texts.svg"
              alt=""
              width={8}
              height={8}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Texts
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Collect data as short text and long text
              </p>
            </div>
          </a>
          <a className="flex flex-col items-center bg-secondary border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg ml-2"
              src="choices.svg"
              alt=""
              width={8}
              height={8}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Choices
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Crafting surveys or feedback form
              </p>
            </div>
          </a>
          <a className="flex flex-col items-center bg-secondary border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg ml-2"
              src="rate.svg"
              alt=""
              width={8}
              height={8}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rate
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Collect opinion scale or rating data
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* our advantage */}
      <div className="mt-20 bg-secondary pb-20">
        <h2 className="text-2xl font-semibold pt-16 text-center">
          OUR ADVANTAGES
        </h2>
        <div className="grid grid-cols-2 gap-4 ml-[15rem] mt-12">
          <div className="flex flex-col max-w-[22rem] p-6 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wrench"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <a>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Easy To Use
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              You just need to type and click then you ready to go. Focus on
              collection data and information.
            </p>
          </div>
          <div class="max-w-[22rem] mb-2 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wrench"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <a>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Live Previewer
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              View your changes in a second. We understand that time is valuable
              for you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ml-[15rem]">
          <div className="max-w-[22rem] p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wrench"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <a>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Customizable
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              You just need to type and click then you ready to go. Focus on
              collection data and information.
            </p>
          </div>
          <div className="max-w-[22rem] p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wrench"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <a>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Quick Delivers
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              View your changes in a second. We understand that time is valuable
              for you.
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <div className="bg-primary py-10 text-white text-right pr-12">
          Vortexa &copy; 2023
        </div>
      </div>
    </div>
  );
};
