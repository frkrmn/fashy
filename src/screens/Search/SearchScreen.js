import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography } from '../../theme';
import { Search as SearchIcon, Scan, History, TrendingUp } from 'lucide-react-native';

const RECENT_SEARCHES = ['Zara linen blazer', 'Summer dresses', 'Nike sneakers'];
const TRENDING = ['Minimalist jewelry', 'Wide leg trousers', 'Oversized shirts'];

export const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <SearchIcon size={20} color={Colors.textMuted} />
                    <TextInput
                        placeholder="Search brands or items"
                        style={styles.input}
                        placeholderTextColor={Colors.textMuted}
                    />
                    <TouchableOpacity>
                        <Scan size={20} color={Colors.text} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <History size={16} color={Colors.textMuted} />
                        <Text style={styles.sectionTitle}>Recent Searches</Text>
                    </View>
                    <View style={styles.tagCloud}>
                        {RECENT_SEARCHES.map((item, i) => (
                            <TouchableOpacity key={i} style={styles.tag}>
                                <Text style={styles.tagText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <TrendingUp size={16} color={Colors.textMuted} />
                        <Text style={styles.sectionTitle}>Trending Now</Text>
                    </View>
                    {TRENDING.map((item, i) => (
                        <TouchableOpacity key={i} style={styles.trendingItem}>
                            <Text style={styles.trendingText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.white },
    header: { padding: 24, borderBottomWidth: 1, borderBottomColor: Colors.border },
    searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, borderRadius: 16, paddingHorizontal: 16, height: 50, gap: 12 },
    input: { flex: 1, fontSize: 16, fontFamily: Typography.regular, color: Colors.text },
    scrollContent: { padding: 24 },
    section: { marginBottom: 32 },
    sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
    sectionTitle: { fontSize: 14, fontFamily: Typography.semiBold, color: Colors.textMuted, textTransform: 'uppercase', letterSpacing: 1 },
    tagCloud: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    tag: { backgroundColor: Colors.background, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
    tagText: { fontSize: 14, color: Colors.textSecondary },
    trendingItem: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: Colors.border },
    trendingText: { fontSize: 16, color: Colors.text, fontFamily: Typography.medium },
});
