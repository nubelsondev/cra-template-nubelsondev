import React from 'react'
import styled from 'styled-components'

import Layout from './components/Layout'

import logo from './images/logo.svg'

const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 28rem;
	transform: translate(-50%, -50%);

	@media ${(props) => props.theme.mediaQueries.medium} {
		height: 25rem;
	}

	@media ${(props) => props.theme.mediaQueries.small} {
		height: 20rem;
	}

	@media ${(props) => props.theme.mediaQueries.smallest} {
		height: 15rem;
	}
`

const App = () => {
	return (
		<Layout>
			<Image src={logo} alt='nubelsondev' />
		</Layout>
	)
}

export default App
