import styled from 'styled-components'

export const RestaurantConteiner = styled.div`
    display: flex;
    margin: 0 auto;

    flex-direction: column;

    width: 22.5rem;
    height: 52.125rem;

    border: 1px solid black;

`;

export const RestaurantDetails = styled.div`
    display: flex;
    flex-direction: column;

    .restaurante-logo{
        width: 20.5rem;
        height: 7.5rem;
        margin: 1.063rem 1rem 0.75rem;
    }

    .restaurante-text{
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.75rem 1rem 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--lipstick);
    }

    .restaurante-buger{
        width: 6.5rem;
        height: 1.125rem;
        margin: 0.5rem 0.5rem 0.5rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }

    .restaurante-tempo-entrega{
        width: 6.5rem;
        height: 1.125rem;
        margin: 0.5rem 0.5rem 0.625rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }

    .restaurante-frete{
        width: 6.5rem;
        height: 1.125rem;
        margin: 0.5rem 8rem 0.625rem 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }

    .restaurante-address{
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.625rem 1rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }

    .restaurante-principais{
        width: 20.5rem;
        height: 1.125rem;
        margin: 1rem 1rem 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--black);
    }

    .restaurante-item-card{
        width: 22.5rem;
        height: 7.5rem;
        margin: 0.5rem 0 0;
        padding: 0 1rem;

        .item-card{
            display: flex;
            width: 20.5rem;
            height: 7rem;
            margin: 0.438rem 0 0;
            border-radius: 8px;
            border: solid 1px var(--greyish);

            .item-card-img{
                width: 6rem;
                height: 7rem;
                margin: 0 1rem 0 0;
                object-fit: contain;
            }

            .item-card-info{
                display: flex;
                flex-direction: column;

                .item-card-name{
                    width: 10.438rem;
                    height: 1.125rem;
                    margin: 1.125rem 3.063rem 0.1rem 0.1rem;
                    font-family: Roboto;
                    font-size: 1rem;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: -0.39px;
                    color: var(--lipstick);
                }

                .item-card-description{
                    width: 12.5rem;
                    height: 1.875rem;
                    margin: 0.5rem 0.1rem 0.25rem 0.1rem;
                    font-family: Roboto;
                    font-size: 0.75rem;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: -0.29px;
                    color: var(--greyish);
                }

                .item-card-value{
                    width: 7.375rem;
                    height: 1.188rem;
                    margin: 0.25rem 0.5rem 0.938rem 0.1rem;
                    font-family: Roboto;
                    font-size: 1rem;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: -0.39px;
                    color: var(--black);
                }

                .item-card-button{
                    width: 3.825rem;
                    height: 1.938rem;
                    margin-top: -2.2rem;
                    margin-left: 7rem;
                    padding: 0.5rem 1.281rem 0.563rem 1.344rem;
                    border-top-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                    border: solid 1px var(--black);
                }
            }
        }
    }

`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 196px;
    padding: 0 0 16px;

    .image{
        width: 100%;
        height: 120px;
        margin: 5px 0 12px;
        object-fit: contain;
    }

    .card-restaturante-text-style-3{
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
        color: #5cb646;
    }

    .info-entrega{
        display: flex;   
        
        .tempo-de-entrega {
            width: 148px;
            height: 18px;
            margin: 4px 8px 0 16px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color: #b8b8b8;
        }

        .taxa-de-entrega {
            width: 140px;
            height: 18px;
            margin: 4px 16px 0 8px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            text-align: right;
            color: #b8b8b8;
        }
    }
`;


export const Rectangle = styled.div`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`;

export const FourFoodFooter = styled.div`
    display: flex;
    
    justify-content: center;
    `