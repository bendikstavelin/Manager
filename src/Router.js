import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeCreate()}
            rightTitle="Add"
            key="employeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            //onRight={() => console.log('rifht')}
            //rightTitle="Add"
            key="employeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
