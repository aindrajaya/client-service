
import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

//data handling redux
import { useDispatch, useSelector } from "react-redux";
import { loadChannel, openChannel, saveChannel } from '../../../../redux/actions/channel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const ChannelModal = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [channelKey, setChannelKey] = useState('')
  const [dataTrx, setDataTrx] = useState({})
  const [statusMessage, setStatusMessage] = useState('')

  
  //redux
  const dispatch = useDispatch()
  const dataChain = useSelector(state => state.channel)
  const listsChain = useSelector(state => state.listsChannel)

  console.log(dataChain)
  console.log(listsChain)

  const onSubmit = (data) => {
    openChannel(dispatch, data)
    // await saveChannel(dispatch, dataChain)
  }

  useEffect((data) => {
    loadChannel(dispatch)
    onSubmit(data)
  }, [])
    

    return (
    <Fragment>  
      <h2
        style={{
          backgroundColor: "#ffc107"
        }}
      >{statusMessage}</h2>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="addressFromPk"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Root Address Pkey"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
              />
            )}
            rules={{ required: 'Root Address Private Key required' }}
          />
          <Controller
            name="addressTo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Address To"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Second Address required' }}
          />
          <Controller
            name="addressAudit"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Audit Address"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Auditor/Third Address required' }}
          />
          <Controller
            name="depositMinimum"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Minimum Amount Deposit"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Minimum deposit is required' }}
          />
          
          
          <div>
        
            <Button type="submit" variant="contained" color="primary">
              Open Channel
            </Button>
          </div>
            <div
              style={{
                backgroundColor: "aliceblue",
                width: "90%",
                borderRadius: "10px",
                padding: "5%"
              }}  
            >
            <div>
              <h3>This is your channel Key, please save for the next transaction</h3>
              <div
                style={{
                  backgroundColor: "#fff8e1",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "5%",
                  marginBottom: "5%",
                  marginTop:"5%",
                  wordBreak: "break-all"
                }}
                >
                  <p>{channelKey}</p>
              </div>
              
              {/* <h3>You can see on Ropsten networks too</h3> */}
              <h3>You can see on Rinkeby networks too</h3>
              {/* <Button target="_blank" href={`https://ropsten.etherscan.io/address/${dataTrx.tokenAddress}`}> */}
              <Button target="_blank" href={`https://rinkeby.etherscan.io/address/${dataTrx.tokenAddress}`}>
                Token
              </Button>
              <Button target="_blank" href={`https://rinkeby.etherscan.io/tx/${dataTrx.trxHashNewChannel}`}>
                Trx Address
              </Button>               
            </div>
          </div>
         
          
      </form>
      
   
    </Fragment>
   );
};

export default ChannelModal