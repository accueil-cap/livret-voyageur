let lang = localStorage.getItem("lang") || "fr";

/* =========================
   CHANGER DE LANGUE
========================= */
function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);
  render();
}

/* =========================
   FONCTION PHOTO (REUTILISABLE)
========================= */
function photo(folder, img, text) {
  return `
    <div class="photo">
      <img src="images/${folder}/${img}" />
      <p>${text}</p>
    </div>
  `;
}

/* =========================
   CONTENU MULTILINGUE
========================= */
const t = {
  fr: {
    title: "Conciergerie du logement",
    subtitle: "Récupération des clés",
    menu: "Accès rapide",

    sections: {
      heure: {
        title: "1 - Heure d'arrivée",
        text: "Système de récupération autonome des clés avec possibilité d’arriver de nuit, n’importe quel jour de la semaine."
      },

      adresse: {
        title: "2 - Adresse du Point d'accueil pour récupérer les clés",
        text: `
          Conciergerie du Cap d'Agde<br>
          Impasse des Sargasses<br>
          34300 Cap d'Agde<br>
          Résidence Amoureva<br><br>
          📍 Ouvrir Google Maps
        `
      },

      photos1: {
        title: "3 - Photographies du point d'accueil",
        text: `
          ${photo("251-monge", "conciergerie1.jpg", "Point d'accueil")}
          ${photo("251-monge", "conciergerie2.jpg", "Point d'accueil")}
        `
      },

      codes: {
        title: "4 - Boîte à clés / Codes d'accès",
        text: `
          <b>Code de la porte d'entrée</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">3492#</span><br>
          (poussez SIMULTANEMENT la porte)<br><br>

          <b>Boîte à clés</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 251</span><br><br>

          <b>Digicode</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">7088</span><br><br>

          <b>Pour l'ouverture :</b> mettre le code et tourner la serrure sur la droite<br><br>
          <b>Pour la fermeture :</b> conserver le même code et tourner sur la gauche,
          puis remettre à 0000
        `
      },

      taxis: {
        title: "5 - Taxis / VTC",
        text: `
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>

          Génie Taxi : 06 95 13 78 77<br><br>

          ${photo("251-monge", "vtcconfort.jpg", "VTC Confort")}
          ${photo("251-monge", "genietaxi.jpg", "Génie Taxi")}
        `
      },

      logement: {
        title: "6 - Adresse du logement",
        text: `
          7 rue Sarret de Coussergues<br>
          34300 Cap d'Agde<br><br>

          Parking : 115 / D33<br>
          Résidence : Le Colisée<br>
          Bâtiment : D<br>
          Appartement : 33<br><br>

          📍 Ouvrir Google Maps
        `
      },

      photos2: {
        title: "7 - Accès logement",
        text: "Photos d'accès à venir (portail, parking, bâtiment, etc.)"
      },

      livret: {
        title: "8 - Livret de séjour",
        text: "Accès au livret complet du logement."
      }
    }
  },

  en: {
    title: "Property Check-in Guide",
    subtitle: "Key collection",
    menu: "Quick access",

    sections: {
      heure: {
        title: "1 - Check-in time",
        text: "Self check-in available 24/7 with flexible arrival time."
      },

      adresse: {
        title: "2 - Meeting point",
        text: `
          Concierge of Cap d'Agde<br>
          Impasse des Sargasses<br>
          34300 Cap d'Agde<br>
          Amoureva residence<br><br>
          📍 Open Google Maps
        `
      },

      photos1: {
        title: "3 - Photos",
        text: `
          ${photo("251-monge", "conciergerie1.jpg", "Meeting point")}
          ${photo("251-monge", "conciergerie2.jpg", "Meeting point")}
        `
      },

      codes: {
        title: "4 - Key box / Access codes",
        text: `
          <b>Door code</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">3492#</span><br><br>

          <b>Key box</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 251</span><br><br>

          <b>Digicode</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">7088</span><br><br>

          Open: enter code and turn right<br>
          Close: reset to 0000
        `
      },

      taxis: {
        title: "5 - Taxi / VTC",
        text: `
          📞 06 35 24 53 75<br>
          Génie Taxi: 06 95 13 78 77
        `
      },

      logement: {
        title: "6 - Property address",
        text: `
          7 rue Sarret de Coussergues<br>
          34300 Cap d'Agde<br><br>

          Parking: 115 / D33<br>
          Residence: Le Colisée<br>
          Building: D<br>
          Apartment: 33<br><br>

          📍 Open Google Maps
        `
      },

      photos2: {
        title: "7 - Access",
        text: "Access photos coming soon."
      },

      livret: {
        title: "8 - Stay guide",
        text: "Full guide available."
      }
    }
  },

  es: {
    title: "Guía de entrada",
    subtitle: "Recogida de llaves",
    menu: "Acceso rápido",

    sections: {
      heure: {
        title: "1 - Hora de llegada",
        text: "Auto check-in disponible 24/7 con llegada flexible."
      },

      adresse: {
        title: "2 - Punto de encuentro",
        text: `
          Concierge de Cap d'Agde<br>
          Impasse des Sargasses<br>
          34300 Cap d'Agde<br><br>
          📍 Abrir Google Maps
        `
      },

      photos1: {
        title: "3 - Fotos",
        text: `
          ${photo("251-monge", "conciergerie1.jpg", "Punto de encuentro")}
          ${photo("251-monge", "conciergerie2.jpg", "Punto de encuentro")}
        `
      },

      codes: {
        title: "4 - Caja de llaves / Códigos",
        text: `
          Código puerta: <span style="color:#ef4444;font-weight:800;">3492#</span><br>
          Caja: <span style="color:#ef4444;font-weight:800;">n° 251</span><br>
          Digicode: <span style="color:#ef4444;font-weight:800;">7088</span><br><br>

          Abrir: introducir código y girar a la derecha<br>
          Cerrar: volver a 0000
        `
      },

      taxis: {
        title: "5 - Taxis / VTC",
        text: `
          📞 06 35 24 53 75<br>
          Génie Taxi: 06 95 13 78 77
        `
      },

      logement: {
        title: "6 - Dirección",
        text: `
          7 rue Sarret de Coussergues<br>
          34300 Cap d'Agde<br><br>

          Parking: 115 / D33<br>
          Residencia: Le Colisée<br>
          Edificio: D<br>
          Apartamento: 33<br><br>

          📍 Abrir Google Maps
        `
      },

      photos2: {
        title: "7 - Acceso",
        text: "Fotos de acceso próximamente."
      },

      livret: {
        title: "8 - Guía",
        text: "Guía completa disponible."
      }
    }
  }
};

/* =========================
   RENDER
========================= */
function render() {
  const data = t[lang];

  document.getElementById("title").innerText = data.title;
  document.getElementById("subtitle").innerText = data.subtitle;

  document.getElementById("menu").innerHTML =
    `<b>${data.menu}</b><br><br>` +
    Object.keys(data.sections)
      .map(k => `<a href="#${k}">${data.sections[k].title}</a>`)
      .join("<br>");

  Object.keys(data.sections).forEach(id => {
    document.getElementById(id).innerHTML =
      `<h3>${data.sections[id].title}</h3>
       <div>${data.sections[id].text}</div>`;
  });
}

render();
