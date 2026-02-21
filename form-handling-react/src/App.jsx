import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>React Form Handling Lab</h1>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc' }}>
        <h3>Method 1: Controlled Components (Manual)</h3>
        <RegistrationForm />
      </section>

      <section style={{ padding: '20px', border: '1px solid #646cff' }}>
        <h3>Method 2: Formik & Yup (Library)</h3>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;