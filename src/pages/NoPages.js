import Navigation from "../components/NavigationBar";

function NoPage(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <p>WRONG URL: Please Proceed back to the Home Page</p>
            </main>
        </div>
    )
}

export default NoPage;