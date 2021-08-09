import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './StateContent/Deposits'

import depositData from '../../OffChainData.json'

import Modal from "react-modal";

import "normalize.css/normalize.css";
import "./ModalStateChannel/styles/styles.scss"

import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes';
import {useSelector} from 'react-redux';
import DepositModal from '../ui-component/cards/DepositChannel/DepositModal'
import OffChainModal from '../ui-component/cards/OffChainTransactions/OffChainModal'
import ModalAppOffChain from '../ui-component/cards/OffChainTransactions/StepModal'

const ContainerDash = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const loadLocaleData = (locale) => {
    switch (locale) {
        default:
            return import('../utils/locals/en.json');
    }
};

const TransactionChannel = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const customization = useSelector((state) => state.customization);
    const [messages, setMessages] = useState();

    useEffect(() => {
        loadLocaleData(customization.locale).then((d) => {
            setMessages(d.default);
        });
    }, [customization]);

    if (customization.rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }

   
    return (
        <ContainerDash> 
            <ThemeProvider theme={theme(customization)}>
                <CssBaseline>
                    <Modal 
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Dialog"
                    style={{
                        content:{
                            width:'50%',
                            margin: 'auto',
                            borderRadius: '15px',
                            height: '70%'
                        }
                    }}
                >
                    <ModalAppOffChain />
                </Modal>
                <button onClick={toggleModal}>
                    <NewDepositBtn/>
                </button>
                
                <Deposits title="Off-Chain Trx" count={2} data={depositData.active} />
                {/**
                 * Direncanakan untuk bisa menampilkan open channel
                *  */ }
                {/* <TotalChannel />  */}
                {/* <Deposits title="History" count={8} data={depositData.closed} /> */}
                </CssBaseline>
            </ThemeProvider>
        </ContainerDash>
    )
}

export default TransactionChannel
