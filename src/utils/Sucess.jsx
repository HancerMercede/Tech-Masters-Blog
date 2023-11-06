import swal from "sweetalert";

export const Sucess = ({ title }, { text }, { icon }) => {
  swal({
    title: title,
    text: text,
    icon: icon,
  });
};
