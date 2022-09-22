
import Grid from '@mui/material/Grid';

import { NavLink } from "react-router-dom";
import MaterialLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Sidebar(props) {

  return (
	
	<Grid container justifyContent="center" spacing={2}>
		<Grid item sx={2}>
			<MaterialLink underline="hover" component={NavLink} to='/fr/'>
				{
					({ isActive }) => 
					<span>
						{ isActive && (<Typography variant="h5" sx={{color:"primary.light", textDecoration: "underline"}}>
										Accueil
										</Typography>)
						}
						{ !isActive && (<Typography variant="h5">
										Accueil
										</Typography>)
						}
					</span>
				}
			</MaterialLink>
		</Grid>	
		
		<Grid item sx={2}>
			<MaterialLink underline="hover" component={NavLink} to='/fr/contact'>
				{
					({ isActive }) => 
					<span>
						{ isActive && (<Typography variant="h5" sx={{color:"primary.light", textDecoration: "underline"}}>
										Contact
										</Typography>)
						}
						{ !isActive && (<Typography variant="h5">
										Contact
										</Typography>)
						}
					</span>
				}
			</MaterialLink>
		</Grid>	
  	</Grid>
  );
}

export default Sidebar;