import React, {useState} from 'react'
import styled from 'styled-components'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './StateContent/Deposits'

import depositData from '../../DepositData.json'

import Modal from "react-modal";
import TransferModal from './TransferModal/TransferModal'

import "normalize.css/normalize.css";
import "./TransferModal/styles/styles.scss"

const ContainerDash = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const StateChannel = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <ContainerDash>
            <button onClick={toggleModal}>
                <NewDepositBtn  />
            </button>
            <Modal style={{"width":"50vw"}}
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Dialog"
            >
                {/* <TransferModal /> */}
            </Modal>
            <Deposits title="State Channel" count={2} data={depositData.active} />
            <Deposits title="History" count={8} data={depositData.closed} />
        </ContainerDash>
    )
}

export default StateChannel
