import React, { Component } from 'react'

import { Container, Footer, Image, Link, MlhTrustBadge, MlhTrustBadgeImage, Subtitle, Title } from './AppStyles.js'

import helmet from './helmet.svg'

class App extends Component {
    render() {
        return (
            <Container>
                {/*<MlhTrustBadge  id='mlh-trust-badge'
                    href='https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <MlhTrustBadgeImage
                        src='https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg'
                        alt='Major League Hacking 2017 Hackathon Season'
                    />
                </MlhTrustBadge>*/}

                <Image src={helmet} alt='helmet' />
                <Title>niner hacks</Title>
                <Subtitle>Postponed until September 2018, due to unforeseen circumstances.</Subtitle>

                <br/>

                <Subtitle>
                    questions? <Link href='mailto:ccidap.uncc@gmail.com'>ccidap.uncc@gmail.com</Link>
                </Subtitle>

                <Footer>
                    &copy; 2018 NinerHacks. Hosted by the <a href='http://ccidap.com' target='_blank' rel='noopener noreferrer'>CCI Dean's Ambassador Program</a> at UNC Charlotte.
                    {/*<br/>
                    Sponsored by MLH. In accordance with the <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target='_blank' rel='noopener noreferrer'>MLH Code of Conduct</a>.
                    */}
                </Footer>
            </Container>
        )
    }
}

export default App