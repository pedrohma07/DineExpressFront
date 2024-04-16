import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#E2E1E5',
        borderWidth: 1,
        marginBottom: 16,
        width: "80%",
        paddingLeft: 8,
        borderRadius: 5,

    },
    label:{
        fontSize: 14,
        color: "#777676",
        marginBottom: 8,
        width: "80%",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    button: {
        backgroundColor: "#EA5455",
        color: "#FFFFFF",
        padding: 9,
        width: "80%",
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 16,
    },
    logo: {
        objectFit: 'contain',
        width: "80%",
        marginTop: 60,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16, 
        marginTop: 16
    },
    linkText: {
        color: "#849DF5",
        textDecorationLine: 'underline',
    } 
});