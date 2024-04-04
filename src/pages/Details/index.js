import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import database from "../../config/firebaseconfig";
import React, {useState} from "react";

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({
            description: description
        }).then(r => '')
        navigation.navigate("Task")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}></Text>
            <TextInput style={styles.inputText}
                       placeholder={"Ex: estudar javascript"}
                       onChangeText={setDescriptionEdit}
                       value={descriptionEdit}/>

            <TouchableOpacity style={styles.buttonNewTask} onPress={() => {editTask(descriptionEdit, idTask)}}>
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}
