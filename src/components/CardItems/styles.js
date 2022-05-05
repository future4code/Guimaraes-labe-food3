import styled from 'styled-components'

export const CardItemsContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 30rem;
    padding: 0 0 16px;

img{
    width:100%;
    height: 8rem;
}

    .title-item{
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

        .price {
            width: 140px;
            height: 18px;
            margin: 4px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight:bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color:#000;
        } 

    button{
        display: flex;
        align-items: center;
        height: 1rem;
        width: 6rem;
        padding: 0.9rem;
        border-radius: 12px 0 12px 0;
        align-self: end;
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
        width: 20px;
      border-radius: 0 12px 0 12px;

    }
`

export const Rectangle = styled.div`
  display: grid;
width: 28rem;
height: 8rem;
grid-template-columns: 1fr 2fr;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;

`;