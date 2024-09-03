import React from "react";
import smsExpress from "../../../assets/imgs/payment-1.png";
import fatoora from "../../../assets/imgs/payment-2.png";
import paypal from "../../../assets/imgs/payment-3.png";
import vat from "../../../assets/imgs/payment-4.png";
const logos = [
  {
    paymentLogo: smsExpress,
    alt: "SMS Express",
  },
  {
    paymentLogo: fatoora,
    alt: "Fatoora",
  },
  {
    paymentLogo: paypal,
    alt: "Paypal",
  },
  {
    paymentLogo: vat,
    alt: "VAT",
  },
];

export default function LogoSection() {
  return (
    <section className="container my-4 rounded-xl bg-section-light-blue p-8 md:mb-6 md:mt-2 md:p-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {logos.map((item) => (
          <div className="flex items-center justify-center">
            <img src={item.paymentLogo} className="h-16" alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
