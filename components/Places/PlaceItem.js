import { Pressable, View,Text,Image, StyleSheet } from "react-native"

function PlacesItem({place}){
   return (
    <Pressable onPress={onselect}>
        <Image source={{ uri:place.imageUri }} />
        <View>
            <Text>TITLE</Text>
            <Text>ADDRESS</Text>
        </View>
    </Pressable>
   );
}

export default PlacesItem

const styles =  StyleSheet.create({

});