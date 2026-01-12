import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography } from '../../theme';
import { Settings, CreditCard, Heart, ShoppingBag, ChevronRight, LogOut } from 'lucide-react-native';

const MENU_ITEMS = [
    { id: 'orders', label: 'My Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
];

export const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editBadge}>
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>Sarah Jenkins</Text>
                    <Text style={styles.email}>sarah.j@example.com</Text>
                </View>

                <View style={styles.menuContainer}>
                    {MENU_ITEMS.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.menuItem}>
                            <View style={styles.menuIconWrapper}>
                                <item.icon size={20} color={Colors.textSecondary} />
                            </View>
                            <Text style={styles.menuLabel}>{item.label}</Text>
                            <ChevronRight size={18} color={Colors.textMuted} />
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
                        <View style={[styles.menuIconWrapper, styles.logoutIcon]}>
                            <LogOut size={20} color={Colors.error} />
                        </View>
                        <Text style={[styles.menuLabel, styles.logoutLabel]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scrollContent: { paddingBottom: 40 },
    profileHeader: { alignItems: 'center', paddingVertical: 40, backgroundColor: Colors.white, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 },
    avatarWrapper: { position: 'relative', marginBottom: 16 },
    avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: Colors.background },
    editBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: Colors.secondary, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
    editText: { color: Colors.white, fontSize: 10, fontFamily: Typography.medium },
    name: { fontSize: 22, fontFamily: Typography.semiBold, color: Colors.text, marginBottom: 4 },
    email: { fontSize: 14, color: Colors.textMuted },
    menuContainer: { paddingHorizontal: 24, marginTop: 32 },
    menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, padding: 16, borderRadius: 20, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
    menuIconWrapper: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.background, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
    menuLabel: { flex: 1, fontSize: 16, fontFamily: Typography.medium, color: Colors.text },
    logoutItem: { marginTop: 20 },
    logoutIcon: { backgroundColor: '#fee2e2' },
    logoutLabel: { color: Colors.error },
});
