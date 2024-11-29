import logo from './logo.svg';
import './App.css';
import UserProfile from './component/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile age={20} gmail='TextContent.in' gender='male' hobbi='Reading' name='Jay' imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpvQUyx7u7bMJqdxyVvQcA_qQjRWq7-YvcmySorRTwB6WzRBqAYQX0cZttRSJcReIGcA&usqp=CAU"} />
      <UserProfile age={25} gmail='jstag.in' gender='male' hobbi='Reading' name='Vijay' imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQeYCKJTpnbeIP4YnWiqd6QeyeX8WkUrsIcaEc6fvggp6pU7ogm-MG6G3SQXidbnTSzo&usqp=CAU "} />
      <UserProfile age={27} gmail='olehd.in' gender='male' hobbi='Reading' name='Ajay' imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPuazK-_LaNi8fEUe9hiRaCBB57FQtpgPtp3arhLqEPvX2C7OF6fczzcfCA8hhYnK5Vc&usqp=CAU "} />
      <UserProfile age={26} gmail='bfgte.in' gender='male' hobbi='Reading' name='Meet' imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNdViXu7gU2Fpy35LdY_T_QR4ojr8s6L3vaQK-ACJIW7H5aQaIw1VrqaldJ0pH63IVSo&usqp=CAU"} />
    </div>
  );
}

export default App;
