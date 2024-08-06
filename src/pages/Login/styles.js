import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center'
       
    },

    headerText:{
        marginTop:50,
        fontSize:32
    },

    input:{
        width:'75%',
        height:40,
        backgroundColor:'#FFF',
        borderRadius:8,
        borderWidth:1,
        borderColor:'black',
        marginVertical:16,
        padding: 8
    },
    botao:{
        width:150,
        height:40,
        borderWidth:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginBottom:8


    },
    textoBotao:{
        fontSize:18,
        color:'#FFF'
    },

    formLogin:{
        width:'100%', justifyContent:'center', alignItems:'center'
    },

    div:{
        width:'25%',
        height:2,
        backgroundColor:'black',
        marginTop:40
    }

})

export default styles
