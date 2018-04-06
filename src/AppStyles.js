import styled from 'styled-components'

const primaryColor = '#5659c9'
const primaryTextColor = 'white'
const linkColor = '#ffdc64'

export const Container = styled.div`
    color: ${primaryTextColor};
    background: ${primaryColor};
    text-align: center;
    height: 100vh;
    padding: 10% 5% 0%;
    box-sizing: border-box;
`

export const MlhTrustBadge = styled.a`
    display: block;
    max-width: 100px;
    min-width: 60px;
    position: fixed;
    right: 50px;
    top: 0;
    width: 10%;
    z-index: 10000;
`

export const MlhTrustBadgeImage = styled.img`
    width: 100%;
`

export const Image = styled.img`
    width: 15%;

    @media only screen and (max-width: 767px) {
        width: 30%;
    }
`

export const Title = styled.h1`
    font-size: 4.5em;
    margin: 0;

    @media only screen and (max-width: 767px) {
        font-size: 3em;
    }
`

export const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`

export const Link = styled.a`
    color: ${linkColor};
`

export const Footer = styled.div`
    position: absolute;
    width: 100%;
    padding: 20px 0px;
    left: 0;
    bottom: 0;
    background: white;
    color: #333;

    a {
        color: ${primaryColor};
        font-weight: bold;
    }
`