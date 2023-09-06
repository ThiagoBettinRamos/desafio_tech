import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../Modal";
import { Container } from "./styles";

interface ModalDeleteUserProps {
  toggleDeleteModal: () => void;
}

export const ModalDeleteUser = ({
  toggleDeleteModal,
}: ModalDeleteUserProps) => {
  const { deleteUser } = useAuth();

  return (
    <Modal toggleModal={toggleDeleteModal}>
      <Container>
        <h2>Are you sure you want to delete your account??</h2>
        <div className="userButtons">
          <button className="deleteButton" onClick={deleteUser}>
            I want to delete my account
          </button>
          <button onClick={toggleDeleteModal}>
            I don't want to delete my account.
          </button>
        </div>
      </Container>
    </Modal>
  );
};