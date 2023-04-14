import { FlatList, View, StyleSheet,Text} from "react-native";
import PlacesItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

function PlacesList({places}){
  if(!places || places.length === 0){
    return(
        <View style={styles.fallBackContaniner}>
            <Text style={styles.fallbackText}>
            No place added yet! -- start adding some!  
            </Text>
        </View>
    )
  }
    
return (
<FlatList
 data ={places} 
 keyExtractor = {(item) => item.id}
  renderItem={({item}) => <PlacesItem  place ={item}/>}
/>
);
}
export default PlacesList;

const styles = StyleSheet.create({
    fallBackContaniner:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    fallbackText:{
      fontSize: 16,
      color: Colors.primary200
    }
})