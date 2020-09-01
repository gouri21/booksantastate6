import React,{Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import{createDrawerNavigator} from 'react-navigation-drawer'
import{AppTabNavigator} from './apptabnavigator'
import CustomSidebar from './customsidebar'
import Settingscreen from '../screens/settingscreen'
export const appDrawernavigator = createDrawerNavigator({
    home:{screen:AppTabNavigator},
    settings:{screen:Settingscreen},

},
{
    contentComponent:CustomSidebar
},
{
    initialRouteName:'home'
},

)

