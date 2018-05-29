import React from 'react';
import { StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import  YouTube  from 'react-native-youtube'

export default class YouTubeVideo extends React.Component {
    static navigationOptions = {
        headerTitle: 'YouTube',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <YouTube
                    videoId={this.props.navigation.state.params.youtubeId}   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey={'AIzaSyBSnPUz9Iuu7EUfD8D3IQvwYpR4-k6K3uI'}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})











