import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme';

export const RoomCard = ({ title, time, count, images, userAvatars }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <View style={styles.avatarGroup}>
                {userAvatars.map((src, index) => (
                    <Image
                        key={index}
                        source={{ uri: src }}
                        style={[styles.avatar, { marginLeft: index === 0 ? 0 : -8, zIndex: 10 - index }]}
                    />
                ))}
                {count > 2 && (
                    <View style={[styles.avatarPlaceholder, { marginLeft: -8, zIndex: 0 }]}>
                        <Text style={styles.placeholderText}>+{count - 2}</Text>
                    </View>
                )}
            </View>

            <View style={styles.imageContainer}>
                <Image source={{ uri: images[0] }} style={styles.mainImage} />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{count} items</Text>
                </View>
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 220,
        backgroundColor: Colors.white,
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        marginRight: 16,
    },
    avatarGroup: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    avatarPlaceholder: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        fontSize: 10,
        color: Colors.textSecondary,
        fontWeight: '500',
    },
    imageContainer: {
        height: 120,
        borderRadius: 16,
        backgroundColor: Colors.background,
        marginBottom: 12,
        overflow: 'hidden',
        position: 'relative',
    },
    mainImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    badge: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -12 }],
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        backdropFilter: 'blur(10px)', // Note: backdropFilter doesn't work in React Native without specialized libs, but we can use semi-transparent bg
    },
    badgeText: {
        color: Colors.white,
        fontSize: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text,
        marginBottom: 4,
    },
    time: {
        fontSize: 12,
        color: Colors.textMuted,
    },
});
