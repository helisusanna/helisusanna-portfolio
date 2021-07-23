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
import rss1 from './images/portfolio/rss/rss-1.jpg'
import rss2 from './images/portfolio/rss/rss-2.jpg'
import rss3 from './images/portfolio/rss/rss-3.jpg'
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
import valuutta1 from './images/portfolio/valuuttamuunnin/valuutta-1.jpg'
import valuutta2 from './images/portfolio/valuuttamuunnin/valuutta-2.jpg'
import valuutta3 from './images/portfolio/valuuttamuunnin/valuutta-3.jpg'
import data1 from './images/portfolio/python/data-1.jpg'
import data2 from './images/portfolio/python/data-2.jpg'
import data3 from './images/portfolio/python/data-3.jpg'
import data4 from './images/portfolio/python/data-4.jpg'
import data5 from './images/portfolio/python/data-5.jpg'

export const portfolioDetails = [
    {
      src: toko1,
      id: 0,
      width: 1,
      height: 1,
      title: "TOKO-muistio",
      description1: `React Native ja Expo -tekniikoin toteutettu mobiilisovellus koiran kilpailutottelevaisuuskoulutuksen kehityksen seurantaan.`,
      description2:`Appiin tallennetaan tiedot treenivideosta, hallinnoidaan videoita ja merkitään onnistuneita suorituksia ns. suosikkeja. `,
      description3: `Tiedot tallentuvat sqlite-tietokantaan.`,
      link1: "https://github.com/helisusanna/TOKOmuistio",
      link1description: "Repositorio",
      link2: "https://helisusanna.github.io/TOKOmuistio/",
      link2description: "Esittely",
      alts: "react native javascript mobile software development",
      className : "img",
      tags:[
        {
          tag: "React Native",
        },
        {
          tag: "Android",
        },
        {
          tag: "Design",
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
      id: 1,
      width: 1,
      height: 1,
      title: "Koiran ravintolaskuri",
      description1: `Koiran ravintolaskuri on luotu erityisesti haiman vajaatoiminnasta kärsivien koirien ohjaajille.`,
      description2:`Laskuri laskee oikean määrän ravintoa sairaalle koiralle, ottaen huomioon sairauden hoitoon tarvittavat ravintolisät.
      Laskuri on suunniteltu ruokintamallille 50 % raakalihaa ja 50 % kuivaruokaa. Käyttäjä voi rekisteröityä palveluun ja tallentaa koirien ja laskurin antamat tiedot käyttäjätilin alle.`,
      description3: `Käytetty Node.js ja MySQL.`,
      link1: "https://github.com/helisusanna/sql-5050-laskuri",
      link2: "https://koiran-5050-laskuri.herokuapp.com/",
      alt: "nodejs node javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node.js",
        },
        {
          tag: "CSS",
        },
        {
          tag: "Design",
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
      id: 2,
      width: 1,
      height: 1,
      title: "QR-lukija",
      description1: `QR-koodin lukija mobiiliin`,
      description2: `Lukijan lisäksi mobiilisovellus paikantaa käyttäjän sijainnin ja hakee lähimmän Otto-automaatin tiedot. Tiedot haetaan JSON-tiedostosta.`,
      description3: `Luotu React Native ja Expo -tekniikoin.`,
      link1: "https://github.com/helisusanna/qr-scanner",
      alt: "react native javascript mobile software development",
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
      id: 3,
      width: 1,
      height: 1,
      title: "Sijaintimuistio",
      description1: `Sijaintimuistio mobiiliin`,
      description2: `Sijaintimuistio on tarkoitettu sijaintien paikantamiseen ja tallentamiseen. Sovelluksella voi ottaa kuvan esimerkiksi hyvästä sienestyspaikasta, kirjoittaa muistiinpanot sijainnista ja sovellus paikantaa sijainnin sekä ajankohdan automaattisesti.`,
      description3: `Luotu React Native ja Expo -tekniikoin. Tiedot tallentuvat sqlite-tietokantaan.`,
      link1: "https://github.com/helisusanna/sijaintimuistio",
      alt: "react native javascript mobile software development",
      className : "img",
      tags:[
        {
          tag: "React Native",
        },
        {
          tag: "Android",
        },
        {
          tag: "Design",
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
      id: 4,
      width: 1,
      height: 1,
      title: "3D-talo",
      description1: `SketchUpilla mallinnettu 3D-talo`,
      description2: `Talo on mallinnettu rakennuspiirrustusten avulla ja on mallinnus oikeasta talosta reaalimitoilla. Olen käyttänyt mallintamaani taloa myös objektina pelissä ja 3D-mallia on käytetty apuna remonttien suunnittelussa.`,
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
      src: rss1,
      id: 5,
      width: 1,
      height: 1,
      title: "RSS-Uutiset",
      description1: `12 viimeisintä uutista RSS-syötteistä`,
      description2:`Syötteinä käytetään Yleä, Ilta-Sanomia ja Helsingin Sanomia. Pääaiheena palvelinpuolen harjoittelu, design toteutettu vain Bootstrapilla.`,
      description3: `Luotu Node.js-tekniikoin. Sovellus käyttää xml-datan parsimiseen xml2js-moduulia.`,
      link1: "https://github.com/helisusanna/rss-uutiset",
      link2: "https://rss-uutiset.herokuapp.com/",
      alt: "nodejs rss javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node.js",
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
      ]
    },
    {
      src: blogi1,
      id: 6,
      width: 1,
      height: 1,
      title: "Blogityökalu",
      description1: `Simppeli työkalu blogin ylläpitoon`,
      description2:`Blogityökalulla voi luoda ja ylläpitää sisältöä. Ylläpito tapahtuu url-osoitteen /admin-päätteeltä. Pääaiheena palvelinpuolen harjoittelu, design toteutettu vain Bootstrapilla.
      Olen toteuttanut sovelluksia myös tietoturvallisesti, tämä jääköön avoimeksi työkaluksi.`,
      description3: `Luotu Node.js-tekniikoin.`,
      link1: "https://github.com/helisusanna/blogityokalu",
      link2: "https://blogityokalu.herokuapp.com/",
      alt: "nodejs json javascript backend software development",
      className : "img",
      tags:[
        {
          tag: "Node.js",
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
      id: 7,
      width: 1,
      height: 1,
      title: "Pelit ja VR",
      description1: `Pelejä ja virtuaaliympäristöjä Unityllä`,
      description2: `Pelissä Ankkajahti kerätään kumiankkoja saaren ympäriltä. Pelissä, jossa käytän mallintamaani 3D-taloa, etsitään taloon piiloutunut peikko ja 
      pelissä Roskankerääjä kerätään roskia merenpohjasta aikaa vastaan. Olen tehnyt 3D-pelien lisäksi 2D-pelejä sekä mobiilipelejä.`,
      description3: `Peliohjelmoinnit toteutettu kielellä C#. Olio-ohjelmointia olen myös opiskellut samaisella kielellä ja luonut konsoliappeja.`,
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
      id: 8,
      width: 1,
      height: 1,
      title: "Valuuttamuunnin",
      description1: `Euromääärän muuntaminen muuksi valuutaksi`,
      description2: `Yksinkertainen web-sovellus Reactilla. Valuutat ja kurssit haetaan REST API rajapinnasta exchangeratesapi.io.`,
      link1: "https://github.com/helisusanna/valuuttamuunnin",
      alt: "react api javascript",
      className : "img",
      tags:[
        {
          tag: "React.js",
        },
        {
          tag: " API",
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
      src: data1,
      id: 9,
      width: 1,
      height: 1,
      title: "Datan käsittely",
      description1: `Raporttejani datan käsittelystä`,
      description2: `Osa opinnoistani on matematiikkaa, tietomassan analysointia ja visualisointia, tietorakenteiden ja algoritmien hallintaa. Ohessa raporttejani aiheista.`,
      description3: `Raportit ovat osin diskreettia matematiikkaa, aiheista graafiteoria, lineaarialgebrat ja joukko-oppi. Tietokannat ja SQL liittynee aiheisiin myös, joista olen myös käynyt erilliset opintojaksot.`,
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
      ]
    },
  ];