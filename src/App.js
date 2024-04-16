import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/TextField/InputField";
import RadioInput from "./components/RadioInput/RadioInput";
import CheckboxField from "./components/CheckboxField/CheckboxField";

function App() {
  return (
    <div>
      <div className="">User Form </div>
      <form>
        <InputField
          divClass="form-row"
          forField="firstName"
          labelText="First Name:"
          inputType="text"
          IdName="firstName"
          placeHolderText="First Name"
        />
        <InputField
          divClass="form-row"
          forField="lastName"
          labelText="Last Name:"
          inputType="text"
          IdName="lastName"
          placeHolderText="Last Name"
        />
        <InputField
          divClass="form-row"
          forField="email"
          labelText="Email-Id:"
          inputType="email"
          IdName="email"
          placeHolderText="Email-Id"
        />
        <InputField
          divClass="form-row"
          forField="contact"
          labelText="Contact:"
          inputType="number"
          IdName="contact"
          placeHolderText="Contact No"
        />

        <div className="form-row">
          <label for="form-row">Gender:</label>
          <RadioInput
            inputType="radio"
            IdName="gender-male"
            for="form-row"
            spanText="Male"
          />
          <RadioInput
            inputType="radio"
            IdName="gender-female"
            for="form-row"
            spanText="Female"
          />
          <RadioInput
            inputType="radio"
            IdName="gender-others"
            for="form-row"
            spanText="Others"
          />
        </div>

        {/* <CheckboxField /> */}
        <div className="">
          <label for=""></label>
        </div>

      </form>
    </div>
  );
}

export default App;
