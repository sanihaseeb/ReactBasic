import React from 'react';
import '@awesomecomponents/mux/core/typography/assets/fonts/fonts.css';
import { UtilityHeader } from '@awesomecomponents/mux/core/components';
import Layout from './Layout';
import './App.css';
import  DoctorsList  from './components/DoctorsList';
import H1 from '@awesomecomponents/mux/core/typography/H1';


  function App(props) {
    return (  
    <Layout>
    <div className="App">
      <header className="App-header">
       <H1>Hello, {props.name}</H1>
    <DoctorsList/>
    </header>
    </div>
    </Layout>
    )
  }
  
  

export default App;
