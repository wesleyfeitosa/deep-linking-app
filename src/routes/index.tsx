import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Detail } from '../pages/Detail';
import { Home } from '../pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Detail" component={Detail} />
    </Navigator>
  );
}
