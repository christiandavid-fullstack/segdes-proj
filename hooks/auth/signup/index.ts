import { SignupSchema } from "@/screens/auth/signup/signupSchema";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useSignup() { 
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup =  async (data:SignupSchema) => {
        setLoading(true);
        
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        Toast.show({
              type: 'success',
              text1: 'Signup Successfully',
              text2: `Welcome, ${data.fullName}!`,
            });
        setLoading(false);
        router.replace('/tierSelection/tier-selection');
    }
    return{
        handleSignup,
        loading
    }
}