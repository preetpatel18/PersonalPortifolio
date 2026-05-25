import Navigation from "../components/NavigationBar";

function NoPage(){
    return(
        <div>
            <Navigation />
            <main className="page">   
                <div className="page-container page-header">
                    <p className="page-tag">404</p>
                    <h1 className="page-title">Page Not Found</h1>
                    <p className="page-subtitle">WRONG URL: Please Proceed back to the Home Page</p>
                </div>
            </main>
        </div>
    )
}

export default NoPage;
