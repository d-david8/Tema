// Code:
import { Button } from "@/components/ui/button";
import React from "react";

export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9594.712818892021!2d21.22540243610537!3d45.74803353753566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d831ccc8ff7%3A0x255d397f5edeea71!2sFacultatea%20de%20Automatic%C4%83%20%C8%99i%20Calculatoare%2C%20Timi%C8%99oara!5e0!3m2!1sro!2sro!4v1712784713729!5m2!1sro!2sro"
            className="absolute inset-0 filter: grayscale(1) contrast(1.2) opacity(0.4)"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Adresa
              </h2>
              <p className="mt-1">Vasile Pârvan 2, Timisoara, Timis</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Email
              </h2>
              <a className="leading-relaxed">email@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Telefon
              </h2>
              <p className="leading-relaxed">+4 0743 841 073</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contacteaza-ne
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
            quae labore error? Sapiente deserunt ratione cumque magnam, sit
            animi sunt, distinctio quis sint assumenda nostrum nobis
            reprehenderit natus excepturi.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nume
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Button
          </Button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
