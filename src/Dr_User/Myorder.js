import React, { useState } from 'react'
import { Button, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Appbar, IconButton, Text } from 'react-native-paper'

const Seruff = require('../images/Seruff.png');
const Myorder = (props) => {
    const [cart, setCart] = useState([
        { id: '1', name: 'Propofol Injection Bp 1 W V 20', price: 335, quantity: 1, srcCode: Seruff, description: "Propofol Emulsion, Diprivan" },
        // { id: '2', name: 'Propofol Injection Bp 1 W V 20', price: 335, quantity: 1 },
        // { id: '3', name: 'Propofol Injection Bp 1 W V 20', price: 335, quantity: 1 },
    ]);


    const orderTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemDiscount = 25;
    const total = orderTotal - itemDiscount;

    const renderItem = ({ item }) => (
        <View style={styles.productContainer} >
            <View style={styles.imgcontainer}>
                <Image source={item.srcCode} style={styles.productImage} />
            </View>
            <View style={styles.productDetails}>
                <View style={styles.childcontainer}>
                    <View >
                        <Text style={styles.productName} >{item.name}</Text>
                        <Text style={styles.productDescription}>{item.description}</Text>
                    </View>
                    <View>
                        <IconButton
                            icon="delete-outline"
                            size={18}
                        />
                    </View>
                </View>
                <View style={styles.cartContainer}>
                    <View>
                        <Text style={styles.productPrice}>Price: ₹{item.price}</Text>
                        <Text style={styles.productQty}>Qty: {item.qty}</Text>
                    </View>
                    <View style={styles.inccontainer}>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>−</Text>
                        </TouchableOpacity>
                        <View style={styles.countContainer}>
                            <Text style={styles.countText}>1</Text>
                        </View>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
    return (
        <View style={styles.container} >
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                <Appbar.Content title="Your cart" style={styles.centerTitle} />
                <Appbar.Action icon="cart-outline" />
            </Appbar.Header>

            <View style={styles.sectionContainer}>
                <Text>3 items into cart</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#0EC5C1" }}>+ Add More</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Myorder')}>
                <Text style={styles.buttonText}>Place order @ 900</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    centerTitle: {
        justifyContent: "center",
        textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    appbar: {
        backgroundColor: "#fff"
    },

    container: {
        flex: 1,
        backgroundColor: "#ffffff",

    },
    productContainer: {
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 8,
        borderBottomColor: '#ccc',
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 14,
        paddingVertical: 8
    },
    searchContainer: {
        backgroundColor: "#ffffff",
    },
    searchBar: {
        borderRadius: 20,
        marginHorizontal: 16,
        backgroundColor: "#F3F6F6",
    },
    productImage: {
        width: 95,
        height: 85,
        borderRadius: 12
    },
    productDetails: {
        paddingHorizontal: 14,
        flex: 1,
        flexDirection: "column"

    },
    productName: {
        fontSize: 13,
        fontWeight: '700',
        fontFamily: "Comfortaa"
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
        marginTop: 3,
        width: 110,
        paddingHorizontal: 18,
        paddingVertical: 7,
    },
    addToCartText: {
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    PriceView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 12
    },
    button: {
        backgroundColor: '#00BCD4',
        padding: 12,
        marginHorizontal: 60,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 158,
    },
    inccontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0f7f9',
        borderRadius: 25,
        padding: 2,
    },
    button1: {
        backgroundColor: '#00bcd4',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    countContainer: {
        marginHorizontal: 16,
    },
    countText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    childcontainer: {
        flexDirection: "row"
    },
    cartContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }

})

export default Myorder