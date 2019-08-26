import React, { Component } from 'react';

import {
    ScrollView,
    View,
    Text,
    Picker,
    Image,
    Button,
    TextInput,
} from 'react-native';
import { thisExpression } from '@babel/types';

class HashtagSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //my access token is provided, fill in yours if necessary
            access_token: '1091270867.7df4ca6.fe14f969163848d0ac9a2c1a688c1173',
            hashtag: null,
            hashtagList: ['Choose...'],
            displayImages: [],
            inputHashtag: '',
        };
    }

    //this fetches images from an account based off the access_token
    handleDisplayImages = () => {
        fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.state.access_token}`)
            .then(res => res.json())
            .then(res => {
                var images = [];
                //depending on the state of hashtag, images will be shown accordingly
                if (this.state.hashtag == null || this.state.hashtag === 'Choose...') {
                    //display all images
                    for (var i = 0; i < res.data.length; i++) {
                        images.push(res.data[i].images.standard_resolution.url);
                    }
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].tags.indexOf(this.state.hashtag) > -1) {
                            images.push(res.data[i].images.standard_resolution.url);
                        }
                    }
                }
                this.setState({ displayImages: images });
            });
    }

    addHashtagToList = () => {
        //prevent adding bad/repetitive data to hashtagList
        if (this.state.inputHashtag !== null && this.state.inputHashtag !== '' && this.state.hashtagList.indexOf(this.state.inputHashtag) == -1) {
            var newList = [...this.state.hashtagList, this.state.inputHashtag];
            this.setState({ hashtagList: newList, hashtag: this.state.inputHashtag });
            this.handleDisplayImages();
        }
    }

    componentDidMount() {
        this.handleDisplayImages();
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <TextInput
                        onChangeText={(inputHashtag) => this.setState({ inputHashtag })}
                        value={this.state.inputHashtag} placeholder='Enter a hashtag...'
                    />
                    <Button title='View Images With Hashtag' onPress={this.addHashtagToList}></Button>
                    <Picker selectedValue={this.state.hashtag} onValueChange={(value) => {
                        //upon a picker selection, run all of this
                        this.state.hashtag = value;
                        this.setState({ hashtag: value });
                        this.handleDisplayImages();
                    }}>
                        {this.state.hashtagList.map((name, index) => <Picker.Item key={index} label={name} value={name} />)}
                    </Picker>
                    {this.state.displayImages.map(function (name, index) {
                        return <Image key={index} source={{ uri: name }} style={{ width: 300, height: 300 }} />
                    })}
                </ScrollView>
            </View>
        );

    }
}

export default HashtagSelect;
