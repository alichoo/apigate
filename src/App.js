import { useState } from "react";



function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  
  return (
    <div className="container">
  <div className="row justify-content-md-center">
    <h1>LOGIN</h1>
    <div className="col-8">
    <form onSubmit={handleSubmit}>
      <label> Adresse mail :
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
      <label> Mot de passe :
        <input 
          type="password"
          name="motdepass"
          value={inputs.motdepass || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <div className="d-grid gap-4 col-4 mx-auto">
        <input className="btn btn-primary" type="submit" value="Connexion"/>
        </div>
     </form>
    </div>
    </div>
    </div>
    
  )
}

export default App;
