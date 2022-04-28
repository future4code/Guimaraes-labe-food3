import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3em;

    justify-content: center;
    align-items: center;

    font-size: 3em;
    margin-top: 1em;

    h3{
        color: var(--black);
        font-weight: normal;
    }

    .main-subtitle{
        margin-top: -0.35em;
        color: var(--green);
        font-weight: bold;
    }


`;