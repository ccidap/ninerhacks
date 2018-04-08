import styled from 'styled-components'
import React from 'react'

const FooterWrapper = styled.footer`
  color: #333;
  text-align: center;
  padding: 1rem;
  a {
    font-weight: bold;
    color: ${props => props.theme.colors.main};
  }
  p:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <p>
      © 2018 NinerHacks. Hosted by the <a href='http://www.ccidap.com/' target='_blank' rel='noopener noreferrer'>
        CCI Dean's Ambassador Program
      </a> at UNC Charlotte.
    </p>
    <p>
      Questions? Email us at <a href='mailto:ccidap.uncc@gmail.com'>ccidap.uncc@gmail.com</a>.
    </p>
  </FooterWrapper>
)

export default Footer