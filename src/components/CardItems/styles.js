import styled from 'styled-components'

export const CardItemsContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0 16px;
    width: 80vw;
    max-width: 450px;

img{
    width:100%;
    height: 8rem;
}

    .title-normal{
        width: 296px;
        height: 18px;
        margin: 12px 16px 4px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #E8222E;
    }
      
        .items-bullguer{
            height: 18px;
            margin: 4px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color:#B8B8B8;
        }

        .price-normal{
            width: 140px;
            height: 18px;
            /* margin: 4px 8px 0 16px; */
            margin: 38px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight:bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color:#000;
        } 


    .normal-button{
        display: flex;
        align-items: center;
        height: 1rem;
        width: 6rem;
        padding: 0.9rem;
        border-radius: 10px 0 10px 0;
        align-self: flex-end;
        background-color: #fff;
    }
    
    .info-items{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-content: start;
        align-items: start;
    }

    .button-quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 0 5px 0 5px;
        border-color: var(--red);
        color: var(--red);
        display: flex;
        align-self: end;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    
    .price-add{
            width: 140px;
            height: 18px;
            /* margin: 4px 8px 0 16px; */
            margin: 2px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight:bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color:#000;
        } 
    .button-add{
        border-color: var(--red);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1rem;
        width: 6rem;
        padding: 0.9rem;
        border-radius: 10px 0 10px 0;
        align-self: end;
        background-color: #fff;
        color: var(--red);
    }
    .title-add{
        width: 296px;
        height: 18px;
        margin: 0px 16px 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #E8222E;
    }
`

export const Rectangle = styled.div`
margin-top: 0.5rem;
  display: grid;
height: 8rem;
grid-template-columns: 1fr 2fr;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    width: 80vw;
    max-width: 450px;

`;