
import { Routes, Route } from "react-router-dom";
import './App.css';

import Footer from './components/Common/Footer.js'
import Header from './components/Common/Header.js'
import Sidebar from './components/Common/Sidebar.js'
import Home from './components/Pages/Home.js'
import Contact from './components/Pages/Contact.js'
import CGU from './components/Pages/CGU.js'

import FR_Footer from './components_fr/Common/Footer.js'
import FR_Header from './components_fr/Common/Header.js'
import FR_Sidebar from './components_fr/Common/Sidebar.js'
import FR_Home from './components_fr/Pages/Home.js'
import FR_Contact from './components_fr/Pages/Contact.js'
import FR_CGU from './components_fr/Pages/CGU.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
	<div className="App">
		<ThemeProvider theme={darkTheme}>
		<Container>
			<Grid container direction="column" rowSpacing={5}>
			
				<Grid item sx={12}>
					<Routes>
						<Route path="/fr/*" element={<FR_Header/>} />
						<Route path="/*" element={<Header/>} />
					</Routes>
				</Grid>
				
				<Grid item sx={12}>
					<main>
						<Grid container direction="column" rowSpacing={5}>
							<Grid item sx={12}>
								<Routes>
									<Route path="/fr/*" element={<FR_Sidebar/>} />
									<Route path="/*" element={<Sidebar/>} />
								</Routes>
							</Grid>
							<Grid item sx={12}>
								<Routes>
									<Route exact path="/" element={<Home/>} />
									<Route exact path="/home" element={<Home/>} />
									<Route exact path="/contact" element={<Contact/>} />
									<Route exact path="/cgu" element={<CGU/>} />
									
									<Route exact path="/fr/" element={<FR_Home/>} />
									<Route exact path="/fr/accueil" element={<FR_Home/>} />
									<Route exact path="/fr/contact" element={<FR_Contact/>} />
									<Route exact path="/fr/mentions_legales" element={<FR_CGU/>} />
								</Routes>
							</Grid>
						</Grid>
					</main>
				</Grid>
				
				<Grid item sx={12}>
					<Routes>
						<Route path="/fr/*" element={<FR_Footer/>} />
						<Route path="/*" element={<Footer/>} />
					</Routes>
				</Grid>
			</Grid>
		</Container>
		</ThemeProvider>
	</div>
  );
}

export default App;

