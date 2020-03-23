import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar.js'

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <TopNavBar />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />



      {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
      <script src="/__/firebase/7.11.0/firebase-app.js"></script>

      {/*<!-- TODO: Add SDKs for Firebase products that you want to use*/}
     https://firebase.google.com/docs/web/setup#available-libraries -->
      <script src="/__/firebase/7.11.0/firebase-analytics.js"></script>

      {/*<!-- Initialize Firebase -->*/}
      <script src="/__/firebase/init.js"></script>

    </div>
  );
}

export default App;
