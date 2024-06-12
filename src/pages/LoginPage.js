import React from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';

import Navbar from '../components/Navbar';

import { apiServer } from '../lib/Util';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {

    const { t } = useTranslation(['translation', 'login']);

    const [boardsData, setBoardsData] = React.useState([]);

    /**
    * Fetch boards from the API
    */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);

        axios.get(url)
            .then((res) => setBoardsData(res.data));

    }, []);

    return (
        <div>
            <Navbar theme="light" boardsData={boardsData} />


            <div className="container d-flex flex-column align-items-center w-50">

                <h3 className="text-center m-5" >Frello</h3>

                <p>{t("login:welcome")}</p>

                <div className="container d-flex mt-5 justify-content-center">

                    <Card className="">
                        <Card.Header className="card-header">
                            <h3>{t("login:login")}</h3>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <LoginForm />
                            </div>
                        </Card.Body>
                    </Card>

                </div>

            </div>
        </div>

    );
};

export default LoginPage;