# react-native-awesome-marquee
[![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/ryanyu104/react-native-awesome-marquee/ryanyu104/master/LICENSE.md)
[![npm downloads](https://img.shields.io/npm/dm/react-native-awesome-marquee.svg)](https://www.npmjs.com/package/react-native-awesome-marquee)


## Table of contents
- [Install](#install)
- [Usage](#usage)
- [Options](#options)

## Install

`yarn add  react-native-awesome-marquee@latest `

## Usage

```javascript

import React, { Component } from 'react';
import Marquee from "react-native-awesome-marquee"


class Example extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
       <Marquee
         duration={20000}
         height={100}
       >
         <View>
           <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
         </View>
          <View>
           <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
         </View>
          <View>
           <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Text>
         </View>
       </Marquee>
      </View>
    )
  }

}

```

### Options

Key | Type | Defalut | Description
------ | ---- |  ---- | ----
duration | number | 10000 | millseconds
height | number | 100 | wrapper component's height
children| element | null | Custom element
