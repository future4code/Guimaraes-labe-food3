import styled from 'styled-components'

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;

    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;

    h3{
        color: var(--black);
        font-weight: normal;
        margin-bottom: 0.8em;
        margin-top: 0.8em;
    }

    input:hover{
        cursor: pointer;
    }

    form > button{
        color: var(--Lipstick);
        background-color: var(--Lipstick);
    }
`
export const Geral = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin: 0 auto;
`
export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin-top: -10vh;
`
