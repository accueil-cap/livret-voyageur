let lang = localStorage.getItem("lang") || "fr";

function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);
  render();
}

const t = {
  fr: {
    title: "Conciergerie du logement",
    subtitle: "Récupération des clés",

    menu: "Accès rapide",

    sections: {
      heure: {
        title: "1 - Heure d'arrivée",
        text: "À partir de 16h. Arrivée autonome possible 24h/24 et 7j/7."
      },

      adresse: {
        title: "2 - Point d'accueil",
        text: "Conciergerie du Cap d'Agde<br>Impasse des Sargasses<br>34300 Cap d'Agde<br>Résidence Amoureva<br><br>📍 Ouvrir Google Maps"
      },

      photos1: {
        title: "3 - Photographies",
        text: "Photos du point d'accueil à venir."
      },

      codes: {
        title: "4 - Boîte à clés / Codes",
        text: `
        Code porte : <b>3492#</b><br>
        Boîte à clés : <b>251</b><br>
        Digicode : <b>7088</b><br><br>
        Ouvrir : entrer le code puis tourner à droite<br>
        Fermer : remettre à 0000
        `
      },

      taxis: {
        title: "5 - Taxis / VTC",
        text: `
        📞 06 35 24 53 75<br>
        ✉ contact@vtc-confort34.fr<br>
        🌐 www.vtc-confort34.fr<br><br>
        Génie Taxi : 06 95 13 78 77
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
        text: "Photos d'accès à ajouter (portail, parking, bâtiment, etc.)"
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
        text: "From 4 PM. Self check-in available 24/7."
      },

      adresse: {
        title: "2 - Meeting point",
        text: "Concierge of Cap d'Agde<br>Impasse des Sargasses<br>34300 Cap d'Agde<br>Amoureva residence<br><br>📍 Open Google Maps"
      },

      photos1: {
        title: "3 - Photos",
        text: "Photos coming soon."
      },

      codes: {
        title: "4 - Key box / Codes",
        text: `
        Door code: <b>3492#</b><br>
        Key box: <b>251</b><br>
        Digicode: <b>7088</b><br><br>
        Open: enter code and turn right<br>
        Close: reset to 0000
        `
      },

      taxis: {
        title: "5 - Taxi / VTC",
        text: `
        📞 06 35 24 53 75<br>
        ✉ contact@vtc-confort34.fr<br>
        🌐 www.vtc-confort34.fr<br><br>
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
        title: "7 - Access photos",
        text: "Access photos coming soon."
      },

      livret: {
        title: "8 - Stay guide",
        text: "Full guide access."
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
        text: "Desde las 16h. Auto check-in disponible 24/7."
      },

      adresse: {
        title: "2 - Punto de encuentro",
        text: "Concierge de Cap d'Agde<br>Impasse des Sargasses<br>34300 Cap d'Agde<br><br>📍 Abrir Google Maps"
      },

      photos1: {
        title: "3 - Fotos",
        text: "Fotos próximamente."
      },

      codes: {
        title: "4 - Caja de llaves / Códigos",
        text: `
        Código puerta: <b>3492#</b><br>
        Caja: <b>251</b><br>
        Digicode: <b>7088</b><br><br>
        Abrir: introducir código y girar a la derecha<br>
        Cerrar: volver a 0000
        `
      },

      taxis: {
        title: "5 - Taxis / VTC",
        text: `
        📞 06 35 24 53 75<br>
        ✉ contact@vtc-confort34.fr<br><br>
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
        text: "Abrir guía completa."
      }
    }
  }
};

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
       <p>${data.sections[id].text}</p>`;
  });
}

render();
