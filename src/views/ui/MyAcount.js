import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Grid, Segment } from 'semantic-ui-react'

class MyAccount extends Component {
    // eslint-disable-next-line react/require-render-return
    render() {
    <>
     <Segment color="blue">
    <Grid padded> 
        <Grid.Column>

      <Form>
        <Form.Group>
          <Form.Input name='nickname'  label='Display Name' placeholder='Display name' width={6}/>
          <Form.Input label='Username'  width={10}  />
        </Form.Group>

        <Form.Group>
          <Form.Input name='given_name' label='First name' placeholder='First Name' width={6}/>
        </Form.Group>
        
        <Form.Group>
          <Form.Input name='birthdate'  label='Birthday' placeholder='02/02/2002' width={4}/>
          <Form.Select name='gender'  label='Gender' placeholder='Gender'  width={6}/>
        </Form.Group>

        <Form.Group>
          <Form.Input name='phone_number'  label='Mobile number' placeholder='+61 0400 000 000' width={6}/>
          <Form.Input name='website'  label='Website' placeholder='www.mywebsite.com' width={10}/>
        </Form.Group>
        
        <Form.Group>
          <Form.Input name='address'  label='Address' placeholder='2/77 New Street, Newport 3015 Melbourne, Victoria, Australia ' width={16}/>
        </Form.Group>

    
        
        <Button type='submit'>Submit</Button>
      </Form>
        
        </Grid.Column>
    </Grid>
    </Segment>
    </>
    }
}

export default MyAccount;