"use client"

import React from 'react';
import {Button as ButtonAria} from 'react-aria-components';
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    icon?:IconType | null | undefined;
};

const Button:React.FC<ButtonProps> = ({
    label,
    icon:Icon
}) => {
  return <ButtonAria 
  className=""
  >
    {Icon && <Icon />}
    <span>{label}</span>
  </ButtonAria>;
};

export default Button;
