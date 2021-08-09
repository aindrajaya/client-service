import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import BtnTransact from './TransactionButton';
import ListsTransactions from './Transactions'

import dataMock from '../../OffChainData.json'

import Modal from "react-modal";

//style
import "normalize.css/normalize.css";
import './styles/styles.scss'

import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes';
import {useSelector} from 'react-redux';

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

console.log(dataMock)

const OnChainTransactionMain = () => {
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
                    <BtnTransact />
                </button>
                
                <ListsTransactions title="On-Chain Trx" count={2} data={dataMock.active} />
              
                </CssBaseline>
            </ThemeProvider>
        </ContainerDash>
    )
}

export default OnChainTransactionMain
