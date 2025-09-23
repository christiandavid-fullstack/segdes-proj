import { Stack } from "expo-router";

export default function GetStartedLayout(){
    return(
        <>
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name="getstarted"/>
            </Stack>
        </>
    )
}