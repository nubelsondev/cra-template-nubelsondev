import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

import Footer from '../Footer'

const Wrapper = styled.div`
	position: relative;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Layout = ({ children }) => {
	const { dark } = themes.title

	return (
		<ThemeProvider theme={dark}>
			<Wrapper>
				{children}
				<Footer />
			</Wrapper>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default Layout
