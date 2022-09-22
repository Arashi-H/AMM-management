
import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import orcid from '../../images/ORCID_iD.svg'

import Divider from '@mui/material/Divider';

function Contact(props) {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subject, setSubject] = useState("");
	
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const sendForm = async () => 
	{
		setLoading(true);
		
		let postData = {};
		
		postData.name = name;
		postData.email = email;
		postData.subject = subject;
		postData.message = message;
		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData)
		};
		
		const response = await fetch('/sendEmail', requestOptions);
		const data = await response.json();
		
		setLoading(false);
		
		if (data.completed !== true)
		{
			setError(true);
		}
		else
		{
			setSuccess(true);
		}
	}

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangeMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleChangeSubject = (e) => {
		setSubject(e.target.value);
	};
	
	const handleCloseSuccess = () => {
		setSuccess(false);
	};
	
	const handleCloseError = () => {
		setError(false);	
	};

  return (
	<div>
		<Grid container spacing={2} alignItems="center">
		
			<Grid item xs={12}>
				<Typography variant="h3">
					Social
				</Typography>
			</Grid>	
		
			<Grid container item spacing={1} direction="column" alignItems="center">
				
				<Grid item xs={12}>
					<Link underline="hover" sx={{color:"primary.light"}} href="https://github.com/Leo-Besancon">
						<Stack direction="row" alignItems="center" gap={1}>
							<GitHubIcon /> 
							<Typography variant="body1">
							{"github.com/Leo-Besancon"}
							</Typography>
						</Stack>
					</Link>
				</Grid>	
				
				<Grid item xs={12}>
					<Link underline="hover" sx={{color:"primary.light"}} href="https://linkedin.com/in/Leo-Besancon">
						<Stack direction="row" alignItems="center" gap={1}>
							<LinkedInIcon /> 
							<Typography variant="body1">
							{"linkedin.com/in/Leo-Besancon"}
							</Typography>
						</Stack>
					</Link>
				</Grid>				
				
				<Grid  item xs={12}>
					<Link underline="hover" sx={{color:"primary.light"}} href="https://t.me/LeoBesancon">
						<Stack direction="row" alignItems="center" gap={1}>
							<TelegramIcon /> 
							<Typography variant="body1">
							{"t.me/LeoBesancon"}
							</Typography>
						</Stack>
					</Link>
				</Grid>
				
				<Grid item xs={12}>
					<Link underline="hover" sx={{color:"primary.light"}} href="https://orcid.org/0000-0001-5613-4823">
						<Stack direction="row" alignItems="center" gap={1}>
							<img alt="ORCID logo" src={orcid} width="22px" height="22px" />
							<Typography variant="body1">
							{"orcid.org/0000-0001-5613-4823"}
							</Typography>
						</Stack>			
					</Link>
				</Grid>
			</Grid>
			
			<Grid item  xs={12}>
				<Divider variant="middle" light={true}/>
			</Grid>
		
			<Grid item  xs={12}>
				<Typography variant="h3">
					Send me an email
				</Typography>
			</Grid>	
		
			<Grid container item spacing={2} alignItems="center">
			
				<Grid item xs={5} md={3}>	
					<TextField fullWidth id="outlined-basic" label="Name" value={name} onChange={handleChangeName} variant="outlined" />
				</Grid>
				
				<Grid item xs={7} md={4}>	
					<TextField fullWidth id="outlined-basic" label="Your email" value={email} onChange={handleChangeEmail} variant="outlined" />
				</Grid>
				
				<Grid item xs={12} md={5}>	
					<TextField fullWidth id="outlined-basic" label="Subject" value={subject} onChange={handleChangeSubject} variant="outlined" />
				</Grid>		
			</Grid>
			
			<Grid item xs={12}>
					<TextField fullWidth multiline id="outlined-basic" minRows={3} label="Message" value={message} onChange={handleChangeMessage} variant="outlined" />
			</Grid>
			
			<Grid item xs={2}>
				<Button variant="contained" disabled={loading} onClick={sendForm}>
					Send
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
					}} />
					)
				}
			</Grid>
		</Grid>
		
		<Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess} >
			<Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
				Email sent! I will answer shortly.
			</Alert>
		</Snackbar>
			
		<Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError} >
			<Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
				Error: The email was not sent!
			</Alert>
		</Snackbar>
	</div>
  );
}

export default Contact;