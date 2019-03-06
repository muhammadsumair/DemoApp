import React from 'react';
import { Dimensions, Text, View, Image, Platform} from 'react-native';
import {
    LineChart
} from 'react-native-chart-kit'

const chartConfig = {
    backgroundGradientFrom: '#3c3e4d',
    backgroundGradientTo: '#3c3e4d',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};

const screenWidth = Dimensions.get('window').width;
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        data: [ 60, 80, 70, 84, 80 ],
        color: (opacity = 1) => `rgba(300, 300, 300, ${opacity})`,
        strokeWidth: 2
    }]
};

const Chart = () => {
    return (
        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
            />
        </View>
    );
};

export default Chart;
