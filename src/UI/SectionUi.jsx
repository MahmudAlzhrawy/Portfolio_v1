export default function SectionUi({children, className}) {
    return(
        <section className={`p-8  ${className}`}>
            {children}
        </section>
    )
}