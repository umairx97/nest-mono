// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import UserPage from './screens/user';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="frontend" /> */}
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
