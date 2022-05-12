import styled from 'styled-components'

export const FourFoodCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 640px;

    overflow-y: auto;
    /* border: 1px solid black; */
    ::-webkit-scrollbar {
        display: none;
    }
    .FourFood-header{
        border-bottom: 1px solid var(--grey);
        width: 100%;
        height: 44px;
        margin: 20px 92px 0 93px;
        padding: 13px 50.5px 12px;
    }
`;

export const FourFoodHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    margin: 0 0 8px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;

    .FourFood-header{

    }
`;

export const FourFoodContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
    width: 100%;

    
`;

export const FourFoodSearch = styled.div`
    display: flex;

    justify-content: center;

    .search{
        width: 20.5rem;
        height: 3.5rem;
        border-radius: 2px;
        margin-top: 10px;
        border: solid 1px var(--greyish);
    }
`;

export const FourFoodFooter = styled.div`
    display: flex;

    
    justify-content: center;
`;

export const FiltroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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