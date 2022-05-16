
import styled from 'styled-components'

export const ArrowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;


    border-bottom: 1px solid var(--black);

    .arrow-back-ios{
        margin-left: 1em;

    }

    .arrow-back-ios:hover{
        cursor: pointer;
    }

    span{
        display: flex;
        margin: 0 auto;
        font-size: 2rem;

        margin-top: -1.4rem;
    }
`