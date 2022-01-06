import Router from 'next/router';
import {useEffect} from "react";

export default function NotFound(props) {

  useEffect(() => {
    Router.replace('/');
  })

  return null;
}