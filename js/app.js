const params = new URLSearchParams(window.location.search);

const id = params.get("id") || "251-monge";

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
      heure: ["1 - Heure d'arrivée", "à partir de 16h"],
      adresse: ["2 - Point d'accueil", "Conciergerie du Cap d'Agde"],
      photos1: ["3 - Photographies", "À venir"],
      codes: ["4 - Boîte à clés", "Codes d'accès"],
      taxis: ["5 - Taxis / VTC", "Contacts disponibles"],
      logement: ["6 - Logement", "Adresse complète"],
      photos2: ["7 - Accès logement", "Photos accès"],
      livret: ["8 - Livret de séjour", "Ouvrir"]
    }
  },

  en: {
    title: "Property Check-in Guide",
    subtitle: "Key collection",
    menu: "Quick access",
    sections: {
      heure: ["1 - Check-in time", "from 4 PM"],
      adresse: ["2 - Meeting point", "Concierge location"],
      photos1: ["3 - Photos", "Coming soon"],
      codes: ["4 - Key box", "Access codes"],
      taxis: ["5 - Taxi / VTC", "Contacts"],
      logement: ["6 - Property", "Full address"],
      photos2: ["7 - Access photos", "Entry guide"],
      livret: ["8 - Stay guide", "Open"]
    }
  },

  es: {
    title: "Guía de entrada",
    subtitle: "Recogida de llaves",
    menu: "Acceso rápido",
    sections: {
      heure: ["1 - Hora de llegada", "desde las 16h"],
      adresse: ["2 - Punto de encuentro", "Concierge"],
      photos1: ["3 - Fotos", "Próximamente"],
      codes: ["4 - Caja de llaves", "Códigos"],
      taxis: ["5 - Taxis / VTC", "Contactos"],
      logement: ["6 - Alojamiento", "Dirección"],
      photos2: ["7 - Acceso", "Fotos"],
      livret: ["8 - Guía", "Abrir"]
    }
  }
};

function render() {
  const data = t[lang];

  document.getElementById("title").innerText = data.title;
  document.getElementById("subtitle").innerText = data.subtitle;

  // MENU
  document.getElementById("menu").innerHTML =
    `<b>${data.menu}</b><br><br>` +
    Object.keys(data.sections)
      .map(k => `<a href="#${k}">${data.sections[k][0]}</a>`)
      .join("<br>");

  // SECTIONS
  Object.keys(data.sections).forEach(id => {
    const s = data.sections[id];
    document.getElementById(id).innerHTML =
      `<h3>${s[0]}</h3><p>${s[1]}</p>`;
  });
}

render();
