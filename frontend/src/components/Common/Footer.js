
import { useLocation } from 'react-router-dom';

import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function Footer(props) {

  let location = useLocation();
	let toFr = {
	  "/": "/fr/",
	  "/home": "/fr/accueil",
	  "/contact": "/fr/contact",
	  "/personal_projects": "/fr/projets_personnels",
	  "/professional": "/fr/professionnel",
	  "/education": "/fr/etudes",
	  "/cgu": "/fr/mentions_legales",
	  "/fr/": "/fr/",
	  "/fr/accueil": "/fr/accueil",
	  "/fr/contact": "/fr/contact",
	  "/fr/projets_personnels": "/fr/projets_personnels",
	  "/fr/professionnel": "/fr/professionnel",
	  "/fr/etudes": "/fr/etudes",
	  "/fr/mentions_legales": "/fr/mentions_legales"
	};
	
	let toEn = {
	  "/": "/",
	  "/home": "/home",
	  "/contact": "/contact",
	  "/personal_projects": "/personal_projects",
	  "/professional": "/professional",
	  "/education": "/education",
	  "/cgu": "/cgu",
	  "/fr/": "/",
	  "/fr/accueil": "/home",
	  "/fr/contact": "/contact",
	  "/fr/projets_personnels": "/personal_projects",
	  "/fr/professionnel": "/professional",
	  "/fr/etudes": "/education",
	  "/fr/mentions_legales": "/cgu"
	};

  return (
  <div>

	<Grid container justifyContent="center" spacing={2} sx={{mb: 3}}>
		<Grid item sx={2}>
			<MaterialLink underline="none" component={RouterLink} to={toEn[location.pathname]} variant="body2">English</MaterialLink>
		</Grid>	
		
		<Grid item sx={2}>
		    <MaterialLink underline="none" component={RouterLink} to={toFr[location.pathname]} variant="body2">Français</MaterialLink>
		</Grid>	
		
		<Grid item sx={2}>
		    <MaterialLink underline="none" component={RouterLink} to="/cgu" variant="body2">Terms and conditions</MaterialLink>
		</Grid>	
		
	</Grid>	
  </div>
  );
}

export default Footer;