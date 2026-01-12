import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, Grid, ScanBarcode, MessageSquare, User } from 'lucide-react-native';
import { Colors } from '../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BottomNav = ({ activeTab, onTabPress }) => {
    const insets = useSafeAreaInsets();

    const tabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'rooms', label: 'Rooms', icon: Grid },
        { id: 'scan', label: '', icon: ScanBarcode, isSpecial: true },
        { id: 'chat', label: 'Chat', icon: MessageSquare },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 16) }]}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={styles.tab}
                    onPress={() => onTabPress && onTabPress(tab.id)}
                    activeOpacity={0.7}
                >
                    {tab.isSpecial ? (
                        <View style={styles.specialIconContainer}>
                            <tab.icon size={20} color={Colors.white} />
                        </View>
                    ) : (
                        <>
                            <tab.icon
                                size={24}
                                color={activeTab === tab.id ? Colors.text : Colors.textMuted}
                            />
                            <Text
                                style={[
                                    styles.label,
                                    { color: activeTab === tab.id ? Colors.text : Colors.textMuted }
                                ]}
                            >
                                {tab.label}
                            </Text>
                        </>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    label: {
        fontSize: 10,
        fontWeight: '500',
    },
    specialIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -32,
        borderWidth: 4,
        borderColor: Colors.background,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
});
