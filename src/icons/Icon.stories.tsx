import React from 'react';

import { IconColor } from "./IconColor";
import { ProfileIcon } from "./ProfileIcon";
import { CityIcon } from "./CityIcon";
import { GuideIcon } from "./GuideIcon";
import { HotelIcon } from "./HotelIcon";
import { RestaurantIcon } from "./RestaurantIcon";
import { WeatherIcon } from "./WeatherIcon";
import { TimeIcon } from "./TimeIcon";
import { PlusIcon } from "./PlusIcon";
import { MinusIcon } from "./MinusIcon";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { SearchIcon } from "./SearchIcon";

export default {
  title: 'Icons',
  argTypes: {
    color: {
      options: Object.values(IconColor),
      control: { type: 'select' }
    }
  }
};


export const Profile = (args) => <ProfileIcon {...args} />;
export const City = (args) => <CityIcon {...args} />;
export const Guide = (args) => <GuideIcon {...args} />;
export const Hotel = (args) => <HotelIcon {...args} />;
export const Restaurant = (args) => <RestaurantIcon {...args} />;
export const Weather = (args) => <WeatherIcon {...args} />;
export const Time = (args) => <TimeIcon {...args} />;
export const Plus = (args) => <PlusIcon {...args} />;
export const Minus = (args) => <MinusIcon {...args} />;
export const ArrowDown = (args) => <ArrowDownIcon {...args} />;
export const Search = (args) => <SearchIcon {...args} />;
