
export default function Card({children, className}) {
    return (
        <div className={`bg-white shadow-lg h-[200px] rounded-lg p-6 ${className} hover:shadow-md hover:shadow-orange-400 transition-all duration-700 ease-in-out`}>
            {children}
        </div>
    );

}