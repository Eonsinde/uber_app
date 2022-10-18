import { View, Text } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { Icon } from "react-native-elements";
import tw from 'twrnc'


const ScreenHeader = ({ bgColor, textColor, icon, navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={{ height: 65, ...tw.style(`${bgColor ? bgColor : 'bg-white'}`) }}>   
            <View style={tw`flex-row items-center`}>
                {
                    icon
                    ?
                    <icon />
                    :
                    <Icon
                        raised
                        name='chevron-back-outline'
                        type='ionicon'
                        color='#111'
                        containerStyle={{
                            backgroundColor: 'transparent',
                            shadowColor: 'transparent',
                        }}
                        onPress={back ? () => navigation.goBack() : undefined} 
                    />
                }
                <Text style={tw`${textColor ? textColor : 'text-black'} font-bold text-lg tracking-wide`}>{title}</Text>
            </View>
        </View>
    );
};

export default ScreenHeader;