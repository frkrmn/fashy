import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography } from '../../theme';
import { Search as SearchIcon, MessageCircle } from 'lucide-react-native';

const CHATS = [
    { id: 1, name: 'Jessica', message: 'That blazer is perfect!', time: '2m ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', unread: true },
    { id: 2, name: 'Summer Trip Group', message: 'Mark: I voted Yes', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=400&auto=format&fit=crop', unread: false },
];

export const ChatListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.title}>Messages</Text>
                <TouchableOpacity style={styles.headerBtn}>
                    <SearchIcon size={20} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {CHATS.map((chat) => (
                    <TouchableOpacity key={chat.id} style={styles.chatCard}>
                        <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                        <View style={styles.chatInfo}>
                            <View style={styles.nameRow}>
                                <Text style={styles.name}>{chat.name}</Text>
                                <Text style={styles.time}>{chat.time}</Text>
                            </View>
                            <Text style={[styles.message, chat.unread && styles.unreadMessage]} numberOfLines={1}>
                                {chat.message}
                            </Text>
                        </View>
                        {chat.unread && <View style={styles.unreadDot} />}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    title: { fontSize: 24, fontFamily: Typography.semiBold, color: Colors.text },
    headerBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.background, alignItems: 'center', justifyCenter: 'center' },
    scrollContent: { paddingHorizontal: 24, paddingTop: 8 },
    chatCard: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Colors.border },
    avatar: { width: 56, height: 56, borderRadius: 28 },
    chatInfo: { flex: 1 },
    nameRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    name: { fontSize: 16, fontFamily: Typography.medium, color: Colors.text },
    time: { fontSize: 12, color: Colors.textMuted },
    message: { fontSize: 14, color: Colors.textSecondary },
    unreadMessage: { color: Colors.text, fontFamily: Typography.medium },
    unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary },
});
