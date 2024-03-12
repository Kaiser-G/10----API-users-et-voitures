// Import SweetAlert
import Swal from "../npm/node_modules/sweetalert2/src/sweetalert2.js";
//apparait a l'ouverture du site
window.addEventListener("load", () => {
  Swal.fire({
    title: "Bonjour",
    text: "Voulez-vous continuer ?",
    icon: "Erreur",
    confirmButtonText: "Oui",
  });
  //Sur le bouton danger
  //   let btn = document.getElementById("btn");
  //   btn.addEventListener("click", () => {
  //     Swal.fire(
  //       {
  //         title: "DANGER ?",
  //         text: "Si pas danger, click",
  //         icon: "question",
  //       },
  //       false
  //     );
  //   });
  //sur le bouton de visualisation
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
});
