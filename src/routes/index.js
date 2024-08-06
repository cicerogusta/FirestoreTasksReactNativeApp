import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Task from "../pages/Task";
import NewTask from "../pages/NewTask";
import Details from "../pages/Details";
import Login from "../pages/Login";


const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            options={{headerTintColor:'#f92e6a', headerShown:false}}>
            </Stack.Screen>

            <Stack.Screen
                name="Task"
                component={Task}
            options={{headerTintColor:'#f92e6a'}}>
            </Stack.Screen>

            <Stack.Screen
                name="NewTask"
                component={NewTask}
                options={{headerTintColor:'#f92e6a'}}>
            </Stack.Screen>

            <Stack.Screen
                name="Details"
                component={Details}
                options={{headerTintColor:'#f92e6a'}}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}
