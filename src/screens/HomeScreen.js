import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../theme';
import { Bell, Plus, Camera, ChevronRight } from 'lucide-react-native';
import { SmallButton } from '../components/Common/Button';
import { RoomCard } from '../components/Common/RoomCard';
import { BottomNav } from '../components/Common/BottomNav';

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' }}
                                style={styles.headerAvatar}
                            />
                            <View style={styles.onlineStatus} />
                        </View>
                        <View>
                            <Text style={styles.welcomeText}>Welcome back,</Text>
                            <Text style={styles.userName}>Sarah Jenkins</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Bell size={20} color={Colors.textSecondary} />
                    </TouchableOpacity>
                </View>

                {/* Banner */}
                <View style={styles.bannerContainer}>
                    <View style={styles.banner}>
                        <View style={styles.bannerContent}>
                            <Text style={styles.bannerTitle}>Can't decide?</Text>
                            <Text style={styles.bannerDescription}>Start a room, invite friends, and vote on your next look.</Text>
                            <SmallButton
                                title="New Decision"
                                icon={<Plus />}
                                onPress={() => { }}
                            />
                        </View>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=300&auto=format&fit=crop' }}
                            style={styles.bannerImage}
                        />
                    </View>
                </View>

                {/* Active Rooms Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Active Rooms</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.roomsScroll}>
                    <RoomCard
                        title="Weekend Trip"
                        time="Created 2h ago"
                        count={3}
                        images={['https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=400&auto=format&fit=crop']}
                        userAvatars={[
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
                            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
                        ]}
                    />
                    <RoomCard
                        title="Date Night Dress"
                        time="Created 5h ago"
                        count={2}
                        images={['https://images.unsplash.com/photo-1591369045357-96a29dfc297c?q=80&w=400&auto=format&fit=crop']}
                        userAvatars={[
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ]}
                    />
                </ScrollView>

                {/* Snap & Share Prompt */}
                <View style={styles.snapPromptContainer}>
                    <Text style={styles.sectionTitle}>Took & Share</Text>
                    <TouchableOpacity style={styles.snapCard}>
                        <View style={styles.cameraIconContainer}>
                            <Camera size={24} color={Colors.violet} />
                        </View>
                        <View style={styles.snapContent}>
                            <Text style={styles.snapTitle}>In a store right now?</Text>
                            <Text style={styles.snapDescription}>Snap a photo and ask friends instantly.</Text>
                        </View>
                        <ChevronRight size={20} color={Colors.textMuted} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <BottomNav activeTab="home" onTabPress={(tab) => {
                if (tab === 'rooms') navigation.navigate('DecisionRoom');
            }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        position: 'relative',
    },
    headerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    onlineStatus: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.success,
        borderWidth: 2,
        borderColor: Colors.background,
    },
    welcomeText: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    userName: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.text,
    },
    notificationBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerContainer: {
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    banner: {
        backgroundColor: Colors.secondary,
        borderRadius: 28,
        padding: 24,
        height: 180,
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'row',
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'center',
        zIndex: 10,
        maxWidth: '70%',
    },
    bannerTitle: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 8,
    },
    bannerDescription: {
        color: Colors.textMuted,
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 16,
        lineHeight: 20,
    },
    bannerImage: {
        position: 'absolute',
        right: -16,
        top: 0,
        height: '100%',
        width: 160,
        opacity: 0.8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.text,
    },
    seeAllText: {
        fontSize: 12,
        color: Colors.primary,
        fontWeight: '500',
    },
    roomsScroll: {
        paddingLeft: 24,
        marginBottom: 32,
    },
    snapPromptContainer: {
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    snapCard: {
        backgroundColor: Colors.violetLight,
        borderRadius: 28,
        padding: 4,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    cameraIconContainer: {
        width: 64,
        height: 64,
        backgroundColor: Colors.white,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    snapContent: {
        flex: 1,
    },
    snapTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.text,
    },
    snapDescription: {
        fontSize: 12,
        color: Colors.textSecondary,
        marginTop: 2,
    },
});
