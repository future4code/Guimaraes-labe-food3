import styled from 'styled-components'

export const FourFoodCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 640px;
    overflow-y: auto;

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
    `