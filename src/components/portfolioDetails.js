import toko1 from './images/portfolio/tokomuistio/tokomuistio-1.png'
import toko2 from './images/portfolio/tokomuistio/tokomuistio-2.jpg'
import toko3 from './images/portfolio/tokomuistio/tokomuistio-3.jpg'
import toko4 from './images/portfolio/tokomuistio/tokomuistio-4.jpg'
import laskuri1 from './images/portfolio/ravintolaskuri/laskuri-1.jpg'
import laskuri2 from './images/portfolio/ravintolaskuri/laskuri-2.jpg'
import laskuri3 from './images/portfolio/ravintolaskuri/laskuri-3.jpg'
import laskuri4 from './images/portfolio/ravintolaskuri/laskuri-4.jpg'
import laskuri5 from './images/portfolio/ravintolaskuri/laskuri-5.jpg'
import laskuri6 from './images/portfolio/ravintolaskuri/laskuri-6.jpg'
import sijainti1 from './images/portfolio/sijaintimuistio/sijaintimuistio-1.jpg'
import sijainti2 from './images/portfolio/sijaintimuistio/sijaintimuistio-2.jpg'
import qr1 from './images/portfolio/qr/qr-1.jpg'
import qr2 from './images/portfolio/qr/qr-2.jpg'
import sketchuptalo0 from './images/portfolio/sketchuptalo/sketchuptalo-0.jpg'
import sketchuptalo1 from './images/portfolio/sketchuptalo/sketchuptalo-1.jpg'
import sketchuptalo2 from './images/portfolio/sketchuptalo/sketchuptalo-2.jpg'
import sketchuptalo3 from './images/portfolio/sketchuptalo/sketchuptalo-3.jpg'
import sketchuptalo4 from './images/portfolio/sketchuptalo/sketchuptalo-4.jpg'
import sketchuptalo5 from './images/portfolio/sketchuptalo/sketchuptalo-5.jpg'
import sketchuptalo6 from './images/portfolio/sketchuptalo/peikkojahti-1.jpg'
import sketchuptalo7 from './images/portfolio/sketchuptalo/peikkojahti-2.jpg'
import rss1 from './images/portfolio/rss/rss-1.png'
import rss2 from './images/portfolio/rss/rss-2.png'
import rss3 from './images/portfolio/rss/rss-3.png'
import rss4 from './images/portfolio/rss/rss-4.png'
import blogi1 from './images/portfolio/blogi/blogi-1.jpg'
import blogi2 from './images/portfolio/blogi/blogi-2.jpg'
import blogi3 from './images/portfolio/blogi/blogi-3.jpg'
import vy1 from './images/portfolio/vrymparisto_pelit/vy-1.jpg'
import vy2 from './images/portfolio/vrymparisto_pelit/ankkajahti-1.jpg'
import vy3 from './images/portfolio/vrymparisto_pelit/egypt-1.jpg'
import vy4 from './images/portfolio/vrymparisto_pelit/egypt-2.jpg'
import vy5 from './images/portfolio/vrymparisto_pelit/egypt-3.jpg'
import vy6 from './images/portfolio/vrymparisto_pelit/peikkojahti-3.jpg'
import vy7 from './images/portfolio/vrymparisto_pelit/roskankeraaja-1.jpg'
import vy8 from './images/portfolio/vrymparisto_pelit/roskankeraaja-2.jpg'
import vy9 from './images/portfolio/vrymparisto_pelit/roskankeraaja-3.jpg'
import vy10 from './images/portfolio/vrymparisto_pelit/roskankeraaja-4.jpg'
import valuutta1 from './images/portfolio/valuuttamuunnin/valuutta-1.png'
import valuutta2 from './images/portfolio/valuuttamuunnin/valuutta-2.png'
import valuutta3 from './images/portfolio/valuuttamuunnin/valuutta-3.png'
import data1 from './images/portfolio/python/data-1.jpg'
import data2 from './images/portfolio/python/data-6.jpg'
import data3 from './images/portfolio/python/data-3.jpg'
import data4 from './images/portfolio/python/data-4.jpg'
import data5 from './images/portfolio/python/data-5.jpg'
import data6 from './images/portfolio/python/data-2.jpg'
import ont1 from './images/portfolio/ont/ont-1.jpg'
import ont2 from './images/portfolio/ont/ont-2.jpg'
import ont3 from './images/portfolio/ont/ont-3.jpg'
import ont4 from './images/portfolio/ont/ont-4.jpg'
import kp1 from './images/portfolio/knapsack-prblm/knapsackprblm-1.png'
import kp2 from './images/portfolio/knapsack-prblm/knapsackprblm-2.png'
import kp3 from './images/portfolio/knapsack-prblm/knapsackprblm-3.png'

