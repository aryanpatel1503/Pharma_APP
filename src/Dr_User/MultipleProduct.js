import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Appbar, IconButton, Searchbar } from 'react-native-paper';

const MultipleProduct = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation(); // Hook for navigation

    const handlePress = () => {
        navigation.navigate('ProductCategory'); // Navigate to the Details screen
    };

    const products = [
        {
            id: '1',
            title: 'DIPRIVAN injection',
            subtitle: 'Fresenious Propoven',
            buttonText: 'Diprivan',
        },
        {
            id: '2',
            title: 'Propofol Emulsion Injection',
            subtitle: 'Propofol Emulsion',
            buttonText: 'Propifol',
        },
        {
            id: '3',
            title: "Mayoprofol Injectables Emulsion",
            subtitle: "propofol",
            buttonText: "Mayoprofol"
        },
        {
            id: '4',
            title: "Propofol Emulsion Injection",
            subtitle: "Propofol Emulsion",
            buttonText: "Propifol"
        },
        {
            id: '5',
            title: "DIPRIVAN injection",
            subtitle: "Fresenious Propoven",
            buttonText: "Diprivan"
        }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={handlePress}>
            <View>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productSubtitle}>{item.subtitle}</Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{item.buttonText}</Text>
                </View>
            </View>
            <View style={styles.viewContainer}>
                <IconButton
                    icon="chevron-right"
                    size={24}
                    onPress={() => {
                        // Handle button press
                    }}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                <Appbar.Content title="Gynecologist Medicine" style={styles.centerTitle} />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchContainer}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={styles.searchBar}
                    />
                </View>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFFFFF",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        padding: 4,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    productContainer: {
        backgroundColor: '#F8F8F8',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 4,
        color: "#000"
    },
    productSubtitle: {
        color: '#666',
        marginBottom: 8,
    },
    buttonContainer: {
        backgroundColor: "#7EDEDC",
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
    },
    buttonText: {
        color: '#000000',
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 8
    },
    flatListContainer: {
        paddingBottom: 16,
    },
    centerTitle: {
        fontSize: 8
    },
    searchBar: {
        borderRadius: 20,
        backgroundColor: "#F3F6F6",
    }
});

export default MultipleProduct;
