import React from "react";
import home from "../assets/home.jpg";

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen w-full flex-col gap-6"
      style={{
        backgroundImage: `url(${home})`,
        backgroundRepeat: "round",
      }}
    >
      <section>
        <p className=" text-yellow-300 backdrop-blur-xl p-2 text-center items-start w-[60vh] text-3xl">
          Welcome to Apex Athletic Club Transform Your Body, Transform Your Life
          At Apex Athletic Club, we are dedicated to helping you achieve your
          fitness goals. Whether you're looking to build muscle, lose weight, or
          improve your overall health, we have the tools, expertise, and support
          you need to succeed. Our state-of-the-art facility is equipped with
          the latest fitness equipment, and our team of experienced trainers is
          here to guide you every step of the way. Join us today and start your
          journey to a healthier, stronger, and happier you.
        </p>
      </section>
      <section>
        <button className="h-24 w-48 text-4xl bg-purple-400 p-4 rounded-2xl text-yellow-50 hover:bg-red-400">
          Join
        </button>
      </section>
    </div>
  );
}
