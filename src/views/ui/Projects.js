import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CardTitle,Col,Container,FormGroup, Input, Label, Row } from 'reactstrap';
import  { Scrollbars }  from 'react-custom-scrollbars';


const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(5),
}));

export default function Projects() {
	const [Profile, setAge] = React.useState('');
	const [agel, setAgel] = React.useState('');
    const [start_date, setSatrtdate] = React.useState(null);
    const [end_date, setEnddate]= React.useState(null);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleChangel = (event) => {
		setAgel(event.target.value);
	};

	return (
        <Container>
        <Row>
        <Col>
		
			<Grid
				container
				spacing={0}
				margin={0}
				columns={12}
				zeroMinWidth={0}
				sx={{ background: '#fff' }}>
                  <CardTitle tag="h6" className="border-bottom p-3 mb-0"> Project</CardTitle>
                                                                           
				<Grid item md={8} xs={12}>
					<Item spacing={5}>
					
						<TextField
							id="standard-basic"
							label="Project Name"
							variant="standard"
							fullWidth
						/>

                <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
                      
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Start Date"
    value={start_date}
    onChange={(newValue) => {
        setSatrtdate(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="End Date"
    value={end_date}
    onChange={(newEndDate) => {
      setEnddate(newEndDate);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
						<div spacing={5}>
							<FormControl
								variant="standard"
								sx={{
									width: '300px',
									marginTop: '20px',
									marginBottom: '20px',
								}}>
								<InputLabel id="demo-simple-select-standard-label">
									Devel
								</InputLabel>
								<Select
									fullwidth
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={Profile}
									onChange={handleChange}
									label="Age">
									<MenuItem value="io">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>

							<FormControl
								variant="standard"
								sx={{ width: '60%', marginTop: '10px', marginBottom: '20px' }}>
								<InputLabel id="demo-simple-select-filled-label">
									Status
								</InputLabel>
								<Select
									labelId="demo-simple-select-filled-labell"
									id="demo-simple-select-filledl"
									value={agel}
									onChange={handleChangel}>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
                     
					</Item>
				</Grid>

 			</Grid>
	
        </Col>
       
        <Col>
        <Scrollbars style={{ width: 300, height: 300 }}>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
        <p>Some great content...</p>
      </Scrollbars>
       </Col></Row>
     </Container>
	);
}