import { FC } from "react";
import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";

export const About: FC = () => {
  const About = [
    {
      title: "Bilgili Ekip",
      text: "Yaptıkları işlerin ehli olan kişilerden oluşan ekibimiz.",
      icon: FiUsers,
    },
    {
      title: "Hızlı Teslim",
      text: "Siparişlerinizi olabildiğince hızlı teslim etmeye çalışırız.",
      icon: FiClock,
    },
    {
      title: "Uygun Fiyatlı",
      text: "Piyasaya göre uygun fiyatlara işler yapmaktayız.",
      icon: FiDollarSign,
    },
  ];

  return (
    <section className="relative " id="about" >
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-blue-800 font-bold text-4xl">Hakkımızda</h1>
          <p className="text-gray-700 font-semibold text-lg mt-3">
          India’s Top Tally Solution Providers - Our Brand provides Complete Tally
                            Solutions across Delhi - NCR - India. The Following are the services provided by Our Team.
                        
            <br />
            Şuanlık elimizdeki imkanlar doğrultusunda <b>Yazılım</b>,{" "}
            <b>Grafik Tasarım</b> ve <b>Oyun</b> sektörlerinde hizmet
            vermekteyiz.
            <br />
            İleri tarihlerde ise daha fazla sektörde hizmet vereceğiz.
          </p>
        </div>

     



     
      </div>
    </section>
  );
};
