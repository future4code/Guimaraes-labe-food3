import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    flex-direction: column;
    justify-content: center;
    align-items: center;

`

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
    }

    input:hover{
        cursor: pointer;
    }

    form > button{
        background-color: var(--green);
    }
`

export const SignUpButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;

    align-items: center;
    margin-bottom: 20px;

`