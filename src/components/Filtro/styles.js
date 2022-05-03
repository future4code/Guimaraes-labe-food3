import styled from 'styled-components'

export const FiltroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 42px;
    margin: 8px 0 0;
    padding: 12px 0 12px 16px;

    /* border: solid 1px black; */

    overflow-x: auto;

    ul{
        padding-left: 25px;

        li{
            list-style: none;
            height: 18px;
            left: 20px;
            font-family: var(--font-roboto);
            font-size: var(--font-size);
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            text-align: center;
        }
    }

    

   li:hover{
       color: var(--blue);
       cursor: pointer;
   }

   ::-webkit-scrollbar {
        display: none;
    }

`;