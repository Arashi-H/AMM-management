
import { useState, useEffect } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { /*Mainnet,*/ Goerli, useEthers, useTokenBalance, useTokenAllowance, useContractFunction, useCall , useCalls, useNotifications } from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

import { AMM_ABI, AMM_ADDRESS } from '../../contracts/AMM'
import { AssetA_ABI, AssetA_ADDRESS } from '../../contracts/AssetA'
import { AssetB_ABI, AssetB_ADDRESS } from '../../contracts/AssetB'
import { Liquidity_ABI, Liquidity_ADDRESS } from '../../contracts/Liquidity'
import { GOV_ABI, GOV_ADDRESS } from '../../contracts/GOV'

import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

	
	const AMM_Interface = new utils.Interface(AMM_ABI);
	const AMM_contract = new Contract(AMM_ADDRESS, AMM_Interface);

	const AssetA_Interface = new utils.Interface(AssetA_ABI);
	const AssetA_contract = new Contract(AssetA_ADDRESS, AssetA_Interface);

	const AssetB_Interface = new utils.Interface(AssetB_ABI);
	const AssetB_contract = new Contract(AssetB_ADDRESS, AssetB_Interface);

	const Liquidity_Interface = new utils.Interface(Liquidity_ABI);
	const Liquidity_contract = new Contract(Liquidity_ADDRESS, Liquidity_Interface);

	const GOV_Interface = new utils.Interface(GOV_ABI);
	const GOV_contract = new Contract(GOV_ADDRESS, GOV_Interface);

