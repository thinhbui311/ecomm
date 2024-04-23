import Toastify from "toastify-js"

export default class ToastNotify {
  static successNotify(message) {
    Toastify({
      text: `${message}`,
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      offset: {
        y: 100,
        x: 100
      },
      stopOnFocus: true,
      style: {
        background: "rgb(187, 247, 208)",
        borderRadius: "8px",
        color: "rgb(31, 41, 55)",
        display: "flex",
        alignItems: "center"
      },
    }).showToast();
  };

  static failureNotify(message) {
    Toastify({
      text: `${message}`,
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      offset: {
        y: 100,
        x: 100
      },
      stopOnFocus: true,
      style: {
        background: "rgb(232, 89, 64, 1)",
        borderRadius: "8px",
        color: "rgb(31, 41, 55)",
        display: "flex",
        alignItems: "center"
      },
    }).showToast();
  };
}
