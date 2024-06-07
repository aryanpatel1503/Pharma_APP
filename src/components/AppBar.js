import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, IconButton, useTheme} from 'react-native-paper';

const AppBar = ({
  backBordered = false,
  navigation,
  title,
  subTitle,
  actionButton = true,
  buttonOneIcon = 'bell-outline',
  buttonTwoIcon = 'cart-outline',
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon="keyboard-backspace"
          size={22}
          onPress={() => navigation.goBack()}
          style={backBordered ? styles.backBtn : {}}
        />

        {title && (
          <Appbar.Content title={title} titleStyle={styles.centerTitle} />
        )}

        {actionButton && (
          <>
            <Appbar.Action icon={buttonOneIcon} />
            <Appbar.Action icon={buttonTwoIcon} />
          </>
        )}
      </Appbar.Header>
    </View>
  );
};

export default AppBar;

const createStyles = theme =>
  StyleSheet.create({
    container: {},
    header: {
      paddingHorizontal: 20,
    },
    backBtn: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#D6D6D6',
    },
    centerTitle: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      textAlign: 'center',
    },
  });
