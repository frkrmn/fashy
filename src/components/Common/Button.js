import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme';
import { ArrowRight } from 'lucide-react-native';

export const PrimaryButton = ({ title, onPress, icon }) => {
    return (
        <TouchableOpacity
            style={styles.primaryButton}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={styles.primaryButtonText}>{title}</Text>
            <View style={styles.iconContainer}>
                {icon || <ArrowRight size={20} color={Colors.secondary} />}
            </View>
        </TouchableOpacity>
    );
};

export const SmallButton = ({ title, onPress, icon, variant = 'primary' }) => {
    const isSecondary = variant === 'secondary';
    return (
        <TouchableOpacity
            style={[
                styles.smallButton,
                isSecondary ? styles.smallButtonSecondary : styles.smallButtonPrimary
            ]}
            onPress={onPress}
        >
            {icon && React.cloneElement(icon, { size: 16, color: isSecondary ? Colors.white : Colors.secondary })}
            <Text style={[
                styles.smallButtonText,
                { color: isSecondary ? Colors.white : Colors.secondary }
            ]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: Colors.secondary,
        height: 56,
        borderRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 8,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    primaryButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '500',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        gap: 8,
    },
    smallButtonPrimary: {
        backgroundColor: Colors.white,
    },
    smallButtonSecondary: {
        backgroundColor: Colors.secondary,
    },
    smallButtonText: {
        fontSize: 14,
        fontWeight: '500',
    },
});
