import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Button, Searchbar } from 'react-native-paper';
const Seruff = require('../images/Seruff.png');
const products = [
    {
        id: '1',
        name: 'Propofol Injection Bp 1 W V 20 ML',
        description: 'Propofol Emulsion, Diprivan',
        price: 75,
        mrp: 65,
        gst: 12,
        qty: 30,
        srcCode: Seruff
    },
    {
        id: '2',
        name: 'Propofol Injection Bp 1 W V 20 ML',
        description: 'Propofol Emulsion, Diprivan',
        price: 75,
        mrp: 65,
        gst: 12,
        qty: 30,
        srcCode: Seruff
    },
    {
        id: '3',
        name: 'Propofol Injection Bp 1 W V 20 ML',
        description: 'Propofol Emulsion, Diprivan',
        price: 75,
        mrp: 65,
        gst: 12,
        qty: 30,
        srcCode: Seruff
    },
    {
        id: '4',
        name: 'Propofol Injection Bp 1 W V 20 ML',
        description: 'Propofol Emulsion, Diprivan',
        price: 75,
        mrp: 65,
        gst: 12,
        qty: 30,
        srcCode: Seruff
    },
];

const ProductCategory = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()
    const renderItem = ({ item }) => (

        <View style={styles.productContainer}>
            <Image source={item.srcCode} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName} numberOfLines={1} >{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <View style={styles.PriceView}>
                    <Text style={styles.productPrice}>Price: ₹{item.price} + {item.gst}% GST</Text>
                    <Text style={styles.productMrp}>MRP: ₹{item.mrp}</Text>
                </View>
                <Text style={styles.productQty}>Qty: {item.qty}</Text>



                <TouchableOpacity style={styles.addToCartButton} onPress={() => navigation.navigate('ProductDetails', { item })} >
                    <Button style={styles.addToCartText} textColor='#FFFFFF' size="sm">Add to Cart</Button>
                </TouchableOpacity>
            </View>
        </View>

    );

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                <Appbar.Content title="Gynecologist Medicine" style={styles.centerTitle} />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",

    },
    productContainer: {
        flexDirection: 'row',
        padding: 8,
        marginHorizontal: 12,
        marginVertical: 8,
        borderRadius: 12,
        borderBottomColor: '#ccc',
        backgroundColor: "#F9F9F9",
    },
    searchContainer: {
        backgroundColor: "#ffffff",
    },
    searchBar: {
        borderRadius: 20,
        marginHorizontal: 16,
    },
    productImage: {
        width: 130,
        height: 100,
        borderRadius: 12
    },
    productDetails: {
        paddingHorizontal: 8,
        flex: 1
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    productDescription: {
        fontSize: 12,
        color: '#777'
    },
    productPrice: {
        fontSize: 12,
        color: '#333'
    },
    productMrp: {
        fontSize: 12,
        color: '#333'
    },
    productQty: {
        fontSize: 12,
        color: '#333'
    },
    addToCartButton: {
        backgroundColor: '#0ec5c1',
        borderRadius: 5,
        marginTop: 5,
        width: 110
    },
    addToCartText: {
        color: "#FFFFFF",
    },
    PriceView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default ProductCategory;
