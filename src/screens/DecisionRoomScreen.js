import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../theme';
import { ChevronLeft, Share2, X, Heart, MessageCircle, Star, ExternalLink } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export const DecisionRoomScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            {/* Header Overlay */}
            <SafeAreaView style={styles.headerOverlay}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeft size={20} color={Colors.text} />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerSubtitle}>VOTING</Text>
                        <Text style={styles.headerTitle}>Summer Trip</Text>
                    </View>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Share2 size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Product Showcase */}
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?q=80&w=800&auto=format&fit=crop' }}
                        style={styles.productImage}
                    />

                    {/* Action Buttons on Image */}
                    <View style={styles.productActions}>
                        <TouchableOpacity style={styles.actionBtnSmall}>
                            <X size={24} color={Colors.textMuted} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtnLarge}>
                            <Heart size={28} color={Colors.white} fill={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtnSmall}>
                            <MessageCircle size={24} color={Colors.textMuted} />
                        </TouchableOpacity>
                    </View>

                    {/* Price Tag */}
                    <View style={styles.priceTag}>
                        <Text style={styles.oldPrice}>$129.00</Text>
                        <Text style={styles.currentPrice}>$89.00</Text>
                    </View>
                </View>

                {/* Product Info */}
                <View style={styles.infoContainer}>
                    <View style={styles.brandRow}>
                        <View style={styles.brandBadge}>
                            <Text style={styles.brandText}>ZARA</Text>
                        </View>
                        <View style={styles.ratingRow}>
                            <Star size={12} color={Colors.warning} fill={Colors.warning} />
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                    </View>
                    <Text style={styles.productTitle}>Oversized Linen Blazer</Text>

                    {/* Voting Progress */}
                    <View style={styles.verdictCard}>
                        <View style={styles.verdictHeader}>
                            <Text style={styles.verdictTitle}>Group Verdict</Text>
                            <View style={styles.topPickBadge}>
                                <Text style={styles.topPickText}>Top Pick</Text>
                            </View>
                        </View>

                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: '75%' }]} />
                        </View>

                        <View style={styles.votersRow}>
                            <View style={styles.voterAvatars}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' }}
                                    style={styles.voterAvatar}
                                />
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }}
                                    style={[styles.voterAvatar, { marginLeft: -8 }]}
                                />
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }}
                                    style={[styles.voterAvatar, { marginLeft: -8, opacity: 0.5 }]}
                                />
                            </View>
                            <Text style={styles.voterStatus}>3/4 voted</Text>
                        </View>
                    </View>

                    {/* Discussion */}
                    <View style={styles.discussionSection}>
                        <Text style={styles.discussionTitle}>Discussion</Text>
                        <View style={styles.chatMessage}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' }}
                                style={styles.chatAvatar}
                            />
                            <View style={styles.chatBubble}>
                                <Text style={styles.chatText}>The color matches your shoes perfectly! But is linen okay for evening?</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Sticky Bottom Actions */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.compareBtn}>
                    <Text style={styles.compareBtnText}>Compare</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyBtn}>
                    <Text style={styles.buyBtnText}>Buy on Brand Store</Text>
                    <ExternalLink size={16} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    headerBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    headerTitleContainer: {
        alignItems: 'center',
    },
    headerSubtitle: {
        fontSize: 10,
        fontWeight: '600',
        color: Colors.textMuted,
        letterSpacing: 1.5,
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text,
    },
    scrollContent: {
        paddingBottom: 120,
    },
    productContainer: {
        width: '100%',
        height: 460,
        backgroundColor: Colors.background,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 24,
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productActions: {
        position: 'absolute',
        bottom: 32,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    actionBtnSmall: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    actionBtnLarge: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 8,
    },
    priceTag: {
        position: 'absolute',
        top: 100,
        right: 24,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    oldPrice: {
        fontSize: 12,
        color: Colors.textMuted,
        textDecorationLine: 'line-through',
    },
    currentPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.primary,
    },
    infoContainer: {
        paddingHorizontal: 24,
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    brandBadge: {
        backgroundColor: Colors.background,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    brandText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.textSecondary,
        letterSpacing: 0.5,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.textSecondary,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.text,
        marginBottom: 24,
    },
    verdictCard: {
        backgroundColor: Colors.background,
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.border,
        marginBottom: 24,
    },
    verdictHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    verdictTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.text,
    },
    topPickBadge: {
        backgroundColor: '#ecfdf5',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    topPickText: {
        fontSize: 10,
        fontWeight: '600',
        color: Colors.success,
    },
    progressBarBg: {
        height: 12,
        backgroundColor: Colors.border,
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 16,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 6,
    },
    votersRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    voterAvatars: {
        flexDirection: 'row',
    },
    voterAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    voterStatus: {
        fontSize: 12,
        color: Colors.textSecondary,
        fontWeight: '500',
    },
    discussionSection: {
        marginBottom: 16,
    },
    discussionTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.text,
        marginBottom: 12,
    },
    chatMessage: {
        flexDirection: 'row',
        gap: 12,
    },
    chatAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    chatBubble: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 12,
        borderRadius: 16,
        borderTopLeftRadius: 0,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    chatText: {
        fontSize: 12,
        color: Colors.textSecondary,
        lineHeight: 18,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        padding: 20,
        paddingBottom: 32,
        flexDirection: 'row',
        gap: 12,
        zIndex: 30,
    },
    compareBtn: {
        flex: 1,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    compareBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.text,
    },
    buyBtn: {
        flex: 2,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
    buyBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.white,
    },
});
