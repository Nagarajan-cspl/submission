import './App.css';

const FormComponent = ({
    formData = {}, 
    onChange,
    onSubmit,
    onReset,
    submitted,
  }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onChange(name, value);
    };
  
    return (
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
            <h2>Form Container Redux</h2>
            <h3>Login</h3>
  
          {submitted && <p style={{ color: "green" }}>Form submitted!</p>}
  
          <label>Email:</label>
          <input
            type="email"
            name="username"
            value={formData.username || ""}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
  
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
  
          <div style={{ marginTop: "10px" }}>
            <button id="submitt"type="submit">Login</button>
            <button id="reset" type="button" onClick={onReset} style={{ marginLeft: "10px" }}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default FormComponent;
  
