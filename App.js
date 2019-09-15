import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RadioForm from 'react-native-simple-radio-button';
import axios from 'axios';
const data = require('./src/dummy');
const myd = {
  "Messages":[
    {
      "From": {
        "Email": "frendifdp@gmail.com",
        "Name": "Frendi"
      },
      "To": [
        {
          "Email": "frendifdp@gmail.com",
          "Name": "Frendi"
        }
      ],
      "Subject": "My first Mailjet email",
      "TextPart": "Greetings from Mailjet.",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: [],
    };
  }

  
  sendMail = () =>{
    axios.post('https://api.mailjet.com/v3.1/send', myd, {
      auth: {
        username: 'dfa530c6f048dac5baa83db16db83789',
        password: '7644298107c7a2abfefbe72e50dd059f'
      }
    }).then(function(response) {
      console.warn('success');
    }).catch(function(error) {
      console.warn('fail', error);
    });
  }

  render() {
    console.warn(this.state.answer);
    return (
      <Fragment>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>mySurvey</Text>
                <Text style={styles.sectionTitle}>Nama</Text>
                <TextInput
                  style={{borderWidth: 1, borderColor: 'black'}}></TextInput>
                {data.data.map((item, key) => (
                  <View>
                    <Text style={styles.sectionDescription}>
                      {key + 1}. {item.question}
                    </Text>
                    <RadioForm
                      radio_props={item.answer}
                      initial={0}
                      onPress={value => {
                        this.state.answer[key] = value;
                      }}
                      labelStyle={{fontSize: 15}}
                    />
                  </View>
                ))}
              </View>
              <View>
              <TouchableOpacity
                onPress={
                  this.sendMail
                }>
                <Text>push</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
