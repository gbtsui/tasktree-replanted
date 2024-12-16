// app/error.js
import { signIn } from 'next-auth/react';

export default function ErrorPage({ error }) {
    if (error) {
        switch(error.error) {
            case "USER_NOT_FOUND":
                return <div>Username not found. Please check your email and try again.</div>;
            case "INVALID_CREDENTIALS":
                return <div>Incorrect username or password. Please try again.</div>;
            default:
                return <div>An unexpected error occurred. Please try again later.</div>;
        }
    }

    return null;
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    const error = req.query.error;

    if (error) {
        res.setHeader(
            'statusCode',
            200
        );
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error }));
    }

    return { props: {} };
}
