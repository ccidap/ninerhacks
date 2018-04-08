import React from 'react'
import styled from 'styled-components'

const ChildWrapper = styled.div`
`

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${ChildWrapper} {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const Layout = ({ children, footer: Footer }) => (
  <LayoutWrapper>
    <ChildWrapper>
      {children}
    </ChildWrapper>
    <Footer />
  </LayoutWrapper>
)

export default Layout