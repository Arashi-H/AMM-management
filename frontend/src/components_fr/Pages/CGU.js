
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CGU(props) {

  return (
	<div>
		<Typography sx={{width: '50%', textAlign: "justify", marginLeft: "auto", marginRight: "auto"}} variant="body1">
			Ce site est édité et hébergé à titre personnel par Léo Besançon. Les informations réglementaires ont été transmises à la société OVH (<Link href="https://ovh.com">ovh.com</Link>), le registrar du nom de domaine <Link href="https://leo-besancon.com">leo-besancon.com</Link> :<br />
			OVH: SAS au capital de 10 174 560 €<br />
			RCS Lille Métropole 424 761 419 00045<br />
			Code APE 2620Z <br />
			N° TVA : FR 22 424 761 419 <br />
			Siège social : 2 rue Kellermann - 59100 Roubaix - France
		</Typography>
    </div>
  );
}

export default CGU;
