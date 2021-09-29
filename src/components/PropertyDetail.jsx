import React from "react";
import axios from "axios";

import Header from "../Header";
import { ApiUrl } from "../services/api.js";

class PropertyDetail extends React.Component {

    state = {
        property: []
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        axios.post(ApiUrl, {

            "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
            "ServiceName": "AdminService",
            "WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
            "MethodHash": "com.admin.bean.Propiedades_getPropiedades_Number",
            "ArgumentList": [{ id }]

        }).then(rps => {
            console.log(rps);
            this.setState({
                properties: rps.data.DataBeanProperties.ObjectValue
            }

            )
        })
    }

    render() {
        return (

            <React.Fragment>
                <Header></Header>
                <br></br>
                <br></br>
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>

                                <th scope="col">Nombre</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Since</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">IDPropiedades</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.property.map((value, i) => {
                                return (
                                    <tr key={i} onClick={() => this.clickProperty(value.IDPropiedades)}>

                                        <td>{value.Nombre}</td>
                                        <td>{value.Valor}</td>
                                        <td>{value.Estado}</td>
                                        <td>{value.Since}</td>
                                        <td>{value.Descripcion}</td>
                                        <td>{value.IDPropiedades}</td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </React.Fragment>

        );
    }
}

export default PropertyDetail;