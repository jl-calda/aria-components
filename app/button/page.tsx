import React from "react";
import Button from "./Button";
import {FcGoogle} from 'react-icons/fc';
import ClientOnly from "../_utils/ClientOnly";

type Props = {};

export default async function ButtonPage(props: Props)  {
  return (
    <div className="grid grid-cols-2 gap-4 h-[100vh]">
      <div>Button</div>
      <div className="h-full flex items-center justify-center">
        <div className="flex-col flex gap-y-4 w-2/5">
            <FcGoogle />
            <ClientOnly>
                <Button label="Submit" />
            </ClientOnly>
        </div>
      </div>
    </div>
  );
};


