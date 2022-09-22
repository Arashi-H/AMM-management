
import { useMemo, useState, useEffect } from "react";

import { Chart } from "react-charts";

import CircularProgress from '@mui/material/CircularProgress';

export default function History() {
	
	const [data, setData] = useState([{label:"Price history (A / B)",data:[{date:new Date(new Date() - 86400000),price:0.1},{date:new Date(),price:2}]}]);
	
	const [receivedData, setReceivedData] = useState(false);

	useEffect(() => {
		const parseData = (importedData) => {
			let _data = [{label: 'Price history (A / B)', data: []}];
			
			for (var a of importedData[0].data)
			{	
				_data[0].data.push( {date: new Date(a.date), price: a.price} );
			}
			return _data;
		}
		
		async function historyHandling() {
			const response = await fetch('https://leo-besancon.com/amm/priceHistory');
			const jsonHistoryData = await response.json();
			const updatedData = parseData(jsonHistoryData);
			setData(updatedData);
			setReceivedData(true);
		}
		historyHandling();	
		}, []);
	
   const primaryAxis = useMemo(
	() => ({getValue: (datum) => datum.date}),
     []
   )
   
   const secondaryAxes = useMemo(
	() => [{getValue: (datum) => datum.price}],
     []
   )

  return (
  
      <div style={{display: "flex", flexDirection: "column", padding: "12px", height: "400px"}}>
        <div style={{flex: 2, border: "1px solid gray", maxHeight: "400px", margin: "10px", overflow: "hidden"}}>
		  {!receivedData && (
		  	<div style={{width: "100%", height: "100%", position: 'relative'}}>
				<CircularProgress
				size={24}
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}} />
			</div>)
		  }		
		  {receivedData && (
		  	<Chart options={{data, primaryAxis, secondaryAxes, dark: true, tooltip:false}} />)
		  }		
        </div>
      </div>
  );
}




	
	




