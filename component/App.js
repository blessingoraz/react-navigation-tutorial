import React from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './stackScreens/ScreenOne';
import ScreenTwo from './stackScreens/ScreenTwo';
import ScreenThree from './stackScreens/ScreenThree';

const App = StackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree}
})

export default App;