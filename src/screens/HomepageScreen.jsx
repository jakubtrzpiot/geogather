import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EventTile from '../components/Homepage/EventTile';

export default function HomepageScreen(){
    const events=[
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
        {time:"9:00 PM", date:"01.01.2023" ,description:"test" ,iconName:""},
    ]
  return (
    <ScrollView style={{ flex: 1, marginTop:StatusBar.currentHeight, }}>
        {events.map(({time, date,description, iconName},i)=>(<EventTile key={i} time={time} date={date} description={description} iconName={iconName}/>))}
    </ScrollView>
  );
};