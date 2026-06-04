const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "251-monge";

fetch(`data/${id}.json`)
  .then(res => res.json())
  .then(data => {

    document.getElementById("title").innerText = "🏠 " + data.nom;

    document.getElementById("gps").href = data.gps;

    document.getElementById("help").href = "tel:" + data.tel_assistance;

    document.getElementById("keys").addEventListener("click", () => {
      alert(
        "🔑 Codes d’accès\n\n" +
        "Porte : " + data.codes.porte + "\n" +
        "Boîte : " + data.codes.boite + "\n" +
        "Digicode : " + data.codes.digicode
      );
    });

    document.getElementById("access").addEventListener("click", () => {
      alert("ℹ️ Accès logement : à personnaliser pour chaque appartement");
    });

  });
