import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { Colors } from '../theme';
import { PrimaryButton } from '../components/Common/Button';
import { Sparkle, Heart } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.decorativeBlob} />

            <View style={styles.content}>
                {/* Image Grid */}
                <View style={styles.imageGrid}>
                    {/* Main Image */}
                    <View style={[styles.imageWrapper, styles.mainImageWrapper]}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop' }}
                            style={styles.image}
                        />
                        <View style={styles.heartBadge}>
                            <Heart size={20} color={Colors.primary} fill={Colors.primary} />
                        </View>
                    </View>

                    {/* Secondary Image */}
                    <View style={[styles.imageWrapper, styles.secondaryImageWrapper]}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop' }}
                            style={styles.image}
                        />
                    </View>

                    {/* Tertiary Image */}
                    <View style={[styles.imageWrapper, styles.tertiaryImageWrapper]}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1529139574466-a302c27e3844?q=80&w=1000&auto=format&fit=crop' }}
                            style={styles.image}
                        />
                        <View style={styles.chatBubble}>
                            <Text style={styles.chatText}>Love this! 😍</Text>
                        </View>
                    </View>

                    <Sparkle
                        size={32}
                        color="#fb7185"
                        fill="#ffe4e6"
                        style={styles.sparkle}
                    />
                </View>

                {/* Text Area */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Shop better,{'\n'}
                        <Text style={styles.titleItalic}>together.</Text>
                    </Text>

                    <Text style={styles.description}>
                        Stop guessing. Invite friends to vote and chat about your finds before you buy.
                    </Text>

                    {/* Pagination Indicators */}
                    <View style={styles.pagination}>
                        <View style={styles.paginationDotActive} />
                        <View style={styles.paginationDot} />
                        <View style={styles.paginationDot} />
                    </View>

                    <PrimaryButton
                        title="Get Started"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    decorativeBlob: {
        position: 'absolute',
        top: -50,
        left: -50,
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: '#ffe4e680', // rose-100 with opacity
        opacity: 0.5,
    },
    content: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    imageGrid: {
        height: 440,
        position: 'relative',
        width: '100%',
    },
    imageWrapper: {
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: Colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        position: 'absolute',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.9,
    },
    mainImageWrapper: {
        left: 0,
        top: 16,
        width: '65%',
        height: 320,
        transform: [{ rotate: '-2deg' }],
        zIndex: 10,
    },
    secondaryImageWrapper: {
        right: 0,
        top: 0,
        width: '45%',
        height: 200,
        transform: [{ rotate: '3deg' }],
        zIndex: 5,
    },
    tertiaryImageWrapper: {
        right: 16,
        bottom: 80,
        width: '40%',
        height: 160,
        transform: [{ rotate: '-1deg' }],
        zIndex: 15,
        borderWidth: 4,
        borderColor: Colors.white,
    },
    heartBadge: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 40,
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    chatBubble: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    chatText: {
        fontSize: 10,
        fontWeight: '500',
        color: Colors.text,
    },
    sparkle: {
        position: 'absolute',
        bottom: 96,
        left: 16,
        zIndex: 20,
    },
    textContainer: {
        marginTop: 'auto',
        marginBottom: 40,
    },
    title: {
        fontSize: 40,
        lineHeight: 44,
        fontWeight: '500',
        color: Colors.text,
        marginBottom: 16,
    },
    titleItalic: {
        color: Colors.primary,
        fontStyle: 'italic',
        fontWeight: '400',
    },
    description: {
        fontSize: 18,
        color: Colors.textSecondary,
        fontWeight: '300',
        lineHeight: 28,
        marginBottom: 32,
    },
    pagination: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 32,
    },
    paginationDotActive: {
        width: 32,
        height: 6,
        backgroundColor: Colors.text,
        borderRadius: 3,
    },
    paginationDot: {
        width: 6,
        height: 6,
        backgroundColor: Colors.border,
        borderRadius: 3,
    },
});
