import React, { useEffect, useState } from 'react';
import axios from "axios";

const Crypto = () => {
    const [listCrypto, setListCrypto] = useState([])
    useEffect(() => {
        axios.get("/listCrypto.json", {

        })

            .then((res) => {
                console.log(res.data.data)
                setListCrypto(res.data.data)
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

    }, [])

    return (
        <div className="Crypto">
            <h1> Crypto-currency List </h1> <h6> Top 100 crypto-currencies </h6>
            <br /> <br /> <br /> <br /> <br />
            <div className="lisCrypto">
                {listCrypto.map((crypto, i) => (
                    <div key={i}>
                        <h3>
                            #{crypto.rank}
                        </h3>
                        <h2>
                            {crypto.name}          ({crypto.symbol})
                        </h2>

                        <br /> <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Crypto;