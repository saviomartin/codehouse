import React, {useEffect, useState} from 'react';

//components
import { RightBar, InfoBar, Header } from "../../components";

import Head from "next/head";
import { useRouter } from "next/router";

export default function User(props) {
    const router = useRouter(); // router
    const { name } = router.query;

    console.log(name);
    return (
      <div className="bg-image">
        <Head>
          <title>
            {name} - Code House
          </title>
        </Head>
        <Header {...props} />
      </div>
    )
}
