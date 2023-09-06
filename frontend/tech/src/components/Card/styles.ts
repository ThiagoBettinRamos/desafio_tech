import styled from "styled-components";

export const Container = styled.li`
    width: 300px;
    padding: 20px;
    background-color: var(--color-purple-2);
    color: var(--color-white);
    border-radius: 8px;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    div > svg {
        font-size: 3.0rem;
    }

    div > h3 {
        font-weight: 600;
    }
`