import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  > main {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
  }
`;

export const LoginLeftColumn = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  && > img {
    width: 350px;
  }

  > h3 {
    font-size: 2rem;
    width: 310px;
    text-align: center;
  }
`;

export const LoginRightColumn = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    color: var(--color-purple-2);
    font-weight: 600;
    font-size: 3rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    > label {
      margin-top: 20px;
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--color-purple-2);
    }
    > input {
      padding: 0px 16px;
      height: 4rem;

      background-color: var(--color-purple-2);
      border: 1.2px solid var(--color-purple-2);
      border-radius: 4px;

      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-white);
    }

    > input::placeholder {
      color: var(--color-white);
    }

    > input:focus {
      outline: 1.2px solid var(--color-purple-2);
      background-color: var(--color-purple-2);
    }

    > small {
      color: var(--color-purple-2);
    }

    > button {
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
      border: 2px solid var(--color-purple-2);
    }
  }
  .loginSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: var(--color-green);
      font-weight: 200;
      transition: 0.5s ease;
    }

    a:hover {
      color: var(--color-white);
      transition: 0.5s ease;
    }
  }
`;