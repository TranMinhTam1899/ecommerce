
import { BrowserRouter, Switch } from 'react-router-dom';
import TeamplateClient from './component/teamplate/teamplateClient';
import { routesClient } from './routers';

function App() {

  const showTeamplateClient = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <TeamplateClient key={index} exact={item.exact} path={item.path} component={item.component} />
        )
      })
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        {showTeamplateClient(routesClient)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
