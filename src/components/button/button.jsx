import { Alert, Text, TouchableOpacity } from "react-native"


function Button (props){
    
    function TesteClick(){
        Alert.alert("Clique");
    }

    return <TouchableOpacity onPress={TesteClick}>
        <Text style={styles}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button;