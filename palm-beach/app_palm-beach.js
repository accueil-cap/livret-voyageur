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
      <img src="images_palm-beach/${img}" />
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
          ${photo(null, "conciergerie1.jpg")}
          ${photo(null, "conciergerie2.jpg")}
        `
      },

      codes: {
        title: "4 - Boîte à clés / Codes d'accès",
        text: `
          <b>Code de la porte d'entrée</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">2609#</span><br>
          (poussez SIMULTANEMENT la porte)<br><br>

          <b>Boîte à clés</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 124</span><br><br>

          <b>Digicode</b><br>
          <span style="color:#ef4444;font-size:22px;font-weight:800;">5428</span><br><br>

          <b>Pour l'ouverture :</b> mettre le code et tourner la serrure sur la droite<br><br>
          <b>Pour la fermeture :</b> conserver le même code et tourner sur la gauche,
          puis remettre à 0000
          ${photo(null, "boitecles.jpg")}
        `
      },

      taxis: {
        title: "5 - Coordonnées Taxis - VTC",
        text: `
          VTC CONFORT :<br>
          ${photo(null, "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo(null, "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
        `
      },

      logement: {
        title: "6 - Adresse du logement",
        text: `
          3 rue Sarret de Coussergues<br>
          34300 Cap d'Agde<br><br>

          Parking : 2 <br>
          Résidence : Palm Beach<br>
          Bâtiment : A1 <br>
          Appartement : 6 <br><br>

          <a class="map-link"
   href="https://maps.app.goo.gl/N4a77bKb9pezGHx26"
   target="_blank">
   📍 Ouvrir Google Maps
</a>
        `
      },

photos2: {
  title: "7 - Accès au logement",
  text: `
    <b>Résidence Palm Beach 👇</b>
    ${photo(null, "residence.jpg")}<br>

    <b>Deux portails pour entrer 👇</b><br>
    L'entrée se fait par le portail 1<br>
    flèche orange = Portail 1<br>
    flèche jaune = Portail 2
    ${photo(null, "chemin_portail.jpg")}<br>

    <b>Portail 1 et portillon de la résidence 👇</b>
    ${photo(null, "portail1.jpg")}<br>

    <b>Ouverture du portail et du portillon 👇</b><br>
    (appuyez sur le bouton de la télécommande)
    ${photo(null, "telecommande_portail.jpg")}<br>

    <b>Continuez tout droit jusqu'au bout de l'allée, puis tournez sur votre droite 👇</b>
    ${photo(null, "allee1.jpg")}
    ${photo(null, "allee2.jpg")}<br>

    <b>Continuez tout droit jusqu'au bout, puis tournez encore sur votre droite 👇</b>
    ${photo(null, "allee3.jpg")}<br>

    <b>Continuez tout droit jusqu'au portail, puis tournez une dernière fois sur votre droite 👇</b>
    ${photo(null, "allee4.jpg")}<br>

    <b>Place de parking 👇</b><br>
    La place se situe sur votre gauche
    ${photo(null, "allee5.jpg")}
    ${photo(null, "place_parking.jpg")}<br>

    <b>Numéros de la place privative : 2 👇</b>
    ${photo(null, "numero_parking.jpg")}<br>

    <b>Accès au bâtiment A1 👇</b><br>
    Revenez dans l'allée principale (entrée du portail 1) et prenez la première à droite
    ${photo(null, "acces_batiment.jpg")}<br>

    <b>Entrée du bâtiment A1 👇</b>
    ${photo(null, "batiment_A1.jpg")}<br>

    <b>Ouverture de la porte avec le badge 👇</b><br>
    (collez le vigik sur la pastille noire à droite de la porte)
    ${photo(null, "badge_porte.jpg")}<br>

    <b>Prenez la première à droite 👇</b>
    ${photo(null, "couloir1.jpg")}<br>

    <b>Le logement se situe au milieu du couloir à gauche 👇</b>
    ${photo(null, "couloir2.jpg")}<br>

    <b>Numéro d'appartement 👇</b>
    ${photo(null, "numero_appart.jpg")}<br>

    <b>Clés de la porte 👇</b><br>
    clé plate (serrure principale)
    ${photo(null, "cle_plate.jpg")}

    clé ronde (verrou du haut)
    ${photo(null, "cle_ronde.jpg")}
  `
},

      livret: {
  title: "8 - Livret de séjour",
  text: `
    Accédez au guide complet du logement :

    <br><br>

    <a class="card a"
       href="livret_palm-beach.html"
       target="_blank">
       📘 Ouvrir le livret de séjour
    </a>
  `
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
        ${photo(null, "conciergerie1.jpg")}
        ${photo(null, "conciergerie2.jpg")}
      `
    },

    codes: {
      title: "4 - Key box / Access codes",
      text: `
        <b>Front door code</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">2609#</span><br>
        (push the door SIMULTANEOUSLY)<br><br>

        <b>Key box</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 124</span><br><br>

        <b>Digicode</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">5428</span><br><br>

        Open: enter the code and turn the lock to the right<br>
        Close: reset to 0000 after use
        ${photo(null, "boitecles.jpg")}
      `
    },

    taxis: {
      title: "5 - Taxi / VTC contacts",
      text: `
          VTC CONFORT :<br>
          ${photo(null, "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo(null, "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
      `
    },

    logement: {
      title: "6 - Property address",
      text: `
        3 rue Sarret de Coussergues<br>
        34300 Cap d'Agde<br><br>

        Parking : 2<br>
        Residence : Palm Beach<br>
        Building : A1<br>
        Apartment : 6<br><br>

        <a class="map-link"
           href="https://maps.app.goo.gl/N4a77bKb9pezGHx26"
           target="_blank">
           📍 Open Google Maps
        </a>
      `
    },

photos2: {
  title: "7 - Access to the property",
  text: `
    <b>Palm Beach Residence 👇</b>
    ${photo(null, "residence.jpg")}<br>

    <b>Two gates to enter the residence 👇</b><br>
    Access is through Gate 1<br>
    orange arrow = Gate 1<br>
    yellow arrow = Gate 2
    ${photo(null, "chemin_portail.jpg")}<br>

    <b>Gate 1 and pedestrian entrance 👇</b>
    ${photo(null, "portail1.jpg")}<br>

    <b>Opening the gate and pedestrian entrance 👇</b><br>
    (press the remote control button)
    ${photo(null, "telecommande_portail.jpg")}<br>

    <b>Continue straight to the end of the driveway, then turn right 👇</b>
    ${photo(null, "allee1.jpg")}
    ${photo(null, "allee2.jpg")}<br>

    <b>Continue straight to the end, then turn right again 👇</b>
    ${photo(null, "allee3.jpg")}<br>

    <b>Continue straight to the gate, then turn right one last time 👇</b>
    ${photo(null, "allee4.jpg")}<br>

    <b>Parking space 👇</b><br>
    The parking space is located on your left
    ${photo(null, "allee5.jpg")}
    ${photo(null, "place_parking.jpg")}<br>

    <b>Private parking space number: 2 👇</b>
    ${photo(null, "numero_parking.jpg")}<br>

    <b>Access to Building A1 👇</b><br>
    Return to the main driveway (Gate 1 entrance) and take the first right
    ${photo(null, "acces_batiment.jpg")}<br>

    <b>Building A1 entrance 👇</b>
    ${photo(null, "batiment_A1.jpg")}<br>

    <b>Opening the door with the access badge 👇</b><br>
    (place the badge on the black sensor located to the right of the door)
    ${photo(null, "badge_porte.jpg")}<br>

    <b>Take the first corridor on the right 👇</b>
    ${photo(null, "couloir1.jpg")}<br>

    <b>The apartment is located halfway down the corridor on the left 👇</b>
    ${photo(null, "couloir2.jpg")}<br>

    <b>Apartment number 👇</b>
    ${photo(null, "numero_appart.jpg")}<br>

    <b>Keys for the apartment door 👇</b><br>
    flat key (main lock)
    ${photo(null, "cle_plate.jpg")}

    round key (upper deadbolt lock)
    ${photo(null, "cle_ronde.jpg")}
  `
},

    livret: {
  title: "8 - Guest Guide",
  text: `
    Access the complete accommodation guide:

    <br><br>

    <a class="card a"
       href="livret_palm-beach.html"
       target="_blank">
       📘 Open Guest Guide
    </a>
  `
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
        ${photo(null, "conciergerie1.jpg")}
        ${photo(null, "conciergerie2.jpg")}
      `
    },

    codes: {
      title: "4 - Caja de llaves / Códigos de acceso",
      text: `
        <b>Código de la puerta</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">2609#</span><br><br>
        (empuje la puerta SIMULTÁNEAMENTE)<br><br>

        <b>Caja de llaves</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">n° 124</span><br><br>

        <b>Digicode</b><br>
        <span style="color:#ef4444;font-size:22px;font-weight:800;">5428</span><br><br>

        Abrir: introducir el código y girar a la derecha<br>
        Cerrar: volver a 0000 después del uso
        ${photo(null, "boitecles.jpg")}
      `
    },

    taxis: {
      title: "5 - Taxis / VTC",
      text: `
          VTC CONFORT :<br>
          ${photo(null, "vtcconfort.jpg")}
          📞 06 35 24 53 75<br>
          ✉ contact@vtc-confort34.fr<br>
          🌐 www.vtc-confort34.fr<br><br>
          
          Génie Taxi : <br>
          ${photo(null, "genietaxi.jpg")}
          📞 06 95 13 78 77<br><br>
      `
    },

    logement: {
      title: "6 - Dirección del alojamiento",
      text: `
        3 rue Sarret de Coussergues<br>
        34300 Cap d'Agde<br><br>

        Parking : <br>
        Residencia : Palm Beach<br>
        Edificio : <br>
        Apartamento : <br><br>
        
        <a class="map-link"
           href="https://maps.app.goo.gl/N4a77bKb9pezGHx26"
           target="_blank">
           📍 Abrir Google Maps
        </a>
      `
    },

photos2: {
  title: "7 - Acceso al alojamiento",
  text: `
    <b>Residencia Palm Beach 👇</b>
    ${photo(null, "residence.jpg")}<br>

    <b>Dos portones para entrar en la residencia 👇</b><br>
    La entrada se realiza por el Portón 1<br>
    flecha naranja = Portón 1<br>
    flecha amarilla = Portón 2
    ${photo(null, "chemin_portail.jpg")}<br>

    <b>Portón 1 y puerta peatonal de la residencia 👇</b>
    ${photo(null, "portail1.jpg")}<br>

    <b>Apertura del portón y de la puerta peatonal 👇</b><br>
    (pulse el botón del mando a distancia)
    ${photo(null, "telecommande_portail.jpg")}<br>

    <b>Siga recto hasta el final del camino y luego gire a la derecha 👇</b>
    ${photo(null, "allee1.jpg")}
    ${photo(null, "allee2.jpg")}<br>

    <b>Siga recto hasta el final y vuelva a girar a la derecha 👇</b>
    ${photo(null, "allee3.jpg")}<br>

    <b>Siga recto hasta el portón y gire por última vez a la derecha 👇</b>
    ${photo(null, "allee4.jpg")}<br>

    <b>Plaza de aparcamiento 👇</b><br>
    La plaza se encuentra a su izquierda
    ${photo(null, "allee5.jpg")}
    ${photo(null, "place_parking.jpg")}<br>

    <b>Número de la plaza privada: 2 👇</b>
    ${photo(null, "numero_parking.jpg")}<br>

    <b>Acceso al edificio A1 👇</b><br>
    Regrese al camino principal (entrada del Portón 1) y tome la primera a la derecha
    ${photo(null, "acces_batiment.jpg")}<br>

    <b>Entrada del edificio A1 👇</b>
    ${photo(null, "batiment_A1.jpg")}<br>

    <b>Apertura de la puerta con la tarjeta de acceso 👇</b><br>
    (acerque el badge al lector negro situado a la derecha de la puerta)
    ${photo(null, "badge_porte.jpg")}<br>

    <b>Tome el primer pasillo a la derecha 👇</b>
    ${photo(null, "couloir1.jpg")}<br>

    <b>El alojamiento se encuentra a mitad del pasillo, a la izquierda 👇</b>
    ${photo(null, "couloir2.jpg")}<br>

    <b>Número del apartamento 👇</b>
    ${photo(null, "numero_appart.jpg")}<br>

    <b>Llaves de la puerta 👇</b><br>
    llave plana (cerradura principal)
    ${photo(null, "cle_plate.jpg")}

    llave redonda (cerrojo superior)
    ${photo(null, "cle_ronde.jpg")}
  `
},

    livret: {
  title: "8 - Guía de estancia",
  text: `
    Acceda a la guía completa del alojamiento:

    <br><br>

    <a class="card a"
       href="livret_palm-beach.html"
       target="_blank">
       📘 Abrir guía de estancia
    </a>
  `
}
  }
}
};

/* =========================
   RENDER
========================= */
function render() {
  const data = t[lang];

  if (!data) return;

  document.getElementById("title").innerText = data.title;
  document.getElementById("subtitle").innerText = data.subtitle;

  const menu = document.getElementById("menu");
  if (menu) {
    menu.innerHTML =
      `<b>${data.menu}</b><br><br>` +
      Object.keys(data.sections)
        .map(k => `<a href="#${k}">${data.sections[k].title}</a>`)
        .join("<br>");
  }

  Object.keys(data.sections).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML =
      `<h3>${data.sections[id].title}</h3>
       <div>${data.sections[id].text}</div>`;
  });
}

render();
