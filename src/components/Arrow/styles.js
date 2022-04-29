
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

    hr{
        width: 100%;
    }
    .arrow-back-ios:hover{
        cursor: pointer;
    }
`