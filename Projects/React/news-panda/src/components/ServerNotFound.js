import React from 'react'

const ServerNotFound = () => {
    return (
        <div className="container px-3 my-5" style={{ maxWidth: "60vw" }}>
            <div className="card text-white bg-dark ">
                <div className="card-header pl-4">#Server Not Found</div>
                <div className="card-body text-center">
                    <h5 className="card-title ">Opps...</h5>
                    <p className="card-text ">No News Available Right Now,</p>
                    <p className="card-text ">Please try after some time...</p>
                </div>
            </div>
        </div>
    )
}

export default ServerNotFound