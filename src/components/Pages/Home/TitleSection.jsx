import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

export default function TitleSection({ title, children }) {
  const { content } = useContext(LanguageContext);
  return (
    <section className="container my-4 rounded-xl bg-section-light-blue md:my-8">
      <h2 className="mx-auto w-fit rounded-b-3xl bg-title-light p-4 text-center text-lg font-black text-theme-blue md:rounded-b-[3rem] md:p-7 md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
