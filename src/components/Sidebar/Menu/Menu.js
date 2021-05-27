import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ContainerMenu = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <ContainerMenu>
            <Link to="/">
                <MenuLink title="Home" icon={'home'} l/>
            </Link>
            <Link to="/simple">
                <MenuLink title="Simple Transactions" icon={'file-multiple'}/>
            </Link>
            <Link to="/channels">
                <MenuLink title="State Channels" icon={'gift'}/>
            </Link>
            {/* <MenuLink title="Channels configuration" icon={'cog'}/> */}
        </ContainerMenu>
    )
}

export default Menu
