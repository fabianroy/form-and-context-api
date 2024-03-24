
import SimpleForm from './components/simple_form/SimpleForm';
import StatefulForm from './components/stateful_form/StatefulForm';
import RefForm from './components/ref_form/RefForm';
import HookForm from './components/hooks/HookForm';
import ReusableForm from './components/reusable_form/ReusableForm';
import Grandpa from './components/OtherContext/grandpa/Grandpa';

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log(data);
  // }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm /> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign Up with your name and email</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitButtonText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      
      <Grandpa></Grandpa>
    </>
  )
}

export default App
