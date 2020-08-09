import styled from "styled-components";

import selectImg from "../../assets/images/icons/chevron-down.svg";

export const SelectBlock = styled.div`
  position: relative;
  margin-bottom: 1.4rem;

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    background-image: url(${selectImg});
    background-repeat: no-repeat;
    background-position: right 1.2rem top 50%, 0 0;
    background-size: 1.8rem auto, 100%;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    + SelectBlock {
      margin-top: 0;
    }
  }
`;