/*
	const liquidityA;
	const liquidityB;
	const fee_value;
	const proposedFee;
	const proposedFeeGOVBalance;
	const proposedFeeGOVTotalBalance;
	const public fee_choices;
	
	Mappings:
		const proposedFeeChoice;
		const GOVBalanceUsedForUser;
		const GOVBalanceUsedForFeeChoice;
*/

    /*transactionName?: string*/
	
	const TransactionErrorComponent = () => {
		
		const [transactionName, setTransactionName] = useState("");
		const [error, setError] = useState(false);
		
		const handleCloseError = () => {
			setError(false);
		};
		
		const { notifications } = useNotifications();

		useEffect(() => {
			setError(notifications?.[0]?.type  === "transactionFailed");
			setTransactionName(notifications?.[0]?.transactionName ?? "");
		}, [notifications])

		return (
			<div>
				{!transactionName && (
					<Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError} >
						<Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
							Erreur : La transaction a échouée.
						</Alert>
					</Snackbar>
				)}
				{ transactionName !== "" && (
					<Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError} >
						<Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
							Erreur : La transaction ' {transactionName} ' a échouée.
						</Alert>
					</Snackbar>
				)}
			</div>
		);
	}
	
	const TransactionSuccessComponent = () => {
		
		const [transactionName, setTransactionName] = useState("");
		const [success, setSuccess] = useState(false);
		
		const handleCloseSuccess = () => {
			setSuccess(false);
		};
		
		const { notifications } = useNotifications();

		useEffect(() => {
			setSuccess(notifications?.[0]?.type === "transactionSucceed");
			setTransactionName(notifications?.[0]?.transactionName ?? "");
		}, [notifications]);
		
		return (
			<div>
				{!transactionName && (
					<Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess} >
						<Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
							Transaction envoyée !
						</Alert>
					</Snackbar>
				)}
				{ transactionName !== "" && (
					<Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess} >
						<Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
							Transaction ' {transactionName} ' envoyée !
						</Alert>
					</Snackbar>
				)}
			</div>
		);
	}
	
	const LiquidityAComponent = (props) => {
		const { value, error } = useCall({
			contract: AMM_contract, 
			method: 'liquidityA',
			args: []
		}) ?? {};

		return (
			<div>
				{(props.chainId !== Goerli.chainId || error || !value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						LiquiditéA : undefined
					</Typography>
					)
				}
				
				{(props.chainId === Goerli.chainId && !error && value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						LiquiditéA : {utils.formatUnits(value[0],0)}
					</Typography>
					)
				}
			</div>
		);
	}
	const LiquidityBComponent = (props) => {
		const { value, error } = useCall({
			contract: AMM_contract, 
			method: 'liquidityB',
			args: []
		}) ?? {};
		
		return (
			<div>
				{(props.chainId !== Goerli.chainId || error || !value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						LiquiditéB : undefined
					</Typography>
					)
				}
				
				{(props.chainId === Goerli.chainId && !error && value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						LiquiditéB : {utils.formatUnits(value[0],0)}
					</Typography>
					)
				}
			</div>
		);
	}
	const FeeValueComponent = (props) => {
		const { value, error } = useCall({
			contract: AMM_contract, 
			method: 'fee_value',
			args: []
		}) ?? {};
		

		return (
			<div>
				{(props.chainId !== Goerli.chainId || error || !value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						Valeur des frais : undefined
					</Typography>
					)
				}
				
				{(props.chainId === Goerli.chainId && !error && value) && (
					<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
						Valeur des frais : {utils.formatUnits(value[0],0)}
					</Typography>
					)
				}
			</div>
		);
	}
	const FeeChoicesComponent = (props) => {
	  
	  const args_list = ['0','1','2','3'];
	  
	  const calls = args_list?.map(i => ({
		contract: AMM_contract,
		method: 'fee_choices',
		args: [i]
	  })) ?? []
	  
	  const results = useCalls(calls) ?? [];
	  
		return (
			<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
				Choix de frais : [ { (props.chainId === Goerli.chainId && results) ? results.map(
					(result) => 
					{
						const ret_string = result ? utils.formatUnits(result?.value?.[0],0) : "";
						return ret_string+` `;
					}
				) : "undefined"} ]
			</Typography>
		);
	}
	
	const MintAComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [NbMintA, setNbMintA] = useState(0);
		const handleChangeNbMintA = (e) => {
			setNbMintA(e.target.value);
		};
	
		const { state, send } = useContractFunction(AssetA_contract, 'mintNTokens', { transactionName: 'Mint de nouveaux tokens A' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])

		const sendTxMintA = () => {
		  void send(NbMintA)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Mint de nouveaux tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={NbMintA} onChange={handleChangeNbMintA} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxMintA()}>
						Mint
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const MintBComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [NbMintB, setNbMintB] = useState(0);
		const handleChangeNbMintB = (e) => {
			setNbMintB(e.target.value);
		};
		
		const { state, send } = useContractFunction(AssetB_contract, 'mintNTokens', { transactionName: 'Mint de nouveaux tokens B' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxMintB = () => {
		  void send(NbMintB)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Mint de nouveaux tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={NbMintB} onChange={handleChangeNbMintB} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxMintB()}>
						Mint
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>

			</Grid>
		)
	}

	const TransferAComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueA, setvalueA] = useState(0);
		const [toA, settoA] = useState("");
		const handleChangevalueA= (e) => {
			setvalueA(e.target.value);
		};
		const handleChangetoA = (e) => {
			settoA(e.target.value);
		};
	
		const { state, send } = useContractFunction(AssetA_contract, 'transfer', { transactionName: 'Transférer des Tokens A' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxTransferA = () => {
		  void send(toA, valueA)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Transférer des tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Destinataire" value={toA} onChange={handleChangetoA} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueA} onChange={handleChangevalueA} variant="outlined" />
				</Grid>

				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxTransferA()}>
						Transférer
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TransferBComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueB, setvalueB] = useState(0);
		const [toB, settoB] = useState("");
		const handleChangevalueB= (e) => {
			setvalueB(e.target.value);
		};
		const handleChangetoB = (e) => {
			settoB(e.target.value);
		};
	
		const { state, send } = useContractFunction(AssetB_contract, 'transfer', { transactionName: 'Transférer des Tokens B' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxTransferB = () => {
		  void send(toB, valueB)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Transférer des tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Destinataire" value={toB} onChange={handleChangetoB} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueB} onChange={handleChangevalueB} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxTransferB()}>
						Transférer
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TransferLComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueL, setvalueL] = useState(0);
		const [toL, settoL] = useState("");
		const handleChangevalueL= (e) => {
			setvalueL(e.target.value);
		};
		const handleChangetoL = (e) => {
			settoL(e.target.value);
		};
	
		const { state, send } = useContractFunction(Liquidity_contract, 'transfer', { transactionName: 'Transférer des Tokens L' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxTransferL = () => {
		  void send(toL, valueL)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Transférer des tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Destinataire" value={toL} onChange={handleChangetoL} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueL} onChange={handleChangevalueL} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxTransferL()}>
						Transférer
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TransferGOVComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueGOV, setvalueGOV] = useState(0);
		const [toGOV, settoGOV] = useState("");
		const handleChangevalueGOV= (e) => {
			setvalueGOV(e.target.value);
		};
		const handleChangetoGOV = (e) => {
			settoGOV(e.target.value);
		};
	
		const { state, send } = useContractFunction(GOV_contract, 'transfer', { transactionName: 'Transférer des Tokens GOV' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxTransferGOV = () => {
		  void send(toGOV, valueGOV)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Transférer des tokens
					</Typography>
				</Grid>	
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Destinataire" value={toGOV} onChange={handleChangetoGOV} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueGOV} onChange={handleChangevalueGOV} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxTransferGOV()}>
						Transférer
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}

	const ApproveAComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueA, setvalueA] = useState(0);
		const handleChangevalueA= (e) => {
			setvalueA(e.target.value);
		};

		const { state, send } = useContractFunction(AssetA_contract, 'approve', { transactionName: 'Autoriser le contrat AMM' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxApproveA = () => {
		  void send(AMM_ADDRESS, valueA)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Autoriser le contrat AMM
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueA} onChange={handleChangevalueA} variant="outlined" />
				</Grid>

				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxApproveA()}>
						Autoriser AMM
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>

			</Grid>
		)
	}
	const ApproveBComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueB, setvalueB] = useState(0);
		const handleChangevalueB= (e) => {
			setvalueB(e.target.value);
		};

		const { state, send } = useContractFunction(AssetB_contract, 'approve', { transactionName: 'Autoriser le contrat AMM' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxApproveB = () => {
		  void send(AMM_ADDRESS, valueB)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Autoriser le contrat AMM
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueB} onChange={handleChangevalueB} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxApproveB()}>
						Autoriser AMM
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const ApproveLComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueL, setvalueL] = useState(0);
		const handleChangevalueL= (e) => {
			setvalueL(e.target.value);
		};

		const { state, send } = useContractFunction(Liquidity_contract, 'approve', { transactionName: 'Autoriser le contrat AMM' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxApproveL = () => {
		  void send(AMM_ADDRESS, valueL)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Autoriser le contrat AMM
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueL} onChange={handleChangevalueL} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxApproveL()}>
						Autoriser AMM
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const ApproveGOVComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueGOV, setvalueGOV] = useState(0);
		const handleChangevalueGOV= (e) => {
			setvalueGOV(e.target.value);
		};

		const { state, send } = useContractFunction(GOV_contract, 'approve', { transactionName: 'Autoriser le contrat AMM' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxApproveGOV = () => {
		  void send(AMM_ADDRESS, valueGOV)
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Autoriser le contrat AMM
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant" type="number" value={valueGOV} onChange={handleChangevalueGOV} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxApproveGOV()}>
						Autoriser AMM
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}

	const GOV_Trading_feesComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [feeChoice, setfeeChoice] = useState(0);
		const [valueGOV, setvalueGOV] = useState(0);
		const handleChangefeeChoice= (e) => {
			setfeeChoice(e.target.value);
		};
		const handleChangevalueGOV= (e) => {
			setvalueGOV(e.target.value);
		};

		const { state, send } = useContractFunction(AMM_contract, 'GOV_Trading_fees', { transactionName: 'Voter pour les frais' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxGOV_Trading_fees = () => {
		  void send(feeChoice, valueGOV);
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Voter pour les frais
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Numéro du choix" type="number" value={feeChoice} onChange={handleChangefeeChoice} variant="outlined" />
				</Grid>
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (GOV)" type="number" value={valueGOV} onChange={handleChangevalueGOV} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxGOV_Trading_fees()}>
						Voter
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const GOV_Trading_fees_remove_voteComponent = (props) => {
		const [loading, setLoading] = useState(false);

		const { state, send } = useContractFunction(AMM_contract, 'GOV_Trading_fees_remove_vote', { transactionName: 'Enlever votre vote' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxGOV_Trading_fees_remove_vote = () => {
		  void send();
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Enlever votre vote
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxGOV_Trading_fees_remove_vote()}>
						Enlever Vote
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const ProvideLiquidityComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueA, setvalueA] = useState(0);
		const [valueB, setvalueB] = useState(0);

		const handleChangevalueA = (e) => {
			setvalueA(e.target.value);
		};
		const handleChangevalueB = (e) => {
			setvalueB(e.target.value);
		};

		const { state, send } = useContractFunction(AMM_contract, 'provideLiquidity', { transactionName: 'Apporter de la liquidité' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxprovideLiquidity = () => {
		  void send(valueA, valueB);
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Apporter de la liquidité
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (A)" type="number" value={valueA} onChange={handleChangevalueA} variant="outlined" />
				</Grid>
				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (B)" type="number" value={valueB} onChange={handleChangevalueB} variant="outlined" />
				</Grid>

				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxprovideLiquidity()}>
						Apporter de la liquidité
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const RemoveLiquidityComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueL, setvalueL] = useState(0);

		const handleChangevalueL = (e) => {
			setvalueL(e.target.value);
		};

		const { state, send } = useContractFunction(AMM_contract, 'removeLiquidity', { transactionName: 'Enlever de la liquidité' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxremoveLiquidity = () => {
		  void send(valueL);
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Enlever de la liquidité
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (L)" type="number" value={valueL} onChange={handleChangevalueL} variant="outlined" />
				</Grid>
		
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxremoveLiquidity()}>
						Enlever de la liquidité
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TradeA2BComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueA, setvalueA] = useState(0);

		const handleChangevalueA = (e) => {
			setvalueA(e.target.value);
		};

		const { state, send } = useContractFunction(AMM_contract, 'tradeA2B', { transactionName: 'Échanger A pour B' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxtradeA2B = () => {
		  void send(valueA);
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Échanger A pour B
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (A)" type="number" value={valueA} onChange={handleChangevalueA} variant="outlined" />
				</Grid>
				
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxtradeA2B()}>
						Échanger A pour B
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TradeB2AComponent = (props) => {
		const [loading, setLoading] = useState(false);
		const [valueB, setvalueB] = useState(0);

		const handleChangevalueB = (e) => {
			setvalueB(e.target.value);
		};

		const { state, send } = useContractFunction(AMM_contract, 'tradeB2A', { transactionName: 'Échanger B pour A' })
		
		const { status } = state
		
		useEffect(() => {
			setLoading(status === "PendingSignature" || status === "Mining" );
		}, [status])
		
		const sendTxtradeB2A = () => {
		  void send(valueB);
		}

		return (
			<Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center" sx={{border:'1px solid gray', borderRadius:'10px', p:'10px', m:'10px', ml:'18px'}}>
				<Grid item xs={3} md={2}>	
					<Typography variant="body1">
						Échanger B pour A
					</Typography>
				</Grid>	

				<Grid item xs={3} md={2}>	
					<TextField fullWidth id="outlined-basic" label="Montant (B)" type="number" value={valueB} onChange={handleChangevalueB} variant="outlined" />
				</Grid>
								
				<Grid item xs={3} md={2} sx={{position: 'relative'}}>
					<Button variant="contained" disabled={loading || props.chainId !== Goerli.chainId} onClick={() => sendTxtradeB2A()}>
						Échanger B pour A
					</Button>
					{loading && (
						<CircularProgress
						size={24}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}} />)
					}				
				</Grid>
			</Grid>
		)
	}
	const TradeAmountA2BComponent = (props) => {

	}
	const TradeAmountB2AComponent = (props) => {
		
	}
	const ProposedFeeChoiceComponent = (props) => {
		
	}
	const GOVBalanceUsedForUserComponent = (props) => {
		
	}
	const GOVBalanceUsedForFeeChoiceComponent = (props) => {
		
	}

function Home(props) {
	
    const { switchNetwork, activateBrowserWallet, account, chainId } = useEthers();
	
	const checkNetwork = async () => {
		if (chainId !== Goerli.chainId)
		{
			await switchNetwork(Goerli.chainId);
		}
	}
	
	const tokenABalance = useTokenBalance(AssetA_ADDRESS, account);
	const tokenBBalance = useTokenBalance(AssetB_ADDRESS, account);
	const tokenLiquidityBalance = useTokenBalance(Liquidity_ADDRESS, account);
	const tokenGOVBalance = useTokenBalance(GOV_ADDRESS, account);
	
	const tokenAAllowance = useTokenAllowance(AssetA_ADDRESS, account, AMM_ADDRESS)	
	const tokenBAllowance = useTokenAllowance(AssetB_ADDRESS, account, AMM_ADDRESS)	
	const tokenLiquidityAllowance = useTokenAllowance(Liquidity_ADDRESS, account, AMM_ADDRESS)	
	const tokenGOVAllowance = useTokenAllowance(GOV_ADDRESS, account, AMM_ADDRESS)
	
/*	AMM {
		address public GOV_Address;
		address public AssetA_Address;
		address public AssetB_Address;
		address public Liquidity_Address;
		uint256 public liquidityA;
		uint256 public liquidityB;
		uint256 public accumulatedfees;
		uint256 public fee_value;
		mapping (address => uint256) public proposedFee;
		mapping (address => uint256) public proposedFeeGOVBalance;
		uint256 public proposedFeeGOVTotalBalance;

		constructor(address _GOV_Address, address _AssetA_Address, address _AssetB_Address, address _Liquidity_Address)
		function GOV_Trading_fees(uint256 _fee_value, uint256 _gov_value) onlyGOV public returns (bool success)
		function GOV_Trading_fees_remove_vote() onlyGOV public returns (bool success)
		function provideLiquidity(uint256 _amountA, uint256 _amountB) public returns (bool success) 
		function removeLiquidity(uint256 _amount) public returns (bool success) 
		function tradeA2B(uint256 _amountA) public returns (bool success)
		function tradeB2A(uint256 _amountB) public returns (bool success)ive
		function tradeAmountA2B(uint256 _amountA) public view returns (uint256 amountB) 
		function tradeAmountB2A(uint256 _amountB) public view returns (uint256 amountA)
	}
	
	AssetA, AssetB, GOV, Liquidity {
		uint256 public totalSupply
		string public name
		string public symbol
		uint256 public decimal
		mapping (address => uint256) balanceOf(address)
		mapping (address => mapping (address => uint256)) allowance(address _from, address _spender)
		constructor() ERC20("ASSET_A", "AAA")
		function transfer(address _to, uint256 value)
		function transferFrom(address _from, address _to, uint256 value)
		function approve(address _to, uint256 value)
	}*/

  return (
	<div>
		{checkNetwork}
		
		<TransactionErrorComponent />
		<TransactionSuccessComponent />	
	
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h3">
					Auto Market Maker
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography paragraph={true} sx={{width: {xs: "70%", sm: "60%", md: "55%", lg: "50%", xl: "50%"}, textAlign: "justify", marginLeft: "auto", marginRight: "auto"}} variant="body1">
				Cette page est une démonstration de l'utilisation de smart contrats gérant un Auto Market Maker. Ce projet utilise le testnet Goerli.
				</Typography>
				
				<Typography paragraph={true} sx={{width: {xs: "70%", sm: "60%", md: "55%", lg: "50%", xl: "50%"}, textAlign: "justify", marginLeft: "auto", marginRight: "auto"}} variant="body1">
				Les Auto Market Makers permettent aux utilisateurs d'acheter et vendre des assets non pas à d'autres utilisateurs directement, mais à des réserves de liquidités. Ce projet m'a permis de découvrir l'univers de la finance décentralisée.
				
				<br /> 
				<span>
				<Link underline="hover" sx={{color:"primary.light"}} href="https://github.com/Leo-Besancon/AutoMarketMakerTest">
					<Stack sx={{display: "inline"}} direction="row" alignItems="flex-end" gap={2}>
						<GitHubIcon sx={{verticalAlign: 'middle'}} /> 
						<Typography sx={{display: "inline"}} variant="body1">
						{" github.com/Leo-Besancon/AutoMarketMakerTest"}
						</Typography>
					</Stack>
				</Link>
				</span>
				</Typography>
			</Grid>
			
			<Grid item xs={12}>
				{!account && <Button variant="contained" onClick={activateBrowserWallet}> Connectez votre wallet </Button>}
					
				{account && <Typography paragraph={true} sx={{width: {xs: "70%", sm: "60%", md: "55%", lg: "50%", xl: "50%"}, textAlign: "justify", marginLeft: "auto", marginRight: "auto"}} variant="body1">Compte : {account}</Typography>}

			</Grid>
			
		{(account && chainId !== Goerli.chainId) && (
		
			<Grid item xs={12}>
				<Typography paragraph={true} sx={{width: {xs: "70%", sm: "60%", md: "55%", lg: "50%", xl: "50%"}, textAlign: "justify", marginLeft: "auto", marginRight: "auto"}} variant="body1">
				
					Merci de changer le réseau pour le réseau de test Goerli dans les paramètres de votre wallet !
				</Typography>
			</Grid>
		)}


			<Grid item container xs={12} md={6}>
				<Paper elevation={3} sx={{pt: "10px"}}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
					
						<Grid item xs={12}>
							<Typography variant="h4">
								TokenA
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Solde : {(tokenABalance && chainId === Goerli.chainId) ? utils.formatUnits(tokenABalance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Autorisation : {(tokenAAllowance && chainId === Goerli.chainId) ? utils.formatUnits(tokenAAllowance, 0) : 'undefined'}
							</Typography>
						</Grid>

						<MintAComponent chainId={chainId}/>
						<TransferAComponent chainId={chainId}/>
						<ApproveAComponent chainId={chainId}/>
					
					</Grid>
				</Paper>
			</Grid>
			
			
			<Grid item container xs={12} md={6}>
				<Paper elevation={3} sx={{pt: "10px"}}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
						<Grid item xs={12}>
							<Typography variant="h4">
								TokenB
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Solde : {(tokenBBalance && chainId === Goerli.chainId) ? utils.formatUnits(tokenBBalance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Autorisation : {(tokenBAllowance && chainId === Goerli.chainId) ? utils.formatUnits(tokenBAllowance, 0) : 'undefined' }
							</Typography>
						</Grid>
						
						<MintBComponent chainId={chainId}/>
						<TransferBComponent chainId={chainId}/>
						<ApproveBComponent chainId={chainId}/>
					</Grid>
				</Paper>
			</Grid>
			
			<Grid item container xs={12} md={6}>
				<Paper elevation={3} sx={{pt: "10px"}}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
						<Grid item xs={12}>
							<Typography variant="h4">
								TokenLiquidity
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Solde : {(tokenLiquidityBalance && chainId === Goerli.chainId) ? utils.formatUnits(tokenLiquidityBalance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Autorisation : {(tokenLiquidityAllowance && chainId === Goerli.chainId) ? utils.formatUnits(tokenLiquidityAllowance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<TransferLComponent chainId={chainId}/>
						<ApproveLComponent chainId={chainId}/>
						
					</Grid>
				</Paper>
			</Grid>
			
			<Grid item container xs={12} md={6}>
				<Paper elevation={3} sx={{pt: "10px"}}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
						<Grid item xs={12}>
							<Typography variant="h4">
								TokenGOV
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Solde : {(tokenGOVBalance && chainId === Goerli.chainId) ? utils.formatUnits(tokenGOVBalance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<Grid item xs={6}>
							<Typography paragraph={true} sx={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}} variant="body1">
								Autorisation : {(tokenGOVAllowance && chainId === Goerli.chainId) ? utils.formatUnits(tokenGOVAllowance, 0) : 'undefined'}
							</Typography>
						</Grid>
						
						<TransferGOVComponent chainId={chainId}/>
						<ApproveGOVComponent chainId={chainId}/>
						
					</Grid>
				</Paper>
			</Grid>
			
			
			<Grid item container xs={12}>
				<Paper elevation={3} sx={{pt: "10px"}}>
					<Grid container spacing={1} justifyContent="center" alignItems="center">
						<Grid item xs={12}>
							<Typography variant="h4">
								AMM
							</Typography>
						</Grid>
								
						<Grid item xs={6}>
							<LiquidityAComponent chainId={chainId}/>
						</Grid>	
						
						<Grid item xs={6}>
							<LiquidityBComponent chainId={chainId}/>
						</Grid>		
						
						<Grid item xs={6}>
							<FeeValueComponent chainId={chainId}/>
						</Grid>
						
						<Grid item xs={6}>
							<FeeChoicesComponent chainId={chainId}/>
						</Grid>

						<GOV_Trading_feesComponent chainId={chainId}/>
						<GOV_Trading_fees_remove_voteComponent chainId={chainId}/>
						<ProvideLiquidityComponent chainId={chainId}/>
						<RemoveLiquidityComponent chainId={chainId}/>
						<TradeA2BComponent chainId={chainId}/>
						<TradeB2AComponent chainId={chainId}/>
						<TradeAmountA2BComponent chainId={chainId}/>
						<TradeAmountB2AComponent chainId={chainId}/>
						<ProposedFeeChoiceComponent chainId={chainId}/>
						<GOVBalanceUsedForUserComponent chainId={chainId}/>
						<GOVBalanceUsedForFeeChoiceComponent chainId={chainId}/>

					</Grid>
				</Paper>
			</Grid>

		</Grid>
	
    </div>
  
  );
}

export default Home;

