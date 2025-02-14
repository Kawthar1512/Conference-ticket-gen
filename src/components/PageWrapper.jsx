import ProgressBar from "./ProgressBar"

const PageWrapper = ({ title, totalStep, currentStep, children, id }) => {
    return (
        <section className="page-wrapper">
            <header>
                <section>
                    <p>{title}</p>
                    <h3>Step {currentStep}/{totalStep}</h3>
                </section>
                <ProgressBar progress={`${(currentStep * 100) / totalStep}%`} />
            </header>
            <main id={id}>
                {children}
            </main>
        </section>
    )
}

export default PageWrapper