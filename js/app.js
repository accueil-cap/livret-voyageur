const params = new URLSearchParams(window.location.search);

const id = params.get("id") || "251-monge";
const lang = params.get("lang") || "fr";

fetch(`data/${id}.json`)
  .then(res => res.json())
  .then(data => {

    // TITRE MULTILINGUE
    const titles = {
      fr: "🏠 Conciergerie du logement",
      en: "🏠 Property Check-in Guide",
      es: "🏠 Guía de entrada al alojamiento"
    };

    document.getElementById("title").innerText = titles[lang] || titles.fr;

    // TRADUCTIONS SIMPLES UI
    const translations = {
      fr: {
        gps: "📍 Ouvrir Google Maps",
        keys: "🔑 Récupérer les clés",
        access: "🚪 Accès logement",
        help: "📞 Assistance"
      },
      en: {
        gps: "📍 Open Google Maps",
        keys: "🔑 Get keys",
        access: "🚪 Access property",
        help: "📞 Support"
      },
      es: {
        gps: "📍 Abrir Google Maps",
        keys: "🔑 Recoger llaves",
        access: "🚪 Acceso alojamiento",
        help: "📞 Asistencia"
      }
    };

    const t = translations[lang] || translations.fr;

    document.getElementById("gps").innerText = t.gps;
    document.getElementById("keys").innerText = t.keys;
    document.getElementById("access").innerText = t.access;
    document.getElementById("help").innerText = t.help;

    // DATA
    document.getElementById("gps").href = data.gps;
    document.getElementById("help").href = "tel:" + data.tel_assistance;

    document.getElementById("keys").onclick = () => {
      if (lang === "en") {
        alert(
          "🔑 Access codes:\n\n" +
          "Door: " + data.codes.porte + "\n" +
          "Box: " + data.codes.boite + "\n" +
          "Digicode: " + data.codes.digicode
        );
      } else if (lang === "es") {
        alert(
          "🔑 Códigos de acceso:\n\n" +
          "Puerta: " + data.codes.porte + "\n" +
          "Caja: " + data.codes.boite + "\n" +
          "Digicode: " + data.codes.digicode
        );
      } else {
        alert(
          "🔑 Codes d’accès\n\n" +
          "Porte : " + data.codes.porte + "\n" +
          "Boîte : " + data.codes.boite + "\n" +
          "Digicode : " + data.codes.digicode
        );
      }
    };

  });
