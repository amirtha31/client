import { TextInput, PasswordInput, Text, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Admin(){
  axios.defaults.crossdomain = true;
    const [ { toggle }] = useDisclosure(false);
    const navigate = useNavigate()
   
    const form = useForm({
        initialValues: {  email: '', password: '' },
        validate: {
          
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
          
        },
              
       
        
      });
  async function handleSubmit() {
    const value = form.values
    console.log(value);
    axios.post("https://backend-1-q1hc.onrender.com/admin",{
      value
    }).then((response)=>{
      console.log("res",response)
      navigate("/AdminDashboard")
    })
  }
    return (
        <div>
            <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className='form'>
      <Text
      
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Admin Login
    </Text>
        <TextInput 
        className='email'
          withAsterisk 
          label="Email" 
          placeholder="your@email.com" 
          {...form.getInputProps('email')}
          required
        />
        <PasswordInput
        label="Password"
        {...form.getInputProps('password')}
        onVisibilityChange={toggle}
      />
  
   <Group justify="center" mt="md">
  <Button type="submit"  loaderPosition="center" style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={((values) => handleSubmit(values))}>
    Submit
  </Button>
</Group>

      </form>
      <ToastContainer />
    </Box>

        </div>
    )
}
