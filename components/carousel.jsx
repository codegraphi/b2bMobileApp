import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

const Carousel = () => {
    const flatlistRef = useRef();
    const { width: screenWidth } = Dimensions.get('window'); // Get the width of the screen
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselData = [
        { id: '01', image: require('../assets/carousel/1.png') },
        { id: '02', image: require('../assets/carousel/2.png') },
        { id: '03', image: require('../assets/carousel/3.png') },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % carouselData.length;
            flatlistRef.current.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setActiveIndex(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const getItemLayout = (data, index) => ({
        length: screenWidth, // Set item length to screen width
        offset: screenWidth * index,
        index,
    });

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.floor(scrollPosition / screenWidth);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={carouselData}
                ref={flatlistRef}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                getItemLayout={getItemLayout}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                snapToInterval={screenWidth} // Snap to the full screen width
                decelerationRate="fast"
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContent: {
        justifyContent: 'center',
    },
    imageContainer: {
        width: Dimensions.get('window').width - 10, // Use full width of the screen for each item
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 170,
        width: '100%',
        borderRadius: 10,
    },
});

export default Carousel;
