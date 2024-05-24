import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 290,
          width: "100vh",
        }}
      >
        <p className="homeMainText">
          TrainIQ is an AI-driven platform that generates employee assessments
          based on company documents. It offers ready-to-use assessment
          libraries across various domains like GDPR, IT security, and
          healthcare. Users can create custom assessments, track employee
          progress with detailed analytics, and identify skill gaps. TrainIQ
          integrates seamlessly with existing training programs and ensures data
          security through robust encryption protocols. The platform is
          adaptable to various industries, enhancing employee knowledge and
          growth through tailored assessments.
          <br />
          <br />
          TrainIQ, şirket belgelerinden özelleştirilmiş çalışan
          değerlendirmeleri oluşturan gelişmiş bir AI platformudur. GDPR, IT
          güvenliği, sağlık gibi alanlarda çeşitli hazır değerlendirme
          kütüphaneleri sunar. Platform, özelleştirilmiş değerlendirmeler
          oluşturmayı ve çalışanların ilerlemesini izlemeyi sağlayan kapsamlı
          analizler sunar. TrainIQ, mevcut eğitim programlarıyla kolayca entegre
          olur ve güçlü şifreleme önlemleri ile veri güvenliğine vurgu yapar.
          Çeşitli sektörlere uyarlanabilirliği sayesinde çalışan bilgi ve
          profesyonel gelişimini teşvik eder.
        </p>
      </div>
    </div>
  );
}

export default Home;
