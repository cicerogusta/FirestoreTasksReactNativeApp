import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import googleImage from "../../assets/images/google.png"
import appleImage from "../../assets/images/apple.png"
import  { signIn, checkLoggedUser } from "../../repository/firebaserepository";
import { useNavigation } from '@react-navigation/native';



export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        if(checkLoggedUser){
            navigation.navigate('Task')
        }
        
    }, [])
    const handleLogIn = async () => {
        try{
            await signIn(email, senha)
            navigation.navigate('Task')

        }catch(error){
            alert(error)

        }
      };
    
    return(
        <View style={styles.container}>

            <Text style={styles.headerText}> Login</Text>
            <Text style={styles.headerText}>Gerencie suas tarefas</Text>

           <View style={styles.formLogin}>
           <TextInput inputMode="email" placeholder="Email" style={styles.input} onChangeText={(valorEmail) =>{
            setEmail(valorEmail)
           }}/>

<           TextInput inputMode="text" placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(valorSenha)=>{setSenha(valorSenha)}}/>

            <TouchableOpacity style={styles.botao} onPress={handleLogIn}>

            <Text style={styles.textoBotao}>Entrar</Text>

            </TouchableOpacity>
           

            <TouchableOpacity style={styles.botao}>

            <Text style={styles.textoBotao}>Registrar</Text>

            </TouchableOpacity>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:15}}>
                <TouchableOpacity style={{height:60, borderWidth:1, borderRadius:15, padding: 8, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%', marginTop:64, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={styles.div}></View> 
                <TouchableOpacity>
                <Image source={googleImage} style={{width:80, height:80}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={appleImage} style={{width:80, height:80}}/>
                </TouchableOpacity>
                <View style={styles.div}></View>
                
            </View>

           

           </View>


        </View>
    )
}