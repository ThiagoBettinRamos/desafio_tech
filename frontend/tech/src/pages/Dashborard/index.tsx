import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactList, Container, DashHeader, UserInfo } from "./styles";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { HiUserAdd } from "react-icons/hi";
import headerLogo from "../../assets/logo_header.png";
import { TiUserDelete } from "react-icons/ti";
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../../hooks/useAuth";
import { ModalEditUser } from "../../components/ModalEditUser/index";
import { AiTwotoneEdit } from "react-icons/ai";
import { ModalDeleteUser } from "../../components/ModalDeleteUser";

export interface Contact {
  id: number;
  fullname: string;
  email: string;
  phone: string;
}

export interface UserData {
  id: number;
  fullname: string;
  email: string;
  password: string;
  phone: string;
  contacts: Contact[] | [] | undefined;
}

export const Dashboard = () => {
  const { logout, user } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const toggleProfileModal = () => setIsOpenProfileModal(!isOpenProfileModal);
  const toggleDeleteModal = () => setIsOpenDeleteModal(!isOpenDeleteModal);

  return (
    <>
      <DashHeader>
        <section>
          <div>
            <img src={headerLogo} alt="" />
          </div>
          <div className="headerButtons">
            <button type="button" onClick={toggleModal}>
              <HiUserAdd />
            </button>
            <button type="button" onClick={logout}>
              <TbLogout />
            </button>
          </div>
        </section>
      </DashHeader>
      <Container>
        {isOpenModal && (
          <ModalAddContact
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}
        {isOpenProfileModal && (
          <ModalEditUser toggleProfileModal={toggleProfileModal} />
        )}
        {isOpenDeleteModal && (
          <ModalDeleteUser toggleDeleteModal={toggleDeleteModal} />
        )}
        <main>
          <UserInfo>
            <div>
              <h2>Profile Information</h2>
              <h3>
                Username: <span>{user?.fullname}</span>
              </h3>
              <h3>
                E-mail: <span>{user?.email}</span>
              </h3>
              <h3>
                Telephone: <span>{user?.phone}</span>
              </h3>
            </div>
            <div className="userButtons">
              <button type="button" onClick={toggleProfileModal}>
                <AiTwotoneEdit />
              </button>
              <button className="deleteButton" type="button" onClick={toggleDeleteModal}>
                <TiUserDelete />
              </button>
            </div>
          </UserInfo>
          <section>
            <h2>Contacts saved in the schedule:</h2>
            <ContactList>
              {contacts.map((contact) => (
                <Card key={contact.id} contact={contact} />
              ))}
            </ContactList>
          </section>
        </main>
      </Container>
    </>
  );
};