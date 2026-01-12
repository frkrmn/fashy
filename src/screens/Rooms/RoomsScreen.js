import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography } from '../../theme';
import { RoomCard } from '../../components/Common/RoomCard';
import { Plus, Filter } from 'lucide-react-native';

export const RoomsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.title}>Your Rooms</Text>
                <TouchableOpacity style={styles.filterBtn}>
                    <Filter size={20} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.grid}>
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
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.fab}>
                <Plus size={24} color={Colors.white} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    title: {
        fontSize: 28,
        fontFamily: Typography.semiBold,
        color: Colors.text,
    },
    filterBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 100,
    },
    grid: {
        gap: 16,
    },
    fab: {
        position: 'absolute',
        bottom: 32,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
});
