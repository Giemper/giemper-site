import PageHeader from '../components/PageHeader';

const Who = () => {
    return (
        <div className="page">
            <div className="container">
                <PageHeader title="Who am I?" id="nav_who" />
                <div className="who-item">
                    <p>Without getting into a deeper existencial crisis, the easiest way I can start describing myself is</p>

                    <p>
                        I have a Computer Science Engineering degree from <b>CETYS University</b> in Mexicali, Mexico, and did
                        a half-year academic exchange in the <b>Ecolé Polytechnique</b> of Montreal, Canada.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Who;