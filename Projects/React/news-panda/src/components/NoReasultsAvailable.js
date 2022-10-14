import React from 'react'

const NoReasultsAvailable = ({query}) => {
    return (
        <div
            className="container px-3 my-5"
            style={{ maxWidth: "60vw" }}
        >
            <div className="card text-white bg-dark ">
                <div className="card-header pl-4">
                    You Searched - {query}
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title ">Opps...</h5>
                    <p className="card-text ">
                        No News available related to searched query,
                    </p>
                    <p className="card-text ">
                        Please try something else...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoReasultsAvailable
