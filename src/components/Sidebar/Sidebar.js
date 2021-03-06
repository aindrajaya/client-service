import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'
import ToggleSwitch from './ToggleSwitch'

const ContainerSid = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;


`

const Sidebar = () => {

    return (
        <ContainerSid>
            <Profile />
            <Menu />
            {/* <ToggleSwitch /> */}
        </ContainerSid>
    )
}

export default Sidebar
