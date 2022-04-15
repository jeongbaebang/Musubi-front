import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Typography } from "@mui/material";

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Alert = (messages: string[], type: "error" | "success", background: string) => {
  Toast.fire({
    background: background,
    icon: type,
    width: "388px",
    title: (
      <>
        {messages.map((message, index) => (
          <Typography
            key={index}
            align="left"
            gutterBottom
            color="white"
            component="p"
            variant="caption"
            aria-label={message}
          >
            {message}
          </Typography>
        ))}
      </>
    ),
  });
};

export const warningAlert = <T,>(errorMessage: T) => {
  if (!Array.isArray(errorMessage)) return;
  Alert(errorMessage, "error", "#D32F2F");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const successAlert = <T extends any[]>(successMessage: T) => {
  if (!Array.isArray(successMessage)) return;
  Alert(successMessage, "success", "#a5dc86");
};

export const topDrawer = async (name: string) => {
  console.log(name);
  await Swal.fire({
    title: `환영합니다. ${name}님 👋`,
    position: "top",
    showClass: {
      popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `,
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `,
    },
    grow: "row",
    showConfirmButton: false,
    showCloseButton: true,
  });
};
