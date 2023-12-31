import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .userButtons {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 20px;
      padding: 0px 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-white);
      background: var(--color-purple-2);

      transition: 0.5s ease;
    }

    button:hover {
      transition: 0.5s ease;
      color: var(--color-purple-2);
      background: var(--color-white);
      border: 2px solid var(--color-white);
    }

    .deleteButton {
      color: var(--color-white);
      background: var(--color-red);
    }

    .deleteButton:hover {
      background-color: transparent;
      border: 2px solid var(--color-red);
      color: var(--color-red);
    }
  }
`;