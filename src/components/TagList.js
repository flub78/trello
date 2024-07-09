/**
 * This file is generated from a template with metadata extracted from the data model.
 * If modifications are required, it is important to consider if they should be done in the template
 * or in the generated file, in which case caution must be exerted to avoid overwritting.
 */

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import { apiServer } from '../lib/Util';
import Loading from './Loading';
import Cell from '../components/cg/Cell';
import PerPageSelector from '../components/PerPageSelector';
import PaginationBloc from './PaginationBloc';

/**
 * React component to display the list of tags
 */
const TagList = () => {

    const { t } = useTranslation(['translation', 'tags']);

    const [tagsData, setTagsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState('');

    /**
     * Fetch tags from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/tags';
        console.log('axios: fetching tags from ' + url);

        axios.get(url)
            .then((res) => setTagsData(res.data))
            .catch((error) => setErrorMessage(error.message + ': check the API server at ' + url));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a tag
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/tags/' + id;
        console.log('axios: deleting tag from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newTagsData = tagsData.filter((tag) => tag.name !== id);
                setTagsData(newTagsData);
                window.location.reload(false);

            });
    }


    /**
     * The lines for the table body
     */
    const tagsTable = tagsData.map((tag) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={tag.id} className="odd">
                <td>
                    <Link to={"/tags/edit/" + tag.id}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, tag.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td> <Cell value={tag.task_id} subtype="foreign_key" table="tags" field="task_id"> </Cell></td>
			<td> <Cell value={tag.task_color_id} subtype="foreign_key" table="tags" field="task_color_id"> </Cell></td>


            </tr >
        );
    });

    return (


        <Card >
            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("tags:tags")}</h3>
                <div>
                    <Link to="/tags/create" className="btn btn-sm btn-primary m-1">{t("tags:create_a_tag")}
                    </Link>

                    <Button variant="primary" size="sm" className="me-1">CSV</Button>
                    <Button variant="primary" size="sm">PDF</Button>
                </div>
            </Card.Header>

            {errorMessage.length > 0 && <div className="alert alert-danger">{errorMessage}</div>}

            <Card.Body>
                <Container fluid>
                    <Form className='d-flex justify-content-between align-items-center'>
                        <PerPageSelector />

                        <div className='d-flex'>
                            <Form.Control type="text" placeholder="Rechercher" className="mb-2" />
                        </div>
                    </Form>

                    <Table striped bordered hover size="sm" responsive>

                        <thead className="thead-dark">
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tags:task_id.label")}</th>
			                    <th align="left">{t("tags:task_color_id.label")}</th>

                            </tr>
                        </thead>

                        <tbody >
                            {tagsTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tags:task_id.label")}</th>
			                    <th align="left">{t("tags:task_color_id.label")}</th>

                            </tr>
                        </tfoot>
                    </Table>

                    <div className="d-flex justify-content-between m-1">
                        <div>
                            Affichage de l'élement 1 à 16 sur 16 éléments
                        </div>

                        <PaginationBloc />

                    </div>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default TagList;