import React, { Component } from "react";

import "../../Assets/css/App.css";

import Navbar from "../UnboundComponent/Navbar";
import Hero from "./Hero";
import WhatDo from "./WhatDo";
import Work from "./Work";
import Ahtapot from "../../Assets/img/ahtapot.svg";
import Bmsumer from "../../Assets/img/bmsumer.jpg";
import Hamidiye from "../../Assets/img/hamidiye.png";
import Podbia from "../../Assets/img/podbia.png";
import Kafeinbox from "../../Assets/img/kafeinbox.jpg";
import Adekstra from "../../Assets/img/adekstra.svg";
import Iciniz from "../../Assets/img/iciniz.png";
import Gitmeden from "../../Assets/img/gitmeden.png";
import Gorselco from "../../Assets/img/gorselco.svg";
import Musavir from "../../Assets/img/musavir.svg";

export class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <WhatDo />
        <Work
          title="Akıllı Ahtapot"
          category="Teşvik Hesaplama Web Yazılımı"
          description="SGK Cari Dönem ve Geçmiş Dönem Devlet Teşvikleri Hesaplama Yazılımı"
          website="https://akilliahtapot.com/"
          gallery="https://codeck.com.tr/projects.html#ahtapot-1"
          image={Ahtapot}
        />
        <Work
          title="BM Sumer Liquefaction Calculator"
          category="Sıvılaşma Hesaplama Web ve Mobil Uygulaması"
          description="Matlab üzerinden hazırlanmış formüllerin web ve mobil platformlar üzerinde abonelik modeli ile son kullanıcıya sunulması"
          website="https://liquefaction.bmsumer.com/"
          gallery="https://codeck.com.tr/projects.html#bmsumer-1"
          image={Bmsumer}
        />
        <Work
          title="Hamidiye Sipariş Uygulamaları"
          category="Müşteri Bayi Mobil ve Web Uygulamaları"
          description="Müşteriler için Su Siparişi Web ve Mobil Uygulamaları, Bayiler için Sipariş Yönetim Sistemi, tüm satış öncesi, satış ve sonrası operasyon sistemleri"
          website="https://siparis.hamidiye.istanbul/"
          gallery="https://codeck.com.tr/projects.html#hamidiye-1"
          image={Hamidiye}
        />
        <Work
          title="Podbia Podcast"
          category="Türkiye in ilk Podcast Uygulaması!"
          description="Dinleme, Öğren, Paylaş! Türkiye'nin ilk, dünyanın en yeni podcast platformu ve mobil uygulaması!"
          website="https://podbia.com/"
          gallery="https://codeck.com.tr/projects.html#podbia-1"
          image={Podbia}
        />
        <Work
          title="Kafeinbox"
          category="3.Nesil Kahve Akımını belirlediğiniz periyotlar ile evlerinize gönderiyoruz. Tüketici Hobi Eğitimleri ile destekli Kafeinbox kutularında özel harman kahveler ve yöresel lezzetler sizi bekliyor!"
          description="Dinleme, Öğren, Paylaş! Türkiye'nin ilk, dünyanın en yeni podcast platformu ve mobil uygulaması!"
          website="https://kafeinbox.com/"
          gallery="https://codeck.com.tr/projects.html#kafeinbox-1"
          image={Kafeinbox}
        />
        <Work
          title="Adekstra"
          category="Reklam ve Analiz Platformu"
          description="Web, Mobil, TV ve DOOH alanlarında Reklam Yönetimi, Raporlama, Mecra yönetimi, İçerik yönetimi, Kullanıcı Analizi, Uygulama Analizi, Üçüncü Parti Reklam Mecralarındaki Reklamları tek kanaldan yönetebilme"
          website="https://adekstra.com/"
          gallery="https://codeck.com.tr/projects.html#adekstra-1"
          image={Adekstra}
        />
        <Work
          title="İçiniz"
          category="Online İçecek Pazaryeri"
          description="Bu markette sadece zilyon çeşit içilebilir ürün var. Sadece marka değil, içerik bazlı arama yaparak vücudunuzun ihtiyaçlarına göre sepetinizi oluşturun."
          website="https://iciniz.com/"
          gallery="https://codeck.com.tr/projects.html#iciniz-1"
          image={Iciniz}
        />
        <Work
          title="Gitmeden"
          category="Lokasyon bazlı canlı görüntü ve bilgi paylaşım sistemi"
          description="Lokasyonu paylaş, irtibat geçmemizi istediğin kişiyi bildir, randevu alalım. Profesyonellerimiz görmek istediğin yerden gerçek zamanlı görüntüleri seninle paylaşsın, dilediğin yerde dilediğin zamanda seyret. Gayrimenkul hakkında izlenimlerimizi ve çektiğimiz fotoğrafları aktaracağımız dolu, doyurucu bir rapor hazırlayıp sana verelim. Söz uçsun, yazı kalsın."
          website="https://gitmeden.com/"
          gallery="https://codeck.com.tr/projects.html#gitmeden-1"
          image={Gitmeden}
        />
        <Work
          title="Görsel.co"
          category="Otomatik Video Hazırlama Saas"
          description="Hazır temalar ya da kendi yüklediğiniz tema ile elinizdeki verileri kullanarak otomatik videolar oluşturun"
          website="https://gorsel.co/"
          gallery="https://codeck.com.tr/projects.html#gorselco-1"
          image={Gorselco}
        />
        <Work
          title="Müşavir"
          category="Kobiler için Akıllı Dijital Danışman"
          description="Kobilerin dijital dünyadaki ihtiyaçlarını karşılayacak, iş süreçlerini hızlandıracak ve sürdürülebilirliklerini destekleyecek bir yenilik sunuyoruz. İş Yönetim Yazılımları, Muhasebe, İş Akış Formları, Tedarik Zinciri Abonelikleri, SanalPazar Abonelikleri ve Tahsilat Sisteminden oluşan Müşavir işinizi kolaylaştıracak."
          website="https://musavir.co/"
          gallery="https://codeck.com.tr/projects.html#musavir-1"
          image={Musavir}
        />
        <Navbar />
        <Hero />
        <WhatDo />
        <Work
          title="Akıllı Ahtapot"
          category="Teşvik Hesaplama Web Yazılımı"
          description="SGK Cari Dönem ve Geçmiş Dönem Devlet Teşvikleri Hesaplama Yazılımı"
          website="https://akilliahtapot.com/"
          gallery="https://codeck.com.tr/projects.html#ahtapot-1"
          image={Ahtapot}
        />
        <Work
          title="BM Sumer Liquefaction Calculator"
          category="Sıvılaşma Hesaplama Web ve Mobil Uygulaması"
          description="Matlab üzerinden hazırlanmış formüllerin web ve mobil platformlar üzerinde abonelik modeli ile son kullanıcıya sunulması"
          website="https://liquefaction.bmsumer.com/"
          gallery="https://codeck.com.tr/projects.html#bmsumer-1"
          image={Bmsumer}
        />
        <Work
          title="Hamidiye Sipariş Uygulamaları"
          category="Müşteri Bayi Mobil ve Web Uygulamaları"
          description="Müşteriler için Su Siparişi Web ve Mobil Uygulamaları, Bayiler için Sipariş Yönetim Sistemi, tüm satış öncesi, satış ve sonrası operasyon sistemleri"
          website="https://siparis.hamidiye.istanbul/"
          gallery="https://codeck.com.tr/projects.html#hamidiye-1"
          image={Hamidiye}
        />
        <Work
          title="Podbia Podcast"
          category="Türkiye in ilk Podcast Uygulaması!"
          description="Dinleme, Öğren, Paylaş! Türkiye'nin ilk, dünyanın en yeni podcast platformu ve mobil uygulaması!"
          website="https://podbia.com/"
          gallery="https://codeck.com.tr/projects.html#podbia-1"
          image={Podbia}
        />
        <Work
          title="Kafeinbox"
          category="3.Nesil Kahve Akımını belirlediğiniz periyotlar ile evlerinize gönderiyoruz. Tüketici Hobi Eğitimleri ile destekli Kafeinbox kutularında özel harman kahveler ve yöresel lezzetler sizi bekliyor!"
          description="Dinleme, Öğren, Paylaş! Türkiye'nin ilk, dünyanın en yeni podcast platformu ve mobil uygulaması!"
          website="https://kafeinbox.com/"
          gallery="https://codeck.com.tr/projects.html#kafeinbox-1"
          image={Kafeinbox}
        />
        <Work
          title="Adekstra"
          category="Reklam ve Analiz Platformu"
          description="Web, Mobil, TV ve DOOH alanlarında Reklam Yönetimi, Raporlama, Mecra yönetimi, İçerik yönetimi, Kullanıcı Analizi, Uygulama Analizi, Üçüncü Parti Reklam Mecralarındaki Reklamları tek kanaldan yönetebilme"
          website="https://adekstra.com/"
          gallery="https://codeck.com.tr/projects.html#adekstra-1"
          image={Adekstra}
        />
        <Work
          title="İçiniz"
          category="Online İçecek Pazaryeri"
          description="Bu markette sadece zilyon çeşit içilebilir ürün var. Sadece marka değil, içerik bazlı arama yaparak vücudunuzun ihtiyaçlarına göre sepetinizi oluşturun."
          website="https://iciniz.com/"
          gallery="https://codeck.com.tr/projects.html#iciniz-1"
          image={Iciniz}
        />
        <Work
          title="Gitmeden"
          category="Lokasyon bazlı canlı görüntü ve bilgi paylaşım sistemi"
          description="Lokasyonu paylaş, irtibat geçmemizi istediğin kişiyi bildir, randevu alalım. Profesyonellerimiz görmek istediğin yerden gerçek zamanlı görüntüleri seninle paylaşsın, dilediğin yerde dilediğin zamanda seyret. Gayrimenkul hakkında izlenimlerimizi ve çektiğimiz fotoğrafları aktaracağımız dolu, doyurucu bir rapor hazırlayıp sana verelim. Söz uçsun, yazı kalsın."
          website="https://gitmeden.com/"
          gallery="https://codeck.com.tr/projects.html#gitmeden-1"
          image={Gitmeden}
        />
        <Work
          title="Görsel.co"
          category="Otomatik Video Hazırlama Saas"
          description="Hazır temalar ya da kendi yüklediğiniz tema ile elinizdeki verileri kullanarak otomatik videolar oluşturun"
          website="https://gorsel.co/"
          gallery="https://codeck.com.tr/projects.html#gorselco-1"
          image={Gorselco}
        />
        <Work
          title="Müşavir"
          category="Kobiler için Akıllı Dijital Danışman"
          description="Kobilerin dijital dünyadaki ihtiyaçlarını karşılayacak, iş süreçlerini hızlandıracak ve sürdürülebilirliklerini destekleyecek bir yenilik sunuyoruz. İş Yönetim Yazılımları, Muhasebe, İş Akış Formları, Tedarik Zinciri Abonelikleri, SanalPazar Abonelikleri ve Tahsilat Sisteminden oluşan Müşavir işinizi kolaylaştıracak."
          website="https://musavir.co/"
          gallery="https://codeck.com.tr/projects.html#musavir-1"
          image={Musavir}
        />
      </div>
    );
  }
}

export default Index;
