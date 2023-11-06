import SweetAlert from "react-bootstrap-sweetalert";

export const Success = () => {
  return (
    <SweetAlert success title="well done!" onConfirm={this.onConfirm}>
      The Post was created successfully.
    </SweetAlert>
  );
};
