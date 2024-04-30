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
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';

import { apiServer } from '../lib/Util';
import Loading from './Loading';

/**
 * React component to display the list of tag_colors
 */
const TagColorList = () => {

    const { t } = useTranslation(['translation', 'tag_colors']);

    const [tag_colorsData, setTagColorsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    /**
     * Fetch tag_colors from the REST API
     */
    React.useEffect(() => {
        const url = apiServer + '/tag_colors';
        console.log('axios: fetching tag_colors from ' + url);

        axios.get(url)
            .then((res) => setTagColorsData(res.data))
            .catch(error => console.error(error));
        setLoading(false);
    }, []);


    /**
     * Callback to delete a tag_color
     * @param {*} e 
     * @param {*} id 
     */
    const deleteElement = (e, id) => {
        e.preventDefault();

        console.log('deleteElement: id=' + id);

        const url = apiServer + '/tag-colors/' + id;
        console.log('axios: deleting tag_color from ' + url);

        axios.delete(url)
            .then((res) => {
                console.log('axios: response=' + JSON.stringify(res.data));
                const newTagColorsData = tag_colorsData.filter((tag_color) => tag_color.name !== id);
                setTagColorsData(newTagColorsData);
            });
    }


    /**
     * The lines for the table body
     */
    const tag_colorsTable = tag_colorsData?.map((tag_color) => {

        if (loading) return (
            <tr key="-1">
                <Loading />
            </tr>
        )

        return (
            <tr key={tag_color.id} className="odd">
                <td>
                    <Link to={"/tag-colors/edit/" + tag_color.name}
                        className="btn btn-sm btn-success"><i className="fa-regular fa-pen-to-square"></i></Link>
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteElement(e, tag_color.name)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </td>
                <td>{tag_color.name}</td>
                <td>{tag_color.color}</td>

            </tr >
        );
    });

    return (


        <Card >
            <Card.Header className="card-header d-flex justify-content-between">
                <h3>{t("tag_colors:tag_colors")}</h3>
                <div>
                    <Link to="/tag-colors/create" className="btn btn-sm btn-primary m-1">{t("tag_colors:create_a_tag_color")}
                    </Link>

                    <Button variant="primary" size="sm" className="me-1">CSV</Button>
                    <Button variant="primary" size="sm">PDF</Button>
                </div>
            </Card.Header>

            <Card.Body>
                <Container fluid>
                    <Form className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            Afficher
                            <Form.Select className="form-select-inline ms-1 me-1" size="sm" defaultValue="25">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </Form.Select>
                            éléments
                        </div>
                        <div className='d-flex'>
                            <Form.Control type="text" placeholder="Rechercher" className="mb-2" />
                        </div>
                    </Form>

                    <Table striped bordered hover size="sm" responsive>

                        <thead className="thead-dark">
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tag_colors:name")}</th>
                                <th align="left">{t("tag_colors:color")}</th>
                            </tr>
                        </thead>

                        <tbody >
                            {tag_colorsTable}
                        </tbody>

                        <tfoot>
                            <tr role="row">
                                <th align="right"></th>
                                <th align="center"></th>
                                <th align="left">{t("tag_colors:name")}</th>
                                <th align="left">{t("tag_colors:color")}</th>
                            </tr>
                        </tfoot>
                    </Table>

                    <div className="d-flex justify-content-between m-1">
                        <div>
                            Affichage de l'élement 1 à 16 sur 16 éléments
                        </div>

                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default TagColorList;