export const portfolioDetails = [
      {
      src: ont1,
      id: 0,
      width: 1,
      height: 1,
      title: "Opinn??ytety??",
      description1: `Opinn??ytety??n kehitt??mistavoitteena oli toteuttaa responsiivinen verkkosovellus, joka k??ytt???? REST API -rajapinnan yli tietokantaa ja toimii tarvittaessa ilman verkkoyhteytt??. K??ytt??liittym??n kehityksess?? tuli huomioida QR-koodilukijan k??ytt??.`,
      description3:` Palvelinsovellus kehitettiin ASP.NET Core -alustalle, jonka k??ytt??m?? tietokanta toteutettiin SQL Serverille. Relaatiotietokannan kanssa vuorovaikuttamaan valittiin Entity Framework Core -kehys. Selainsovellus rakennettiin Reactilla. QR-koodilukijaksi valittiin avoimen l??hdekoodin sovellus, joka avaa laitteen kameran ja tunnistaa QR-koodin sis??ll??n. Selainsovelluksen toiminta offline-tilassa toteutettiin progressiivisen verkkosovelluksen tekniikoin. V??limuistin k??ytt??strategioita ovat Cache-first sek?? Network-first. Kun k??ytt??j?? tekee kirjauksen offline-tilassa, kirjauksen tiedot tallennetaan selaimen paikalliseen tietokantaan. Verkkoyhteyden palautuessa tiedot siirret????n selaimen paikallisesta tietokannasta palvelimelle.`,
      description2: `Kehitetyn sovelluksen tarkoituksena on auttaa tarkastusten, kuten teollisuuden laitetarkastusten, teossa. Sovellus esitt???? tietoja tarkastuksista ja niihin kuuluvista kohteista, lis??ksi sill?? voidaan suorittaa tarkastusten kirjauksia. Tietyn kohteen kirjausn??kym?? voidaan avata lukemalla kohdetta vastaava QR-koodi.`,
      addons: `Lopputy?? arvioitiin arvosanalla 5. Tarkastajan arvio: Ty??ss?? huonoa on se, etten l??yt??nyt siit?? mit????n puutteita.`,
      link2: "https://www.theseus.fi/handle/10024/509411",
      alts: "react asp.net software development pwa",
      className : "img",
      tags:[
        {
          tag: "React",
        },
        {
          tag: "ASP.NET",
        },
        {
          tag: "MS SQL Server",
        },
        {
          tag: "PWA",
        },
      ],
      content: [
        {
          src: ont2,
        },
        {
          src: ont3,
        },
        {
          src: ont4,
        }
      ]
    },
    {
      src: rss1,
      id: 1,
      width: 1,
      height: 1,
      title: "Uutiset Covid-suodattimella",
      description1: `Tuoreimmat uutiset RSS-sy??tteist?? ilman Covid-aiheita`,
      description2:`RSS-sy??ttein?? k??ytet????n Ylen, Ilta-Sanomien, Iltalehden ja Helsingin Sanomien tuoreimpia uutisia.`,
      description3: `Backend Nodella, xml-data parsitaan xml2js-moduulilla. Backendissa suodatetaan korona-aiheet sek?? j??rjestet????n uutiset aikaj??rjestykseen. Frontend Reactilla. K??ytt??liittym??st?? aiheita voi rajata uutisten tarjoajien kategorioiden perusteella.`,
      link1: "https://github.com/helisusanna/covidfree-rss-news",
      link2: "https://covidfree-rss-news.herokuapp.com/",
      alt: "nodejs rss react javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node",
        },
        {
          tag: "React",
        },
        {
          tag: "RSS",
        },
        {
          tag: "XML",
        },
      ],
      content: [
        {
          src: rss2,
        },
        {
          src: rss3,
        },
        {
          src: rss4,
        },
      ]
    },
    {
      src: toko1,
      id: 2,
      width: 1,
      height: 1,
      title: "TOKO-muistio",
      description1: `React Native ja Expo -tekniikoin toteutettu mobiilisovellus koiran kilpailutottelevaisuuskoulutuksen kehityksen seurantaan.`,
      description2:`Appiin tallennetaan tiedot treenivideosta, hallinnoidaan videoita ja merkit????n onnistuneita suorituksia ns. suosikkeja. `,
      description3: `Tiedot tallentuvat sqlite-tietokantaan.`,
      link1: "https://github.com/helisusanna/TOKOmuistio",
      link1description: "Repositorio",
      link2: "https://helisusanna.github.io/TOKOmuistio/",
      link2description: "Esittely",
      alts: "react native javascript mobile development",
      className : "img",
      tags:[
        {
          tag: "React Native",
        },
        {
          tag: "Android",
        },
      ],
      content: [
        {
          src: toko2,
        },
        {
          src: toko3,
        },
        {
          src: toko4,
        }
      ]
    },
    {
      src: laskuri1,
      id: 3,
      width: 1,
      height: 1,
      title: "Koiran ravintolaskuri",
      description1: `Koiran ravintolaskuri on luotu erityisesti haiman vajaatoiminnasta k??rsivien koirien ohjaajille.`,
      description2:`Laskuri laskee oikean m????r??n ravintoa sairaalle koiralle, ottaen huomioon sairauden hoitoon tarvittavat ravintolis??t.
      Laskuri on suunniteltu ruokintamallille 50 % raakalihaa ja 50 % kuivaruokaa. K??ytt??j?? voi rekister??ity?? palveluun ja tallentaa koirien ja laskurin antamat tiedot k??ytt??j??tilin alle.`,
      description3: `K??ytetty Node ja MySQL. Frontissa Noden EJS.`,
      link1: "https://github.com/helisusanna/sql-5050-laskuri",
      link2: "https://koiran-5050-laskuri.herokuapp.com/",
      alt: "node javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node",
        },
        {
          tag: "EJS",
        },
        {
          tag: "SQL",
        },
        {
          tag: "CSS",
        },
      ],
      content: [
        {
          src: laskuri2,
        },
        {
          src: laskuri3,
        },
        {
          src: laskuri4,
        },
        {
          src: laskuri5,
        },
        {
          src: laskuri6,
        }
      ]
    },
    {
      src: qr1,
      id: 4,
      width: 1,
      height: 1,
      title: "QR-lukija",
      description1: `QR-koodin lukija mobiiliin`,
      description2: `Lukijan lis??ksi mobiilisovellus paikantaa k??ytt??j??n sijainnin ja hakee l??himm??n Otto-automaatin tiedot. Tiedot haetaan JSON-tiedostosta.`,
      description3: `Luotu React Native ja Expo -tekniikoin.`,
      link1: "https://github.com/helisusanna/qr-scanner",
      alt: "react native javascript mobile development",
      className : "img",
      tags:[
        {
          tag: "React Native",
        },
        {
          tag: "Android",
        },
      ],
      content: [
        {
          src: qr2,
        },
      ]
    },
    {
      src: sijainti1,
      id: 5,
      width: 1,
      height: 1,
      title: "Sijaintimuistio",
      description1: `Sijaintimuistio mobiiliin`,
      description2: `Sijaintimuistio on tarkoitettu sijaintien paikantamiseen ja tallentamiseen. Sovelluksella voi ottaa kuvan esimerkiksi hyv??st?? sienestyspaikasta, kirjoittaa muistiinpanot sijainnista ja sovellus paikantaa sijainnin sek?? ajankohdan automaattisesti.`,
      description3: `Luotu React Native ja Expo -tekniikoin. Tiedot tallentuvat sqlite-tietokantaan.`,
      link1: "https://github.com/helisusanna/sijaintimuistio",
      alt: "react native javascript mobile development",
      className : "img",
      tags:[
        {
          tag: "React Native",
        },
        {
          tag: "Android",
        },
      ],
      content: [
        {
          src: sijainti2,
        },
      ]
    },
    {
      src: sketchuptalo0,
      id: 6,
      width: 1,
      height: 1,
      title: "3D-talo",
      description1: `SketchUpilla mallinnettu 3D-talo`,
      description2: `Talo on mallinnettu rakennuspiirrustusten avulla ja on mallinnus oikeasta talosta reaalimitoilla. Olen k??ytt??nyt mallintamaani taloa my??s objektina peliss?? ja 3D-mallia on k??ytetty apuna remonttien suunnittelussa.`,
      alt: "3d modeling sketchup unity",
      className : "img",
      tags:[
        {
          tag: "3D",
        },
        {
          tag: "Unity",
        },
        {
          tag: "C#",
        },
      ],
      content: [
        {
          src: sketchuptalo1,
        },
        {
          src: sketchuptalo2,
        },
        {
          src: sketchuptalo3,
        },
        {
          src: sketchuptalo4,
        },
        {
          src: sketchuptalo5,
        },
        {
          src: sketchuptalo6,
        },
        {
          src: sketchuptalo7,
        },
      ]
    },
    {
      src: blogi1,
      id: 7,
      width: 1,
      height: 1,
      title: "Blogity??kalu",
      description1: `Simppeli ty??kalu blogin yll??pitoon`,
      description2:`Blogity??kalulla voi luoda ja yll??pit???? sis??lt????. Yll??pito tapahtuu url-osoitteen /admin-p????tteelt??. P????aiheena palvelinpuolen harjoittelu. Frontissa Noden EJS.
      Olen toteuttanut sovelluksia my??s tietoturvallisesti, t??m?? j????k????n avoimeksi ty??kaluksi.`,
      description3: `Luotu Node.js-tekniikoin.`,
      link1: "https://github.com/helisusanna/blogityokalu",
      link2: "https://blogityokalu.herokuapp.com/",
      alt: "nodejs json javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node",
        },
        {
          tag: "EJS",
        },
        {
          tag: "JSON",
        },
      ],
      content: [
        {
          src: blogi2,
        },
        {
          src: blogi3,
        },
      ]
    },
    {
      src: vy1,
      id: 8,
      width: 1,
      height: 1,
      title: "Pelit ja VR",
      description1: `Pelej?? ja virtuaaliymp??rist??j?? Unityll??`,
      description2: `Peliss?? Ankkajahti ker??t????n kumiankkoja saaren ymp??rilt??. Peliss??, jossa k??yt??n mallintamaani 3D-taloa, etsit????n taloon piiloutunut peikko ja 
      peliss?? Roskanker????j?? ker??t????n roskia merenpohjasta aikaa vastaan. Olen tehnyt 3D-pelien lis??ksi 2D-pelej?? sek?? mobiilipelej??.`,
      description3: `Peliohjelmoinnit toteutettu kielell?? C#. Olio-ohjelmointia olen my??s opiskellut samaisella kielell?? ja luonut konsoliappeja.`,
      link1: "https://helisusanna.github.io/peikkojahti/",
      alt: "nodejs json javascript backend software development",
      alt: "unity Csharp games virtualreality gameprogramming",
      className : "img",
      tags:[
        {
          tag: "Unity",
        },
        {
          tag: "C#",
        },
        {
          tag: "VR",
        },
        {
          tag: "3D",
        },
      ],
      content: [
        {
          src: vy2,
        },
        {
          src: vy3,
        },
        {
          src: vy4,
        },
        {
          src: vy5,
        },
        {
          src: vy6,
        },
        {
          src: vy7,
        },
        {
          src: vy8,
        },
        {
          src: vy9,
        },
        {
          src: vy10,
        },
      ]
    },
    {
      src: valuutta1,
      id: 9,
      width: 1,
      height: 1,
      title: "Offline Valuuttamuunnin",
      description1: `Eurom????r??n muuttaminen muuksi valuutaksi PWA-sovelluksella`,
      description2: `PWA-sovellus Reactilla. Valuutat ja kurssit haetaan Web API rajapinnasta exchangeratesapi.io. Service Worker tallentaa tiedot kerran p??iv??ss?? v??limuistiin. Voidaan tallentaan laitteeseen kuten natiivisovellus.`,
      link1: "https://github.com/helisusanna/currency-conventer",
      alt: "react api javascript pwa",
      className : "img",
      tags:[
        {
          tag: "React",
        },
        {
          tag: " API",
        },
        {
          tag: "PWA",
        },
      ],
      content: [
        {
          src: valuutta2,
        },
        {
          src: valuutta3,
        },
      ]
    },
    {
      src: kp1,
      id: 10,
      width: 1,
      height: 1,
      title: "Knapsack Problem",
      description1: `Python-kielinen Ahne-algoritmi ratkaisee painotetun 0/1-reppuongelman`,
      description2: `Ohjelma saa sy??tteen?? joukon S, jonka alkiot ovat 3-tuplia (a,b,c), miss?? a on objektin nimi, b kyseisen objektin toteuttamisesta saatava hy??tyluku ja c kyseisen objektin painoluku (tai toteuttamisesta aiheutuva kustannus). Lis??ksi sy??tteen?? annetaan suurin sallittu kokonaispaino (tai kokonaisbudjetti). Algortimi k??ytt???? prioriteettijonoa ja selvitt???? reppuun laitettavien objektien nimet, repun kokonaishy??dyn sek?? kustannukset/painon.`,
      description3: `Node-sovellus k??ytt???? t??t?? Python algoritmia, k??ytt??liittym?? toteutettu EJS. Sovellus voisi toimia esimerkiki projektinhallinnan apuna auttamaan hankintojen tekemisess??. K??ytt??liittym???? tulisi jatkokehitt???? siten, ett?? objekteja voisi lis??t?? tai poistaa. Nyt vakiona on nelj?? objektia.`,
      link1: "https://knapsackproblem.herokuapp.com/",
      link2: "https://github.com/helisusanna/knapsack-problem",
      alt: "python node algorithms greedy",
      className : "img",
      tags:[
        {
          tag: "Python",
        },
        {
          tag: "Data",
        },
        {
          tag: "Node",
        },
        {
          tag: "Algorithms",
        },
      ],
      content: [
        {
          src: kp2,
        },
        {
          src: kp3,
        },
      ]
    },
    {
      src: data1,
      id: 11,
      width: 1,
      height: 1,
      title: "Datan k??sittely",
      description1: `Raporttejani datan k??sittelyst??`,
      description2: `Osa opinnoistani on matematiikkaa, tietomassan analysointia ja visualisointia, tietorakenteiden, algoritmien ja niiden aikakompleksisuuden hallintaa tai vertailua. Ohessa raporttejani aiheista.`,
      description3: `Raportit ovat osin diskreettia matematiikkaa, aiheista graafiteoria, lineaarialgebrat ja joukko-oppi. Tietokannat ja SQL liittynee aiheisiin my??s, joista olen my??s k??ynyt erilliset opintojaksot.`,
      link2: "https://drive.google.com/file/d/1iG_7_G3p6aiAwEJRcjZORsM2BcqFiyB5/view?usp=sharing",
      alt: "python big data sql discrete math",
      className : "img",
      tags:[
        {
          tag: "Python",
        },
        {
          tag: "Data",
        },
        {
          tag: "Discrete math",
        },
        {
          tag: "Algorithms",
        },
      ],
      content: [
        {
          src: data2,
        },
        {
          src: data3,
        },
        {
          src: data4,
        },
        {
          src: data5,
        },
        {
          src: data6,
        },
      ]
    },
  ];