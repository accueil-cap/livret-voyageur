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
function photo(folder, img, text = "") {
  return `
    <div class="photo">
      <img src="images_colisee/${img}" />
      ${text ? `<p>${text}</p>` : ""}
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
        text: "A partir de 16h. Système de récupération autonome des clés avec possibilité d’arriver de nuit, n’importe quel jour de la semaine."
      },

      adresse: {
        title: "2 - Adresse du Point d'accueil pour récupérer les clés",
text: `
  Conciergerie du Cap d'Agde<br>
  Impasse des Sargasses<br>
  34300 Cap d'Agde<br><br>

  <a class="map-link"
     href="https://maps.app.goo.gl/t46grpyPzibVdFZM9"
     target="_blank">
     📍 Ouvrir Google Maps
  </a>
`
      },

      photos1: {
        title: "3 - Photographies du point d'accueil",
        text: `
          ${photo("251-monge", "conciergerie1.jpg")}
          ${photo("251-monge", "conciergerie2.jpg")}
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
          ${photo("251-monge", "boitecles.jpg")}
        `
      },

      taxis: {
        title: "5 - Coordonnées Taxis - VTC",
        text: `
          VTC CONFORT :<br>
          ${photo("251-monge", "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo("251-monge", "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
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

          <a class="map-link"
   href="https://maps.app.goo.gl/NGggttSMAHzW2q1N6"
   target="_blank">
   📍 Ouvrir Google Maps
</a>
        `
      },

photos2: {
  title: "7 - Accès au logement",
  text: `
    <b>Résidence Le Colisée 👇</b>
    ${photo("251-monge", "residence.jpg")}<br>

    <b>Portail et portillon de la résidence 👇</b>
    ${photo("251-monge", "portail.jpg")}<br>

    <b>Ouverture du portail et du portillon 👇</b><br>
    (collez le vigik sur la pastille noire située entre le portail et le portillon)
    ${photo("251-monge", "vigik_portail.jpg")}<br>

    <b>Prendre la deuxième allée sur votre droite 👇</b>
    ${photo("251-monge", "allee.jpg")}<br>

    <b>Place de parking 👇</b><br>
    La place se situe sur votre droite
    ${photo("251-monge", "parking.jpg")}<br>

    <b>Numéros de la place privative : 33D - 115 👇</b>
    ${photo("251-monge", "place_parking.jpg")}<br>

    <b>Accès au bâtiment D 👇</b><br>
    flèche jaune = parking<br>
    flèche orange = bâtiment
    ${photo("251-monge", "batiment_d_exterieur.jpg")}<br>

    <b>Entrée du bâtiment D 👇</b>
    ${photo("251-monge", "entree_batiment1.jpg")}
    ${photo("251-monge", "entree_batiment2.jpg")}<br>

    <b>Ouverture de la porte avec le badge 👇</b><br>
    (collez le vigik sur la pastille noire à droite de la porte)
    ${photo("251-monge", "badge_porte.jpg")}<br>

    <b>Montez jusqu'au 3ème étage et prenez à gauche 👇</b>
    ${photo("251-monge", "escaliers.jpg")}<br>

    <b>Le logement se situe au bout du couloir 👇</b>
    ${photo("251-monge", "couloir.jpg")}<br>

    <b>Numéro d'appartement 👇</b>
    ${photo("251-monge", "porte_appartement.jpg")}<br>

    <b>Clés de la porte 👇</b><br>
    clé plate (serrure principale)
    ${photo("251-monge", "cle_plate.jpg")}

    clé ronde (verrou du haut)
    ${photo("251-monge", "cle_ronde.jpg")}
  `
},

      livret: {
        title: "8 - Livret de séjour",
        text: "Accès au livret complet du logement."
      }
    }
  },

en: {
  title: "Accommodation Guide",
  subtitle: "Key collection & check-in",
  menu: "Quick access",

  sections: {
    heure: {
      title: "1 - Check-in time",
      text: "Check-in from 4 pm. Self check-in system with flexible arrival time. You can arrive at any time, including late at night."
    },

    adresse: {
      title: "2 - Key collection point",
      text: `
        Conciergerie du Cap d'Agde<br>
        Impasse des Sargasses<br>
        34300 Cap d'Agde<br><br>

        <a class="map-link"
           href="https://maps.app.goo.gl/t46grpyPzibVdFZM9"
           target="_blank">
           📍 Open Google Maps
        </a>
      `
    },

    photos1: {
      title: "3 - Photos of the meeting point",
      text: `
        ${photo("251-monge", "conciergerie1.jpg")}
        ${photo("251-monge", "conciergerie2.jpg")}
      `
    },

    codes: {
      title: "4 - Key box / Access codes",
      text: `
        <b>Front door code</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">3492#</span><br>
        (push the door SIMULTANEOUSLY)<br><br>

        <b>Key box</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 251</span><br><br>

        <b>Digicode</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">7088</span><br><br>

        Open: enter the code and turn the lock to the right<br>
        Close: reset to 0000 after use
        ${photo("251-monge", "boitecles.jpg")}
      `
    },

    taxis: {
      title: "5 - Taxi / VTC contacts",
      text: `
          VTC CONFORT :<br>
          ${photo("251-monge", "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo("251-monge", "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
      `
    },

    logement: {
      title: "6 - Property address",
      text: `
        7 rue Sarret de Coussergues<br>
        34300 Cap d'Agde<br><br>

        Parking : 115 / D33<br>
        Residence : Le Colisée<br>
        Building : D<br>
        Apartment : 33<br><br>

        <a class="map-link"
           href="https://maps.app.goo.gl/NGggttSMAHzW2q1N6"
           target="_blank">
           📍 Open Google Maps
        </a>
      `
    },

    photos2: {
      title: "7 - Access to the property",
      text: `
        <b>Le Colisée residence 👇</b>
        ${photo("251-monge", "residence.jpg")}<br>

        <b>Gate and pedestrian entrance 👇</b>
        ${photo("251-monge", "portail.jpg")}<br>

        <b>Opening the gate 👇</b><br>
        (place the access badge on the black pad between the gate sections)
        ${photo("251-monge", "vigik_portail.jpg")}<br>

        <b>Take the second driveway on the right 👇</b>
        ${photo("251-monge", "allee.jpg")}<br>

        <b>Parking space 👇</b><br>
        Located on your right
        ${photo("251-monge", "parking.jpg")}<br>

        <b>Private parking numbers: 33D - 115 👇</b>
        ${photo("251-monge", "place_parking.jpg")}<br>

        <b>Building D access 👇</b><br>
        yellow arrow = parking<br>
        orange arrow = building
        ${photo("251-monge", "batiment_d_exterieur.jpg")}<br>

        <b>Building entrance 👇</b>
        ${photo("251-monge", "entree_batiment1.jpg")}
        ${photo("251-monge", "entree_batiment2.jpg")}<br>

        <b>Door access with badge 👇</b><br>
        (place the badge on the black sensor on the right side)
        ${photo("251-monge", "badge_porte.jpg")}<br>

        <b>Go to 3rd floor and turn left 👇</b>
        ${photo("251-monge", "escaliers.jpg")}<br>

        <b>The apartment is at the end of the hallway 👇</b>
        ${photo("251-monge", "couloir.jpg")}<br>

        <b>Apartment number 👇</b>
        ${photo("251-monge", "porte_appartement.jpg")}<br>

        <b>Keys 👇</b><br>
        Flat key (main lock)
        ${photo("251-monge", "cle_plate.jpg")}<br>

        Round key (top lock)
        ${photo("251-monge", "cle_ronde.jpg")}
      `
    },

    livret: {
      title: "8 - Guest guide",
      text: "Full accommodation guide available."
    }
  }
},

es: {
  title: "Guía del alojamiento",
  subtitle: "Entrega de llaves y llegada",
  menu: "Acceso rápido",

  sections: {
    heure: {
      title: "1 - Hora de llegada",
      text: "Llegada a partir de las 16:00. Sistema de auto check-in con llegada flexible. Puedes llegar a cualquier hora, incluso por la noche."
    },

    adresse: {
      title: "2 - Punto de recogida de llaves",
      text: `
        Conciergerie du Cap d'Agde<br>
        Impasse des Sargasses<br>
        34300 Cap d'Agde<br>

  <a class="map-link"
     href="https://maps.app.goo.gl/t46grpyPzibVdFZM9"
     target="_blank">
     📍 Abrir Google Maps
  </a>
      `
    },

    photos1: {
      title: "3 - Fotos del punto de encuentro",
      text: `
        ${photo("251-monge", "conciergerie1.jpg")}
        ${photo("251-monge", "conciergerie2.jpg")}
      `
    },

    codes: {
      title: "4 - Caja de llaves / Códigos de acceso",
      text: `
        <b>Código de la puerta</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">3492#</span><br><br>
        (empuje la puerta SIMULTÁNEAMENTE)<br><br>

        <b>Caja de llaves</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 251</span><br><br>

        <b>Digicode</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">7088</span><br><br>

        Abrir: introducir el código y girar a la derecha<br>
        Cerrar: volver a 0000 después del uso
        ${photo("251-monge", "boitecles.jpg")}
      `
    },

    taxis: {
      title: "5 - Taxis / VTC",
      text: `
          VTC CONFORT :<br>
          ${photo("251-monge", "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo("251-monge", "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
      `
    },

    logement: {
      title: "6 - Dirección del alojamiento",
      text: `
        7 rue Sarret de Coussergues<br>
        34300 Cap d'Agde<br><br>

        Parking : 115 / D33<br>
        Residencia : Le Colisée<br>
        Edificio : D<br>
        Apartamento : 33<br><br>
        
        <a class="map-link"
           href="https://maps.app.goo.gl/NGggttSMAHzW2q1N6"
           target="_blank">
           📍 Abrir Google Maps
        </a>
      `
    },

    photos2: {
      title: "7 - Acceso al alojamiento",
      text: `
        <b>Residencia Le Colisée 👇</b>
        ${photo("251-monge", "residence.jpg")}<br>

        <b>Portón y entrada 👇</b>
        ${photo("251-monge", "portail.jpg")}<br>

        <b>Apertura del portón 👇</b><br>
        (coloca el llavero en el sensor negro)
        ${photo("251-monge", "vigik_portail.jpg")}<br>

        <b>Toma la segunda entrada a la derecha 👇</b>
        ${photo("251-monge", "allee.jpg")}<br>

        <b>Aparcamiento 👇</b><br>
        Situado a la derecha
        ${photo("251-monge", "parking.jpg")}<br>

        <b>Número de plaza: 33D - 115 👇</b>
        ${photo("251-monge", "place_parking.jpg")}<br>

        <b>Acceso edificio D 👇</b><br>
        flecha amarilla = parking<br>
        flecha naranja = edificio
        ${photo("251-monge", "batiment_d_exterieur.jpg")}<br>

        <b>Entrada edificio 👇</b>
        ${photo("251-monge", "entree_batiment1.jpg")}
        ${photo("251-monge", "entree_batiment2.jpg")}<br>

        <b>Acceso con badge 👇</b><br>
        (coloca el badge en el lector)
        ${photo("251-monge", "badge_porte.jpg")}<br>

        <b>Sube al 3er piso y gira a la izquierda 👇</b>
        ${photo("251-monge", "escaliers.jpg")}<br>

        <b>El apartamento está al final del pasillo 👇</b>
        ${photo("251-monge", "couloir.jpg")}<br>

        <b>Número del apartamento 👇</b>
        ${photo("251-monge", "porte_appartement.jpg")}<br>

        <b>Llaves 👇</b><br>
        Llave plana (cerradura principal)
        ${photo("251-monge", "cle_plate.jpg")}<br>

        Llave redonda (cerradura superior)
        ${photo("251-monge", "cle_ronde.jpg")}
      `
    },

    livret: {
      title: "8 - Guía de estancia",
      text: "Guía completa del alojamiento disponible."
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
    const el = document.getElementById(id);
    if (!el) return; // évite crash

    el.innerHTML =
      `<h3>${data.sections[id].title}</h3>
       <div>${data.sections[id].text}</div>`;
  });
}

render();
