import { NextPage } from "next";
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";



const ErrorPage: NextPage = props => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    } , [])

    return (
        <>
            <h1>Nothing to see here!</h1>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
        </>
    )
}

export default ErrorPage