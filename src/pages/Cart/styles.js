import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #confirm{
        background-color: var(--red);
        width: 80vw;
        max-width: 450px;
        align-self: center;
    }
    #subtotal{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    #price-cart{
        color: var(--red);
        font-weight: bold;
    }
    #frete-cart{
        display: flex;
        align-self: end;
        margin-bottom: 0.5rem;

    }
`

export const AddressContentContentContainer = styled.div`
  display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;

    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
`

export const ContainerData = styled.div`
  display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
   
    button{
        background-color: var(--red);
        margin: 20px 0 10px 0;

    }

    .form-check{
        margin-bottom: 5px;
    }
`
    