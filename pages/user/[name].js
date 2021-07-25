import React, {useEffect, useState} from 'react';

//components
import { RightBar, InfoBar, Header } from "../../components";

import Head from "next/head";
export default function User(props) {
    console.log(props);
    return (
      <div className="bg-image">
        <Head>
          <title>
            User - Code House
          </title>
        </Head>
        <Header {...props} />
      </div>
    )
}
